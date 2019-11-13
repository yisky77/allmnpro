var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'lotusAddressData']],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'node']],[1,'element']])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'button']])
Z([3,'__l'])
Z([[7],[3,'node']])
Z([3,'1'])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'a']])
Z([3,'__e'])
Z([[4],[[5],[[6],[[7],[3,'node']],[3,'classStr']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'wxParseATap']],[[4],[[5],[[5],[1,'$0']],[1,'$event']]]],[[4],[[5],[1,'node.attr']]]]]]]]]]])
Z([[6],[[6],[[7],[3,'node']],[3,'attr']],[3,'href']])
Z([[6],[[7],[3,'node']],[3,'styleStr']])
Z([3,'index'])
Z([3,'node'])
Z([[6],[[7],[3,'node']],[3,'nodes']])
Z(z[11])
Z(z[2])
Z(z[3])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'li']])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[11])
Z(z[2])
Z(z[3])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'table']])
Z(z[2])
Z(z[7])
Z(z[3])
Z(z[10])
Z([3,'4'])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'br']])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'video']])
Z(z[2])
Z(z[3])
Z([3,'5'])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'audio']])
Z(z[2])
Z(z[3])
Z([3,'6'])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'tag']],[1,'img']])
Z(z[2])
Z(z[3])
Z(z[10])
Z([3,'7'])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[11])
Z(z[2])
Z(z[3])
Z([[2,'+'],[1,'8-'],[[7],[3,'index']]])
Z([[2,'=='],[[6],[[7],[3,'node']],[3,'node']],[1,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'node'])
Z([[7],[3,'nodes']])
Z(z[0])
Z([[2,'!'],[[7],[3,'loading']]])
Z([3,'__l'])
Z([[7],[3,'node']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'mix-list-cell']],[[7],[3,'border']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'eventClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cell-hover'])
Z([1,50])
Z([[7],[3,'icon']])
Z([[7],[3,'tips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content b-t'])
Z([[2,'>'],[[6],[[7],[3,'addressList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z(z[2])
Z([3,'__e'])
Z([3,'list b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'isDefault']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^choseVal']],[[4],[[5],[[4],[[5],[1,'choseValue']]]]]]]]])
Z([[7],[3,'lotusAddressData']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__l'])
Z([[7],[3,'topiccontent']])
Z([3,'1'])
Z([[2,'>'],[[6],[[7],[3,'topicGoods']],[3,'length']],[1,0]])
Z([3,'comments'])
Z([[2,'>'],[[6],[[7],[3,'commentList']],[3,'length']],[1,0]])
Z([[2,'>'],[[7],[3,'commentCount']],[1,5]])
Z([[2,'<='],[[6],[[7],[3,'commentList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'<='],[[6],[[7],[3,'cartList']],[3,'length']],[1,0]])
Z([3,'empty'])
Z([[7],[3,'hasLogin']])
Z(z[3])
Z([[2,'>'],[[6],[[7],[3,'cartList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!=='],[[7],[3,'currentImage']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([1,580])
Z([3,'share'])
Z([[7],[3,'shareList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-scroll-content'])
Z([[2,'>'],[[6],[[7],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'orderList']])
Z(z[2])
Z([3,'__e'])
Z([3,'order-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'orderList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'i-top b-b'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,9]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-scroll-content'])
Z([[2,'>'],[[6],[[7],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'orderList']])
Z(z[2])
Z([3,'__e'])
Z([3,'order-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'orderList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'i-top b-b'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,9]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'content']],[3,'OriginalTxt']])
Z([[6],[[7],[3,'content']],[3,'PriceTxt']])
Z([[6],[[7],[3,'content']],[3,'QrSrc']])
Z([[6],[[7],[3,'content']],[3,'Referrer']])
Z([[6],[[7],[3,'content']],[3,'Title']])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^save']],[[4],[[5],[[4],[[5],[1,'save']]]]]]]]])
Z([[6],[[7],[3,'content']],[3,'imgSrc']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fxcontent'])
Z([3,'fffcolor clear'])
Z([[7],[3,'showtab3']])
Z([[7],[3,'showtab2']])
Z([[7],[3,'showtab4']])
Z([[2,'=='],[[7],[3,'inputid']],[1,2]])
Z([[2,'=='],[[7],[3,'inputid']],[1,3]])
Z([[2,'=='],[[7],[3,'inputid']],[1,4]])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-scroll-content'])
Z([[2,'>'],[[6],[[7],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'orderList']])
Z(z[2])
Z([3,'__e'])
Z([3,'order-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'orderList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'i-top b-b'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,9]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'>'],[[6],[[7],[3,'carouselList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'brandList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'groupons']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'topicList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'newGoodsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'open'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'address-section'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!=='],[[6],[[7],[3,'checkedAddress']],[3,'id']],[1,0]])
Z([3,'yt-list-cell b-b'])
Z([[2,'=='],[[6],[[7],[3,'goods']],[3,'availableCouponLength']],[1,0]])
Z(z[5])
Z([[2,'>'],[[6],[[7],[3,'goods']],[3,'availableCouponLength']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'goods']],[3,'grouponPrice']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-scroll-content'])
Z([[2,'>'],[[6],[[7],[3,'orderList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'orderList']])
Z(z[2])
Z([3,'__e'])
Z([3,'order-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'orderList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'i-top b-b'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,9]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,4]])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'r'])
Z([[6],[[7],[3,'handleOption']],[3,'cancel']])
Z([[6],[[7],[3,'handleOption']],[3,'pay']])
Z([[6],[[7],[3,'handleOption']],[3,'confirm']])
Z([[6],[[7],[3,'handleOption']],[3,'delete']])
Z([[6],[[7],[3,'handleOption']],[3,'refund']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'orderGoods']])
Z(z[7])
Z([3,'info'])
Z([[2,'&&'],[[6],[[7],[3,'handleOption']],[3,'comment']],[[2,'=='],[[6],[[7],[3,'item']],[3,'comment']],[1,0]]])
Z([[6],[[7],[3,'handleOption']],[3,'rebuy']])
Z(z[4])
Z([3,'__e'])
Z([3,'order-express'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'expandDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[7])
Z([3,'iitem'])
Z([[6],[[7],[3,'expressInfo']],[3,'Traces']])
Z(z[7])
Z([[7],[3,'flag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[2,'!'],[[7],[3,'loadModal']]],[[2,'<='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[7],[3,'brand']],[3,'name']])
Z([[2,'>'],[[6],[[6],[[7],[3,'comment']],[3,'data']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'responsdata']],[3,'attribute']],[3,'length']],[1,0]])
Z([3,'__l'])
Z([[7],[3,'descontent']])
Z([3,'1'])
Z([3,'__e'])
Z([3,'p-b-btn rel'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'navtocart']]]]]]]]])
Z([[2,'>'],[[7],[3,'goodsnum']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'groupon']],[3,'length']],[1,0]])
Z(z[4])
Z([3,'vue-ref'])
Z([1,580])
Z([3,'share'])
Z([[7],[3,'goods']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[6],[[7],[3,'content']],[3,'OriginalTxt']])
Z([[6],[[7],[3,'content']],[3,'PriceTxt']])
Z([[6],[[7],[3,'content']],[3,'QrSrc']])
Z([[6],[[7],[3,'content']],[3,'Referrer']])
Z([[6],[[7],[3,'content']],[3,'Title']])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^save']],[[4],[[5],[[4],[[5],[1,'save']]]]]]]]])
Z([[6],[[7],[3,'content']],[3,'imgSrc']])
Z([3,'1'])
Z([[7],[3,'background']])
Z(z[6])
Z(z[7])
Z([[7],[3,'cid']])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'qrR']]]]]]]]])
Z([3,'qrcode'])
Z([[7],[3,'foreground']])
Z([[7],[3,'icon']])
Z([[7],[3,'iconsize']])
Z([[7],[3,'loadMake']])
Z([[7],[3,'loadingText']])
Z([[7],[3,'lv']])
Z([[7],[3,'onval']])
Z([[7],[3,'pdground']])
Z([[7],[3,'showLoading']])
Z([[7],[3,'size']])
Z([[7],[3,'unit']])
Z([[7],[3,'usingComponents']])
Z([[7],[3,'val']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[6],[[7],[3,'brand']],[3,'name']])
Z([[2,'>'],[[6],[[6],[[7],[3,'comment']],[3,'data']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'responsdata']],[3,'attribute']],[3,'length']],[1,0]])
Z([3,'__e'])
Z([3,'p-b-btn rel'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'navtocart']]]]]]]]])
Z([[2,'>'],[[7],[3,'goodsnum']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'groupon']],[3,'length']],[1,0]])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([1,580])
Z([3,'share'])
Z([[7],[3,'sharedata']])
Z([3,'1'])
Z(z[9])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'<'],[[6],[[7],[3,'files']],[3,'length']],[1,5]])
Z([[2,'>'],[[6],[[7],[3,'mobile']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z([3,'cover-container'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'coverTransform']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[7],[3,'coverTransition']]],[1,';']]])
Z([3,'order-section'])
Z(z[0])
Z([3,'order-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/order/order?state\x3d1']]]]]]]]]]])
Z([3,'common-hover'])
Z([1,50])
Z([[2,'>'],[[6],[[7],[3,'user']],[3,'unpaid']],[1,0]])
Z(z[0])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/order/order?state\x3d3']]]]]]]]]]])
Z(z[10])
Z(z[11])
Z([[2,'>'],[[6],[[7],[3,'user']],[3,'unrecv']],[1,0]])
Z(z[0])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/order/order?state\x3d4']]]]]]]]]]])
Z(z[10])
Z(z[11])
Z([[2,'>'],[[6],[[7],[3,'user']],[3,'uncomment']],[1,0]])
Z([3,'history-section icon'])
Z([[2,'>'],[[6],[[7],[3,'footerlistdata']],[3,'length']],[1,0]])
Z([3,'__l'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/address/address']]]]]]]]]]])
Z([3,'icon-dizhi'])
Z([3,'#5fcda2'])
Z([3,'收货地址'])
Z([3,'1'])
Z(z[27])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/user/help']]]]]]]]]]])
Z([3,'icon-bangzhu'])
Z(z[31])
Z([3,'帮助中心'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/Winglau14-lotusAddress/Winglau14-lotusAddress.wxml','./components/auth.wxml','./components/gaoyia-parse/components/wxParseAudio.wxml','./components/gaoyia-parse/components/wxParseImg.wxml','./components/gaoyia-parse/components/wxParseTable.wxml','./components/gaoyia-parse/components/wxParseTemplate0.wxml','./components/gaoyia-parse/components/wxParseVideo.wxml','./components/gaoyia-parse/parse.wxml','./components/loading.wxml','./components/mix-list-cell.wxml','./components/tki-qrcode/tki-qrcode.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-number-box.wxml','./components/wm-poster/wm-poster.wxml','./pages/address/address.wxml','./pages/address/addressManage.wxml','./pages/brandDetail/brand.wxml','./pages/brandDetail/brandDetail.wxml','./pages/brandDetail/comment.wxml','./pages/brandDetail/groupbuy.wxml','./pages/brandDetail/topicDetail.wxml','./pages/brandDetail/topiclist.wxml','./pages/cart/cart.wxml','./pages/category/category.wxml','./pages/category/hot.wxml','./pages/commentlist/index.wxml','./pages/detail/detail.wxml','./pages/fx/apply.wxml','./pages/fx/index.wxml','./pages/fx/myteam.wxml','./pages/fx/order.wxml','./pages/fx/qr.wxml','./pages/fx/withdraw.wxml','./pages/fx/withdrawlist.wxml','./pages/index/index.wxml','./pages/money/money.wxml','./pages/money/pay.wxml','./pages/money/paySuccess.wxml','./pages/mycoloect/mycoloect.wxml','./pages/mycoupon/couponlist.wxml','./pages/mycoupon/mycoupon.wxml','./pages/mystore/mystore.wxml','./pages/notice/notice.wxml','./pages/order/comment.wxml','./pages/order/createOrder.wxml','./pages/order/order.wxml','./pages/order/orderDetail.wxml','./pages/product/list.wxml','./pages/product/product.wxml','./pages/product/searchlist.wxml','./pages/product/share.wxml','./pages/product/shareqrcode.wxml','./pages/public/login.wxml','./pages/public/reg.wxml','./pages/set/set.wxml','./pages/tuiguang/index.wxml','./pages/user/feedback.wxml','./pages/user/help.wxml','./pages/user/user.wxml','./pages/userinfo/userinfo.wxml','./pages/webview/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oH=_v()
_(r,oH)
if(_oz(z,0,e,s,gg)){oH.wxVkey=1
var cI=_v()
_(oH,cI)
if(_oz(z,1,e,s,gg)){cI.wxVkey=1
var oJ=_mz(z,'weixin-parse-template',['bind:__l',2,'node',1,'vueId',2],[],e,s,gg)
_(cI,oJ)
}
else{cI.wxVkey=2
var lK=_v()
_(cI,lK)
if(_oz(z,5,e,s,gg)){lK.wxVkey=1
var aL=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2,'data-href',3,'style',4],[],e,s,gg)
var tM=_v()
_(aL,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_mz(z,'weixin-parse-template',['bind:__l',15,'node',1,'vueId',2],[],oP,bO,gg)
_(xQ,fS)
return xQ
}
tM.wxXCkey=4
_2z(z,13,eN,e,s,gg,tM,'node','index','index')
_(lK,aL)
}
else{lK.wxVkey=2
var cT=_v()
_(lK,cT)
if(_oz(z,18,e,s,gg)){cT.wxVkey=1
var hU=_v()
_(cT,hU)
var oV=function(oX,cW,lY,gg){
var t1=_mz(z,'weixin-parse-template',['bind:__l',23,'node',1,'vueId',2],[],oX,cW,gg)
_(lY,t1)
return lY
}
hU.wxXCkey=4
_2z(z,21,oV,e,s,gg,hU,'node','index','index')
}
else{cT.wxVkey=2
var e2=_v()
_(cT,e2)
if(_oz(z,26,e,s,gg)){e2.wxVkey=1
var b3=_mz(z,'weixin-parse-table',['bind:__l',27,'class',1,'node',2,'style',3,'vueId',4],[],e,s,gg)
_(e2,b3)
}
else{e2.wxVkey=2
var o4=_v()
_(e2,o4)
if(_oz(z,32,e,s,gg)){o4.wxVkey=1
}
else{o4.wxVkey=2
var x5=_v()
_(o4,x5)
if(_oz(z,33,e,s,gg)){x5.wxVkey=1
var o6=_mz(z,'weixin-parse-video',['bind:__l',34,'node',1,'vueId',2],[],e,s,gg)
_(x5,o6)
}
else{x5.wxVkey=2
var f7=_v()
_(x5,f7)
if(_oz(z,37,e,s,gg)){f7.wxVkey=1
var c8=_mz(z,'weixin-parse-audio',['bind:__l',38,'node',1,'vueId',2],[],e,s,gg)
_(f7,c8)
}
else{f7.wxVkey=2
var h9=_v()
_(f7,h9)
if(_oz(z,41,e,s,gg)){h9.wxVkey=1
var o0=_mz(z,'weixin-parse-img',['bind:__l',42,'node',1,'style',2,'vueId',3],[],e,s,gg)
_(h9,o0)
}
else{h9.wxVkey=2
var cAB=_v()
_(h9,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_mz(z,'weixin-parse-template',['bind:__l',50,'node',1,'vueId',2],[],aDB,lCB,gg)
_(tEB,bGB)
return tEB
}
cAB.wxXCkey=4
_2z(z,48,oBB,e,s,gg,cAB,'node','index','index')
}
h9.wxXCkey=1
h9.wxXCkey=3
h9.wxXCkey=3
}
f7.wxXCkey=1
f7.wxXCkey=3
f7.wxXCkey=3
}
x5.wxXCkey=1
x5.wxXCkey=3
x5.wxXCkey=3
}
o4.wxXCkey=1
o4.wxXCkey=3
}
e2.wxXCkey=1
e2.wxXCkey=3
e2.wxXCkey=3
}
cT.wxXCkey=1
cT.wxXCkey=3
cT.wxXCkey=3
}
lK.wxXCkey=1
lK.wxXCkey=3
lK.wxXCkey=3
}
cI.wxXCkey=1
cI.wxXCkey=3
cI.wxXCkey=3
}
else{oH.wxVkey=2
var oHB=_v()
_(oH,oHB)
if(_oz(z,53,e,s,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
}
oH.wxXCkey=1
oH.wxXCkey=3
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var fKB=_v()
_(r,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
if(_oz(z,4,oNB,hMB,gg)){lQB.wxVkey=1
var aRB=_mz(z,'weixin-parse-template',['bind:__l',5,'node',1,'vueId',2],[],oNB,hMB,gg)
_(lQB,aRB)
}
lQB.wxXCkey=1
lQB.wxXCkey=3
return cOB
}
fKB.wxXCkey=4
_2z(z,2,cLB,e,s,gg,fKB,'node','index','index')
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bUB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2,'hoverStayTime',3],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,5,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(bUB,xWB)
if(_oz(z,6,e,s,gg)){xWB.wxVkey=1
}
oVB.wxXCkey=1
xWB.wxXCkey=1
_(r,bUB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var c3B=_n('view')
_rz(z,c3B,'class',0,e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,1,e,s,gg)){o4B.wxVkey=1
var l5B=_v()
_(o4B,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e8B,t7B,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,9,e8B,t7B,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
_(b9B,xAC)
return b9B
}
l5B.wxXCkey=2
_2z(z,4,a6B,e,s,gg,l5B,'item','index','index')
}
else{o4B.wxVkey=2
}
o4B.wxXCkey=1
_(r,c3B)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var cDC=_mz(z,'lotus-address',['bind:__l',0,'bind:choseVal',1,'data-event-opts',1,'lotusAddressData',2,'vueId',3],[],e,s,gg)
_(r,cDC)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var aJC=_n('scroll-view')
_rz(z,aJC,'class',0,e,s,gg)
var eLC=_mz(z,'u-parse',['bind:__l',1,'content',1,'vueId',2],[],e,s,gg)
_(aJC,eLC)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,4,e,s,gg)){tKC.wxVkey=1
}
var bMC=_n('scroll-view')
_rz(z,bMC,'class',5,e,s,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,6,e,s,gg)){oNC.wxVkey=1
var oPC=_v()
_(oNC,oPC)
if(_oz(z,7,e,s,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,8,e,s,gg)){xOC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
_(aJC,bMC)
tKC.wxXCkey=1
_(r,aJC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var hSC=_n('view')
_rz(z,hSC,'class',0,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,1,e,s,gg)){oTC.wxVkey=1
var cUC=_n('view')
_rz(z,cUC,'class',2,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,3,e,s,gg)){oVC.wxVkey=1
var lWC=_v()
_(oVC,lWC)
if(_oz(z,4,e,s,gg)){lWC.wxVkey=1
}
lWC.wxXCkey=1
}
else{oVC.wxVkey=2
}
oVC.wxXCkey=1
_(oTC,cUC)
}
else{oTC.wxVkey=2
var aXC=_v()
_(oTC,aXC)
if(_oz(z,5,e,s,gg)){aXC.wxVkey=1
}
aXC.wxXCkey=1
}
oTC.wxXCkey=1
_(r,hSC)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var eZC=_v()
_(r,eZC)
if(_oz(z,0,e,s,gg)){eZC.wxVkey=1
}
eZC.wxXCkey=1
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var o4C=_mz(z,'share',['bind:__l',0,'class',1,'contentHeight',1,'data-ref',2,'shareList',3,'vueId',4],[],e,s,gg)
_(r,o4C)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var o8C=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var c9C=_v()
_(o8C,c9C)
if(_oz(z,1,e,s,gg)){c9C.wxVkey=1
var o0C=_v()
_(c9C,o0C)
var lAD=function(tCD,aBD,eDD,gg){
var oFD=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],tCD,aBD,gg)
var xGD=_n('view')
_rz(z,xGD,'class',9,tCD,aBD,gg)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,10,tCD,aBD,gg)){oHD.wxVkey=1
}
var fID=_v()
_(xGD,fID)
if(_oz(z,11,tCD,aBD,gg)){fID.wxVkey=1
}
oHD.wxXCkey=1
fID.wxXCkey=1
_(oFD,xGD)
_(eDD,oFD)
return eDD
}
o0C.wxXCkey=2
_2z(z,4,lAD,e,s,gg,o0C,'item','index','index')
}
else{c9C.wxVkey=2
}
c9C.wxXCkey=1
_(r,o8C)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var hKD=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,1,e,s,gg)){oLD.wxVkey=1
var cMD=_v()
_(oLD,cMD)
var oND=function(aPD,lOD,tQD,gg){
var bSD=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],aPD,lOD,gg)
var oTD=_n('view')
_rz(z,oTD,'class',9,aPD,lOD,gg)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,10,aPD,lOD,gg)){xUD.wxVkey=1
}
var oVD=_v()
_(oTD,oVD)
if(_oz(z,11,aPD,lOD,gg)){oVD.wxVkey=1
}
xUD.wxXCkey=1
oVD.wxXCkey=1
_(bSD,oTD)
_(tQD,bSD)
return tQD
}
cMD.wxXCkey=2
_2z(z,4,oND,e,s,gg,cMD,'item','index','index')
}
else{oLD.wxVkey=2
}
oLD.wxXCkey=1
_(r,hKD)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var cXD=_mz(z,'wm-poster',['OriginalTxt',0,'PriceTxt',1,'QrSrc',1,'Referrer',2,'Title',3,'bind:__l',4,'bind:save',5,'data-event-opts',6,'imgSrc',7,'vueId',8],[],e,s,gg)
_(r,cXD)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oZD=_n('view')
_rz(z,oZD,'class',0,e,s,gg)
var a4D=_n('view')
_rz(z,a4D,'class',1,e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,2,e,s,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,3,e,s,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(a4D,b7D)
if(_oz(z,4,e,s,gg)){b7D.wxVkey=1
}
t5D.wxXCkey=1
e6D.wxXCkey=1
b7D.wxXCkey=1
_(oZD,a4D)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,5,e,s,gg)){c1D.wxVkey=1
}
var o2D=_v()
_(oZD,o2D)
if(_oz(z,6,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(oZD,l3D)
if(_oz(z,7,e,s,gg)){l3D.wxVkey=1
var o8D=_v()
_(l3D,o8D)
if(_oz(z,8,e,s,gg)){o8D.wxVkey=1
}
o8D.wxXCkey=1
}
c1D.wxXCkey=1
o2D.wxXCkey=1
l3D.wxXCkey=1
_(r,oZD)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var o0D=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var fAE=_v()
_(o0D,fAE)
if(_oz(z,1,e,s,gg)){fAE.wxVkey=1
var cBE=_v()
_(fAE,cBE)
var hCE=function(cEE,oDE,oFE,gg){
var aHE=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],cEE,oDE,gg)
var tIE=_n('view')
_rz(z,tIE,'class',9,cEE,oDE,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,10,cEE,oDE,gg)){eJE.wxVkey=1
}
var bKE=_v()
_(tIE,bKE)
if(_oz(z,11,cEE,oDE,gg)){bKE.wxVkey=1
}
eJE.wxXCkey=1
bKE.wxXCkey=1
_(aHE,tIE)
_(oFE,aHE)
return oFE
}
cBE.wxXCkey=2
_2z(z,4,hCE,e,s,gg,cBE,'item','index','index')
}
else{fAE.wxVkey=2
}
fAE.wxXCkey=1
_(r,o0D)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var xME=_n('view')
_rz(z,xME,'class',0,e,s,gg)
var oNE=_v()
_(xME,oNE)
if(_oz(z,1,e,s,gg)){oNE.wxVkey=1
}
var fOE=_v()
_(xME,fOE)
if(_oz(z,2,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(xME,cPE)
if(_oz(z,3,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(xME,hQE)
if(_oz(z,4,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(xME,oRE)
if(_oz(z,5,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(xME,cSE)
if(_oz(z,6,e,s,gg)){cSE.wxVkey=1
}
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
hQE.wxXCkey=1
oRE.wxXCkey=1
cSE.wxXCkey=1
_(r,xME)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var f3E=_mz(z,'auth',['bind:__l',0,'class',1,'data-ref',1,'vueId',2],[],e,s,gg)
_(r,f3E)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var h5E=_n('view')
var c7E=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o8E=_v()
_(c7E,o8E)
if(_oz(z,3,e,s,gg)){o8E.wxVkey=1
}
o8E.wxXCkey=1
_(h5E,c7E)
var l9E=_n('view')
_rz(z,l9E,'class',4,e,s,gg)
var a0E=_v()
_(l9E,a0E)
if(_oz(z,5,e,s,gg)){a0E.wxVkey=1
}
var tAF=_v()
_(l9E,tAF)
if(_oz(z,6,e,s,gg)){tAF.wxVkey=1
}
var eBF=_v()
_(l9E,eBF)
if(_oz(z,7,e,s,gg)){eBF.wxVkey=1
}
a0E.wxXCkey=1
tAF.wxXCkey=1
eBF.wxXCkey=1
_(h5E,l9E)
var o6E=_v()
_(h5E,o6E)
if(_oz(z,8,e,s,gg)){o6E.wxVkey=1
}
o6E.wxXCkey=1
_(r,h5E)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var oDF=_mz(z,'scroll-view',['scrollY',-1,'class',0],[],e,s,gg)
var xEF=_v()
_(oDF,xEF)
if(_oz(z,1,e,s,gg)){xEF.wxVkey=1
var oFF=_v()
_(xEF,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],hIF,cHF,gg)
var lMF=_n('view')
_rz(z,lMF,'class',9,hIF,cHF,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,10,hIF,cHF,gg)){aNF.wxVkey=1
}
var tOF=_v()
_(lMF,tOF)
if(_oz(z,11,hIF,cHF,gg)){tOF.wxVkey=1
}
aNF.wxXCkey=1
tOF.wxXCkey=1
_(oLF,lMF)
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=2
_2z(z,4,fGF,e,s,gg,oFF,'item','index','index')
}
else{xEF.wxVkey=2
}
xEF.wxXCkey=1
_(r,oDF)
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var bQF=_n('view')
_rz(z,bQF,'class',0,e,s,gg)
var xSF=_n('view')
_rz(z,xSF,'class',1,e,s,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,2,e,s,gg)){oTF.wxVkey=1
}
var fUF=_v()
_(xSF,fUF)
if(_oz(z,3,e,s,gg)){fUF.wxVkey=1
}
var cVF=_v()
_(xSF,cVF)
if(_oz(z,4,e,s,gg)){cVF.wxVkey=1
}
var hWF=_v()
_(xSF,hWF)
if(_oz(z,5,e,s,gg)){hWF.wxVkey=1
}
var oXF=_v()
_(xSF,oXF)
if(_oz(z,6,e,s,gg)){oXF.wxVkey=1
}
oTF.wxXCkey=1
fUF.wxXCkey=1
cVF.wxXCkey=1
hWF.wxXCkey=1
oXF.wxXCkey=1
_(bQF,xSF)
var cYF=_v()
_(bQF,cYF)
var oZF=function(a2F,l1F,t3F,gg){
var b5F=_n('view')
_rz(z,b5F,'class',11,a2F,l1F,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,12,a2F,l1F,gg)){o6F.wxVkey=1
}
var x7F=_v()
_(b5F,x7F)
if(_oz(z,13,a2F,l1F,gg)){x7F.wxVkey=1
}
o6F.wxXCkey=1
x7F.wxXCkey=1
_(t3F,b5F)
return t3F
}
cYF.wxXCkey=2
_2z(z,9,oZF,e,s,gg,cYF,'item','index','index')
var oRF=_v()
_(bQF,oRF)
if(_oz(z,14,e,s,gg)){oRF.wxVkey=1
var o8F=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var f9F=_v()
_(o8F,f9F)
var c0F=function(oBG,hAG,cCG,gg){
var lEG=_v()
_(cCG,lEG)
if(_oz(z,22,oBG,hAG,gg)){lEG.wxVkey=1
}
lEG.wxXCkey=1
return cCG
}
f9F.wxXCkey=2
_2z(z,20,c0F,e,s,gg,f9F,'iitem','index','index')
_(oRF,o8F)
}
oRF.wxXCkey=1
_(r,bQF)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var tGG=_v()
_(r,tGG)
if(_oz(z,0,e,s,gg)){tGG.wxVkey=1
}
tGG.wxXCkey=1
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var bIG=_n('view')
_rz(z,bIG,'class',0,e,s,gg)
var oJG=_v()
_(bIG,oJG)
if(_oz(z,1,e,s,gg)){oJG.wxVkey=1
}
var xKG=_v()
_(bIG,xKG)
if(_oz(z,2,e,s,gg)){xKG.wxVkey=1
}
var oLG=_v()
_(bIG,oLG)
if(_oz(z,3,e,s,gg)){oLG.wxVkey=1
}
var cNG=_mz(z,'u-parse',['bind:__l',4,'content',1,'vueId',2],[],e,s,gg)
_(bIG,cNG)
var hOG=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var oPG=_v()
_(hOG,oPG)
if(_oz(z,10,e,s,gg)){oPG.wxVkey=1
}
oPG.wxXCkey=1
_(bIG,hOG)
var fMG=_v()
_(bIG,fMG)
if(_oz(z,11,e,s,gg)){fMG.wxVkey=1
}
var cQG=_mz(z,'sharepage',['bind:__l',12,'class',1,'contentHeight',2,'data-ref',3,'sharedata',4,'vueId',5],[],e,s,gg)
_(bIG,cQG)
oJG.wxXCkey=1
xKG.wxXCkey=1
oLG.wxXCkey=1
fMG.wxXCkey=1
_(r,bIG)
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var aTG=_v()
_(r,aTG)
if(_oz(z,0,e,s,gg)){aTG.wxVkey=1
}
aTG.wxXCkey=1
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var eVG=_n('view')
_rz(z,eVG,'class',0,e,s,gg)
var bWG=_mz(z,'wm-poster',['OriginalTxt',1,'PriceTxt',1,'QrSrc',2,'Referrer',3,'Title',4,'bind:__l',5,'bind:save',6,'data-event-opts',7,'imgSrc',8,'vueId',9],[],e,s,gg)
_(eVG,bWG)
var oXG=_mz(z,'tki-qrcode',['background',11,'bind:__l',1,'bind:result',2,'cid',3,'class',4,'data-event-opts',5,'data-ref',6,'foreground',7,'icon',8,'iconSize',9,'loadMake',10,'loadingText',11,'lv',12,'onval',13,'pdground',14,'showLoading',15,'size',16,'unit',17,'usingComponents',18,'val',19,'vueId',20],[],e,s,gg)
_(eVG,oXG)
_(r,eVG)
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var h3G=_n('view')
_rz(z,h3G,'class',0,e,s,gg)
var o4G=_v()
_(h3G,o4G)
if(_oz(z,1,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(h3G,c5G)
if(_oz(z,2,e,s,gg)){c5G.wxVkey=1
}
var o6G=_v()
_(h3G,o6G)
if(_oz(z,3,e,s,gg)){o6G.wxVkey=1
}
var a8G=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var t9G=_v()
_(a8G,t9G)
if(_oz(z,7,e,s,gg)){t9G.wxVkey=1
}
t9G.wxXCkey=1
_(h3G,a8G)
var l7G=_v()
_(h3G,l7G)
if(_oz(z,8,e,s,gg)){l7G.wxVkey=1
}
var e0G=_mz(z,'share',['bind:__l',9,'class',1,'contentHeight',2,'data-ref',3,'sharedata',4,'vueId',5],[],e,s,gg)
_(h3G,e0G)
var bAH=_mz(z,'auth',['bind:__l',15,'vueId',1],[],e,s,gg)
_(h3G,bAH)
o4G.wxXCkey=1
c5G.wxXCkey=1
o6G.wxXCkey=1
l7G.wxXCkey=1
_(r,h3G)
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var xCH=_n('view')
_rz(z,xCH,'class',0,e,s,gg)
var oDH=_v()
_(xCH,oDH)
if(_oz(z,1,e,s,gg)){oDH.wxVkey=1
}
var fEH=_v()
_(xCH,fEH)
if(_oz(z,2,e,s,gg)){fEH.wxVkey=1
}
oDH.wxXCkey=1
fEH.wxXCkey=1
_(r,xCH)
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var oHH=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'data-event-opts',3,'style',4],[],e,s,gg)
var cIH=_n('view')
_rz(z,cIH,'class',6,e,s,gg)
var oJH=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var lKH=_v()
_(oJH,lKH)
if(_oz(z,12,e,s,gg)){lKH.wxVkey=1
}
lKH.wxXCkey=1
_(cIH,oJH)
var aLH=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var tMH=_v()
_(aLH,tMH)
if(_oz(z,18,e,s,gg)){tMH.wxVkey=1
}
tMH.wxXCkey=1
_(cIH,aLH)
var eNH=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var bOH=_v()
_(eNH,bOH)
if(_oz(z,24,e,s,gg)){bOH.wxVkey=1
}
bOH.wxXCkey=1
_(cIH,eNH)
_(oHH,cIH)
var oPH=_n('view')
_rz(z,oPH,'class',25,e,s,gg)
var xQH=_v()
_(oPH,xQH)
if(_oz(z,26,e,s,gg)){xQH.wxVkey=1
}
var oRH=_mz(z,'list-cell',['bind:__l',27,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(oPH,oRH)
var fSH=_mz(z,'list-cell',['bind:__l',34,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(oPH,fSH)
xQH.wxXCkey=1
_(oHH,oPH)
_(r,oHH)
return r
}
e_[x[58]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
return r
}
e_[x[59]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
return r
}
e_[x[60]]={f:m60,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/product/product","pages/product/searchlist","pages/product/shareqrcode","pages/set/set","pages/webview/index","pages/commentlist/index","pages/user/help","pages/fx/apply","pages/fx/index","pages/fx/myteam","pages/fx/qr","pages/fx/withdrawlist","pages/fx/order","pages/fx/withdraw","pages/user/feedback","pages/order/orderDetail","pages/category/hot","pages/brandDetail/topiclist","pages/brandDetail/comment","pages/brandDetail/topicDetail","pages/brandDetail/groupbuy","pages/brandDetail/brand","pages/brandDetail/brandDetail","pages/order/comment","pages/userinfo/userinfo","pages/cart/cart","pages/public/login","pages/public/reg","pages/user/user","pages/detail/detail","pages/order/order","pages/money/money","pages/mystore/mystore","pages/mycoloect/mycoloect","pages/tuiguang/index","pages/mycoupon/couponlist","pages/mycoupon/mycoupon","pages/order/createOrder","pages/address/address","pages/address/addressManage","pages/money/pay","pages/money/paySuccess","pages/notice/notice","pages/category/category","pages/product/list"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/category/category","iconPath":"static/tab-cate.png","selectedIconPath":"static/tab-cate-current.png","text":"分类"},{"pagePath":"pages/cart/cart","iconPath":"static/tab-cart.png","selectedIconPath":"static/tab-cart-current.png","text":"购物车"},{"pagePath":"pages/user/user","iconPath":"static/tab-my.png","selectedIconPath":"static/tab-my-current.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"家居热卖","compilerVersion":"2.3.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/auth.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/auth.wxml']=$gwx('./components/auth.wxml');

__wxAppCode__['components/gaoyia-parse/components/wxParseAudio.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/gaoyia-parse/components/wxParseAudio.wxml']=$gwx('./components/gaoyia-parse/components/wxParseAudio.wxml');

__wxAppCode__['components/gaoyia-parse/components/wxParseImg.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/gaoyia-parse/components/wxParseImg.wxml']=$gwx('./components/gaoyia-parse/components/wxParseImg.wxml');

__wxAppCode__['components/gaoyia-parse/components/wxParseTable.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/gaoyia-parse/components/wxParseTable.wxml']=$gwx('./components/gaoyia-parse/components/wxParseTable.wxml');

__wxAppCode__['components/gaoyia-parse/components/wxParseTemplate0.json']={"usingComponents":{"weixin-parse-template":"/components/gaoyia-parse/components/wxParseTemplate0","weixin-parse-img":"/components/gaoyia-parse/components/wxParseImg","weixin-parse-video":"/components/gaoyia-parse/components/wxParseVideo","weixin-parse-audio":"/components/gaoyia-parse/components/wxParseAudio","weixin-parse-table":"/components/gaoyia-parse/components/wxParseTable"},"component":true};
__wxAppCode__['components/gaoyia-parse/components/wxParseTemplate0.wxml']=$gwx('./components/gaoyia-parse/components/wxParseTemplate0.wxml');

__wxAppCode__['components/gaoyia-parse/components/wxParseVideo.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/gaoyia-parse/components/wxParseVideo.wxml']=$gwx('./components/gaoyia-parse/components/wxParseVideo.wxml');

__wxAppCode__['components/gaoyia-parse/parse.json']={"usingComponents":{"weixin-parse-template":"/components/gaoyia-parse/components/wxParseTemplate0"},"component":true};
__wxAppCode__['components/gaoyia-parse/parse.wxml']=$gwx('./components/gaoyia-parse/parse.wxml');

__wxAppCode__['components/loading.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/loading.wxml']=$gwx('./components/loading.wxml');

__wxAppCode__['components/mix-list-cell.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mix-list-cell.wxml']=$gwx('./components/mix-list-cell.wxml');

__wxAppCode__['components/tki-qrcode/tki-qrcode.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tki-qrcode/tki-qrcode.wxml']=$gwx('./components/tki-qrcode/tki-qrcode.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-number-box.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-number-box.wxml']=$gwx('./components/uni-number-box.wxml');

__wxAppCode__['components/Winglau14-lotusAddress/Winglau14-lotusAddress.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Winglau14-lotusAddress/Winglau14-lotusAddress.wxml']=$gwx('./components/Winglau14-lotusAddress/Winglau14-lotusAddress.wxml');

__wxAppCode__['components/wm-poster/wm-poster.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/wm-poster/wm-poster.wxml']=$gwx('./components/wm-poster/wm-poster.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"收货地址","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/address/addressManage.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"usingComponents":{"lotus-address":"/components/Winglau14-lotusAddress/Winglau14-lotusAddress"}};
__wxAppCode__['pages/address/addressManage.wxml']=$gwx('./pages/address/addressManage.wxml');

__wxAppCode__['pages/brandDetail/brand.json']={"navigationBarTitleText":"品牌商列表","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/brandDetail/brand.wxml']=$gwx('./pages/brandDetail/brand.wxml');

__wxAppCode__['pages/brandDetail/brandDetail.json']={"navigationBarTitleText":"品牌商详情","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/brandDetail/brandDetail.wxml']=$gwx('./pages/brandDetail/brandDetail.wxml');

__wxAppCode__['pages/brandDetail/comment.json']={"navigationBarTitleText":"评论","usingComponents":{}};
__wxAppCode__['pages/brandDetail/comment.wxml']=$gwx('./pages/brandDetail/comment.wxml');

__wxAppCode__['pages/brandDetail/groupbuy.json']={"navigationBarTitleText":"团购专区","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/brandDetail/groupbuy.wxml']=$gwx('./pages/brandDetail/groupbuy.wxml');

__wxAppCode__['pages/brandDetail/topicDetail.json']={"navigationBarTitleText":"专题精选","enablePullDownRefresh":true,"usingComponents":{"u-parse":"/components/gaoyia-parse/parse"}};
__wxAppCode__['pages/brandDetail/topicDetail.wxml']=$gwx('./pages/brandDetail/topicDetail.wxml');

__wxAppCode__['pages/brandDetail/topiclist.json']={"navigationBarTitleText":"专题精选列表","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/brandDetail/topiclist.wxml']=$gwx('./pages/brandDetail/topiclist.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationBarTitleText":"购物车","enablePullDownRefresh":true,"usingComponents":{"uni-number-box":"/components/uni-number-box"}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/category.json']={"navigationBarTitleText":"分类","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/category/hot.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/category/hot.wxml']=$gwx('./pages/category/hot.wxml');

__wxAppCode__['pages/commentlist/index.json']={"navigationBarTitleText":"评论列表","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/commentlist/index.wxml']=$gwx('./pages/commentlist/index.wxml');

__wxAppCode__['pages/detail/detail.json']={"navigationBarTitleText":"","titleNView":{"type":"transparent"},"usingComponents":{"share":"/pages/product/share"}};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/fx/apply.json']={"navigationBarTitleText":"申请成为分销商","usingComponents":{}};
__wxAppCode__['pages/fx/apply.wxml']=$gwx('./pages/fx/apply.wxml');

__wxAppCode__['pages/fx/index.json']={"navigationBarTitleText":"分销中心","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/fx/index.wxml']=$gwx('./pages/fx/index.wxml');

__wxAppCode__['pages/fx/myteam.json']={"navigationBarTitleText":"我的团队","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/fx/myteam.wxml']=$gwx('./pages/fx/myteam.wxml');

__wxAppCode__['pages/fx/order.json']={"navigationBarTitleText":"分销订单","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/fx/order.wxml']=$gwx('./pages/fx/order.wxml');

__wxAppCode__['pages/fx/qr.json']={"navigationBarTitleText":"推广二维码","enablePullDownRefresh":true,"usingComponents":{"wm-poster":"/components/wm-poster/wm-poster"}};
__wxAppCode__['pages/fx/qr.wxml']=$gwx('./pages/fx/qr.wxml');

__wxAppCode__['pages/fx/withdraw.json']={"navigationBarTitleText":"佣金提现","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/fx/withdraw.wxml']=$gwx('./pages/fx/withdraw.wxml');

__wxAppCode__['pages/fx/withdrawlist.json']={"navigationBarTitleText":"提现明细","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/fx/withdrawlist.wxml']=$gwx('./pages/fx/withdrawlist.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"家居热卖","enablePullDownRefresh":true,"titleNView":{"type":"transparent"},"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/money/money.json']={"navigationBarTitleText":"修改资料","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/money/money.wxml']=$gwx('./pages/money/money.wxml');

__wxAppCode__['pages/money/pay.json']={"navigationBarTitleText":"支付","usingComponents":{}};
__wxAppCode__['pages/money/pay.wxml']=$gwx('./pages/money/pay.wxml');

__wxAppCode__['pages/money/paySuccess.json']={"navigationBarTitleText":"支付成功","usingComponents":{}};
__wxAppCode__['pages/money/paySuccess.wxml']=$gwx('./pages/money/paySuccess.wxml');

__wxAppCode__['pages/mycoloect/mycoloect.json']={"navigationBarTitleText":"我的收藏","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mycoloect/mycoloect.wxml']=$gwx('./pages/mycoloect/mycoloect.wxml');

__wxAppCode__['pages/mycoupon/couponlist.json']={"navigationBarTitleText":"优惠券中心","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mycoupon/couponlist.wxml']=$gwx('./pages/mycoupon/couponlist.wxml');

__wxAppCode__['pages/mycoupon/mycoupon.json']={"navigationBarTitleText":"我的优惠券","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mycoupon/mycoupon.wxml']=$gwx('./pages/mycoupon/mycoupon.wxml');

__wxAppCode__['pages/mystore/mystore.json']={"navigationBarTitleText":"关注店铺","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mystore/mystore.wxml']=$gwx('./pages/mystore/mystore.wxml');

__wxAppCode__['pages/notice/notice.json']={"navigationBarTitleText":"通知","usingComponents":{}};
__wxAppCode__['pages/notice/notice.wxml']=$gwx('./pages/notice/notice.wxml');

__wxAppCode__['pages/order/comment.json']={"navigationBarTitleText":"订单评价","usingComponents":{}};
__wxAppCode__['pages/order/comment.wxml']=$gwx('./pages/order/comment.wxml');

__wxAppCode__['pages/order/createOrder.json']={"navigationBarTitleText":"创建订单","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/order/createOrder.wxml']=$gwx('./pages/order/createOrder.wxml');

__wxAppCode__['pages/order/order.json']={"navigationBarTitleText":"我的订单","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/order/orderDetail.json']={"navigationBarTitleText":"订单详情","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/order/orderDetail.wxml']=$gwx('./pages/order/orderDetail.wxml');

__wxAppCode__['pages/product/list.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"商品列表","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/product/list.wxml']=$gwx('./pages/product/list.wxml');

__wxAppCode__['pages/product/product.json']={"navigationBarTitleText":"商品详情","enablePullDownRefresh":true,"titleNView":{"type":"transparent"},"usingComponents":{"sharepage":"/pages/product/share","auth":"/components/auth","u-parse":"/components/gaoyia-parse/parse"}};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/product/searchlist.json']={"navigationBarTitleText":"商品搜索","enablePullDownRefresh":true,"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/product/searchlist.wxml']=$gwx('./pages/product/searchlist.wxml');

__wxAppCode__['pages/product/share.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/product/share.wxml']=$gwx('./pages/product/share.wxml');

__wxAppCode__['pages/product/shareqrcode.json']={"navigationBarTitleText":"生成赚钱海报","usingComponents":{"wm-poster":"/components/wm-poster/wm-poster","tki-qrcode":"/components/tki-qrcode/tki-qrcode"}};
__wxAppCode__['pages/product/shareqrcode.wxml']=$gwx('./pages/product/shareqrcode.wxml');

__wxAppCode__['pages/public/login.json']={"navigationBarTitleText":"登录","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/public/login.wxml']=$gwx('./pages/public/login.wxml');

__wxAppCode__['pages/public/reg.json']={"navigationBarTitleText":"注册","usingComponents":{}};
__wxAppCode__['pages/public/reg.wxml']=$gwx('./pages/public/reg.wxml');

__wxAppCode__['pages/set/set.json']={"navigationBarTitleText":"设置","usingComponents":{}};
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/tuiguang/index.json']={"enablePullDownRefresh":true,"usingComponents":{"share":"/pages/product/share","auth":"/components/auth"}};
__wxAppCode__['pages/tuiguang/index.wxml']=$gwx('./pages/tuiguang/index.wxml');

__wxAppCode__['pages/user/feedback.json']={"navigationBarTitleText":"意见反馈","usingComponents":{}};
__wxAppCode__['pages/user/feedback.wxml']=$gwx('./pages/user/feedback.wxml');

__wxAppCode__['pages/user/help.json']={"navigationBarTitleText":"帮助中心","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/user/help.wxml']=$gwx('./pages/user/help.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","enablePullDownRefresh":true,"titleNView":{"type":"transparent"},"usingComponents":{"list-cell":"/components/mix-list-cell","auth":"/components/auth"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/userinfo/userinfo.json']={"navigationBarTitleText":"修改资料","usingComponents":{}};
__wxAppCode__['pages/userinfo/userinfo.wxml']=$gwx('./pages/userinfo/userinfo.wxml');

__wxAppCode__['pages/webview/index.json']={"navigationBarTitleText":"详情","usingComponents":{}};
__wxAppCode__['pages/webview/index.wxml']=$gwx('./pages/webview/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0330":function(e,t,n){},7094:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n("454f"));var o=n("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={methods:u({},(0,o.mapMutations)(["login"])),onLaunch:function(){},onShow:function(){},onHide:function(){}};t.default=c},"8c21":function(e,t,n){"use strict";(function(e,t){n("d82e"),n("921b");var o=c(n("66fd")),r=c(n("7c98")),u=c(n("cdf7")),a=c(n("8e4a"));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none";!1!==Boolean(t)&&e.showToast({title:t,duration:n,mask:o,icon:r})},d=function(e){return new Promise(function(t){setTimeout(function(){t(a.default[e])},500)})},s=function(){var e=getCurrentPages(),t=e[e.length-2];return t.$vm};o.default.config.productionTip=!1,o.default.prototype.$fire=new o.default,o.default.prototype.$store=r.default,o.default.prototype.$api={msg:l,json:d,prePage:s},u.default.mpType="app";var p=new o.default(f({},u.default));t(p).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},a665:function(e,t,n){"use strict";n.r(t);var o=n("7094"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},b73c:function(e,t,n){"use strict";var o=n("0330"),r=n.n(o);r.a},cdf7:function(e,t,n){"use strict";n.r(t);var o=n("a665");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("b73c");var u,a,c=n("2877"),f=Object(c["a"])(o["default"],u,a,!1,null,null,null);t["default"]=f.exports}},[["8c21","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function o(o) {
    for (var t, r, p = o[0], c = o[1], i = o[2], u = 0, l = []; u < p.length; u++) {
      r = p[u], s[r] && l.push(s[r][0]), s[r] = 0;
    }

    for (t in c) {
      Object.prototype.hasOwnProperty.call(c, t) && (e[t] = c[t]);
    }

    m && m(o);

    while (l.length) {
      l.shift()();
    }

    return a.push.apply(a, i || []), n();
  }

  function n() {
    for (var e, o = 0; o < a.length; o++) {
      for (var n = a[o], t = !0, r = 1; r < n.length; r++) {
        var p = n[r];
        0 !== s[p] && (t = !1);
      }

      t && (a.splice(o--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      a = [];

  function p(e) {
    return c.p + "" + e + ".js";
  }

  function c(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var o = [],
        n = {
      "pages/product/share": 1,
      "components/auth": 1,
      "components/uni-load-more/uni-load-more": 1,
      "components/tki-qrcode/tki-qrcode": 1,
      "components/wm-poster/wm-poster": 1,
      "components/uni-number-box": 1,
      "components/mix-list-cell": 1,
      "components/Winglau14-lotusAddress/Winglau14-lotusAddress": 1,
      "components/gaoyia-parse/components/wxParseTable": 1
    };
    r[e] ? o.push(r[e]) : 0 !== r[e] && n[e] && o.push(r[e] = new Promise(function (o, n) {
      for (var t = ({
        "components/gaoyia-parse/parse": "components/gaoyia-parse/parse",
        "pages/product/share": "pages/product/share",
        "components/auth": "components/auth",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/tki-qrcode/tki-qrcode": "components/tki-qrcode/tki-qrcode",
        "components/wm-poster/wm-poster": "components/wm-poster/wm-poster",
        "components/uni-number-box": "components/uni-number-box",
        "components/mix-list-cell": "components/mix-list-cell",
        "components/Winglau14-lotusAddress/Winglau14-lotusAddress": "components/Winglau14-lotusAddress/Winglau14-lotusAddress",
        "components/gaoyia-parse/components/wxParseTemplate0": "components/gaoyia-parse/components/wxParseTemplate0",
        "components/gaoyia-parse/components/wxParseAudio": "components/gaoyia-parse/components/wxParseAudio",
        "components/gaoyia-parse/components/wxParseImg": "components/gaoyia-parse/components/wxParseImg",
        "components/gaoyia-parse/components/wxParseTable": "components/gaoyia-parse/components/wxParseTable",
        "components/gaoyia-parse/components/wxParseVideo": "components/gaoyia-parse/components/wxParseVideo"
      }[e] || e) + ".wxss", s = c.p + t, a = document.getElementsByTagName("link"), p = 0; p < a.length; p++) {
        var i = a[p],
            u = i.getAttribute("data-href") || i.getAttribute("href");
        if ("stylesheet" === i.rel && (u === t || u === s)) return o();
      }

      var l = document.getElementsByTagName("style");

      for (p = 0; p < l.length; p++) {
        i = l[p], u = i.getAttribute("data-href");
        if (u === t || u === s) return o();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = o, m.onerror = function (o) {
        var t = o && o.target && o.target.src || s,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
        a.request = t, delete r[e], m.parentNode.removeChild(m), n(a);
      }, m.href = s;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var t = s[e];
    if (0 !== t) if (t) o.push(t[2]);else {
      var a = new Promise(function (o, n) {
        t = s[e] = [o, n];
      });
      o.push(t[2] = a);
      var i,
          u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = p(e), i = function i(o) {
        u.onerror = u.onload = null, clearTimeout(l);
        var n = s[e];

        if (0 !== n) {
          if (n) {
            var t = o && ("load" === o.type ? "missing" : o.type),
                r = o && o.target && o.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + r + ")");
            a.type = t, a.request = r, n[1](a);
          }

          s[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        i({
          type: "timeout",
          target: u
        });
      }, 12e4);
      u.onerror = u.onload = i, document.head.appendChild(u);
    }
    return Promise.all(o);
  }, c.m = e, c.c = t, c.d = function (e, o, n) {
    c.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, o) {
    if (1 & o && (e = c(e)), 8 & o) return e;
    if (4 & o && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var t in e) {
      c.d(n, t, function (o) {
        return e[o];
      }.bind(null, t));
    }
    return n;
  }, c.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(o, "a", o), o;
  }, c.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      u = i.push.bind(i);
  i.push = o, i = i.slice();

  for (var l = 0; l < i.length; l++) {
    o(i[l]);
  }

  var m = u;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"01d6":function(e,a,n){"use strict";function t(e){return e=e.replace(/&forall;/g,"∀"),e=e.replace(/&part;/g,"∂"),e=e.replace(/&exist;/g,"∃"),e=e.replace(/&empty;/g,"∅"),e=e.replace(/&nabla;/g,"∇"),e=e.replace(/&isin;/g,"∈"),e=e.replace(/&notin;/g,"∉"),e=e.replace(/&ni;/g,"∋"),e=e.replace(/&prod;/g,"∏"),e=e.replace(/&sum;/g,"∑"),e=e.replace(/&minus;/g,"−"),e=e.replace(/&lowast;/g,"∗"),e=e.replace(/&radic;/g,"√"),e=e.replace(/&prop;/g,"∝"),e=e.replace(/&infin;/g,"∞"),e=e.replace(/&ang;/g,"∠"),e=e.replace(/&and;/g,"∧"),e=e.replace(/&or;/g,"∨"),e=e.replace(/&cap;/g,"∩"),e=e.replace(/&cup;/g,"∪"),e=e.replace(/&int;/g,"∫"),e=e.replace(/&there4;/g,"∴"),e=e.replace(/&sim;/g,"∼"),e=e.replace(/&cong;/g,"≅"),e=e.replace(/&asymp;/g,"≈"),e=e.replace(/&ne;/g,"≠"),e=e.replace(/&le;/g,"≤"),e=e.replace(/&ge;/g,"≥"),e=e.replace(/&sub;/g,"⊂"),e=e.replace(/&sup;/g,"⊃"),e=e.replace(/&nsub;/g,"⊄"),e=e.replace(/&sube;/g,"⊆"),e=e.replace(/&supe;/g,"⊇"),e=e.replace(/&oplus;/g,"⊕"),e=e.replace(/&otimes;/g,"⊗"),e=e.replace(/&perp;/g,"⊥"),e=e.replace(/&sdot;/g,"⋅"),e}function r(e){return e=e.replace(/&Alpha;/g,"Α"),e=e.replace(/&Beta;/g,"Β"),e=e.replace(/&Gamma;/g,"Γ"),e=e.replace(/&Delta;/g,"Δ"),e=e.replace(/&Epsilon;/g,"Ε"),e=e.replace(/&Zeta;/g,"Ζ"),e=e.replace(/&Eta;/g,"Η"),e=e.replace(/&Theta;/g,"Θ"),e=e.replace(/&Iota;/g,"Ι"),e=e.replace(/&Kappa;/g,"Κ"),e=e.replace(/&Lambda;/g,"Λ"),e=e.replace(/&Mu;/g,"Μ"),e=e.replace(/&Nu;/g,"Ν"),e=e.replace(/&Xi;/g,"Ν"),e=e.replace(/&Omicron;/g,"Ο"),e=e.replace(/&Pi;/g,"Π"),e=e.replace(/&Rho;/g,"Ρ"),e=e.replace(/&Sigma;/g,"Σ"),e=e.replace(/&Tau;/g,"Τ"),e=e.replace(/&Upsilon;/g,"Υ"),e=e.replace(/&Phi;/g,"Φ"),e=e.replace(/&Chi;/g,"Χ"),e=e.replace(/&Psi;/g,"Ψ"),e=e.replace(/&Omega;/g,"Ω"),e=e.replace(/&alpha;/g,"α"),e=e.replace(/&beta;/g,"β"),e=e.replace(/&gamma;/g,"γ"),e=e.replace(/&delta;/g,"δ"),e=e.replace(/&epsilon;/g,"ε"),e=e.replace(/&zeta;/g,"ζ"),e=e.replace(/&eta;/g,"η"),e=e.replace(/&theta;/g,"θ"),e=e.replace(/&iota;/g,"ι"),e=e.replace(/&kappa;/g,"κ"),e=e.replace(/&lambda;/g,"λ"),e=e.replace(/&mu;/g,"μ"),e=e.replace(/&nu;/g,"ν"),e=e.replace(/&xi;/g,"ξ"),e=e.replace(/&omicron;/g,"ο"),e=e.replace(/&pi;/g,"π"),e=e.replace(/&rho;/g,"ρ"),e=e.replace(/&sigmaf;/g,"ς"),e=e.replace(/&sigma;/g,"σ"),e=e.replace(/&tau;/g,"τ"),e=e.replace(/&upsilon;/g,"υ"),e=e.replace(/&phi;/g,"φ"),e=e.replace(/&chi;/g,"χ"),e=e.replace(/&psi;/g,"ψ"),e=e.replace(/&omega;/g,"ω"),e=e.replace(/&thetasym;/g,"ϑ"),e=e.replace(/&upsih;/g,"ϒ"),e=e.replace(/&piv;/g,"ϖ"),e=e.replace(/&middot;/g,"·"),e}function u(e){return e=e.replace(/&nbsp;/g,"<span class='spaceshow'> </span>"),e=e.replace(/&ensp;/g," "),e=e.replace(/&emsp;/g,"　"),e=e.replace(/&quot;/g,"'"),e=e.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&#8226;/g,"•"),e}function l(e){return e=e.replace(/&OElig;/g,"Œ"),e=e.replace(/&oelig;/g,"œ"),e=e.replace(/&Scaron;/g,"Š"),e=e.replace(/&scaron;/g,"š"),e=e.replace(/&Yuml;/g,"Ÿ"),e=e.replace(/&fnof;/g,"ƒ"),e=e.replace(/&circ;/g,"ˆ"),e=e.replace(/&tilde;/g,"˜"),e=e.replace(/&ensp;/g,""),e=e.replace(/&emsp;/g,""),e=e.replace(/&thinsp;/g,""),e=e.replace(/&zwnj;/g,""),e=e.replace(/&zwj;/g,""),e=e.replace(/&lrm;/g,""),e=e.replace(/&rlm;/g,""),e=e.replace(/&ndash;/g,"–"),e=e.replace(/&mdash;/g,"—"),e=e.replace(/&lsquo;/g,"‘"),e=e.replace(/&rsquo;/g,"’"),e=e.replace(/&sbquo;/g,"‚"),e=e.replace(/&ldquo;/g,"“"),e=e.replace(/&rdquo;/g,"”"),e=e.replace(/&bdquo;/g,"„"),e=e.replace(/&dagger;/g,"†"),e=e.replace(/&Dagger;/g,"‡"),e=e.replace(/&bull;/g,"•"),e=e.replace(/&hellip;/g,"…"),e=e.replace(/&permil;/g,"‰"),e=e.replace(/&prime;/g,"′"),e=e.replace(/&Prime;/g,"″"),e=e.replace(/&lsaquo;/g,"‹"),e=e.replace(/&rsaquo;/g,"›"),e=e.replace(/&oline;/g,"‾"),e=e.replace(/&euro;/g,"€"),e=e.replace(/&trade;/g,"™"),e=e.replace(/&larr;/g,"←"),e=e.replace(/&uarr;/g,"↑"),e=e.replace(/&rarr;/g,"→"),e=e.replace(/&darr;/g,"↓"),e=e.replace(/&harr;/g,"↔"),e=e.replace(/&crarr;/g,"↵"),e=e.replace(/&lceil;/g,"⌈"),e=e.replace(/&rceil;/g,"⌉"),e=e.replace(/&lfloor;/g,"⌊"),e=e.replace(/&rfloor;/g,"⌋"),e=e.replace(/&loz;/g,"◊"),e=e.replace(/&spades;/g,"♠"),e=e.replace(/&clubs;/g,"♣"),e=e.replace(/&hearts;/g,"♥"),e=e.replace(/&diams;/g,"♦"),e=e.replace(/&#39;/g,"'"),e}function p(e){return e=t(e),e=r(e),e=u(e),e=l(e),e}function v(e,a){return/^\/\//.test(e)?"https:".concat(e):/^\//.test(e)?"https://".concat(a).concat(e):e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var m={strDiscode:p,urlToHttpUrl:v};a.default=m},"0de9":function(e,a,n){"use strict";function t(e){var a=Object.prototype.toString.call(e);return a.substring(8,a.length-1)}function r(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=a.map(function(e){var a=Object.prototype.toString.call(e);if("[object object]"===a.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(r){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=t(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e}),u="";if(r.length>1){var l=r.pop();u=r.join("---COMMA---"),0===l.indexOf(" at ")?u+=l:u+="---COMMA---"+l}else u=r[0];return u}Object.defineProperty(a,"__esModule",{value:!0}),a.default=r},2877:function(e,a,n){"use strict";function t(e,a,n,t,r,u,l,p){var v,m="function"===typeof e?e.options:e;if(a&&(m.render=a,m.staticRenderFns=n,m._compiled=!0),t&&(m.functional=!0),u&&(m._scopeId="data-v-"+u),l?(v=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},m._ssrRegister=v):r&&(v=p?function(){r.call(this,this.$root.$options.shadowRoot)}:r),v)if(m.functional){m._injectStyles=v;var o=m.render;m.render=function(e,a){return v.call(a),o(e,a)}}else{var i=m.beforeCreate;m.beforeCreate=i?[].concat(i,v):[v]}return{exports:e,options:m}}n.d(a,"a",function(){return t})},"2f62":function(e,a,n){"use strict";n.r(a),n.d(a,"Store",function(){return f}),n.d(a,"install",function(){return S}),n.d(a,"mapState",function(){return P}),n.d(a,"mapMutations",function(){return j}),n.d(a,"mapGetters",function(){return E}),n.d(a,"mapActions",function(){return D}),n.d(a,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var a=Number(e.version.split(".")[0]);if(a>=2)e.mixin({beforeCreate:t});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,n.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function u(e){r&&(e._devtoolHook=r,r.emit("vuex:init",e),r.on("vuex:travel-to-state",function(a){e.replaceState(a)}),e.subscribe(function(e,a){r.emit("vuex:mutation",e,a)}))}function l(e,a){Object.keys(e).forEach(function(n){return a(e[n],n)})}function p(e){return null!==e&&"object"===typeof e}function v(e){return e&&"function"===typeof e.then}var m=function(e,a){this.runtime=a,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},o={namespaced:{configurable:!0}};o.namespaced.get=function(){return!!this._rawModule.namespaced},m.prototype.addChild=function(e,a){this._children[e]=a},m.prototype.removeChild=function(e){delete this._children[e]},m.prototype.getChild=function(e){return this._children[e]},m.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},m.prototype.forEachChild=function(e){l(this._children,e)},m.prototype.forEachGetter=function(e){this._rawModule.getters&&l(this._rawModule.getters,e)},m.prototype.forEachAction=function(e){this._rawModule.actions&&l(this._rawModule.actions,e)},m.prototype.forEachMutation=function(e){this._rawModule.mutations&&l(this._rawModule.mutations,e)},Object.defineProperties(m.prototype,o);var i=function(e){this.register([],e,!1)};function s(e,a,n){if(a.update(n),n.modules)for(var t in n.modules){if(!a.getChild(t))return void 0;s(e.concat(t),a.getChild(t),n.modules[t])}}i.prototype.get=function(e){return e.reduce(function(e,a){return e.getChild(a)},this.root)},i.prototype.getNamespace=function(e){var a=this.root;return e.reduce(function(e,n){return a=a.getChild(n),e+(a.namespaced?n+"/":"")},"")},i.prototype.update=function(e){s([],this.root,e)},i.prototype.register=function(e,a,n){var t=this;void 0===n&&(n=!0);var r=new m(a,n);if(0===e.length)this.root=r;else{var u=this.get(e.slice(0,-1));u.addChild(e[e.length-1],r)}a.modules&&l(a.modules,function(a,r){t.register(e.concat(r),a,n)})},i.prototype.unregister=function(e){var a=this.get(e.slice(0,-1)),n=e[e.length-1];a.getChild(n).runtime&&a.removeChild(n)};var c;var f=function(e){var a=this;void 0===e&&(e={}),!c&&"undefined"!==typeof window&&window.Vue&&S(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var t=e.strict;void 0===t&&(t=!1);var r=e.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new i(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var l=this,p=this,v=p.dispatch,m=p.commit;this.dispatch=function(e,a){return v.call(l,e,a)},this.commit=function(e,a,n){return m.call(l,e,a,n)},this.strict=t,_(this,r,[],this._modules.root),y(this,r),n.forEach(function(e){return e(a)}),c.config.devtools&&u(this)},h={state:{configurable:!0}};function d(e,a){return a.indexOf(e)<0&&a.push(e),function(){var n=a.indexOf(e);n>-1&&a.splice(n,1)}}function g(e,a){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;_(e,n,[],e._modules.root,!0),y(e,n,a)}function y(e,a,n){var t=e._vm;e.getters={};var r=e._wrappedGetters,u={};l(r,function(a,n){u[n]=function(){return a(e)},Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})});var p=c.config.silent;c.config.silent=!0,e._vm=new c({data:{$$state:a},computed:u}),c.config.silent=p,e.strict&&T(e),t&&(n&&e._withCommit(function(){t._data.$$state=null}),c.nextTick(function(){return t.$destroy()}))}function _(e,a,n,t,r){var u=!n.length,l=e._modules.getNamespace(n);if(t.namespaced&&(e._modulesNamespaceMap[l]=t),!u&&!r){var p=A(a,n.slice(0,-1)),v=n[n.length-1];e._withCommit(function(){c.set(p,v,t.state)})}var m=t.context=b(e,l,n);t.forEachMutation(function(a,n){var t=l+n;$(e,t,a,m)}),t.forEachAction(function(a,n){var t=a.root?n:l+n,r=a.handler||a;x(e,t,r,m)}),t.forEachGetter(function(a,n){var t=l+n;O(e,t,a,m)}),t.forEachChild(function(t,u){_(e,a,n.concat(u),t,r)})}function b(e,a,n){var t=""===a,r={dispatch:t?e.dispatch:function(n,t,r){var u=k(n,t,r),l=u.payload,p=u.options,v=u.type;return p&&p.root||(v=a+v),e.dispatch(v,l)},commit:t?e.commit:function(n,t,r){var u=k(n,t,r),l=u.payload,p=u.options,v=u.type;p&&p.root||(v=a+v),e.commit(v,l,p)}};return Object.defineProperties(r,{getters:{get:t?function(){return e.getters}:function(){return w(e,a)}},state:{get:function(){return A(e.state,n)}}}),r}function w(e,a){var n={},t=a.length;return Object.keys(e.getters).forEach(function(r){if(r.slice(0,t)===a){var u=r.slice(t);Object.defineProperty(n,u,{get:function(){return e.getters[r]},enumerable:!0})}}),n}function $(e,a,n,t){var r=e._mutations[a]||(e._mutations[a]=[]);r.push(function(a){n.call(e,t.state,a)})}function x(e,a,n,t){var r=e._actions[a]||(e._actions[a]=[]);r.push(function(a,r){var u=n.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},a,r);return v(u)||(u=Promise.resolve(u)),e._devtoolHook?u.catch(function(a){throw e._devtoolHook.emit("vuex:error",a),a}):u})}function O(e,a,n,t){e._wrappedGetters[a]||(e._wrappedGetters[a]=function(e){return n(t.state,t.getters,e.state,e.getters)})}function T(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function A(e,a){return a.length?a.reduce(function(e,a){return e[a]},e):e}function k(e,a,n){return p(e)&&e.type&&(n=a,a=e,e=e.type),{type:e,payload:a,options:n}}function S(e){c&&e===c||(c=e,t(c))}h.state.get=function(){return this._vm._data.$$state},h.state.set=function(e){0},f.prototype.commit=function(e,a,n){var t=this,r=k(e,a,n),u=r.type,l=r.payload,p=(r.options,{type:u,payload:l}),v=this._mutations[u];v&&(this._withCommit(function(){v.forEach(function(e){e(l)})}),this._subscribers.forEach(function(e){return e(p,t.state)}))},f.prototype.dispatch=function(e,a){var n=this,t=k(e,a),r=t.type,u=t.payload,l={type:r,payload:u},p=this._actions[r];if(p)return this._actionSubscribers.forEach(function(e){return e(l,n.state)}),p.length>1?Promise.all(p.map(function(e){return e(u)})):p[0](u)},f.prototype.subscribe=function(e){return d(e,this._subscribers)},f.prototype.subscribeAction=function(e){return d(e,this._actionSubscribers)},f.prototype.watch=function(e,a,n){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},a,n)},f.prototype.replaceState=function(e){var a=this;this._withCommit(function(){a._vm._data.$$state=e})},f.prototype.registerModule=function(e,a,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,a),_(this,this.state,e,this._modules.get(e),n.preserveState),y(this,this.state)},f.prototype.unregisterModule=function(e){var a=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=A(a.state,e.slice(0,-1));c.delete(n,e[e.length-1])}),g(this)},f.prototype.hotUpdate=function(e){this._modules.update(e),g(this,!0)},f.prototype._withCommit=function(e){var a=this._committing;this._committing=!0,e(),this._committing=a},Object.defineProperties(f.prototype,h);var P=N(function(e,a){var n={};return R(a).forEach(function(a){var t=a.key,r=a.val;n[t]=function(){var a=this.$store.state,n=this.$store.getters;if(e){var t=B(this.$store,"mapState",e);if(!t)return;a=t.context.state,n=t.context.getters}return"function"===typeof r?r.call(this,a,n):a[r]},n[t].vuex=!0}),n}),j=N(function(e,a){var n={};return R(a).forEach(function(a){var t=a.key,r=a.val;n[t]=function(){var a=[],n=arguments.length;while(n--)a[n]=arguments[n];var t=this.$store.commit;if(e){var u=B(this.$store,"mapMutations",e);if(!u)return;t=u.context.commit}return"function"===typeof r?r.apply(this,[t].concat(a)):t.apply(this.$store,[r].concat(a))}}),n}),E=N(function(e,a){var n={};return R(a).forEach(function(a){var t=a.key,r=a.val;r=e+r,n[t]=function(){if(!e||B(this.$store,"mapGetters",e))return this.$store.getters[r]},n[t].vuex=!0}),n}),D=N(function(e,a){var n={};return R(a).forEach(function(a){var t=a.key,r=a.val;n[t]=function(){var a=[],n=arguments.length;while(n--)a[n]=arguments[n];var t=this.$store.dispatch;if(e){var u=B(this.$store,"mapActions",e);if(!u)return;t=u.context.dispatch}return"function"===typeof r?r.apply(this,[t].concat(a)):t.apply(this.$store,[r].concat(a))}}),n}),C=function(e){return{mapState:P.bind(null,e),mapGetters:E.bind(null,e),mapMutations:j.bind(null,e),mapActions:D.bind(null,e)}};function R(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(a){return{key:a,val:e[a]}})}function N(e){return function(a,n){return"string"!==typeof a?(n=a,a=""):"/"!==a.charAt(a.length-1)&&(a+="/"),e(a,n)}}function B(e,a,n){var t=e._modulesNamespaceMap[n];return t}var I={Store:f,install:S,version:"3.0.1",mapState:P,mapMutations:j,mapGetters:E,mapActions:D,createNamespacedHelpers:C};a["default"]=I},"3ee2":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={};(function(){function a(e){var a,n,t;return e<128?[e]:e<2048?(a=192+(e>>6),n=128+(63&e),[a,n]):(a=224+(e>>12),n=128+(e>>6&63),t=128+(63&e),[a,n,t])}function t(e){for(var n=[],t=0;t<e.length;t++)for(var r=e.charCodeAt(t),u=a(r),l=0;l<u.length;l++)n.push(u[l]);return n}function r(e,a){this.typeNumber=-1,this.errorCorrectLevel=a,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=e,this.utf8bytes=t(e),this.make()}r.prototype={constructor:r,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++)this.modules[a]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,e),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(e,a){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var t=-1;t<=7;t++)a+t<=-1||this.moduleCount<=a+t||(this.modules[e+n][a+t]=0<=n&&n<=6&&(0==t||6==t)||0<=t&&t<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=t&&t<=4)},createQrcode:function(){for(var e=0,a=0,n=null,t=0;t<8;t++){this.makeImpl(t);var r=p.getLostPoint(this);(0==t||e>r)&&(e=r,a=t,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,a),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0,null==this.modules[6][e]&&(this.modules[6][e]=e%2==0))},setupPositionAdjustPattern:function(){for(var e=p.getPatternPosition(this.typeNumber),a=0;a<e.length;a++)for(var n=0;n<e.length;n++){var t=e[a],r=e[n];if(null==this.modules[t][r])for(var u=-2;u<=2;u++)for(var l=-2;l<=2;l++)this.modules[t+u][r+l]=-2==u||2==u||-2==l||2==l||0==u&&0==l}},setupTypeNumber:function(e){for(var a=p.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var t=!e&&1==(a>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=t,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=t}},setupTypeInfo:function(e,a){for(var n=u[this.errorCorrectLevel]<<3|a,t=p.getBCHTypeInfo(n),r=0;r<15;r++){var l=!e&&1==(t>>r&1);r<6?this.modules[r][8]=l:r<8?this.modules[r+1][8]=l:this.modules[this.moduleCount-15+r][8]=l;l=!e&&1==(t>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=l:r<9?this.modules[8][15-r-1+1]=l:this.modules[8][15-r-1]=l}this.modules[this.moduleCount-8][8]=!e},createData:function(){var e=new s,a=this.typeNumber>9?16:8;e.put(4,4),e.put(this.utf8bytes.length,a);for(var n=0,t=this.utf8bytes.length;n<t;n++)e.put(this.utf8bytes[n],8);e.length+4<=8*this.totalDataCount&&e.put(0,4);while(e.length%8!=0)e.putBit(!1);while(1){if(e.length>=8*this.totalDataCount)break;if(e.put(r.PAD0,8),e.length>=8*this.totalDataCount)break;e.put(r.PAD1,8)}return this.createBytes(e)},createBytes:function(e){for(var a=0,n=0,t=0,r=this.rsBlock.length/3,u=new Array,l=0;l<r;l++)for(var v=this.rsBlock[3*l+0],m=this.rsBlock[3*l+1],i=this.rsBlock[3*l+2],s=0;s<v;s++)u.push([i,m]);for(var c=new Array(u.length),f=new Array(u.length),h=0;h<u.length;h++){var d=u[h][0],g=u[h][1]-d;n=Math.max(n,d),t=Math.max(t,g),c[h]=new Array(d);for(l=0;l<c[h].length;l++)c[h][l]=255&e.buffer[l+a];a+=d;var y=p.getErrorCorrectPolynomial(g),_=new o(c[h],y.getLength()-1),b=_.mod(y);f[h]=new Array(y.getLength()-1);for(l=0;l<f[h].length;l++){var w=l+b.getLength()-f[h].length;f[h][l]=w>=0?b.get(w):0}}var $=new Array(this.totalDataCount),x=0;for(l=0;l<n;l++)for(h=0;h<u.length;h++)l<c[h].length&&($[x++]=c[h][l]);for(l=0;l<t;l++)for(h=0;h<u.length;h++)l<f[h].length&&($[x++]=f[h][l]);return $},mapData:function(e,a){for(var n=-1,t=this.moduleCount-1,r=7,u=0,l=this.moduleCount-1;l>0;l-=2){6==l&&l--;while(1){for(var v=0;v<2;v++)if(null==this.modules[t][l-v]){var m=!1;u<e.length&&(m=1==(e[u]>>>r&1));var o=p.getMask(a,t,l-v);o&&(m=!m),this.modules[t][l-v]=m,r--,-1==r&&(u++,r=7)}if(t+=n,t<0||this.moduleCount<=t){t-=n,n=-n;break}}}}},r.PAD0=236,r.PAD1=17;for(var u=[1,0,3,2],l={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var a=e<<10;while(p.getBCHDigit(a)-p.getBCHDigit(p.G15)>=0)a^=p.G15<<p.getBCHDigit(a)-p.getBCHDigit(p.G15);return(e<<10|a)^p.G15_MASK},getBCHTypeNumber:function(e){var a=e<<12;while(p.getBCHDigit(a)-p.getBCHDigit(p.G18)>=0)a^=p.G18<<p.getBCHDigit(a)-p.getBCHDigit(p.G18);return e<<12|a},getBCHDigit:function(e){var a=0;while(0!=e)a++,e>>>=1;return a},getPatternPosition:function(e){return p.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,a,n){switch(e){case l.PATTERN000:return(a+n)%2==0;case l.PATTERN001:return a%2==0;case l.PATTERN010:return n%3==0;case l.PATTERN011:return(a+n)%3==0;case l.PATTERN100:return(Math.floor(a/2)+Math.floor(n/3))%2==0;case l.PATTERN101:return a*n%2+a*n%3==0;case l.PATTERN110:return(a*n%2+a*n%3)%2==0;case l.PATTERN111:return(a*n%3+(a+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var a=new o([1],0),n=0;n<e;n++)a=a.multiply(new o([1,v.gexp(n)],0));return a},getLostPoint:function(e){for(var a=e.getModuleCount(),n=0,t=0,r=0;r<a;r++)for(var u=0,l=e.modules[r][0],p=0;p<a;p++){var v=e.modules[r][p];if(p<a-6&&v&&!e.modules[r][p+1]&&e.modules[r][p+2]&&e.modules[r][p+3]&&e.modules[r][p+4]&&!e.modules[r][p+5]&&e.modules[r][p+6]&&(p<a-10?e.modules[r][p+7]&&e.modules[r][p+8]&&e.modules[r][p+9]&&e.modules[r][p+10]&&(n+=40):p>3&&e.modules[r][p-1]&&e.modules[r][p-2]&&e.modules[r][p-3]&&e.modules[r][p-4]&&(n+=40)),r<a-1&&p<a-1){var m=0;v&&m++,e.modules[r+1][p]&&m++,e.modules[r][p+1]&&m++,e.modules[r+1][p+1]&&m++,0!=m&&4!=m||(n+=3)}l^v?u++:(l=v,u>=5&&(n+=3+u-5),u=1),v&&t++}for(p=0;p<a;p++)for(u=0,l=e.modules[0][p],r=0;r<a;r++){v=e.modules[r][p];r<a-6&&v&&!e.modules[r+1][p]&&e.modules[r+2][p]&&e.modules[r+3][p]&&e.modules[r+4][p]&&!e.modules[r+5][p]&&e.modules[r+6][p]&&(r<a-10?e.modules[r+7][p]&&e.modules[r+8][p]&&e.modules[r+9][p]&&e.modules[r+10][p]&&(n+=40):r>3&&e.modules[r-1][p]&&e.modules[r-2][p]&&e.modules[r-3][p]&&e.modules[r-4][p]&&(n+=40)),l^v?u++:(l=v,u>=5&&(n+=3+u-5),u=1)}var o=Math.abs(100*t/a/a-50)/5;return n+=10*o,n}},v={glog:function(e){if(e<1)throw new Error("glog("+e+")");return v.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return v.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},m=0;m<8;m++)v.EXP_TABLE[m]=1<<m;for(m=8;m<256;m++)v.EXP_TABLE[m]=v.EXP_TABLE[m-4]^v.EXP_TABLE[m-5]^v.EXP_TABLE[m-6]^v.EXP_TABLE[m-8];for(m=0;m<255;m++)v.LOG_TABLE[v.EXP_TABLE[m]]=m;function o(e,a){if(void 0==e.length)throw new Error(e.length+"/"+a);var n=0;while(n<e.length&&0==e[n])n++;this.num=new Array(e.length-n+a);for(var t=0;t<e.length-n;t++)this.num[t]=e[t+n]}o.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var a=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var t=0;t<e.getLength();t++)a[n+t]^=v.gexp(v.glog(this.get(n))+v.glog(e.get(t)));return new o(a,0)},mod:function(e){var a=this.getLength(),n=e.getLength();if(a-n<0)return this;for(var t=new Array(a),r=0;r<a;r++)t[r]=this.get(r);while(t.length>=n){var u=v.glog(t[0])-v.glog(e.get(0));for(r=0;r<e.getLength();r++)t[r]^=v.gexp(v.glog(e.get(r))+u);while(0==t[0])t.shift()}return new o(t,0)}};var i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function s(){this.buffer=new Array,this.length=0}r.prototype.getRightType=function(){for(var e=1;e<41;e++){var a=i[4*(e-1)+this.errorCorrectLevel];if(void 0==a)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=a.length/3,t=0,r=0;r<n;r++){var u=a[3*r+0],l=a[3*r+2];t+=l*u}var p=e>9?2:1;if(this.utf8bytes.length+p<t||40==e){this.typeNumber=e,this.rsBlock=a,this.totalDataCount=t;break}}},s.prototype={get:function(e){var a=Math.floor(e/8);return this.buffer[a]>>>7-e%8&1},put:function(e,a){for(var n=0;n<a;n++)this.putBit(e>>>a-n-1&1)},putBit:function(e){var a=Math.floor(this.length/8);this.buffer.length<=a&&this.buffer.push(0),e&&(this.buffer[a]|=128>>>this.length%8),this.length++}};var c=[];n=function(a){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:a.canvasId,context:a.context,usingComponents:a.usingComponents,showLoading:a.showLoading,loadingText:a.loadingText},"string"===typeof a&&(a={text:a}),a)for(var n in a)this.options[n]=a[n];for(var t=null,u=(n=0,c.length);n<u;n++)if(c[n].text==this.options.text&&c[n].text.correctLevel==this.options.correctLevel){t=c[n].obj;break}n==u&&(t=new r(this.options.text,this.options.correctLevel),c.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:t}));var l=function(e){var a=e.options;return a.pdground&&(e.row>1&&e.row<5&&e.col>1&&e.col<5||e.row>e.count-6&&e.row<e.count-2&&e.col>1&&e.col<5||e.row>1&&e.row<5&&e.col>e.count-6&&e.col<e.count-2)?a.pdground:a.foreground},p=function(a){a.showLoading&&e.showLoading({title:a.loadingText,mask:!0});for(var n=e.createCanvasContext(a.canvasId,a.context),r=t.getModuleCount(),u=a.size,p=a.imageSize,m=(u/r).toPrecision(4),o=(u/r).toPrecision(4),i=0;i<r;i++)for(var s=0;s<r;s++){var c=Math.ceil((s+1)*m)-Math.floor(s*m),f=Math.ceil((i+1)*m)-Math.floor(i*m),h=l({row:i,col:s,count:r,options:a});n.setFillStyle(t.modules[i][s]?h:a.background),n.fillRect(Math.round(s*m),Math.round(i*o),c,f)}if(a.image){var d=function(e,n,t,r,u,l,p,v,m){e.setLineWidth(p),e.setFillStyle(a.background),e.setStrokeStyle(a.background),e.beginPath(),e.moveTo(n+l,t),e.arcTo(n+r,t,n+r,t+l,l),e.arcTo(n+r,t+u,n+r-l,t+u,l),e.arcTo(n,t+u,n,t+u-l,l),e.arcTo(n,t,n+l,t,l),e.closePath(),v&&e.fill(),m&&e.stroke()},g=Number(((u-p)/2).toFixed(2)),y=Number(((u-p)/2).toFixed(2));d(n,g,y,p,p,2,6,!0,!0),n.drawImage(a.image,g,y,p,p)}setTimeout(function(){n.draw(!0,function(){setTimeout(function(){e.canvasToTempFilePath({width:a.width,height:a.height,destWidth:a.width,destHeight:a.height,canvasId:a.canvasId,quality:Number(1),success:function(e){a.cbResult&&(v(e.tempFilePath)?v(e.apFilePath)?a.cbResult(e.tempFilePath):a.cbResult(e.apFilePath):a.cbResult(e.tempFilePath))},fail:function(e){a.cbResult&&a.cbResult(e)},complete:function(){e.hideLoading()}},a.context)},a.text.length+100)})},a.usingComponents?0:150)};p(this.options);var v=function(e){var a=typeof e,n=!1;return"number"==a&&""==String(e)?n=!0:"undefined"==a?n=!0:"object"==a?"{}"!=JSON.stringify(e)&&"[]"!=JSON.stringify(e)&&null!=e||(n=!0):"string"==a?""!=e&&"undefined"!=e&&"null"!=e&&"{}"!=e&&"[]"!=e||(n=!0):"function"==a&&(n=!1),n}},n.prototype.clear=function(a){var n=e.createCanvasContext(this.options.canvasId,this.options.context);n.clearRect(0,0,this.options.size,this.options.size),n.draw(!1,function(){a&&a()})}})();var t=n;a.default=t}).call(this,n("6e42")["default"])},"454f":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.httppostfx=a.httppost=a.httpget=void 0;var t=r(n("5bd0"));function r(e){return e&&e.__esModule?e:{default:e}}var u="https://honey.zhihuiyunqi.com/wx",l="https://honey.zhihuiyunqi.com/retail",p=function(a){return t.default.interceptor.request=function(a){a.header={"content-type":"application/json","X-Litemall-Token":e.getStorageSync("token")}},t.default.request({baseUrl:u,url:a,method:"get",dataType:"json"})};a.httpget=p;var v=function(a,n){return t.default.interceptor.request=function(a){a.header={"content-type":"application/json","X-Litemall-Token":e.getStorageSync("token")}},t.default.request({baseUrl:u,url:a,method:"post",dataType:"json",data:n})};a.httppost=v;var m=function(a,n){return t.default.interceptor.request=function(a){a.header={"content-type":"application/x-www-form-urlencoded","X-Litemall-Token":e.getStorageSync("token")}},t.default.request({baseUrl:l,url:a,method:"post",dataType:"json",data:n})};a.httppostfx=m;var o={httpget:p,httppost:v,httppostfx:m};a.default=o}).call(this,n("6e42")["default"])},"4d81":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={appid:"__UNI__FF9AD23"};a.default=t},"5bd0":function(e,a,n){"use strict";(function(e){function n(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={config:{baseUrl:"https://jz.cangluxmt.com/",header:n({"Content-Type":"application/json;charset=UTF-8"},"Content-Type","application/x-www-form-urlencoded"),data:{},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(a){var n=this;return a||(a={}),a.baseUrl=a.baseUrl||this.config.baseUrl,a.dataType=a.dataType||this.config.dataType,a.url=a.baseUrl+a.url,a.data=a.data||{},a.method=a.method||this.config.method,new Promise(function(t,l){var p=null;a.complete=function(e){var a=e.statusCode;if(e.config=p,n.interceptor.response){var r=n.interceptor.response(e);r&&(e=r)}u(e),200===a?t(e):l(e)},p=Object.assign({},n.config,a),p.requestId=(new Date).getTime(),n.interceptor.request&&n.interceptor.request(p),r(p),e.request(p)})},get:function(e,a,n){return n||(n={}),n.url=e,n.data=a,n.method="GET",this.request(n)},post:function(e,a,n){return n||(n={}),n.url=e,n.data=a,n.method="POST",this.request(n)},put:function(e,a,n){return n||(n={}),n.url=e,n.data=a,n.method="PUT",this.request(n)},delete:function(e,a,n){return n||(n={}),n.url=e,n.data=a,n.method="DELETE",this.request(n)}};function r(e){0}function u(e){var a=e.statusCode;switch(a){case 200:break;case 401:break;case 404:break;default:break}}a.default=t}).call(this,n("6e42")["default"])},"66fd":function(e,a,n){"use strict";n.r(a),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function t(e){return void 0===e||null===e}function r(e){return void 0!==e&&null!==e}function u(e){return!0===e}function l(e){return!1===e}function p(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function v(e){return null!==e&&"object"===typeof e}var m=Object.prototype.toString;function o(e){return"[object Object]"===m.call(e)}function i(e){return"[object RegExp]"===m.call(e)}function s(e){var a=parseFloat(String(e));return a>=0&&Math.floor(a)===a&&isFinite(e)}function c(e){return r(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||o(e)&&e.toString===m?JSON.stringify(e,null,2):String(e)}function h(e){var a=parseFloat(e);return isNaN(a)?e:a}function d(e,a){for(var n=Object.create(null),t=e.split(","),r=0;r<t.length;r++)n[t[r]]=!0;return a?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(e,a){if(e.length){var n=e.indexOf(a);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(e,a){return _.call(e,a)}function w(e){var a=Object.create(null);return function(n){var t=a[n];return t||(a[n]=e(n))}}var $=/-(\w)/g,x=w(function(e){return e.replace($,function(e,a){return a?a.toUpperCase():""})}),O=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),T=/\B([A-Z])/g,A=w(function(e){return e.replace(T,"-$1").toLowerCase()});function k(e,a){function n(n){var t=arguments.length;return t?t>1?e.apply(a,arguments):e.call(a,n):e.call(a)}return n._length=e.length,n}function S(e,a){return e.bind(a)}var P=Function.prototype.bind?S:k;function j(e,a){a=a||0;var n=e.length-a,t=new Array(n);while(n--)t[n]=e[n+a];return t}function E(e,a){for(var n in a)e[n]=a[n];return e}function D(e){for(var a={},n=0;n<e.length;n++)e[n]&&E(a,e[n]);return a}function C(e,a,n){}var R=function(e,a,n){return!1},N=function(e){return e};function B(e,a){if(e===a)return!0;var n=v(e),t=v(a);if(!n||!t)return!n&&!t&&String(e)===String(a);try{var r=Array.isArray(e),u=Array.isArray(a);if(r&&u)return e.length===a.length&&e.every(function(e,n){return B(e,a[n])});if(e instanceof Date&&a instanceof Date)return e.getTime()===a.getTime();if(r||u)return!1;var l=Object.keys(e),p=Object.keys(a);return l.length===p.length&&l.every(function(n){return B(e[n],a[n])})}catch(m){return!1}}function I(e,a){for(var n=0;n<e.length;n++)if(B(e[n],a))return n;return-1}function L(e){var a=!1;return function(){a||(a=!0,e.apply(this,arguments))}}var M=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:C,parsePlatformTagName:N,mustUseProp:R,async:!0,_lifecycleHooks:q},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var a=(e+"").charCodeAt(0);return 36===a||95===a}function H(e,a,n,t){Object.defineProperty(e,a,{value:n,enumerable:!!t,writable:!0,configurable:!0})}var G=new RegExp("[^"+V.source+".$_\\d]");function z(e){if(!G.test(e)){var a=e.split(".");return function(e){for(var n=0;n<a.length;n++){if(!e)return;e=e[a[n]]}return e}}}var J,W="__proto__"in{},X="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=K&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),Y=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),ae=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Z),ne=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(X)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(ar){}var re=function(){return void 0===J&&(J=!X&&!K&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ue=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function le(e){return"function"===typeof e&&/native code/.test(e.toString())}var pe,ve="undefined"!==typeof Symbol&&le(Symbol)&&"undefined"!==typeof Reflect&&le(Reflect.ownKeys);pe="undefined"!==typeof Set&&le(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=C,oe=0,ie=function(){this.id=oe++,this.subs=[]};function se(e){ie.SharedObject.targetStack.push(e),ie.SharedObject.target=e}function ce(){ie.SharedObject.targetStack.pop(),ie.SharedObject.target=ie.SharedObject.targetStack[ie.SharedObject.targetStack.length-1]}ie.prototype.addSub=function(e){this.subs.push(e)},ie.prototype.removeSub=function(e){y(this.subs,e)},ie.prototype.depend=function(){ie.SharedObject.target&&ie.SharedObject.target.addDep(this)},ie.prototype.notify=function(){var e=this.subs.slice();for(var a=0,n=e.length;a<n;a++)e[a].update()},ie.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ie.SharedObject.target=null,ie.SharedObject.targetStack=[];var fe=function(e,a,n,t,r,u,l,p){this.tag=e,this.data=a,this.children=n,this.text=t,this.elm=r,this.ns=void 0,this.context=u,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=a&&a.key,this.componentOptions=l,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=p,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,he);var de=function(e){void 0===e&&(e="");var a=new fe;return a.text=e,a.isComment=!0,a};function ge(e){return new fe(void 0,void 0,void 0,String(e))}function ye(e){var a=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return a.ns=e.ns,a.isStatic=e.isStatic,a.key=e.key,a.isComment=e.isComment,a.fnContext=e.fnContext,a.fnOptions=e.fnOptions,a.fnScopeId=e.fnScopeId,a.asyncMeta=e.asyncMeta,a.isCloned=!0,a}var _e=Array.prototype,be=Object.create(_e),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var a=_e[e];H(be,e,function(){var n=[],t=arguments.length;while(t--)n[t]=arguments[t];var r,u=a.apply(this,n),l=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&l.observeArray(r),l.dep.notify(),u})});var $e=Object.getOwnPropertyNames(be),xe=!0;function Oe(e){xe=e}var Te=function(e){this.value=e,this.dep=new ie,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(W?e.push!==e.__proto__.push?ke(e,be,$e):Ae(e,be):ke(e,be,$e),this.observeArray(e)):this.walk(e)};function Ae(e,a){e.__proto__=a}function ke(e,a,n){for(var t=0,r=n.length;t<r;t++){var u=n[t];H(e,u,a[u])}}function Se(e,a){var n;if(v(e)&&!(e instanceof fe))return b(e,"__ob__")&&e.__ob__ instanceof Te?n=e.__ob__:xe&&!re()&&(Array.isArray(e)||o(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Te(e)),a&&n&&n.vmCount++,n}function Pe(e,a,n,t,r){var u=new ie,l=Object.getOwnPropertyDescriptor(e,a);if(!l||!1!==l.configurable){var p=l&&l.get,v=l&&l.set;p&&!v||2!==arguments.length||(n=e[a]);var m=!r&&Se(n);Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:function(){var a=p?p.call(e):n;return ie.SharedObject.target&&(u.depend(),m&&(m.dep.depend(),Array.isArray(a)&&De(a))),a},set:function(a){var t=p?p.call(e):n;a===t||a!==a&&t!==t||p&&!v||(v?v.call(e,a):n=a,m=!r&&Se(a),u.notify())}})}}function je(e,a,n){if(Array.isArray(e)&&s(a))return e.length=Math.max(e.length,a),e.splice(a,1,n),n;if(a in e&&!(a in Object.prototype))return e[a]=n,n;var t=e.__ob__;return e._isVue||t&&t.vmCount?n:t?(Pe(t.value,a,n),t.dep.notify(),n):(e[a]=n,n)}function Ee(e,a){if(Array.isArray(e)&&s(a))e.splice(a,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,a)&&(delete e[a],n&&n.dep.notify())}}function De(e){for(var a=void 0,n=0,t=e.length;n<t;n++)a=e[n],a&&a.__ob__&&a.__ob__.dep.depend(),Array.isArray(a)&&De(a)}Te.prototype.walk=function(e){for(var a=Object.keys(e),n=0;n<a.length;n++)Pe(e,a[n])},Te.prototype.observeArray=function(e){for(var a=0,n=e.length;a<n;a++)Se(e[a])};var Ce=U.optionMergeStrategies;function Re(e,a){if(!a)return e;for(var n,t,r,u=ve?Reflect.ownKeys(a):Object.keys(a),l=0;l<u.length;l++)n=u[l],"__ob__"!==n&&(t=e[n],r=a[n],b(e,n)?t!==r&&o(t)&&o(r)&&Re(t,r):je(e,n,r));return e}function Ne(e,a,n){return n?function(){var t="function"===typeof a?a.call(n,n):a,r="function"===typeof e?e.call(n,n):e;return t?Re(t,r):r}:a?e?function(){return Re("function"===typeof a?a.call(this,this):a,"function"===typeof e?e.call(this,this):e)}:a:e}function Be(e,a){var n=a?e?e.concat(a):Array.isArray(a)?a:[a]:e;return n?Ie(n):n}function Ie(e){for(var a=[],n=0;n<e.length;n++)-1===a.indexOf(e[n])&&a.push(e[n]);return a}function Le(e,a,n,t){var r=Object.create(e||null);return a?E(r,a):r}Ce.data=function(e,a,n){return n?Ne(e,a,n):a&&"function"!==typeof a?e:Ne(e,a)},q.forEach(function(e){Ce[e]=Be}),M.forEach(function(e){Ce[e+"s"]=Le}),Ce.watch=function(e,a,n,t){if(e===ne&&(e=void 0),a===ne&&(a=void 0),!a)return Object.create(e||null);if(!e)return a;var r={};for(var u in E(r,e),a){var l=r[u],p=a[u];l&&!Array.isArray(l)&&(l=[l]),r[u]=l?l.concat(p):Array.isArray(p)?p:[p]}return r},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,a,n,t){if(!e)return a;var r=Object.create(null);return E(r,e),a&&E(r,a),r},Ce.provide=Ne;var Me=function(e,a){return void 0===a?e:a};function qe(e,a){var n=e.props;if(n){var t,r,u,l={};if(Array.isArray(n)){t=n.length;while(t--)r=n[t],"string"===typeof r&&(u=x(r),l[u]={type:null})}else if(o(n))for(var p in n)r=n[p],u=x(p),l[u]=o(r)?r:{type:r};else 0;e.props=l}}function Ue(e,a){var n=e.inject;if(n){var t=e.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)t[n[r]]={from:n[r]};else if(o(n))for(var u in n){var l=n[u];t[u]=o(l)?E({from:u},l):{from:l}}else 0}}function Ve(e){var a=e.directives;if(a)for(var n in a){var t=a[n];"function"===typeof t&&(a[n]={bind:t,update:t})}}function Fe(e,a,n){if("function"===typeof a&&(a=a.options),qe(a,n),Ue(a,n),Ve(a),!a._base&&(a.extends&&(e=Fe(e,a.extends,n)),a.mixins))for(var t=0,r=a.mixins.length;t<r;t++)e=Fe(e,a.mixins[t],n);var u,l={};for(u in e)p(u);for(u in a)b(e,u)||p(u);function p(t){var r=Ce[t]||Me;l[t]=r(e[t],a[t],n,t)}return l}function He(e,a,n,t){if("string"===typeof n){var r=e[a];if(b(r,n))return r[n];var u=x(n);if(b(r,u))return r[u];var l=O(u);if(b(r,l))return r[l];var p=r[n]||r[u]||r[l];return p}}function Ge(e,a,n,t){var r=a[e],u=!b(n,e),l=n[e],p=Xe(Boolean,r.type);if(p>-1)if(u&&!b(r,"default"))l=!1;else if(""===l||l===A(e)){var v=Xe(String,r.type);(v<0||p<v)&&(l=!0)}if(void 0===l){l=ze(t,r,e);var m=xe;Oe(!0),Se(l),Oe(m)}return l}function ze(e,a,n){if(b(a,"default")){var t=a.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof t&&"Function"!==Je(a.type)?t.call(e):t}}function Je(e){var a=e&&e.toString().match(/^\s*function (\w+)/);return a?a[1]:""}function We(e,a){return Je(e)===Je(a)}function Xe(e,a){if(!Array.isArray(a))return We(a,e)?0:-1;for(var n=0,t=a.length;n<t;n++)if(We(a[n],e))return n;return-1}function Ke(e,a,n){se();try{if(a){var t=a;while(t=t.$parent){var r=t.$options.errorCaptured;if(r)for(var u=0;u<r.length;u++)try{var l=!1===r[u].call(t,e,a,n);if(l)return}catch(ar){Qe(ar,t,"errorCaptured hook")}}}Qe(e,a,n)}finally{ce()}}function Ze(e,a,n,t,r){var u;try{u=n?e.apply(a,n):e.call(a),u&&!u._isVue&&c(u)&&!u._handled&&(u.catch(function(e){return Ke(e,t,r+" (Promise/async)")}),u._handled=!0)}catch(ar){Ke(ar,t,r)}return u}function Qe(e,a,n){if(U.errorHandler)try{return U.errorHandler.call(null,e,a,n)}catch(ar){ar!==e&&Ye(ar,null,"config.errorHandler")}Ye(e,a,n)}function Ye(e,a,n){if(!X&&!K||"undefined"===typeof console)throw e;console.error(e)}var ea,aa=[],na=!1;function ta(){na=!1;var e=aa.slice(0);aa.length=0;for(var a=0;a<e.length;a++)e[a]()}if("undefined"!==typeof Promise&&le(Promise)){var ra=Promise.resolve();ea=function(){ra.then(ta),ae&&setTimeout(C)}}else if(Y||"undefined"===typeof MutationObserver||!le(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ea="undefined"!==typeof setImmediate&&le(setImmediate)?function(){setImmediate(ta)}:function(){setTimeout(ta,0)};else{var ua=1,la=new MutationObserver(ta),pa=document.createTextNode(String(ua));la.observe(pa,{characterData:!0}),ea=function(){ua=(ua+1)%2,pa.data=String(ua)}}function va(e,a){var n;if(aa.push(function(){if(e)try{e.call(a)}catch(ar){Ke(ar,a,"nextTick")}else n&&n(a)}),na||(na=!0,ea()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}var ma=new pe;function oa(e){ia(e,ma),ma.clear()}function ia(e,a){var n,t,r=Array.isArray(e);if(!(!r&&!v(e)||Object.isFrozen(e)||e instanceof fe)){if(e.__ob__){var u=e.__ob__.dep.id;if(a.has(u))return;a.add(u)}if(r){n=e.length;while(n--)ia(e[n],a)}else{t=Object.keys(e),n=t.length;while(n--)ia(e[t[n]],a)}}}var sa=w(function(e){var a="&"===e.charAt(0);e=a?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:n,capture:t,passive:a}});function ca(e,a){function n(){var e=arguments,t=n.fns;if(!Array.isArray(t))return Ze(t,null,arguments,a,"v-on handler");for(var r=t.slice(),u=0;u<r.length;u++)Ze(r[u],null,e,a,"v-on handler")}return n.fns=e,n}function fa(e,a,n,r,l,p){var v,m,o,i;for(v in e)m=e[v],o=a[v],i=sa(v),t(m)||(t(o)?(t(m.fns)&&(m=e[v]=ca(m,p)),u(i.once)&&(m=e[v]=l(i.name,m,i.capture)),n(i.name,m,i.capture,i.passive,i.params)):m!==o&&(o.fns=m,e[v]=o));for(v in a)t(e[v])&&(i=sa(v),r(i.name,a[v],i.capture))}function ha(e,a,n){var u=a.options.props;if(!t(u)){var l={},p=e.attrs,v=e.props;if(r(p)||r(v))for(var m in u){var o=A(m);da(l,v,m,o,!0)||da(l,p,m,o,!1)}return l}}function da(e,a,n,t,u){if(r(a)){if(b(a,n))return e[n]=a[n],u||delete a[n],!0;if(b(a,t))return e[n]=a[t],u||delete a[t],!0}return!1}function ga(e){for(var a=0;a<e.length;a++)if(Array.isArray(e[a]))return Array.prototype.concat.apply([],e);return e}function ya(e){return p(e)?[ge(e)]:Array.isArray(e)?ba(e):void 0}function _a(e){return r(e)&&r(e.text)&&l(e.isComment)}function ba(e,a){var n,l,v,m,o=[];for(n=0;n<e.length;n++)l=e[n],t(l)||"boolean"===typeof l||(v=o.length-1,m=o[v],Array.isArray(l)?l.length>0&&(l=ba(l,(a||"")+"_"+n),_a(l[0])&&_a(m)&&(o[v]=ge(m.text+l[0].text),l.shift()),o.push.apply(o,l)):p(l)?_a(m)?o[v]=ge(m.text+l):""!==l&&o.push(ge(l)):_a(l)&&_a(m)?o[v]=ge(m.text+l.text):(u(e._isVList)&&r(l.tag)&&t(l.key)&&r(a)&&(l.key="__vlist"+a+"_"+n+"__"),o.push(l)));return o}function wa(e){var a=e.$options.provide;a&&(e._provided="function"===typeof a?a.call(e):a)}function $a(e){var a=xa(e.$options.inject,e);a&&(Oe(!1),Object.keys(a).forEach(function(n){Pe(e,n,a[n])}),Oe(!0))}function xa(e,a){if(e){for(var n=Object.create(null),t=ve?Reflect.ownKeys(e):Object.keys(e),r=0;r<t.length;r++){var u=t[r];if("__ob__"!==u){var l=e[u].from,p=a;while(p){if(p._provided&&b(p._provided,l)){n[u]=p._provided[l];break}p=p.$parent}if(!p)if("default"in e[u]){var v=e[u].default;n[u]="function"===typeof v?v.call(a):v}else 0}}return n}}function Oa(e,a){if(!e||!e.length)return{};for(var n={},t=0,r=e.length;t<r;t++){var u=e[t],l=u.data;if(l&&l.attrs&&l.attrs.slot&&delete l.attrs.slot,u.context!==a&&u.fnContext!==a||!l||null==l.slot)u.asyncMeta&&u.asyncMeta.data&&"page"===u.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(u):(n.default||(n.default=[])).push(u);else{var p=l.slot,v=n[p]||(n[p]=[]);"template"===u.tag?v.push.apply(v,u.children||[]):v.push(u)}}for(var m in n)n[m].every(Ta)&&delete n[m];return n}function Ta(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Aa(e,a,t){var r,u=Object.keys(a).length>0,l=e?!!e.$stable:!u,p=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(l&&t&&t!==n&&p===t.$key&&!u&&!t.$hasNormal)return t;for(var v in r={},e)e[v]&&"$"!==v[0]&&(r[v]=ka(a,v,e[v]))}else r={};for(var m in a)m in r||(r[m]=Sa(a,m));return e&&Object.isExtensible(e)&&(e._normalized=r),H(r,"$stable",l),H(r,"$key",p),H(r,"$hasNormal",u),r}function ka(e,a,n){var t=function(){var e=arguments.length?n.apply(null,arguments):n({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ya(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,a,{get:t,enumerable:!0,configurable:!0}),t}function Sa(e,a){return function(){return e[a]}}function Pa(e,a){var n,t,u,l,p;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),t=0,u=e.length;t<u;t++)n[t]=a(e[t],t);else if("number"===typeof e)for(n=new Array(e),t=0;t<e;t++)n[t]=a(t+1,t);else if(v(e))if(ve&&e[Symbol.iterator]){n=[];var m=e[Symbol.iterator](),o=m.next();while(!o.done)n.push(a(o.value,n.length)),o=m.next()}else for(l=Object.keys(e),n=new Array(l.length),t=0,u=l.length;t<u;t++)p=l[t],n[t]=a(e[p],p,t);return r(n)||(n=[]),n._isVList=!0,n}function ja(e,a,n,t){var r,u=this.$scopedSlots[e];u?(n=n||{},t&&(n=E(E({},t),n)),r=u(n)||a):r=this.$slots[e]||a;var l=n&&n.slot;return l?this.$createElement("template",{slot:l},r):r}function Ea(e){return He(this.$options,"filters",e,!0)||N}function Da(e,a){return Array.isArray(e)?-1===e.indexOf(a):e!==a}function Ca(e,a,n,t,r){var u=U.keyCodes[a]||n;return r&&t&&!U.keyCodes[a]?Da(r,t):u?Da(u,e):t?A(t)!==a:void 0}function Ra(e,a,n,t,r){if(n)if(v(n)){var u;Array.isArray(n)&&(n=D(n));var l=function(l){if("class"===l||"style"===l||g(l))u=e;else{var p=e.attrs&&e.attrs.type;u=t||U.mustUseProp(a,p,l)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var v=x(l),m=A(l);if(!(v in u)&&!(m in u)&&(u[l]=n[l],r)){var o=e.on||(e.on={});o["update:"+l]=function(e){n[l]=e}}};for(var p in n)l(p)}else;return e}function Na(e,a){var n=this._staticTrees||(this._staticTrees=[]),t=n[e];return t&&!a?t:(t=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ia(t,"__static__"+e,!1),t)}function Ba(e,a,n){return Ia(e,"__once__"+a+(n?"_"+n:""),!0),e}function Ia(e,a,n){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&La(e[t],a+"_"+t,n);else La(e,a,n)}function La(e,a,n){e.isStatic=!0,e.key=a,e.isOnce=n}function Ma(e,a){if(a)if(o(a)){var n=e.on=e.on?E({},e.on):{};for(var t in a){var r=n[t],u=a[t];n[t]=r?[].concat(r,u):u}}else;return e}function qa(e,a,n,t){a=a||{$stable:!n};for(var r=0;r<e.length;r++){var u=e[r];Array.isArray(u)?qa(u,a,n):u&&(u.proxy&&(u.fn.proxy=!0),a[u.key]=u.fn)}return t&&(a.$key=t),a}function Ua(e,a){for(var n=0;n<a.length;n+=2){var t=a[n];"string"===typeof t&&t&&(e[a[n]]=a[n+1])}return e}function Va(e,a){return"string"===typeof e?a+e:e}function Fa(e){e._o=Ba,e._n=h,e._s=f,e._l=Pa,e._t=ja,e._q=B,e._i=I,e._m=Na,e._f=Ea,e._k=Ca,e._b=Ra,e._v=ge,e._e=de,e._u=qa,e._g=Ma,e._d=Ua,e._p=Va}function Ha(e,a,t,r,l){var p,v=this,m=l.options;b(r,"_uid")?(p=Object.create(r),p._original=r):(p=r,r=r._original);var o=u(m._compiled),i=!o;this.data=e,this.props=a,this.children=t,this.parent=r,this.listeners=e.on||n,this.injections=xa(m.inject,r),this.slots=function(){return v.$slots||Aa(e.scopedSlots,v.$slots=Oa(t,r)),v.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Aa(e.scopedSlots,this.slots())}}),o&&(this.$options=m,this.$slots=this.slots(),this.$scopedSlots=Aa(e.scopedSlots,this.$slots)),m._scopeId?this._c=function(e,a,n,t){var u=tn(p,e,a,n,t,i);return u&&!Array.isArray(u)&&(u.fnScopeId=m._scopeId,u.fnContext=r),u}:this._c=function(e,a,n,t){return tn(p,e,a,n,t,i)}}function Ga(e,a,t,u,l){var p=e.options,v={},m=p.props;if(r(m))for(var o in m)v[o]=Ge(o,m,a||n);else r(t.attrs)&&Ja(v,t.attrs),r(t.props)&&Ja(v,t.props);var i=new Ha(t,v,l,u,e),s=p.render.call(null,i._c,i);if(s instanceof fe)return za(s,t,i.parent,p,i);if(Array.isArray(s)){for(var c=ya(s)||[],f=new Array(c.length),h=0;h<c.length;h++)f[h]=za(c[h],t,i.parent,p,i);return f}}function za(e,a,n,t,r){var u=ye(e);return u.fnContext=n,u.fnOptions=t,a.slot&&((u.data||(u.data={})).slot=a.slot),u}function Ja(e,a){for(var n in a)e[x(n)]=a[n]}Fa(Ha.prototype);var Wa={init:function(e,a){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Wa.prepatch(n,n)}else{var t=e.componentInstance=Za(e,xn);t.$mount(a?e.elm:void 0,a)}},prepatch:function(e,a){var n=a.componentOptions,t=a.componentInstance=e.componentInstance;kn(t,n.propsData,n.listeners,a,n.children)},insert:function(e){var a=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,En(n,"mounted")),e.data.keepAlive&&(a._isMounted?Fn(n):Pn(n,!0))},destroy:function(e){var a=e.componentInstance;a._isDestroyed||(e.data.keepAlive?jn(a,!0):a.$destroy())}},Xa=Object.keys(Wa);function Ka(e,a,n,l,p){if(!t(e)){var m=n.$options._base;if(v(e)&&(e=m.extend(e)),"function"===typeof e){var o;if(t(e.cid)&&(o=e,e=fn(o,m),void 0===e))return cn(o,a,n,l,p);a=a||{},st(e),r(a.model)&&en(e.options,a);var i=ha(a,e,p);if(u(e.options.functional))return Ga(e,i,a,n,l);var s=a.on;if(a.on=a.nativeOn,u(e.options.abstract)){var c=a.slot;a={},c&&(a.slot=c)}Qa(a);var f=e.options.name||p,h=new fe("vue-component-"+e.cid+(f?"-"+f:""),a,void 0,void 0,void 0,n,{Ctor:e,propsData:i,listeners:s,tag:p,children:l},o);return h}}}function Za(e,a){var n={_isComponent:!0,_parentVnode:e,parent:a},t=e.data.inlineTemplate;return r(t)&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(n)}function Qa(e){for(var a=e.hook||(e.hook={}),n=0;n<Xa.length;n++){var t=Xa[n],r=a[t],u=Wa[t];r===u||r&&r._merged||(a[t]=r?Ya(u,r):u)}}function Ya(e,a){var n=function(n,t){e(n,t),a(n,t)};return n._merged=!0,n}function en(e,a){var n=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(a.attrs||(a.attrs={}))[n]=a.model.value;var u=a.on||(a.on={}),l=u[t],p=a.model.callback;r(l)?(Array.isArray(l)?-1===l.indexOf(p):l!==p)&&(u[t]=[p].concat(l)):u[t]=p}var an=1,nn=2;function tn(e,a,n,t,r,l){return(Array.isArray(n)||p(n))&&(r=t,t=n,n=void 0),u(l)&&(r=nn),rn(e,a,n,t,r)}function rn(e,a,n,t,u){if(r(n)&&r(n.__ob__))return de();if(r(n)&&r(n.is)&&(a=n.is),!a)return de();var l,p,v;(Array.isArray(t)&&"function"===typeof t[0]&&(n=n||{},n.scopedSlots={default:t[0]},t.length=0),u===nn?t=ya(t):u===an&&(t=ga(t)),"string"===typeof a)?(p=e.$vnode&&e.$vnode.ns||U.getTagNamespace(a),l=U.isReservedTag(a)?new fe(U.parsePlatformTagName(a),n,t,void 0,void 0,e):n&&n.pre||!r(v=He(e.$options,"components",a))?new fe(a,n,t,void 0,void 0,e):Ka(v,n,e,t,a)):l=Ka(a,n,e,t);return Array.isArray(l)?l:r(l)?(r(p)&&un(l,p),r(n)&&ln(n),l):de()}function un(e,a,n){if(e.ns=a,"foreignObject"===e.tag&&(a=void 0,n=!0),r(e.children))for(var l=0,p=e.children.length;l<p;l++){var v=e.children[l];r(v.tag)&&(t(v.ns)||u(n)&&"svg"!==v.tag)&&un(v,a,n)}}function ln(e){v(e.style)&&oa(e.style),v(e.class)&&oa(e.class)}function pn(e){e._vnode=null,e._staticTrees=null;var a=e.$options,t=e.$vnode=a._parentVnode,r=t&&t.context;e.$slots=Oa(a._renderChildren,r),e.$scopedSlots=n,e._c=function(a,n,t,r){return tn(e,a,n,t,r,!1)},e.$createElement=function(a,n,t,r){return tn(e,a,n,t,r,!0)};var u=t&&t.data;Pe(e,"$attrs",u&&u.attrs||n,null,!0),Pe(e,"$listeners",a._parentListeners||n,null,!0)}var vn,mn=null;function on(e){Fa(e.prototype),e.prototype.$nextTick=function(e){return va(e,this)},e.prototype._render=function(){var e,a=this,n=a.$options,t=n.render,r=n._parentVnode;r&&(a.$scopedSlots=Aa(r.data.scopedSlots,a.$slots,a.$scopedSlots)),a.$vnode=r;try{mn=a,e=t.call(a._renderProxy,a.$createElement)}catch(ar){Ke(ar,a,"render"),e=a._vnode}finally{mn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=de()),e.parent=r,e}}function sn(e,a){return(e.__esModule||ve&&"Module"===e[Symbol.toStringTag])&&(e=e.default),v(e)?a.extend(e):e}function cn(e,a,n,t,r){var u=de();return u.asyncFactory=e,u.asyncMeta={data:a,context:n,children:t,tag:r},u}function fn(e,a){if(u(e.error)&&r(e.errorComp))return e.errorComp;if(r(e.resolved))return e.resolved;var n=mn;if(n&&r(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),u(e.loading)&&r(e.loadingComp))return e.loadingComp;if(n&&!r(e.owners)){var l=e.owners=[n],p=!0,m=null,o=null;n.$on("hook:destroyed",function(){return y(l,n)});var i=function(e){for(var a=0,n=l.length;a<n;a++)l[a].$forceUpdate();e&&(l.length=0,null!==m&&(clearTimeout(m),m=null),null!==o&&(clearTimeout(o),o=null))},s=L(function(n){e.resolved=sn(n,a),p?l.length=0:i(!0)}),f=L(function(a){r(e.errorComp)&&(e.error=!0,i(!0))}),h=e(s,f);return v(h)&&(c(h)?t(e.resolved)&&h.then(s,f):c(h.component)&&(h.component.then(s,f),r(h.error)&&(e.errorComp=sn(h.error,a)),r(h.loading)&&(e.loadingComp=sn(h.loading,a),0===h.delay?e.loading=!0:m=setTimeout(function(){m=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,i(!1))},h.delay||200)),r(h.timeout)&&(o=setTimeout(function(){o=null,t(e.resolved)&&f(null)},h.timeout)))),p=!1,e.loading?e.loadingComp:e.resolved}}function hn(e){return e.isComment&&e.asyncFactory}function dn(e){if(Array.isArray(e))for(var a=0;a<e.length;a++){var n=e[a];if(r(n)&&(r(n.componentOptions)||hn(n)))return n}}function gn(e){e._events=Object.create(null),e._hasHookEvent=!1;var a=e.$options._parentListeners;a&&wn(e,a)}function yn(e,a){vn.$on(e,a)}function _n(e,a){vn.$off(e,a)}function bn(e,a){var n=vn;return function t(){var r=a.apply(null,arguments);null!==r&&n.$off(e,t)}}function wn(e,a,n){vn=e,fa(a,n||{},yn,_n,bn,e),vn=void 0}function $n(e){var a=/^hook:/;e.prototype.$on=function(e,n){var t=this;if(Array.isArray(e))for(var r=0,u=e.length;r<u;r++)t.$on(e[r],n);else(t._events[e]||(t._events[e]=[])).push(n),a.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,a){var n=this;function t(){n.$off(e,t),a.apply(n,arguments)}return t.fn=a,n.$on(e,t),n},e.prototype.$off=function(e,a){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)n.$off(e[t],a);return n}var u,l=n._events[e];if(!l)return n;if(!a)return n._events[e]=null,n;var p=l.length;while(p--)if(u=l[p],u===a||u.fn===a){l.splice(p,1);break}return n},e.prototype.$emit=function(e){var a=this,n=a._events[e];if(n){n=n.length>1?j(n):n;for(var t=j(arguments,1),r='event handler for "'+e+'"',u=0,l=n.length;u<l;u++)Ze(n[u],a,t,a,r)}return a}}var xn=null;function On(e){var a=xn;return xn=e,function(){xn=a}}function Tn(e){var a=e.$options,n=a.parent;if(n&&!a.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function An(e){e.prototype._update=function(e,a){var n=this,t=n.$el,r=n._vnode,u=On(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,a,!1),u(),t&&(t.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){En(e,"beforeDestroy"),e._isBeingDestroyed=!0;var a=e.$parent;!a||a._isBeingDestroyed||e.$options.abstract||y(a.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),En(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function kn(e,a,t,r,u){var l=r.data.scopedSlots,p=e.$scopedSlots,v=!!(l&&!l.$stable||p!==n&&!p.$stable||l&&e.$scopedSlots.$key!==l.$key),m=!!(u||e.$options._renderChildren||v);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=u,e.$attrs=r.data.attrs||n,e.$listeners=t||n,a&&e.$options.props){Oe(!1);for(var o=e._props,i=e.$options._propKeys||[],s=0;s<i.length;s++){var c=i[s],f=e.$options.props;o[c]=Ge(c,f,a,e)}Oe(!0),e.$options.propsData=a}t=t||n;var h=e.$options._parentListeners;e.$options._parentListeners=t,wn(e,t,h),m&&(e.$slots=Oa(u,r.context),e.$forceUpdate())}function Sn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pn(e,a){if(a){if(e._directInactive=!1,Sn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);En(e,"activated")}}function jn(e,a){if((!a||(e._directInactive=!0,!Sn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)jn(e.$children[n]);En(e,"deactivated")}}function En(e,a){se();var n=e.$options[a],t=a+" hook";if(n)for(var r=0,u=n.length;r<u;r++)Ze(n[r],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+a),ce()}var Dn=[],Cn=[],Rn={},Nn=!1,Bn=!1,In=0;function Ln(){In=Dn.length=Cn.length=0,Rn={},Nn=Bn=!1}var Mn=Date.now;if(X&&!Y){var qn=window.performance;qn&&"function"===typeof qn.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return qn.now()})}function Un(){var e,a;for(Mn(),Bn=!0,Dn.sort(function(e,a){return e.id-a.id}),In=0;In<Dn.length;In++)e=Dn[In],e.before&&e.before(),a=e.id,Rn[a]=null,e.run();var n=Cn.slice(),t=Dn.slice();Ln(),Hn(n),Vn(t),ue&&U.devtools&&ue.emit("flush")}function Vn(e){var a=e.length;while(a--){var n=e[a],t=n.vm;t._watcher===n&&t._isMounted&&!t._isDestroyed&&En(t,"updated")}}function Fn(e){e._inactive=!1,Cn.push(e)}function Hn(e){for(var a=0;a<e.length;a++)e[a]._inactive=!0,Pn(e[a],!0)}function Gn(e){var a=e.id;if(null==Rn[a]){if(Rn[a]=!0,Bn){var n=Dn.length-1;while(n>In&&Dn[n].id>e.id)n--;Dn.splice(n+1,0,e)}else Dn.push(e);Nn||(Nn=!0,va(Un))}}var zn=0,Jn=function(e,a,n,t,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pe,this.newDepIds=new pe,this.expression="","function"===typeof a?this.getter=a:(this.getter=z(a),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var e;se(this);var a=this.vm;try{e=this.getter.call(a,a)}catch(ar){if(!this.user)throw ar;Ke(ar,a,'getter for watcher "'+this.expression+'"')}finally{this.deep&&oa(e),ce(),this.cleanupDeps()}return e},Jn.prototype.addDep=function(e){var a=e.id;this.newDepIds.has(a)||(this.newDepIds.add(a),this.newDeps.push(e),this.depIds.has(a)||e.addSub(this))},Jn.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var a=this.deps[e];this.newDepIds.has(a.id)||a.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Jn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||v(e)||this.deep){var a=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,a)}catch(ar){Ke(ar,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,a)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:C,set:C};function Xn(e,a,n){Wn.get=function(){return this[a][n]},Wn.set=function(e){this[a][n]=e},Object.defineProperty(e,n,Wn)}function Kn(e){e._watchers=[];var a=e.$options;a.props&&Zn(e,a.props),a.methods&&ut(e,a.methods),a.data?Qn(e):Se(e._data={},!0),a.computed&&at(e,a.computed),a.watch&&a.watch!==ne&&lt(e,a.watch)}function Zn(e,a){var n=e.$options.propsData||{},t=e._props={},r=e.$options._propKeys=[],u=!e.$parent;u||Oe(!1);var l=function(u){r.push(u);var l=Ge(u,a,n,e);Pe(t,u,l),u in e||Xn(e,"_props",u)};for(var p in a)l(p);Oe(!0)}function Qn(e){var a=e.$options.data;a=e._data="function"===typeof a?Yn(a,e):a||{},o(a)||(a={});var n=Object.keys(a),t=e.$options.props,r=(e.$options.methods,n.length);while(r--){var u=n[r];0,t&&b(t,u)||F(u)||Xn(e,"_data",u)}Se(a,!0)}function Yn(e,a){se();try{return e.call(a,a)}catch(ar){return Ke(ar,a,"data()"),{}}finally{ce()}}var et={lazy:!0};function at(e,a){var n=e._computedWatchers=Object.create(null),t=re();for(var r in a){var u=a[r],l="function"===typeof u?u:u.get;0,t||(n[r]=new Jn(e,l||C,C,et)),r in e||nt(e,r,u)}}function nt(e,a,n){var t=!re();"function"===typeof n?(Wn.get=t?tt(a):rt(n),Wn.set=C):(Wn.get=n.get?t&&!1!==n.cache?tt(a):rt(n.get):C,Wn.set=n.set||C),Object.defineProperty(e,a,Wn)}function tt(e){return function(){var a=this._computedWatchers&&this._computedWatchers[e];if(a)return a.dirty&&a.evaluate(),ie.SharedObject.target&&a.depend(),a.value}}function rt(e){return function(){return e.call(this,this)}}function ut(e,a){e.$options.props;for(var n in a)e[n]="function"!==typeof a[n]?C:P(a[n],e)}function lt(e,a){for(var n in a){var t=a[n];if(Array.isArray(t))for(var r=0;r<t.length;r++)pt(e,n,t[r]);else pt(e,n,t)}}function pt(e,a,n,t){return o(n)&&(t=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(a,n,t)}function vt(e){var a={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",a),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=je,e.prototype.$delete=Ee,e.prototype.$watch=function(e,a,n){var t=this;if(o(a))return pt(t,e,a,n);n=n||{},n.user=!0;var r=new Jn(t,e,a,n);if(n.immediate)try{a.call(t,r.value)}catch(u){Ke(u,t,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var mt=0;function ot(e){e.prototype._init=function(e){var a=this;a._uid=mt++,a._isVue=!0,e&&e._isComponent?it(a,e):a.$options=Fe(st(a.constructor),e||{},a),a._renderProxy=a,a._self=a,Tn(a),gn(a),pn(a),En(a,"beforeCreate"),"mp-toutiao"!==a.mpHost&&$a(a),Kn(a),"mp-toutiao"!==a.mpHost&&wa(a),"mp-toutiao"!==a.mpHost&&En(a,"created"),a.$options.el&&a.$mount(a.$options.el)}}function it(e,a){var n=e.$options=Object.create(e.constructor.options),t=a._parentVnode;n.parent=a.parent,n._parentVnode=t;var r=t.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,a.render&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns)}function st(e){var a=e.options;if(e.super){var n=st(e.super),t=e.superOptions;if(n!==t){e.superOptions=n;var r=ct(e);r&&E(e.extendOptions,r),a=e.options=Fe(n,e.extendOptions),a.name&&(a.components[a.name]=e)}}return a}function ct(e){var a,n=e.options,t=e.sealedOptions;for(var r in n)n[r]!==t[r]&&(a||(a={}),a[r]=n[r]);return a}function ft(e){this._init(e)}function ht(e){e.use=function(e){var a=this._installedPlugins||(this._installedPlugins=[]);if(a.indexOf(e)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),a.push(e),this}}function dt(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function gt(e){e.cid=0;var a=1;e.extend=function(e){e=e||{};var n=this,t=n.cid,r=e._Ctor||(e._Ctor={});if(r[t])return r[t];var u=e.name||n.options.name;var l=function(e){this._init(e)};return l.prototype=Object.create(n.prototype),l.prototype.constructor=l,l.cid=a++,l.options=Fe(n.options,e),l["super"]=n,l.options.props&&yt(l),l.options.computed&&_t(l),l.extend=n.extend,l.mixin=n.mixin,l.use=n.use,M.forEach(function(e){l[e]=n[e]}),u&&(l.options.components[u]=l),l.superOptions=n.options,l.extendOptions=e,l.sealedOptions=E({},l.options),r[t]=l,l}}function yt(e){var a=e.options.props;for(var n in a)Xn(e.prototype,"_props",n)}function _t(e){var a=e.options.computed;for(var n in a)nt(e.prototype,n,a[n])}function bt(e){M.forEach(function(a){e[a]=function(e,n){return n?("component"===a&&o(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===a&&"function"===typeof n&&(n={bind:n,update:n}),this.options[a+"s"][e]=n,n):this.options[a+"s"][e]}})}function wt(e){return e&&(e.Ctor.options.name||e.tag)}function $t(e,a){return Array.isArray(e)?e.indexOf(a)>-1:"string"===typeof e?e.split(",").indexOf(a)>-1:!!i(e)&&e.test(a)}function xt(e,a){var n=e.cache,t=e.keys,r=e._vnode;for(var u in n){var l=n[u];if(l){var p=wt(l.componentOptions);p&&!a(p)&&Ot(n,u,t,r)}}}function Ot(e,a,n,t){var r=e[a];!r||t&&r.tag===t.tag||r.componentInstance.$destroy(),e[a]=null,y(n,a)}ot(ft),vt(ft),$n(ft),An(ft),on(ft);var Tt=[String,RegExp,Array],At={name:"keep-alive",abstract:!0,props:{include:Tt,exclude:Tt,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ot(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(a){xt(e,function(e){return $t(a,e)})}),this.$watch("exclude",function(a){xt(e,function(e){return!$t(a,e)})})},render:function(){var e=this.$slots.default,a=dn(e),n=a&&a.componentOptions;if(n){var t=wt(n),r=this,u=r.include,l=r.exclude;if(u&&(!t||!$t(u,t))||l&&t&&$t(l,t))return a;var p=this,v=p.cache,m=p.keys,o=null==a.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):a.key;v[o]?(a.componentInstance=v[o].componentInstance,y(m,o),m.push(o)):(v[o]=a,m.push(o),this.max&&m.length>parseInt(this.max)&&Ot(v,m[0],m,this._vnode)),a.data.keepAlive=!0}return a||e&&e[0]}},kt={KeepAlive:At};function St(e){var a={get:function(){return U}};Object.defineProperty(e,"config",a),e.util={warn:me,extend:E,mergeOptions:Fe,defineReactive:Pe},e.set=je,e.delete=Ee,e.nextTick=va,e.observable=function(e){return Se(e),e},e.options=Object.create(null),M.forEach(function(a){e.options[a+"s"]=Object.create(null)}),e.options._base=e,E(e.options.components,kt),ht(e),dt(e),gt(e),bt(e)}St(ft),Object.defineProperty(ft.prototype,"$isServer",{get:re}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Ha}),ft.version="2.6.10";var Pt="[object Array]",jt="[object Object]";function Et(e,a){var n={};return Dt(e,a),Ct(e,a,"",n),n}function Dt(e,a){if(e!==a){var n=Nt(e),t=Nt(a);if(n==jt&&t==jt){if(Object.keys(e).length>=Object.keys(a).length)for(var r in a){var u=e[r];void 0===u?e[r]=null:Dt(u,a[r])}}else n==Pt&&t==Pt&&e.length>=a.length&&a.forEach(function(a,n){Dt(e[n],a)})}}function Ct(e,a,n,t){if(e!==a){var r=Nt(e),u=Nt(a);if(r==jt)if(u!=jt||Object.keys(e).length<Object.keys(a).length)Rt(t,n,e);else{var l=function(r){var u=e[r],l=a[r],p=Nt(u),v=Nt(l);if(p!=Pt&&p!=jt)u!=a[r]&&Rt(t,(""==n?"":n+".")+r,u);else if(p==Pt)v!=Pt?Rt(t,(""==n?"":n+".")+r,u):u.length<l.length?Rt(t,(""==n?"":n+".")+r,u):u.forEach(function(e,a){Ct(e,l[a],(""==n?"":n+".")+r+"["+a+"]",t)});else if(p==jt)if(v!=jt||Object.keys(u).length<Object.keys(l).length)Rt(t,(""==n?"":n+".")+r,u);else for(var m in u)Ct(u[m],l[m],(""==n?"":n+".")+r+"."+m,t)};for(var p in e)l(p)}else r==Pt?u!=Pt?Rt(t,n,e):e.length<a.length?Rt(t,n,e):e.forEach(function(e,r){Ct(e,a[r],n+"["+r+"]",t)}):Rt(t,n,e)}}function Rt(e,a,n){e[a]=n}function Nt(e){return Object.prototype.toString.call(e)}function Bt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var n=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<n.length;t++)n[t]()}}function It(e){return Dn.find(function(a){return e._watcher===a})}function Lt(e,a){if(!e.__next_tick_pending&&!It(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=e.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+e._uid+"]:nextVueTick")}return va(a,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var r;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(a)try{a.call(e)}catch(ar){Ke(ar,e,"nextTick")}else r&&r(e)}),!a&&"undefined"!==typeof Promise)return new Promise(function(e){r=e})}function Mt(e){var a=Object.create(null),n=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return n.reduce(function(a,n){return a[n]=e[n],a},a),Object.assign(a,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(a["name"]=e.name,a["value"]=e.value),JSON.parse(JSON.stringify(a))}var qt=function(e,a){var n=this;if(null!==a&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,r=Object.create(null);try{r=Mt(this)}catch(p){console.error(p)}r.__webviewId__=t.data.__webviewId__;var u=Object.create(null);Object.keys(r).forEach(function(e){u[e]=t.data[e]});var l=Et(r,u);Object.keys(l).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(l)),this.__next_tick_pending=!0,t.setData(l,function(){n.__next_tick_pending=!1,Bt(n)})):Bt(this)}};function Ut(){}function Vt(e,a,n){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&En(e,"beforeMount");var t=function(){e._update(e._render(),n)};return new Jn(e,t,C,{before:function(){e._isMounted&&!e._isDestroyed&&En(e,"beforeUpdate")}},!0),n=!1,e}function Ft(e,a){return r(e)||r(a)?Ht(e,Gt(a)):""}function Ht(e,a){return e?a?e+" "+a:e:a||""}function Gt(e){return Array.isArray(e)?zt(e):v(e)?Jt(e):"string"===typeof e?e:""}function zt(e){for(var a,n="",t=0,u=e.length;t<u;t++)r(a=Gt(e[t]))&&""!==a&&(n&&(n+=" "),n+=a);return n}function Jt(e){var a="";for(var n in e)e[n]&&(a&&(a+=" "),a+=n);return a}var Wt=w(function(e){var a={},n=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(t);n.length>1&&(a[n[0].trim()]=n[1].trim())}}),a});function Xt(e){return Array.isArray(e)?D(e):"string"===typeof e?Wt(e):e}var Kt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zt(e,a){var n=a.split("."),t=n[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===n.length?e[t]:Zt(e[t],n.slice(1).join("."))}function Qt(e){e.config.errorHandler=function(e){console.error(e)};var a=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:j(arguments,1)}),a.apply(this,arguments)},e.prototype.$nextTick=function(e){return Lt(this,e)},Kt.forEach(function(a){e.prototype[a]=function(e){if(this.$scope)return this.$scope[a](e)}}),e.prototype.__init_provide=wa,e.prototype.__init_injections=$a,e.prototype.__call_hook=function(e,a){var n=this;se();var t,r=n.$options[e],u=e+" hook";if(r)for(var l=0,p=r.length;l<p;l++)t=Ze(r[l],n,a?[a]:null,n,u);return n._hasHookEvent&&n.$emit("hook:"+e),ce(),t},e.prototype.__set_model=function(e,a,n,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(n=n.trim()),-1!==t.indexOf("number")&&(n=this._n(n))),e||(e=this),e[a]=n},e.prototype.__set_sync=function(e,a,n){e||(e=this),e[a]=n},e.prototype.__get_orig=function(e){return o(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,a){return Zt(a||this,e)},e.prototype.__get_class=function(e,a){return Ft(a,e)},e.prototype.__get_style=function(e,a){if(!e&&!a)return"";var n=Xt(e),t=a?E(a,n):n;return Object.keys(t).map(function(e){return A(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,a){var n,t,r,u,l;if(Array.isArray(e)){for(n=new Array(e.length),t=0,r=e.length;t<r;t++)n[t]=a(e[t],t);return n}if(v(e)){for(u=Object.keys(e),n=Object.create(null),t=0,r=u.length;t<r;t++)l=u[t],n[l]=a(e[l],l,t);return n}return[]}}var Yt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(e){var a=e.extend;e.extend=function(e){e=e||{};var n=e.methods;return n&&Object.keys(n).forEach(function(a){-1!==Yt.indexOf(a)&&(e[a]=n[a],delete n[a])}),a.call(this,e)};var n=e.config.optionMergeStrategies,t=n.created;Yt.forEach(function(e){n[e]=t}),e.prototype.__lifecycle_hooks__=Yt}ft.prototype.__patch__=qt,ft.prototype.$mount=function(e,a){return Vt(this,e,a)},er(ft),Qt(ft),a["default"]=ft}.call(this,n("c8ba"))},"6e42":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.createApp=fa,a.createComponent=Oa,a.createPage=xa,a.default=void 0;var t=r(n("66fd"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,a){return v(e)||p(e,a)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(e,a){var n=[],t=!0,r=!1,u=void 0;try{for(var l,p=e[Symbol.iterator]();!(t=(l=p.next()).done);t=!0)if(n.push(l.value),a&&n.length===a)break}catch(v){r=!0,u=v}finally{try{t||null==p["return"]||p["return"]()}finally{if(r)throw u}}return n}function v(e){if(Array.isArray(e))return e}function m(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e){return c(e)||s(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}var f=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===f.call(e)}function _(e,a){return h.call(e,a)}function b(){}function w(e){var a=Object.create(null);return function(n){var t=a[n];return t||(a[n]=e(n))}}var $=/-(\w)/g,x=w(function(e){return e.replace($,function(e,a){return a?a.toUpperCase():""})}),O=["invoke","success","fail","complete","returnValue"],T={},A={};function k(e,a){var n=a?e?e.concat(a):Array.isArray(a)?a:[a]:e;return n?S(n):n}function S(e){for(var a=[],n=0;n<e.length;n++)-1===a.indexOf(e[n])&&a.push(e[n]);return a}function P(e,a){var n=e.indexOf(a);-1!==n&&e.splice(n,1)}function j(e,a){Object.keys(a).forEach(function(n){-1!==O.indexOf(n)&&d(a[n])&&(e[n]=k(e[n],a[n]))})}function E(e,a){e&&a&&Object.keys(a).forEach(function(n){-1!==O.indexOf(n)&&d(a[n])&&P(e[n],a[n])})}function D(e,a){"string"===typeof e&&y(a)?j(A[e]||(A[e]={}),a):y(e)&&j(T,e)}function C(e,a){"string"===typeof e?y(a)?E(A[e],a):delete A[e]:y(e)&&E(T,e)}function R(e){return function(a){return e(a)||a}}function N(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function B(e,a){for(var n=!1,t=0;t<e.length;t++){var r=e[t];if(n)n=Promise.then(R(r));else{var u=r(a);if(N(u)&&(n=Promise.resolve(u)),!1===u)return{then:function(){}}}}return n||{then:function(e){return e(a)}}}function I(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(e[n])){var t=a[n];a[n]=function(a){B(e[n],a).then(function(e){return d(t)&&t(e)||e})}}}),a}function L(e,a){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,o(T.returnValue));var t=A[e];return t&&Array.isArray(t.returnValue)&&n.push.apply(n,o(t.returnValue)),n.forEach(function(e){a=e(a)||a}),a}function M(e){var a=Object.create(null);Object.keys(T).forEach(function(e){"returnValue"!==e&&(a[e]=T[e].slice())});var n=A[e];return n&&Object.keys(n).forEach(function(e){"returnValue"!==e&&(a[e]=(a[e]||[]).concat(n[e]))}),a}function q(e,a,n){for(var t=arguments.length,r=new Array(t>3?t-3:0),u=3;u<t;u++)r[u-3]=arguments[u];var l=M(e);if(l&&Object.keys(l).length){if(Array.isArray(l.invoke)){var p=B(l.invoke,n);return p.then(function(e){return a.apply(void 0,[I(l,e)].concat(r))})}return a.apply(void 0,[I(l,n)].concat(r))}return a.apply(void 0,[n].concat(r))}var U={returnValue:function(e){return N(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function G(e){return F.test(e)}function z(e){return V.test(e)}function J(e){return H.test(e)}function W(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function X(e){return!(G(e)||z(e)||J(e))}function K(e,a){return X(e)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return d(n.success)||d(n.fail)||d(n.complete)?L(e,q.apply(void 0,[e,a,n].concat(r))):L(e,W(new Promise(function(t,u){q.apply(void 0,[e,a,Object.assign({},n,{success:t,fail:u})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var a=this.constructor;return this.then(function(n){return a.resolve(e()).then(function(){return n})},function(n){return a.resolve(e()).then(function(){throw n})})})})))}:a}var Z=1e-4,Q=750,Y=!1,ee=0,ae=0;function ne(){var e=wx.getSystemInfoSync(),a=e.platform,n=e.pixelRatio,t=e.windowWidth;ee=t,ae=n,Y="ios"===a}function te(e,a){if(0===ee&&ne(),e=Number(e),0===e)return 0;var n=e/Q*(a||ee);return n<0&&(n=-n),n=Math.floor(n+Z),0===n?1!==ae&&Y?.5:1:e<0?-n:n}var re={promiseInterceptor:U},ue=Object.freeze({upx2px:te,interceptors:re,addInterceptor:D,removeInterceptor:C}),le={},pe=[],ve=[],me=["success","fail","cancel","complete"];function oe(e,a,n){return function(t){return a(se(e,t,n))}}function ie(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(a)){var u=!0===r?a:{};for(var l in d(n)&&(n=n(a,u)||{}),a)if(_(n,l)){var p=n[l];d(p)&&(p=p(a[l],a,u)),p?g(p)?u[p]=a[l]:y(p)&&(u[p.name?p.name:l]=p.value):console.warn("app-plus ".concat(e,"暂不支持").concat(l))}else-1!==me.indexOf(l)?u[l]=oe(e,a[l],t):r||(u[l]=a[l]);return u}return d(a)&&(a=oe(e,a,t)),a}function se(e,a,n){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(le.returnValue)&&(a=le.returnValue(e,a)),ie(e,a,n,{},t)}function ce(e,a){if(_(le,e)){var n=le[e];return n?function(a,t){var r=n;d(n)&&(r=n(a)),a=ie(e,a,r.args,r.returnValue);var u=[a];"undefined"!==typeof t&&u.push(t);var l=wx[r.name||e].apply(wx,u);return z(e)?se(e,l,r.returnValue,G(e)):l}:function(){console.error("app-plus 暂不支持".concat(e))}}return a}var fe=Object.create(null),he=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(a){var n=a.fail,t=a.complete,r={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(n)&&n(r),d(t)&&t(r)}}he.forEach(function(e){fe[e]=de(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,a,n){return e[a].apply(e,n)}function _e(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function be(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function $e(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var xe=Object.freeze({$on:_e,$off:be,$once:we,$emit:$e});function Oe(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function Te(e){e.$processed=!0,e.postMessage=function(a){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:a},e.id)};var a=[];if(e.onMessage=function(e){a.push(e)},e.$consumeMessage=function(e){a.forEach(function(a){return a(e)})},e.__uniapp_mask_id){var n=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var a=e.mask;Oe("uni-tabview").setMask({color:a})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),r=e.show,u=e.hide,l=e.close,p=function(){t.setStyle({mask:n})},v=function(){t.setStyle({mask:"none"})};e.show=function(){p();for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return r.apply(e,n)},e.hide=function(){v();for(var a=arguments.length,n=new Array(a),t=0;t<a;t++)n[t]=arguments[t];return u.apply(e,n)},e.close=function(){v(),a=[];for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return l.apply(e,t)}}}function Ae(e){var a=plus.webview.getWebviewById(e);return a&&!a.$processed&&Te(a),a}var ke=Object.freeze({getSubNVueById:Ae,requireNativePlugin:Oe}),Se=Page,Pe=Component,je=/:/g,Ee=w(function(e){return x(e.replace(je,"-"))});function De(e){if(wx.canIUse("nextTick")){var a=e.triggerEvent;e.triggerEvent=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),u=1;u<t;u++)r[u-1]=arguments[u];return a.apply(e,[Ee(n)].concat(r))}}}function Ce(e,a){var n=a[e];a[e]=n?function(){De(this);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return n.apply(this,a)}:function(){De(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),Se(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),Pe(e)};var Re=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ne(e,a){var n=e.$mp[e.mpType];a.forEach(function(a){_(n,a)&&(e[a]=n[a])})}function Be(e,a){if(!a)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(a=a.default||a,d(a))return!!d(a.extendOptions[e])||!!(a.super&&a.super.options&&Array.isArray(a.super.options[e]));if(d(a[e]))return!0;var n=a.mixins;return Array.isArray(n)?!!n.find(function(a){return Be(e,a)}):void 0}function Ie(e,a,n){a.forEach(function(a){Be(a,n)&&(e[a]=function(e){return this.$vm&&this.$vm.__call_hook(a,e)})})}function Le(e,a){var n;return a=a.default||a,d(a)?(n=a,a=n.extendOptions):n=e.extend(a),[n,a]}function Me(e,a){if(Array.isArray(a)&&a.length){var n=Object.create(null);a.forEach(function(e){n[e]=!0}),e.$scopedSlots=e.$slots=n}}function qe(e,a){e=(e||"").split(",");var n=e.length;1===n?a._$vueId=e[0]:2===n&&(a._$vueId=e[0],a._$vuePid=e[1])}function Ue(e,a){var n=e.data||{},t=e.methods||{};if("function"===typeof n)try{n=n.call(a)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return y(n)||(n={}),Object.keys(t).forEach(function(e){-1!==a.__lifecycle_hooks__.indexOf(e)||_(n,e)||(n[e]=t[e])}),n}var Ve=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(a,n){this.$vm&&(this.$vm[e]=a)}}function He(e,a){var n=e["behaviors"],t=e["extends"],r=e["mixins"],u=e["props"];u||(e["props"]=u=[]);var l=[];return Array.isArray(n)&&n.forEach(function(e){l.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(u)?(u.push("name"),u.push("value")):(u["name"]={type:String,default:""},u["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&l.push(a({properties:ze(t.props,!0)})),Array.isArray(r)&&r.forEach(function(e){y(e)&&e.props&&l.push(a({properties:ze(e.props,!0)}))}),l}function Ge(e,a,n,t){return Array.isArray(a)&&1===a.length?a[0]:a}function ze(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return a||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(e,a){var n=Object.create(null);e.forEach(function(e){n[e]=!0}),this.setData({$slots:n})}}),Array.isArray(e)?e.forEach(function(e){n[e]={type:null,observer:Fe(e)}}):y(e)&&Object.keys(e).forEach(function(a){var t=e[a];if(y(t)){var r=t["default"];d(r)&&(r=r()),t.type=Ge(a,t.type),n[a]={type:-1!==Ve.indexOf(t.type)?t.type:null,value:r,observer:Fe(a)}}else{var u=Ge(a,t);n[a]={type:-1!==Ve.indexOf(u)?u:null,observer:Fe(a)}}}),n}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(a){}return e.stopPropagation=b,e.preventDefault=b,e.target=e.target||{},_(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function We(e,a){var n=e;return a.forEach(function(a){var t=a[0],r=a[2];if(t||"undefined"!==typeof r){var u=a[1],l=a[3],p=t?e.__get_value(t,n):n;Number.isInteger(p)?n=r:u?Array.isArray(p)?n=p.find(function(a){return e.__get_value(u,a)===r}):y(p)?n=Object.keys(p).find(function(a){return e.__get_value(u,p[a])===r}):console.error("v-for 暂不支持循环数据：",p):n=p[r],l&&(n=e.__get_value(l,n))}}),n}function Xe(e,a,n){var t={};return Array.isArray(a)&&a.length&&a.forEach(function(a,r){"string"===typeof a?a?"$event"===a?t["$"+r]=n:0===a.indexOf("$event.")?t["$"+r]=e.__get_value(a.replace("$event.",""),n):t["$"+r]=e.__get_value(a):t["$"+r]=e:t["$"+r]=We(e,a)}),t}function Ke(e){for(var a={},n=1;n<e.length;n++){var t=e[n];a[t[0]]=t[1]}return a}function Ze(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,l=!1;if(r&&(l=a.currentTarget&&a.currentTarget.dataset&&"wx"===a.currentTarget.dataset.comType,!n.length))return l?[a]:a.detail.__args__||a.detail;var p=Xe(e,t,a),v=[];return n.forEach(function(e){"$event"===e?"__set_model"!==u||r?r&&!l?v.push(a.detail.__args__[0]):v.push(a):v.push(a.target.value):Array.isArray(e)&&"o"===e[0]?v.push(Ke(e)):"string"===typeof e&&_(p,e)?v.push(p[e]):v.push(e)}),v}var Qe="~",Ye="^";function ea(e,a){return e===a||"regionchange"===a&&("begin"===e||"end"===e)}function aa(e){var a=this;e=Je(e);var n=(e.currentTarget||e.target).dataset;if(!n)return console.warn("事件信息不存在");var t=n.eventOpts||n["event-opts"];if(!t)return console.warn("事件信息不存在");var r=e.type,u=[];return t.forEach(function(n){var t=n[0],l=n[1],p=t.charAt(0)===Ye;t=p?t.slice(1):t;var v=t.charAt(0)===Qe;t=v?t.slice(1):t,l&&ea(r,t)&&l.forEach(function(n){var t=n[0];if(t){var r=a.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var l=r[t];if(!d(l))throw new Error(" _vm.".concat(t," is not a function"));if(v){if(l.once)return;l.once=!0}u.push(l.apply(r,Ze(a.$vm,e,n[1],n[2],p,t)))}})}),"input"===r&&1===u.length&&"undefined"!==typeof u[0]?u[0]:void 0}var na=["onShow","onHide","onError","onPageNotFound"];function ta(e,a){var n=a.mocks,r=a.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=m({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Ne(this,n)))}});var u={onLaunch:function(a){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",a),this.$vm.__call_hook("onLaunch",a))}};return u.globalData=e.$options.globalData||{},Ie(u,na),u}var ra=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ua(e,a){var n=e.$children,t=n.find(function(e){return e.$scope._$vueId===a});if(t)return t;for(var r=n.length-1;r>=0;r--)if(t=ua(n[r],a),t)return t}function la(e){return Behavior(e)}function pa(){return!!this.route}function va(e){this.triggerEvent("__l",e)}function ma(e){var a=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},n=a.selectAllComponents(".vue-ref");n.forEach(function(a){var n=a.dataset.ref;e[n]=a.$vm||a});var t=a.selectAllComponents(".vue-ref-in-for");return t.forEach(function(a){var n=a.dataset.ref;e[n]||(e[n]=[]),e[n].push(a.$vm||a)}),e}})}function oa(e){var a,n=e.detail||e.value,t=n.vuePid,r=n.vueOptions;t&&(a=ua(this.$vm,t)),a||(a=this.$vm),r.parent=a}function ia(e){return ta(e,{mocks:ra,initRefs:ma})}var sa=["onUniNViewMessage"];function ca(e){var a=ia(e);return Ie(a,sa),a}function fa(e){return App(ca(e)),e}function ha(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.isPage,r=a.initRelation,l=Le(t.default,e),p=u(l,2),v=p[0],m=p[1],o={options:{multipleSlots:!0,addGlobalClass:!0},data:Ue(m,t.default.prototype),behaviors:He(m,la),properties:ze(m.props,!1,m.__file),lifetimes:{attached:function(){var e=this.properties,a={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:e};qe(e.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:a}),this.$vm=new v(a),Me(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:oa,__e:aa}};return Array.isArray(m.wxsCallMethods)&&m.wxsCallMethods.forEach(function(e){o.methods[e]=function(a){return this.$vm[e](a)}}),n?o:[o,v]}function da(e){return ha(e,{isPage:pa,initRelation:va})}function ga(e){var a=da(e);return a.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},a}var ya=["onShow","onHide","onUnload"];function _a(e,a){a.isPage,a.initRelation;var n=ga(e);return Ie(n.methods,ya,e),n.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},n}function ba(e){return _a(e,{isPage:pa,initRelation:va})}ya.push.apply(ya,Re);var wa=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $a(e){var a=ba(e);return Ie(a.methods,wa),a}function xa(e){return Component($a(e))}function Oa(e){return Component(ga(e))}pe.forEach(function(e){le[e]=!1}),ve.forEach(function(e){var a=le[e]&&le[e].name?le[e].name:e;wx.canIUse(a)||(le[e]=!1)});var Ta={};Object.keys(ue).forEach(function(e){Ta[e]=ue[e]}),Object.keys(xe).forEach(function(e){Ta[e]=xe[e]}),Object.keys(ke).forEach(function(e){Ta[e]=K(e,ke[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(le,e))&&(Ta[e]=K(e,ce(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Ta,e.UniEmitter=xe),wx.createApp=fa,wx.createPage=xa,wx.createComponent=Oa;var Aa=Ta,ka=Aa;a.default=ka}).call(this,n("c8ba"))},"7c98":function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=u(n("66fd")),r=u(n("2f62"));function u(e){return e&&e.__esModule?e:{default:e}}t.default.use(r.default);var l=new r.default.Store({state:{hasLogin:!1,userInfo:{}},mutations:{login:function(a,n){a.hasLogin=!0,a.userInfo=n,e.setStorage({key:"userInfo",data:n})},logout:function(a){a.hasLogin=!1,a.userInfo={},e.removeStorage({key:"userInfo"})}},actions:{}}),p=l;a.default=p}).call(this,n("6e42")["default"])},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23620191019001",_inBundle:!1,_integrity:"sha512-gBpkjEOQ/LhTnXBVi266PoTNT5VJtbYoEVy+gZ8/LN9/jKEWeWndd2Lu7vn7hmUySVM5K5UV/Bd5LEVkgXB8mA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23620191019001.tgz",_shasum:"5c006b903ae7bc407c8b1786de249ffbf72da996",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bc995d4b43b68e7fe7914ae6b2112117d36e63a8",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23620191019001"}},"8e4a":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.sharebtn=void 0;var t=function(e,a){e.from;var n={title:"",imageUrl:"/static/eimcc.jpg"};return{title:n.title,path:""}};a.sharebtn=t;var r={sharebtn:t};a.default=r},"921b":function(e,a,n){"use strict";(function(e){var a=n("8189");function t(e,a){return!a||"object"!==typeof a&&"function"!==typeof a?r(e):a}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&p(e,a)}function p(e,a){return p=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},p(e,a)}function v(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function m(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,a,n){return a&&m(e.prototype,a),n&&m(e,n),e}var i=a.version,s="https://tongji.dcloud.io/uni/stat",c="https://tongji.dcloud.io/uni/stat.gif",f=1800,h=300,d=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function _(){var a="";if("n"===x()){try{a=plus.runtime.getDCloudId()}catch(n){a=""}return a}try{a=e.getStorageSync(g)}catch(n){a=y}if(!a){a=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,a)}catch(n){e.setStorageSync(g,y)}}return a}var b=function(e){var a=Object.keys(e),n=a.sort(),t={},r="";for(var u in n)t[n[u]]=e[n[u]],r+=n[u]+"="+e[n[u]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},w=function(e){var a="";for(var n in e)a+=n+"="+e[n]+"&";return a.substr(0,a.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},x=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},O=function(){var a="";return"wx"!==x()&&"qq"!==x()||e.canIUse("getAccountInfoSync")&&(a=e.getAccountInfoSync().miniProgram.appId||""),a},T=function(){return"n"===x()?plus.runtime.version:""},A=function(){var e=x(),a="";return"n"===e&&(a=plus.runtime.channel),a},k=function(a){var n=x(),t="";return a||("wx"===n&&(t=e.getLaunchOptionsSync().scene),t)},S="First__Visit__Time",P="Last__Visit__Time",j=function(){var a=e.getStorageSync(S),n=0;return a?n=a:(n=$(),e.setStorageSync(S,n),e.removeStorageSync(P)),n},E=function(){var a=e.getStorageSync(P),n=0;return n=a||"",e.setStorageSync(P,$()),n},D="__page__residence__time",C=0,R=0,N=function(){return C=$(),"n"===x()&&e.setStorageSync(D,$()),C},B=function(){return R=$(),"n"===x()&&(C=e.getStorageSync(D)),R-C},I="Total__Visit__Count",L=function(){var a=e.getStorageSync(I),n=1;return a&&(n=a,n++),e.setStorageSync(I,n),n},M=function(e){var a={};for(var n in e)a[n]=encodeURIComponent(e[n]);return a},q=0,U=0,V=function(){var e=(new Date).getTime();return q=e,U=0,e},F=function(){var e=(new Date).getTime();return U=e,e},H=function(e){var a=0;if(0!==q&&(a=U-q),a=parseInt(a/1e3),a=a<1?1:a,"app"===e){var n=a>h;return{residenceTime:a,overtime:n}}if("page"===e){var t=a>f;return{residenceTime:a,overtime:t}}return{residenceTime:a}},G=function(){var e=getCurrentPages(),a=e[e.length-1],n=a.$vm;return"bd"===x()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(e){var a=getCurrentPages(),n=a[a.length-1],t=n.$vm,r=e._query,u=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return e._query="","bd"===x()?t.$mp&&t.$mp.page.is+u:t.$scope&&t.$scope.route+u||t.$mp&&t.$mp.page.route+u},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},W=function(e,a){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof a&&"object"!==typeof a?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof a&&a.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof a?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=n("ba60").default,K=n("4d81").default||n("4d81"),Z=e.getSystemInfoSync(),Q=function(){function a(){v(this,a),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:x(),mpn:O(),ak:K.appid,usv:i,v:T(),ch:A(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===Z.platform?"a":"i",brand:Z.brand||"",md:Z.model,sv:Z.system.replace(/(Android|iOS)\s/,""),mpsdk:Z.SDKVersion||"",mpv:Z.version||"",lang:Z.language,pr:Z.pixelRatio,ww:Z.windowWidth,wh:Z.windowHeight,sw:Z.screenWidth,sh:Z.screenHeight}}return o(a,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=H("app");if(e.overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,a){this.__licationHide=!0,F();var n=H();V();var t=z(this);this._sendHideRequest({urlref:t,urlref_ts:n.residenceTime},a)}},{key:"_pageShow",value:function(){var e=z(this),a=G();if(this._navigationBarTitle.config=X&&X.pages[a]&&X.pages[a].titleNView&&X.pages[a].titleNView.titleText||X&&X.pages[a]&&X.pages[a].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var n=H("page");if(n.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var a=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+a||"",this.statData.t=$(),this.statData.sc=k(e.scene),this.statData.fvts=j(),this.statData.lvts=E(),this.statData.tvc=L(),"n"===x()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var a=e.url,n=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:a,tt:this.statData.tt,urlref:n,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(e,a){var n=e.urlref,t=e.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(r,a)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.key,n=void 0===a?"":a,t=e.value,r=void 0===t?"":t,u=this._lastPageRoute,l={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:u,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(l)}},{key:"getNetworkInfo",value:function(){var a=this;e.getNetworkType({success:function(e){a.statData.net=e.networkType,a.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(a){e.statData.v=a.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var a=this;K.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(a.statData.cn=e.address.country,a.statData.pn=e.address.province,a.statData.ct=e.address.city),a.statData.lat=e.latitude,a.statData.lng=e.longitude,a.request(a.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(a,n){var t=this,r=$(),u=this._navigationBarTitle;a.ttn=u.page,a.ttpj=u.config,a.ttc=u.report;var l=this._reportingRequestData;if("n"===x()&&(l=e.getStorageSync("__UNI__STAT__DATA")||{}),l[a.lt]||(l[a.lt]=[]),l[a.lt].push(a),"n"===x()&&e.setStorageSync("__UNI__STAT__DATA",l),!(B()<d)||n){var p=this._reportingRequestData;"n"===x()&&(p=e.getStorageSync("__UNI__STAT__DATA")),N();var v=[],m=[],o=[],s=function(e){var a=p[e];a.forEach(function(a){var n=w(a);0===e?v.push(n):3===e?o.push(n):m.push(n)})};for(var c in p)s(c);v.push.apply(v,m.concat(o));var f={usv:i,t:r,requests:JSON.stringify(v)};this._reportingRequestData={},"n"===x()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==a.ut?"n"!==x()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){t._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(a){var n=this;e.request({url:s,method:"POST",data:a,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(a)},1e3)}})}},{key:"imageRequest",value:function(e){var a=new Image,n=b(M(e)).options;a.src=c+"?"+n}},{key:"sendEvent",value:function(e,a){W(e,a)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof a?JSON.stringify(a):a},1):this._navigationBarTitle.report=a)}}]),a}(),Y=function(a){function n(){var a;return v(this,n),a=t(this,u(n).call(this)),a.instance=null,"function"===typeof e.addInterceptor&&(a.addInterceptorInit(),a.interceptLogin(),a.interceptShare(!0),a.interceptRequestPayment()),a}return l(n,a),o(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),o(n,[{key:"addInterceptorInit",value:function(){var a=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){a._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var a=this;e.addInterceptor("login",{complete:function(){a._login()}})}},{key:"interceptShare",value:function(a){var n=this;a?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var a=this;e.addInterceptor("requestPayment",{success:function(){a._payment("pay_success")},fail:function(){a._payment("pay_fail")}})}},{key:"report",value:function(e,a){this.self=a,N(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,a){if(!a.$scope&&!a.$mp){var n=getCurrentPages();a.$scope=n[n.length-1]}this.self=a,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var a="";a=e.message?e.stack:JSON.stringify(e);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:a,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Q),ee=Y.getInstance(),ae=!1,ne={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var a=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),a.call(this,e)}}},onShow:function(){ae=!1,ee.show(this)},onHide:function(){ae=!0,ee.hide(this)},onUnload:function(){ae?ae=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var a=n("66fd");(a.default||a).mixin(ne),e.report=function(e,a){ee.sendEvent(e,a)}}te()}).call(this,n("6e42")["default"])},"96cf":function(e,a){!function(a){"use strict";var n,t=Object.prototype,r=t.hasOwnProperty,u="function"===typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",p=u.asyncIterator||"@@asyncIterator",v=u.toStringTag||"@@toStringTag",m="object"===typeof e,o=a.regeneratorRuntime;if(o)m&&(e.exports=o);else{o=a.regeneratorRuntime=m?e.exports:{},o.wrap=b;var i="suspendedStart",s="suspendedYield",c="executing",f="completed",h={},d={};d[l]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(D([])));y&&y!==t&&r.call(y,l)&&(d=y);var _=O.prototype=$.prototype=Object.create(d);x.prototype=_.constructor=O,O.constructor=x,O[v]=x.displayName="GeneratorFunction",o.isGeneratorFunction=function(e){var a="function"===typeof e&&e.constructor;return!!a&&(a===x||"GeneratorFunction"===(a.displayName||a.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,v in e||(e[v]="GeneratorFunction")),e.prototype=Object.create(_),e},o.awrap=function(e){return{__await:e}},T(A.prototype),A.prototype[p]=function(){return this},o.AsyncIterator=A,o.async=function(e,a,n,t){var r=new A(b(e,a,n,t));return o.isGeneratorFunction(a)?r:r.next().then(function(e){return e.done?e.value:r.next()})},T(_),_[v]="Generator",_[l]=function(){return this},_.toString=function(){return"[object Generator]"},o.keys=function(e){var a=[];for(var n in e)a.push(n);return a.reverse(),function n(){while(a.length){var t=a.pop();if(t in e)return n.value=t,n.done=!1,n}return n.done=!0,n}},o.values=D,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0],a=e.completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function t(t,r){return p.type="throw",p.arg=e,a.next=t,r&&(a.method="next",a.arg=n),!!r}for(var u=this.tryEntries.length-1;u>=0;--u){var l=this.tryEntries[u],p=l.completion;if("root"===l.tryLoc)return t("end");if(l.tryLoc<=this.prev){var v=r.call(l,"catchLoc"),m=r.call(l,"finallyLoc");if(v&&m){if(this.prev<l.catchLoc)return t(l.catchLoc,!0);if(this.prev<l.finallyLoc)return t(l.finallyLoc)}else if(v){if(this.prev<l.catchLoc)return t(l.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return t(l.finallyLoc)}}}},abrupt:function(e,a){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc<=this.prev&&r.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var u=t;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=a&&a<=u.finallyLoc&&(u=null);var l=u?u.completion:{};return l.type=e,l.arg=a,u?(this.method="next",this.next=u.finallyLoc,h):this.complete(l)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),h},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc===e){var t=n.completion;if("throw"===t.type){var r=t.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,t){return this.delegate={iterator:D(e),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=n),h}}}function b(e,a,n,t){var r=a&&a.prototype instanceof $?a:$,u=Object.create(r.prototype),l=new E(t||[]);return u._invoke=k(e,n,l),u}function w(e,a,n){try{return{type:"normal",arg:e.call(a,n)}}catch(t){return{type:"throw",arg:t}}}function $(){}function x(){}function O(){}function T(e){["next","throw","return"].forEach(function(a){e[a]=function(e){return this._invoke(a,e)}})}function A(e){function a(n,t,u,l){var p=w(e[n],e,t);if("throw"!==p.type){var v=p.arg,m=v.value;return m&&"object"===typeof m&&r.call(m,"__await")?Promise.resolve(m.__await).then(function(e){a("next",e,u,l)},function(e){a("throw",e,u,l)}):Promise.resolve(m).then(function(e){v.value=e,u(v)},function(e){return a("throw",e,u,l)})}l(p.arg)}var n;function t(e,t){function r(){return new Promise(function(n,r){a(e,t,n,r)})}return n=n?n.then(r,r):r()}this._invoke=t}function k(e,a,n){var t=i;return function(r,u){if(t===c)throw new Error("Generator is already running");if(t===f){if("throw"===r)throw u;return C()}n.method=r,n.arg=u;while(1){var l=n.delegate;if(l){var p=S(l,n);if(p){if(p===h)continue;return p}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(t===i)throw t=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);t=c;var v=w(e,a,n);if("normal"===v.type){if(t=n.done?f:s,v.arg===h)continue;return{value:v.arg,done:n.done}}"throw"===v.type&&(t=f,n.method="throw",n.arg=v.arg)}}}function S(e,a){var t=e.iterator[a.method];if(t===n){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=n,S(e,a),"throw"===a.method))return h;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=w(t,e.iterator,a.arg);if("throw"===r.type)return a.method="throw",a.arg=r.arg,a.delegate=null,h;var u=r.arg;return u?u.done?(a[e.resultName]=u.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=n),a.delegate=null,h):u:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,h)}function P(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function j(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function D(e){if(e){var a=e[l];if(a)return a.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,u=function a(){while(++t<e.length)if(r.call(e,t))return a.value=e[t],a.done=!1,a;return a.value=n,a.done=!0,a};return u.next=u}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(e,a,n){e.exports=n("bbdd")},ba60:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={pages:{"pages/index/index":{navigationBarTitleText:"家居热卖",enablePullDownRefresh:!0,titleNView:{type:"transparent"}},"pages/product/product":{navigationBarTitleText:"商品详情",enablePullDownRefresh:!0,titleNView:{type:"transparent"}},"pages/product/searchlist":{navigationBarTitleText:"商品搜索",enablePullDownRefresh:!0},"pages/product/shareqrcode":{navigationBarTitleText:"生成赚钱海报"},"pages/set/set":{navigationBarTitleText:"设置"},"pages/webview/index":{navigationBarTitleText:"详情"},"pages/commentlist/index":{navigationBarTitleText:"评论列表",enablePullDownRefresh:!0},"pages/user/help":{navigationBarTitleText:"帮助中心",enablePullDownRefresh:!0},"pages/fx/apply":{navigationBarTitleText:"申请成为分销商"},"pages/fx/index":{navigationBarTitleText:"分销中心",enablePullDownRefresh:!0},"pages/fx/myteam":{navigationBarTitleText:"我的团队",enablePullDownRefresh:!0},"pages/fx/qr":{navigationBarTitleText:"推广二维码",enablePullDownRefresh:!0},"pages/fx/withdrawlist":{navigationBarTitleText:"提现明细",enablePullDownRefresh:!0},"pages/fx/order":{navigationBarTitleText:"分销订单",enablePullDownRefresh:!0},"pages/fx/withdraw":{navigationBarTitleText:"佣金提现",enablePullDownRefresh:!0},"pages/user/feedback":{navigationBarTitleText:"意见反馈"},"pages/order/orderDetail":{navigationBarTitleText:"订单详情",enablePullDownRefresh:!0},"pages/category/hot":{enablePullDownRefresh:!0},"pages/brandDetail/topiclist":{navigationBarTitleText:"专题精选列表",enablePullDownRefresh:!0},"pages/brandDetail/comment":{navigationBarTitleText:"评论"},"pages/brandDetail/topicDetail":{navigationBarTitleText:"专题精选",enablePullDownRefresh:!0},"pages/brandDetail/groupbuy":{navigationBarTitleText:"团购专区",enablePullDownRefresh:!0},"pages/brandDetail/brand":{navigationBarTitleText:"品牌商列表",enablePullDownRefresh:!0},"pages/brandDetail/brandDetail":{navigationBarTitleText:"品牌商详情",enablePullDownRefresh:!0},"pages/order/comment":{navigationBarTitleText:"订单评价"},"pages/userinfo/userinfo":{navigationBarTitleText:"修改资料"},"pages/cart/cart":{navigationBarTitleText:"购物车",enablePullDownRefresh:!0},"pages/public/login":{navigationBarTitleText:"登录",titleNView:!1},"pages/public/reg":{navigationBarTitleText:"注册"},"pages/user/user":{navigationBarTitleText:"我的",enablePullDownRefresh:!0,titleNView:{type:"transparent"}},"pages/detail/detail":{navigationBarTitleText:"",titleNView:{type:"transparent"}},"pages/order/order":{navigationBarTitleText:"我的订单",enablePullDownRefresh:!0,bounce:"none"},"pages/money/money":{navigationBarTitleText:"修改资料",enablePullDownRefresh:!0},"pages/mystore/mystore":{navigationBarTitleText:"关注店铺",enablePullDownRefresh:!0},"pages/mycoloect/mycoloect":{navigationBarTitleText:"我的收藏",enablePullDownRefresh:!0},"pages/tuiguang/index":{enablePullDownRefresh:!0},"pages/mycoupon/couponlist":{navigationBarTitleText:"优惠券中心",enablePullDownRefresh:!0},"pages/mycoupon/mycoupon":{navigationBarTitleText:"我的优惠券",enablePullDownRefresh:!0},"pages/order/createOrder":{navigationBarTitleText:"创建订单",enablePullDownRefresh:!0},"pages/address/address":{navigationBarTitleText:"收货地址",enablePullDownRefresh:!0},"pages/address/addressManage":{navigationBarTitleText:"",enablePullDownRefresh:!0},"pages/money/pay":{navigationBarTitleText:"支付"},"pages/money/paySuccess":{navigationBarTitleText:"支付成功"},"pages/notice/notice":{navigationBarTitleText:"通知"},"pages/category/category":{navigationBarTitleText:"分类",enablePullDownRefresh:!0,bounce:"none"},"pages/product/list":{enablePullDownRefresh:!0,navigationBarTitleText:"商品列表"}},globalStyle:{navigationBarTextStyle:"black",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#f8f8f8"}};a.default=t},bbdd:function(e,a,n){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,u=r&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=n("96cf"),r)t.regeneratorRuntime=u;else try{delete t.regeneratorRuntime}catch(l){t.regeneratorRuntime=void 0}},c8ba:function(e,a){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}e.exports=n},cf8d:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.lotusAddressJson=void 0;var t=[{value:"110000",name:"北京"},{value:"120000",name:"天津"},{value:"130000",name:"河北省"},{value:"140000",name:"山西省"},{value:"150000",name:"内蒙古自治区"},{value:"210000",name:"辽宁省"},{value:"220000",name:"吉林省"},{value:"230000",name:"黑龙江省"},{value:"310000",name:"上海"},{value:"320000",name:"江苏省"},{value:"330000",name:"浙江省"},{value:"340000",name:"安徽省"},{value:"350000",name:"福建省"},{value:"360000",name:"江西省"},{value:"370000",name:"山东省"},{value:"410000",name:"河南省"},{value:"420000",name:"湖北省"},{value:"430000",name:"湖南省"},{value:"440000",name:"广东省"},{value:"450000",name:"广西壮族自治区"},{value:"460000",name:"海南省"},{value:"500000",name:"重庆"},{value:"510000",name:"四川省"},{value:"520000",name:"贵州省"},{value:"530000",name:"云南省"},{value:"540000",name:"西藏自治区"},{value:"610000",name:"陕西省"},{value:"620000",name:"甘肃省"},{value:"630000",name:"青海省"},{value:"640000",name:"宁夏回族自治区"},{value:"650000",name:"新疆维吾尔自治区"},{value:"710000",name:"台湾"},{value:"810000",name:"香港特别行政区"},{value:"820000",name:"澳门特别行政区"},{value:"990000",name:"海外"},{value:"110100",name:"北京市",parent:"110000"},{value:"120100",name:"天津市",parent:"120000"},{value:"130100",name:"石家庄市",parent:"130000"},{value:"130200",name:"唐山市",parent:"130000"},{value:"130300",name:"秦皇岛市",parent:"130000"},{value:"130400",name:"邯郸市",parent:"130000"},{value:"130500",name:"邢台市",parent:"130000"},{value:"130600",name:"保定市",parent:"130000"},{value:"130700",name:"张家口市",parent:"130000"},{value:"130800",name:"承德市",parent:"130000"},{value:"130900",name:"沧州市",parent:"130000"},{value:"131000",name:"廊坊市",parent:"130000"},{value:"131100",name:"衡水市",parent:"130000"},{value:"140100",name:"太原市",parent:"140000"},{value:"140200",name:"大同市",parent:"140000"},{value:"140300",name:"阳泉市",parent:"140000"},{value:"140400",name:"长治市",parent:"140000"},{value:"140500",name:"晋城市",parent:"140000"},{value:"140600",name:"朔州市",parent:"140000"},{value:"140700",name:"晋中市",parent:"140000"},{value:"140800",name:"运城市",parent:"140000"},{value:"140900",name:"忻州市",parent:"140000"},{value:"141000",name:"临汾市",parent:"140000"},{value:"141100",name:"吕梁市",parent:"140000"},{value:"150100",name:"呼和浩特市",parent:"150000"},{value:"150200",name:"包头市",parent:"150000"},{value:"150300",name:"乌海市",parent:"150000"},{value:"150400",name:"赤峰市",parent:"150000"},{value:"150500",name:"通辽市",parent:"150000"},{value:"150600",name:"鄂尔多斯市",parent:"150000"},{value:"150700",name:"呼伦贝尔市",parent:"150000"},{value:"150800",name:"巴彦淖尔市",parent:"150000"},{value:"150900",name:"乌兰察布市",parent:"150000"},{value:"152200",name:"兴安盟",parent:"150000"},{value:"152500",name:"锡林郭勒盟",parent:"150000"},{value:"152900",name:"阿拉善盟",parent:"150000"},{value:"210100",name:"沈阳市",parent:"210000"},{value:"210200",name:"大连市",parent:"210000"},{value:"210300",name:"鞍山市",parent:"210000"},{value:"210400",name:"抚顺市",parent:"210000"},{value:"210500",name:"本溪市",parent:"210000"},{value:"210600",name:"丹东市",parent:"210000"},{value:"210700",name:"锦州市",parent:"210000"},{value:"210800",name:"营口市",parent:"210000"},{value:"210900",name:"阜新市",parent:"210000"},{value:"211000",name:"辽阳市",parent:"210000"},{value:"211100",name:"盘锦市",parent:"210000"},{value:"211200",name:"铁岭市",parent:"210000"},{value:"211300",name:"朝阳市",parent:"210000"},{value:"211400",name:"葫芦岛市",parent:"210000"},{value:"220100",name:"长春市",parent:"220000"},{value:"220200",name:"吉林市",parent:"220000"},{value:"220300",name:"四平市",parent:"220000"},{value:"220400",name:"辽源市",parent:"220000"},{value:"220500",name:"通化市",parent:"220000"},{value:"220600",name:"白山市",parent:"220000"},{value:"220700",name:"松原市",parent:"220000"},{value:"220800",name:"白城市",parent:"220000"},{value:"222400",name:"延边朝鲜族自治州",parent:"220000"},{value:"230100",name:"哈尔滨市",parent:"230000"},{value:"230200",name:"齐齐哈尔市",parent:"230000"},{value:"230300",name:"鸡西市",parent:"230000"},{value:"230400",name:"鹤岗市",parent:"230000"},{value:"230500",name:"双鸭山市",parent:"230000"},{value:"230600",name:"大庆市",parent:"230000"},{value:"230700",name:"伊春市",parent:"230000"},{value:"230800",name:"佳木斯市",parent:"230000"},{value:"230900",name:"七台河市",parent:"230000"},{value:"231000",name:"牡丹江市",parent:"230000"},{value:"231100",name:"黑河市",parent:"230000"},{value:"231200",name:"绥化市",parent:"230000"},{value:"232700",name:"大兴安岭地区",parent:"230000"},{value:"310100",name:"上海市",parent:"310000"},{value:"320100",name:"南京市",parent:"320000"},{value:"320200",name:"无锡市",parent:"320000"},{value:"320300",name:"徐州市",parent:"320000"},{value:"320400",name:"常州市",parent:"320000"},{value:"320500",name:"苏州市",parent:"320000"},{value:"320600",name:"南通市",parent:"320000"},{value:"320700",name:"连云港市",parent:"320000"},{value:"320800",name:"淮安市",parent:"320000"},{value:"320900",name:"盐城市",parent:"320000"},{value:"321000",name:"扬州市",parent:"320000"},{value:"321100",name:"镇江市",parent:"320000"},{value:"321200",name:"泰州市",parent:"320000"},{value:"321300",name:"宿迁市",parent:"320000"},{value:"330100",name:"杭州市",parent:"330000"},{value:"330200",name:"宁波市",parent:"330000"},{value:"330300",name:"温州市",parent:"330000"},{value:"330400",name:"嘉兴市",parent:"330000"},{value:"330500",name:"湖州市",parent:"330000"},{value:"330600",name:"绍兴市",parent:"330000"},{value:"330700",name:"金华市",parent:"330000"},{value:"330800",name:"衢州市",parent:"330000"},{value:"330900",name:"舟山市",parent:"330000"},{value:"331000",name:"台州市",parent:"330000"},{value:"331100",name:"丽水市",parent:"330000"},{value:"340100",name:"合肥市",parent:"340000"},{value:"340200",name:"芜湖市",parent:"340000"},{value:"340300",name:"蚌埠市",parent:"340000"},{value:"340400",name:"淮南市",parent:"340000"},{value:"340500",name:"马鞍山市",parent:"340000"},{value:"340600",name:"淮北市",parent:"340000"},{value:"340700",name:"铜陵市",parent:"340000"},{value:"340800",name:"安庆市",parent:"340000"},{value:"341000",name:"黄山市",parent:"340000"},{value:"341100",name:"滁州市",parent:"340000"},{value:"341200",name:"阜阳市",parent:"340000"},{value:"341300",name:"宿州市",parent:"340000"},{value:"341500",name:"六安市",parent:"340000"},{value:"341600",name:"亳州市",parent:"340000"},{value:"341700",name:"池州市",parent:"340000"},{value:"341800",name:"宣城市",parent:"340000"},{value:"350100",name:"福州市",parent:"350000"},{value:"350200",name:"厦门市",parent:"350000"},{value:"350300",name:"莆田市",parent:"350000"},{value:"350400",name:"三明市",parent:"350000"},{value:"350500",name:"泉州市",parent:"350000"},{value:"350600",name:"漳州市",parent:"350000"},{value:"350700",name:"南平市",parent:"350000"},{value:"350800",name:"龙岩市",parent:"350000"},{value:"350900",name:"宁德市",parent:"350000"},{value:"360100",name:"南昌市",parent:"360000"},{value:"360200",name:"景德镇市",parent:"360000"},{value:"360300",name:"萍乡市",parent:"360000"},{value:"360400",name:"九江市",parent:"360000"},{value:"360500",name:"新余市",parent:"360000"},{value:"360600",name:"鹰潭市",parent:"360000"},{value:"360700",name:"赣州市",parent:"360000"},{value:"360800",name:"吉安市",parent:"360000"},{value:"360900",name:"宜春市",parent:"360000"},{value:"361000",name:"抚州市",parent:"360000"},{value:"361100",name:"上饶市",parent:"360000"},{value:"370100",name:"济南市",parent:"370000"},{value:"370200",name:"青岛市",parent:"370000"},{value:"370300",name:"淄博市",parent:"370000"},{value:"370400",name:"枣庄市",parent:"370000"},{value:"370500",name:"东营市",parent:"370000"},{value:"370600",name:"烟台市",parent:"370000"},{value:"370700",name:"潍坊市",parent:"370000"},{value:"370800",name:"济宁市",parent:"370000"},{value:"370900",name:"泰安市",parent:"370000"},{value:"371000",name:"威海市",parent:"370000"},{value:"371100",name:"日照市",parent:"370000"},{value:"371200",name:"莱芜市",parent:"370000"},{value:"371300",name:"临沂市",parent:"370000"},{value:"371400",name:"德州市",parent:"370000"},{value:"371500",name:"聊城市",parent:"370000"},{value:"371600",name:"滨州市",parent:"370000"},{value:"371700",name:"菏泽市",parent:"370000"},{value:"410100",name:"郑州市",parent:"410000"},{value:"410200",name:"开封市",parent:"410000"},{value:"410300",name:"洛阳市",parent:"410000"},{value:"410400",name:"平顶山市",parent:"410000"},{value:"410500",name:"安阳市",parent:"410000"},{value:"410600",name:"鹤壁市",parent:"410000"},{value:"410700",name:"新乡市",parent:"410000"},{value:"410800",name:"焦作市",parent:"410000"},{value:"410900",name:"濮阳市",parent:"410000"},{value:"411000",name:"许昌市",parent:"410000"},{value:"411100",name:"漯河市",parent:"410000"},{value:"411200",name:"三门峡市",parent:"410000"},{value:"411300",name:"南阳市",parent:"410000"},{value:"411400",name:"商丘市",parent:"410000"},{value:"411500",name:"信阳市",parent:"410000"},{value:"411600",name:"周口市",parent:"410000"},{value:"411700",name:"驻马店市",parent:"410000"},{value:"420100",name:"武汉市",parent:"420000"},{value:"420200",name:"黄石市",parent:"420000"},{value:"420300",name:"十堰市",parent:"420000"},{value:"420500",name:"宜昌市",parent:"420000"},{value:"420600",name:"襄阳市",parent:"420000"},{value:"420700",name:"鄂州市",parent:"420000"},{value:"420800",name:"荆门市",parent:"420000"},{value:"420900",name:"孝感市",parent:"420000"},{value:"421000",name:"荆州市",parent:"420000"},{value:"421100",name:"黄冈市",parent:"420000"},{value:"421200",name:"咸宁市",parent:"420000"},{value:"421300",name:"随州市",parent:"420000"},{value:"422800",name:"恩施土家族苗族自治州",parent:"420000"},{value:"430100",name:"长沙市",parent:"430000"},{value:"430200",name:"株洲市",parent:"430000"},{value:"430300",name:"湘潭市",parent:"430000"},{value:"430400",name:"衡阳市",parent:"430000"},{value:"430500",name:"邵阳市",parent:"430000"},{value:"430600",name:"岳阳市",parent:"430000"},{value:"430700",name:"常德市",parent:"430000"},{value:"430800",name:"张家界市",parent:"430000"},{value:"430900",name:"益阳市",parent:"430000"},{value:"431000",name:"郴州市",parent:"430000"},{value:"431100",name:"永州市",parent:"430000"},{value:"431200",name:"怀化市",parent:"430000"},{value:"431300",name:"娄底市",parent:"430000"},{value:"433100",name:"湘西土家族苗族自治州",parent:"430000"},{value:"440100",name:"广州市",parent:"440000"},{value:"440200",name:"韶关市",parent:"440000"},{value:"440300",name:"深圳市",parent:"440000"},{value:"440400",name:"珠海市",parent:"440000"},{value:"440500",name:"汕头市",parent:"440000"},{value:"440600",name:"佛山市",parent:"440000"},{value:"440700",name:"江门市",parent:"440000"},{value:"440800",name:"湛江市",parent:"440000"},{value:"440900",name:"茂名市",parent:"440000"},{value:"441200",name:"肇庆市",parent:"440000"},{value:"441300",name:"惠州市",parent:"440000"},{value:"441400",name:"梅州市",parent:"440000"},{value:"441500",name:"汕尾市",parent:"440000"},{value:"441600",name:"河源市",parent:"440000"},{value:"441700",name:"阳江市",parent:"440000"},{value:"441800",name:"清远市",parent:"440000"},{value:"441900",name:"东莞市",parent:"440000"},{value:"442000",name:"中山市",parent:"440000"},{value:"442101",name:"东沙群岛",parent:"440000"},{value:"445100",name:"潮州市",parent:"440000"},{value:"445200",name:"揭阳市",parent:"440000"},{value:"445300",name:"云浮市",parent:"440000"},{value:"450100",name:"南宁市",parent:"450000"},{value:"450200",name:"柳州市",parent:"450000"},{value:"450300",name:"桂林市",parent:"450000"},{value:"450400",name:"梧州市",parent:"450000"},{value:"450500",name:"北海市",parent:"450000"},{value:"450600",name:"防城港市",parent:"450000"},{value:"450700",name:"钦州市",parent:"450000"},{value:"450800",name:"贵港市",parent:"450000"},{value:"450900",name:"玉林市",parent:"450000"},{value:"451000",name:"百色市",parent:"450000"},{value:"451100",name:"贺州市",parent:"450000"},{value:"451200",name:"河池市",parent:"450000"},{value:"451300",name:"来宾市",parent:"450000"},{value:"451400",name:"崇左市",parent:"450000"},{value:"460100",name:"海口市",parent:"460000"},{value:"460200",name:"三亚市",parent:"460000"},{value:"460300",name:"三沙市",parent:"460000"},{value:"500100",name:"重庆市",parent:"500000"},{value:"510100",name:"成都市",parent:"510000"},{value:"510300",name:"自贡市",parent:"510000"},{value:"510400",name:"攀枝花市",parent:"510000"},{value:"510500",name:"泸州市",parent:"510000"},{value:"510600",name:"德阳市",parent:"510000"},{value:"510700",name:"绵阳市",parent:"510000"},{value:"510800",name:"广元市",parent:"510000"},{value:"510900",name:"遂宁市",parent:"510000"},{value:"511000",name:"内江市",parent:"510000"},{value:"511100",name:"乐山市",parent:"510000"},{value:"511300",name:"南充市",parent:"510000"},{value:"511400",name:"眉山市",parent:"510000"},{value:"511500",name:"宜宾市",parent:"510000"},{value:"511600",name:"广安市",parent:"510000"},{value:"511700",name:"达州市",parent:"510000"},{value:"511800",name:"雅安市",parent:"510000"},{value:"511900",name:"巴中市",parent:"510000"},{value:"512000",name:"资阳市",parent:"510000"},{value:"513200",name:"阿坝藏族羌族自治州",parent:"510000"},{value:"513300",name:"甘孜藏族自治州",parent:"510000"},{value:"513400",name:"凉山彝族自治州",parent:"510000"},{value:"520100",name:"贵阳市",parent:"520000"},{value:"520200",name:"六盘水市",parent:"520000"},{value:"520300",name:"遵义市",parent:"520000"},{value:"520400",name:"安顺市",parent:"520000"},{value:"522200",name:"铜仁市",parent:"520000"},{value:"522300",name:"黔西南布依族苗族自治州",parent:"520000"},{value:"522400",name:"毕节市",parent:"520000"},{value:"522600",name:"黔东南苗族侗族自治州",parent:"520000"},{value:"522700",name:"黔南布依族苗族自治州",parent:"520000"},{value:"530100",name:"昆明市",parent:"530000"},{value:"530300",name:"曲靖市",parent:"530000"},{value:"530400",name:"玉溪市",parent:"530000"},{value:"530500",name:"保山市",parent:"530000"},{value:"530600",name:"昭通市",parent:"530000"},{value:"530700",name:"丽江市",parent:"530000"},{value:"530800",name:"普洱市",parent:"530000"},{value:"530900",name:"临沧市",parent:"530000"},{value:"532300",name:"楚雄彝族自治州",parent:"530000"},{value:"532500",name:"红河哈尼族彝族自治州",parent:"530000"},{value:"532600",name:"文山壮族苗族自治州",parent:"530000"},{value:"532800",name:"西双版纳傣族自治州",parent:"530000"},{value:"532900",name:"大理白族自治州",parent:"530000"},{value:"533100",name:"德宏傣族景颇族自治州",parent:"530000"},{value:"533300",name:"怒江傈僳族自治州",parent:"530000"},{value:"533400",name:"迪庆藏族自治州",parent:"530000"},{value:"540100",name:"拉萨市",parent:"540000"},{value:"542100",name:"昌都市",parent:"540000"},{value:"542200",name:"山南地区",parent:"540000"},{value:"542300",name:"日喀则市",parent:"540000"},{value:"542400",name:"那曲地区",parent:"540000"},{value:"542500",name:"阿里地区",parent:"540000"},{value:"542600",name:"林芝市",parent:"540000"},{value:"610100",name:"西安市",parent:"610000"},{value:"610200",name:"铜川市",parent:"610000"},{value:"610300",name:"宝鸡市",parent:"610000"},{value:"610400",name:"咸阳市",parent:"610000"},{value:"610500",name:"渭南市",parent:"610000"},{value:"610600",name:"延安市",parent:"610000"},{value:"610700",name:"汉中市",parent:"610000"},{value:"610800",name:"榆林市",parent:"610000"},{value:"610900",name:"安康市",parent:"610000"},{value:"611000",name:"商洛市",parent:"610000"},{value:"620100",name:"兰州市",parent:"620000"},{value:"620200",name:"嘉峪关市",parent:"620000"},{value:"620300",name:"金昌市",parent:"620000"},{value:"620400",name:"白银市",parent:"620000"},{value:"620500",name:"天水市",parent:"620000"},{value:"620600",name:"武威市",parent:"620000"},{value:"620700",name:"张掖市",parent:"620000"},{value:"620800",name:"平凉市",parent:"620000"},{value:"620900",name:"酒泉市",parent:"620000"},{value:"621000",name:"庆阳市",parent:"620000"},{value:"621100",name:"定西市",parent:"620000"},{value:"621200",name:"陇南市",parent:"620000"},{value:"622900",name:"临夏回族自治州",parent:"620000"},{value:"623000",name:"甘南藏族自治州",parent:"620000"},{value:"630100",name:"西宁市",parent:"630000"},{value:"632100",name:"海东市",parent:"630000"},{value:"632200",name:"海北藏族自治州",parent:"630000"},{value:"632300",name:"黄南藏族自治州",parent:"630000"},{value:"632500",name:"海南藏族自治州",parent:"630000"},{value:"632600",name:"果洛藏族自治州",parent:"630000"},{value:"632700",name:"玉树藏族自治州",parent:"630000"},{value:"632800",name:"海西蒙古族藏族自治州",parent:"630000"},{value:"640100",name:"银川市",parent:"640000"},{value:"640200",name:"石嘴山市",parent:"640000"},{value:"640300",name:"吴忠市",parent:"640000"},{value:"640400",name:"固原市",parent:"640000"},{value:"640500",name:"中卫市",parent:"640000"},{value:"650100",name:"乌鲁木齐市",parent:"650000"},{value:"650200",name:"克拉玛依市",parent:"650000"},{value:"652100",name:"吐鲁番市",parent:"650000"},{value:"652200",name:"哈密地区",parent:"650000"},{value:"652300",name:"昌吉回族自治州",parent:"650000"},{value:"652700",name:"博尔塔拉蒙古自治州",parent:"650000"},{value:"652800",name:"巴音郭楞蒙古自治州",parent:"650000"},{value:"652900",name:"阿克苏地区",parent:"650000"},{value:"653000",name:"克孜勒苏柯尔克孜自治州",parent:"650000"},{value:"653100",name:"喀什地区",parent:"650000"},{value:"653200",name:"和田地区",parent:"650000"},{value:"654000",name:"伊犁哈萨克自治州",parent:"650000"},{value:"654200",name:"塔城地区",parent:"650000"},{value:"654300",name:"阿勒泰地区",parent:"650000"},{value:"659000",name:"可克达拉市",parent:"650000"},{value:"710100",name:"台北市",parent:"710000"},{value:"710200",name:"高雄市",parent:"710000"},{value:"710300",name:"台南市",parent:"710000"},{value:"710400",name:"台中市",parent:"710000"},{value:"710500",name:"金门县",parent:"710000"},{value:"710600",name:"南投县",parent:"710000"},{value:"710700",name:"基隆市",parent:"710000"},{value:"710800",name:"新竹市",parent:"710000"},{value:"710900",name:"嘉义市",parent:"710000"},{value:"711100",name:"新北市",parent:"710000"},{value:"711200",name:"宜兰县",parent:"710000"},{value:"711300",name:"新竹县",parent:"710000"},{value:"711400",name:"桃园县",parent:"710000"},{value:"711500",name:"苗栗县",parent:"710000"},{value:"711700",name:"彰化县",parent:"710000"},{value:"711900",name:"嘉义县",parent:"710000"},{value:"712100",name:"云林县",parent:"710000"},{value:"712400",name:"屏东县",parent:"710000"},{value:"712500",name:"台东县",parent:"710000"},{value:"712600",name:"花莲县",parent:"710000"},{value:"712700",name:"澎湖县",parent:"710000"},{value:"712800",name:"连江县",parent:"710000"},{value:"810100",name:"香港岛",parent:"810000"},{value:"810200",name:"九龙",parent:"810000"},{value:"810300",name:"新界",parent:"810000"},{value:"820100",name:"澳门半岛",parent:"820000"},{value:"820200",name:"离岛",parent:"820000"},{value:"990100",name:"海外",parent:"990000"},{value:"110101",name:"东城区",parent:"110100"},{value:"110102",name:"西城区",parent:"110100"},{value:"110103",name:"崇文区",parent:"110100"},{value:"110104",name:"宣武区",parent:"110100"},{value:"110105",name:"朝阳区",parent:"110100"},{value:"110106",name:"丰台区",parent:"110100"},{value:"110107",name:"石景山区",parent:"110100"},{value:"110108",name:"海淀区",parent:"110100"},{value:"110109",name:"门头沟区",parent:"110100"},{value:"110111",name:"房山区",parent:"110100"},{value:"110112",name:"通州区",parent:"110100"},{value:"110113",name:"顺义区",parent:"110100"},{value:"110114",name:"昌平区",parent:"110100"},{value:"110115",name:"大兴区",parent:"110100"},{value:"110116",name:"怀柔区",parent:"110100"},{value:"110117",name:"平谷区",parent:"110100"},{value:"110228",name:"密云县",parent:"110100"},{value:"110229",name:"延庆县",parent:"110100"},{value:"110230",name:"其它区",parent:"110100"},{value:"120101",name:"和平区",parent:"120100"},{value:"120102",name:"河东区",parent:"120100"},{value:"120103",name:"河西区",parent:"120100"},{value:"120104",name:"南开区",parent:"120100"},{value:"120105",name:"河北区",parent:"120100"},{value:"120106",name:"红桥区",parent:"120100"},{value:"120107",name:"塘沽区",parent:"120100"},{value:"120108",name:"汉沽区",parent:"120100"},{value:"120109",name:"大港区",parent:"120100"},{value:"120110",name:"东丽区",parent:"120100"},{value:"120111",name:"西青区",parent:"120100"},{value:"120112",name:"津南区",parent:"120100"},{value:"120113",name:"北辰区",parent:"120100"},{value:"120114",name:"武清区",parent:"120100"},{value:"120115",name:"宝坻区",parent:"120100"},{value:"120116",name:"滨海新区",parent:"120100"},{value:"120221",name:"宁河县",parent:"120100"},{value:"120223",name:"静海县",parent:"120100"},{value:"120225",name:"蓟县",parent:"120100"},{value:"120226",name:"其它区",parent:"120100"},{value:"130102",name:"长安区",parent:"130100"},{value:"130103",name:"桥东区",parent:"130100"},{value:"130104",name:"桥西区",parent:"130100"},{value:"130105",name:"新华区",parent:"130100"},{value:"130107",name:"井陉矿区",parent:"130100"},{value:"130108",name:"裕华区",parent:"130100"},{value:"130121",name:"井陉县",parent:"130100"},{value:"130123",name:"正定县",parent:"130100"},{value:"130124",name:"栾城区",parent:"130100"},{value:"130125",name:"行唐县",parent:"130100"},{value:"130126",name:"灵寿县",parent:"130100"},{value:"130127",name:"高邑县",parent:"130100"},{value:"130128",name:"深泽县",parent:"130100"},{value:"130129",name:"赞皇县",parent:"130100"},{value:"130130",name:"无极县",parent:"130100"},{value:"130131",name:"平山县",parent:"130100"},{value:"130132",name:"元氏县",parent:"130100"},{value:"130133",name:"赵县",parent:"130100"},{value:"130181",name:"辛集市",parent:"130100"},{value:"130182",name:"藁城区",parent:"130100"},{value:"130183",name:"晋州市",parent:"130100"},{value:"130184",name:"新乐市",parent:"130100"},{value:"130185",name:"鹿泉区",parent:"130100"},{value:"130186",name:"其它区",parent:"130100"},{value:"130202",name:"路南区",parent:"130200"},{value:"130203",name:"路北区",parent:"130200"},{value:"130204",name:"古冶区",parent:"130200"},{value:"130205",name:"开平区",parent:"130200"},{value:"130207",name:"丰南区",parent:"130200"},{value:"130208",name:"丰润区",parent:"130200"},{value:"130223",name:"滦县",parent:"130200"},{value:"130224",name:"滦南县",parent:"130200"},{value:"130225",name:"乐亭县",parent:"130200"},{value:"130227",name:"迁西县",parent:"130200"},{value:"130229",name:"玉田县",parent:"130200"},{value:"130230",name:"曹妃甸区",parent:"130200"},{value:"130281",name:"遵化市",parent:"130200"},{value:"130283",name:"迁安市",parent:"130200"},{value:"130284",name:"其它区",parent:"130200"},{value:"130302",name:"海港区",parent:"130300"},{value:"130303",name:"山海关区",parent:"130300"},{value:"130304",name:"北戴河区",parent:"130300"},{value:"130321",name:"青龙满族自治县",parent:"130300"},{value:"130322",name:"昌黎县",parent:"130300"},{value:"130323",name:"抚宁县",parent:"130300"},{value:"130324",name:"卢龙县",parent:"130300"},{value:"130398",name:"其它区",parent:"130300"},{value:"130399",name:"经济技术开发区",parent:"130300"},{value:"130402",name:"邯山区",parent:"130400"},{value:"130403",name:"丛台区",parent:"130400"},{value:"130404",name:"复兴区",parent:"130400"},{value:"130406",name:"峰峰矿区",parent:"130400"},{value:"130421",name:"邯郸县",parent:"130400"},{value:"130423",name:"临漳县",parent:"130400"},{value:"130424",name:"成安县",parent:"130400"},{value:"130425",name:"大名县",parent:"130400"},{value:"130426",name:"涉县",parent:"130400"},{value:"130427",name:"磁县",parent:"130400"},{value:"130428",name:"肥乡县",parent:"130400"},{value:"130429",name:"永年县",parent:"130400"},{value:"130430",name:"邱县",parent:"130400"},{value:"130431",name:"鸡泽县",parent:"130400"},{value:"130432",name:"广平县",parent:"130400"},{value:"130433",name:"馆陶县",parent:"130400"},{value:"130434",name:"魏县",parent:"130400"},{value:"130435",name:"曲周县",parent:"130400"},{value:"130481",name:"武安市",parent:"130400"},{value:"130482",name:"其它区",parent:"130400"},{value:"130502",name:"桥东区",parent:"130500"},{value:"130503",name:"桥西区",parent:"130500"},{value:"130521",name:"邢台县",parent:"130500"},{value:"130522",name:"临城县",parent:"130500"},{value:"130523",name:"内丘县",parent:"130500"},{value:"130524",name:"柏乡县",parent:"130500"},{value:"130525",name:"隆尧县",parent:"130500"},{value:"130526",name:"任县",parent:"130500"},{value:"130527",name:"南和县",parent:"130500"},{value:"130528",name:"宁晋县",parent:"130500"},{value:"130529",name:"巨鹿县",parent:"130500"},{value:"130530",name:"新河县",parent:"130500"},{value:"130531",name:"广宗县",parent:"130500"},{value:"130532",name:"平乡县",parent:"130500"},{value:"130533",name:"威县",parent:"130500"},{value:"130534",name:"清河县",parent:"130500"},{value:"130535",name:"临西县",parent:"130500"},{value:"130581",name:"南宫市",parent:"130500"},{value:"130582",name:"沙河市",parent:"130500"},{value:"130583",name:"其它区",parent:"130500"},{value:"130602",name:"新市区",parent:"130600"},{value:"130603",name:"北市区",parent:"130600"},{value:"130604",name:"南市区",parent:"130600"},{value:"130621",name:"满城县",parent:"130600"},{value:"130622",name:"清苑县",parent:"130600"},{value:"130623",name:"涞水县",parent:"130600"},{value:"130624",name:"阜平县",parent:"130600"},{value:"130625",name:"徐水县",parent:"130600"},{value:"130626",name:"定兴县",parent:"130600"},{value:"130627",name:"唐县",parent:"130600"},{value:"130628",name:"高阳县",parent:"130600"},{value:"130629",name:"容城县",parent:"130600"},{value:"130630",name:"涞源县",parent:"130600"},{value:"130631",name:"望都县",parent:"130600"},{value:"130632",name:"安新县",parent:"130600"},{value:"130633",name:"易县",parent:"130600"},{value:"130634",name:"曲阳县",parent:"130600"},{value:"130635",name:"蠡县",parent:"130600"},{value:"130636",name:"顺平县",parent:"130600"},{value:"130637",name:"博野县",parent:"130600"},{value:"130638",name:"雄县",parent:"130600"},{value:"130681",name:"涿州市",parent:"130600"},{value:"130682",name:"定州市",parent:"130600"},{value:"130683",name:"安国市",parent:"130600"},{value:"130684",name:"高碑店市",parent:"130600"},{value:"130698",name:"高开区",parent:"130600"},{value:"130699",name:"其它区",parent:"130600"},{value:"130702",name:"桥东区",parent:"130700"},{value:"130703",name:"桥西区",parent:"130700"},{value:"130705",name:"宣化区",parent:"130700"},{value:"130706",name:"下花园区",parent:"130700"},{value:"130721",name:"宣化县",parent:"130700"},{value:"130722",name:"张北县",parent:"130700"},{value:"130723",name:"康保县",parent:"130700"},{value:"130724",name:"沽源县",parent:"130700"},{value:"130725",name:"尚义县",parent:"130700"},{value:"130726",name:"蔚县",parent:"130700"},{value:"130727",name:"阳原县",parent:"130700"},{value:"130728",name:"怀安县",parent:"130700"},{value:"130729",name:"万全县",parent:"130700"},{value:"130730",name:"怀来县",parent:"130700"},{value:"130731",name:"涿鹿县",parent:"130700"},{value:"130732",name:"赤城县",parent:"130700"},{value:"130733",name:"崇礼县",parent:"130700"},{value:"130734",name:"其它区",parent:"130700"},{value:"130802",name:"双桥区",parent:"130800"},{value:"130803",name:"双滦区",parent:"130800"},{value:"130804",name:"鹰手营子矿区",parent:"130800"},{value:"130821",name:"承德县",parent:"130800"},{value:"130822",name:"兴隆县",parent:"130800"},{value:"130823",name:"平泉县",parent:"130800"},{value:"130824",name:"滦平县",parent:"130800"},{value:"130825",name:"隆化县",parent:"130800"},{value:"130826",name:"丰宁满族自治县",parent:"130800"},{value:"130827",name:"宽城满族自治县",parent:"130800"},{value:"130828",name:"围场满族蒙古族自治县",parent:"130800"},{value:"130829",name:"其它区",parent:"130800"},{value:"130902",name:"新华区",parent:"130900"},{value:"130903",name:"运河区",parent:"130900"},{value:"130921",name:"沧县",parent:"130900"},{value:"130922",name:"青县",parent:"130900"},{value:"130923",name:"东光县",parent:"130900"},{value:"130924",name:"海兴县",parent:"130900"},{value:"130925",name:"盐山县",parent:"130900"},{value:"130926",name:"肃宁县",parent:"130900"},{value:"130927",name:"南皮县",parent:"130900"},{value:"130928",name:"吴桥县",parent:"130900"},{value:"130929",name:"献县",parent:"130900"},{value:"130930",name:"孟村回族自治县",parent:"130900"},{value:"130981",name:"泊头市",parent:"130900"},{value:"130982",name:"任丘市",parent:"130900"},{value:"130983",name:"黄骅市",parent:"130900"},{value:"130984",name:"河间市",parent:"130900"},{value:"130985",name:"其它区",parent:"130900"},{value:"131002",name:"安次区",parent:"131000"},{value:"131003",name:"广阳区",parent:"131000"},{value:"131022",name:"固安县",parent:"131000"},{value:"131023",name:"永清县",parent:"131000"},{value:"131024",name:"香河县",parent:"131000"},{value:"131025",name:"大城县",parent:"131000"},{value:"131026",name:"文安县",parent:"131000"},{value:"131028",name:"大厂回族自治县",parent:"131000"},{value:"131051",name:"开发区",parent:"131000"},{value:"131052",name:"燕郊经济技术开发区",parent:"131000"},{value:"131081",name:"霸州市",parent:"131000"},{value:"131082",name:"三河市",parent:"131000"},{value:"131083",name:"其它区",parent:"131000"},{value:"131102",name:"桃城区",parent:"131100"},{value:"131121",name:"枣强县",parent:"131100"},{value:"131122",name:"武邑县",parent:"131100"},{value:"131123",name:"武强县",parent:"131100"},{value:"131124",name:"饶阳县",parent:"131100"},{value:"131125",name:"安平县",parent:"131100"},{value:"131126",name:"故城县",parent:"131100"},{value:"131127",name:"景县",parent:"131100"},{value:"131128",name:"阜城县",parent:"131100"},{value:"131181",name:"冀州市",parent:"131100"},{value:"131182",name:"深州市",parent:"131100"},{value:"131183",name:"其它区",parent:"131100"},{value:"140105",name:"小店区",parent:"140100"},{value:"140106",name:"迎泽区",parent:"140100"},{value:"140107",name:"杏花岭区",parent:"140100"},{value:"140108",name:"尖草坪区",parent:"140100"},{value:"140109",name:"万柏林区",parent:"140100"},{value:"140110",name:"晋源区",parent:"140100"},{value:"140121",name:"清徐县",parent:"140100"},{value:"140122",name:"阳曲县",parent:"140100"},{value:"140123",name:"娄烦县",parent:"140100"},{value:"140181",name:"古交市",parent:"140100"},{value:"140182",name:"其它区",parent:"140100"},{value:"140202",name:"城区",parent:"140200"},{value:"140203",name:"矿区",parent:"140200"},{value:"140211",name:"南郊区",parent:"140200"},{value:"140212",name:"新荣区",parent:"140200"},{value:"140221",name:"阳高县",parent:"140200"},{value:"140222",name:"天镇县",parent:"140200"},{value:"140223",name:"广灵县",parent:"140200"},{value:"140224",name:"灵丘县",parent:"140200"},{value:"140225",name:"浑源县",parent:"140200"},{value:"140226",name:"左云县",parent:"140200"},{value:"140227",name:"大同县",parent:"140200"},{value:"140228",name:"其它区",parent:"140200"},{value:"140302",name:"城区",parent:"140300"},{value:"140303",name:"矿区",parent:"140300"},{value:"140311",name:"郊区",parent:"140300"},{value:"140321",name:"平定县",parent:"140300"},{value:"140322",name:"盂县",parent:"140300"},{value:"140323",name:"其它区",parent:"140300"},{value:"140421",name:"长治县",parent:"140400"},{value:"140423",name:"襄垣县",parent:"140400"},{value:"140424",name:"屯留县",parent:"140400"},{value:"140425",name:"平顺县",parent:"140400"},{value:"140426",name:"黎城县",parent:"140400"},{value:"140427",name:"壶关县",parent:"140400"},{value:"140428",name:"长子县",parent:"140400"},{value:"140429",name:"武乡县",parent:"140400"},{value:"140430",name:"沁县",parent:"140400"},{value:"140431",name:"沁源县",parent:"140400"},{value:"140481",name:"潞城市",parent:"140400"},{value:"140482",name:"城区",parent:"140400"},{value:"140483",name:"郊区",parent:"140400"},{value:"140484",name:"高新区",parent:"140400"},{value:"140485",name:"其它区",parent:"140400"},{value:"140502",name:"城区",parent:"140500"},{value:"140521",name:"沁水县",parent:"140500"},{value:"140522",name:"阳城县",parent:"140500"},{value:"140524",name:"陵川县",parent:"140500"},{value:"140525",name:"泽州县",parent:"140500"},{value:"140581",name:"高平市",parent:"140500"},{value:"140582",name:"其它区",parent:"140500"},{value:"140602",name:"朔城区",parent:"140600"},{value:"140603",name:"平鲁区",parent:"140600"},{value:"140621",name:"山阴县",parent:"140600"},{value:"140622",name:"应县",parent:"140600"},{value:"140623",name:"右玉县",parent:"140600"},{value:"140624",name:"怀仁县",parent:"140600"},{value:"140625",name:"其它区",parent:"140600"},{value:"140702",name:"榆次区",parent:"140700"},{value:"140721",name:"榆社县",parent:"140700"},{value:"140722",name:"左权县",parent:"140700"},{value:"140723",name:"和顺县",parent:"140700"},{value:"140724",name:"昔阳县",parent:"140700"},{value:"140725",name:"寿阳县",parent:"140700"},{value:"140726",name:"太谷县",parent:"140700"},{value:"140727",name:"祁县",parent:"140700"},{value:"140728",name:"平遥县",parent:"140700"},{value:"140729",name:"灵石县",parent:"140700"},{value:"140781",name:"介休市",parent:"140700"},{value:"140782",name:"其它区",parent:"140700"},{value:"140802",name:"盐湖区",parent:"140800"},{value:"140821",name:"临猗县",parent:"140800"},{value:"140822",name:"万荣县",parent:"140800"},{value:"140823",name:"闻喜县",parent:"140800"},{value:"140824",name:"稷山县",parent:"140800"},{value:"140825",name:"新绛县",parent:"140800"},{value:"140826",name:"绛县",parent:"140800"},{value:"140827",name:"垣曲县",parent:"140800"},{value:"140828",name:"夏县",parent:"140800"},{value:"140829",name:"平陆县",parent:"140800"},{value:"140830",name:"芮城县",parent:"140800"},{value:"140881",name:"永济市",parent:"140800"},{value:"140882",name:"河津市",parent:"140800"},{value:"140883",name:"其它区",parent:"140800"},{value:"140902",name:"忻府区",parent:"140900"},{value:"140921",name:"定襄县",parent:"140900"},{value:"140922",name:"五台县",parent:"140900"},{value:"140923",name:"代县",parent:"140900"},{value:"140924",name:"繁峙县",parent:"140900"},{value:"140925",name:"宁武县",parent:"140900"},{value:"140926",name:"静乐县",parent:"140900"},{value:"140927",name:"神池县",parent:"140900"},{value:"140928",name:"五寨县",parent:"140900"},{value:"140929",name:"岢岚县",parent:"140900"},{value:"140930",name:"河曲县",parent:"140900"},{value:"140931",name:"保德县",parent:"140900"},{value:"140932",name:"偏关县",parent:"140900"},{value:"140981",name:"原平市",parent:"140900"},{value:"140982",name:"其它区",parent:"140900"},{value:"141002",name:"尧都区",parent:"141000"},{value:"141021",name:"曲沃县",parent:"141000"},{value:"141022",name:"翼城县",parent:"141000"},{value:"141023",name:"襄汾县",parent:"141000"},{value:"141024",name:"洪洞县",parent:"141000"},{value:"141025",name:"古县",parent:"141000"},{value:"141026",name:"安泽县",parent:"141000"},{value:"141027",name:"浮山县",parent:"141000"},{value:"141028",name:"吉县",parent:"141000"},{value:"141029",name:"乡宁县",parent:"141000"},{value:"141030",name:"大宁县",parent:"141000"},{value:"141031",name:"隰县",parent:"141000"},{value:"141032",name:"永和县",parent:"141000"},{value:"141033",name:"蒲县",parent:"141000"},{value:"141034",name:"汾西县",parent:"141000"},{value:"141081",name:"侯马市",parent:"141000"},{value:"141082",name:"霍州市",parent:"141000"},{value:"141083",name:"其它区",parent:"141000"},{value:"141102",name:"离石区",parent:"141100"},{value:"141121",name:"文水县",parent:"141100"},{value:"141122",name:"交城县",parent:"141100"},{value:"141123",name:"兴县",parent:"141100"},{value:"141124",name:"临县",parent:"141100"},{value:"141125",name:"柳林县",parent:"141100"},{value:"141126",name:"石楼县",parent:"141100"},{value:"141127",name:"岚县",parent:"141100"},{value:"141128",name:"方山县",parent:"141100"},{value:"141129",name:"中阳县",parent:"141100"},{value:"141130",name:"交口县",parent:"141100"},{value:"141181",name:"孝义市",parent:"141100"},{value:"141182",name:"汾阳市",parent:"141100"},{value:"141183",name:"其它区",parent:"141100"},{value:"150102",name:"新城区",parent:"150100"},{value:"150103",name:"回民区",parent:"150100"},{value:"150104",name:"玉泉区",parent:"150100"},{value:"150105",name:"赛罕区",parent:"150100"},{value:"150121",name:"土默特左旗",parent:"150100"},{value:"150122",name:"托克托县",parent:"150100"},{value:"150123",name:"和林格尔县",parent:"150100"},{value:"150124",name:"清水河县",parent:"150100"},{value:"150125",name:"武川县",parent:"150100"},{value:"150126",name:"其它区",parent:"150100"},{value:"150202",name:"东河区",parent:"150200"},{value:"150203",name:"昆都仑区",parent:"150200"},{value:"150204",name:"青山区",parent:"150200"},{value:"150205",name:"石拐区",parent:"150200"},{value:"150206",name:"白云鄂博矿区",parent:"150200"},{value:"150207",name:"九原区",parent:"150200"},{value:"150221",name:"土默特右旗",parent:"150200"},{value:"150222",name:"固阳县",parent:"150200"},{value:"150223",name:"达尔罕茂明安联合旗",parent:"150200"},{value:"150224",name:"其它区",parent:"150200"},{value:"150302",name:"海勃湾区",parent:"150300"},{value:"150303",name:"海南区",parent:"150300"},{value:"150304",name:"乌达区",parent:"150300"},{value:"150305",name:"其它区",parent:"150300"},{value:"150402",name:"红山区",parent:"150400"},{value:"150403",name:"元宝山区",parent:"150400"},{value:"150404",name:"松山区",parent:"150400"},{value:"150421",name:"阿鲁科尔沁旗",parent:"150400"},{value:"150422",name:"巴林左旗",parent:"150400"},{value:"150423",name:"巴林右旗",parent:"150400"},{value:"150424",name:"林西县",parent:"150400"},{value:"150425",name:"克什克腾旗",parent:"150400"},{value:"150426",name:"翁牛特旗",parent:"150400"},{value:"150428",name:"喀喇沁旗",parent:"150400"},{value:"150429",name:"宁城县",parent:"150400"},{value:"150430",name:"敖汉旗",parent:"150400"},{value:"150431",name:"其它区",parent:"150400"},{value:"150502",name:"科尔沁区",parent:"150500"},{value:"150521",name:"科尔沁左翼中旗",parent:"150500"},{value:"150522",name:"科尔沁左翼后旗",parent:"150500"},{value:"150523",name:"开鲁县",parent:"150500"},{value:"150524",name:"库伦旗",parent:"150500"},{value:"150525",name:"奈曼旗",parent:"150500"},{value:"150526",name:"扎鲁特旗",parent:"150500"},{value:"150581",name:"霍林郭勒市",parent:"150500"},{value:"150582",name:"其它区",parent:"150500"},{value:"150602",name:"东胜区",parent:"150600"},{value:"150621",name:"达拉特旗",parent:"150600"},{value:"150622",name:"准格尔旗",parent:"150600"},{value:"150623",name:"鄂托克前旗",parent:"150600"},{value:"150624",name:"鄂托克旗",parent:"150600"},{value:"150625",name:"杭锦旗",parent:"150600"},{value:"150626",name:"乌审旗",parent:"150600"},{value:"150627",name:"伊金霍洛旗",parent:"150600"},{value:"150628",name:"其它区",parent:"150600"},{value:"150702",name:"海拉尔区",parent:"150700"},{value:"150703",name:"扎赉诺尔区",parent:"150700"},{value:"150721",name:"阿荣旗",parent:"150700"},{value:"150722",name:"莫力达瓦达斡尔族自治旗",parent:"150700"},{value:"150723",name:"鄂伦春自治旗",parent:"150700"},{value:"150724",name:"鄂温克族自治旗",parent:"150700"},{value:"150725",name:"陈巴尔虎旗",parent:"150700"},{value:"150726",name:"新巴尔虎左旗",parent:"150700"},{value:"150727",name:"新巴尔虎右旗",parent:"150700"},{value:"150781",name:"满洲里市",parent:"150700"},{value:"150782",name:"牙克石市",parent:"150700"},{value:"150783",name:"扎兰屯市",parent:"150700"},{value:"150784",name:"额尔古纳市",parent:"150700"},{value:"150785",name:"根河市",parent:"150700"},{value:"150786",name:"其它区",parent:"150700"},{value:"150802",name:"临河区",parent:"150800"},{value:"150821",name:"五原县",parent:"150800"},{value:"150822",name:"磴口县",parent:"150800"},{value:"150823",name:"乌拉特前旗",parent:"150800"},{value:"150824",name:"乌拉特中旗",parent:"150800"},{value:"150825",name:"乌拉特后旗",parent:"150800"},{value:"150826",name:"杭锦后旗",parent:"150800"},{value:"150827",name:"其它区",parent:"150800"},{value:"150902",name:"集宁区",parent:"150900"},{value:"150921",name:"卓资县",parent:"150900"},{value:"150922",name:"化德县",parent:"150900"},{value:"150923",name:"商都县",parent:"150900"},{value:"150924",name:"兴和县",parent:"150900"},{value:"150925",name:"凉城县",parent:"150900"},{value:"150926",name:"察哈尔右翼前旗",parent:"150900"},{value:"150927",name:"察哈尔右翼中旗",parent:"150900"},{value:"150928",name:"察哈尔右翼后旗",parent:"150900"},{value:"150929",name:"四子王旗",parent:"150900"},{value:"150981",name:"丰镇市",parent:"150900"},{value:"150982",name:"其它区",parent:"150900"},{value:"152201",name:"乌兰浩特市",parent:"152200"},{value:"152202",name:"阿尔山市",parent:"152200"},{value:"152221",name:"科尔沁右翼前旗",parent:"152200"},{value:"152222",name:"科尔沁右翼中旗",parent:"152200"},{value:"152223",name:"扎赉特旗",parent:"152200"},{value:"152224",name:"突泉县",parent:"152200"},{value:"152225",name:"其它区",parent:"152200"},{value:"152501",name:"二连浩特市",parent:"152500"},{value:"152502",name:"锡林浩特市",parent:"152500"},{value:"152522",name:"阿巴嘎旗",parent:"152500"},{value:"152523",name:"苏尼特左旗",parent:"152500"},{value:"152524",name:"苏尼特右旗",parent:"152500"},{value:"152525",name:"东乌珠穆沁旗",parent:"152500"},{value:"152526",name:"西乌珠穆沁旗",parent:"152500"},{value:"152527",name:"太仆寺旗",parent:"152500"},{value:"152528",name:"镶黄旗",parent:"152500"},{value:"152529",name:"正镶白旗",parent:"152500"},{value:"152530",name:"正蓝旗",parent:"152500"},{value:"152531",name:"多伦县",parent:"152500"},{value:"152532",name:"其它区",parent:"152500"},{value:"152921",name:"阿拉善左旗",parent:"152900"},{value:"152922",name:"阿拉善右旗",parent:"152900"},{value:"152923",name:"额济纳旗",parent:"152900"},{value:"152924",name:"其它区",parent:"152900"},{value:"210102",name:"和平区",parent:"210100"},{value:"210103",name:"沈河区",parent:"210100"},{value:"210104",name:"大东区",parent:"210100"},{value:"210105",name:"皇姑区",parent:"210100"},{value:"210106",name:"铁西区",parent:"210100"},{value:"210111",name:"苏家屯区",parent:"210100"},{value:"210112",name:"浑南区",parent:"210100"},{value:"210113",name:"新城子区",parent:"210100"},{value:"210114",name:"于洪区",parent:"210100"},{value:"210122",name:"辽中县",parent:"210100"},{value:"210123",name:"康平县",parent:"210100"},{value:"210124",name:"法库县",parent:"210100"},{value:"210181",name:"新民市",parent:"210100"},{value:"210182",name:"浑南新区",parent:"210100"},{value:"210183",name:"张士开发区",parent:"210100"},{value:"210184",name:"沈北新区",parent:"210100"},{value:"210185",name:"其它区",parent:"210100"},{value:"210202",name:"中山区",parent:"210200"},{value:"210203",name:"西岗区",parent:"210200"},{value:"210204",name:"沙河口区",parent:"210200"},{value:"210211",name:"甘井子区",parent:"210200"},{value:"210212",name:"旅顺口区",parent:"210200"},{value:"210213",name:"金州区",parent:"210200"},{value:"210224",name:"长海县",parent:"210200"},{value:"210251",name:"开发区",parent:"210200"},{value:"210281",name:"瓦房店市",parent:"210200"},{value:"210282",name:"普兰店市",parent:"210200"},{value:"210283",name:"庄河市",parent:"210200"},{value:"210297",name:"岭前区",parent:"210200"},{value:"210298",name:"其它区",parent:"210200"},{value:"210302",name:"铁东区",parent:"210300"},{value:"210303",name:"铁西区",parent:"210300"},{value:"210304",name:"立山区",parent:"210300"},{value:"210311",name:"千山区",parent:"210300"},{value:"210321",name:"台安县",parent:"210300"},{value:"210323",name:"岫岩满族自治县",parent:"210300"},{value:"210351",name:"高新区",parent:"210300"},{value:"210381",name:"海城市",parent:"210300"},{value:"210382",name:"其它区",parent:"210300"},{value:"210402",name:"新抚区",parent:"210400"},{value:"210403",name:"东洲区",parent:"210400"},{value:"210404",name:"望花区",parent:"210400"},{value:"210411",name:"顺城区",parent:"210400"},{value:"210421",name:"抚顺县",parent:"210400"},{value:"210422",name:"新宾满族自治县",parent:"210400"},{value:"210423",name:"清原满族自治县",parent:"210400"},{value:"210424",name:"其它区",parent:"210400"},{value:"210502",name:"平山区",parent:"210500"},{value:"210503",name:"溪湖区",parent:"210500"},{value:"210504",name:"明山区",parent:"210500"},{value:"210505",name:"南芬区",parent:"210500"},{value:"210521",name:"本溪满族自治县",parent:"210500"},{value:"210522",name:"桓仁满族自治县",parent:"210500"},{value:"210523",name:"其它区",parent:"210500"},{value:"210602",name:"元宝区",parent:"210600"},{value:"210603",name:"振兴区",parent:"210600"},{value:"210604",name:"振安区",parent:"210600"},{value:"210624",name:"宽甸满族自治县",parent:"210600"},{value:"210681",name:"东港市",parent:"210600"},{value:"210682",name:"凤城市",parent:"210600"},{value:"210683",name:"其它区",parent:"210600"},{value:"210702",name:"古塔区",parent:"210700"},{value:"210703",name:"凌河区",parent:"210700"},{value:"210711",name:"太和区",parent:"210700"},{value:"210726",name:"黑山县",parent:"210700"},{value:"210727",name:"义县",parent:"210700"},{value:"210781",name:"凌海市",parent:"210700"},{value:"210782",name:"北镇市",parent:"210700"},{value:"210783",name:"其它区",parent:"210700"},{value:"210802",name:"站前区",parent:"210800"},{value:"210803",name:"西市区",parent:"210800"},{value:"210804",name:"鲅鱼圈区",parent:"210800"},{value:"210811",name:"老边区",parent:"210800"},{value:"210881",name:"盖州市",parent:"210800"},{value:"210882",name:"大石桥市",parent:"210800"},{value:"210883",name:"其它区",parent:"210800"},{value:"210902",name:"海州区",parent:"210900"},{value:"210903",name:"新邱区",parent:"210900"},{value:"210904",name:"太平区",parent:"210900"},{value:"210905",name:"清河门区",parent:"210900"},{value:"210911",name:"细河区",parent:"210900"},{value:"210921",name:"阜新蒙古族自治县",parent:"210900"},{value:"210922",name:"彰武县",parent:"210900"},{value:"210923",name:"其它区",parent:"210900"},{value:"211002",name:"白塔区",parent:"211000"},{value:"211003",name:"文圣区",parent:"211000"},{value:"211004",name:"宏伟区",parent:"211000"},{value:"211005",name:"弓长岭区",parent:"211000"},{value:"211011",name:"太子河区",parent:"211000"},{value:"211021",name:"辽阳县",parent:"211000"},{value:"211081",name:"灯塔市",parent:"211000"},{value:"211082",name:"其它区",parent:"211000"},{value:"211102",name:"双台子区",parent:"211100"},{value:"211103",name:"兴隆台区",parent:"211100"},{value:"211121",name:"大洼县",parent:"211100"},{value:"211122",name:"盘山县",parent:"211100"},{value:"211123",name:"其它区",parent:"211100"},{value:"211202",name:"银州区",parent:"211200"},{value:"211204",name:"清河区",parent:"211200"},{value:"211221",name:"铁岭县",parent:"211200"},{value:"211223",name:"西丰县",parent:"211200"},{value:"211224",name:"昌图县",parent:"211200"},{value:"211281",name:"调兵山市",parent:"211200"},{value:"211282",name:"开原市",parent:"211200"},{value:"211283",name:"其它区",parent:"211200"},{value:"211302",name:"双塔区",parent:"211300"},{value:"211303",name:"龙城区",parent:"211300"},{value:"211321",name:"朝阳县",parent:"211300"},{value:"211322",name:"建平县",parent:"211300"},{value:"211324",name:"喀喇沁左翼蒙古族自治县",parent:"211300"},{value:"211381",name:"北票市",parent:"211300"},{value:"211382",name:"凌源市",parent:"211300"},{value:"211383",name:"其它区",parent:"211300"},{value:"211402",name:"连山区",parent:"211400"},{value:"211403",name:"龙港区",parent:"211400"},{value:"211404",name:"南票区",parent:"211400"},{value:"211421",name:"绥中县",parent:"211400"},{value:"211422",name:"建昌县",parent:"211400"},{value:"211481",name:"兴城市",parent:"211400"},{value:"211482",name:"其它区",parent:"211400"},{value:"220102",name:"南关区",parent:"220100"},{value:"220103",name:"宽城区",parent:"220100"},{value:"220104",name:"朝阳区",parent:"220100"},{value:"220105",name:"二道区",parent:"220100"},{value:"220106",name:"绿园区",parent:"220100"},{value:"220112",name:"双阳区",parent:"220100"},{value:"220122",name:"农安县",parent:"220100"},{value:"220181",name:"九台区",parent:"220100"},{value:"220182",name:"榆树市",parent:"220100"},{value:"220183",name:"德惠市",parent:"220100"},{value:"220184",name:"高新技术产业开发区",parent:"220100"},{value:"220185",name:"汽车产业开发区",parent:"220100"},{value:"220186",name:"经济技术开发区",parent:"220100"},{value:"220187",name:"净月旅游开发区",parent:"220100"},{value:"220188",name:"其它区",parent:"220100"},{value:"220202",name:"昌邑区",parent:"220200"},{value:"220203",name:"龙潭区",parent:"220200"},{value:"220204",name:"船营区",parent:"220200"},{value:"220211",name:"丰满区",parent:"220200"},{value:"220221",name:"永吉县",parent:"220200"},{value:"220281",name:"蛟河市",parent:"220200"},{value:"220282",name:"桦甸市",parent:"220200"},{value:"220283",name:"舒兰市",parent:"220200"},{value:"220284",name:"磐石市",parent:"220200"},{value:"220285",name:"其它区",parent:"220200"},{value:"220302",name:"铁西区",parent:"220300"},{value:"220303",name:"铁东区",parent:"220300"},{value:"220322",name:"梨树县",parent:"220300"},{value:"220323",name:"伊通满族自治县",parent:"220300"},{value:"220381",name:"公主岭市",parent:"220300"},{value:"220382",name:"双辽市",parent:"220300"},{value:"220383",name:"其它区",parent:"220300"},{value:"220402",name:"龙山区",parent:"220400"},{value:"220403",name:"西安区",parent:"220400"},{value:"220421",name:"东丰县",parent:"220400"},{value:"220422",name:"东辽县",parent:"220400"},{value:"220423",name:"其它区",parent:"220400"},{value:"220502",name:"东昌区",parent:"220500"},{value:"220503",name:"二道江区",parent:"220500"},{value:"220521",name:"通化县",parent:"220500"},{value:"220523",name:"辉南县",parent:"220500"},{value:"220524",name:"柳河县",parent:"220500"},{value:"220581",name:"梅河口市",parent:"220500"},{value:"220582",name:"集安市",parent:"220500"},{value:"220583",name:"其它区",parent:"220500"},{value:"220602",name:"浑江区",parent:"220600"},{value:"220621",name:"抚松县",parent:"220600"},{value:"220622",name:"靖宇县",parent:"220600"},{value:"220623",name:"长白朝鲜族自治县",parent:"220600"},{value:"220625",name:"江源区",parent:"220600"},{value:"220681",name:"临江市",parent:"220600"},{value:"220682",name:"其它区",parent:"220600"},{value:"220702",name:"宁江区",parent:"220700"},{value:"220721",name:"前郭尔罗斯蒙古族自治县",parent:"220700"},{value:"220722",name:"长岭县",parent:"220700"},{value:"220723",name:"乾安县",parent:"220700"},{value:"220724",name:"扶余市",parent:"220700"},{value:"220725",name:"其它区",parent:"220700"},{value:"220802",name:"洮北区",parent:"220800"},{value:"220821",name:"镇赉县",parent:"220800"},{value:"220822",name:"通榆县",parent:"220800"},{value:"220881",name:"洮南市",parent:"220800"},{value:"220882",name:"大安市",parent:"220800"},{value:"220883",name:"其它区",parent:"220800"},{value:"222401",name:"延吉市",parent:"222400"},{value:"222402",name:"图们市",parent:"222400"},{value:"222403",name:"敦化市",parent:"222400"},{value:"222404",name:"珲春市",parent:"222400"},{value:"222405",name:"龙井市",parent:"222400"},{value:"222406",name:"和龙市",parent:"222400"},{value:"222424",name:"汪清县",parent:"222400"},{value:"222426",name:"安图县",parent:"222400"},{value:"222427",name:"其它区",parent:"222400"},{value:"230102",name:"道里区",parent:"230100"},{value:"230103",name:"南岗区",parent:"230100"},{value:"230104",name:"道外区",parent:"230100"},{value:"230106",name:"香坊区",parent:"230100"},{value:"230107",name:"动力区",parent:"230100"},{value:"230108",name:"平房区",parent:"230100"},{value:"230109",name:"松北区",parent:"230100"},{value:"230111",name:"呼兰区",parent:"230100"},{value:"230123",name:"依兰县",parent:"230100"},{value:"230124",name:"方正县",parent:"230100"},{value:"230125",name:"宾县",parent:"230100"},{value:"230126",name:"巴彦县",parent:"230100"},{value:"230127",name:"木兰县",parent:"230100"},{value:"230128",name:"通河县",parent:"230100"},{value:"230129",name:"延寿县",parent:"230100"},{value:"230181",name:"阿城区",parent:"230100"},{value:"230182",name:"双城区",parent:"230100"},{value:"230183",name:"尚志市",parent:"230100"},{value:"230184",name:"五常市",parent:"230100"},{value:"230185",name:"阿城市",parent:"230100"},{value:"230186",name:"其它区",parent:"230100"},{value:"230202",name:"龙沙区",parent:"230200"},{value:"230203",name:"建华区",parent:"230200"},{value:"230204",name:"铁锋区",parent:"230200"},{value:"230205",name:"昂昂溪区",parent:"230200"},{value:"230206",name:"富拉尔基区",parent:"230200"},{value:"230207",name:"碾子山区",parent:"230200"},{value:"230208",name:"梅里斯达斡尔族区",parent:"230200"},{value:"230221",name:"龙江县",parent:"230200"},{value:"230223",name:"依安县",parent:"230200"},{value:"230224",name:"泰来县",parent:"230200"},{value:"230225",name:"甘南县",parent:"230200"},{value:"230227",name:"富裕县",parent:"230200"},{value:"230229",name:"克山县",parent:"230200"},{value:"230230",name:"克东县",parent:"230200"},{value:"230231",name:"拜泉县",parent:"230200"},{value:"230281",name:"讷河市",parent:"230200"},{value:"230282",name:"其它区",parent:"230200"},{value:"230302",name:"鸡冠区",parent:"230300"},{value:"230303",name:"恒山区",parent:"230300"},{value:"230304",name:"滴道区",parent:"230300"},{value:"230305",name:"梨树区",parent:"230300"},{value:"230306",name:"城子河区",parent:"230300"},{value:"230307",name:"麻山区",parent:"230300"},{value:"230321",name:"鸡东县",parent:"230300"},{value:"230381",name:"虎林市",parent:"230300"},{value:"230382",name:"密山市",parent:"230300"},{value:"230383",name:"其它区",parent:"230300"},{value:"230402",name:"向阳区",parent:"230400"},{value:"230403",name:"工农区",parent:"230400"},{value:"230404",name:"南山区",parent:"230400"},{value:"230405",name:"兴安区",parent:"230400"},{value:"230406",name:"东山区",parent:"230400"},{value:"230407",name:"兴山区",parent:"230400"},{value:"230421",name:"萝北县",parent:"230400"},{value:"230422",name:"绥滨县",parent:"230400"},{value:"230423",name:"其它区",parent:"230400"},{value:"230502",name:"尖山区",parent:"230500"},{value:"230503",name:"岭东区",parent:"230500"},{value:"230505",name:"四方台区",parent:"230500"},{value:"230506",name:"宝山区",parent:"230500"},{value:"230521",name:"集贤县",parent:"230500"},{value:"230522",name:"友谊县",parent:"230500"},{value:"230523",name:"宝清县",parent:"230500"},{value:"230524",name:"饶河县",parent:"230500"},{value:"230525",name:"其它区",parent:"230500"},{value:"230602",name:"萨尔图区",parent:"230600"},{value:"230603",name:"龙凤区",parent:"230600"},{value:"230604",name:"让胡路区",parent:"230600"},{value:"230605",name:"红岗区",parent:"230600"},{value:"230606",name:"大同区",parent:"230600"},{value:"230621",name:"肇州县",parent:"230600"},{value:"230622",name:"肇源县",parent:"230600"},{value:"230623",name:"林甸县",parent:"230600"},{value:"230624",name:"杜尔伯特蒙古族自治县",parent:"230600"},{value:"230625",name:"其它区",parent:"230600"},{value:"230702",name:"伊春区",parent:"230700"},{value:"230703",name:"南岔区",parent:"230700"},{value:"230704",name:"友好区",parent:"230700"},{value:"230705",name:"西林区",parent:"230700"},{value:"230706",name:"翠峦区",parent:"230700"},{value:"230707",name:"新青区",parent:"230700"},{value:"230708",name:"美溪区",parent:"230700"},{value:"230709",name:"金山屯区",parent:"230700"},{value:"230710",name:"五营区",parent:"230700"},{value:"230711",name:"乌马河区",parent:"230700"},{value:"230712",name:"汤旺河区",parent:"230700"},{value:"230713",name:"带岭区",parent:"230700"},{value:"230714",name:"乌伊岭区",parent:"230700"},{value:"230715",name:"红星区",parent:"230700"},{value:"230716",name:"上甘岭区",parent:"230700"},{value:"230722",name:"嘉荫县",parent:"230700"},{value:"230781",name:"铁力市",parent:"230700"},{value:"230782",name:"其它区",parent:"230700"},{value:"230802",name:"永红区",parent:"230800"},{value:"230803",name:"向阳区",parent:"230800"},{value:"230804",name:"前进区",parent:"230800"},{value:"230805",name:"东风区",parent:"230800"},{value:"230811",name:"郊区",parent:"230800"},{value:"230822",name:"桦南县",parent:"230800"},{value:"230826",name:"桦川县",parent:"230800"},{value:"230828",name:"汤原县",parent:"230800"},{value:"230833",name:"抚远县",parent:"230800"},{value:"230881",name:"同江市",parent:"230800"},{value:"230882",name:"富锦市",parent:"230800"},{value:"230883",name:"其它区",parent:"230800"},{value:"230902",name:"新兴区",parent:"230900"},{value:"230903",name:"桃山区",parent:"230900"},{value:"230904",name:"茄子河区",parent:"230900"},{value:"230921",name:"勃利县",parent:"230900"},{value:"230922",name:"其它区",parent:"230900"},{value:"231002",name:"东安区",parent:"231000"},{value:"231003",name:"阳明区",parent:"231000"},{value:"231004",name:"爱民区",parent:"231000"},{value:"231005",name:"西安区",parent:"231000"},{value:"231024",name:"东宁县",parent:"231000"},{value:"231025",name:"林口县",parent:"231000"},{value:"231081",name:"绥芬河市",parent:"231000"},{value:"231083",name:"海林市",parent:"231000"},{value:"231084",name:"宁安市",parent:"231000"},{value:"231085",name:"穆棱市",parent:"231000"},{value:"231086",name:"其它区",parent:"231000"},{value:"231102",name:"爱辉区",parent:"231100"},{value:"231121",name:"嫩江县",parent:"231100"},{value:"231123",name:"逊克县",parent:"231100"},{value:"231124",name:"孙吴县",parent:"231100"},{value:"231181",name:"北安市",parent:"231100"},{value:"231182",name:"五大连池市",parent:"231100"},{value:"231183",name:"其它区",parent:"231100"},{value:"231202",name:"北林区",parent:"231200"},{value:"231221",name:"望奎县",parent:"231200"},{value:"231222",name:"兰西县",parent:"231200"},{value:"231223",name:"青冈县",parent:"231200"},{value:"231224",name:"庆安县",parent:"231200"},{value:"231225",name:"明水县",parent:"231200"},{value:"231226",name:"绥棱县",parent:"231200"},{value:"231281",name:"安达市",parent:"231200"},{value:"231282",name:"肇东市",parent:"231200"},{value:"231283",name:"海伦市",parent:"231200"},{value:"231284",name:"其它区",parent:"231200"},{value:"232702",name:"松岭区",parent:"232700"},{value:"232703",name:"新林区",parent:"232700"},{value:"232704",name:"呼中区",parent:"232700"},{value:"232721",name:"呼玛县",parent:"232700"},{value:"232722",name:"塔河县",parent:"232700"},{value:"232723",name:"漠河县",parent:"232700"},{value:"232724",name:"加格达奇区",parent:"232700"},{value:"232725",name:"其它区",parent:"232700"},{value:"310101",name:"黄浦区",parent:"310100"},{value:"310103",name:"卢湾区",parent:"310100"},{value:"310104",name:"徐汇区",parent:"310100"},{value:"310105",name:"长宁区",parent:"310100"},{value:"310106",name:"静安区",parent:"310100"},{value:"310107",name:"普陀区",parent:"310100"},{value:"310108",name:"闸北区",parent:"310100"},{value:"310109",name:"虹口区",parent:"310100"},{value:"310110",name:"杨浦区",parent:"310100"},{value:"310112",name:"闵行区",parent:"310100"},{value:"310113",name:"宝山区",parent:"310100"},{value:"310114",name:"嘉定区",parent:"310100"},{value:"310115",name:"浦东新区",parent:"310100"},{value:"310116",name:"金山区",parent:"310100"},{value:"310117",name:"松江区",parent:"310100"},{value:"310118",name:"青浦区",parent:"310100"},{value:"310119",name:"南汇区",parent:"310100"},{value:"310120",name:"奉贤区",parent:"310100"},{value:"310152",name:"川沙区",parent:"310100"},{value:"310230",name:"崇明县",parent:"310100"},{value:"310231",name:"其它区",parent:"310100"},{value:"320102",name:"玄武区",parent:"320100"},{value:"320103",name:"白下区",parent:"320100"},{value:"320104",name:"秦淮区",parent:"320100"},{value:"320105",name:"建邺区",parent:"320100"},{value:"320106",name:"鼓楼区",parent:"320100"},{value:"320107",name:"下关区",parent:"320100"},{value:"320111",name:"浦口区",parent:"320100"},{value:"320113",name:"栖霞区",parent:"320100"},{value:"320114",name:"雨花台区",parent:"320100"},{value:"320115",name:"江宁区",parent:"320100"},{value:"320116",name:"六合区",parent:"320100"},{value:"320124",name:"溧水区",parent:"320100"},{value:"320125",name:"高淳区",parent:"320100"},{value:"320126",name:"其它区",parent:"320100"},{value:"320202",name:"崇安区",parent:"320200"},{value:"320203",name:"南长区",parent:"320200"},{value:"320204",name:"北塘区",parent:"320200"},{value:"320205",name:"锡山区",parent:"320200"},{value:"320206",name:"惠山区",parent:"320200"},{value:"320211",name:"滨湖区",parent:"320200"},{value:"320213",name:"梁溪区",parent:"320200"},{value:"320214",name:"新吴区",parent:"320200"},{value:"320281",name:"江阴市",parent:"320200"},{value:"320282",name:"宜兴市",parent:"320200"},{value:"320296",name:"新区",parent:"320200"},{value:"320297",name:"其它区",parent:"320200"},{value:"320302",name:"鼓楼区",parent:"320300"},{value:"320303",name:"云龙区",parent:"320300"},{value:"320304",name:"九里区",parent:"320300"},{value:"320305",name:"贾汪区",parent:"320300"},{value:"320311",name:"泉山区",parent:"320300"},{value:"320321",name:"丰县",parent:"320300"},{value:"320322",name:"沛县",parent:"320300"},{value:"320323",name:"铜山区",parent:"320300"},{value:"320324",name:"睢宁县",parent:"320300"},{value:"320381",name:"新沂市",parent:"320300"},{value:"320382",name:"邳州市",parent:"320300"},{value:"320383",name:"其它区",parent:"320300"},{value:"320402",name:"天宁区",parent:"320400"},{value:"320404",name:"钟楼区",parent:"320400"},{value:"320405",name:"戚墅堰区",parent:"320400"},{value:"320411",name:"新北区",parent:"320400"},{value:"320412",name:"武进区",parent:"320400"},{value:"320481",name:"溧阳市",parent:"320400"},{value:"320482",name:"金坛市",parent:"320400"},{value:"320483",name:"其它区",parent:"320400"},{value:"320502",name:"沧浪区",parent:"320500"},{value:"320503",name:"平江区",parent:"320500"},{value:"320504",name:"金阊区",parent:"320500"},{value:"320505",name:"虎丘区",parent:"320500"},{value:"320506",name:"吴中区",parent:"320500"},{value:"320507",name:"相城区",parent:"320500"},{value:"320508",name:"姑苏区",parent:"320500"},{value:"320581",name:"常熟市",parent:"320500"},{value:"320582",name:"张家港市",parent:"320500"},{value:"320583",name:"昆山市",parent:"320500"},{value:"320584",name:"吴江区",parent:"320500"},{value:"320585",name:"太仓市",parent:"320500"},{value:"320594",name:"新区",parent:"320500"},{value:"320595",name:"园区",parent:"320500"},{value:"320596",name:"其它区",parent:"320500"},{value:"320602",name:"崇川区",parent:"320600"},{value:"320611",name:"港闸区",parent:"320600"},{value:"320612",name:"通州区",parent:"320600"},{value:"320621",name:"海安县",parent:"320600"},{value:"320623",name:"如东县",parent:"320600"},{value:"320681",name:"启东市",parent:"320600"},{value:"320682",name:"如皋市",parent:"320600"},{value:"320683",name:"通州市",parent:"320600"},{value:"320684",name:"海门市",parent:"320600"},{value:"320693",name:"开发区",parent:"320600"},{value:"320694",name:"其它区",parent:"320600"},{value:"320703",name:"连云区",parent:"320700"},{value:"320705",name:"新浦区",parent:"320700"},{value:"320706",name:"海州区",parent:"320700"},{value:"320721",name:"赣榆区",parent:"320700"},{value:"320722",name:"东海县",parent:"320700"},{value:"320723",name:"灌云县",parent:"320700"},{value:"320724",name:"灌南县",parent:"320700"},{value:"320725",name:"其它区",parent:"320700"},{value:"320802",name:"清河区",parent:"320800"},{value:"320803",name:"淮安区",parent:"320800"},{value:"320804",name:"淮阴区",parent:"320800"},{value:"320811",name:"清浦区",parent:"320800"},{value:"320826",name:"涟水县",parent:"320800"},{value:"320829",name:"洪泽县",parent:"320800"},{value:"320830",name:"盱眙县",parent:"320800"},{value:"320831",name:"金湖县",parent:"320800"},{value:"320832",name:"其它区",parent:"320800"},{value:"320902",name:"亭湖区",parent:"320900"},{value:"320903",name:"盐都区",parent:"320900"},{value:"320921",name:"响水县",parent:"320900"},{value:"320922",name:"滨海县",parent:"320900"},{value:"320923",name:"阜宁县",parent:"320900"},{value:"320924",name:"射阳县",parent:"320900"},{value:"320925",name:"建湖县",parent:"320900"},{value:"320981",name:"东台市",parent:"320900"},{value:"320982",name:"大丰市",parent:"320900"},{value:"320983",name:"其它区",parent:"320900"},{value:"321002",name:"广陵区",parent:"321000"},{value:"321003",name:"邗江区",parent:"321000"},{value:"321011",name:"维扬区",parent:"321000"},{value:"321023",name:"宝应县",parent:"321000"},{value:"321081",name:"仪征市",parent:"321000"},{value:"321084",name:"高邮市",parent:"321000"},{value:"321088",name:"江都区",parent:"321000"},{value:"321092",name:"经济开发区",parent:"321000"},{value:"321093",name:"其它区",parent:"321000"},{value:"321102",name:"京口区",parent:"321100"},{value:"321111",name:"润州区",parent:"321100"},{value:"321112",name:"丹徒区",parent:"321100"},{value:"321181",name:"丹阳市",parent:"321100"},{value:"321182",name:"扬中市",parent:"321100"},{value:"321183",name:"句容市",parent:"321100"},{value:"321184",name:"其它区",parent:"321100"},{value:"321202",name:"海陵区",parent:"321200"},{value:"321203",name:"高港区",parent:"321200"},{value:"321281",name:"兴化市",parent:"321200"},{value:"321282",name:"靖江市",parent:"321200"},{value:"321283",name:"泰兴市",parent:"321200"},{value:"321284",name:"姜堰区",parent:"321200"},{value:"321285",name:"其它区",parent:"321200"},{value:"321302",name:"宿城区",parent:"321300"},{value:"321311",name:"宿豫区",parent:"321300"},{value:"321322",name:"沭阳县",parent:"321300"},{value:"321323",name:"泗阳县",parent:"321300"},{value:"321324",name:"泗洪县",parent:"321300"},{value:"321325",name:"其它区",parent:"321300"},{value:"330102",name:"上城区",parent:"330100"},{value:"330103",name:"下城区",parent:"330100"},{value:"330104",name:"江干区",parent:"330100"},{value:"330105",name:"拱墅区",parent:"330100"},{value:"330106",name:"西湖区",parent:"330100"},{value:"330108",name:"滨江区",parent:"330100"},{value:"330109",name:"萧山区",parent:"330100"},{value:"330110",name:"余杭区",parent:"330100"},{value:"330122",name:"桐庐县",parent:"330100"},{value:"330127",name:"淳安县",parent:"330100"},{value:"330182",name:"建德市",parent:"330100"},{value:"330183",name:"富阳区",parent:"330100"},{value:"330185",name:"临安市",parent:"330100"},{value:"330186",name:"其它区",parent:"330100"},{value:"330203",name:"海曙区",parent:"330200"},{value:"330204",name:"江东区",parent:"330200"},{value:"330205",name:"江北区",parent:"330200"},{value:"330206",name:"北仑区",parent:"330200"},{value:"330211",name:"镇海区",parent:"330200"},{value:"330212",name:"鄞州区",parent:"330200"},{value:"330225",name:"象山县",parent:"330200"},{value:"330226",name:"宁海县",parent:"330200"},{value:"330281",name:"余姚市",parent:"330200"},{value:"330282",name:"慈溪市",parent:"330200"},{value:"330283",name:"奉化市",parent:"330200"},{value:"330284",name:"其它区",parent:"330200"},{value:"330302",name:"鹿城区",parent:"330300"},{value:"330303",name:"龙湾区",parent:"330300"},{value:"330304",name:"瓯海区",parent:"330300"},{value:"330322",name:"洞头县",parent:"330300"},{value:"330324",name:"永嘉县",parent:"330300"},{value:"330326",name:"平阳县",parent:"330300"},{value:"330327",name:"苍南县",parent:"330300"},{value:"330328",name:"文成县",parent:"330300"},{value:"330329",name:"泰顺县",parent:"330300"},{value:"330381",name:"瑞安市",parent:"330300"},{value:"330382",name:"乐清市",parent:"330300"},{value:"330383",name:"其它区",parent:"330300"},{value:"330402",name:"南湖区",parent:"330400"},{value:"330411",name:"秀洲区",parent:"330400"},{value:"330421",name:"嘉善县",parent:"330400"},{value:"330424",name:"海盐县",parent:"330400"},{value:"330481",name:"海宁市",parent:"330400"},{value:"330482",name:"平湖市",parent:"330400"},{value:"330483",name:"桐乡市",parent:"330400"},{value:"330484",name:"其它区",parent:"330400"},{value:"330502",name:"吴兴区",parent:"330500"},{value:"330503",name:"南浔区",parent:"330500"},{value:"330521",name:"德清县",parent:"330500"},{value:"330522",name:"长兴县",parent:"330500"},{value:"330523",name:"安吉县",parent:"330500"},{value:"330524",name:"其它区",parent:"330500"},{value:"330602",name:"越城区",parent:"330600"},{value:"330621",name:"柯桥区",parent:"330600"},{value:"330624",name:"新昌县",parent:"330600"},{value:"330681",name:"诸暨市",parent:"330600"},{value:"330682",name:"上虞区",parent:"330600"},{value:"330683",name:"嵊州市",parent:"330600"},{value:"330684",name:"其它区",parent:"330600"},{value:"330702",name:"婺城区",parent:"330700"},{value:"330703",name:"金东区",parent:"330700"},{value:"330723",name:"武义县",parent:"330700"},{value:"330726",name:"浦江县",parent:"330700"},{value:"330727",name:"磐安县",parent:"330700"},{value:"330781",name:"兰溪市",parent:"330700"},{value:"330782",name:"义乌市",parent:"330700"},{value:"330783",name:"东阳市",parent:"330700"},{value:"330784",name:"永康市",parent:"330700"},{value:"330785",name:"其它区",parent:"330700"},{value:"330802",name:"柯城区",parent:"330800"},{value:"330803",name:"衢江区",parent:"330800"},{value:"330822",name:"常山县",parent:"330800"},{value:"330824",name:"开化县",parent:"330800"},{value:"330825",name:"龙游县",parent:"330800"},{value:"330881",name:"江山市",parent:"330800"},{value:"330882",name:"其它区",parent:"330800"},{value:"330902",name:"定海区",parent:"330900"},{value:"330903",name:"普陀区",parent:"330900"},{value:"330921",name:"岱山县",parent:"330900"},{value:"330922",name:"嵊泗县",parent:"330900"},{value:"330923",name:"其它区",parent:"330900"},{value:"331002",name:"椒江区",parent:"331000"},{value:"331003",name:"黄岩区",parent:"331000"},{value:"331004",name:"路桥区",parent:"331000"},{value:"331021",name:"玉环县",parent:"331000"},{value:"331022",name:"三门县",parent:"331000"},{value:"331023",name:"天台县",parent:"331000"},{value:"331024",name:"仙居县",parent:"331000"},{value:"331081",name:"温岭市",parent:"331000"},{value:"331082",name:"临海市",parent:"331000"},{value:"331083",name:"其它区",parent:"331000"},{value:"331102",name:"莲都区",parent:"331100"},{value:"331121",name:"青田县",parent:"331100"},{value:"331122",name:"缙云县",parent:"331100"},{value:"331123",name:"遂昌县",parent:"331100"},{value:"331124",name:"松阳县",parent:"331100"},{value:"331125",name:"云和县",parent:"331100"},{value:"331126",name:"庆元县",parent:"331100"},{value:"331127",name:"景宁畲族自治县",parent:"331100"},{value:"331181",name:"龙泉市",parent:"331100"},{value:"331182",name:"其它区",parent:"331100"},{value:"340102",name:"瑶海区",parent:"340100"},{value:"340103",name:"庐阳区",parent:"340100"},{value:"340104",name:"蜀山区",parent:"340100"},{value:"340111",name:"包河区",parent:"340100"},{value:"340121",name:"长丰县",parent:"340100"},{value:"340122",name:"肥东县",parent:"340100"},{value:"340123",name:"肥西县",parent:"340100"},{value:"340151",name:"高新区",parent:"340100"},{value:"340191",name:"中区",parent:"340100"},{value:"340192",name:"其它区",parent:"340100"},{value:"340202",name:"镜湖区",parent:"340200"},{value:"340203",name:"弋江区",parent:"340200"},{value:"340207",name:"鸠江区",parent:"340200"},{value:"340208",name:"三山区",parent:"340200"},{value:"340221",name:"芜湖县",parent:"340200"},{value:"340222",name:"繁昌县",parent:"340200"},{value:"340223",name:"南陵县",parent:"340200"},{value:"340224",name:"其它区",parent:"340200"},{value:"340302",name:"龙子湖区",parent:"340300"},{value:"340303",name:"蚌山区",parent:"340300"},{value:"340304",name:"禹会区",parent:"340300"},{value:"340311",name:"淮上区",parent:"340300"},{value:"340321",name:"怀远县",parent:"340300"},{value:"340322",name:"五河县",parent:"340300"},{value:"340323",name:"固镇县",parent:"340300"},{value:"340324",name:"其它区",parent:"340300"},{value:"340402",name:"大通区",parent:"340400"},{value:"340403",name:"田家庵区",parent:"340400"},{value:"340404",name:"谢家集区",parent:"340400"},{value:"340405",name:"八公山区",parent:"340400"},{value:"340406",name:"潘集区",parent:"340400"},{value:"340421",name:"凤台县",parent:"340400"},{value:"340422",name:"其它区",parent:"340400"},{value:"340499",name:"寿县",parent:"340400"},{value:"340502",name:"金家庄区",parent:"340500"},{value:"340503",name:"花山区",parent:"340500"},{value:"340504",name:"雨山区",parent:"340500"},{value:"340506",name:"博望区",parent:"340500"},{value:"340521",name:"当涂县",parent:"340500"},{value:"340522",name:"其它区",parent:"340500"},{value:"340602",name:"杜集区",parent:"340600"},{value:"340603",name:"相山区",parent:"340600"},{value:"340604",name:"烈山区",parent:"340600"},{value:"340621",name:"濉溪县",parent:"340600"},{value:"340622",name:"其它区",parent:"340600"},{value:"340702",name:"铜官山区",parent:"340700"},{value:"340703",name:"狮子山区",parent:"340700"},{value:"340705",name:"铜官区",parent:"340700"},{value:"340711",name:"郊区",parent:"340700"},{value:"340721",name:"铜陵县",parent:"340700"},{value:"340722",name:"其它区",parent:"340700"},{value:"340799",name:"枞阳县",parent:"340700"},{value:"340802",name:"迎江区",parent:"340800"},{value:"340803",name:"大观区",parent:"340800"},{value:"340811",name:"宜秀区",parent:"340800"},{value:"340822",name:"怀宁县",parent:"340800"},{value:"340823",name:"枞阳县",parent:"340800"},{value:"340824",name:"潜山县",parent:"340800"},{value:"340825",name:"太湖县",parent:"340800"},{value:"340826",name:"宿松县",parent:"340800"},{value:"340827",name:"望江县",parent:"340800"},{value:"340828",name:"岳西县",parent:"340800"},{value:"340881",name:"桐城市",parent:"340800"},{value:"340882",name:"其它区",parent:"340800"},{value:"341002",name:"屯溪区",parent:"341000"},{value:"341003",name:"黄山区",parent:"341000"},{value:"341004",name:"徽州区",parent:"341000"},{value:"341021",name:"歙县",parent:"341000"},{value:"341022",name:"休宁县",parent:"341000"},{value:"341023",name:"黟县",parent:"341000"},{value:"341024",name:"祁门县",parent:"341000"},{value:"341025",name:"其它区",parent:"341000"},{value:"341102",name:"琅琊区",parent:"341100"},{value:"341103",name:"南谯区",parent:"341100"},{value:"341122",name:"来安县",parent:"341100"},{value:"341124",name:"全椒县",parent:"341100"},{value:"341125",name:"定远县",parent:"341100"},{value:"341126",name:"凤阳县",parent:"341100"},{value:"341181",name:"天长市",parent:"341100"},{value:"341182",name:"明光市",parent:"341100"},{value:"341183",name:"其它区",parent:"341100"},{value:"341202",name:"颍州区",parent:"341200"},{value:"341203",name:"颍东区",parent:"341200"},{value:"341204",name:"颍泉区",parent:"341200"},{value:"341221",name:"临泉县",parent:"341200"},{value:"341222",name:"太和县",parent:"341200"},{value:"341225",name:"阜南县",parent:"341200"},{value:"341226",name:"颍上县",parent:"341200"},{value:"341282",name:"界首市",parent:"341200"},{value:"341283",name:"其它区",parent:"341200"},{value:"341302",name:"埇桥区",parent:"341300"},{value:"341321",name:"砀山县",parent:"341300"},{value:"341322",name:"萧县",parent:"341300"},{value:"341323",name:"灵璧县",parent:"341300"},{value:"341324",name:"泗县",parent:"341300"},{value:"341325",name:"其它区",parent:"341300"},{value:"341400",name:"巢湖市",parent:"340100"},{value:"341402",name:"居巢区",parent:"340100"},{value:"341421",name:"庐江县",parent:"340100"},{value:"341422",name:"无为县",parent:"340200"},{value:"341423",name:"含山县",parent:"340500"},{value:"341424",name:"和县",parent:"340500"},{value:"341502",name:"金安区",parent:"341500"},{value:"341503",name:"裕安区",parent:"341500"},{value:"341504",name:"叶集区",parent:"341500"},{value:"341521",name:"寿县",parent:"341500"},{value:"341522",name:"霍邱县",parent:"341500"},{value:"341523",name:"舒城县",parent:"341500"},{value:"341524",name:"金寨县",parent:"341500"},{value:"341525",name:"霍山县",parent:"341500"},{value:"341526",name:"其它区",parent:"341500"},{value:"341602",name:"谯城区",parent:"341600"},{value:"341621",name:"涡阳县",parent:"341600"},{value:"341622",name:"蒙城县",parent:"341600"},{value:"341623",name:"利辛县",parent:"341600"},{value:"341624",name:"其它区",parent:"341600"},{value:"341702",name:"贵池区",parent:"341700"},{value:"341721",name:"东至县",parent:"341700"},{value:"341722",name:"石台县",parent:"341700"},{value:"341723",name:"青阳县",parent:"341700"},{value:"341724",name:"其它区",parent:"341700"},{value:"341802",name:"宣州区",parent:"341800"},{value:"341821",name:"郎溪县",parent:"341800"},{value:"341822",name:"广德县",parent:"341800"},{value:"341823",name:"泾县",parent:"341800"},{value:"341824",name:"绩溪县",parent:"341800"},{value:"341825",name:"旌德县",parent:"341800"},{value:"341881",name:"宁国市",parent:"341800"},{value:"341882",name:"其它区",parent:"341800"},{value:"350102",name:"鼓楼区",parent:"350100"},{value:"350103",name:"台江区",parent:"350100"},{value:"350104",name:"仓山区",parent:"350100"},{value:"350105",name:"马尾区",parent:"350100"},{value:"350111",name:"晋安区",parent:"350100"},{value:"350121",name:"闽侯县",parent:"350100"},{value:"350122",name:"连江县",parent:"350100"},{value:"350123",name:"罗源县",parent:"350100"},{value:"350124",name:"闽清县",parent:"350100"},{value:"350125",name:"永泰县",parent:"350100"},{value:"350128",name:"平潭县",parent:"350100"},{value:"350181",name:"福清市",parent:"350100"},{value:"350182",name:"长乐市",parent:"350100"},{value:"350183",name:"其它区",parent:"350100"},{value:"350203",name:"思明区",parent:"350200"},{value:"350205",name:"海沧区",parent:"350200"},{value:"350206",name:"湖里区",parent:"350200"},{value:"350211",name:"集美区",parent:"350200"},{value:"350212",name:"同安区",parent:"350200"},{value:"350213",name:"翔安区",parent:"350200"},{value:"350214",name:"其它区",parent:"350200"},{value:"350302",name:"城厢区",parent:"350300"},{value:"350303",name:"涵江区",parent:"350300"},{value:"350304",name:"荔城区",parent:"350300"},{value:"350305",name:"秀屿区",parent:"350300"},{value:"350322",name:"仙游县",parent:"350300"},{value:"350323",name:"其它区",parent:"350300"},{value:"350402",name:"梅列区",parent:"350400"},{value:"350403",name:"三元区",parent:"350400"},{value:"350421",name:"明溪县",parent:"350400"},{value:"350423",name:"清流县",parent:"350400"},{value:"350424",name:"宁化县",parent:"350400"},{value:"350425",name:"大田县",parent:"350400"},{value:"350426",name:"尤溪县",parent:"350400"},{value:"350427",name:"沙县",parent:"350400"},{value:"350428",name:"将乐县",parent:"350400"},{value:"350429",name:"泰宁县",parent:"350400"},{value:"350430",name:"建宁县",parent:"350400"},{value:"350481",name:"永安市",parent:"350400"},{value:"350482",name:"其它区",parent:"350400"},{value:"350502",name:"鲤城区",parent:"350500"},{value:"350503",name:"丰泽区",parent:"350500"},{value:"350504",name:"洛江区",parent:"350500"},{value:"350505",name:"泉港区",parent:"350500"},{value:"350521",name:"惠安县",parent:"350500"},{value:"350524",name:"安溪县",parent:"350500"},{value:"350525",name:"永春县",parent:"350500"},{value:"350526",name:"德化县",parent:"350500"},{value:"350527",name:"金门县",parent:"350500"},{value:"350581",name:"石狮市",parent:"350500"},{value:"350582",name:"晋江市",parent:"350500"},{value:"350583",name:"南安市",parent:"350500"},{value:"350584",name:"其它区",parent:"350500"},{value:"350602",name:"芗城区",parent:"350600"},{value:"350603",name:"龙文区",parent:"350600"},{value:"350622",name:"云霄县",parent:"350600"},{value:"350623",name:"漳浦县",parent:"350600"},{value:"350624",name:"诏安县",parent:"350600"},{value:"350625",name:"长泰县",parent:"350600"},{value:"350626",name:"东山县",parent:"350600"},{value:"350627",name:"南靖县",parent:"350600"},{value:"350628",name:"平和县",parent:"350600"},{value:"350629",name:"华安县",parent:"350600"},{value:"350681",name:"龙海市",parent:"350600"},{value:"350682",name:"其它区",parent:"350600"},{value:"350702",name:"延平区",parent:"350700"},{value:"350721",name:"顺昌县",parent:"350700"},{value:"350722",name:"浦城县",parent:"350700"},{value:"350723",name:"光泽县",parent:"350700"},{value:"350724",name:"松溪县",parent:"350700"},{value:"350725",name:"政和县",parent:"350700"},{value:"350781",name:"邵武市",parent:"350700"},{value:"350782",name:"武夷山市",parent:"350700"},{value:"350783",name:"建瓯市",parent:"350700"},{value:"350784",name:"建阳区",parent:"350700"},{value:"350785",name:"其它区",parent:"350700"},{value:"350802",name:"新罗区",parent:"350800"},{value:"350821",name:"长汀县",parent:"350800"},{value:"350822",name:"永定区",parent:"350800"},{value:"350823",name:"上杭县",parent:"350800"},{value:"350824",name:"武平县",parent:"350800"},{value:"350825",name:"连城县",parent:"350800"},{value:"350881",name:"漳平市",parent:"350800"},{value:"350882",name:"其它区",parent:"350800"},{value:"350902",name:"蕉城区",parent:"350900"},{value:"350921",name:"霞浦县",parent:"350900"},{value:"350922",name:"古田县",parent:"350900"},{value:"350923",name:"屏南县",parent:"350900"},{value:"350924",name:"寿宁县",parent:"350900"},{value:"350925",name:"周宁县",parent:"350900"},{value:"350926",name:"柘荣县",parent:"350900"},{value:"350981",name:"福安市",parent:"350900"},{value:"350982",name:"福鼎市",parent:"350900"},{value:"350983",name:"其它区",parent:"350900"},{value:"360102",name:"东湖区",parent:"360100"},{value:"360103",name:"西湖区",parent:"360100"},{value:"360104",name:"青云谱区",parent:"360100"},{value:"360105",name:"湾里区",parent:"360100"},{value:"360111",name:"青山湖区",parent:"360100"},{value:"360121",name:"南昌县",parent:"360100"},{value:"360122",name:"新建县",parent:"360100"},{value:"360123",name:"安义县",parent:"360100"},{value:"360124",name:"进贤县",parent:"360100"},{value:"360125",name:"红谷滩新区",parent:"360100"},{value:"360126",name:"经济技术开发区",parent:"360100"},{value:"360127",name:"昌北区",parent:"360100"},{value:"360128",name:"其它区",parent:"360100"},{value:"360202",name:"昌江区",parent:"360200"},{value:"360203",name:"珠山区",parent:"360200"},{value:"360222",name:"浮梁县",parent:"360200"},{value:"360281",name:"乐平市",parent:"360200"},{value:"360282",name:"其它区",parent:"360200"},{value:"360302",name:"安源区",parent:"360300"},{value:"360313",name:"湘东区",parent:"360300"},{value:"360321",name:"莲花县",parent:"360300"},{value:"360322",name:"上栗县",parent:"360300"},{value:"360323",name:"芦溪县",parent:"360300"},{value:"360324",name:"其它区",parent:"360300"},{value:"360402",name:"庐山区",parent:"360400"},{value:"360403",name:"浔阳区",parent:"360400"},{value:"360421",name:"九江县",parent:"360400"},{value:"360423",name:"武宁县",parent:"360400"},{value:"360424",name:"修水县",parent:"360400"},{value:"360425",name:"永修县",parent:"360400"},{value:"360426",name:"德安县",parent:"360400"},{value:"360427",name:"星子县",parent:"360400"},{value:"360428",name:"都昌县",parent:"360400"},{value:"360429",name:"湖口县",parent:"360400"},{value:"360430",name:"彭泽县",parent:"360400"},{value:"360481",name:"瑞昌市",parent:"360400"},{value:"360482",name:"其它区",parent:"360400"},{value:"360483",name:"共青城市",parent:"360400"},{value:"360502",name:"渝水区",parent:"360500"},{value:"360521",name:"分宜县",parent:"360500"},{value:"360522",name:"其它区",parent:"360500"},{value:"360602",name:"月湖区",parent:"360600"},{value:"360622",name:"余江县",parent:"360600"},{value:"360681",name:"贵溪市",parent:"360600"},{value:"360682",name:"其它区",parent:"360600"},{value:"360702",name:"章贡区",parent:"360700"},{value:"360721",name:"赣县",parent:"360700"},{value:"360722",name:"信丰县",parent:"360700"},{value:"360723",name:"大余县",parent:"360700"},{value:"360724",name:"上犹县",parent:"360700"},{value:"360725",name:"崇义县",parent:"360700"},{value:"360726",name:"安远县",parent:"360700"},{value:"360727",name:"龙南县",parent:"360700"},{value:"360728",name:"定南县",parent:"360700"},{value:"360729",name:"全南县",parent:"360700"},{value:"360730",name:"宁都县",parent:"360700"},{value:"360731",name:"于都县",parent:"360700"},{value:"360732",name:"兴国县",parent:"360700"},{value:"360733",name:"会昌县",parent:"360700"},{value:"360734",name:"寻乌县",parent:"360700"},{value:"360735",name:"石城县",parent:"360700"},{value:"360751",name:"黄金区",parent:"360700"},{value:"360781",name:"瑞金市",parent:"360700"},{value:"360782",name:"南康区",parent:"360700"},{value:"360783",name:"其它区",parent:"360700"},{value:"360802",name:"吉州区",parent:"360800"},{value:"360803",name:"青原区",parent:"360800"},{value:"360821",name:"吉安县",parent:"360800"},{value:"360822",name:"吉水县",parent:"360800"},{value:"360823",name:"峡江县",parent:"360800"},{value:"360824",name:"新干县",parent:"360800"},{value:"360825",name:"永丰县",parent:"360800"},{value:"360826",name:"泰和县",parent:"360800"},{value:"360827",name:"遂川县",parent:"360800"},{value:"360828",name:"万安县",parent:"360800"},{value:"360829",name:"安福县",parent:"360800"},{value:"360830",name:"永新县",parent:"360800"},{value:"360881",name:"井冈山市",parent:"360800"},{value:"360882",name:"其它区",parent:"360800"},{value:"360902",name:"袁州区",parent:"360900"},{value:"360921",name:"奉新县",parent:"360900"},{value:"360922",name:"万载县",parent:"360900"},{value:"360923",name:"上高县",parent:"360900"},{value:"360924",name:"宜丰县",parent:"360900"},{value:"360925",name:"靖安县",parent:"360900"},{value:"360926",name:"铜鼓县",parent:"360900"},{value:"360981",name:"丰城市",parent:"360900"},{value:"360982",name:"樟树市",parent:"360900"},{value:"360983",name:"高安市",parent:"360900"},{value:"360984",name:"其它区",parent:"360900"},{value:"361002",name:"临川区",parent:"361000"},{value:"361021",name:"南城县",parent:"361000"},{value:"361022",name:"黎川县",parent:"361000"},{value:"361023",name:"南丰县",parent:"361000"},{value:"361024",name:"崇仁县",parent:"361000"},{value:"361025",name:"乐安县",parent:"361000"},{value:"361026",name:"宜黄县",parent:"361000"},{value:"361027",name:"金溪县",parent:"361000"},{value:"361028",name:"资溪县",parent:"361000"},{value:"361029",name:"东乡县",parent:"361000"},{value:"361030",name:"广昌县",parent:"361000"},{value:"361031",name:"其它区",parent:"361000"},{value:"361102",name:"信州区",parent:"361100"},{value:"361121",name:"上饶县",parent:"361100"},{value:"361122",name:"广丰区",parent:"361100"},{value:"361123",name:"玉山县",parent:"361100"},{value:"361124",name:"铅山县",parent:"361100"},{value:"361125",name:"横峰县",parent:"361100"},{value:"361126",name:"弋阳县",parent:"361100"},{value:"361127",name:"余干县",parent:"361100"},{value:"361128",name:"鄱阳县",parent:"361100"},{value:"361129",name:"万年县",parent:"361100"},{value:"361130",name:"婺源县",parent:"361100"},{value:"361181",name:"德兴市",parent:"361100"},{value:"361182",name:"其它区",parent:"361100"},{value:"370102",name:"历下区",parent:"370100"},{value:"370103",name:"市中区",parent:"370100"},{value:"370104",name:"槐荫区",parent:"370100"},{value:"370105",name:"天桥区",parent:"370100"},{value:"370112",name:"历城区",parent:"370100"},{value:"370113",name:"长清区",parent:"370100"},{value:"370124",name:"平阴县",parent:"370100"},{value:"370125",name:"济阳县",parent:"370100"},{value:"370126",name:"商河县",parent:"370100"},{value:"370181",name:"章丘市",parent:"370100"},{value:"370182",name:"其它区",parent:"370100"},{value:"370202",name:"市南区",parent:"370200"},{value:"370203",name:"市北区",parent:"370200"},{value:"370205",name:"四方区",parent:"370200"},{value:"370211",name:"黄岛区",parent:"370200"},{value:"370212",name:"崂山区",parent:"370200"},{value:"370213",name:"李沧区",parent:"370200"},{value:"370214",name:"城阳区",parent:"370200"},{value:"370251",name:"开发区",parent:"370200"},{value:"370281",name:"胶州市",parent:"370200"},{value:"370282",name:"即墨市",parent:"370200"},{value:"370283",name:"平度市",parent:"370200"},{value:"370284",name:"胶南市",parent:"370200"},{value:"370285",name:"莱西市",parent:"370200"},{value:"370286",name:"其它区",parent:"370200"},{value:"370302",name:"淄川区",parent:"370300"},{value:"370303",name:"张店区",parent:"370300"},{value:"370304",name:"博山区",parent:"370300"},{value:"370305",name:"临淄区",parent:"370300"},{value:"370306",name:"周村区",parent:"370300"},{value:"370321",name:"桓台县",parent:"370300"},{value:"370322",name:"高青县",parent:"370300"},{value:"370323",name:"沂源县",parent:"370300"},{value:"370324",name:"其它区",parent:"370300"},{value:"370402",name:"市中区",parent:"370400"},{value:"370403",name:"薛城区",parent:"370400"},{value:"370404",name:"峄城区",parent:"370400"},{value:"370405",name:"台儿庄区",parent:"370400"},{value:"370406",name:"山亭区",parent:"370400"},{value:"370481",name:"滕州市",parent:"370400"},{value:"370482",name:"其它区",parent:"370400"},{value:"370502",name:"东营区",parent:"370500"},{value:"370503",name:"河口区",parent:"370500"},{value:"370521",name:"垦利县",parent:"370500"},{value:"370522",name:"利津县",parent:"370500"},{value:"370523",name:"广饶县",parent:"370500"},{value:"370589",name:"西城区",parent:"370500"},{value:"370590",name:"东城区",parent:"370500"},{value:"370591",name:"其它区",parent:"370500"},{value:"370602",name:"芝罘区",parent:"370600"},{value:"370611",name:"福山区",parent:"370600"},{value:"370612",name:"牟平区",parent:"370600"},{value:"370613",name:"莱山区",parent:"370600"},{value:"370634",name:"长岛县",parent:"370600"},{value:"370681",name:"龙口市",parent:"370600"},{value:"370682",name:"莱阳市",parent:"370600"},{value:"370683",name:"莱州市",parent:"370600"},{value:"370684",name:"蓬莱市",parent:"370600"},{value:"370685",name:"招远市",parent:"370600"},{value:"370686",name:"栖霞市",parent:"370600"},{value:"370687",name:"海阳市",parent:"370600"},{value:"370688",name:"其它区",parent:"370600"},{value:"370702",name:"潍城区",parent:"370700"},{value:"370703",name:"寒亭区",parent:"370700"},{value:"370704",name:"坊子区",parent:"370700"},{value:"370705",name:"奎文区",parent:"370700"},{value:"370724",name:"临朐县",parent:"370700"},{value:"370725",name:"昌乐县",parent:"370700"},{value:"370751",name:"开发区",parent:"370700"},{value:"370781",name:"青州市",parent:"370700"},{value:"370782",name:"诸城市",parent:"370700"},{value:"370783",name:"寿光市",parent:"370700"},{value:"370784",name:"安丘市",parent:"370700"},{value:"370785",name:"高密市",parent:"370700"},{value:"370786",name:"昌邑市",parent:"370700"},{value:"370787",name:"其它区",parent:"370700"},{value:"370802",name:"市中区",parent:"370800"},{value:"370811",name:"任城区",parent:"370800"},{value:"370826",name:"微山县",parent:"370800"},{value:"370827",name:"鱼台县",parent:"370800"},{value:"370828",name:"金乡县",parent:"370800"},{value:"370829",name:"嘉祥县",parent:"370800"},{value:"370830",name:"汶上县",parent:"370800"},{value:"370831",name:"泗水县",parent:"370800"},{value:"370832",name:"梁山县",parent:"370800"},{value:"370881",name:"曲阜市",parent:"370800"},{value:"370882",name:"兖州区",parent:"370800"},{value:"370883",name:"邹城市",parent:"370800"},{value:"370884",name:"其它区",parent:"370800"},{value:"370902",name:"泰山区",parent:"370900"},{value:"370903",name:"岱岳区",parent:"370900"},{value:"370921",name:"宁阳县",parent:"370900"},{value:"370923",name:"东平县",parent:"370900"},{value:"370982",name:"新泰市",parent:"370900"},{value:"370983",name:"肥城市",parent:"370900"},{value:"370984",name:"其它区",parent:"370900"},{value:"371002",name:"环翠区",parent:"371000"},{value:"371081",name:"文登区",parent:"371000"},{value:"371082",name:"荣成市",parent:"371000"},{value:"371083",name:"乳山市",parent:"371000"},{value:"371084",name:"其它区",parent:"371000"},{value:"371102",name:"东港区",parent:"371100"},{value:"371103",name:"岚山区",parent:"371100"},{value:"371121",name:"五莲县",parent:"371100"},{value:"371122",name:"莒县",parent:"371100"},{value:"371123",name:"其它区",parent:"371100"},{value:"371202",name:"莱城区",parent:"371200"},{value:"371203",name:"钢城区",parent:"371200"},{value:"371204",name:"其它区",parent:"371200"},{value:"371302",name:"兰山区",parent:"371300"},{value:"371311",name:"罗庄区",parent:"371300"},{value:"371312",name:"河东区",parent:"371300"},{value:"371321",name:"沂南县",parent:"371300"},{value:"371322",name:"郯城县",parent:"371300"},{value:"371323",name:"沂水县",parent:"371300"},{value:"371324",name:"兰陵县",parent:"371300"},{value:"371325",name:"费县",parent:"371300"},{value:"371326",name:"平邑县",parent:"371300"},{value:"371327",name:"莒南县",parent:"371300"},{value:"371328",name:"蒙阴县",parent:"371300"},{value:"371329",name:"临沭县",parent:"371300"},{value:"371330",name:"其它区",parent:"371300"},{value:"371402",name:"德城区",parent:"371400"},{value:"371421",name:"陵城区",parent:"371400"},{value:"371422",name:"宁津县",parent:"371400"},{value:"371423",name:"庆云县",parent:"371400"},{value:"371424",name:"临邑县",parent:"371400"},{value:"371425",name:"齐河县",parent:"371400"},{value:"371426",name:"平原县",parent:"371400"},{value:"371427",name:"夏津县",parent:"371400"},{value:"371428",name:"武城县",parent:"371400"},{value:"371451",name:"开发区",parent:"371400"},{value:"371481",name:"乐陵市",parent:"371400"},{value:"371482",name:"禹城市",parent:"371400"},{value:"371483",name:"其它区",parent:"371400"},{value:"371502",name:"东昌府区",parent:"371500"},{value:"371521",name:"阳谷县",parent:"371500"},{value:"371522",name:"莘县",parent:"371500"},{value:"371523",name:"茌平县",parent:"371500"},{value:"371524",name:"东阿县",parent:"371500"},{value:"371525",name:"冠县",parent:"371500"},{value:"371526",name:"高唐县",parent:"371500"},{value:"371581",name:"临清市",parent:"371500"},{value:"371582",name:"其它区",parent:"371500"},{value:"371602",name:"滨城区",parent:"371600"},{value:"371621",name:"惠民县",parent:"371600"},{value:"371622",name:"阳信县",parent:"371600"},{value:"371623",name:"无棣县",parent:"371600"},{value:"371624",name:"沾化区",parent:"371600"},{value:"371625",name:"博兴县",parent:"371600"},{value:"371626",name:"邹平县",parent:"371600"},{value:"371627",name:"其它区",parent:"371600"},{value:"371702",name:"牡丹区",parent:"371700"},{value:"371721",name:"曹县",parent:"371700"},{value:"371722",name:"单县",parent:"371700"},{value:"371723",name:"成武县",parent:"371700"},{value:"371724",name:"巨野县",parent:"371700"},{value:"371725",name:"郓城县",parent:"371700"},{value:"371726",name:"鄄城县",parent:"371700"},{value:"371727",name:"定陶县",parent:"371700"},{value:"371728",name:"东明县",parent:"371700"},{value:"371729",name:"其它区",parent:"371700"},{value:"410102",name:"中原区",parent:"410100"},{value:"410103",name:"二七区",parent:"410100"},{value:"410104",name:"管城回族区",parent:"410100"},{value:"410105",name:"金水区",parent:"410100"},{value:"410106",name:"上街区",parent:"410100"},{value:"410108",name:"惠济区",parent:"410100"},{value:"410122",name:"中牟县",parent:"410100"},{value:"410181",name:"巩义市",parent:"410100"},{value:"410182",name:"荥阳市",parent:"410100"},{value:"410183",name:"新密市",parent:"410100"},{value:"410184",name:"新郑市",parent:"410100"},{value:"410185",name:"登封市",parent:"410100"},{value:"410186",name:"郑东新区",parent:"410100"},{value:"410187",name:"高新区",parent:"410100"},{value:"410188",name:"其它区",parent:"410100"},{value:"410202",name:"龙亭区",parent:"410200"},{value:"410203",name:"顺河回族区",parent:"410200"},{value:"410204",name:"鼓楼区",parent:"410200"},{value:"410205",name:"禹王台区",parent:"410200"},{value:"410211",name:"金明区",parent:"410200"},{value:"410221",name:"杞县",parent:"410200"},{value:"410222",name:"通许县",parent:"410200"},{value:"410223",name:"尉氏县",parent:"410200"},{value:"410224",name:"祥符区",parent:"410200"},{value:"410225",name:"兰考县",parent:"410200"},{value:"410226",name:"其它区",parent:"410200"},{value:"410302",name:"老城区",parent:"410300"},{value:"410303",name:"西工区",parent:"410300"},{value:"410304",name:"瀍河回族区",parent:"410300"},{value:"410305",name:"涧西区",parent:"410300"},{value:"410306",name:"吉利区",parent:"410300"},{value:"410307",name:"洛龙区",parent:"410300"},{value:"410322",name:"孟津县",parent:"410300"},{value:"410323",name:"新安县",parent:"410300"},{value:"410324",name:"栾川县",parent:"410300"},{value:"410325",name:"嵩县",parent:"410300"},{value:"410326",name:"汝阳县",parent:"410300"},{value:"410327",name:"宜阳县",parent:"410300"},{value:"410328",name:"洛宁县",parent:"410300"},{value:"410329",name:"伊川县",parent:"410300"},{value:"410381",name:"偃师市",parent:"410300"},{value:"410402",name:"新华区",parent:"410400"},{value:"410403",name:"卫东区",parent:"410400"},{value:"410404",name:"石龙区",parent:"410400"},{value:"410411",name:"湛河区",parent:"410400"},{value:"410421",name:"宝丰县",parent:"410400"},{value:"410422",name:"叶县",parent:"410400"},{value:"410423",name:"鲁山县",parent:"410400"},{value:"410425",name:"郏县",parent:"410400"},{value:"410481",name:"舞钢市",parent:"410400"},{value:"410482",name:"汝州市",parent:"410400"},{value:"410483",name:"其它区",parent:"410400"},{value:"410502",name:"文峰区",parent:"410500"},{value:"410503",name:"北关区",parent:"410500"},{value:"410505",name:"殷都区",parent:"410500"},{value:"410506",name:"龙安区",parent:"410500"},{value:"410522",name:"安阳县",parent:"410500"},{value:"410523",name:"汤阴县",parent:"410500"},{value:"410526",name:"滑县",parent:"410500"},{value:"410527",name:"内黄县",parent:"410500"},{value:"410581",name:"林州市",parent:"410500"},{value:"410582",name:"其它区",parent:"410500"},{value:"410602",name:"鹤山区",parent:"410600"},{value:"410603",name:"山城区",parent:"410600"},{value:"410611",name:"淇滨区",parent:"410600"},{value:"410621",name:"浚县",parent:"410600"},{value:"410622",name:"淇县",parent:"410600"},{value:"410623",name:"其它区",parent:"410600"},{value:"410702",name:"红旗区",parent:"410700"},{value:"410703",name:"卫滨区",parent:"410700"},{value:"410704",name:"凤泉区",parent:"410700"},{value:"410711",name:"牧野区",parent:"410700"},{value:"410721",name:"新乡县",parent:"410700"},{value:"410724",name:"获嘉县",parent:"410700"},{value:"410725",name:"原阳县",parent:"410700"},{value:"410726",name:"延津县",parent:"410700"},{value:"410727",name:"封丘县",parent:"410700"},{value:"410728",name:"长垣县",parent:"410700"},{value:"410781",name:"卫辉市",parent:"410700"},{value:"410782",name:"辉县市",parent:"410700"},{value:"410783",name:"其它区",parent:"410700"},{value:"410802",name:"解放区",parent:"410800"},{value:"410803",name:"中站区",parent:"410800"},{value:"410804",name:"马村区",parent:"410800"},{value:"410811",name:"山阳区",parent:"410800"},{value:"410821",name:"修武县",parent:"410800"},{value:"410822",name:"博爱县",parent:"410800"},{value:"410823",name:"武陟县",parent:"410800"},{value:"410825",name:"温县",parent:"410800"},{value:"410881",name:"济源市",parent:"410000"},{value:"410882",name:"沁阳市",parent:"410800"},{value:"410883",name:"孟州市",parent:"410800"},{value:"410884",name:"其它区",parent:"410800"},{value:"410902",name:"华龙区",parent:"410900"},{value:"410922",name:"清丰县",parent:"410900"},{value:"410923",name:"南乐县",parent:"410900"},{value:"410926",name:"范县",parent:"410900"},{value:"410927",name:"台前县",parent:"410900"},{value:"410928",name:"濮阳县",parent:"410900"},{value:"410929",name:"其它区",parent:"410900"},{value:"411002",name:"魏都区",parent:"411000"},{value:"411023",name:"许昌县",parent:"411000"},{value:"411024",name:"鄢陵县",parent:"411000"},{value:"411025",name:"襄城县",parent:"411000"},{value:"411081",name:"禹州市",parent:"411000"},{value:"411082",name:"长葛市",parent:"411000"},{value:"411083",name:"其它区",parent:"411000"},{value:"411102",name:"源汇区",parent:"411100"},{value:"411103",name:"郾城区",parent:"411100"},{value:"411104",name:"召陵区",parent:"411100"},{value:"411121",name:"舞阳县",parent:"411100"},{value:"411122",name:"临颍县",parent:"411100"},{value:"411123",name:"其它区",parent:"411100"},{value:"411202",name:"湖滨区",parent:"411200"},{value:"411221",name:"渑池县",parent:"411200"},{value:"411222",name:"陕州区",parent:"411200"},{value:"411224",name:"卢氏县",parent:"411200"},{value:"411281",name:"义马市",parent:"411200"},{value:"411282",name:"灵宝市",parent:"411200"},{value:"411283",name:"其它区",parent:"411200"},{value:"411302",name:"宛城区",parent:"411300"},{value:"411303",name:"卧龙区",parent:"411300"},{value:"411321",name:"南召县",parent:"411300"},{value:"411322",name:"方城县",parent:"411300"},{value:"411323",name:"西峡县",parent:"411300"},{value:"411324",name:"镇平县",parent:"411300"},{value:"411325",name:"内乡县",parent:"411300"},{value:"411326",name:"淅川县",parent:"411300"},{value:"411327",name:"社旗县",parent:"411300"},{value:"411328",name:"唐河县",parent:"411300"},{value:"411329",name:"新野县",parent:"411300"},{value:"411330",name:"桐柏县",parent:"411300"},{value:"411381",name:"邓州市",parent:"411300"},{value:"411382",name:"其它区",parent:"411300"},{value:"411402",name:"梁园区",parent:"411400"},{value:"411403",name:"睢阳区",parent:"411400"},{value:"411421",name:"民权县",parent:"411400"},{value:"411422",name:"睢县",parent:"411400"},{value:"411423",name:"宁陵县",parent:"411400"},{value:"411424",name:"柘城县",parent:"411400"},{value:"411425",name:"虞城县",parent:"411400"},{value:"411426",name:"夏邑县",parent:"411400"},{value:"411481",name:"永城市",parent:"411400"},{value:"411482",name:"其它区",parent:"411400"},{value:"411502",name:"浉河区",parent:"411500"},{value:"411503",name:"平桥区",parent:"411500"},{value:"411521",name:"罗山县",parent:"411500"},{value:"411522",name:"光山县",parent:"411500"},{value:"411523",name:"新县",parent:"411500"},{value:"411524",name:"商城县",parent:"411500"},{value:"411525",name:"固始县",parent:"411500"},{value:"411526",name:"潢川县",parent:"411500"},{value:"411527",name:"淮滨县",parent:"411500"},{value:"411528",name:"息县",parent:"411500"},{value:"411529",name:"其它区",parent:"411500"},{value:"411602",name:"川汇区",parent:"411600"},{value:"411621",name:"扶沟县",parent:"411600"},{value:"411622",name:"西华县",parent:"411600"},{value:"411623",name:"商水县",parent:"411600"},{value:"411624",name:"沈丘县",parent:"411600"},{value:"411625",name:"郸城县",parent:"411600"},{value:"411626",name:"淮阳县",parent:"411600"},{value:"411627",name:"太康县",parent:"411600"},{value:"411628",name:"鹿邑县",parent:"411600"},{value:"411681",name:"项城市",parent:"411600"},{value:"411682",name:"其它区",parent:"411600"},{value:"411702",name:"驿城区",parent:"411700"},{value:"411721",name:"西平县",parent:"411700"},{value:"411722",name:"上蔡县",parent:"411700"},{value:"411723",name:"平舆县",parent:"411700"},{value:"411724",name:"正阳县",parent:"411700"},{value:"411725",name:"确山县",parent:"411700"},{value:"411726",name:"泌阳县",parent:"411700"},{value:"411727",name:"汝南县",parent:"411700"},{value:"411728",name:"遂平县",parent:"411700"},{value:"411729",name:"新蔡县",parent:"411700"},{value:"411730",name:"其它区",parent:"411700"},{value:"420102",name:"江岸区",parent:"420100"},{value:"420103",name:"江汉区",parent:"420100"},{value:"420104",name:"硚口区",parent:"420100"},{value:"420105",name:"汉阳区",parent:"420100"},{value:"420106",name:"武昌区",parent:"420100"},{value:"420107",name:"青山区",parent:"420100"},{value:"420111",name:"洪山区",parent:"420100"},{value:"420112",name:"东西湖区",parent:"420100"},{value:"420113",name:"汉南区",parent:"420100"},{value:"420114",name:"蔡甸区",parent:"420100"},{value:"420115",name:"江夏区",parent:"420100"},{value:"420116",name:"黄陂区",parent:"420100"},{value:"420117",name:"新洲区",parent:"420100"},{value:"420118",name:"其它区",parent:"420100"},{value:"420202",name:"黄石港区",parent:"420200"},{value:"420203",name:"西塞山区",parent:"420200"},{value:"420204",name:"下陆区",parent:"420200"},{value:"420205",name:"铁山区",parent:"420200"},{value:"420222",name:"阳新县",parent:"420200"},{value:"420281",name:"大冶市",parent:"420200"},{value:"420282",name:"其它区",parent:"420200"},{value:"420302",name:"茅箭区",parent:"420300"},{value:"420303",name:"张湾区",parent:"420300"},{value:"420321",name:"郧阳区",parent:"420300"},{value:"420322",name:"郧西县",parent:"420300"},{value:"420323",name:"竹山县",parent:"420300"},{value:"420324",name:"竹溪县",parent:"420300"},{value:"420325",name:"房县",parent:"420300"},{value:"420381",name:"丹江口市",parent:"420300"},{value:"420382",name:"城区",parent:"420300"},{value:"420383",name:"其它区",parent:"420300"},{value:"420502",name:"西陵区",parent:"420500"},{value:"420503",name:"伍家岗区",parent:"420500"},{value:"420504",name:"点军区",parent:"420500"},{value:"420505",name:"猇亭区",parent:"420500"},{value:"420506",name:"夷陵区",parent:"420500"},{value:"420525",name:"远安县",parent:"420500"},{value:"420526",name:"兴山县",parent:"420500"},{value:"420527",name:"秭归县",parent:"420500"},{value:"420528",name:"长阳土家族自治县",parent:"420500"},{value:"420529",name:"五峰土家族自治县",parent:"420500"},{value:"420551",name:"葛洲坝区",parent:"420500"},{value:"420552",name:"开发区",parent:"420500"},{value:"420581",name:"宜都市",parent:"420500"},{value:"420582",name:"当阳市",parent:"420500"},{value:"420583",name:"枝江市",parent:"420500"},{value:"420584",name:"其它区",parent:"420500"},{value:"420602",name:"襄城区",parent:"420600"},{value:"420606",name:"樊城区",parent:"420600"},{value:"420607",name:"襄州区",parent:"420600"},{value:"420624",name:"南漳县",parent:"420600"},{value:"420625",name:"谷城县",parent:"420600"},{value:"420626",name:"保康县",parent:"420600"},{value:"420682",name:"老河口市",parent:"420600"},{value:"420683",name:"枣阳市",parent:"420600"},{value:"420684",name:"宜城市",parent:"420600"},{value:"420685",name:"其它区",parent:"420600"},{value:"420702",name:"梁子湖区",parent:"420700"},{value:"420703",name:"华容区",parent:"420700"},{value:"420704",name:"鄂城区",parent:"420700"},{value:"420705",name:"其它区",parent:"420700"},{value:"420802",name:"东宝区",parent:"420800"},{value:"420804",name:"掇刀区",parent:"420800"},{value:"420821",name:"京山县",parent:"420800"},{value:"420822",name:"沙洋县",parent:"420800"},{value:"420881",name:"钟祥市",parent:"420800"},{value:"420882",name:"其它区",parent:"420800"},{value:"420902",name:"孝南区",parent:"420900"},{value:"420921",name:"孝昌县",parent:"420900"},{value:"420922",name:"大悟县",parent:"420900"},{value:"420923",name:"云梦县",parent:"420900"},{value:"420981",name:"应城市",parent:"420900"},{value:"420982",name:"安陆市",parent:"420900"},{value:"420984",name:"汉川市",parent:"420900"},{value:"420985",name:"其它区",parent:"420900"},{value:"421002",name:"沙市区",parent:"421000"},{value:"421003",name:"荆州区",parent:"421000"},{value:"421022",name:"公安县",parent:"421000"},{value:"421023",name:"监利县",parent:"421000"},{value:"421024",name:"江陵县",parent:"421000"},{value:"421081",name:"石首市",parent:"421000"},{value:"421083",name:"洪湖市",parent:"421000"},{value:"421087",name:"松滋市",parent:"421000"},{value:"421088",name:"其它区",parent:"421000"},{value:"421102",name:"黄州区",parent:"421100"},{value:"421121",name:"团风县",parent:"421100"},{value:"421122",name:"红安县",parent:"421100"},{value:"421123",name:"罗田县",parent:"421100"},{value:"421124",name:"英山县",parent:"421100"},{value:"421125",name:"浠水县",parent:"421100"},{value:"421126",name:"蕲春县",parent:"421100"},{value:"421127",name:"黄梅县",parent:"421100"},{value:"421181",name:"麻城市",parent:"421100"},{value:"421182",name:"武穴市",parent:"421100"},{value:"421183",name:"其它区",parent:"421100"},{value:"421202",name:"咸安区",parent:"421200"},{value:"421221",name:"嘉鱼县",parent:"421200"},{value:"421222",name:"通城县",parent:"421200"},{value:"421223",name:"崇阳县",parent:"421200"},{value:"421224",name:"通山县",parent:"421200"},{value:"421281",name:"赤壁市",parent:"421200"},{value:"421282",name:"温泉城区",parent:"421200"},{value:"421283",name:"其它区",parent:"421200"},{value:"421302",name:"曾都区",parent:"421300"},{value:"421321",name:"随县",parent:"421300"},{value:"421381",name:"广水市",parent:"421300"},{value:"421382",name:"其它区",parent:"421300"},{value:"422801",name:"恩施市",parent:"422800"},{value:"422802",name:"利川市",parent:"422800"},{value:"422822",name:"建始县",parent:"422800"},{value:"422823",name:"巴东县",parent:"422800"},{value:"422825",name:"宣恩县",parent:"422800"},{value:"422826",name:"咸丰县",parent:"422800"},{value:"422827",name:"来凤县",parent:"422800"},{value:"422828",name:"鹤峰县",parent:"422800"},{value:"422829",name:"其它区",parent:"422800"},{value:"429004",name:"仙桃市",parent:"420000"},{value:"429005",name:"潜江市",parent:"420000"},{value:"429006",name:"天门市",parent:"420000"},{value:"429021",name:"神农架林区",parent:"420000"},{value:"430102",name:"芙蓉区",parent:"430100"},{value:"430103",name:"天心区",parent:"430100"},{value:"430104",name:"岳麓区",parent:"430100"},{value:"430105",name:"开福区",parent:"430100"},{value:"430111",name:"雨花区",parent:"430100"},{value:"430121",name:"长沙县",parent:"430100"},{value:"430122",name:"望城区",parent:"430100"},{value:"430124",name:"宁乡县",parent:"430100"},{value:"430181",name:"浏阳市",parent:"430100"},{value:"430182",name:"其它区",parent:"430100"},{value:"430202",name:"荷塘区",parent:"430200"},{value:"430203",name:"芦淞区",parent:"430200"},{value:"430204",name:"石峰区",parent:"430200"},{value:"430211",name:"天元区",parent:"430200"},{value:"430221",name:"株洲县",parent:"430200"},{value:"430223",name:"攸县",parent:"430200"},{value:"430224",name:"茶陵县",parent:"430200"},{value:"430225",name:"炎陵县",parent:"430200"},{value:"430281",name:"醴陵市",parent:"430200"},{value:"430282",name:"其它区",parent:"430200"},{value:"430302",name:"雨湖区",parent:"430300"},{value:"430304",name:"岳塘区",parent:"430300"},{value:"430321",name:"湘潭县",parent:"430300"},{value:"430381",name:"湘乡市",parent:"430300"},{value:"430382",name:"韶山市",parent:"430300"},{value:"430383",name:"其它区",parent:"430300"},{value:"430405",name:"珠晖区",parent:"430400"},{value:"430406",name:"雁峰区",parent:"430400"},{value:"430407",name:"石鼓区",parent:"430400"},{value:"430408",name:"蒸湘区",parent:"430400"},{value:"430412",name:"南岳区",parent:"430400"},{value:"430421",name:"衡阳县",parent:"430400"},{value:"430422",name:"衡南县",parent:"430400"},{value:"430423",name:"衡山县",parent:"430400"},{value:"430424",name:"衡东县",parent:"430400"},{value:"430426",name:"祁东县",parent:"430400"},{value:"430481",name:"耒阳市",parent:"430400"},{value:"430482",name:"常宁市",parent:"430400"},{value:"430483",name:"其它区",parent:"430400"},{value:"430502",name:"双清区",parent:"430500"},{value:"430503",name:"大祥区",parent:"430500"},{value:"430511",name:"北塔区",parent:"430500"},{value:"430521",name:"邵东县",parent:"430500"},{value:"430522",name:"新邵县",parent:"430500"},{value:"430523",name:"邵阳县",parent:"430500"},{value:"430524",name:"隆回县",parent:"430500"},{value:"430525",name:"洞口县",parent:"430500"},{value:"430527",name:"绥宁县",parent:"430500"},{value:"430528",name:"新宁县",parent:"430500"},{value:"430529",name:"城步苗族自治县",parent:"430500"},{value:"430581",name:"武冈市",parent:"430500"},{value:"430582",name:"其它区",parent:"430500"},{value:"430602",name:"岳阳楼区",parent:"430600"},{value:"430603",name:"云溪区",parent:"430600"},{value:"430611",name:"君山区",parent:"430600"},{value:"430621",name:"岳阳县",parent:"430600"},{value:"430623",name:"华容县",parent:"430600"},{value:"430624",name:"湘阴县",parent:"430600"},{value:"430626",name:"平江县",parent:"430600"},{value:"430681",name:"汨罗市",parent:"430600"},{value:"430682",name:"临湘市",parent:"430600"},{value:"430683",name:"其它区",parent:"430600"},{value:"430702",name:"武陵区",parent:"430700"},{value:"430703",name:"鼎城区",parent:"430700"},{value:"430721",name:"安乡县",parent:"430700"},{value:"430722",name:"汉寿县",parent:"430700"},{value:"430723",name:"澧县",parent:"430700"},{value:"430724",name:"临澧县",parent:"430700"},{value:"430725",name:"桃源县",parent:"430700"},{value:"430726",name:"石门县",parent:"430700"},{value:"430781",name:"津市市",parent:"430700"},{value:"430782",name:"其它区",parent:"430700"},{value:"430802",name:"永定区",parent:"430800"},{value:"430811",name:"武陵源区",parent:"430800"},{value:"430821",name:"慈利县",parent:"430800"},{value:"430822",name:"桑植县",parent:"430800"},{value:"430823",name:"其它区",parent:"430800"},{value:"430902",name:"资阳区",parent:"430900"},{value:"430903",name:"赫山区",parent:"430900"},{value:"430921",name:"南县",parent:"430900"},{value:"430922",name:"桃江县",parent:"430900"},{value:"430923",name:"安化县",parent:"430900"},{value:"430981",name:"沅江市",parent:"430900"},{value:"430982",name:"其它区",parent:"430900"},{value:"431002",name:"北湖区",parent:"431000"},{value:"431003",name:"苏仙区",parent:"431000"},{value:"431021",name:"桂阳县",parent:"431000"},{value:"431022",name:"宜章县",parent:"431000"},{value:"431023",name:"永兴县",parent:"431000"},{value:"431024",name:"嘉禾县",parent:"431000"},{value:"431025",name:"临武县",parent:"431000"},{value:"431026",name:"汝城县",parent:"431000"},{value:"431027",name:"桂东县",parent:"431000"},{value:"431028",name:"安仁县",parent:"431000"},{value:"431081",name:"资兴市",parent:"431000"},{value:"431082",name:"其它区",parent:"431000"},{value:"431102",name:"零陵区",parent:"431100"},{value:"431103",name:"冷水滩区",parent:"431100"},{value:"431121",name:"祁阳县",parent:"431100"},{value:"431122",name:"东安县",parent:"431100"},{value:"431123",name:"双牌县",parent:"431100"},{value:"431124",name:"道县",parent:"431100"},{value:"431125",name:"江永县",parent:"431100"},{value:"431126",name:"宁远县",parent:"431100"},{value:"431127",name:"蓝山县",parent:"431100"},{value:"431128",name:"新田县",parent:"431100"},{value:"431129",name:"江华瑶族自治县",parent:"431100"},{value:"431130",name:"其它区",parent:"431100"},{value:"431202",name:"鹤城区",parent:"431200"},{value:"431221",name:"中方县",parent:"431200"},{value:"431222",name:"沅陵县",parent:"431200"},{value:"431223",name:"辰溪县",parent:"431200"},{value:"431224",name:"溆浦县",parent:"431200"},{value:"431225",name:"会同县",parent:"431200"},{value:"431226",name:"麻阳苗族自治县",parent:"431200"},{value:"431227",name:"新晃侗族自治县",parent:"431200"},{value:"431228",name:"芷江侗族自治县",parent:"431200"},{value:"431229",name:"靖州苗族侗族自治县",parent:"431200"},{value:"431230",name:"通道侗族自治县",parent:"431200"},{value:"431281",name:"洪江市",parent:"431200"},{value:"431282",name:"其它区",parent:"431200"},{value:"431302",name:"娄星区",parent:"431300"},{value:"431321",name:"双峰县",parent:"431300"},{value:"431322",name:"新化县",parent:"431300"},{value:"431381",name:"冷水江市",parent:"431300"},{value:"431382",name:"涟源市",parent:"431300"},{value:"431383",name:"其它区",parent:"431300"},{value:"433101",name:"吉首市",parent:"433100"},{value:"433122",name:"泸溪县",parent:"433100"},{value:"433123",name:"凤凰县",parent:"433100"},{value:"433124",name:"花垣县",parent:"433100"},{value:"433125",name:"保靖县",parent:"433100"},{value:"433126",name:"古丈县",parent:"433100"},{value:"433127",name:"永顺县",parent:"433100"},{value:"433130",name:"龙山县",parent:"433100"},{value:"433131",name:"其它区",parent:"433100"},{value:"440103",name:"荔湾区",parent:"440100"},{value:"440104",name:"越秀区",parent:"440100"},{value:"440105",name:"海珠区",parent:"440100"},{value:"440106",name:"天河区",parent:"440100"},{value:"440111",name:"白云区",parent:"440100"},{value:"440112",name:"黄埔区",parent:"440100"},{value:"440113",name:"番禺区",parent:"440100"},{value:"440114",name:"花都区",parent:"440100"},{value:"440115",name:"南沙区",parent:"440100"},{value:"440116",name:"萝岗区",parent:"440100"},{value:"440183",name:"增城区",parent:"440100"},{value:"440184",name:"从化区",parent:"440100"},{value:"440188",name:"东山区",parent:"440100"},{value:"440189",name:"其它区",parent:"440100"},{value:"440203",name:"武江区",parent:"440200"},{value:"440204",name:"浈江区",parent:"440200"},{value:"440205",name:"曲江区",parent:"440200"},{value:"440222",name:"始兴县",parent:"440200"},{value:"440224",name:"仁化县",parent:"440200"},{value:"440229",name:"翁源县",parent:"440200"},{value:"440232",name:"乳源瑶族自治县",parent:"440200"},{value:"440233",name:"新丰县",parent:"440200"},{value:"440281",name:"乐昌市",parent:"440200"},{value:"440282",name:"南雄市",parent:"440200"},{value:"440283",name:"其它区",parent:"440200"},{value:"440303",name:"罗湖区",parent:"440300"},{value:"440304",name:"福田区",parent:"440300"},{value:"440305",name:"南山区",parent:"440300"},{value:"440306",name:"宝安区",parent:"440300"},{value:"440307",name:"龙岗区",parent:"440300"},{value:"440308",name:"盐田区",parent:"440300"},{value:"440309",name:"其它区",parent:"440300"},{value:"440320",name:"光明新区",parent:"440300"},{value:"440321",name:"坪山新区",parent:"440300"},{value:"440322",name:"大鹏新区",parent:"440300"},{value:"440323",name:"龙华新区",parent:"440300"},{value:"440402",name:"香洲区",parent:"440400"},{value:"440403",name:"斗门区",parent:"440400"},{value:"440404",name:"金湾区",parent:"440400"},{value:"440486",name:"金唐区",parent:"440400"},{value:"440487",name:"南湾区",parent:"440400"},{value:"440488",name:"其它区",parent:"440400"},{value:"440507",name:"龙湖区",parent:"440500"},{value:"440511",name:"金平区",parent:"440500"},{value:"440512",name:"濠江区",parent:"440500"},{value:"440513",name:"潮阳区",parent:"440500"},{value:"440514",name:"潮南区",parent:"440500"},{value:"440515",name:"澄海区",parent:"440500"},{value:"440523",name:"南澳县",parent:"440500"},{value:"440524",name:"其它区",parent:"440500"},{value:"440604",name:"禅城区",parent:"440600"},{value:"440605",name:"南海区",parent:"440600"},{value:"440606",name:"顺德区",parent:"440600"},{value:"440607",name:"三水区",parent:"440600"},{value:"440608",name:"高明区",parent:"440600"},{value:"440609",name:"其它区",parent:"440600"},{value:"440703",name:"蓬江区",parent:"440700"},{value:"440704",name:"江海区",parent:"440700"},{value:"440705",name:"新会区",parent:"440700"},{value:"440781",name:"台山市",parent:"440700"},{value:"440783",name:"开平市",parent:"440700"},{value:"440784",name:"鹤山市",parent:"440700"},{value:"440785",name:"恩平市",parent:"440700"},{value:"440786",name:"其它区",parent:"440700"},{value:"440802",name:"赤坎区",parent:"440800"},{value:"440803",name:"霞山区",parent:"440800"},{value:"440804",name:"坡头区",parent:"440800"},{value:"440811",name:"麻章区",parent:"440800"},{value:"440823",name:"遂溪县",parent:"440800"},{value:"440825",name:"徐闻县",parent:"440800"},{value:"440881",name:"廉江市",parent:"440800"},{value:"440882",name:"雷州市",parent:"440800"},{value:"440883",name:"吴川市",parent:"440800"},{value:"440884",name:"其它区",parent:"440800"},{value:"440902",name:"茂南区",parent:"440900"},{value:"440903",name:"电白区",parent:"440900"},{value:"440923",name:"电白县",parent:"440900"},{value:"440981",name:"高州市",parent:"440900"},{value:"440982",name:"化州市",parent:"440900"},{value:"440983",name:"信宜市",parent:"440900"},{value:"440984",name:"其它区",parent:"440900"},{value:"441202",name:"端州区",parent:"441200"},{value:"441203",name:"鼎湖区",parent:"441200"},{value:"441223",name:"广宁县",parent:"441200"},{value:"441224",name:"怀集县",parent:"441200"},{value:"441225",name:"封开县",parent:"441200"},{value:"441226",name:"德庆县",parent:"441200"},{value:"441283",name:"高要市",parent:"441200"},{value:"441284",name:"四会市",parent:"441200"},{value:"441285",name:"其它区",parent:"441200"},{value:"441302",name:"惠城区",parent:"441300"},{value:"441303",name:"惠阳区",parent:"441300"},{value:"441322",name:"博罗县",parent:"441300"},{value:"441323",name:"惠东县",parent:"441300"},{value:"441324",name:"龙门县",parent:"441300"},{value:"441325",name:"其它区",parent:"441300"},{value:"441402",name:"梅江区",parent:"441400"},{value:"441421",name:"梅县区",parent:"441400"},{value:"441422",name:"大埔县",parent:"441400"},{value:"441423",name:"丰顺县",parent:"441400"},{value:"441424",name:"五华县",parent:"441400"},{value:"441426",name:"平远县",parent:"441400"},{value:"441427",name:"蕉岭县",parent:"441400"},{value:"441481",name:"兴宁市",parent:"441400"},{value:"441482",name:"其它区",parent:"441400"},{value:"441502",name:"城区",parent:"441500"},{value:"441521",name:"海丰县",parent:"441500"},{value:"441523",name:"陆河县",parent:"441500"},{value:"441581",name:"陆丰市",parent:"441500"},{value:"441582",name:"其它区",parent:"441500"},{value:"441602",name:"源城区",parent:"441600"},{value:"441621",name:"紫金县",parent:"441600"},{value:"441622",name:"龙川县",parent:"441600"},{value:"441623",name:"连平县",parent:"441600"},{value:"441624",name:"和平县",parent:"441600"},{value:"441625",name:"东源县",parent:"441600"},{value:"441626",name:"其它区",parent:"441600"},{value:"441702",name:"江城区",parent:"441700"},{value:"441721",name:"阳西县",parent:"441700"},{value:"441723",name:"阳东区",parent:"441700"},{value:"441781",name:"阳春市",parent:"441700"},{value:"441782",name:"其它区",parent:"441700"},{value:"441802",name:"清城区",parent:"441800"},{value:"441821",name:"佛冈县",parent:"441800"},{value:"441823",name:"阳山县",parent:"441800"},{value:"441825",name:"连山壮族瑶族自治县",parent:"441800"},{value:"441826",name:"连南瑶族自治县",parent:"441800"},{value:"441827",name:"清新区",parent:"441800"},{value:"441881",name:"英德市",parent:"441800"},{value:"441882",name:"连州市",parent:"441800"},{value:"441883",name:"其它区",parent:"441800"},{value:"445102",name:"湘桥区",parent:"445100"},{value:"445121",name:"潮安区",parent:"445100"},{value:"445122",name:"饶平县",parent:"445100"},{value:"445185",name:"枫溪区",parent:"445100"},{value:"445186",name:"其它区",parent:"445100"},{value:"445202",name:"榕城区",parent:"445200"},{value:"445221",name:"揭东区",parent:"445200"},{value:"445222",name:"揭西县",parent:"445200"},{value:"445224",name:"惠来县",parent:"445200"},{value:"445281",name:"普宁市",parent:"445200"},{value:"445284",name:"东山区",parent:"445200"},{value:"445285",name:"其它区",parent:"445200"},{value:"445302",name:"云城区",parent:"445300"},{value:"445321",name:"新兴县",parent:"445300"},{value:"445322",name:"郁南县",parent:"445300"},{value:"445323",name:"云安区",parent:"445300"},{value:"445381",name:"罗定市",parent:"445300"},{value:"445382",name:"其它区",parent:"445300"},{value:"450102",name:"兴宁区",parent:"450100"},{value:"450103",name:"青秀区",parent:"450100"},{value:"450105",name:"江南区",parent:"450100"},{value:"450107",name:"西乡塘区",parent:"450100"},{value:"450108",name:"良庆区",parent:"450100"},{value:"450109",name:"邕宁区",parent:"450100"},{value:"450122",name:"武鸣区",parent:"450100"},{value:"450123",name:"隆安县",parent:"450100"},{value:"450124",name:"马山县",parent:"450100"},{value:"450125",name:"上林县",parent:"450100"},{value:"450126",name:"宾阳县",parent:"450100"},{value:"450127",name:"横县",parent:"450100"},{value:"450128",name:"其它区",parent:"450100"},{value:"450202",name:"城中区",parent:"450200"},{value:"450203",name:"鱼峰区",parent:"450200"},{value:"450204",name:"柳南区",parent:"450200"},{value:"450205",name:"柳北区",parent:"450200"},{value:"450221",name:"柳江县",parent:"450200"},{value:"450222",name:"柳城县",parent:"450200"},{value:"450223",name:"鹿寨县",parent:"450200"},{value:"450224",name:"融安县",parent:"450200"},{value:"450225",name:"融水苗族自治县",parent:"450200"},{value:"450226",name:"三江侗族自治县",parent:"450200"},{value:"450227",name:"其它区",parent:"450200"},{value:"450302",name:"秀峰区",parent:"450300"},{value:"450303",name:"叠彩区",parent:"450300"},{value:"450304",name:"象山区",parent:"450300"},{value:"450305",name:"七星区",parent:"450300"},{value:"450311",name:"雁山区",parent:"450300"},{value:"450321",name:"阳朔县",parent:"450300"},{value:"450322",name:"临桂区",parent:"450300"},{value:"450323",name:"灵川县",parent:"450300"},{value:"450324",name:"全州县",parent:"450300"},{value:"450325",name:"兴安县",parent:"450300"},{value:"450326",name:"永福县",parent:"450300"},{value:"450327",name:"灌阳县",parent:"450300"},{value:"450328",name:"龙胜各族自治县",parent:"450300"},{value:"450329",name:"资源县",parent:"450300"},{value:"450330",name:"平乐县",parent:"450300"},{value:"450331",name:"荔浦县",parent:"450300"},{value:"450332",name:"恭城瑶族自治县",parent:"450300"},{value:"450333",name:"其它区",parent:"450300"},{value:"450403",name:"万秀区",parent:"450400"},{value:"450404",name:"蝶山区",parent:"450400"},{value:"450405",name:"长洲区",parent:"450400"},{value:"450406",name:"龙圩区",parent:"450400"},{value:"450421",name:"苍梧县",parent:"450400"},{value:"450422",name:"藤县",parent:"450400"},{value:"450423",name:"蒙山县",parent:"450400"},{value:"450481",name:"岑溪市",parent:"450400"},{value:"450482",name:"其它区",parent:"450400"},{value:"450502",name:"海城区",parent:"450500"},{value:"450503",name:"银海区",parent:"450500"},{value:"450512",name:"铁山港区",parent:"450500"},{value:"450521",name:"合浦县",parent:"450500"},{value:"450522",name:"其它区",parent:"450500"},{value:"450602",name:"港口区",parent:"450600"},{value:"450603",name:"防城区",parent:"450600"},{value:"450621",name:"上思县",parent:"450600"},{value:"450681",name:"东兴市",parent:"450600"},{value:"450682",name:"其它区",parent:"450600"},{value:"450702",name:"钦南区",parent:"450700"},{value:"450703",name:"钦北区",parent:"450700"},{value:"450721",name:"灵山县",parent:"450700"},{value:"450722",name:"浦北县",parent:"450700"},{value:"450723",name:"其它区",parent:"450700"},{value:"450802",name:"港北区",parent:"450800"},{value:"450803",name:"港南区",parent:"450800"},{value:"450804",name:"覃塘区",parent:"450800"},{value:"450821",name:"平南县",parent:"450800"},{value:"450881",name:"桂平市",parent:"450800"},{value:"450882",name:"其它区",parent:"450800"},{value:"450902",name:"玉州区",parent:"450900"},{value:"450903",name:"福绵区",parent:"450900"},{value:"450921",name:"容县",parent:"450900"},{value:"450922",name:"陆川县",parent:"450900"},{value:"450923",name:"博白县",parent:"450900"},{value:"450924",name:"兴业县",parent:"450900"},{value:"450981",name:"北流市",parent:"450900"},{value:"450982",name:"其它区",parent:"450900"},{value:"451002",name:"右江区",parent:"451000"},{value:"451021",name:"田阳县",parent:"451000"},{value:"451022",name:"田东县",parent:"451000"},{value:"451023",name:"平果县",parent:"451000"},{value:"451024",name:"德保县",parent:"451000"},{value:"451025",name:"靖西县",parent:"451000"},{value:"451026",name:"那坡县",parent:"451000"},{value:"451027",name:"凌云县",parent:"451000"},{value:"451028",name:"乐业县",parent:"451000"},{value:"451029",name:"田林县",parent:"451000"},{value:"451030",name:"西林县",parent:"451000"},{value:"451031",name:"隆林各族自治县",parent:"451000"},{value:"451032",name:"其它区",parent:"451000"},{value:"451102",name:"八步区",parent:"451100"},{value:"451119",name:"平桂管理区",parent:"451100"},{value:"451121",name:"昭平县",parent:"451100"},{value:"451122",name:"钟山县",parent:"451100"},{value:"451123",name:"富川瑶族自治县",parent:"451100"},{value:"451124",name:"其它区",parent:"451100"},{value:"451202",name:"金城江区",parent:"451200"},{value:"451221",name:"南丹县",parent:"451200"},{value:"451222",name:"天峨县",parent:"451200"},{value:"451223",name:"凤山县",parent:"451200"},{value:"451224",name:"东兰县",parent:"451200"},{value:"451225",name:"罗城仫佬族自治县",parent:"451200"},{value:"451226",name:"环江毛南族自治县",parent:"451200"},{value:"451227",name:"巴马瑶族自治县",parent:"451200"},{value:"451228",name:"都安瑶族自治县",parent:"451200"},{value:"451229",name:"大化瑶族自治县",parent:"451200"},{value:"451281",name:"宜州市",parent:"451200"},{value:"451282",name:"其它区",parent:"451200"},{value:"451302",name:"兴宾区",parent:"451300"},{value:"451321",name:"忻城县",parent:"451300"},{value:"451322",name:"象州县",parent:"451300"},{value:"451323",name:"武宣县",parent:"451300"},{value:"451324",name:"金秀瑶族自治县",parent:"451300"},{value:"451381",name:"合山市",parent:"451300"},{value:"451382",name:"其它区",parent:"451300"},{value:"451402",name:"江州区",parent:"451400"},{value:"451421",name:"扶绥县",parent:"451400"},{value:"451422",name:"宁明县",parent:"451400"},{value:"451423",name:"龙州县",parent:"451400"},{value:"451424",name:"大新县",parent:"451400"},{value:"451425",name:"天等县",parent:"451400"},{value:"451481",name:"凭祥市",parent:"451400"},{value:"451482",name:"其它区",parent:"451400"},{value:"460105",name:"秀英区",parent:"460100"},{value:"460106",name:"龙华区",parent:"460100"},{value:"460107",name:"琼山区",parent:"460100"},{value:"460108",name:"美兰区",parent:"460100"},{value:"460109",name:"其它区",parent:"460100"},{value:"460321",name:"西沙群岛",parent:"460300"},{value:"460322",name:"南沙群岛",parent:"460300"},{value:"460323",name:"中沙群岛的岛礁及其海域",parent:"460300"},{value:"469001",name:"五指山市",parent:"460000"},{value:"469002",name:"琼海市",parent:"460000"},{value:"469003",name:"儋州市",parent:"460000"},{value:"469005",name:"文昌市",parent:"460000"},{value:"469006",name:"万宁市",parent:"460000"},{value:"469007",name:"东方市",parent:"460000"},{value:"469025",name:"定安县",parent:"460000"},{value:"469026",name:"屯昌县",parent:"460000"},{value:"469027",name:"澄迈县",parent:"460000"},{value:"469028",name:"临高县",parent:"460000"},{value:"469030",name:"白沙黎族自治县",parent:"460000"},{value:"469031",name:"昌江黎族自治县",parent:"460000"},{value:"469033",name:"乐东黎族自治县",parent:"460000"},{value:"469034",name:"陵水黎族自治县",parent:"460000"},{value:"469035",name:"保亭黎族苗族自治县",parent:"460000"},{value:"469036",name:"琼中黎族苗族自治县",parent:"460000"},{value:"469037",name:"西沙群岛",parent:"460000"},{value:"469038",name:"南沙群岛",parent:"460000"},{value:"469039",name:"中沙群岛的岛礁及其海域",parent:"460000"},{value:"471004",name:"高新区",parent:"410300"},{value:"471005",name:"其它区",parent:"410300"},{value:"500101",name:"万州区",parent:"500100"},{value:"500102",name:"涪陵区",parent:"500100"},{value:"500103",name:"渝中区",parent:"500100"},{value:"500104",name:"大渡口区",parent:"500100"},{value:"500105",name:"江北区",parent:"500100"},{value:"500106",name:"沙坪坝区",parent:"500100"},{value:"500107",name:"九龙坡区",parent:"500100"},{value:"500108",name:"南岸区",parent:"500100"},{value:"500109",name:"北碚区",parent:"500100"},{value:"500110",name:"万盛区",parent:"500100"},{value:"500111",name:"双桥区",parent:"500100"},{value:"500112",name:"渝北区",parent:"500100"},{value:"500113",name:"巴南区",parent:"500100"},{value:"500114",name:"黔江区",parent:"500100"},{value:"500115",name:"长寿区",parent:"500100"},{value:"500222",name:"綦江区",parent:"500100"},{value:"500223",name:"潼南县",parent:"500100"},{value:"500224",name:"铜梁区",parent:"500100"},{value:"500225",name:"大足区",parent:"500100"},{value:"500226",name:"荣昌县",parent:"500100"},{value:"500227",name:"璧山区",parent:"500100"},{value:"500228",name:"梁平县",parent:"500100"},{value:"500229",name:"城口县",parent:"500100"},{value:"500230",name:"丰都县",parent:"500100"},{value:"500231",name:"垫江县",parent:"500100"},{value:"500232",name:"武隆县",parent:"500100"},{value:"500233",name:"忠县",parent:"500100"},{value:"500234",name:"开县",parent:"500100"},{value:"500235",name:"云阳县",parent:"500100"},{value:"500236",name:"奉节县",parent:"500100"},{value:"500237",name:"巫山县",parent:"500100"},{value:"500238",name:"巫溪县",parent:"500100"},{value:"500240",name:"石柱土家族自治县",parent:"500100"},{value:"500241",name:"秀山土家族苗族自治县",parent:"500100"},{value:"500242",name:"酉阳土家族苗族自治县",parent:"500100"},{value:"500243",name:"彭水苗族土家族自治县",parent:"500100"},{value:"500381",name:"江津区",parent:"500100"},{value:"500382",name:"合川区",parent:"500100"},{value:"500383",name:"永川区",parent:"500100"},{value:"500384",name:"南川区",parent:"500100"},{value:"500385",name:"其它区",parent:"500100"},{value:"510104",name:"锦江区",parent:"510100"},{value:"510105",name:"青羊区",parent:"510100"},{value:"510106",name:"金牛区",parent:"510100"},{value:"510107",name:"武侯区",parent:"510100"},{value:"510108",name:"成华区",parent:"510100"},{value:"510112",name:"龙泉驿区",parent:"510100"},{value:"510113",name:"青白江区",parent:"510100"},{value:"510114",name:"新都区",parent:"510100"},{value:"510115",name:"温江区",parent:"510100"},{value:"510121",name:"金堂县",parent:"510100"},{value:"510122",name:"双流县",parent:"510100"},{value:"510124",name:"郫县",parent:"510100"},{value:"510129",name:"大邑县",parent:"510100"},{value:"510131",name:"蒲江县",parent:"510100"},{value:"510132",name:"新津县",parent:"510100"},{value:"510181",name:"都江堰市",parent:"510100"},{value:"510182",name:"彭州市",parent:"510100"},{value:"510183",name:"邛崃市",parent:"510100"},{value:"510184",name:"崇州市",parent:"510100"},{value:"510185",name:"其它区",parent:"510100"},{value:"510302",name:"自流井区",parent:"510300"},{value:"510303",name:"贡井区",parent:"510300"},{value:"510304",name:"大安区",parent:"510300"},{value:"510311",name:"沿滩区",parent:"510300"},{value:"510321",name:"荣县",parent:"510300"},{value:"510322",name:"富顺县",parent:"510300"},{value:"510323",name:"其它区",parent:"510300"},{value:"510402",name:"东区",parent:"510400"},{value:"510403",name:"西区",parent:"510400"},{value:"510411",name:"仁和区",parent:"510400"},{value:"510421",name:"米易县",parent:"510400"},{value:"510422",name:"盐边县",parent:"510400"},{value:"510423",name:"其它区",parent:"510400"},{value:"510502",name:"江阳区",parent:"510500"},{value:"510503",name:"纳溪区",parent:"510500"},{value:"510504",name:"龙马潭区",parent:"510500"},{value:"510521",name:"泸县",parent:"510500"},{value:"510522",name:"合江县",parent:"510500"},{value:"510524",name:"叙永县",parent:"510500"},{value:"510525",name:"古蔺县",parent:"510500"},{value:"510526",name:"其它区",parent:"510500"},{value:"510603",name:"旌阳区",parent:"510600"},{value:"510623",name:"中江县",parent:"510600"},{value:"510626",name:"罗江县",parent:"510600"},{value:"510681",name:"广汉市",parent:"510600"},{value:"510682",name:"什邡市",parent:"510600"},{value:"510683",name:"绵竹市",parent:"510600"},{value:"510684",name:"其它区",parent:"510600"},{value:"510703",name:"涪城区",parent:"510700"},{value:"510704",name:"游仙区",parent:"510700"},{value:"510722",name:"三台县",parent:"510700"},{value:"510723",name:"盐亭县",parent:"510700"},{value:"510724",name:"安县",parent:"510700"},{value:"510725",name:"梓潼县",parent:"510700"},{value:"510726",name:"北川羌族自治县",parent:"510700"},{value:"510727",name:"平武县",parent:"510700"},{value:"510751",name:"高新区",parent:"510700"},{value:"510781",name:"江油市",parent:"510700"},{value:"510782",name:"其它区",parent:"510700"},{value:"510802",name:"利州区",parent:"510800"},{value:"510811",name:"昭化区",parent:"510800"},{value:"510812",name:"朝天区",parent:"510800"},{value:"510821",name:"旺苍县",parent:"510800"},{value:"510822",name:"青川县",parent:"510800"},{value:"510823",name:"剑阁县",parent:"510800"},{value:"510824",name:"苍溪县",parent:"510800"},{value:"510825",name:"其它区",parent:"510800"},{value:"510903",name:"船山区",parent:"510900"},{value:"510904",name:"安居区",parent:"510900"},{value:"510921",name:"蓬溪县",parent:"510900"},{value:"510922",name:"射洪县",parent:"510900"},{value:"510923",name:"大英县",parent:"510900"},{value:"510924",name:"其它区",parent:"510900"},{value:"511002",name:"市中区",parent:"511000"},{value:"511011",name:"东兴区",parent:"511000"},{value:"511024",name:"威远县",parent:"511000"},{value:"511025",name:"资中县",parent:"511000"},{value:"511028",name:"隆昌县",parent:"511000"},{value:"511029",name:"其它区",parent:"511000"},{value:"511102",name:"市中区",parent:"511100"},{value:"511111",name:"沙湾区",parent:"511100"},{value:"511112",name:"五通桥区",parent:"511100"},{value:"511113",name:"金口河区",parent:"511100"},{value:"511123",name:"犍为县",parent:"511100"},{value:"511124",name:"井研县",parent:"511100"},{value:"511126",name:"夹江县",parent:"511100"},{value:"511129",name:"沐川县",parent:"511100"},{value:"511132",name:"峨边彝族自治县",parent:"511100"},{value:"511133",name:"马边彝族自治县",parent:"511100"},{value:"511181",name:"峨眉山市",parent:"511100"},{value:"511182",name:"其它区",parent:"511100"},{value:"511302",name:"顺庆区",parent:"511300"},{value:"511303",name:"高坪区",parent:"511300"},{value:"511304",name:"嘉陵区",parent:"511300"},{value:"511321",name:"南部县",parent:"511300"},{value:"511322",name:"营山县",parent:"511300"},{value:"511323",name:"蓬安县",parent:"511300"},{value:"511324",name:"仪陇县",parent:"511300"},{value:"511325",name:"西充县",parent:"511300"},{value:"511381",name:"阆中市",parent:"511300"},{value:"511382",name:"其它区",parent:"511300"},{value:"511402",name:"东坡区",parent:"511400"},{value:"511421",name:"仁寿县",parent:"511400"},{value:"511422",name:"彭山区",parent:"511400"},{value:"511423",name:"洪雅县",parent:"511400"},{value:"511424",name:"丹棱县",parent:"511400"},{value:"511425",name:"青神县",parent:"511400"},{value:"511426",name:"其它区",parent:"511400"},{value:"511502",name:"翠屏区",parent:"511500"},{value:"511521",name:"宜宾县",parent:"511500"},{value:"511522",name:"南溪区",parent:"511500"},{value:"511523",name:"江安县",parent:"511500"},{value:"511524",name:"长宁县",parent:"511500"},{value:"511525",name:"高县",parent:"511500"},{value:"511526",name:"珙县",parent:"511500"},{value:"511527",name:"筠连县",parent:"511500"},{value:"511528",name:"兴文县",parent:"511500"},{value:"511529",name:"屏山县",parent:"511500"},{value:"511530",name:"其它区",parent:"511500"},{value:"511602",name:"广安区",parent:"511600"},{value:"511603",name:"前锋区",parent:"511600"},{value:"511621",name:"岳池县",parent:"511600"},{value:"511622",name:"武胜县",parent:"511600"},{value:"511623",name:"邻水县",parent:"511600"},{value:"511681",name:"华蓥市",parent:"511600"},{value:"511682",name:"市辖区",parent:"511600"},{value:"511683",name:"其它区",parent:"511600"},{value:"511702",name:"通川区",parent:"511700"},{value:"511721",name:"达川区",parent:"511700"},{value:"511722",name:"宣汉县",parent:"511700"},{value:"511723",name:"开江县",parent:"511700"},{value:"511724",name:"大竹县",parent:"511700"},{value:"511725",name:"渠县",parent:"511700"},{value:"511781",name:"万源市",parent:"511700"},{value:"511782",name:"其它区",parent:"511700"},{value:"511802",name:"雨城区",parent:"511800"},{value:"511821",name:"名山区",parent:"511800"},{value:"511822",name:"荥经县",parent:"511800"},{value:"511823",name:"汉源县",parent:"511800"},{value:"511824",name:"石棉县",parent:"511800"},{value:"511825",name:"天全县",parent:"511800"},{value:"511826",name:"芦山县",parent:"511800"},{value:"511827",name:"宝兴县",parent:"511800"},{value:"511828",name:"其它区",parent:"511800"},{value:"511902",name:"巴州区",parent:"511900"},{value:"511903",name:"恩阳区",parent:"511900"},{value:"511921",name:"通江县",parent:"511900"},{value:"511922",name:"南江县",parent:"511900"},{value:"511923",name:"平昌县",parent:"511900"},{value:"511924",name:"其它区",parent:"511900"},{value:"512002",name:"雁江区",parent:"512000"},{value:"512021",name:"安岳县",parent:"512000"},{value:"512022",name:"乐至县",parent:"512000"},{value:"512081",name:"简阳市",parent:"512000"},{value:"512082",name:"其它区",parent:"512000"},{value:"513221",name:"汶川县",parent:"513200"},{value:"513222",name:"理县",parent:"513200"},{value:"513223",name:"茂县",parent:"513200"},{value:"513224",name:"松潘县",parent:"513200"},{value:"513225",name:"九寨沟县",parent:"513200"},{value:"513226",name:"金川县",parent:"513200"},{value:"513227",name:"小金县",parent:"513200"},{value:"513228",name:"黑水县",parent:"513200"},{value:"513229",name:"马尔康县",parent:"513200"},{value:"513230",name:"壤塘县",parent:"513200"},{value:"513231",name:"阿坝县",parent:"513200"},{value:"513232",name:"若尔盖县",parent:"513200"},{value:"513233",name:"红原县",parent:"513200"},{value:"513234",name:"其它区",parent:"513200"},{value:"513321",name:"康定市",parent:"513300"},{value:"513322",name:"泸定县",parent:"513300"},{value:"513323",name:"丹巴县",parent:"513300"},{value:"513324",name:"九龙县",parent:"513300"},{value:"513325",name:"雅江县",parent:"513300"},{value:"513326",name:"道孚县",parent:"513300"},{value:"513327",name:"炉霍县",parent:"513300"},{value:"513328",name:"甘孜县",parent:"513300"},{value:"513329",name:"新龙县",parent:"513300"},{value:"513330",name:"德格县",parent:"513300"},{value:"513331",name:"白玉县",parent:"513300"},{value:"513332",name:"石渠县",parent:"513300"},{value:"513333",name:"色达县",parent:"513300"},{value:"513334",name:"理塘县",parent:"513300"},{value:"513335",name:"巴塘县",parent:"513300"},{value:"513336",name:"乡城县",parent:"513300"},{value:"513337",name:"稻城县",parent:"513300"},{value:"513338",name:"得荣县",parent:"513300"},{value:"513339",name:"其它区",parent:"513300"},{value:"513401",name:"西昌市",parent:"513400"},{value:"513422",name:"木里藏族自治县",parent:"513400"},{value:"513423",name:"盐源县",parent:"513400"},{value:"513424",name:"德昌县",parent:"513400"},{value:"513425",name:"会理县",parent:"513400"},{value:"513426",name:"会东县",parent:"513400"},{value:"513427",name:"宁南县",parent:"513400"},{value:"513428",name:"普格县",parent:"513400"},{value:"513429",name:"布拖县",parent:"513400"},{value:"513430",name:"金阳县",parent:"513400"},{value:"513431",name:"昭觉县",parent:"513400"},{value:"513432",name:"喜德县",parent:"513400"},{value:"513433",name:"冕宁县",parent:"513400"},{value:"513434",name:"越西县",parent:"513400"},{value:"513435",name:"甘洛县",parent:"513400"},{value:"513436",name:"美姑县",parent:"513400"},{value:"513437",name:"雷波县",parent:"513400"},{value:"513438",name:"其它区",parent:"513400"},{value:"520102",name:"南明区",parent:"520100"},{value:"520103",name:"云岩区",parent:"520100"},{value:"520111",name:"花溪区",parent:"520100"},{value:"520112",name:"乌当区",parent:"520100"},{value:"520113",name:"白云区",parent:"520100"},{value:"520114",name:"小河区",parent:"520100"},{value:"520121",name:"开阳县",parent:"520100"},{value:"520122",name:"息烽县",parent:"520100"},{value:"520123",name:"修文县",parent:"520100"},{value:"520151",name:"观山湖区",parent:"520100"},{value:"520181",name:"清镇市",parent:"520100"},{value:"520182",name:"其它区",parent:"520100"},{value:"520201",name:"钟山区",parent:"520200"},{value:"520203",name:"六枝特区",parent:"520200"},{value:"520221",name:"水城县",parent:"520200"},{value:"520222",name:"盘县",parent:"520200"},{value:"520223",name:"其它区",parent:"520200"},{value:"520302",name:"红花岗区",parent:"520300"},{value:"520303",name:"汇川区",parent:"520300"},{value:"520321",name:"遵义县",parent:"520300"},{value:"520322",name:"桐梓县",parent:"520300"},{value:"520323",name:"绥阳县",parent:"520300"},{value:"520324",name:"正安县",parent:"520300"},{value:"520325",name:"道真仡佬族苗族自治县",parent:"520300"},{value:"520326",name:"务川仡佬族苗族自治县",parent:"520300"},{value:"520327",name:"凤冈县",parent:"520300"},{value:"520328",name:"湄潭县",parent:"520300"},{value:"520329",name:"余庆县",parent:"520300"},{value:"520330",name:"习水县",parent:"520300"},{value:"520381",name:"赤水市",parent:"520300"},{value:"520382",name:"仁怀市",parent:"520300"},{value:"520383",name:"其它区",parent:"520300"},{value:"520402",name:"西秀区",parent:"520400"},{value:"520421",name:"平坝区",parent:"520400"},{value:"520422",name:"普定县",parent:"520400"},{value:"520423",name:"镇宁布依族苗族自治县",parent:"520400"},{value:"520424",name:"关岭布依族苗族自治县",parent:"520400"},{value:"520425",name:"紫云苗族布依族自治县",parent:"520400"},{value:"520426",name:"其它区",parent:"520400"},{value:"522201",name:"碧江区",parent:"522200"},{value:"522222",name:"江口县",parent:"522200"},{value:"522223",name:"玉屏侗族自治县",parent:"522200"},{value:"522224",name:"石阡县",parent:"522200"},{value:"522225",name:"思南县",parent:"522200"},{value:"522226",name:"印江土家族苗族自治县",parent:"522200"},{value:"522227",name:"德江县",parent:"522200"},{value:"522228",name:"沿河土家族自治县",parent:"522200"},{value:"522229",name:"松桃苗族自治县",parent:"522200"},{value:"522230",name:"万山区",parent:"522200"},{value:"522231",name:"其它区",parent:"522200"},{value:"522301",name:"兴义市",parent:"522300"},{value:"522322",name:"兴仁县",parent:"522300"},{value:"522323",name:"普安县",parent:"522300"},{value:"522324",name:"晴隆县",parent:"522300"},{value:"522325",name:"贞丰县",parent:"522300"},{value:"522326",name:"望谟县",parent:"522300"},{value:"522327",name:"册亨县",parent:"522300"},{value:"522328",name:"安龙县",parent:"522300"},{value:"522329",name:"其它区",parent:"522300"},{value:"522401",name:"七星关区",parent:"522400"},{value:"522422",name:"大方县",parent:"522400"},{value:"522423",name:"黔西县",parent:"522400"},{value:"522424",name:"金沙县",parent:"522400"},{value:"522425",name:"织金县",parent:"522400"},{value:"522426",name:"纳雍县",parent:"522400"},{value:"522427",name:"威宁彝族回族苗族自治县",parent:"522400"},{value:"522428",name:"赫章县",parent:"522400"},{value:"522429",name:"其它区",parent:"522400"},{value:"522601",name:"凯里市",parent:"522600"},{value:"522622",name:"黄平县",parent:"522600"},{value:"522623",name:"施秉县",parent:"522600"},{value:"522624",name:"三穗县",parent:"522600"},{value:"522625",name:"镇远县",parent:"522600"},{value:"522626",name:"岑巩县",parent:"522600"},{value:"522627",name:"天柱县",parent:"522600"},{value:"522628",name:"锦屏县",parent:"522600"},{value:"522629",name:"剑河县",parent:"522600"},{value:"522630",name:"台江县",parent:"522600"},{value:"522631",name:"黎平县",parent:"522600"},{value:"522632",name:"榕江县",parent:"522600"},{value:"522633",name:"从江县",parent:"522600"},{value:"522634",name:"雷山县",parent:"522600"},{value:"522635",name:"麻江县",parent:"522600"},{value:"522636",name:"丹寨县",parent:"522600"},{value:"522637",name:"其它区",parent:"522600"},{value:"522701",name:"都匀市",parent:"522700"},{value:"522702",name:"福泉市",parent:"522700"},{value:"522722",name:"荔波县",parent:"522700"},{value:"522723",name:"贵定县",parent:"522700"},{value:"522725",name:"瓮安县",parent:"522700"},{value:"522726",name:"独山县",parent:"522700"},{value:"522727",name:"平塘县",parent:"522700"},{value:"522728",name:"罗甸县",parent:"522700"},{value:"522729",name:"长顺县",parent:"522700"},{value:"522730",name:"龙里县",parent:"522700"},{value:"522731",name:"惠水县",parent:"522700"},{value:"522732",name:"三都水族自治县",parent:"522700"},{value:"522733",name:"其它区",parent:"522700"},{value:"530102",name:"五华区",parent:"530100"},{value:"530103",name:"盘龙区",parent:"530100"},{value:"530111",name:"官渡区",parent:"530100"},{value:"530112",name:"西山区",parent:"530100"},{value:"530113",name:"东川区",parent:"530100"},{value:"530121",name:"呈贡区",parent:"530100"},{value:"530122",name:"晋宁县",parent:"530100"},{value:"530124",name:"富民县",parent:"530100"},{value:"530125",name:"宜良县",parent:"530100"},{value:"530126",name:"石林彝族自治县",parent:"530100"},{value:"530127",name:"嵩明县",parent:"530100"},{value:"530128",name:"禄劝彝族苗族自治县",parent:"530100"},{value:"530129",name:"寻甸回族彝族自治县",parent:"530100"},{value:"530181",name:"安宁市",parent:"530100"},{value:"530182",name:"其它区",parent:"530100"},{value:"530302",name:"麒麟区",parent:"530300"},{value:"530321",name:"马龙县",parent:"530300"},{value:"530322",name:"陆良县",parent:"530300"},{value:"530323",name:"师宗县",parent:"530300"},{value:"530324",name:"罗平县",parent:"530300"},{value:"530325",name:"富源县",parent:"530300"},{value:"530326",name:"会泽县",parent:"530300"},{value:"530328",name:"沾益县",parent:"530300"},{value:"530381",name:"宣威市",parent:"530300"},{value:"530382",name:"其它区",parent:"530300"},{value:"530402",name:"红塔区",parent:"530400"},{value:"530421",name:"江川县",parent:"530400"},{value:"530422",name:"澄江县",parent:"530400"},{value:"530423",name:"通海县",parent:"530400"},{value:"530424",name:"华宁县",parent:"530400"},{value:"530425",name:"易门县",parent:"530400"},{value:"530426",name:"峨山彝族自治县",parent:"530400"},{value:"530427",name:"新平彝族傣族自治县",parent:"530400"},{value:"530428",name:"元江哈尼族彝族傣族自治县",parent:"530400"},{value:"530429",name:"其它区",parent:"530400"},{value:"530502",name:"隆阳区",parent:"530500"},{value:"530521",name:"施甸县",parent:"530500"},{value:"530522",name:"腾冲县",parent:"530500"},{value:"530523",name:"龙陵县",parent:"530500"},{value:"530524",name:"昌宁县",parent:"530500"},{value:"530525",name:"其它区",parent:"530500"},{value:"530602",name:"昭阳区",parent:"530600"},{value:"530621",name:"鲁甸县",parent:"530600"},{value:"530622",name:"巧家县",parent:"530600"},{value:"530623",name:"盐津县",parent:"530600"},{value:"530624",name:"大关县",parent:"530600"},{value:"530625",name:"永善县",parent:"530600"},{value:"530626",name:"绥江县",parent:"530600"},{value:"530627",name:"镇雄县",parent:"530600"},{value:"530628",name:"彝良县",parent:"530600"},{value:"530629",name:"威信县",parent:"530600"},{value:"530630",name:"水富县",parent:"530600"},{value:"530631",name:"其它区",parent:"530600"},{value:"530702",name:"古城区",parent:"530700"},{value:"530721",name:"玉龙纳西族自治县",parent:"530700"},{value:"530722",name:"永胜县",parent:"530700"},{value:"530723",name:"华坪县",parent:"530700"},{value:"530724",name:"宁蒗彝族自治县",parent:"530700"},{value:"530725",name:"其它区",parent:"530700"},{value:"530802",name:"思茅区",parent:"530800"},{value:"530821",name:"宁洱哈尼族彝族自治县",parent:"530800"},{value:"530822",name:"墨江哈尼族自治县",parent:"530800"},{value:"530823",name:"景东彝族自治县",parent:"530800"},{value:"530824",name:"景谷傣族彝族自治县",parent:"530800"},{value:"530825",name:"镇沅彝族哈尼族拉祜族自治县",parent:"530800"},{value:"530826",name:"江城哈尼族彝族自治县",parent:"530800"},{value:"530827",name:"孟连傣族拉祜族佤族自治县",parent:"530800"},{value:"530828",name:"澜沧拉祜族自治县",parent:"530800"},{value:"530829",name:"西盟佤族自治县",parent:"530800"},{value:"530830",name:"其它区",parent:"530800"},{value:"530902",name:"临翔区",parent:"530900"},{value:"530921",name:"凤庆县",parent:"530900"},{value:"530922",name:"云县",parent:"530900"},{value:"530923",name:"永德县",parent:"530900"},{value:"530924",name:"镇康县",parent:"530900"},{value:"530925",name:"双江拉祜族佤族布朗族傣族自治县",parent:"530900"},{value:"530926",name:"耿马傣族佤族自治县",parent:"530900"},{value:"530927",name:"沧源佤族自治县",parent:"530900"},{value:"530928",name:"其它区",parent:"530900"},{value:"532301",name:"楚雄市",parent:"532300"},{value:"532322",name:"双柏县",parent:"532300"},{value:"532323",name:"牟定县",parent:"532300"},{value:"532324",name:"南华县",parent:"532300"},{value:"532325",name:"姚安县",parent:"532300"},{value:"532326",name:"大姚县",parent:"532300"},{value:"532327",name:"永仁县",parent:"532300"},{value:"532328",name:"元谋县",parent:"532300"},{value:"532329",name:"武定县",parent:"532300"},{value:"532331",name:"禄丰县",parent:"532300"},{value:"532332",name:"其它区",parent:"532300"},{value:"532501",name:"个旧市",parent:"532500"},{value:"532502",name:"开远市",parent:"532500"},{value:"532522",name:"蒙自市",parent:"532500"},{value:"532523",name:"屏边苗族自治县",parent:"532500"},{value:"532524",name:"建水县",parent:"532500"},{value:"532525",name:"石屏县",parent:"532500"},{value:"532526",name:"弥勒市",parent:"532500"},{value:"532527",name:"泸西县",parent:"532500"},{value:"532528",name:"元阳县",parent:"532500"},{value:"532529",name:"红河县",parent:"532500"},{value:"532530",name:"金平苗族瑶族傣族自治县",parent:"532500"},{value:"532531",name:"绿春县",parent:"532500"},{value:"532532",name:"河口瑶族自治县",parent:"532500"},{value:"532533",name:"其它区",parent:"532500"},{value:"532621",name:"文山市",parent:"532600"},{value:"532622",name:"砚山县",parent:"532600"},{value:"532623",name:"西畴县",parent:"532600"},{value:"532624",name:"麻栗坡县",parent:"532600"},{value:"532625",name:"马关县",parent:"532600"},{value:"532626",name:"丘北县",parent:"532600"},{value:"532627",name:"广南县",parent:"532600"},{value:"532628",name:"富宁县",parent:"532600"},{value:"532629",name:"其它区",parent:"532600"},{value:"532801",name:"景洪市",parent:"532800"},{value:"532822",name:"勐海县",parent:"532800"},{value:"532823",name:"勐腊县",parent:"532800"},{value:"532824",name:"其它区",parent:"532800"},{value:"532901",name:"大理市",parent:"532900"},{value:"532922",name:"漾濞彝族自治县",parent:"532900"},{value:"532923",name:"祥云县",parent:"532900"},{value:"532924",name:"宾川县",parent:"532900"},{value:"532925",name:"弥渡县",parent:"532900"},{value:"532926",name:"南涧彝族自治县",parent:"532900"},{value:"532927",name:"巍山彝族回族自治县",parent:"532900"},{value:"532928",name:"永平县",parent:"532900"},{value:"532929",name:"云龙县",parent:"532900"},{value:"532930",name:"洱源县",parent:"532900"},{value:"532931",name:"剑川县",parent:"532900"},{value:"532932",name:"鹤庆县",parent:"532900"},{value:"532933",name:"其它区",parent:"532900"},{value:"533102",name:"瑞丽市",parent:"533100"},{value:"533103",name:"芒市",parent:"533100"},{value:"533122",name:"梁河县",parent:"533100"},{value:"533123",name:"盈江县",parent:"533100"},{value:"533124",name:"陇川县",parent:"533100"},{value:"533125",name:"其它区",parent:"533100"},{value:"533321",name:"泸水县",parent:"533300"},{value:"533323",name:"福贡县",parent:"533300"},{value:"533324",name:"贡山独龙族怒族自治县",parent:"533300"},{value:"533325",name:"兰坪白族普米族自治县",parent:"533300"},{value:"533326",name:"其它区",parent:"533300"},{value:"533421",name:"香格里拉市",parent:"533400"},{value:"533422",name:"德钦县",parent:"533400"},{value:"533423",name:"维西傈僳族自治县",parent:"533400"},{value:"533424",name:"其它区",parent:"533400"},{value:"540102",name:"城关区",parent:"540100"},{value:"540121",name:"林周县",parent:"540100"},{value:"540122",name:"当雄县",parent:"540100"},{value:"540123",name:"尼木县",parent:"540100"},{value:"540124",name:"曲水县",parent:"540100"},{value:"540125",name:"堆龙德庆县",parent:"540100"},{value:"540126",name:"达孜县",parent:"540100"},{value:"540127",name:"墨竹工卡县",parent:"540100"},{value:"540128",name:"其它区",parent:"540100"},{value:"542121",name:"卡若区",parent:"542100"},{value:"542122",name:"江达县",parent:"542100"},{value:"542123",name:"贡觉县",parent:"542100"},{value:"542124",name:"类乌齐县",parent:"542100"},{value:"542125",name:"丁青县",parent:"542100"},{value:"542126",name:"察雅县",parent:"542100"},{value:"542127",name:"八宿县",parent:"542100"},{value:"542128",name:"左贡县",parent:"542100"},{value:"542129",name:"芒康县",parent:"542100"},{value:"542132",name:"洛隆县",parent:"542100"},{value:"542133",name:"边坝县",parent:"542100"},{value:"542134",name:"其它区",parent:"542100"},{value:"542221",name:"乃东县",parent:"542200"},{value:"542222",name:"扎囊县",parent:"542200"},{value:"542223",name:"贡嘎县",parent:"542200"},{value:"542224",name:"桑日县",parent:"542200"},{value:"542225",name:"琼结县",parent:"542200"},{value:"542226",name:"曲松县",parent:"542200"},{value:"542227",name:"措美县",parent:"542200"},{value:"542228",name:"洛扎县",parent:"542200"},{value:"542229",name:"加查县",parent:"542200"},{value:"542231",name:"隆子县",parent:"542200"},{value:"542232",name:"错那县",parent:"542200"},{value:"542233",name:"浪卡子县",parent:"542200"},{value:"542234",name:"其它区",parent:"542200"},{value:"542301",name:"桑珠孜区",parent:"542300"},{value:"542322",name:"南木林县",parent:"542300"},{value:"542323",name:"江孜县",parent:"542300"},{value:"542324",name:"定日县",parent:"542300"},{value:"542325",name:"萨迦县",parent:"542300"},{value:"542326",name:"拉孜县",parent:"542300"},{value:"542327",name:"昂仁县",parent:"542300"},{value:"542328",name:"谢通门县",parent:"542300"},{value:"542329",name:"白朗县",parent:"542300"},{value:"542330",name:"仁布县",parent:"542300"},{value:"542331",name:"康马县",parent:"542300"},{value:"542332",name:"定结县",parent:"542300"},{value:"542333",name:"仲巴县",parent:"542300"},{value:"542334",name:"亚东县",parent:"542300"},{value:"542335",name:"吉隆县",parent:"542300"},{value:"542336",name:"聂拉木县",parent:"542300"},{value:"542337",name:"萨嘎县",parent:"542300"},{value:"542338",name:"岗巴县",parent:"542300"},{value:"542339",name:"其它区",parent:"542300"},{value:"542421",name:"那曲县",parent:"542400"},{value:"542422",name:"嘉黎县",parent:"542400"},{value:"542423",name:"比如县",parent:"542400"},{value:"542424",name:"聂荣县",parent:"542400"},{value:"542425",name:"安多县",parent:"542400"},{value:"542426",name:"申扎县",parent:"542400"},{value:"542427",name:"索县",parent:"542400"},{value:"542428",name:"班戈县",parent:"542400"},{value:"542429",name:"巴青县",parent:"542400"},{value:"542430",name:"尼玛县",parent:"542400"},{value:"542431",name:"其它区",parent:"542400"},{value:"542432",name:"双湖县",parent:"542400"},{value:"542521",name:"普兰县",parent:"542500"},{value:"542522",name:"札达县",parent:"542500"},{value:"542523",name:"噶尔县",parent:"542500"},{value:"542524",name:"日土县",parent:"542500"},{value:"542525",name:"革吉县",parent:"542500"},{value:"542526",name:"改则县",parent:"542500"},{value:"542527",name:"措勤县",parent:"542500"},{value:"542528",name:"其它区",parent:"542500"},{value:"542621",name:"巴宜区",parent:"542600"},{value:"542622",name:"工布江达县",parent:"542600"},{value:"542623",name:"米林县",parent:"542600"},{value:"542624",name:"墨脱县",parent:"542600"},{value:"542625",name:"波密县",parent:"542600"},{value:"542626",name:"察隅县",parent:"542600"},{value:"542627",name:"朗县",parent:"542600"},{value:"542628",name:"其它区",parent:"542600"},{value:"610102",name:"新城区",parent:"610100"},{value:"610103",name:"碑林区",parent:"610100"},{value:"610104",name:"莲湖区",parent:"610100"},{value:"610111",name:"灞桥区",parent:"610100"},{value:"610112",name:"未央区",parent:"610100"},{value:"610113",name:"雁塔区",parent:"610100"},{value:"610114",name:"阎良区",parent:"610100"},{value:"610115",name:"临潼区",parent:"610100"},{value:"610116",name:"长安区",parent:"610100"},{value:"610122",name:"蓝田县",parent:"610100"},{value:"610124",name:"周至县",parent:"610100"},{value:"610125",name:"户县",parent:"610100"},{value:"610126",name:"高陵区",parent:"610100"},{value:"610127",name:"其它区",parent:"610100"},{value:"610202",name:"王益区",parent:"610200"},{value:"610203",name:"印台区",parent:"610200"},{value:"610204",name:"耀州区",parent:"610200"},{value:"610222",name:"宜君县",parent:"610200"},{value:"610223",name:"其它区",parent:"610200"},{value:"610302",name:"渭滨区",parent:"610300"},{value:"610303",name:"金台区",parent:"610300"},{value:"610304",name:"陈仓区",parent:"610300"},{value:"610322",name:"凤翔县",parent:"610300"},{value:"610323",name:"岐山县",parent:"610300"},{value:"610324",name:"扶风县",parent:"610300"},{value:"610326",name:"眉县",parent:"610300"},{value:"610327",name:"陇县",parent:"610300"},{value:"610328",name:"千阳县",parent:"610300"},{value:"610329",name:"麟游县",parent:"610300"},{value:"610330",name:"凤县",parent:"610300"},{value:"610331",name:"太白县",parent:"610300"},{value:"610332",name:"其它区",parent:"610300"},{value:"610402",name:"秦都区",parent:"610400"},{value:"610403",name:"杨陵区",parent:"610400"},{value:"610404",name:"渭城区",parent:"610400"},{value:"610422",name:"三原县",parent:"610400"},{value:"610423",name:"泾阳县",parent:"610400"},{value:"610424",name:"乾县",parent:"610400"},{value:"610425",name:"礼泉县",parent:"610400"},{value:"610426",name:"永寿县",parent:"610400"},{value:"610427",name:"彬县",parent:"610400"},{value:"610428",name:"长武县",parent:"610400"},{value:"610429",name:"旬邑县",parent:"610400"},{value:"610430",name:"淳化县",parent:"610400"},{value:"610431",name:"武功县",parent:"610400"},{value:"610481",name:"兴平市",parent:"610400"},{value:"610482",name:"其它区",parent:"610400"},{value:"610502",name:"临渭区",parent:"610500"},{value:"610521",name:"华县",parent:"610500"},{value:"610522",name:"潼关县",parent:"610500"},{value:"610523",name:"大荔县",parent:"610500"},{value:"610524",name:"合阳县",parent:"610500"},{value:"610525",name:"澄城县",parent:"610500"},{value:"610526",name:"蒲城县",parent:"610500"},{value:"610527",name:"白水县",parent:"610500"},{value:"610528",name:"富平县",parent:"610500"},{value:"610581",name:"韩城市",parent:"610500"},{value:"610582",name:"华阴市",parent:"610500"},{value:"610583",name:"其它区",parent:"610500"},{value:"610602",name:"宝塔区",parent:"610600"},{value:"610621",name:"延长县",parent:"610600"},{value:"610622",name:"延川县",parent:"610600"},{value:"610623",name:"子长县",parent:"610600"},{value:"610624",name:"安塞县",parent:"610600"},{value:"610625",name:"志丹县",parent:"610600"},{value:"610626",name:"吴起县",parent:"610600"},{value:"610627",name:"甘泉县",parent:"610600"},{value:"610628",name:"富县",parent:"610600"},{value:"610629",name:"洛川县",parent:"610600"},{value:"610630",name:"宜川县",parent:"610600"},{value:"610631",name:"黄龙县",parent:"610600"},{value:"610632",name:"黄陵县",parent:"610600"},{value:"610633",name:"其它区",parent:"610600"},{value:"610702",name:"汉台区",parent:"610700"},{value:"610721",name:"南郑县",parent:"610700"},{value:"610722",name:"城固县",parent:"610700"},{value:"610723",name:"洋县",parent:"610700"},{value:"610724",name:"西乡县",parent:"610700"},{value:"610725",name:"勉县",parent:"610700"},{value:"610726",name:"宁强县",parent:"610700"},{value:"610727",name:"略阳县",parent:"610700"},{value:"610728",name:"镇巴县",parent:"610700"},{value:"610729",name:"留坝县",parent:"610700"},{value:"610730",name:"佛坪县",parent:"610700"},{value:"610731",name:"其它区",parent:"610700"},{value:"610802",name:"榆阳区",parent:"610800"},{value:"610821",name:"神木县",parent:"610800"},{value:"610822",name:"府谷县",parent:"610800"},{value:"610823",name:"横山县",parent:"610800"},{value:"610824",name:"靖边县",parent:"610800"},{value:"610825",name:"定边县",parent:"610800"},{value:"610826",name:"绥德县",parent:"610800"},{value:"610827",name:"米脂县",parent:"610800"},{value:"610828",name:"佳县",parent:"610800"},{value:"610829",name:"吴堡县",parent:"610800"},{value:"610830",name:"清涧县",parent:"610800"},{value:"610831",name:"子洲县",parent:"610800"},{value:"610832",name:"其它区",parent:"610800"},{value:"610902",name:"汉滨区",parent:"610900"},{value:"610921",name:"汉阴县",parent:"610900"},{value:"610922",name:"石泉县",parent:"610900"},{value:"610923",name:"宁陕县",parent:"610900"},{value:"610924",name:"紫阳县",parent:"610900"},{value:"610925",name:"岚皋县",parent:"610900"},{value:"610926",name:"平利县",parent:"610900"},{value:"610927",name:"镇坪县",parent:"610900"},{value:"610928",name:"旬阳县",parent:"610900"},{value:"610929",name:"白河县",parent:"610900"},{value:"610930",name:"其它区",parent:"610900"},{value:"611002",name:"商州区",parent:"611000"},{value:"611021",name:"洛南县",parent:"611000"},{value:"611022",name:"丹凤县",parent:"611000"},{value:"611023",name:"商南县",parent:"611000"},{value:"611024",name:"山阳县",parent:"611000"},{value:"611025",name:"镇安县",parent:"611000"},{value:"611026",name:"柞水县",parent:"611000"},{value:"611027",name:"其它区",parent:"611000"},{value:"620102",name:"城关区",parent:"620100"},{value:"620103",name:"七里河区",parent:"620100"},{value:"620104",name:"西固区",parent:"620100"},{value:"620105",name:"安宁区",parent:"620100"},{value:"620111",name:"红古区",parent:"620100"},{value:"620121",name:"永登县",parent:"620100"},{value:"620122",name:"皋兰县",parent:"620100"},{value:"620123",name:"榆中县",parent:"620100"},{value:"620124",name:"其它区",parent:"620100"},{value:"620302",name:"金川区",parent:"620300"},{value:"620321",name:"永昌县",parent:"620300"},{value:"620322",name:"其它区",parent:"620300"},{value:"620402",name:"白银区",parent:"620400"},{value:"620403",name:"平川区",parent:"620400"},{value:"620421",name:"靖远县",parent:"620400"},{value:"620422",name:"会宁县",parent:"620400"},{value:"620423",name:"景泰县",parent:"620400"},{value:"620424",name:"其它区",parent:"620400"},{value:"620502",name:"秦州区",parent:"620500"},{value:"620503",name:"麦积区",parent:"620500"},{value:"620521",name:"清水县",parent:"620500"},{value:"620522",name:"秦安县",parent:"620500"},{value:"620523",name:"甘谷县",parent:"620500"},{value:"620524",name:"武山县",parent:"620500"},{value:"620525",name:"张家川回族自治县",parent:"620500"},{value:"620526",name:"其它区",parent:"620500"},{value:"620602",name:"凉州区",parent:"620600"},{value:"620621",name:"民勤县",parent:"620600"},{value:"620622",name:"古浪县",parent:"620600"},{value:"620623",name:"天祝藏族自治县",parent:"620600"},{value:"620624",name:"其它区",parent:"620600"},{value:"620702",name:"甘州区",parent:"620700"},{value:"620721",name:"肃南裕固族自治县",parent:"620700"},{value:"620722",name:"民乐县",parent:"620700"},{value:"620723",name:"临泽县",parent:"620700"},{value:"620724",name:"高台县",parent:"620700"},{value:"620725",name:"山丹县",parent:"620700"},{value:"620726",name:"其它区",parent:"620700"},{value:"620802",name:"崆峒区",parent:"620800"},{value:"620821",name:"泾川县",parent:"620800"},{value:"620822",name:"灵台县",parent:"620800"},{value:"620823",name:"崇信县",parent:"620800"},{value:"620824",name:"华亭县",parent:"620800"},{value:"620825",name:"庄浪县",parent:"620800"},{value:"620826",name:"静宁县",parent:"620800"},{value:"620827",name:"其它区",parent:"620800"},{value:"620902",name:"肃州区",parent:"620900"},{value:"620921",name:"金塔县",parent:"620900"},{value:"620922",name:"瓜州县",parent:"620900"},{value:"620923",name:"肃北蒙古族自治县",parent:"620900"},{value:"620924",name:"阿克塞哈萨克族自治县",parent:"620900"},{value:"620981",name:"玉门市",parent:"620900"},{value:"620982",name:"敦煌市",parent:"620900"},{value:"620983",name:"其它区",parent:"620900"},{value:"621002",name:"西峰区",parent:"621000"},{value:"621021",name:"庆城县",parent:"621000"},{value:"621022",name:"环县",parent:"621000"},{value:"621023",name:"华池县",parent:"621000"},{value:"621024",name:"合水县",parent:"621000"},{value:"621025",name:"正宁县",parent:"621000"},{value:"621026",name:"宁县",parent:"621000"},{value:"621027",name:"镇原县",parent:"621000"},{value:"621028",name:"其它区",parent:"621000"},{value:"621102",name:"安定区",parent:"621100"},{value:"621121",name:"通渭县",parent:"621100"},{value:"621122",name:"陇西县",parent:"621100"},{value:"621123",name:"渭源县",parent:"621100"},{value:"621124",name:"临洮县",parent:"621100"},{value:"621125",name:"漳县",parent:"621100"},{value:"621126",name:"岷县",parent:"621100"},{value:"621127",name:"其它区",parent:"621100"},{value:"621202",name:"武都区",parent:"621200"},{value:"621221",name:"成县",parent:"621200"},{value:"621222",name:"文县",parent:"621200"},{value:"621223",name:"宕昌县",parent:"621200"},{value:"621224",name:"康县",parent:"621200"},{value:"621225",name:"西和县",parent:"621200"},{value:"621226",name:"礼县",parent:"621200"},{value:"621227",name:"徽县",parent:"621200"},{value:"621228",name:"两当县",parent:"621200"},{value:"621229",name:"其它区",parent:"621200"},{value:"622901",name:"临夏市",parent:"622900"},{value:"622921",name:"临夏县",parent:"622900"},{value:"622922",name:"康乐县",parent:"622900"},{value:"622923",name:"永靖县",parent:"622900"},{value:"622924",name:"广河县",parent:"622900"},{value:"622925",name:"和政县",parent:"622900"},{value:"622926",name:"东乡族自治县",parent:"622900"},{value:"622927",name:"积石山保安族东乡族撒拉族自治县",parent:"622900"},{value:"622928",name:"其它区",parent:"622900"},{value:"623001",name:"合作市",parent:"623000"},{value:"623021",name:"临潭县",parent:"623000"},{value:"623022",name:"卓尼县",parent:"623000"},{value:"623023",name:"舟曲县",parent:"623000"},{value:"623024",name:"迭部县",parent:"623000"},{value:"623025",name:"玛曲县",parent:"623000"},{value:"623026",name:"碌曲县",parent:"623000"},{value:"623027",name:"夏河县",parent:"623000"},{value:"623028",name:"其它区",parent:"623000"},{value:"630102",name:"城东区",parent:"630100"},{value:"630103",name:"城中区",parent:"630100"},{value:"630104",name:"城西区",parent:"630100"},{value:"630105",name:"城北区",parent:"630100"},{value:"630121",name:"大通回族土族自治县",parent:"630100"},{value:"630122",name:"湟中县",parent:"630100"},{value:"630123",name:"湟源县",parent:"630100"},{value:"630124",name:"其它区",parent:"630100"},{value:"632121",name:"平安区",parent:"632100"},{value:"632122",name:"民和回族土族自治县",parent:"632100"},{value:"632123",name:"乐都区",parent:"632100"},{value:"632126",name:"互助土族自治县",parent:"632100"},{value:"632127",name:"化隆回族自治县",parent:"632100"},{value:"632128",name:"循化撒拉族自治县",parent:"632100"},{value:"632129",name:"其它区",parent:"632100"},{value:"632221",name:"门源回族自治县",parent:"632200"},{value:"632222",name:"祁连县",parent:"632200"},{value:"632223",name:"海晏县",parent:"632200"},{value:"632224",name:"刚察县",parent:"632200"},{value:"632225",name:"其它区",parent:"632200"},{value:"632321",name:"同仁县",parent:"632300"},{value:"632322",name:"尖扎县",parent:"632300"},{value:"632323",name:"泽库县",parent:"632300"},{value:"632324",name:"河南蒙古族自治县",parent:"632300"},{value:"632325",name:"其它区",parent:"632300"},{value:"632521",name:"共和县",parent:"632500"},{value:"632522",name:"同德县",parent:"632500"},{value:"632523",name:"贵德县",parent:"632500"},{value:"632524",name:"兴海县",parent:"632500"},{value:"632525",name:"贵南县",parent:"632500"},{value:"632526",name:"其它区",parent:"632500"},{value:"632621",name:"玛沁县",parent:"632600"},{value:"632622",name:"班玛县",parent:"632600"},{value:"632623",name:"甘德县",parent:"632600"},{value:"632624",name:"达日县",parent:"632600"},{value:"632625",name:"久治县",parent:"632600"},{value:"632626",name:"玛多县",parent:"632600"},{value:"632627",name:"其它区",parent:"632600"},{value:"632721",name:"玉树市",parent:"632700"},{value:"632722",name:"杂多县",parent:"632700"},{value:"632723",name:"称多县",parent:"632700"},{value:"632724",name:"治多县",parent:"632700"},{value:"632725",name:"囊谦县",parent:"632700"},{value:"632726",name:"曲麻莱县",parent:"632700"},{value:"632727",name:"其它区",parent:"632700"},{value:"632801",name:"格尔木市",parent:"632800"},{value:"632802",name:"德令哈市",parent:"632800"},{value:"632821",name:"乌兰县",parent:"632800"},{value:"632822",name:"都兰县",parent:"632800"},{value:"632823",name:"天峻县",parent:"632800"},{value:"632824",name:"其它区",parent:"632800"},{value:"640104",name:"兴庆区",parent:"640100"},{value:"640105",name:"西夏区",parent:"640100"},{value:"640106",name:"金凤区",parent:"640100"},{value:"640121",name:"永宁县",parent:"640100"},{value:"640122",name:"贺兰县",parent:"640100"},{value:"640181",name:"灵武市",parent:"640100"},{value:"640182",name:"其它区",parent:"640100"},{value:"640202",name:"大武口区",parent:"640200"},{value:"640205",name:"惠农区",parent:"640200"},{value:"640221",name:"平罗县",parent:"640200"},{value:"640222",name:"其它区",parent:"640200"},{value:"640302",name:"利通区",parent:"640300"},{value:"640303",name:"红寺堡区",parent:"640300"},{value:"640323",name:"盐池县",parent:"640300"},{value:"640324",name:"同心县",parent:"640300"},{value:"640381",name:"青铜峡市",parent:"640300"},{value:"640382",name:"其它区",parent:"640300"},{value:"640402",name:"原州区",parent:"640400"},{value:"640422",name:"西吉县",parent:"640400"},{value:"640423",name:"隆德县",parent:"640400"},{value:"640424",name:"泾源县",parent:"640400"},{value:"640425",name:"彭阳县",parent:"640400"},{value:"640426",name:"其它区",parent:"640400"},{value:"640502",name:"沙坡头区",parent:"640500"},{value:"640521",name:"中宁县",parent:"640500"},{value:"640522",name:"海原县",parent:"640500"},{value:"640523",name:"其它区",parent:"640500"},{value:"650102",name:"天山区",parent:"650100"},{value:"650103",name:"沙依巴克区",parent:"650100"},{value:"650104",name:"新市区",parent:"650100"},{value:"650105",name:"水磨沟区",parent:"650100"},{value:"650106",name:"头屯河区",parent:"650100"},{value:"650107",name:"达坂城区",parent:"650100"},{value:"650108",name:"东山区",parent:"650100"},{value:"650109",name:"米东区",parent:"650100"},{value:"650121",name:"乌鲁木齐县",parent:"650100"},{value:"650122",name:"其它区",parent:"650100"},{value:"650202",name:"独山子区",parent:"650200"},{value:"650203",name:"克拉玛依区",parent:"650200"},{value:"650204",name:"白碱滩区",parent:"650200"},{value:"650205",name:"乌尔禾区",parent:"650200"},{value:"650206",name:"其它区",parent:"650200"},{value:"652101",name:"高昌区",parent:"652100"},{value:"652122",name:"鄯善县",parent:"652100"},{value:"652123",name:"托克逊县",parent:"652100"},{value:"652124",name:"其它区",parent:"652100"},{value:"652201",name:"哈密市",parent:"652200"},{value:"652222",name:"巴里坤哈萨克自治县",parent:"652200"},{value:"652223",name:"伊吾县",parent:"652200"},{value:"652224",name:"其它区",parent:"652200"},{value:"652301",name:"昌吉市",parent:"652300"},{value:"652302",name:"阜康市",parent:"652300"},{value:"652303",name:"米泉市",parent:"652300"},{value:"652323",name:"呼图壁县",parent:"652300"},{value:"652324",name:"玛纳斯县",parent:"652300"},{value:"652325",name:"奇台县",parent:"652300"},{value:"652327",name:"吉木萨尔县",parent:"652300"},{value:"652328",name:"木垒哈萨克自治县",parent:"652300"},{value:"652329",name:"其它区",parent:"652300"},{value:"652701",name:"博乐市",parent:"652700"},{value:"652702",name:"阿拉山口市",parent:"652700"},{value:"652722",name:"精河县",parent:"652700"},{value:"652723",name:"温泉县",parent:"652700"},{value:"652724",name:"其它区",parent:"652700"},{value:"652801",name:"库尔勒市",parent:"652800"},{value:"652822",name:"轮台县",parent:"652800"},{value:"652823",name:"尉犁县",parent:"652800"},{value:"652824",name:"若羌县",parent:"652800"},{value:"652825",name:"且末县",parent:"652800"},{value:"652826",name:"焉耆回族自治县",parent:"652800"},{value:"652827",name:"和静县",parent:"652800"},{value:"652828",name:"和硕县",parent:"652800"},{value:"652829",name:"博湖县",parent:"652800"},{value:"652830",name:"其它区",parent:"652800"},{value:"652901",name:"阿克苏市",parent:"652900"},{value:"652922",name:"温宿县",parent:"652900"},{value:"652923",name:"库车县",parent:"652900"},{value:"652924",name:"沙雅县",parent:"652900"},{value:"652925",name:"新和县",parent:"652900"},{value:"652926",name:"拜城县",parent:"652900"},{value:"652927",name:"乌什县",parent:"652900"},{value:"652928",name:"阿瓦提县",parent:"652900"},{value:"652929",name:"柯坪县",parent:"652900"},{value:"652930",name:"其它区",parent:"652900"},{value:"653001",name:"阿图什市",parent:"653000"},{value:"653022",name:"阿克陶县",parent:"653000"},{value:"653023",name:"阿合奇县",parent:"653000"},{value:"653024",name:"乌恰县",parent:"653000"},{value:"653025",name:"其它区",parent:"653000"},{value:"653101",name:"喀什市",parent:"653100"},{value:"653121",name:"疏附县",parent:"653100"},{value:"653122",name:"疏勒县",parent:"653100"},{value:"653123",name:"英吉沙县",parent:"653100"},{value:"653124",name:"泽普县",parent:"653100"},{value:"653125",name:"莎车县",parent:"653100"},{value:"653126",name:"叶城县",parent:"653100"},{value:"653127",name:"麦盖提县",parent:"653100"},{value:"653128",name:"岳普湖县",parent:"653100"},{value:"653129",name:"伽师县",parent:"653100"},{value:"653130",name:"巴楚县",parent:"653100"},{value:"653131",name:"塔什库尔干塔吉克自治县",parent:"653100"},{value:"653132",name:"其它区",parent:"653100"},{value:"653201",name:"和田市",parent:"653200"},{value:"653221",name:"和田县",parent:"653200"},{value:"653222",name:"墨玉县",parent:"653200"},{value:"653223",name:"皮山县",parent:"653200"},{value:"653224",name:"洛浦县",parent:"653200"},{value:"653225",name:"策勒县",parent:"653200"},{value:"653226",name:"于田县",parent:"653200"},{value:"653227",name:"民丰县",parent:"653200"},{value:"653228",name:"其它区",parent:"653200"},{value:"654002",name:"伊宁市",parent:"654000"},{value:"654003",name:"奎屯市",parent:"654000"},{value:"654004",name:"霍尔果斯市",parent:"654000"},{value:"654021",name:"伊宁县",parent:"654000"},{value:"654022",name:"察布查尔锡伯自治县",parent:"654000"},{value:"654023",name:"霍城县",parent:"654000"},{value:"654024",name:"巩留县",parent:"654000"},{value:"654025",name:"新源县",parent:"654000"},{value:"654026",name:"昭苏县",parent:"654000"},{value:"654027",name:"特克斯县",parent:"654000"},{value:"654028",name:"尼勒克县",parent:"654000"},{value:"654029",name:"其它区",parent:"654000"},{value:"654201",name:"塔城市",parent:"654200"},{value:"654202",name:"乌苏市",parent:"654200"},{value:"654221",name:"额敏县",parent:"654200"},{value:"654223",name:"沙湾县",parent:"654200"},{value:"654224",name:"托里县",parent:"654200"},{value:"654225",name:"裕民县",parent:"654200"},{value:"654226",name:"和布克赛尔蒙古自治县",parent:"654200"},{value:"654227",name:"其它区",parent:"654200"},{value:"654301",name:"阿勒泰市",parent:"654300"},{value:"654321",name:"布尔津县",parent:"654300"},{value:"654322",name:"富蕴县",parent:"654300"},{value:"654323",name:"福海县",parent:"654300"},{value:"654324",name:"哈巴河县",parent:"654300"},{value:"654325",name:"青河县",parent:"654300"},{value:"654326",name:"吉木乃县",parent:"654300"},{value:"654327",name:"其它区",parent:"654300"},{value:"659001",name:"石河子市",parent:"650000"},{value:"659002",name:"阿拉尔市",parent:"650000"},{value:"659003",name:"图木舒克市",parent:"650000"},{value:"659004",name:"五家渠市",parent:"650000"},{value:"659007",name:"双河市",parent:"659000"},{value:"659008",name:"可克达拉市",parent:"659000"},{value:"710101",name:"中正区",parent:"710100"},{value:"710102",name:"大同区",parent:"710100"},{value:"710103",name:"中山区",parent:"710100"},{value:"710104",name:"松山区",parent:"710100"},{value:"710105",name:"大安区",parent:"710100"},{value:"710106",name:"万华区",parent:"710100"},{value:"710107",name:"信义区",parent:"710100"},{value:"710108",name:"士林区",parent:"710100"},{value:"710109",name:"北投区",parent:"710100"},{value:"710110",name:"内湖区",parent:"710100"},{value:"710111",name:"南港区",parent:"710100"},{value:"710112",name:"文山区",parent:"710100"},{value:"710113",name:"其它区",parent:"710100"},{value:"710201",name:"新兴区",parent:"710200"},{value:"710202",name:"前金区",parent:"710200"},{value:"710203",name:"芩雅区",parent:"710200"},{value:"710204",name:"盐埕区",parent:"710200"},{value:"710205",name:"鼓山区",parent:"710200"},{value:"710206",name:"旗津区",parent:"710200"},{value:"710207",name:"前镇区",parent:"710200"},{value:"710208",name:"三民区",parent:"710200"},{value:"710209",name:"左营区",parent:"710200"},{value:"710210",name:"楠梓区",parent:"710200"},{value:"710211",name:"小港区",parent:"710200"},{value:"710212",name:"其它区",parent:"710200"},{value:"710241",name:"苓雅区",parent:"710200"},{value:"710242",name:"仁武区",parent:"710200"},{value:"710243",name:"大社区",parent:"710200"},{value:"710244",name:"冈山区",parent:"710200"},{value:"710245",name:"路竹区",parent:"710200"},{value:"710246",name:"阿莲区",parent:"710200"},{value:"710247",name:"田寮区",parent:"710200"},{value:"710248",name:"燕巢区",parent:"710200"},{value:"710249",name:"桥头区",parent:"710200"},{value:"710250",name:"梓官区",parent:"710200"},{value:"710251",name:"弥陀区",parent:"710200"},{value:"710252",name:"永安区",parent:"710200"},{value:"710253",name:"湖内区",parent:"710200"},{value:"710254",name:"凤山区",parent:"710200"},{value:"710255",name:"大寮区",parent:"710200"},{value:"710256",name:"林园区",parent:"710200"},{value:"710257",name:"鸟松区",parent:"710200"},{value:"710258",name:"大树区",parent:"710200"},{value:"710259",name:"旗山区",parent:"710200"},{value:"710260",name:"美浓区",parent:"710200"},{value:"710261",name:"六龟区",parent:"710200"},{value:"710262",name:"内门区",parent:"710200"},{value:"710263",name:"杉林区",parent:"710200"},{value:"710264",name:"甲仙区",parent:"710200"},{value:"710265",name:"桃源区",parent:"710200"},{value:"710266",name:"那玛夏区",parent:"710200"},{value:"710267",name:"茂林区",parent:"710200"},{value:"710268",name:"茄萣区",parent:"710200"},{value:"710301",name:"中西区",parent:"710300"},{value:"710302",name:"东区",parent:"710300"},{value:"710303",name:"南区",parent:"710300"},{value:"710304",name:"北区",parent:"710300"},{value:"710305",name:"安平区",parent:"710300"},{value:"710306",name:"安南区",parent:"710300"},{value:"710307",name:"其它区",parent:"710300"},{value:"710339",name:"永康区",parent:"710300"},{value:"710340",name:"归仁区",parent:"710300"},{value:"710341",name:"新化区",parent:"710300"},{value:"710342",name:"左镇区",parent:"710300"},{value:"710343",name:"玉井区",parent:"710300"},{value:"710344",name:"楠西区",parent:"710300"},{value:"710345",name:"南化区",parent:"710300"},{value:"710346",name:"仁德区",parent:"710300"},{value:"710347",name:"关庙区",parent:"710300"},{value:"710348",name:"龙崎区",parent:"710300"},{value:"710349",name:"官田区",parent:"710300"},{value:"710350",name:"麻豆区",parent:"710300"},{value:"710351",name:"佳里区",parent:"710300"},{value:"710352",name:"西港区",parent:"710300"},{value:"710353",name:"七股区",parent:"710300"},{value:"710354",name:"将军区",parent:"710300"},{value:"710355",name:"学甲区",parent:"710300"},{value:"710356",name:"北门区",parent:"710300"},{value:"710357",name:"新营区",parent:"710300"},{value:"710358",name:"后壁区",parent:"710300"},{value:"710359",name:"白河区",parent:"710300"},{value:"710360",name:"东山区",parent:"710300"},{value:"710361",name:"六甲区",parent:"710300"},{value:"710362",name:"下营区",parent:"710300"},{value:"710363",name:"柳营区",parent:"710300"},{value:"710364",name:"盐水区",parent:"710300"},{value:"710365",name:"善化区",parent:"710300"},{value:"710366",name:"大内区",parent:"710300"},{value:"710367",name:"山上区",parent:"710300"},{value:"710368",name:"新市区",parent:"710300"},{value:"710369",name:"安定区",parent:"710300"},{value:"710401",name:"中区",parent:"710400"},{value:"710402",name:"东区",parent:"710400"},{value:"710403",name:"南区",parent:"710400"},{value:"710404",name:"西区",parent:"710400"},{value:"710405",name:"北区",parent:"710400"},{value:"710406",name:"北屯区",parent:"710400"},{value:"710407",name:"西屯区",parent:"710400"},{value:"710408",name:"南屯区",parent:"710400"},{value:"710409",name:"其它区",parent:"710400"},{value:"710431",name:"太平区",parent:"710400"},{value:"710432",name:"大里区",parent:"710400"},{value:"710433",name:"雾峰区",parent:"710400"},{value:"710434",name:"乌日区",parent:"710400"},{value:"710435",name:"丰原区",parent:"710400"},{value:"710436",name:"后里区",parent:"710400"},{value:"710437",name:"石冈区",parent:"710400"},{value:"710438",name:"东势区",parent:"710400"},{value:"710439",name:"和平区",parent:"710400"},{value:"710440",name:"新社区",parent:"710400"},{value:"710441",name:"潭子区",parent:"710400"},{value:"710442",name:"大雅区",parent:"710400"},{value:"710443",name:"神冈区",parent:"710400"},{value:"710444",name:"大肚区",parent:"710400"},{value:"710445",name:"沙鹿区",parent:"710400"},{value:"710446",name:"龙井区",parent:"710400"},{value:"710447",name:"梧栖区",parent:"710400"},{value:"710448",name:"清水区",parent:"710400"},{value:"710449",name:"大甲区",parent:"710400"},{value:"710450",name:"外埔区",parent:"710400"},{value:"710451",name:"大安区",parent:"710400"},{value:"710507",name:"金沙镇",parent:"710500"},{value:"710508",name:"金湖镇",parent:"710500"},{value:"710509",name:"金宁乡",parent:"710500"},{value:"710510",name:"金城镇",parent:"710500"},{value:"710511",name:"烈屿乡",parent:"710500"},{value:"710512",name:"乌坵乡",parent:"710500"},{value:"710614",name:"南投市",parent:"710600"},{value:"710615",name:"中寮乡",parent:"710600"},{value:"710616",name:"草屯镇",parent:"710600"},{value:"710617",name:"国姓乡",parent:"710600"},{value:"710618",name:"埔里镇",parent:"710600"},{value:"710619",name:"仁爱乡",parent:"710600"},{value:"710620",name:"名间乡",parent:"710600"},{value:"710621",name:"集集镇",parent:"710600"},{value:"710622",name:"水里乡",parent:"710600"},{value:"710623",name:"鱼池乡",parent:"710600"},{value:"710624",name:"信义乡",parent:"710600"},{value:"710625",name:"竹山镇",parent:"710600"},{value:"710626",name:"鹿谷乡",parent:"710600"},{value:"710701",name:"仁爱区",parent:"710700"},{value:"710702",name:"信义区",parent:"710700"},{value:"710703",name:"中正区",parent:"710700"},{value:"710704",name:"中山区",parent:"710700"},{value:"710705",name:"安乐区",parent:"710700"},{value:"710706",name:"暖暖区",parent:"710700"},{value:"710707",name:"七堵区",parent:"710700"},{value:"710708",name:"其它区",parent:"710700"},{value:"710801",name:"东区",parent:"710800"},{value:"710802",name:"北区",parent:"710800"},{value:"710803",name:"香山区",parent:"710800"},{value:"710804",name:"其它区",parent:"710800"},{value:"710901",name:"东区",parent:"710900"},{value:"710902",name:"西区",parent:"710900"},{value:"710903",name:"其它区",parent:"710900"},{value:"711130",name:"万里区",parent:"711100"},{value:"711131",name:"金山区",parent:"711100"},{value:"711132",name:"板桥区",parent:"711100"},{value:"711133",name:"汐止区",parent:"711100"},{value:"711134",name:"深坑区",parent:"711100"},{value:"711135",name:"石碇区",parent:"711100"},{value:"711136",name:"瑞芳区",parent:"711100"},{value:"711137",name:"平溪区",parent:"711100"},{value:"711138",name:"双溪区",parent:"711100"},{value:"711139",name:"贡寮区",parent:"711100"},{value:"711140",name:"新店区",parent:"711100"},{value:"711141",name:"坪林区",parent:"711100"},{value:"711142",name:"乌来区",parent:"711100"},{value:"711143",name:"永和区",parent:"711100"},{value:"711144",name:"中和区",parent:"711100"},{value:"711145",name:"土城区",parent:"711100"},{value:"711146",name:"三峡区",parent:"711100"},{value:"711147",name:"树林区",parent:"711100"},{value:"711148",name:"莺歌区",parent:"711100"},{value:"711149",name:"三重区",parent:"711100"},{value:"711150",name:"新庄区",parent:"711100"},{value:"711151",name:"泰山区",parent:"711100"},{value:"711152",name:"林口区",parent:"711100"},{value:"711153",name:"芦洲区",parent:"711100"},{value:"711154",name:"五股区",parent:"711100"},{value:"711155",name:"八里区",parent:"711100"},{value:"711156",name:"淡水区",parent:"711100"},{value:"711157",name:"三芝区",parent:"711100"},{value:"711158",name:"石门区",parent:"711100"},{value:"711214",name:"宜兰市",parent:"711200"},{value:"711215",name:"头城镇",parent:"711200"},{value:"711216",name:"礁溪乡",parent:"711200"},{value:"711217",name:"壮围乡",parent:"711200"},{value:"711218",name:"员山乡",parent:"711200"},{value:"711219",name:"罗东镇",parent:"711200"},{value:"711220",name:"三星乡",parent:"711200"},{value:"711221",name:"大同乡",parent:"711200"},{value:"711222",name:"五结乡",parent:"711200"},{value:"711223",name:"冬山乡",parent:"711200"},{value:"711224",name:"苏澳镇",parent:"711200"},{value:"711225",name:"南澳乡",parent:"711200"},{value:"711226",name:"钓鱼台",parent:"711200"},{value:"711314",name:"竹北市",parent:"711300"},{value:"711315",name:"湖口乡",parent:"711300"},{value:"711316",name:"新丰乡",parent:"711300"},{value:"711317",name:"新埔镇",parent:"711300"},{value:"711318",name:"关西镇",parent:"711300"},{value:"711319",name:"芎林乡",parent:"711300"},{value:"711320",name:"宝山乡",parent:"711300"},{value:"711321",name:"竹东镇",parent:"711300"},{value:"711322",name:"五峰乡",parent:"711300"},{value:"711323",name:"横山乡",parent:"711300"},{value:"711324",name:"尖石乡",parent:"711300"},{value:"711325",name:"北埔乡",parent:"711300"},{value:"711326",name:"峨眉乡",parent:"711300"},{value:"711414",name:"中坜市",parent:"711400"},{value:"711415",name:"平镇市",parent:"711400"},{value:"711416",name:"龙潭乡",parent:"711400"},{value:"711417",name:"杨梅市",parent:"711400"},{value:"711418",name:"新屋乡",parent:"711400"},{value:"711419",name:"观音乡",parent:"711400"},{value:"711420",name:"桃园市",parent:"711400"},{value:"711421",name:"龟山乡",parent:"711400"},{value:"711422",name:"八德市",parent:"711400"},{value:"711423",name:"大溪镇",parent:"711400"},{value:"711424",name:"复兴乡",parent:"711400"},{value:"711425",name:"大园乡",parent:"711400"},{value:"711426",name:"芦竹乡",parent:"711400"},{value:"711519",name:"竹南镇",parent:"711500"},{value:"711520",name:"头份镇",parent:"711500"},{value:"711521",name:"三湾乡",parent:"711500"},{value:"711522",name:"南庄乡",parent:"711500"},{value:"711523",name:"狮潭乡",parent:"711500"},{value:"711524",name:"后龙镇",parent:"711500"},{value:"711525",name:"通霄镇",parent:"711500"},{value:"711526",name:"苑里镇",parent:"711500"},{value:"711527",name:"苗栗市",parent:"711500"},{value:"711528",name:"造桥乡",parent:"711500"},{value:"711529",name:"头屋乡",parent:"711500"},{value:"711530",name:"公馆乡",parent:"711500"},{value:"711531",name:"大湖乡",parent:"711500"},{value:"711532",name:"泰安乡",parent:"711500"},{value:"711533",name:"铜锣乡",parent:"711500"},{value:"711534",name:"三义乡",parent:"711500"},{value:"711535",name:"西湖乡",parent:"711500"},{value:"711536",name:"卓兰镇",parent:"711500"},{value:"711727",name:"彰化市",parent:"711700"},{value:"711728",name:"芬园乡",parent:"711700"},{value:"711729",name:"花坛乡",parent:"711700"},{value:"711730",name:"秀水乡",parent:"711700"},{value:"711731",name:"鹿港镇",parent:"711700"},{value:"711732",name:"福兴乡",parent:"711700"},{value:"711733",name:"线西乡",parent:"711700"},{value:"711734",name:"和美镇",parent:"711700"},{value:"711735",name:"伸港乡",parent:"711700"},{value:"711736",name:"员林镇",parent:"711700"},{value:"711737",name:"社头乡",parent:"711700"},{value:"711738",name:"永靖乡",parent:"711700"},{value:"711739",name:"埔心乡",parent:"711700"},{value:"711740",name:"溪湖镇",parent:"711700"},{value:"711741",name:"大村乡",parent:"711700"},{value:"711742",name:"埔盐乡",parent:"711700"},{value:"711743",name:"田中镇",parent:"711700"},{value:"711744",name:"北斗镇",parent:"711700"},{value:"711745",name:"田尾乡",parent:"711700"},{value:"711746",name:"埤头乡",parent:"711700"},{value:"711747",name:"溪州乡",parent:"711700"},{value:"711748",name:"竹塘乡",parent:"711700"},{value:"711749",name:"二林镇",parent:"711700"},{value:"711750",name:"大城乡",parent:"711700"},{value:"711751",name:"芳苑乡",parent:"711700"},{value:"711752",name:"二水乡",parent:"711700"},{value:"711919",name:"番路乡",parent:"711900"},{value:"711920",name:"梅山乡",parent:"711900"},{value:"711921",name:"竹崎乡",parent:"711900"},{value:"711922",name:"阿里山乡",parent:"711900"},{value:"711923",name:"中埔乡",parent:"711900"},{value:"711924",name:"大埔乡",parent:"711900"},{value:"711925",name:"水上乡",parent:"711900"},{value:"711926",name:"鹿草乡",parent:"711900"},{value:"711927",name:"太保市",parent:"711900"},{value:"711928",name:"朴子市",parent:"711900"},{value:"711929",name:"东石乡",parent:"711900"},{value:"711930",name:"六脚乡",parent:"711900"},{value:"711931",name:"新港乡",parent:"711900"},{value:"711932",name:"民雄乡",parent:"711900"},{value:"711933",name:"大林镇",parent:"711900"},{value:"711934",name:"溪口乡",parent:"711900"},{value:"711935",name:"义竹乡",parent:"711900"},{value:"711936",name:"布袋镇",parent:"711900"},{value:"712121",name:"斗南镇",parent:"712100"},{value:"712122",name:"大埤乡",parent:"712100"},{value:"712123",name:"虎尾镇",parent:"712100"},{value:"712124",name:"土库镇",parent:"712100"},{value:"712125",name:"褒忠乡",parent:"712100"},{value:"712126",name:"东势乡",parent:"712100"},{value:"712127",name:"台西乡",parent:"712100"},{value:"712128",name:"仑背乡",parent:"712100"},{value:"712129",name:"麦寮乡",parent:"712100"},{value:"712130",name:"斗六市",parent:"712100"},{value:"712131",name:"林内乡",parent:"712100"},{value:"712132",name:"古坑乡",parent:"712100"},{value:"712133",name:"莿桐乡",parent:"712100"},{value:"712134",name:"西螺镇",parent:"712100"},{value:"712135",name:"二仑乡",parent:"712100"},{value:"712136",name:"北港镇",parent:"712100"},{value:"712137",name:"水林乡",parent:"712100"},{value:"712138",name:"口湖乡",parent:"712100"},{value:"712139",name:"四湖乡",parent:"712100"},{value:"712140",name:"元长乡",parent:"712100"},{value:"712434",name:"屏东市",parent:"712400"},{value:"712435",name:"三地门乡",parent:"712400"},{value:"712436",name:"雾台乡",parent:"712400"},{value:"712437",name:"玛家乡",parent:"712400"},{value:"712438",name:"九如乡",parent:"712400"},{value:"712439",name:"里港乡",parent:"712400"},{value:"712440",name:"高树乡",parent:"712400"},{value:"712441",name:"盐埔乡",parent:"712400"},{value:"712442",name:"长治乡",parent:"712400"},{value:"712443",name:"麟洛乡",parent:"712400"},{value:"712444",name:"竹田乡",parent:"712400"},{value:"712445",name:"内埔乡",parent:"712400"},{value:"712446",name:"万丹乡",parent:"712400"},{value:"712447",name:"潮州镇",parent:"712400"},{value:"712448",name:"泰武乡",parent:"712400"},{value:"712449",name:"来义乡",parent:"712400"},{value:"712450",name:"万峦乡",parent:"712400"},{value:"712451",name:"崁顶乡",parent:"712400"},{value:"712452",name:"新埤乡",parent:"712400"},{value:"712453",name:"南州乡",parent:"712400"},{value:"712454",name:"林边乡",parent:"712400"},{value:"712455",name:"东港镇",parent:"712400"},{value:"712456",name:"琉球乡",parent:"712400"},{value:"712457",name:"佳冬乡",parent:"712400"},{value:"712458",name:"新园乡",parent:"712400"},{value:"712459",name:"枋寮乡",parent:"712400"},{value:"712460",name:"枋山乡",parent:"712400"},{value:"712461",name:"春日乡",parent:"712400"},{value:"712462",name:"狮子乡",parent:"712400"},{value:"712463",name:"车城乡",parent:"712400"},{value:"712464",name:"牡丹乡",parent:"712400"},{value:"712465",name:"恒春镇",parent:"712400"},{value:"712466",name:"满州乡",parent:"712400"},{value:"712517",name:"台东市",parent:"712500"},{value:"712518",name:"绿岛乡",parent:"712500"},{value:"712519",name:"兰屿乡",parent:"712500"},{value:"712520",name:"延平乡",parent:"712500"},{value:"712521",name:"卑南乡",parent:"712500"},{value:"712522",name:"鹿野乡",parent:"712500"},{value:"712523",name:"关山镇",parent:"712500"},{value:"712524",name:"海端乡",parent:"712500"},{value:"712525",name:"池上乡",parent:"712500"},{value:"712526",name:"东河乡",parent:"712500"},{value:"712527",name:"成功镇",parent:"712500"},{value:"712528",name:"长滨乡",parent:"712500"},{value:"712529",name:"金峰乡",parent:"712500"},{value:"712530",name:"大武乡",parent:"712500"},{value:"712531",name:"达仁乡",parent:"712500"},{value:"712532",name:"太麻里乡",parent:"712500"},{value:"712615",name:"花莲市",parent:"712600"},{value:"712616",name:"新城乡",parent:"712600"},{value:"712617",name:"太鲁阁",parent:"712600"},{value:"712618",name:"秀林乡",parent:"712600"},{value:"712619",name:"吉安乡",parent:"712600"},{value:"712620",name:"寿丰乡",parent:"712600"},{value:"712621",name:"凤林镇",parent:"712600"},{value:"712622",name:"光复乡",parent:"712600"},{value:"712623",name:"丰滨乡",parent:"712600"},{value:"712624",name:"瑞穗乡",parent:"712600"},{value:"712625",name:"万荣乡",parent:"712600"},{value:"712626",name:"玉里镇",parent:"712600"},{value:"712627",name:"卓溪乡",parent:"712600"},{value:"712628",name:"富里乡",parent:"712600"},{value:"712707",name:"马公市",parent:"712700"},{value:"712708",name:"西屿乡",parent:"712700"},{value:"712709",name:"望安乡",parent:"712700"},{value:"712710",name:"七美乡",parent:"712700"},{value:"712711",name:"白沙乡",parent:"712700"},{value:"712712",name:"湖西乡",parent:"712700"},{value:"712805",name:"南竿乡",parent:"712800"},{value:"712806",name:"北竿乡",parent:"712800"},{value:"712807",name:"莒光乡",parent:"712800"},{value:"712808",name:"东引乡",parent:"712800"},{value:"810101",name:"中西区",parent:"810100"},{value:"810102",name:"湾仔",parent:"810100"},{value:"810103",name:"东区",parent:"810100"},{value:"810104",name:"南区",parent:"810100"},{value:"810201",name:"九龙城区",parent:"810200"},{value:"810202",name:"油尖旺区",parent:"810200"},{value:"810203",name:"深水埗区",parent:"810200"},{value:"810204",name:"黄大仙区",parent:"810200"},{value:"810205",name:"观塘区",parent:"810200"},{value:"810301",name:"北区",parent:"810300"},{value:"810302",name:"大埔区",parent:"810300"},{value:"810303",name:"沙田区",parent:"810300"},{value:"810304",name:"西贡区",parent:"810300"},{value:"810305",name:"元朗区",parent:"810300"},{value:"810306",name:"屯门区",parent:"810300"},{value:"810307",name:"荃湾区",parent:"810300"},{value:"810308",name:"葵青区",parent:"810300"},{value:"810309",name:"离岛区",parent:"810300"},{value:"441901",parent:"441900",name:"莞城区"},{value:"441902",parent:"441900",name:"南城区"},{value:"441904",parent:"441900",name:"万江区"},{value:"441905",parent:"441900",name:"石碣镇"},{value:"441906",parent:"441900",name:"石龙镇"},{value:"441907",parent:"441900",name:"茶山镇"},{value:"441908",parent:"441900",name:"石排镇"},{value:"441909",parent:"441900",name:"企石镇"},{value:"441910",parent:"441900",name:"横沥镇"},{value:"441911",parent:"441900",name:"桥头镇"},{value:"441912",parent:"441900",name:"谢岗镇"},{value:"441913",parent:"441900",name:"东坑镇"},{value:"441914",parent:"441900",name:"常平镇"},{value:"441915",parent:"441900",name:"寮步镇"},{value:"441916",parent:"441900",name:"大朗镇"},{value:"441917",parent:"441900",name:"麻涌镇"},{value:"441918",parent:"441900",name:"中堂镇"},{value:"441919",parent:"441900",name:"高埗镇"},{value:"441920",parent:"441900",name:"樟木头镇"},{value:"441921",parent:"441900",name:"大岭山镇"},{value:"441922",parent:"441900",name:"望牛墩镇"},{value:"441923",parent:"441900",name:"黄江镇"},{value:"441924",parent:"441900",name:"洪梅镇"},{value:"441925",parent:"441900",name:"清溪镇"},{value:"441926",parent:"441900",name:"沙田镇"},{value:"441927",parent:"441900",name:"道滘镇"},{value:"441928",parent:"441900",name:"塘厦镇"},{value:"441929",parent:"441900",name:"虎门镇"},{value:"441930",parent:"441900",name:"厚街镇"},{value:"441931",parent:"441900",name:"凤岗镇"},{value:"441932",parent:"441900",name:"长安镇"},{value:"442001",parent:"442000",name:"石岐区"},{value:"442004",parent:"442000",name:"南区"},{value:"442005",parent:"442000",name:"五桂山区"},{value:"442006",parent:"442000",name:"火炬开发区"},{value:"442007",parent:"442000",name:"黄圃镇"},{value:"442008",parent:"442000",name:"南头镇"},{value:"442009",parent:"442000",name:"东凤镇"},{value:"442010",parent:"442000",name:"阜沙镇"},{value:"442011",parent:"442000",name:"小榄镇"},{value:"442012",parent:"442000",name:"东升镇"},{value:"442013",parent:"442000",name:"古镇镇"},{value:"442014",parent:"442000",name:"横栏镇"},{value:"442015",parent:"442000",name:"三角镇"},{value:"442016",parent:"442000",name:"民众镇"},{value:"442017",parent:"442000",name:"南朗镇"},{value:"442018",parent:"442000",name:"港口镇"},{value:"442019",parent:"442000",name:"大涌镇"},{value:"442020",parent:"442000",name:"沙溪镇"},{value:"442021",parent:"442000",name:"三乡镇"},{value:"442022",parent:"442000",name:"板芙镇"},{value:"442023",parent:"442000",name:"神湾镇"},{value:"442024",parent:"442000",name:"坦洲镇"}];a.lotusAddressJson=t},d82e:function(e,a,n){},de9f:function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=u(n("01d6")),r=u(n("f6f5"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var a={},n=e.split(","),t=0;t<n.length;t+=1)a[n[t]]=!0;return a}var p=l("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),v=l("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),m=l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");function o(e){var a=/<body.*>([^]*)<\/body>/.test(e);return a?RegExp.$1:e}function i(e){return e.replace(/<!--.*?-->/gi,"").replace(/\/\*.*?\*\//gi,"").replace(/[ ]+</gi,"<").replace(/<script[^]*<\/script>/gi,"").replace(/<style[^]*<\/style>/gi,"")}function s(){var e={};return wx.getSystemInfo({success:function(a){e.width=a.windowWidth,e.height=a.windowHeight}}),e}function c(a,n,u,l){a=o(a),a=i(a),a=t.default.strDiscode(a);var c=[],f={nodes:[],imageUrls:[]},h=s();function d(e){this.node="element",this.tag=e,this.$screen=h}return(0,r.default)(a,{start:function(e,a,r){var l=new d(e);if(0!==c.length){var o=c[0];void 0===o.nodes&&(o.nodes=[])}if(p[e]?l.tagType="block":v[e]?l.tagType="inline":m[e]&&(l.tagType="closeSelf"),l.attr=a.reduce(function(e,a){var n=a.name,t=a.value;return"class"===n&&(l.classStr=t),"style"===n&&(l.styleStr=t),t.match(/ /)&&(t=t.split(" ")),e[n]?Array.isArray(e[n])?e[n].push(t):e[n]=[e[n],t]:e[n]=t,e},{}),l.classStr?l.classStr+=" ".concat(l.tag):l.classStr=l.tag,"inline"===l.tagType&&(l.classStr+=" inline"),"img"===l.tag){var i=l.attr.src;i=t.default.urlToHttpUrl(i,u.domain),Object.assign(l.attr,u,{src:i||""}),i&&f.imageUrls.push(i)}if("a"===l.tag&&(l.attr.href=l.attr.href||""),"font"===l.tag){var s=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],h={color:"color",face:"font-family",size:"font-size"};l.styleStr||(l.styleStr=""),Object.keys(h).forEach(function(e){if(l.attr[e]){var a="size"===e?s[l.attr[e]-1]:l.attr[e];l.styleStr+="".concat(h[e],": ").concat(a,";")}})}if("source"===l.tag&&(f.source=l.attr.src),n.start&&n.start(l,f),r){var g=c[0]||f;void 0===g.nodes&&(g.nodes=[]),g.nodes.push(l)}else c.unshift(l)},end:function(a){var t=c.shift();if(t.tag!==a&&console.error(e("invalid state: mismatch end tag"," at components/gaoyia-parse/libs/html2json.js:211")),"video"===t.tag&&f.source&&(t.attr.src=f.source,delete f.source),n.end&&n.end(t,f),0===c.length)f.nodes.push(t);else{var r=c[0];r.nodes||(r.nodes=[]),r.nodes.push(t)}},chars:function(e){var a={node:"text",text:e};if(n.chars&&n.chars(a,f),0===c.length)f.nodes.push(a);else{var t=c[0];void 0===t.nodes&&(t.nodes=[]),t.nodes.push(a)}}}),f}var f=c;a.default=f}).call(this,n("0de9")["default"])},f6f5:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,u=/([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;function l(e){for(var a={},n=e.split(","),t=0;t<n.length;t+=1)a[n[t]]=!0;return a}var p=l("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),v=l("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),m=l("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),i=l("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");function s(e,a){var n,l,s,c=e,f=[];function h(e,n){var t;if(n){for(n=n.toLowerCase(),t=f.length-1;t>=0;t-=1)if(f[t]===n)break}else t=0;if(t>=0){for(var r=f.length-1;r>=t;r-=1)a.end&&a.end(f[r]);f.length=t}}function d(e,n,t,r){if(n=n.toLowerCase(),v[n])while(f.last()&&m[f.last()])h("",f.last());if(o[n]&&f.last()===n&&h("",n),r=p[n]||!!r,r||f.push(n),a.start){var l=[];t.replace(u,function(e,a){var n=arguments[2]||arguments[3]||arguments[4]||(i[a]?a:"");l.push({name:a,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})}),a.start&&a.start(n,l,r)}}f.last=function(){return f[f.length-1]};while(e){if(l=!0,0===e.indexOf("</")?(s=e.match(r),s&&(e=e.substring(s[0].length),s[0].replace(r,h),l=!1)):0===e.indexOf("<")&&(s=e.match(t),s&&(e=e.substring(s[0].length),s[0].replace(t,d),l=!1)),l){n=e.indexOf("<");var g="";while(0===n)g+="<",e=e.substring(1),n=e.indexOf("<");g+=n<0?e:e.substring(0,n),e=n<0?"":e.substring(n),a.chars&&a.chars(g)}if(e===c)throw new Error("Parse Error: ".concat(e));c=e}h()}var c=s;a.default=c}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/auth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/auth.js';

define('components/auth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/auth"], {
  1543: function _(t, e, n) {
    "use strict";

    var o = n("b96d"),
        a = n.n(o);
    a.a;
  },
  "2bee": function bee(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("a630"),
        a = n.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  "7c8b": function c8b(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  "9cb0": function cb0(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("7c8b"),
        a = n("2bee");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("1543");
    var u = n("2877"),
        r = Object(u["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  a630: function a630(t, e, n) {
    "use strict";

    (function (t, o) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = u(n("454f")),
          i = n("2f62");

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
              o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }))), o.forEach(function (e) {
            c(t, e, n[e]);
          });
        }

        return t;
      }

      function c(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      var s = {
        data: function data() {
          return {
            haslogin: !0,
            agentId: 7813,
            showActionSheet: !1,
            maskClosable: !0,
            itemList: [],
            color: "#9a9a9a",
            size: 26,
            hidemask: !1,
            isCancel: !0
          };
        },
        created: function created() {
          this.getUserInfo();
        },
        methods: r({}, (0, i.mapMutations)(["login"]), {
          itemClick: function itemClick(t) {
            t.index;
            this.closeActionSheet();
          },
          openauth: function openauth() {
            this.haslogin = this.hidemask = !1;
          },
          closeActionSheet: function closeActionSheet() {
            this.showActionSheet = !1;
          },
          getUserInfo: function getUserInfo() {
            t.showLoading({
              title: "正在加载"
            });
          },
          gologin: function gologin(e, n) {
            var i = this,
                u = "/auth/login_by_weixin";
            a.default.httppost(u, e).then(function (e) {
              0 == e.data.errno ? (t.setStorageSync("token", e.data.data.token), t.setStorageSync("userId", e.data.data.userId), i.haslogin = !0, i.hidemask = !0, t.setStorageSync("haslogin", !0), i.$parent.getdata()) : t.navigateTo({
                url: "/pages/public/login"
              }), t.hideLoading();
            }).catch(function (e) {
              console.log(o(e, " at components/auth.vue:168")), t.hideLoading();
            });
          }
        })
      };
      e.default = s;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  b96d: function b96d(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/auth-create-component', {
  'components/auth-create-component': function componentsAuthCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9cb0"));
  }
}, [['components/auth-create-component']]]);
});
require('components/auth.js');
__wxRoute = 'components/gaoyia-parse/components/wxParseAudio';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gaoyia-parse/components/wxParseAudio.js';

define('components/gaoyia-parse/components/wxParseAudio.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gaoyia-parse/components/wxParseAudio"], {
  "16a8": function a8(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      name: "wxParseAudio",
      props: {
        node: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      }
    };
    t.default = a;
  },
  "5f9e": function f9e(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("a48a"),
        u = e("937c");

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    var o = e("2877"),
        c = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "937c": function c(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("16a8"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  a48a: function a48a(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gaoyia-parse/components/wxParseAudio-create-component', {
  'components/gaoyia-parse/components/wxParseAudio-create-component': function componentsGaoyiaParseComponentsWxParseAudioCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5f9e"));
  }
}, [['components/gaoyia-parse/components/wxParseAudio-create-component']]]);
});
require('components/gaoyia-parse/components/wxParseAudio.js');
__wxRoute = 'components/gaoyia-parse/components/wxParseImg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gaoyia-parse/components/wxParseImg.js';

define('components/gaoyia-parse/components/wxParseImg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gaoyia-parse/components/wxParseImg"], {
  "4d44": function d44(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "wxParseImg",
      data: function data() {
        return {
          newStyleStr: "",
          preview: !0
        };
      },
      inject: ["parseWidth"],
      mounted: function mounted() {},
      props: {
        node: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      methods: {
        wxParseImgTap: function wxParseImgTap(t) {
          if (this.preview) {
            var e = t.currentTarget.dataset.src;

            if (e) {
              var n = this.$parent;

              while (!n.preview || "function" !== typeof n.preview) {
                n = n.$parent;
              }

              n.preview(e, t);
            }
          }
        },
        wxParseImgLoad: function wxParseImgLoad(t) {
          var e = t.currentTarget.dataset.src;

          if (e) {
            var n = t.mp.detail,
                a = n.width,
                i = n.height,
                r = this.wxAutoImageCal(a, i),
                o = r.imageheight,
                c = r.imageWidth,
                u = this.node.attr,
                d = u.padding,
                s = u.mode,
                f = this.node.styleStr,
                p = "widthFix" === s ? "" : "height: ".concat(o, "px;");
            this.newStyleStr = "".concat(f, "; ").concat(p, "; width: ").concat(c, "px; padding: 0 ").concat(+d, "px;");
          }
        },
        wxAutoImageCal: function wxAutoImageCal(t, e) {
          var n = this.parseWidth.value,
              a = {};

          if (t < 60 || e < 60) {
            var i = this.node.attr.src,
                r = this.$parent;

            while (!r.preview || "function" !== typeof r.preview) {
              r = r.$parent;
            }

            r.removeImageUrl(i), this.preview = !1;
          }

          return t > n ? (a.imageWidth = n, a.imageheight = n * (e / t)) : (a.imageWidth = t, a.imageheight = e), a;
        }
      }
    };
    e.default = a;
  },
  "929d": function d(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  ec5a: function ec5a(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("4d44"),
        i = n.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  fde3: function fde3(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("929d"),
        i = n("ec5a");

    for (var r in i) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    var o = n("2877"),
        c = Object(o["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gaoyia-parse/components/wxParseImg-create-component', {
  'components/gaoyia-parse/components/wxParseImg-create-component': function componentsGaoyiaParseComponentsWxParseImgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fde3"));
  }
}, [['components/gaoyia-parse/components/wxParseImg-create-component']]]);
});
require('components/gaoyia-parse/components/wxParseImg.js');
__wxRoute = 'components/gaoyia-parse/components/wxParseTable';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gaoyia-parse/components/wxParseTable.js';

define('components/gaoyia-parse/components/wxParseTable.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gaoyia-parse/components/wxParseTable"], {
  "5fe1": function fe1(t, e, n) {},
  7167: function _(t, e, n) {
    "use strict";

    var a = n("5fe1"),
        r = n.n(a);
    r.a;
  },
  "8aa8": function aa8(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "wxParseTable",
      props: {
        node: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      inject: ["parseSelect"],
      data: function data() {
        return {
          nodes: []
        };
      },
      mounted: function mounted() {
        this.nodes = this.loadNode([this.node]);
      },
      methods: {
        loadNode: function loadNode(t) {
          var e = [],
              n = !0,
              a = !1,
              r = void 0;

          try {
            for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
              var c = o.value;

              if ("element" == c.node) {
                var l = {
                  name: c.tag,
                  attrs: {
                    class: c.classStr
                  },
                  children: c.nodes ? this.loadNode(c.nodes) : []
                };
                e.push(l);
              } else "text" == c.node && e.push({
                type: "text",
                text: c.text
              });
            }
          } catch (s) {
            a = !0, r = s;
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (a) throw r;
            }
          }

          return e;
        }
      }
    };
    e.default = a;
  },
  ac76: function ac76(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("fc7c"),
        r = n("d59c");

    for (var o in r) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    n("7167");
    var u = n("2877"),
        c = Object(u["a"])(r["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  d59c: function d59c(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("8aa8"),
        r = n.n(a);

    for (var o in a) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(o);
    }

    e["default"] = r.a;
  },
  fc7c: function fc7c(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gaoyia-parse/components/wxParseTable-create-component', {
  'components/gaoyia-parse/components/wxParseTable-create-component': function componentsGaoyiaParseComponentsWxParseTableCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ac76"));
  }
}, [['components/gaoyia-parse/components/wxParseTable-create-component']]]);
});
require('components/gaoyia-parse/components/wxParseTable.js');
__wxRoute = 'components/gaoyia-parse/components/wxParseTemplate0';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gaoyia-parse/components/wxParseTemplate0.js';

define('components/gaoyia-parse/components/wxParseTemplate0.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gaoyia-parse/components/wxParseTemplate0"], {
  8113: function _(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("b36b"),
        r = t.n(a);

    for (var o in a) {
      "default" !== o && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(o);
    }

    n["default"] = r.a;
  },
  "967f": function f(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("eaeb"),
        r = t("8113");

    for (var o in r) {
      "default" !== o && function (e) {
        t.d(n, e, function () {
          return r[e];
        });
      }(o);
    }

    var u = t("2877"),
        s = Object(u["a"])(r["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = s.exports;
  },
  b36b: function b36b(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var a = function a() {
      return Promise.resolve().then(t.bind(null, "967f"));
    },
        r = function r() {
      return t.e("components/gaoyia-parse/components/wxParseImg").then(t.bind(null, "fde3"));
    },
        o = function o() {
      return t.e("components/gaoyia-parse/components/wxParseVideo").then(t.bind(null, "6c90"));
    },
        u = function u() {
      return t.e("components/gaoyia-parse/components/wxParseAudio").then(t.bind(null, "5f9e"));
    },
        s = function s() {
      return t.e("components/gaoyia-parse/components/wxParseTable").then(t.bind(null, "ac76"));
    },
        i = {
      name: "wxParseTemplate",
      props: {
        node: {}
      },
      components: {
        wxParseTemplate: a,
        wxParseImg: r,
        wxParseVideo: o,
        wxParseAudio: u,
        wxParseTable: s
      },
      methods: {
        wxParseATap: function wxParseATap(e, n) {
          var t = n.currentTarget.dataset.href;

          if (t) {
            var a = this.$parent;

            while (!a.preview || "function" !== typeof a.preview) {
              a = a.$parent;
            }

            a.navigate(t, n, e);
          }
        }
      }
    };

    n.default = i;
  },
  eaeb: function eaeb(e, n, t) {
    "use strict";

    var a = function a() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        r = [];

    t.d(n, "a", function () {
      return a;
    }), t.d(n, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gaoyia-parse/components/wxParseTemplate0-create-component', {
  'components/gaoyia-parse/components/wxParseTemplate0-create-component': function componentsGaoyiaParseComponentsWxParseTemplate0CreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("967f"));
  }
}, [['components/gaoyia-parse/components/wxParseTemplate0-create-component']]]);
});
require('components/gaoyia-parse/components/wxParseTemplate0.js');
__wxRoute = 'components/gaoyia-parse/components/wxParseVideo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gaoyia-parse/components/wxParseVideo.js';

define('components/gaoyia-parse/components/wxParseVideo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gaoyia-parse/components/wxParseVideo"], {
  "6b41": function b41(e, n, t) {
    "use strict";

    var r = function r() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        u = [];

    t.d(n, "a", function () {
      return r;
    }), t.d(n, "b", function () {
      return u;
    });
  },
  "6c90": function c90(e, n, t) {
    "use strict";

    t.r(n);
    var r = t("6b41"),
        u = t("e996");

    for (var a in u) {
      "default" !== a && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(a);
    }

    var o = t("2877"),
        c = Object(o["a"])(u["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  7287: function _(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = {
      name: "wxParseVideo",
      props: {
        node: {}
      }
    };
    n.default = r;
  },
  e996: function e996(e, n, t) {
    "use strict";

    t.r(n);
    var r = t("7287"),
        u = t.n(r);

    for (var a in r) {
      "default" !== a && function (e) {
        t.d(n, e, function () {
          return r[e];
        });
      }(a);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gaoyia-parse/components/wxParseVideo-create-component', {
  'components/gaoyia-parse/components/wxParseVideo-create-component': function componentsGaoyiaParseComponentsWxParseVideoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6c90"));
  }
}, [['components/gaoyia-parse/components/wxParseVideo-create-component']]]);
});
require('components/gaoyia-parse/components/wxParseVideo.js');
__wxRoute = 'components/gaoyia-parse/parse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/gaoyia-parse/parse.js';

define('components/gaoyia-parse/parse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/gaoyia-parse/parse"], {
  "68d6": function d6(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("7ab5"),
        a = n.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    e["default"] = a.a;
  },
  "7ab5": function ab5(t, e, n) {
    "use strict";

    (function (t, i) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = o(n("de9f"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var r = function r() {
        return n.e("components/gaoyia-parse/components/wxParseTemplate0").then(n.bind(null, "967f"));
      },
          s = {
        name: "wxParse",
        props: {
          userSelect: {
            type: String,
            default: "text"
          },
          imgOptions: {
            type: [Object, Boolean],
            default: function _default() {
              return {
                loop: !1,
                indicator: "number",
                longPressActions: !1
              };
            }
          },
          loading: {
            type: Boolean,
            default: !1
          },
          className: {
            type: String,
            default: ""
          },
          content: {
            type: String,
            default: ""
          },
          noData: {
            type: String,
            default: '<div style="color: red;">数据不能为空</div>'
          },
          startHandler: {
            type: Function,
            default: function _default() {
              return function (t) {
                t.attr.class = null, t.attr.style = null;
              };
            }
          },
          endHandler: {
            type: Function,
            default: null
          },
          charsHandler: {
            type: Function,
            default: null
          },
          imageProp: {
            type: Object,
            default: function _default() {
              return {
                mode: "aspectFit",
                padding: 0,
                lazyLoad: !1,
                domain: ""
              };
            }
          }
        },
        components: {
          wxParseTemplate: r
        },
        data: function data() {
          return {
            nodes: {},
            imageUrls: [],
            wxParseWidth: {
              value: 0
            }
          };
        },
        computed: {},
        mounted: function mounted() {},
        methods: {
          setHtml: function setHtml() {
            var t = this;
            this.getWidth().then(function (e) {
              t.wxParseWidth.value = e;
            });
            var e = this.content,
                n = this.noData,
                i = this.imageProp,
                o = this.startHandler,
                r = this.endHandler,
                s = this.charsHandler,
                u = e || n,
                l = {
              start: o,
              end: r,
              chars: s
            },
                c = (0, a.default)(u, l, i, this);
            this.imageUrls = c.imageUrls, this.nodes = [], c.nodes.forEach(function (e) {
              setTimeout(function () {
                t.nodes.push(e);
              }, 0);
            });
          },
          getWidth: function getWidth() {
            var e = this;
            return new Promise(function (n, i) {
              t.createSelectorQuery().in(e).select(".wxParse").fields({
                size: !0,
                scrollOffset: !0
              }, function (t) {
                n(t.width);
              }).exec();
            });
          },
          navigate: function navigate(t, e, n) {
            console.log(i(t, n, " at components/gaoyia-parse/parse.vue:173")), this.$emit("navigate", t, e);
          },
          preview: function preview(e, n) {
            this.imageUrls.length && "boolean" !== typeof this.imgOptions && t.previewImage({
              current: e,
              urls: this.imageUrls,
              loop: this.imgOptions.loop,
              indicator: this.imgOptions.indicator,
              longPressActions: this.imgOptions.longPressActions
            }), this.$emit("preview", e, n);
          },
          removeImageUrl: function removeImageUrl(t) {
            var e = this.imageUrls;
            e.splice(e.indexOf(t), 1);
          }
        },
        provide: function provide() {
          return {
            parseWidth: this.wxParseWidth,
            parseSelect: this.userSelect
          };
        },
        watch: {
          content: function content() {
            this.setHtml();
          }
        }
      };

      e.default = s;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  ae83: function ae83(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("f0df"),
        a = n("68d6");

    for (var o in a) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(o);
    }

    var r = n("2877"),
        s = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  f0df: function f0df(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/gaoyia-parse/parse-create-component', {
  'components/gaoyia-parse/parse-create-component': function componentsGaoyiaParseParseCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ae83"));
  }
}, [['components/gaoyia-parse/parse-create-component']]]);
});
require('components/gaoyia-parse/parse.js');
__wxRoute = 'components/loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loading.js';

define('components/loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Component({});
});
require('components/loading.js');
__wxRoute = 'components/mix-list-cell';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-list-cell.js';

define('components/mix-list-cell.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-list-cell"], {
  "0d03": function d03(t, n, e) {
    "use strict";

    var i = e("b52a"),
        u = e.n(i);
    u.a;
  },
  2369: function _(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "4a05": function a05(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("78c0"),
        u = e.n(i);

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "4ad5": function ad5(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("2369"),
        u = e("4a05");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("0d03");
    var a = e("2877"),
        o = Object(a["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "78c0": function c0(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      data: function data() {
        return {
          typeList: {
            left: "icon-zuo",
            right: "icon-you",
            up: "icon-shang",
            down: "icon-xia"
          }
        };
      },
      props: {
        icon: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          default: "标题"
        },
        tips: {
          type: String,
          default: ""
        },
        navigateType: {
          type: String,
          default: "right"
        },
        border: {
          type: String,
          default: "b-b"
        },
        hoverClass: {
          type: String,
          default: "cell-hover"
        },
        iconColor: {
          type: String,
          default: "#333"
        }
      },
      methods: {
        eventClick: function eventClick() {
          this.$emit("eventClick");
        }
      }
    };
    n.default = i;
  },
  b52a: function b52a(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-list-cell-create-component', {
  'components/mix-list-cell-create-component': function componentsMixListCellCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4ad5"));
  }
}, [['components/mix-list-cell-create-component']]]);
});
require('components/mix-list-cell.js');
__wxRoute = 'components/tki-qrcode/tki-qrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tki-qrcode/tki-qrcode.js';

define('components/tki-qrcode/tki-qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-qrcode/tki-qrcode"], {
  4669: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          o = u(n("3ee2"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var a = {
        name: "tki-qrcode",
        props: {
          cid: {
            type: String,
            default: "tki-qrcode-canvas"
          },
          size: {
            type: Number,
            default: 200
          },
          unit: {
            type: String,
            default: "upx"
          },
          show: {
            type: Boolean,
            default: !0
          },
          val: {
            type: String,
            default: ""
          },
          background: {
            type: String,
            default: "#ffffff"
          },
          foreground: {
            type: String,
            default: "#000000"
          },
          pdground: {
            type: String,
            default: "#000000"
          },
          icon: {
            type: String,
            default: ""
          },
          iconSize: {
            type: Number,
            default: 40
          },
          lv: {
            type: Number,
            default: 3
          },
          onval: {
            type: Boolean,
            default: !1
          },
          loadMake: {
            type: Boolean,
            default: !1
          },
          usingComponents: {
            type: Boolean,
            default: !0
          },
          showLoading: {
            type: Boolean,
            default: !0
          },
          loadingText: {
            type: String,
            default: "二维码生成中"
          }
        },
        data: function data() {
          return {
            result: ""
          };
        },
        methods: {
          _makeCode: function _makeCode() {
            var e = this;
            this._empty(this.val) ? t.showToast({
              title: "二维码内容不能为空",
              icon: "none",
              duration: 2e3
            }) : i = new o.default({
              context: e,
              canvasId: e.cid,
              usingComponents: e.usingComponents,
              showLoading: e.showLoading,
              loadingText: e.loadingText,
              text: e.val,
              size: e.cpSize,
              background: e.background,
              foreground: e.foreground,
              pdground: e.pdground,
              correctLevel: e.lv,
              image: e.icon,
              imageSize: e.iconSize,
              cbResult: function cbResult(t) {
                e._result(t);
              }
            });
          },
          _clearCode: function _clearCode() {
            this._result(""), i.clear();
          },
          _saveCode: function _saveCode() {
            var e = this;
            "" != this.result && t.saveImageToPhotosAlbum({
              filePath: e.result,
              success: function success() {
                t.showToast({
                  title: "二维码保存成功",
                  icon: "success",
                  duration: 2e3
                });
              }
            });
          },
          _result: function _result(t) {
            this.result = t, this.$emit("result", t);
          },
          _empty: function _empty(t) {
            var e = typeof t,
                n = !1;
            return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), n;
          }
        },
        watch: {
          size: function size(t, e) {
            var n = this;
            t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function () {
              n._makeCode();
            }, 100));
          },
          val: function val(t, e) {
            var n = this;
            this.onval && (t == e || this._empty(t) || setTimeout(function () {
              n._makeCode();
            }, 0));
          }
        },
        computed: {
          cpSize: function cpSize() {
            return "upx" == this.unit ? t.upx2px(this.size) : this.size;
          }
        },
        mounted: function mounted() {
          var t = this;
          this.loadMake && (this._empty(this.val) || setTimeout(function () {
            t._makeCode();
          }, 0));
        }
      };
      e.default = a;
    }).call(this, n("6e42")["default"]);
  },
  "4dd0": function dd0(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  "5c5f": function c5f(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("4dd0"),
        o = n("79a5");

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    n("75ff");
    var a = n("2877"),
        r = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  "75ff": function ff(t, e, n) {
    "use strict";

    var i = n("eb94"),
        o = n.n(i);
    o.a;
  },
  "79a5": function a5(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("4669"),
        o = n.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    e["default"] = o.a;
  },
  eb94: function eb94(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tki-qrcode/tki-qrcode-create-component', {
  'components/tki-qrcode/tki-qrcode-create-component': function componentsTkiQrcodeTkiQrcodeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5c5f"));
  }
}, [['components/tki-qrcode/tki-qrcode-create-component']]]);
});
require('components/tki-qrcode/tki-qrcode.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "04bd": function bd(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("efb4"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "44d7": function d7(t, n, e) {},
  "5edc": function edc(t, n, e) {
    "use strict";

    var o = e("44d7"),
        u = e.n(o);
    u.a;
  },
  "6c91": function c91(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  d05d: function d05d(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("6c91"),
        u = e("04bd");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("5edc");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  efb4: function efb4(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "uni-load-more",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d05d"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-number-box';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-number-box.js';

define('components/uni-number-box.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-number-box"], {
  "1a8f": function a8f(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return n;
    });
  },
  "43d6": function d6(t, e, i) {
    "use strict";

    var a = i("7571"),
        n = i.n(a);
    n.a;
  },
  7571: function _(t, e, i) {},
  "780a": function a(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("d171"),
        n = i.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    e["default"] = n.a;
  },
  d171: function d171(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "uni-number-box",
      props: {
        isMax: {
          type: Boolean,
          default: !1
        },
        isMin: {
          type: Boolean,
          default: !1
        },
        index: {
          type: Number,
          default: 0
        },
        value: {
          type: Number,
          default: 0
        },
        min: {
          type: Number,
          default: -1 / 0
        },
        max: {
          type: Number,
          default: 1 / 0
        },
        step: {
          type: Number,
          default: 1
        },
        disabled: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          inputValue: this.value,
          minDisabled: !1,
          maxDisabled: !1
        };
      },
      created: function created() {
        this.maxDisabled = this.isMax, this.minDisabled = this.isMin;
      },
      computed: {},
      watch: {
        inputValue: function inputValue(t) {
          var e = {
            number: t,
            index: this.index
          };
          this.$emit("eventChange", e);
        }
      },
      methods: {
        _calcValue: function _calcValue(t) {
          var e = this._getDecimalScale(),
              i = this.inputValue * e,
              a = 0,
              n = this.step * e;

          "subtract" === t ? (a = i - n, a <= this.min && (this.minDisabled = !0), a < this.min && (a = this.min), a < this.max && !0 === this.maxDisabled && (this.maxDisabled = !1)) : "add" === t && (a = i + n, a >= this.max && (this.maxDisabled = !0), a > this.max && (a = this.max), a > this.min && !0 === this.minDisabled && (this.minDisabled = !1)), a !== i && (this.inputValue = a / e);
        },
        _getDecimalScale: function _getDecimalScale() {
          var t = 1;
          return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), t;
        },
        _onBlur: function _onBlur(t) {
          var e = t.detail.value;
          e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
        }
      }
    };
    e.default = a;
  },
  fa35: function fa35(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("1a8f"),
        n = i("780a");

    for (var u in n) {
      "default" !== u && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(u);
    }

    i("43d6");
    var s = i("2877"),
        l = Object(s["a"])(n["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = l.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-number-box-create-component', {
  'components/uni-number-box-create-component': function componentsUniNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fa35"));
  }
}, [['components/uni-number-box-create-component']]]);
});
require('components/uni-number-box.js');
__wxRoute = 'components/Winglau14-lotusAddress/Winglau14-lotusAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Winglau14-lotusAddress/Winglau14-lotusAddress.js';

define('components/Winglau14-lotusAddress/Winglau14-lotusAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Winglau14-lotusAddress/Winglau14-lotusAddress"], {
  "121c": function c(t, e, i) {
    "use strict";

    var s = i("cad9"),
        n = i.n(s);
    n.a;
  },
  "293e": function e(t, _e, i) {
    "use strict";

    i.r(_e);
    var s = i("7832"),
        n = i.n(s);

    for (var o in s) {
      "default" !== o && function (t) {
        i.d(_e, t, function () {
          return s[t];
        });
      }(o);
    }

    _e["default"] = n.a;
  },
  7832: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var s = i("cf8d"),
        n = {
      props: ["lotusAddressData"],
      data: function data() {
        return {
          visible: !1,
          province: [],
          city: [],
          town: [],
          provinceName: "",
          cityName: "",
          townName: "",
          type: 0,
          pChoseIndex: -1,
          cChoseIndex: -1,
          tChoseIndex: -1
        };
      },
      methods: {
        cancelPicker: function cancelPicker() {
          var t = this.getTarId(this.provinceName),
              e = this.getTarId(this.cityName),
              i = this.getTarId(this.townName);
          this.visible = !1, this.$emit("choseVal", {
            province: this.provinceName,
            provinceCode: t,
            city: this.cityName,
            cityCode: e,
            town: this.townName,
            townCode: i,
            isChose: 0,
            visible: !1
          });
        },
        chosedVal: function chosedVal() {
          this.type = 1;
          var t = this.getTarId(this.provinceName),
              e = this.getTarId(this.cityName),
              i = this.getTarId(this.townName);
          this.visible = !1;
          var s = 0;
          (this.provinceName && this.cityName || this.provinceName && this.cityName && this.townName) && (s = 1), this.$emit("choseVal", {
            province: this.provinceName,
            provinceCode: t,
            city: this.cityName,
            cityCode: e,
            town: this.townName,
            townCode: i,
            isChose: s,
            visible: !1
          });
        },
        getTarId: function getTarId(t, e) {
          var i = 0;
          return s.lotusAddressJson.map(function (e, s) {
            e.name === t && (i = e.value);
          }), i;
        },
        getCityArr: function getCityArr(t) {
          var e = [];
          return s.lotusAddressJson.map(function (i, s) {
            i.parent === t && e.push(i.name);
          }), e;
        },
        getTownArr: function getTownArr(t) {
          var e = [];
          return s.lotusAddressJson.map(function (i, s) {
            s > 34 && i.parent === t && e.push(i.name);
          }), e;
        },
        initFn: function initFn() {
          var t = this;
          this.province.length || s.lotusAddressJson.map(function (e, i) {
            i <= 34 && t.province.push(e.name);
          });
          var e = this._props.lotusAddressData.provinceName,
              i = this._props.lotusAddressData.cityName,
              n = this._props.lotusAddressData.townName;

          if (e && (this.pChoseIndex = this.getTarIndex(this.province, e)), e && i) {
            var o = this.getTarId(e);
            this.city = this.getCityArr(o), this.cChoseIndex = this.getTarIndex(this.city, i);
          }

          if (e && i && n) {
            var a = this.getTarId(i);
            this.town = this.getTownArr(a), this.tChoseIndex = this.getTarIndex(this.town, n);
          }

          e || i || n || (this.pChoseIndex = -1, this.cChoseIndex = -1, this.tChoseIndex = -1, this.city = [], this.town = []);
        },
        getChosedData: function getChosedData() {
          var t = this.getTarId(this.provinceName, "province");
          this.city = this.getCityArr(t);
          var e = this.getTarId(this.cityName, "city");
          this.town = this.getTownArr(e), this.provinceName && (this.pChoseIndex = this.getTarIndex(this.province, this.provinceName)), this.cityName && (this.cChoseIndex = this.getTarIndex(this.city, this.cityName)), this.townName && (this.tChoseIndex = this.getTarIndex(this.town, this.townName));
        },
        clickPicker: function clickPicker(t, e, i) {
          0 === t && (this.pChoseIndex = e, this.provinceName = i, this.cChoseIndex = -1, this.tChoseIndex = -1, this.cityName = "", this.townName = ""), 1 === t && (this.cChoseIndex = e, this.cityName = i, this.tChoseIndex = -1, this.townName = ""), 2 === t && (this.tChoseIndex = e, this.townName = i), this.getChosedData();
        },
        getTarIndex: function getTarIndex(t, e) {
          var i = 0;
          return t.map(function (t, s) {
            t === e && (i = s);
          }), i;
        }
      },
      computed: {
        checkStatus: function checkStatus() {
          var t = null,
              e = this;
          return e.visible || (e.visible = e._props.lotusAddressData.visible, e.provinceName = e._props.lotusAddressData.provinceName, e.cityName = e._props.lotusAddressData.cityName, e.townName = e._props.lotusAddressData.townName, e.initFn(), t = e.visible), t;
        }
      }
    };
    e.default = n;
  },
  a0cc: function a0cc(t, e, i) {
    "use strict";

    i.r(e);
    var s = i("cebb"),
        n = i("293e");

    for (var o in n) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    i("121c");
    var a = i("2877"),
        r = Object(a["a"])(n["default"], s["a"], s["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  cad9: function cad9(t, e, i) {},
  cebb: function cebb(t, e, i) {
    "use strict";

    var s = function s() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        n = [];

    i.d(e, "a", function () {
      return s;
    }), i.d(e, "b", function () {
      return n;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Winglau14-lotusAddress/Winglau14-lotusAddress-create-component', {
  'components/Winglau14-lotusAddress/Winglau14-lotusAddress-create-component': function componentsWinglau14LotusAddressWinglau14LotusAddressCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a0cc"));
  }
}, [['components/Winglau14-lotusAddress/Winglau14-lotusAddress-create-component']]]);
});
require('components/Winglau14-lotusAddress/Winglau14-lotusAddress.js');
__wxRoute = 'components/wm-poster/wm-poster';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wm-poster/wm-poster.js';

define('components/wm-poster/wm-poster.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wm-poster/wm-poster"], {
  3262: function _(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "38eab": function eab(t, e, n) {},
  "3c72": function c72(t, e, n) {
    "use strict";

    var r = n("38eab"),
        i = n.n(r);
    i.a;
  },
  6414: function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("3262"),
        i = n("c00c");

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    n("3c72");
    var c = n("2877"),
        l = Object(c["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  b4178: function b4178(t, e, n) {
    "use strict";

    (function (t, r) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          a = c(n("a34a"));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function l(t, e, n, r, i, a, c) {
        try {
          var l = t[a](c),
              u = l.value;
        } catch (o) {
          return void n(o);
        }

        l.done ? e(u) : Promise.resolve(u).then(r, i);
      }

      function u(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);

            function c(t) {
              l(a, r, i, c, u, "next", t);
            }

            function u(t) {
              l(a, r, i, c, u, "throw", t);
            }

            c(void 0);
          });
        };
      }

      var o = {
        name: "wm-poster",
        props: {
          CanvasID: {
            Type: String,
            default: "PosterCanvas"
          },
          imgSrc: {
            Type: String,
            default: ""
          },
          QrSrc: {
            Type: String,
            default: ""
          },
          Title: {
            Type: String,
            default: ""
          },
          TitleColor: {
            Type: String,
            default: "#333333"
          },
          LineType: {
            Type: [String, Boolean],
            default: !0
          },
          PriceTxt: {
            Type: String,
            default: "99.99"
          },
          PriceColor: {
            Type: String,
            default: "#e31d1a"
          },
          OriginalTxt: {
            Type: String,
            default: "199.99"
          },
          OriginalColor: {
            Type: String,
            default: "#b8b8b8"
          },
          Width: {
            Type: String,
            default: 750
          },
          CanvasBg: {
            Type: String,
            default: "#ffffff"
          },
          Referrer: {
            Type: String,
            default: "quitter推荐给你"
          },
          ViewDetails: {
            Type: String,
            default: "长按或扫描识别二维码"
          }
        },
        data: function data() {
          return {
            canvasW: 0,
            canvasH: 0,
            canvasImgSrc: "",
            ctx: null,
            imgSrcurl: ""
          };
        },
        methods: {
          OnCanvas: function () {
            var e = u(a.default.mark(function e() {
              var n, r, c, l, u, o, s, f, x, p, d, g, T;
              return a.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return t.showLoading({
                        title: "正在生成海报"
                      }), i.ctx = t.createCanvasContext(i.CanvasID, this), n = t.upx2px(i.Width), r = t.upx2px(30), c = t.upx2px(150), l = 0, e.next = 6, i.getImageInfo({
                        imgSrc: i.imgSrc
                      });

                    case 6:
                      return u = e.sent, e.next = 9, i.getImageInfo({
                        imgSrc: i.QrSrc
                      });

                    case 9:
                      o = e.sent, s = [u.width, u.height], f = [o.width, o.height], x = n - 2 * r, s[0] != x && (s[1] = Math.floor(x / s[0] * s[1]), s[0] = x), f[0] != c && (f[1] = Math.floor(c / f[0] * f[1]), f[0] = c), i.canvasW = n, i.canvasH = s[1] + f[1] + 128, i.ctx.setFillStyle(i.CanvasBg), i.ctx.fillRect(0, 0, n, i.canvasH), i.ctx.drawImage(u.path, r, r, s[0], s[1]), i.ctx.setFontSize(t.upx2px(28)), i.ctx.setFillStyle(i.TitleColor), p = 0, d = s[1] + 2 * r + 10, g = 1, T = 0;

                    case 26:
                      if (!(T < i.Title.length)) {
                        e.next = 48;
                        break;
                      }

                      if (l += i.ctx.measureText(i.Title[T]).width, !(l > s[0])) {
                        e.next = 44;
                        break;
                      }

                      if (2 != g || !i.LineType) {
                        e.next = 37;
                        break;
                      }

                      return i.ctx.fillText(i.Title.substring(p, T - 8) + "...", r, d), l = 0, p = T, g++, e.abrupt("break", 48);

                    case 37:
                      i.ctx.fillText(i.Title.substring(p, T), r, d), l = 0, d += 20, p = T, g++;

                    case 42:
                      e.next = 45;
                      break;

                    case 44:
                      T == i.Title.length - 1 && (i.ctx.fillText(i.Title.substring(p, T + 1), r, d), l = 0);

                    case 45:
                      T++, e.next = 26;
                      break;

                    case 48:
                      l = r, d += t.upx2px(60), 1 == g && (d += 20), "" != i.PriceTxt && (i.ctx.setFillStyle(i.PriceColor), i.ctx.setFontSize(t.upx2px(38)), i.ctx.fillText(i.PriceTxt, l, d), l += i.ctx.measureText(i.PriceTxt).width + t.upx2px(10)), "" != i.PriceTxt && "" != i.OriginalTxt && (i.ctx.setFillStyle(i.OriginalColor), i.ctx.setFontSize(t.upx2px(24)), i.ctx.fillText(i.OriginalTxt, l, d)), i.ctx.strokeStyle = i.OriginalColor, i.ctx.moveTo(l, d - t.upx2px(10)), i.ctx.lineTo(l + i.ctx.measureText(i.OriginalTxt).width, d - t.upx2px(10)), i.ctx.stroke(), d += t.upx2px(20), i.ctx.drawImage(o.path, s[0] - f[0] + r, d, f[0], f[1]), i.ctx.setFillStyle(i.TitleColor), i.ctx.setFontSize(t.upx2px(30)), i.ctx.fillText(i.Referrer, r, d + f[1] / 2), i.ctx.setFillStyle(i.OriginalColor), i.ctx.setFontSize(t.upx2px(24)), i.ctx.fillText(i.ViewDetails, r, d + f[1] / 2 + 20), setTimeout(function () {
                        i.ctx.draw(!0, function (t) {
                          i.getNewImage();
                        }), t.hideLoading();
                      }, 600);

                    case 66:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getImageInfo: function () {
            var e = u(a.default.mark(function e(n) {
              var r;
              return a.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return r = n.imgSrc, e.abrupt("return", new Promise(function (e, n) {
                        t.getImageInfo({
                          src: r,
                          success: function success(t) {
                            e(t);
                          },
                          fail: function fail(t) {
                            n(t);
                          }
                        });
                      }));

                    case 2:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getNewImage: function getNewImage() {
            t.canvasToTempFilePath({
              canvasId: i.CanvasID,
              quality: 1,
              complete: function complete(t) {
                console.log(r(t.tempFilePath, " at components/wm-poster/wm-poster.vue:205")), i.imgSrcurl = t.tempFilePath;
              }
            }, this);
          },
          saveImg: function saveImg() {
            i.$emit("save", i.imgSrcurl);
          }
        },
        mounted: function mounted() {
          i = this, i.OnCanvas();
        }
      };
      e.default = o;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  c00c: function c00c(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("b4178"),
        i = n.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    e["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/wm-poster/wm-poster-create-component', {
  'components/wm-poster/wm-poster-create-component': function componentsWmPosterWmPosterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6414"));
  }
}, [['components/wm-poster/wm-poster-create-component']]]);
});
require('components/wm-poster/wm-poster.js');
__wxRoute = 'pages/product/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/share.js';

define('pages/product/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/share"], {
  "59f7": function f7(t, e, a) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = o(a("454f"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var s = {
        data: function data() {
          return {
            transform: "translateY(50vh)",
            timer: 0,
            showposter: !1,
            backgroundColor: "rgba(0,0,0,0)",
            show: !1,
            config: {}
          };
        },
        props: {
          contentHeight: {
            type: Number,
            default: 0
          },
          hasTabbar: {
            type: Boolean,
            default: !1
          },
          shareList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          sharedata: {
            type: Object,
            default: function _default() {
              return {};
            }
          }
        },
        computed: {
          self_sharedata: function self_sharedata() {
            return this.sharedata;
          }
        },
        created: function created() {
          var e = t.upx2px(this.contentHeight) + "px";
          this.config = {
            height: e,
            transform: "translateY(".concat(e, ")"),
            backgroundColor: "rgba(0,0,0,.4)"
          }, this.transform = this.config.transform;
        },
        methods: {
          toggleMask: function toggleMask() {
            var e = this;

            if (this.showposter = !1, 1 != this.timer) {
              if (this.timer = 1, setTimeout(function () {
                e.timer = 0;
              }, 500), this.show) return this.transform = this.config.transform, this.backgroundColor = "rgba(0,0,0,0)", void setTimeout(function () {
                e.show = !1, e.hasTabbar && t.showTabBar();
              }, 200);
              this.show = !0, this.hasTabbar ? t.hideTabBar({
                success: function success() {
                  setTimeout(function () {
                    e.backgroundColor = e.config.backgroundColor, e.transform = "translateY(0px)";
                  }, 10);
                }
              }) : setTimeout(function () {
                e.backgroundColor = e.config.backgroundColor, e.transform = "translateY(0px)";
              }, 10);
            }
          },
          makehaibao: function makehaibao() {
            this.toggleMask();
            var e = {
              imgSrc: this.sharedata.gallery[0],
              Title: this.sharedata.name + " / " + this.sharedata.brief,
              PriceTxt: "￥" + this.sharedata.retailPrice,
              OriginalTxt: "原价￥" + this.sharedata.counterPrice,
              Referrer: "您的好友 " + t.getStorageSync("userInfo").nickName + " 推荐好物给您"
            };
            t.navigateTo({
              url: "/pages/product/shareqrcode?content=" + JSON.stringify(e)
            });
          },
          getqrcode: function getqrcode(t) {
            var e = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" + t;
            r.default.httpAcesstoken(e).then(function (t) {
              console.log(n(t.data, " at pages/product/share.vue:147"));
            });
          },
          acesstokenurls: function acesstokenurls() {
            var e = this,
                a = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx51775e4f2a1f1c78&secret=9b430e6a08f798c03cde84758448d35f";
            r.default.httpAcesstoken(a).then(function (a) {
              a.data.access_token && (t.setStorageSync("access_token", a.data.access_token), e.getqrcode());
            });
          },
          stopPrevent: function stopPrevent() {}
        }
      };
      e.default = s;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  },
  "649b": function b(t, e, a) {
    "use strict";

    var n = a("ced8"),
        r = a.n(n);
    r.a;
  },
  "7e4e": function e4e(t, e, a) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    a.d(e, "a", function () {
      return n;
    }), a.d(e, "b", function () {
      return r;
    });
  },
  ced8: function ced8(t, e, a) {},
  d467: function d467(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("7e4e"),
        r = a("ebc1");

    for (var o in r) {
      "default" !== o && function (t) {
        a.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    a("649b");
    var s = a("2877"),
        i = Object(s["a"])(r["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = i.exports;
  },
  ebc1: function ebc1(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("59f7"),
        r = a.n(n);

    for (var o in n) {
      "default" !== o && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    e["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/product/share-create-component', {
  'pages/product/share-create-component': function pagesProductShareCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d467"));
  }
}, [['pages/product/share-create-component']]]);
});
require('pages/product/share.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"27d5":function(t,n,e){"use strict";e.r(n);var a=e("de46"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},5271:function(t,n,e){"use strict";e.r(n);var a=e("7bcc"),o=e("27d5");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("a6bb");var r=e("2877"),u=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},"7bcc":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},a6bb:function(t,n,e){"use strict";var a=e("d097"),o=e.n(a);o.a},d097:function(t,n,e){},d950:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");a(e("66fd"));var n=a(e("5271"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},de46:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a")),o=r(e("454f")),i=r(e("8e4a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,o,i,r){try{var u=t[i](r),s=u.value}catch(c){return void e(c)}u.done?n(s):Promise.resolve(s).then(a,o)}function s(t){return function(){var n=this,e=arguments;return new Promise(function(a,o){var i=t.apply(n,e);function r(t){u(i,a,o,r,s,"next",t)}function s(t){u(i,a,o,r,s,"throw",t)}r(void 0)})}}var c={data:function(){return{haslogin:!0,loadModal:!1,agentId:7813,titleNViewBackground:"",swiperCurrent:0,brandList:[],groupons:[],carouselList:[],goodsList:[],newGoodsList:[],topicList:[],grouponList:[],sortList:[{name:"优惠券",img:"/static/temp/coupon.png",url:"/pages/mycoupon/couponlist",opentype:"navigateTo"},{name:"拼团",img:"/static/temp/02.gif",url:"/pages/brandDetail/groupbuy",opentype:"navigateTo"},{name:"人气推荐",img:"/static/temp/new_nav_3.png",url:"/pages/category/hot?type=isHot",opentype:"navigateTo"},{name:"品牌商",img:"/static/temp/04.gif",url:"/pages/brandDetail/brand",opentype:"navigateTo"}],sortList1:[{name:"专题精选",img:"/static/temp/3.png",url:"/pages/brandDetail/topiclist",opentype:"navigateTo"},{name:"新品",img:"/static/temp/03.gif",url:"/pages/category/hot?type=isNew",opentype:"navigateTo"},{name:"全部分类",img:"/static/temp/05.gif",url:"/pages/category/category",opentype:"switchTab"}]}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){this.loadData(!0)},methods:{onShareAppMessage:function(t){i.default.sharebtn(t)},loadData:function(){var n=s(a.default.mark(function n(e){var i,r=this;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:t.showLoading({title:"正在加载"}),i="/home/index",o.default.httpget(i).then(function(n){var a=n.data,o=a.data;0==a.errno&&(r.carouselList=o.banner,r.goodsList=o.hotGoodsList,r.newGoodsList=o.newGoodsList,r.grouponList=o.grouponList,r.topicList=o.topicList,r.groupons=o.grouponList,r.brandList=o.brandList,t.setStorageSync("couponList",o.couponList),t.setStorageSync("goodsList",r.goodsList)),e&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(n){t.hideLoading(),e&&t.stopPullDownRefresh()});case 3:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),swiperChange:function(t){var n=t.detail.current;this.swiperCurrent=n,this.titleNViewBackground=this.carouselList[n].background},navToDetailPage:function(n){var e=n.id;t.navigateTo({url:"/pages/product/product?id=".concat(e,"&appid=88989")})},gopage:function(n){n.appid?t.navigateToMiniProgram({appId:n.appid}):"switchTab"!==n.opentype?t.navigateTo({url:n.url}):t.switchTab({url:n.url})},navToSearch:function(){t.navigateTo({url:"/pages/product/searchlist"})},navToWebView:function(t){}}};n.default=c}).call(this,e("6e42")["default"])}},[["d950","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"1a1a":function(e,t,n){"use strict";n.r(t);var o=n("9f9c"),a=n("1e4a");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("aa61");var r=n("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"1e4a":function(e,t,n){"use strict";n.r(t);var o=n("7cd0"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"7cd0":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("a34a")),i=n("2f62"),r=c(n("454f"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,o,a,i,r){try{var c=e[i](r),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(o,a)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function r(e){d(i,o,a,r,c,"next",e)}function c(e){d(i,o,a,r,c,"throw",e)}r(void 0)})}}var l=function(){return n.e("components/auth").then(n.bind(null,"9cb0"))},p=function(){return Promise.all([n.e("common/vendor"),n.e("components/gaoyia-parse/parse")]).then(n.bind(null,"ae83"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("pages/product/share")]).then(n.bind(null,"d467"))},g={components:{sharepage:f,auth:l,uParse:p},data:function(){return{hasphone:!0,specClass:"none",specSelected:[],tmpSpecText:"请选择",checkedSpecPrice:0,haslogin:!1,id:"",goods:{sortOrder:0,counterPrice:0,retailPrice:0},number:1,topicList:[],productList:[{number:0}],goodsnum:0,responsdata:{attribute:[]},brand:{},comment:{data:[]},sharedata:{},imgList:[],descontent:"",checkedGroupon_id:"",groupon:[{checked:!1}],specificationList:[],appid:"",sharepageurl:""}},onLoad:function(){var t=h(a.default.mark(function t(n){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.id=decodeURIComponent(n.id),this.appid=decodeURIComponent(n.appid),this.sharepageurl="/pages/procuct/product?id="+this.id+"&appid="+this.appid,e.setStorageSync("sharepageurl",this.sharepageurl),this.loadData();case 5:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}(),onPullDownRefresh:function(){this.productdata(!0)},computed:s({},(0,i.mapState)(["hasLogin"])),methods:s({},(0,i.mapMutations)(["login"]),{onShareAppMessage:function(e){return{title:this.goods.name,path:"/pages/product/product?id="+this.id+"&appid="+this.appid}},gobrand:function(){e.navigateTo({url:"/pages/brandDetail/brandDetail?id="+this.brand.id})},loadData:function(){e.showLoading({title:"正在加载"}),""==e.getStorageSync("hasphone")&&(this.hasphone=!1),""!==e.getStorageSync("haslogin")&&(this.haslogin=!0),this.productdata()},productdata:function(t){var n=this,o="/goods/detail?id="+this.id;r.default.httpget(o).then(function(o){var a=o.data;e.hideLoading(),0==a.errno&&(n.responsdata=a.data,n.brand=n.responsdata.brand,n.goods=n.responsdata.info,n.productList=n.responsdata.productList,n.comment=n.responsdata.comment,n.specificationList=n.responsdata.specificationList,n.groupon=n.responsdata.groupon,n.descontent=n.goods.detail,n.sharedata=n.goods),t&&e.stopPullDownRefresh()}).catch(function(n){e.hideLoading(),t&&e.stopPullDownRefresh()});var a="/goods/related?id="+this.id;r.default.httpget(a).then(function(e){var t=e.data;0==t.errno&&(n.topicList=t.data.list)}).catch(function(e){});var i="/cart/goodscount";r.default.httpget(i).then(function(e){var t=e.data;0==t.errno&&(n.goodsnum=t.data)}).catch(function(e){})},clickGroupon:function(e){e.goodsName;for(var t=e.id,n=this.groupon,o=0;o<n.length;o++)n[o].id==t?n[o].checked?n[o].checked=!1:(n[o].checked=!0,this.checkedGroupon_id=n[o].id):n[o].checked=!1;this.groupon=n},toggleSpec:function(){var e=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){e.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},cutNumber:function(){this.number=this.number-1>1?this.number-1:1},addNumber:function(){this.number=this.number+1},addToCart:function(t){var n=this;if("hide"===this.specClass)this.specClass="show";else{if(!this.isCheckedAllSpec())return e.showToast({title:"请选择完整规格",icon:"none"}),!1;var o=this.getCheckedProductItem(this.getCheckedSpecKey());if(!o||o.length<=0)return e.showToast({title:"没有库存",icon:"none"}),!1;var a=o[0];if(a.number<=0)return e.showToast({title:"没有库存",icon:"none"}),!1;e.showLoading({title:"正在加载"});var i="/cart/add";t&&(i="/cart/fastadd"),r.default.httppost(i,{goodsId:n.goods.id,number:n.number,productId:a.id}).then(function(o){var a=o.data;0==a.errno?(e.setStorageSync("grouponRulesId",n.checkedGroupon_id),t?n.buy(a.data):e.showToast({title:"添加成功"}),n.specClass,n.goodsnum=a.data,n.toggleSpec()):501==a.errno?e.navigateTo({url:"../public/login"}):e.showToast({title:a.errmsg,icon:"none"}),e.hideLoading()})}},clickSkuValue:function(e){for(var t=e.specification,n=e.id,o=this.specificationList,a=0;a<o.length;a++)if(o[a].name===t)for(var i=0;i<o[a].valueList.length;i++)o[a].valueList[i].id==n?o[a].valueList[i].checked?o[a].valueList[i].checked=!1:o[a].valueList[i].checked=!0:o[a].valueList[i].checked=!1;this.specificationList=o,this.changeSpecInfo()},changeSpecInfo:function(){var e=this.getCheckedSpecValue(),t=e.filter(function(e){return 0!=e.valueId}).map(function(e){return e.valueText});if(t.length>0?this.tmpSpecText=t.join("　"):this.tmpSpecText="请选择规格数量",this.isCheckedAllSpec()){this.checkedSpecText=this.tmpSpecText;var n=this.getCheckedProductItem(this.getCheckedSpecKey());if(!n||n.length<=0)return this.soldout=!0,void console.error(o("规格所对应货品不存在"," at pages/product/product.vue:459"));var a=n[0];a.number>0?(this.checkedSpecPrice=a.price,this.soldout=!1):(this.checkedSpecPrice=this.goods.retailPrice,this.soldout=!0)}else this.checkedSpecText="规格数量选择",this.checkedSpecPrice=this.goods.retailPrice,this.soldout=!1},getCheckedProductItem:function(e){return this.productList.filter(function(t){return t.specifications.toString()==e.toString()})},isCheckedAllSpec:function(){return!this.getCheckedSpecValue().some(function(e){if(0==e.valueId)return!0})},getCheckedSpecKey:function(){var e=this.getCheckedSpecValue().map(function(e){return e.valueText});return e},getCheckedSpecValue:function(){for(var e=[],t=this.specificationList,n=0;n<t.length;n++){for(var o={name:t[n].name,valueId:0,valueText:""},a=0;a<t[n].valueList.length;a++)t[n].valueList[a].checked&&(o.valueId=t[n].valueList[a].id,o.valueText=t[n].valueList[a].value);e.push(o)}return e},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){var t=this;e.showLoading({title:"请稍后"});var n="/collect/addordelete";r.default.httppost(n,{type:0,valueId:this.id}).then(function(n){var o=n.data;0==o.errno?(t.responsdata.userHasCollect=!t.responsdata.userHasCollect,t.responsdata.userHasCollect?e.showToast({title:"收藏成功",icon:"none"}):e.showToast({title:"取消收藏",icon:"none"})):501==o.errno&&e.navigateTo({url:"../public/login"}),e.hideLoading()}).catch(function(t){e.hideLoading()})},buy:function(t){e.setStorageSync("cartId",t),e.navigateTo({url:"/pages/order/createOrder"})},navto:function(){e.navigateTo({url:"/pages/commentlist/index?id=".concat(this.id)})},navtocart:function(){e.reLaunch({url:"/pages/cart/cart"})},navToDetailPage:function(t){var n=t.id;e.navigateTo({url:"/pages/product/product?id=".concat(n)})}})};t.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},"9f9c":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},aa61:function(e,t,n){"use strict";var o=n("e1f5"),a=n.n(o);a.a},c7c4:function(e,t,n){"use strict";(function(e){n("d82e"),n("921b");o(n("66fd"));var t=o(n("1a1a"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e1f5:function(e,t,n){}},[["c7c4","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/product/searchlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/searchlist.js';

define('pages/product/searchlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/searchlist"],{"016b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"1ee0":function(t,e,n){"use strict";var o=n("c622"),r=n.n(o);r.a},"61c0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("454f"));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"d05d"))},i={components:{uniLoadMore:a},data:function(){return{cateMaskState:0,currentpage:1,loadModal:!0,searchtxt:"",loadingType:"more",filterIndex:0,cateId:0,priceOrder:"asc",cateList:[],goodsList:[],sort:0}},created:function(){this.searchinput()},onPullDownRefresh:function(){this.currentpage=1,this.searchinput(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.searchinput()},methods:{searchinput:function(e){var n=this;setTimeout(function(){t.showLoading({title:"正在加载"});var r="/goods/list?keyword="+n.searchtxt+"&page="+n.currentpage+"&limit=10&sort=name&order="+n.priceOrder+"&categoryId=0";o.default.httpget(r).then(function(o){var r=o.data;0==r.errno&&((e||2==n.filterIndex)&&(n.goodsList=[]),n.goodsList=n.goodsList.concat(r.data.list),n.totalPages=r.data.pages),n.loadModal=!1,t.hideLoading(),e&&t.stopPullDownRefresh()}).catch(function(n){e&&t.stopPullDownRefresh(),t.hideLoading()})},100)},tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.sort=e,this.priceOrder=2===e&&"asc"===this.priceOrder?"desc":"asc",t.pageScrollTo({duration:300,scrollTop:0}),this.searchinput())},navToDetailPage:function(e){var n=e.id;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=i}).call(this,n("6e42")["default"])},9554:function(t,e,n){"use strict";n.r(e);var o=n("016b"),r=n("bc9f");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("1ee0");var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},bc9f:function(t,e,n){"use strict";n.r(e);var o=n("61c0"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=r.a},c622:function(t,e,n){},eb12:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");o(n("66fd"));var e=o(n("9554"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["eb12","common/runtime","common/vendor"]]]);
});
require('pages/product/searchlist.js');
__wxRoute = 'pages/product/shareqrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/shareqrcode.js';

define('pages/product/shareqrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/shareqrcode"],{"07e2":function(t,e,n){},"3fc8":function(t,e,n){"use strict";n.r(e);var o=n("9761"),c=n("c324");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("a2ff");var a=n("2877"),i=Object(a["a"])(c["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"439d":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/wm-poster/wm-poster")]).then(n.bind(null,"6414"))},r=function(){return Promise.all([n.e("common/vendor"),n.e("components/tki-qrcode/tki-qrcode")]).then(n.bind(null,"5c5f"))},a={components:{wmPoster:c,tkiQrcode:r},data:function(){return{content:{imgSrc:"",QrSrc:"",Title:"",PriceTxt:"",OriginalTxt:"",Referrer:""},sharepageurl:"",obj:{}}},onLoad:function(e){this.content=JSON.parse(e.content),this.content.QrSrc="https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png",console.log(t(this.content," at pages/product/shareqrcode.vue:52")),this.sharepageurl=o.getStorageSync("sharepageurl")},methods:{onShareAppMessage:function(t){return{title:this.content.Title,path:this.sharepageurl}},save:function(t){this.getImageInfo(t)},getImageInfo:function(t){o.showLoading({title:"请稍后",mask:!1}),o.getImageInfo({src:t,success:function(t){o.hideLoading(),o.saveImageToPhotosAlbum({filePath:t.path,success:function(){o.showToast({title:"图片保存成功",icon:"none",duration:2200}),setTimeout(function(){o.navigateBack()},2200)}})}})}}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},"577c":function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");o(n("66fd"));var e=o(n("3fc8"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9761:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c})},a2ff:function(t,e,n){"use strict";var o=n("07e2"),c=n.n(o);c.a},c324:function(t,e,n){"use strict";n.r(e);var o=n("439d"),c=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=c.a}},[["577c","common/runtime","common/vendor"]]]);
});
require('pages/product/shareqrcode.js');
__wxRoute = 'pages/set/set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/set/set.js';

define('pages/set/set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"19de":function(t,n,e){"use strict";e.r(n);var o=e("1b81"),a=e("273c");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("bb42");var u=e("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},"1b81":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"222a":function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");o(e("66fd"));var n=o(e("19de"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"273c":function(t,n,e){"use strict";e.r(n);var o=e("6196"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},6196:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){r(t,n,e[n])})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u={data:function(){return{}},methods:a({},(0,o.mapMutations)(["logout"]),{navTo:function(n){t.navigateTo({url:n})},removeStorage:function(){t.clearStorageSync(),this.logout(),this.$api.msg("已清除缓存！"),t.navigateBack()},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),t.removeStorageSync("haslogin"),t.navigateBack())}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=u}).call(this,e("6e42")["default"])},b307:function(t,n,e){},bb42:function(t,n,e){"use strict";var o=e("b307"),a=e.n(o);a.a}},[["222a","common/runtime","common/vendor"]]]);
});
require('pages/set/set.js');
__wxRoute = 'pages/webview/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/webview/index.js';

define('pages/webview/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/webview/index"],{"33de":function(e,t,n){"use strict";n.r(t);var u=n("de9a"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a},"7c8a":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},de9a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{url:"",webviewStyles:{progress:{color:"#FF3333"}}}},onLoad:function(e){this.url=e.url},methods:{}};t.default=u},f8a7:function(e,t,n){"use strict";n.r(t);var u=n("7c8a"),r=n("33de");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var o=n("2877"),f=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},ff75:function(e,t,n){"use strict";(function(e){n("d82e"),n("921b");u(n("66fd"));var t=u(n("f8a7"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["ff75","common/runtime","common/vendor"]]]);
});
require('pages/webview/index.js');
__wxRoute = 'pages/commentlist/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/commentlist/index.js';

define('pages/commentlist/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commentlist/index"],{1783:function(t,n,e){"use strict";var i=e("3079"),o=e.n(i);o.a},3079:function(t,n,e){},5690:function(t,n,e){"use strict";e.r(n);var i=e("f3bb"),o=e("85f9");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("1783");var a=e("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},"85f9":function(t,n,e){"use strict";e.r(n);var i=e("d0da"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},d0da:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a")),u=a(e("454f"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,o,u,a){try{var r=t[u](a),c=r.value}catch(s){return void e(s)}r.done?n(c):Promise.resolve(c).then(i,o)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var u=t.apply(n,e);function a(t){r(u,i,o,a,c,"next",t)}function c(t){r(u,i,o,a,c,"throw",t)}a(void 0)})}}var s={data:function(){return{commentList:[],optionsid:"",picList:[]}},onLoad:function(){var t=c(o.default.mark(function t(n){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.optionsid=n.id,this.getload();case 2:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),onPullDownRefresh:function(){this.getload(!0)},methods:{getload:function(n){var e=this;t.showLoading({title:"正在加载"});var i="/comment/list?valueId="+this.optionsid+"&type=0&limit=100&page=1&showType=0";u.default.httpget(i).then(function(i){var o=i.data;0==o.errno&&(e.commentList=o.data),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){n&&t.stopPullDownRefresh(),t.hideLoading()})},previewimage:function(n){t.previewImage({current:n,urls:this.picList,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log(i("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片"," at pages/commentlist/index.vue:77"))},fail:function(t){console.log(i(t.errMsg," at pages/commentlist/index.vue:80"))}}})}}};n.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},f13e:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");i(e("66fd"));var n=i(e("5690"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f3bb:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}},[["f13e","common/runtime","common/vendor"]]]);
});
require('pages/commentlist/index.js');
__wxRoute = 'pages/user/help';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/help.js';

define('pages/user/help.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/help"],{"10b8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("454f"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{questionlist:[],totalPages:1,currentpage:1}},onLoad:function(t){this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{loadData:function(n){var e=this;t.showLoading({title:"正在加载"});var u="/issue/list?page="+this.currentpage+"&limit=10";a.default.httpget(u).then(function(a){var u=a.data;0==u.errno?(n&&(e.questionlist=[]),e.questionlist=e.questionlist.concat(u.data.list),e.totalPages=u.data.pages):t.showToast({title:u.errmsg,icon:"none"}),n&&t.stopPullDownRefresh(),t.hideLoading()})}}};n.default=o}).call(this,e("6e42")["default"])},"1bd6":function(t,n,e){"use strict";e.r(n);var a=e("10b8"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},"2ada":function(t,n,e){},"3c2d":function(t,n,e){"use strict";e.r(n);var a=e("dc45"),u=e("1bd6");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("dd75");var i=e("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},db1b:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");a(e("66fd"));var n=a(e("3c2d"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},dc45:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},dd75:function(t,n,e){"use strict";var a=e("2ada"),u=e.n(a);u.a}},[["db1b","common/runtime","common/vendor"]]]);
});
require('pages/user/help.js');
__wxRoute = 'pages/fx/apply';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/apply.js';

define('pages/fx/apply.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/apply"],{"690c":function(t,e,n){"use strict";var a=n("8a76"),i=n.n(a);i.a},7886:function(t,e,n){"use strict";n.r(e);var a=n("ce21"),i=n("a808");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("690c");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"8a76":function(t,e,n){},a808:function(t,e,n){"use strict";n.r(e);var a=n("c765"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},b116:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("7886"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c765:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{inputid:1,allmoney:0,carouselList:[{url:"../../static/temp/fxbanner.jpg"},{url:"../../static/temp/fxbanner.jpg"},{url:"../../static/temp/fxbanner.jpg"}],moneyinput:"",username:"",userId:"",mobile:""}},onLoad:function(e){this.userId=e.id,t.showModal({title:"",content:"您还不是分销商，请先提交申请",success:function(e){e.confirm||t.navigateBack()}})},onPullDownRefresh:function(){this.init(!0)},onShareAppMessage:function(t){return{title:"",imageUrl:"/static/temp/banner3.jpg",path:"/pages/index/index"}},methods:{subdrawbtn:function(){if(""==this.username)return t.showToast({title:"请输入姓名",icon:"none"}),!1;if(""==this.mobile||!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.mobile))return t.showToast({title:"请输入正确的手机号吗",icon:"none"}),!1;var e=t.getStorageSync("userInfo"),n=t.getStorageSync("userId"),i={headImage:e.avatarUrl,nickName:e.nickName,name:this.username,mobile:this.mobile,level:0,retailUserId:n};a.default.httppostfx("/retailUser/add",i).then(function(e){var n=e.data;200==n.code?(t.showToast({title:"提交申请成功！",icon:"none"}),setTimeout(function(){t.navigateBack()},1e3)):t.showToast({title:n.errmsg,icon:"none"}),t.hideLoading()})}}};e.default=o}).call(this,n("6e42")["default"])},ce21:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["b116","common/runtime","common/vendor"]]]);
});
require('pages/fx/apply.js');
__wxRoute = 'pages/fx/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/index.js';

define('pages/fx/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/index"],{2847:function(t,e,n){"use strict";n.r(e);var a=n("e6d0"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},"2b5e":function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("7e98"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4edc":function(t,e,n){},"6e29":function(t,e,n){"use strict";var a=n("4edc"),u=n.n(a);u.a},"7e98":function(t,e,n){"use strict";n.r(e);var a=n("a510"),u=n("2847");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("6e29");var o=n("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},a510:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},e6d0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("454f"));function u(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{user:{withdrawMoney:"",headImage:""}}},onLoad:function(t){this.init()},onPullDownRefresh:function(){this.init(!0)},methods:{init:function(e){var n=this;t.showLoading({title:"正在加载"});var u=t.getStorageSync("userId");a.default.httppostfx("/retailUser/detail",{retailUserId:u}).then(function(a){var u=a.data;200==u.code?n.user=u.data:t.showToast({title:u.errmsg,icon:"none"}),e&&t.stopPullDownRefresh(),t.hideLoading()})},viewWithdraw:function(){t.navigateTo({url:"/pages/fx/withdraw"})},goto:function(e){t.navigateTo({url:e})}}};e.default=i}).call(this,n("6e42")["default"])}},[["2b5e","common/runtime","common/vendor"]]]);
});
require('pages/fx/index.js');
__wxRoute = 'pages/fx/myteam';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/myteam.js';

define('pages/fx/myteam.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/myteam"],{"02a5":function(t,e,a){},1910:function(t,e,a){"use strict";a.r(e);var r=a("3438"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);e["default"]=n.a},3438:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("454f"));function n(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{tabCurrentIndex:0,totalPages:1,currentpage:1,refresh:!0,reflash:!1,orderList:[],navList:[{state:0,text:"一级分销",orderList:[],num:"0"},{state:1,text:"二级分销",orderList:[],num:"0"},{state:2,text:"三级分销",orderList:[],num:"0"}]}},onLoad:function(){this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.refresh=!0,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{navTo:function(e){t.navigateTo({url:"/pages/order/orderDetail?id=".concat(e)})},loadData:function(e){var a=this;t.showLoading({title:"正在加载"});var n=t.getStorageSync("userId"),i="/retailUser/getSubRetailUserlist";r.default.httppostfx(i,{retailUserId:n}).then(function(r){var n=r.data;200==n.code?(a.refresh&&(a.orderList=[]),a.orderList=n.data,a.navList[0].num=a.orderList.firstRetailUserList.length,a.navList[1].num=a.orderList.secondRetailUserList.length,a.navList[2].num=a.orderList.thirdRetailUserList.length,a.totalPages=n.data.pages,a.refresh=!1):t.showToast({title:n.errmsg,icon:"none"}),e&&t.stopPullDownRefresh(),t.hideLoading()})},tabClick:function(t){this.refresh=!0,this.tabCurrentIndex=t,this.currentpage=1,this.loadData()},deleteOrder:function(e){var a=this;t.showLoading({title:"请稍后"}),setTimeout(function(){a.orderList.splice(e,1),t.hideLoading()},600)},cancelOrder:function(e){var a=this;t.showLoading({title:"请稍后"}),setTimeout(function(){var r=a.orderStateExp(9),n=r.stateTip,i=r.stateTipColor;e=Object.assign(e,{state:9,stateTip:n,stateTipColor:i});var o=a.navList[1].orderList,s=o.findIndex(function(t){return t.id===e.id});-1!==s&&o.splice(s,1),t.hideLoading()},600)},orderStateExp:function(t){var e="",a="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",a="#909399";break}return{stateTip:e,stateTipColor:a}}}};e.default=i}).call(this,a("6e42")["default"])},"44e3":function(t,e,a){"use strict";var r=a("02a5"),n=a.n(r);n.a},"4cc8":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},b417:function(t,e,a){"use strict";a.r(e);var r=a("4cc8"),n=a("1910");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("44e3");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},b845:function(t,e,a){"use strict";(function(t){a("d82e"),a("921b");r(a("66fd"));var e=r(a("b417"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["b845","common/runtime","common/vendor"]]]);
});
require('pages/fx/myteam.js');
__wxRoute = 'pages/fx/qr';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/qr.js';

define('pages/fx/qr.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/qr"],{"08ea":function(t,n,e){"use strict";var o=e("0bba"),c=e.n(o);c.a},"0bba":function(t,n,e){},3556:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");o(e("66fd"));var n=o(e("74c8"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"52f1":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return c})},"74c8":function(t,n,e){"use strict";e.r(n);var o=e("52f1"),c=e("c600");for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);e("08ea");var u=e("2877"),i=Object(u["a"])(c["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"7a3c":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/wm-poster/wm-poster")]).then(e.bind(null,"6414"))},a={components:{wmPoster:c},data:function(){return{content:{imgSrc:"",QrSrc:"",Title:"",PriceTxt:"",OriginalTxt:"",Referrer:""},obj:{}}},onLoad:function(n){this.content=JSON.parse(n.content),this.content.QrSrc="https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png",console.log(t(this.content," at pages/fx/qr.vue:29"))},methods:{save:function(t){this.getImageInfo(t)},getImageInfo:function(t){o.showLoading({title:"请稍后",mask:!1}),o.getImageInfo({src:t,success:function(t){o.hideLoading(),o.saveImageToPhotosAlbum({filePath:t.path,success:function(){o.showToast({title:"图片保存成功",icon:"none",duration:2200}),setTimeout(function(){o.navigateBack()},2200)}})}})}}};n.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},c600:function(t,n,e){"use strict";e.r(n);var o=e("7a3c"),c=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=c.a}},[["3556","common/runtime","common/vendor"]]]);
});
require('pages/fx/qr.js');
__wxRoute = 'pages/fx/withdrawlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/withdrawlist.js';

define('pages/fx/withdrawlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/withdrawlist"],{"0e8d":function(t,e,a){"use strict";var r=a("e59b"),n=a.n(r);n.a},3143:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},"55e0":function(t,e,a){"use strict";(function(t){a("d82e"),a("921b");r(a("66fd"));var e=r(a("c65a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},c5ae:function(t,e,a){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{tabCurrentIndex:0,totalPages:1,currentpage:1,refresh:!0,reflash:!1,orderList:[],navList:[{state:0,text:"全部",orderList:[]},{state:1,text:"待审核",orderList:[]},{state:2,text:"待打款",orderList:[]},{state:3,text:"已打款",orderList:[]},{state:4,text:"无效",orderList:[]}]}},onLoad:function(e){this.tabCurrentIndex=e.state,console.log(t(this.tabCurrentIndex," at pages/fx/withdrawlist.vue:110")),this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.refresh=!0,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{navTo:function(t){r.navigateTo({url:"/pages/order/orderDetail?id=".concat(t)})},loadData:function(t){var e=this;r.showLoading({title:"正在加载"});var a="/order/list?showType="+this.tabCurrentIndex+"&page="+this.currentpage+"&limit=10";n.default.httpget(a).then(function(a){var n=a.data;0==n.errno?(e.refresh&&(e.orderList=[]),e.orderList=e.orderList.concat(n.data.list),e.totalPages=n.data.pages,e.refresh=!1):r.showToast({title:n.errmsg,icon:"none"}),t&&r.stopPullDownRefresh(),r.hideLoading()})},tabClick:function(t){this.refresh=!0,this.tabCurrentIndex=t,this.currentpage=1,this.loadData()},deleteOrder:function(t){var e=this;r.showLoading({title:"请稍后"}),setTimeout(function(){e.orderList.splice(t,1),r.hideLoading()},600)},cancelOrder:function(t){var e=this;r.showLoading({title:"请稍后"}),setTimeout(function(){var a=e.orderStateExp(9),n=a.stateTip,i=a.stateTipColor;t=Object.assign(t,{state:9,stateTip:n,stateTipColor:i});var o=e.navList[1].orderList,s=o.findIndex(function(e){return e.id===t.id});-1!==s&&o.splice(s,1),r.hideLoading()},600)},orderStateExp:function(t){var e="",a="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",a="#909399";break}return{stateTip:e,stateTipColor:a}}}};e.default=o}).call(this,a("0de9")["default"],a("6e42")["default"])},c65a:function(t,e,a){"use strict";a.r(e);var r=a("3143"),n=a("faaf");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("0e8d");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},e59b:function(t,e,a){},faaf:function(t,e,a){"use strict";a.r(e);var r=a("c5ae"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);e["default"]=n.a}},[["55e0","common/runtime","common/vendor"]]]);
});
require('pages/fx/withdrawlist.js');
__wxRoute = 'pages/fx/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/order.js';

define('pages/fx/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/order"],{"1dc4":function(t,e,r){"use strict";var a=r("356c"),n=r.n(a);n.a},"356c":function(t,e,r){},"74d0":function(t,e,r){"use strict";r.r(e);var a=r("9cb3"),n=r.n(a);for(var i in a)"default"!==i&&function(t){r.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},"9cb3":function(t,e,r){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{tabCurrentIndex:0,totalPages:1,currentpage:1,refresh:!0,reflash:!1,orderList:[],navList:[{state:0,text:"全部",orderList:[]},{state:1,text:"待付款",orderList:[]},{state:2,text:"已付款",orderList:[]},{state:4,text:"已完成",orderList:[]}]}},onLoad:function(e){this.tabCurrentIndex=e.state,console.log(t(this.tabCurrentIndex," at pages/fx/order.vue:105")),this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.refresh=!0,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{navTo:function(t){a.navigateTo({url:"/pages/order/orderDetail?id=".concat(t)})},loadData:function(t){var e=this;a.showLoading({title:"正在加载"});var r="/order/list?showType="+this.tabCurrentIndex+"&page="+this.currentpage+"&limit=10";n.default.httpget(r).then(function(r){var n=r.data;0==n.errno?(e.refresh&&(e.orderList=[]),e.orderList=e.orderList.concat(n.data.list),e.totalPages=n.data.pages,e.refresh=!1):a.showToast({title:n.errmsg,icon:"none"}),t&&a.stopPullDownRefresh(),a.hideLoading()})},tabClick:function(t){this.refresh=!0,this.tabCurrentIndex=t,this.currentpage=1,this.loadData()},deleteOrder:function(t){var e=this;a.showLoading({title:"请稍后"}),setTimeout(function(){e.orderList.splice(t,1),a.hideLoading()},600)},cancelOrder:function(t){var e=this;a.showLoading({title:"请稍后"}),setTimeout(function(){var r=e.orderStateExp(9),n=r.stateTip,i=r.stateTipColor;t=Object.assign(t,{state:9,stateTip:n,stateTipColor:i});var o=e.navList[1].orderList,s=o.findIndex(function(e){return e.id===t.id});-1!==s&&o.splice(s,1),a.hideLoading()},600)},orderStateExp:function(t){var e="",r="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",r="#909399";break}return{stateTip:e,stateTipColor:r}}}};e.default=o}).call(this,r("0de9")["default"],r("6e42")["default"])},b190:function(t,e,r){"use strict";r.r(e);var a=r("b9f4"),n=r("74d0");for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);r("1dc4");var o=r("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},b9f4:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n})},d0d4:function(t,e,r){"use strict";(function(t){r("d82e"),r("921b");a(r("66fd"));var e=a(r("b190"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])}},[["d0d4","common/runtime","common/vendor"]]]);
});
require('pages/fx/order.js');
__wxRoute = 'pages/fx/withdraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fx/withdraw.js';

define('pages/fx/withdraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/withdraw"],{"1bbb":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},3704:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");o(e("66fd"));var n=o(e("eb67"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"9afd":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("454f"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r={data:function(){return{inputid:2,money:"",moneyinput:"",username:"",account:"",allmoney:0,payFrom:3,minmoney:10,showtab1:!1,showtab2:!1,showtab3:!1,showtab4:!1}},onLoad:function(t){this.init()},onPullDownRefresh:function(){this.init(!0)},methods:{init:function(n){var e=this;t.showLoading({title:"正在加载"});var i=t.getStorageSync("userId");this.showtab1=this.showtab2=this.showtab3=this.showtab4=!1,a.default.httppostfx("/retailUser/detail",{retailUserId:i}).then(function(n){var a=n.data;200==a.code?(e.allmoney=a.data.withdrawMoney,e.minmoney=a.data.minMoney,console.log(o(e.allmoney," at pages/fx/withdraw.vue:109"))):t.showToast({title:a.errmsg,icon:"none"}),t.hideLoading()}),a.default.httppostfx("/retailSet/detail",{retailSetId:1}).then(function(o){var a=o.data;if(200==a.code){var i=a.data.type;-1!==i.indexOf("1")&&(e.showtab1=!0),-1!==i.indexOf("2")&&(e.showtab2=!0),-1!==i.indexOf("3")&&(e.showtab3=!0),-1!==i.indexOf("4")&&(e.showtab4=!0)}else t.showToast({title:a.errmsg,icon:"none"});t.hideLoading(),n&&t.stopPullDownRefresh()})},withdrawbtn:function(t){this.inputid=t,this.payFrom=t},allbtn:function(){console.log(o(this.money," at pages/fx/withdraw.vue:143")),this.money=this.allmoney,console.log(o(this.money," at pages/fx/withdraw.vue:145"))},subdrawbtn:function(){if(this.money<this.minmoney)return t.showToast({title:"每次提现金额不能少于".concat(this.minmoney,"元"),icon:"none"}),!1;if(this.money>this.allmoney)return t.showToast({title:"提现金额不能超过可提现余额",icon:"none"}),!1;if(1!==this.inputid&&(""==this.username||""==this.account))return t.showToast({title:"姓名和账号不能为空哦！",icon:"none"}),!1;var n=s({money:this.money,payFrom:this.payFrom},"money",this.money);a.default.httpPost("/withdraw/add",n).then(function(n){var e=n.data;0==e.errno?t.showToast({title:"提交申请成功！",icon:"none"}):t.showToast({title:e.errmsg,icon:"none"}),t.hideLoading()})}}};n.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},e4e5:function(t,n,e){"use strict";e.r(n);var o=e("9afd"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},e88a:function(t,n,e){"use strict";var o=e("f4c8"),a=e.n(o);a.a},eb67:function(t,n,e){"use strict";e.r(n);var o=e("1bbb"),a=e("e4e5");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("e88a");var s=e("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},f4c8:function(t,n,e){}},[["3704","common/runtime","common/vendor"]]]);
});
require('pages/fx/withdraw.js');
__wxRoute = 'pages/user/feedback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/feedback.js';

define('pages/user/feedback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/feedback"],{"0412":function(e,t,n){},1839:function(e,t,n){"use strict";(function(e){n("d82e"),n("921b");a(n("66fd"));var t=a(n("ad51"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"5e91":function(e,t,n){"use strict";var a=n("0412"),o=n.n(a);o.a},6211:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},8715:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("454f"));function i(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{array:["请选择反馈类型","商品相关","功能异常","优化建议","其他"],index:0,content:"",contentLength:0,mobile:"",hasPicture:!1,picUrls:[],files:[]}},onShareAppMessage:function(e){return{title:"贝贝商城",imageUrl:"/static/temp/banner3.jpg",path:"/pages/index/index"}},methods:{chooseImage:function(t){var n=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){n.files=n.files.concat(e.tempFilePaths),n.upload(e)}})},upload:function(t){var n=this,o=e.uploadFile({url:"http://mall.zhihuiyunqi.com/wx/storage/upload",filePath:t.tempFilePaths[0],name:"file",success:function(e){var t=JSON.parse(e.data);if(0===t.errno){var a=t.data.url;n.picUrls.push(a),n.hasPicture=!0}},fail:function(t){e.showModal({title:"错误",content:"上传失败",showCancel:!1})}});o.onProgressUpdate(function(e){console.log(a("上传进度",e.progress," at pages/user/feedback.vue:95")),console.log(a("已经上传的数据长度",e.totalBytesSent," at pages/user/feedback.vue:96")),console.log(a("预期需要上传的数据总长度",e.totalBytesExpectedToSend," at pages/user/feedback.vue:97"))})},previewImage:function(t){e.previewImage({current:t.currentTarget.id,urls:this.files})},bindPickerChange:function(e){this.index=e.detail.value},mobileInput:function(e){this.mobile=e.detail.value},contentInput:function(e){this.contentLength=e.detail.cursor,this.content=e.detail.value},clearMobile:function(e){this.mobile=""},submitFeedback:function(t){e.getStorageSync("haslogin")||e.navigateTo({url:"/pages/public/login"});var n=this;if(0==n.index)return e.showToast({title:"请选择反馈类型",icon:"none"}),!1;if(""==n.content)return e.showToast({title:"请输入反馈内容",icon:"none"}),!1;if(""==n.mobile||!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(n.mobile))return e.showToast({title:"请输入正确的手机号",icon:"none"}),!1;e.showLoading({title:"提交中...",mask:!0,success:function(){}});var a="/feedback/submit";o.default.httppost(a,{mobile:n.mobile,feedType:n.array[n.index],content:n.content,hasPicture:n.hasPicture,picUrls:n.picUrls}).then(function(t){e.hideLoading(),0===t.data.errno?e.showToast({title:"感谢您的反馈！",icon:"none",complete:function(){e.navigateBack()}}):e.showToast({title:t.data.errmsg,icon:"none"})})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},a04d:function(e,t,n){"use strict";n.r(t);var a=n("8715"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},ad51:function(e,t,n){"use strict";n.r(t);var a=n("6211"),o=n("a04d");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("5e91");var u=n("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports}},[["1839","common/runtime","common/vendor"]]]);
});
require('pages/user/feedback.js');
__wxRoute = 'pages/order/orderDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/orderDetail.js';

define('pages/order/orderDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderDetail"],{3847:function(e,t,o){},"3d4d":function(e,t,o){"use strict";o.r(t);var n=o("52f1a"),r=o("7884");for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);o("b8bc");var d=o("2877"),i=Object(d["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},"52f1a":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r})},7884:function(e,t,o){"use strict";o.r(t);var n=o("a2f8"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=r.a},a2f8:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(o("454f"));function a(e){return e&&e.__esModule?e:{default:e}}var d={data:function(){return{orderId:0,orderInfo:{},orderGoods:[],expressInfo:{},flag:!1,handleOption:{}}},onLoad:function(e){this.orderId=e.id,this.getOrderDetail()},onPullDownRefresh:function(){this.getOrderDetail(!0)},methods:{gobuy:function(t){e.redirectTo({url:"/pages/product/product?id="+t.goodsId})},gocomment:function(t){console.log(n(t," at pages/order/orderDetail.vue:120")),e.redirectTo({url:"/pages/order/comment?orderId="+t.orderId+"&type="+t.type+"&valueId="+t.goodsId})},expandDetail:function(){this.flag=!this.flag},getOrderDetail:function(t){var o=this;e.showLoading({title:"加载中"});var n="/order/detail?orderId="+this.orderId;r.default.httpget(n).then(function(n){var r=n.data;0==r.errno?(o.orderInfo=r.data.orderInfo,o.orderGoods=r.data.orderGoods,o.handleOption=r.data.orderInfo.handleOption):e.showToast({title:r.errmsg,icon:"none"}),t&&e.stopPullDownRefresh(),e.hideLoading()})},payOrder:function(){var t=this,o="/order/prepay";o="/order/prepayDouyin",r.default.httppost(o,{orderId:t.orderId,code:e.getStorageSync("code")}).then(function(o){if(0===o.data.errno){var r=o.data.data;console.log(n("支付过程开始"," at pages/order/orderDetail.vue:159")),e.requestPayment({timeStamp:r.timeStamp,nonceStr:r.nonceStr,package:r.packageValue,signType:r.signType,paySign:r.paySign,success:function(o){e.showToast({title:"支付成功",icon:"none"}),t.$api.prePage().loadData(0),e.navigateBack()},fail:function(t){e.showToast({title:"支付失败",icon:"none"})}})}else e.showToast({title:o.data.errmsg,icon:"none"})})},cancelOrder:function(){var t=this;e.showModal({title:"",content:"确定要取消此订单？",success:function(o){if(o.confirm){var n="/order/cancel";e.showLoading({title:"正在加载"}),r.default.httppost(n,{orderId:t.orderId}).then(function(o){var n=o.data;0==n.errno?(e.showToast({title:"取消订单成功"}),t.$api.prePage().loadData(0),e.navigateBack()):e.showToast({title:n.errmsg,icon:"none"}),e.hideLoading()})}}})},refundOrder:function(){var t=this;e.showModal({title:"",content:"确定要退款此订单吗？",success:function(o){if(o.confirm){var n="/order/refund";e.showLoading({title:"正在加载"}),r.default.httppost(n,{orderId:t.orderId}).then(function(o){var n=o.data;0==n.errno?(e.showToast({title:"已申请退款中！"}),t.$api.prePage().loadData(0),e.navigateBack()):e.showToast({title:n.errmsg,icon:"none"}),e.hideLoading()})}}})},deleteOrder:function(){var t=this;e.showModal({title:"",content:"确定要删除此订单？",success:function(o){if(o.confirm){var n="/order/delete";e.showLoading({title:"正在加载"}),r.default.httppost(n,{orderId:t.orderId}).then(function(o){var n=o.data;0==n.errno?(e.showToast({title:"删除订单成功"}),t.$api.prePage().loadData(0),e.navigateBack()):e.showToast({title:n.errmsg,icon:"none"}),e.hideLoading()})}}})},confirmOrder:function(){var t=this;e.showModal({title:"",content:"确认收货？",success:function(o){if(o.confirm){var n="/order/confirm";e.showLoading({title:"正在加载"}),r.default.httppost(n,{orderId:t.orderId}).then(function(o){var n=o.data;0==n.errno?(e.showToast({title:"确认收货成功"}),t.$api.prePage().loadData(0),e.navigateBack()):e.showToast({title:n.errmsg,icon:"none"}),e.hideLoading()})}}})}}};t.default=d}).call(this,o("6e42")["default"],o("0de9")["default"])},b8bc:function(e,t,o){"use strict";var n=o("3847"),r=o.n(n);r.a},e43e:function(e,t,o){"use strict";(function(e){o("d82e"),o("921b");n(o("66fd"));var t=n(o("3d4d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])}},[["e43e","common/runtime","common/vendor"]]]);
});
require('pages/order/orderDetail.js');
__wxRoute = 'pages/category/hot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/hot.js';

define('pages/category/hot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/hot"],{"098c":function(t,e,n){"use strict";n.r(e);var a=n("d9ea"),r=n("1ffa");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("276f");var i=n("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"1ffa":function(t,e,n){"use strict";n.r(e);var a=n("3611"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},"276f":function(t,e,n){"use strict";var a=n("a047"),r=n.n(a);r.a},3611:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a")),r=o(n("454f"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,o,i){try{var u=t[o](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var o=t.apply(e,n);function u(t){i(o,a,r,u,c,"next",t)}function c(t){i(o,a,r,u,c,"throw",t)}u(void 0)})}}var c={data:function(){return{bannerInfo:{imgUrl:"/static/category/c1.png",name:"大家都在买的"},categoryFilter:!1,filterCategory:[],goodsList:[],type:"hot",categoryId:0,currentSortType:"default",currentSort:"add_time",currentSortOrder:"desc",currentpage:1,totalPages:1,limit:10}},onLoad:function(){var t=u(a.default.mark(function t(e){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.type=e.type,this.loadData();case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onPullDownRefresh:function(){this.currentpage=1,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{loadData:function(e){var n=this;t.showLoading({title:"正在加载"});var a="/goods/list?isHot=true&page="+this.currentpage+"&limit=10&order=desc&sort=add_time&categoryId=0";"hot"!==this.type?(a="/goods/list?isNew=true&page="+this.currentpage+"&limit=10&order=desc&sort=add_time&categoryId=0",t.setNavigationBarTitle({title:"新品首发"})):t.setNavigationBarTitle({title:"人气推荐"}),r.default.httpget(a).then(function(a){var r=a.data;t.hideLoading(),0==r.errno&&(e&&(n.goodsList=[]),n.goodsList=n.goodsList.concat(r.data.list),n.totalPages=r.data.pages),e&&t.stopPullDownRefresh()})}}};e.default=c}).call(this,n("6e42")["default"])},a047:function(t,e,n){},d279:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("098c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d9ea:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}},[["d279","common/runtime","common/vendor"]]]);
});
require('pages/category/hot.js');
__wxRoute = 'pages/brandDetail/topiclist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/brandDetail/topiclist.js';

define('pages/brandDetail/topiclist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brandDetail/topiclist"],{"0bdc":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("454f"));function a(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{topiclist:[],currentpage:1,limit:10,totalPages:1}},onLoad:function(){this.gettopiclist()},onPullDownRefresh:function(){this.currentpage=1,this.gettopiclist(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.gettopiclist()},methods:{gettopiclist:function(n){t.showLoading({title:"加载中..."});var e=this;i.default.httpget("/topic/list?page="+this.currentpage+"&limit="+this.limit).then(function(i){0===i.data.errno&&(n&&(e.topiclist=[]),e.topiclist=e.topiclist.concat(i.data.data.list),e.totalPages=i.data.data.pages),n&&t.stopPullDownRefresh(),t.hideLoading()})}}};n.default=o}).call(this,e("6e42")["default"])},2465:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},3329:function(t,n,e){"use strict";e.r(n);var i=e("2465"),a=e("b851");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("d417");var u=e("2877"),c=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports},4700:function(t,n,e){},"778a":function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");i(e("66fd"));var n=i(e("3329"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},b851:function(t,n,e){"use strict";e.r(n);var i=e("0bdc"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},d417:function(t,n,e){"use strict";var i=e("4700"),a=e.n(i);a.a}},[["778a","common/runtime","common/vendor"]]]);
});
require('pages/brandDetail/topiclist.js');
__wxRoute = 'pages/brandDetail/comment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/brandDetail/comment.js';

define('pages/brandDetail/comment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brandDetail/comment"],{"28ba":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"34c0":function(t,e,n){},4856:function(t,e,n){"use strict";var a=n("34c0"),o=n.n(a);o.a},"5ab4":function(t,e,n){"use strict";n.r(e);var a=n("28ba"),o=n("d4dc");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("4856");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"987e":function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("5ab4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d308:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("454f"));function r(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{orderId:0,type:0,valueId:0,orderGoods:{},content:"",stars:[0,1,2,3,4],star:5,starText:"十分满意",hasPicture:!1,picUrls:[],files:[]}},onLoad:function(e){this.valueId=e.valueId,console.log(t(this.valueId," at pages/brandDetail/comment.vue:66")),this.getOrderGoods()},methods:{chooseImage:function(t){if(this.files.length>=5)return util.showErrorToast("只能上传五张图片"),!1;var e=this;a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){e.files=e.files.concat(t.tempFilePaths),e.upload(t)}})},upload:function(e){var n=this,o=a.uploadFile({url:"https://mall1.zhihuiyunqi.com/wx/storage/upload",filePath:e.tempFilePaths[0],name:"file",success:function(t){var e=JSON.parse(t.data);if(0===e.errno){var a=e.data.url;n.picUrls.push(a),n.hasPicture=!0,n.picUrls=n.picUrls}},fail:function(t){a.showToast({title:"上传失败",icon:"none"})}});o.onProgressUpdate(function(e){console.log(t("上传进度",e.progress," at pages/brandDetail/comment.vue:106")),console.log(t("已经上传的数据长度",e.totalBytesSent," at pages/brandDetail/comment.vue:107")),console.log(t("预期需要上传的数据总长度",e.totalBytesExpectedToSend," at pages/brandDetail/comment.vue:108"))})},previewImage:function(t){a.previewImage({current:t.currentTarget.id,urls:this.files})},selectRater:function(t){var e,n=t.currentTarget.dataset.star+1;e=1==n?"很差":2==n?"不太满意":3==n?"满意":4==n?"比较满意":"十分满意",this.star=n,this.starText=e},getOrderGoods:function(){var t=this;o.default.httpget("/topic/detail?id="+this.valueId).then(function(e){0===e.data.errno&&(t.orderGoods=e.data.data.topic)})},onClose:function(){a.navigateBack()},onPost:function(){var t=this;if(!this.content)return a.showToast({title:"请填写评论",icon:"none"}),!1;o.default.httppost("/comment/post",{valueId:t.valueId,content:t.content,type:1,star:5,hasPicture:t.hasPicture,picUrls:t.picUrls}).then(function(t){0===t.data.errno?a.showToast({title:"评论成功",complete:function(){a.navigateBack()}}):a.navigateTo({url:"/pages/public/login"})})},bindInputValue:function(t){var e=t.detail.value;if(e&&e.length>140)return!1;this.content=t.detail.value}}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},d4dc:function(t,e,n){"use strict";n.r(e);var a=n("d308"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a}},[["987e","common/runtime","common/vendor"]]]);
});
require('pages/brandDetail/comment.js');
__wxRoute = 'pages/brandDetail/topicDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/brandDetail/topicDetail.js';

define('pages/brandDetail/topicDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brandDetail/topicDetail"],{5243:function(t,e,n){"use strict";var a=n("cf41"),o=n.n(a);o.a},"58a0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},ae82:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("eb33"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},cf41:function(t,e,n){},e463:function(t,e,n){"use strict";n.r(e);var a=n("e77e"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},e77e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("454f"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/gaoyia-parse/parse")]).then(n.bind(null,"ae83"))},c={components:{uParse:i},data:function(){return{id:0,topiccontent:"",topic:{content:""},topicList:[],commentCount:0,commentList:[],topicGoods:[]}},onLoad:function(e){var n=this;this.id=e.id;var o="/topic/detail?id="+this.id;t.showLoading({title:"正在加载"}),a.default.httpget(o).then(function(e){0===e.data.errno&&(n.topic=e.data.data.topic,n.topiccontent=n.topic.content,n.topicGoods=e.data.data.goods),t.hideLoading()}),a.default.httpget("/topic/related?id="+this.id).then(function(t){0===t.data.errno&&(n.topicList=t.data.data.list)}),this.getCommentList()},methods:{getCommentList:function(){var t=this,e="/comment/list?valueId="+this.id+"&type=1&showType=0&page=1&limit=5";a.default.httpget(e).then(function(e){0===e.data.errno&&(t.commentList=e.data.data.list,t.commentCount=e.data.data.total)})},postComment:function(){t.getStorageSync("haslogin")?t.navigateTo({url:"/pages/brandDetail/comment?valueId="+this.id+"&type=1"}):t.navigateTo({url:"/pages/public/login"})}}};e.default=c}).call(this,n("6e42")["default"])},eb33:function(t,e,n){"use strict";n.r(e);var a=n("58a0"),o=n("e463");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("5243");var c=n("2877"),u=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports}},[["ae82","common/runtime","common/vendor"]]]);
});
require('pages/brandDetail/topicDetail.js');
__wxRoute = 'pages/brandDetail/groupbuy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/brandDetail/groupbuy.js';

define('pages/brandDetail/groupbuy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brandDetail/groupbuy"],{"85e8":function(t,e,n){"use strict";var a=n("b8e7"),u=n.n(a);u.a},"86e5":function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("ec33"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},add2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("454f"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{groupons:[],limit:10,currentpage:1,totalPages:1}},onLoad:function(t){this.getBrandList()},onPullDownRefresh:function(){this.currentpage=1,this.getBrandList(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.getBrandList()},methods:{getBrandList:function(e){t.showLoading({title:"加载中..."});var n=this;a.default.httpget("/groupon/list?page="+this.currentpage+"&limit="+this.limit).then(function(a){0===a.data.errno&&(e&&(n.groupons=[]),n.groupons=n.groupons.concat(a.data.data.list),n.totalPages=a.data.data.pages),e&&t.stopPullDownRefresh(),t.hideLoading()})}}};e.default=o}).call(this,n("6e42")["default"])},b8e7:function(t,e,n){},cdbc:function(t,e,n){"use strict";n.r(e);var a=n("add2"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},e9e7:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},ec33:function(t,e,n){"use strict";n.r(e);var a=n("e9e7"),u=n("cdbc");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("85e8");var r=n("2877"),i=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["86e5","common/runtime","common/vendor"]]]);
});
require('pages/brandDetail/groupbuy.js');
__wxRoute = 'pages/brandDetail/brand';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/brandDetail/brand.js';

define('pages/brandDetail/brand.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brandDetail/brand"],{1688:function(t,n,e){"use strict";e.r(n);var a=e("cecb"),i=e("3a58");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("875d");var u=e("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},"3a58":function(t,n,e){"use strict";e.r(n);var a=e("8023"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=i.a},"409e":function(t,n,e){},8023:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{brandList:[],currentpage:1,limit:10,totalPages:1}},onLoad:function(t){this.getBrandList()},onPullDownRefresh:function(){this.currentpage=1,this.getBrandList(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.getBrandList()},methods:{getBrandList:function(n){t.showLoading({title:"加载中..."});var e=this;a.default.httpget("/brand/list?page="+this.currentpage+"&limit="+this.limit).then(function(a){0===a.data.errno&&(n&&(e.brandList=[]),e.brandList=e.brandList.concat(a.data.data.list),e.totalPages=a.data.data.pages),n&&t.stopPullDownRefresh(),t.hideLoading()})}}};n.default=r}).call(this,e("6e42")["default"])},"875d":function(t,n,e){"use strict";var a=e("409e"),i=e.n(a);i.a},cecb:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},fa88:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");a(e("66fd"));var n=a(e("1688"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fa88","common/runtime","common/vendor"]]]);
});
require('pages/brandDetail/brand.js');
__wxRoute = 'pages/brandDetail/brandDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/brandDetail/brandDetail.js';

define('pages/brandDetail/brandDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/brandDetail/brandDetail"],{"19a1":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{id:0,brand:{name:"",desc:""},goodsList:[],page:1,limit:10}},onLoad:function(t){this.id=parseInt(t.id),this.getBrand()},methods:{getBrand:function(){var n=this;t.showLoading({title:"正在加载"}),e.default.httpget("/brand/detail?id="+this.id).then(function(a){0===a.data.errno&&(n.brand=a.data.data,n.getGoodsList()),t.hideLoading()})},getGoodsList:function(){var t=this;e.default.httpget("/goods/list?brandId="+this.id+"&page="+this.page+"&limit="+this.limit).then(function(n){0===n.data.errno&&(t.goodsList=n.data.data.list)})}}};n.default=d}).call(this,a("6e42")["default"])},"1ba6":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"2d11":function(t,n,a){},"461f":function(t,n,a){"use strict";a.r(n);var e=a("19a1"),i=a.n(e);for(var d in e)"default"!==d&&function(t){a.d(n,t,function(){return e[t]})}(d);n["default"]=i.a},cb3a:function(t,n,a){"use strict";(function(t){a("d82e"),a("921b");e(a("66fd"));var n=e(a("e7b2"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},cf02:function(t,n,a){"use strict";var e=a("2d11"),i=a.n(e);i.a},e7b2:function(t,n,a){"use strict";a.r(n);var e=a("1ba6"),i=a("461f");for(var d in i)"default"!==d&&function(t){a.d(n,t,function(){return i[t]})}(d);a("cf02");var o=a("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports}},[["cb3a","common/runtime","common/vendor"]]]);
});
require('pages/brandDetail/brandDetail.js');
__wxRoute = 'pages/order/comment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/comment.js';

define('pages/order/comment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/comment","components/auth"],{1543:function(t,e,n){"use strict";var o=n("b96d"),a=n.n(o);a.a},"2bee":function(t,e,n){"use strict";n.r(e);var o=n("a630"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"2ffe":function(t,e,n){"use strict";n.r(e);var o=n("d1cf"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"791d":function(t,e,n){},"7c8b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},8368:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"91a9":function(t,e,n){"use strict";var o=n("791d"),a=n.n(o);a.a},"9cb0":function(t,e,n){"use strict";n.r(e);var o=n("7c8b"),a=n("2bee");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("1543");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},a630:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("454f")),r=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{haslogin:!0,agentId:7813,showActionSheet:!1,maskClosable:!0,itemList:[],color:"#9a9a9a",size:26,hidemask:!1,isCancel:!0}},created:function(){this.getUserInfo()},methods:u({},(0,r.mapMutations)(["login"]),{itemClick:function(t){t.index;this.closeActionSheet()},openauth:function(){this.haslogin=this.hidemask=!1},closeActionSheet:function(){this.showActionSheet=!1},getUserInfo:function(){t.showLoading({title:"正在加载"})},gologin:function(e,n){var r=this,i="/auth/login_by_weixin";a.default.httppost(i,e).then(function(e){0==e.data.errno?(t.setStorageSync("token",e.data.data.token),t.setStorageSync("userId",e.data.data.userId),r.haslogin=!0,r.hidemask=!0,t.setStorageSync("haslogin",!0),r.$parent.getdata()):t.navigateTo({url:"/pages/public/login"}),t.hideLoading()}).catch(function(e){console.log(o(e," at components/auth.vue:168")),t.hideLoading()})}})};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},b96d:function(t,e,n){},d1cf:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(n("9cb0"));var a=r(n("454f"));function r(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{orderId:0,type:0,valueId:0,orderGoods:{},content:"",stars:[0,1,2,3,4],star:5,starText:"十分满意",hasPicture:!1,picUrls:[],files:[]}},onLoad:function(e){this.orderId=e.orderId,this.type=e.type,this.valueId=e.valueId,console.log(t(e," at pages/order/comment.vue:78")),this.getOrderGoods()},methods:{chooseImage:function(t){if(this.files.length>=5)return util.showErrorToast("只能上传五张图片"),!1;var e=this;o.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){e.files=e.files.concat(t.tempFilePaths),e.upload(t)}})},upload:function(e){var n=this,a=o.uploadFile({url:"https://mall1.zhihuiyunqi.com/wx/storage/upload",filePath:e.tempFilePaths[0],name:"file",success:function(t){var e=JSON.parse(t.data);if(0===e.errno){var o=e.data.url;n.picUrls.push(o),n.hasPicture=!0,n.picUrls=n.picUrls}},fail:function(t){o.showModal({title:"错误",content:"上传失败",showCancel:!1})}});a.onProgressUpdate(function(e){console.log(t("上传进度",e.progress," at pages/order/comment.vue:122")),console.log(t("已经上传的数据长度",e.totalBytesSent," at pages/order/comment.vue:123")),console.log(t("预期需要上传的数据总长度",e.totalBytesExpectedToSend," at pages/order/comment.vue:124"))})},previewImage:function(t){o.previewImage({current:t.currentTarget.id,urls:this.files})},selectRater:function(t){var e,n=t.currentTarget.dataset.star+1;e=1==n?"很差":2==n?"不太满意":3==n?"满意":4==n?"比较满意":"十分满意",this.star=n,this.starText=e},getOrderGoods:function(){var t=this;a.default.httpget("/order/goods?orderId="+this.orderId+"&goodsId="+this.valueId).then(function(e){0===e.data.errno&&(t.orderGoods=e.data.data)})},onClose:function(){o.navigateBack()},onPost:function(){var t=this;if(!this.content)return o.showToast({title:"请填写评论",icon:"none"}),!1;a.default.httppost("/order/comment",{orderGoodsId:t.orderGoods.id,content:t.content,star:t.star,hasPicture:t.hasPicture,picUrls:t.picUrls}).then(function(t){0===t.data.errno&&o.showToast({title:"评论成功",complete:function(){o.switchTab({url:"/pages/user/user"})}})})},bindInputValue:function(t){var e=t.detail.value;if(e&&e.length>140)return!1;this.content=t.detail.value}}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},dfba:function(t,e,n){"use strict";n.r(e);var o=n("8368"),a=n("2ffe");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("91a9");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},fe65:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");o(n("66fd"));var e=o(n("dfba"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fe65","common/runtime","common/vendor"]]]);
});
require('pages/order/comment.js');
__wxRoute = 'pages/userinfo/userinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userinfo/userinfo.js';

define('pages/userinfo/userinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userinfo/userinfo"],{"018b":function(e,t,n){"use strict";(function(e){n("d82e"),n("921b");r(n("66fd"));var t=r(n("d0c0"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"23d9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={data:function(){return{}},computed:u({},(0,r.mapState)(["userInfo"]))};t.default=a},"27bb":function(e,t,n){},aeeb:function(e,t,n){"use strict";n.r(t);var r=n("23d9"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=u.a},d0c0:function(e,t,n){"use strict";n.r(t);var r=n("f0af"),u=n("aeeb");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("e699");var a=n("2877"),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},e699:function(e,t,n){"use strict";var r=n("27bb"),u=n.n(r);u.a},f0af:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})}},[["018b","common/runtime","common/vendor"]]]);
});
require('pages/userinfo/userinfo.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"04b7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"26a6":function(t,e,n){"use strict";n.r(e);var a=n("04b7"),o=n("707c");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("b318");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"707c":function(t,e,n){"use strict";n.r(e);var a=n("a527"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"8bc4":function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("26a6"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a527:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a34a")),o=n("2f62"),r=c(n("454f")),i=c(n("8e4a"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,o,r,i){try{var c=t[r](i),u=c.value}catch(d){return void n(d)}c.done?e(u):Promise.resolve(u).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(t){u(r,a,o,i,c,"next",t)}function c(t){u(r,a,o,i,c,"throw",t)}i(void 0)})}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(){return n.e("components/uni-number-box").then(n.bind(null,"fa35"))},f={components:{uniNumberBox:h},data:function(){return{total:0,allChecked:!0,empty:!1,cartList:[],haslogin:!1,cartTotal:{},goodsList:[],agentId:7813}},onLoad:function(){this.loadData(),this.loadtopData()},onPullDownRefresh:function(){this.loadData(!0),this.loadtopData()},computed:s({},(0,o.mapState)(["hasLogin"])),methods:s({},(0,o.mapMutations)(["login"]),{onShareAppMessage:function(t){i.default.sharebtn(t)},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},getUserInfo:function(){},gologin:function(e,n){var a=this,o="/auth/login_by_weixin";r.default.httppost(o,e).then(function(e){0==e.data.errno&&(a.haslogin=!0,t.setStorageSync("token",e.data.data.token),t.setStorageSync("haslogin",!0),a.loadData()),t.hideLoading()}).catch(function(e){t.showToast({title:res.data.errmsg,icon:"none"}),t.hideLoading()})},loadData:function(){var e=d(a.default.mark(function e(n){var o,i=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.showLoading({title:"正在加载"}),o="/cart/index",r.default.httpget(o).then(function(e){var a=e.data;0==a.errno?(i.cartList=a.data.cartList,i.cartTotal=a.data.cartTotal,i.cartList.forEach(function(t){t.checked||(i.allChecked=!1)})):t.showToast({title:a.errmsg,icon:"none"}),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){t.hideLoading(),n&&t.stopPullDownRefresh()});case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),loadtopData:function(){var e=d(a.default.mark(function e(n){var o,i=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.showLoading({title:"正在加载"}),o="/home/index",r.default.httpget(o).then(function(e){var a=e.data,o=a.data;0==a.errno&&(i.goodsList=o.hotGoodsList,t.setStorageSync("goodsList",i.goodsList)),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){t.hideLoading(),n&&t.stopPullDownRefresh()});case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onImageLoad:function(t,e){this.$set(this[t][e],"loaded","loaded")},onImageError:function(t,e){this[t][e].image="/static/errorImage.jpg"},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},check:function(e,n,a){var o=this,i=[],c={};if("item"===e)this.cartList[n].checked=!this.cartList[n].checked,c={isChecked:a.checked?1:0,productIds:[a.productId]};else{var u=!this.allChecked,d=this.cartList;d.forEach(function(t){t.checked=u,i.push(t.productId)}),this.allChecked=u,c.productIds=i,c={isChecked:this.allChecked?1:0,productIds:i}}this.calcTotal();var s="/cart/checked";r.default.httppost(s,c).then(function(e){var n=e.data;0==n.errno&&o.loadData(),t.hideLoading()}).catch(function(e){t.hideLoading()})},numberChange:function(e,n){var a=this;t.showLoading({title:"正在加载"});var o="/cart/update";r.default.httppost(o,{goodsId:e.goodsId,id:e.id,number:e.number,productId:e.productId}).then(function(e){var n=e.data;0==n.errno&&a.loadData(),t.hideLoading()}).catch(function(e){t.hideLoading()})},deleteCartItem:function(t){this.deletepro([t])},deletepro:function(e){var n=this;t.showLoading({title:"正在加载"});var a="/cart/delete";r.default.httppost(a,{productIds:e}).then(function(e){var a=e.data;0==a.errno&&(n.cartList=a.data.cartList),t.hideLoading()}).catch(function(e){t.hideLoading()})},clearCart:function(){var e=this,n=[];t.showModal({content:"清空购物车？",success:function(t){t.confirm&&(e.cartList.forEach(function(t){n.push(t.id)}),e.deletepro(n))}})},calcTotal:function(){var t=this.cartList;if(0!==t.length){var e=0,n=!0;t.forEach(function(t){!0===t.checked?e+=t.price*t.number:!0===n&&(n=!1)}),this.allChecked=n,this.total=Number(e.toFixed(2))}else this.empty=!0},cutNumber:function(t){t.number=t.number-1>1?t.number-1:1,this.numberChange(t)},addNumber:function(t){t.number=t.number+1,this.numberChange(t)},createOrder:function(){if(this.cartTotal.checkedGoodsAmount<=0)return!1;t.setStorageSync("cartId",0),t.navigateTo({url:"/pages/order/createOrder"})}})};e.default=f}).call(this,n("6e42")["default"])},b318:function(t,e,n){"use strict";var a=n("dea2"),o=n.n(a);o.a},dea2:function(t,e,n){}},[["8bc4","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/public/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/public/login.js';

define('pages/public/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{1444:function(t,n,e){"use strict";var r=e("29a5"),o=e.n(r);o.a},"29a5":function(t,n,e){},"82b3":function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");r(e("66fd"));var n=r(e("b049"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"852d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a")),o=e("2f62"),a=u(e("454f"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(r,o){var a=t.apply(n,e);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)})}}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){f(t,n,e[n])})}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l={data:function(){return{username:"",password:"",logining:!1}},onLoad:function(){},methods:s({},(0,o.mapMutations)(["login"]),{inputChange:function(t){var n=t.currentTarget.dataset.key;this[n]=t.detail.value},navBack:function(){t.reLaunch({url:"/pages/index/index"})},toRegist:function(){t.navigateTo({url:"/pages/public/reg"})},toLogin:function(){var n=c(r.default.mark(function n(){var e,o,u,i,c=this;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.logining=!0,e=this.username,o=this.password,u={username:e,password:o},""!=u.username&&/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(u.username)){n.next=8;break}return t.showToast({title:"请输入正确手机号码",icon:"none"}),n.abrupt("return",!1);case 8:if(""!=u.password){n.next=11;break}return t.showToast({title:"请输入正确的密码",icon:"none"}),n.abrupt("return",!1);case 11:t.showLoading({title:"登陆中，请稍后！"}),i="/auth/login",a.default.httppost(i,u).then(function(n){var e=n.data;0==e.errno&&(t.showToast({title:"登陆成功",icon:"none"}),c.login(e.data.userInfo),t.setStorageSync("token",e.data.token),t.setStorageSync("haslogin",!0),t.switchTab({url:"/pages/user/user"})),t.hideLoading(),t.showToast({title:e.errmsg,icon:"none"})}).catch(function(n){t.hideLoading(),t.showToast({title:n.data.errmsg,icon:"none"})});case 14:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()})};n.default=l}).call(this,e("6e42")["default"])},b049:function(t,n,e){"use strict";e.r(n);var r=e("f55c"),o=e("ff01");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("1444");var u=e("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},f55c:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},ff01:function(t,n,e){"use strict";e.r(n);var r=e("852d"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=o.a}},[["82b3","common/runtime","common/vendor"]]]);
});
require('pages/public/login.js');
__wxRoute = 'pages/public/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/public/reg.js';

define('pages/public/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/reg"],{"03ca":function(t,e,n){"use strict";n.r(e);var r=n("0f88"),o=n("0c71");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("a0a2");var u=n("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"0c71":function(t,e,n){"use strict";n.r(e);var r=n("326e"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},"0f88":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"326e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),o=n("2f62"),a=u(n("454f"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)})}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{user:{},pwd2:""}},onLoad:function(){},methods:s({},(0,o.mapMutations)(["login"]),{navBack:function(){t.navigateBack()},tologin:function(){t.redirectTo({url:"/pages/public/login"})},toreg:function(){var e=c(r.default.mark(function e(){var n,o=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.user.mobile||/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.user.mobile)){e.next=5;break}return t.showToast({title:"请输入正确的手机号吗",icon:"none"}),e.abrupt("return",!1);case 5:if(""!=this.user.password){e.next=10;break}return t.showToast({title:"请输入密码",icon:"none"}),e.abrupt("return",!1);case 10:if(this.user.password===this.pwd2){e.next=13;break}return t.showToast({title:"两次输入的密码不一致！",icon:"none"}),e.abrupt("return",!1);case 13:this.user.username=this.user.mobile,t.showLoading({title:"注册中，请稍后！"}),n="/auth/register",a.default.httppost(n,this.user).then(function(e){var n=e.data;0==n.errno&&(t.showToast({title:"注册成功",icon:"none"}),t.setStorageSync("token",n.data.token),t.setStorageSync("haslogin",!0),o.login(n.data.userInfo),t.switchTab({url:"/pages/index/index"})),t.showToast({title:n.errmsg,icon:"none"}),t.hideLoading()}).catch(function(e){t.hideLoading(),t.showToast({title:e.data.errmsg,icon:"none"})});case 17:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()})};e.default=l}).call(this,n("6e42")["default"])},6974:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");r(n("66fd"));var e=r(n("03ca"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9a8d":function(t,e,n){},a0a2:function(t,e,n){"use strict";var r=n("9a8d"),o=n.n(r);o.a}},[["6974","common/runtime","common/vendor"]]]);
});
require('pages/public/reg.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"266a":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("454f")),i=s(n("8e4a")),r=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/mix-list-cell").then(n.bind(null,"4ad5"))},f=function(){return n.e("components/auth").then(n.bind(null,"9cb0"))},d=0,h=0,g=!0,p={components:{listCell:l,auth:f},data:function(){return{user:{},coverTransform:"translateY(0px)",coverTransition:"0s",hasphone:!0,moving:!1,footerlistdata:[]}},onLoad:function(){""==t.getStorageSync("haslogin")?t.navigateTo({url:"/pages/public/login"}):this.login(t.getStorageSync("userInfo")),this.userlist(),this.footerlist()},onPullDownRefresh:function(){this.userlist(!0),this.footerlist()},onShareAppMessage:function(t){i.default.sharebtn(t)},computed:u({},(0,r.mapState)(["hasLogin","userInfo"])),methods:u({},(0,r.mapMutations)(["login"]),{getPhoneNumber:function(e){var n=this;if("getPhoneNumber:fail user deny"==e.detail.errMsg)console.log(o("已拒绝获取手机号！"," at pages/user/user.vue:180"));else{t.showLoading({title:"正在加载"});var a={encryptedData:e.detail.encryptedData,iv:e.detail.iv};n.bindphone(a)}},bindphone:function(e){var n=this,o="/auth/bindPhone";a.default.httppost(o,e).then(function(e){0==e.data.errno&&t.setStorageSync("hasphone",!0),n.hasphone=!0,t.showToast({title:e.data.errmsg,icon:"none"}),t.hideLoading()}).catch(function(e){t.hideLoading()})},auth:function(){""==t.getStorageSync("haslogin")&&this.$refs.open.openauth()},getdata:function(){this.userlist(!0),this.footerlist()},userlist:function(e){var n=this,o="/user/index";t.showLoading({title:"正在加载"}),a.default.httpget(o).then(function(o){var a=o.data;0==a.errno?n.user=a.data.order:(t.showToast({title:a.errmsg,icon:"none"}),t.navigateTo({url:"/pages/public/login"})),t.hideLoading(),e&&t.stopPullDownRefresh()})},footerlist:function(e){var n=this,o="/footprint/list?page=1&limit=10";a.default.httpget(o).then(function(o){var a=o.data;0==a.errno?n.footerlistdata=a.data.list:t.showToast({title:a.errmsg,icon:"none"}),t.hideLoading(),e&&t.stopPullDownRefresh()})},navTo:function(e){this.hasLogin||(e="/pages/public/login"),t.navigateTo({url:e})},navTofx:function(){this.hasLogin||(url="/pages/public/login"),t.showLoading({title:"正在加载中"});var e=t.getStorageSync("userId");a.default.httppostfx("/retailUser/detail",{retailUserId:e}).then(function(n){var o=n.data;if(200==o.code){var a="/pages/fx/index?id=".concat(e);""==o.data&&(a="/pages/fx/apply?id=".concat(e)),t.navigateTo({url:a})}else t.showToast({title:o.errmsg,icon:"none"});t.hideLoading()})},navTopro:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},coverTouchstart:function(t){!1!==g&&(this.coverTransition="transform .1s linear",d=t.touches[0].clientY)},coverTouchmove:function(t){h=t.touches[0].clientY;var e=h-d;e<0?this.moving=!1:(this.moving=!0,e>=80&&e<100&&(e=80),e>0&&e<=80&&(this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}})};e.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},"6ee7":function(t,e,n){"use strict";var o=n("b820"),a=n.n(o);a.a},"948a":function(t,e,n){"use strict";n.r(e);var o=n("266a"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},b820:function(t,e,n){},be9b:function(t,e,n){"use strict";n.r(e);var o=n("d2b0"),a=n("948a");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("6ee7");var r=n("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},d2b0:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},f9a0:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");o(n("66fd"));var e=o(n("be9b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f9a0","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"1a2c":function(t,e,n){},"413e":function(t,e,n){"use strict";n.r(e);var a=n("8d2e"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},4605:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"70df":function(t,e,n){"use strict";var a=n("1a2c"),r=n.n(a);r.a},8144:function(t,e,n){"use strict";n.r(e);var a=n("4605"),r=n("413e");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("70df");var s=n("2877"),o=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"8d2e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,s){try{var o=t[i](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var s=t.apply(e,n);function o(t){i(s,a,r,o,u,"next",t)}function u(t){i(s,a,r,o,u,"throw",t)}o(void 0)})}}var o=function(){return Promise.all([n.e("common/vendor"),n.e("pages/product/share")]).then(n.bind(null,"d467"))},u={components:{share:o},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.json("detailData");case 2:return n=e.sent,e.next=5,this.$api.json("shareList");case 5:r=e.sent,this.loaded=!0,this.data=n,this.shareList=r,t.setNavigationBarTitle({title:n.title});case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),methods:{imageOnLoad:function(t,e){this.$set(this.data[t][e],"loaded","loaded")},changeEpd:function(t){var e=this.data.episodeList,n=e[t];this.$api.msg("切换到第".concat(n,"项")),this.currentEpd=n},share:function(){this.$refs.share.toggleMask()},favorite:function(){this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};e.default=u}).call(this,n("6e42")["default"])},be3c:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("8144"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["be3c","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');
__wxRoute = 'pages/order/order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/order.js';

define('pages/order/order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{2020:function(t,e,a){},"2f4f":function(t,e,a){"use strict";a.r(e);var r=a("3f47"),n=a("aaed");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("484e");var o=a("2877"),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"3f47":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},"484e":function(t,e,a){"use strict";var r=a("2020"),n=a.n(r);n.a},"566c":function(t,e,a){"use strict";(function(t){a("d82e"),a("921b");r(a("66fd"));var e=r(a("2f4f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},aaed:function(t,e,a){"use strict";a.r(e);var r=a("e8a1"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);e["default"]=n.a},e8a1:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("454f"));function n(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{tabCurrentIndex:0,totalPages:1,currentpage:1,refresh:!0,reflash:!1,orderList:[],navList:[{state:0,text:"全部",orderList:[]},{state:1,text:"待付款",orderList:[]},{state:2,text:"待发货",orderList:[]},{state:3,text:"待收货",orderList:[]},{state:4,text:"待评价",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=t.state,this.loadData()},onShow:function(){this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.refresh=!0,this.loadData(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{navTo:function(e){t.navigateTo({url:"/pages/order/orderDetail?id=".concat(e)})},loadData:function(e){var a=this;t.showLoading({title:"正在加载"});var n="/order/list?showType="+this.tabCurrentIndex+"&page="+this.currentpage+"&limit=10";r.default.httpget(n).then(function(r){var n=r.data;0==n.errno?(a.refresh&&(a.orderList=[]),a.orderList=a.orderList.concat(n.data.list),a.totalPages=n.data.pages,a.refresh=!1):t.showToast({title:n.errmsg,icon:"none"}),e&&t.stopPullDownRefresh(),t.hideLoading()})},tabClick:function(t){this.refresh=!0,this.tabCurrentIndex=t,this.currentpage=1,this.loadData()},deleteOrder:function(e){var a=this;t.showLoading({title:"请稍后"}),setTimeout(function(){a.orderList.splice(e,1),t.hideLoading()},600)},cancelOrder:function(e){var a=this;t.showLoading({title:"请稍后"}),setTimeout(function(){var r=a.orderStateExp(9),n=r.stateTip,i=r.stateTipColor;e=Object.assign(e,{state:9,stateTip:n,stateTipColor:i});var o=a.navList[1].orderList,s=o.findIndex(function(t){return t.id===e.id});-1!==s&&o.splice(s,1),t.hideLoading()},600)},orderStateExp:function(t){var e="",a="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",a="#909399";break}return{stateTip:e,stateTipColor:a}}}};e.default=i}).call(this,a("6e42")["default"])}},[["566c","common/runtime","common/vendor"]]]);
});
require('pages/order/order.js');
__wxRoute = 'pages/money/money';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/money/money.js';

define('pages/money/money.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/money/money"],{1745:function(n,t,e){"use strict";e.r(t);var u=e("d680"),r=e("4d55");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"1dd5":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"4d55":function(n,t,e){"use strict";e.r(t);var u=e("1dd5"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},8625:function(n,t,e){"use strict";(function(n){e("d82e"),e("921b");u(e("66fd"));var t=u(e("1745"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d680:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["8625","common/runtime","common/vendor"]]]);
});
require('pages/money/money.js');
__wxRoute = 'pages/mystore/mystore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mystore/mystore.js';

define('pages/mystore/mystore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mystore/mystore"],{6566:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"89d8":function(t,n,e){"use strict";var o=e("e621"),a=e.n(o);a.a},"8a71":function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");o(e("66fd"));var n=o(e("edd0"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a375:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("2f62");var o=a(e("454f"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{cartList:[]}},onLoad:function(t){this.mycoloect()},onPullDownRefresh:function(){this.mycoloect(!0)},methods:{mycoloect:function(n){var e=this;t.showLoading({title:"正在加载"});var a="/mobile/public/api/wx/user/collectstore";o.default.httpUrlpost(a,{id:1}).then(function(o){o&&(e.cartList=o.data),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){n&&t.stopPullDownRefresh(),t.hideLoading()})},deletes:function(n){var e=this;t.showLoading({title:"正在取消关注"});var a="/mobile/public/api/wx/store/attention";o.default.httpUrlpost(a,{id:n}).then(function(n){e.mycoloect(),t.hideLoading()}).catch(function(n){t.hideLoading()})},navToDetailPage:function(n){var e=n.goods_id;t.navigateTo({url:"/pages/product/product?id=".concat(e)})}}};n.default=i}).call(this,e("6e42")["default"])},b2db:function(t,n,e){"use strict";e.r(n);var o=e("a375"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},e621:function(t,n,e){},edd0:function(t,n,e){"use strict";e.r(n);var o=e("6566"),a=e("b2db");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("89d8");var u=e("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports}},[["8a71","common/runtime","common/vendor"]]]);
});
require('pages/mystore/mystore.js');
__wxRoute = 'pages/mycoloect/mycoloect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mycoloect/mycoloect.js';

define('pages/mycoloect/mycoloect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mycoloect/mycoloect"],{"0f66":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"132b":function(t,e,n){"use strict";n.r(e);var a=n("6a91"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},3116:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("8445"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"357b":function(t,e,n){},"6a91":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var a=o(n("454f"));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{cartList:[],totalPages:1,currentpage:1}},onLoad:function(t){this.mycoloect()},onPullDownRefresh:function(){this.currentpage=1,this.mycoloect(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.mycoloect()},methods:{mycoloect:function(e){var n=this;t.showLoading({title:"正在加载"});var o="/collect/list?type=0&page="+this.currentpage+"&limit=10";a.default.httpget(o).then(function(a){var o=a.data;0==o.errno&&(e&&(n.cartList=[]),n.cartList=n.cartList.concat(o.data.list),that.totalPages=o.data.pages),e&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(n){t.hideLoading(),e&&t.stopPullDownRefresh()})},deletes:function(e){var n=this;t.showLoading({title:"正在取消"});var o="/collect/addordelete";a.default.httppost(o,{type:0,valueId:e}).then(function(e){var a=e.data;0==a.errno?n.mycoloect():501==a.errno&&t.navigateTo({url:"../public/login"}),t.hideLoading()}).catch(function(e){t.hideLoading()})},navToDetailPage:function(e){var n=e.valueId;t.navigateTo({url:"/pages/product/product?id=".concat(n)})}}};e.default=c}).call(this,n("6e42")["default"])},8445:function(t,e,n){"use strict";n.r(e);var a=n("0f66"),o=n("132b");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("c4bb");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},c4bb:function(t,e,n){"use strict";var a=n("357b"),o=n.n(a);o.a}},[["3116","common/runtime","common/vendor"]]]);
});
require('pages/mycoloect/mycoloect.js');
__wxRoute = 'pages/tuiguang/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tuiguang/index.js';

define('pages/tuiguang/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuiguang/index"],{1477:function(t,e,n){},"2b04":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),a=n("2f62"),c=r(n("454f"));r(n("8e4a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e,n,i,o,a,c){try{var r=t[a](c),s=r.value}catch(u){return void n(u)}r.done?e(s):Promise.resolve(s).then(i,o)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function c(t){d(a,i,o,c,r,"next",t)}function r(t){d(a,i,o,c,r,"throw",t)}c(void 0)})}}var h=function(){return n.e("components/auth").then(n.bind(null,"9cb0"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("pages/product/share")]).then(n.bind(null,"d467"))},p={components:{share:f,auth:h},data:function(){return{hasphone:!0,specClass:"none",specSelected:[],tmpSpecText:"请选择",checkedSpecPrice:0,haslogin:!1,id:"",goods:{sortOrder:0,counterPrice:0,retailPrice:0},number:1,topicList:[],productList:[{number:0}],goodsnum:0,responsdata:{attribute:[]},brand:{},comment:{data:[]},sharedata:{},imgList:[],descontent:"",checkedGroupon_id:"",groupon:[{checked:!1}],specificationList:[]}},onLoad:function(){var t=l(o.default.mark(function t(e){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loadData(e);case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onPullDownRefresh:function(){this.productdata(!0)},computed:s({},(0,a.mapState)(["hasLogin"])),methods:s({},(0,a.mapMutations)(["login"]),{gobrand:function(){t.navigateTo({url:"/pages/brandDetail/brandDetail?id="+this.brand.id})},loadData:function(e){t.showLoading({title:"正在加载"}),""==t.getStorageSync("hasphone")&&(this.hasphone=!1),this.id=e?e.id:this.id,this.productdata()},productdata:function(e){var n=this,i="/goods/detail?id="+this.id;c.default.httpget(i).then(function(i){var o=i.data;if(t.hideLoading(),0==o.errno){n.responsdata=o.data,n.brand=n.responsdata.brand,n.goods=n.responsdata.info,n.productList=n.responsdata.productList,n.comment=n.responsdata.comment,n.specificationList=n.responsdata.specificationList,n.groupon=n.responsdata.groupon;var a=n.goods.detail,c=new RegExp("<img","gi");a=a.replace(c,'<img style="width: 100%;"'),n.descontent=a,n.sharedata={title:n.goods.name,id:n.id}}e&&t.stopPullDownRefresh()}).catch(function(n){t.hideLoading(),e&&t.stopPullDownRefresh()});var o="/goods/related?id="+this.id;c.default.httpget(o).then(function(t){var e=t.data;0==e.errno&&(n.topicList=e.data.list)}).catch(function(t){});var a="/cart/goodscount";c.default.httpget(a).then(function(t){var e=t.data;0==e.errno&&(n.goodsnum=e.data)}).catch(function(t){})},clickGroupon:function(t){t.goodsName;for(var e=t.id,n=this.groupon,i=0;i<n.length;i++)n[i].id==e?n[i].checked?n[i].checked=!1:(n[i].checked=!0,this.checkedGroupon_id=n[i].id):n[i].checked=!1;this.groupon=n},toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},cutNumber:function(){this.number=this.number-1>1?this.number-1:1},addNumber:function(){this.number=this.number+1},addToCart:function(e){var n=this;if("hide"===this.specClass)this.specClass="show";else{if(!this.isCheckedAllSpec())return t.showToast({title:"请选择完整规格",icon:"none"}),!1;var i=this.getCheckedProductItem(this.getCheckedSpecKey());if(!i||i.length<=0)return t.showToast({title:"没有库存",icon:"none"}),!1;var o=i[0];if(o.number<=0)return t.showToast({title:"没有库存",icon:"none"}),!1;t.showLoading({title:"正在加载"});var a="/cart/add";e&&(a="/cart/fastadd"),c.default.httppost(a,{goodsId:n.goods.id,number:n.number,productId:o.id}).then(function(i){var o=i.data;0==o.errno?(t.setStorageSync("grouponRulesId",n.checkedGroupon_id),e?n.buy(o.data):t.showToast({title:"添加成功"}),n.specClass,n.goodsnum=o.data,n.toggleSpec()):t.showToast({title:o.errmsg,icon:"none"}),t.hideLoading()})}},clickSkuValue:function(t){for(var e=t.specification,n=t.id,i=this.specificationList,o=0;o<i.length;o++)if(i[o].name===e)for(var a=0;a<i[o].valueList.length;a++)i[o].valueList[a].id==n?i[o].valueList[a].checked?i[o].valueList[a].checked=!1:i[o].valueList[a].checked=!0:i[o].valueList[a].checked=!1;this.specificationList=i,this.changeSpecInfo()},changeSpecInfo:function(){var t=this.getCheckedSpecValue(),e=t.filter(function(t){return 0!=t.valueId}).map(function(t){return t.valueText});if(e.length>0?this.tmpSpecText=e.join("　"):this.tmpSpecText="请选择规格数量",this.isCheckedAllSpec()){this.checkedSpecText=this.tmpSpecText;var n=this.getCheckedProductItem(this.getCheckedSpecKey());if(!n||n.length<=0)return this.soldout=!0,void console.error(i("规格所对应货品不存在"," at pages/tuiguang/index.vue:448"));var o=n[0];o.number>0?(this.checkedSpecPrice=o.price,this.soldout=!1):(this.checkedSpecPrice=this.goods.retailPrice,this.soldout=!0)}else this.checkedSpecText="规格数量选择",this.checkedSpecPrice=this.goods.retailPrice,this.soldout=!1},getCheckedProductItem:function(t){return this.productList.filter(function(e){return e.specifications.toString()==t.toString()})},isCheckedAllSpec:function(){return!this.getCheckedSpecValue().some(function(t){if(0==t.valueId)return!0})},getCheckedSpecKey:function(){var t=this.getCheckedSpecValue().map(function(t){return t.valueText});return t},getCheckedSpecValue:function(){for(var t=[],e=this.specificationList,n=0;n<e.length;n++){for(var i={name:e[n].name,valueId:0,valueText:""},o=0;o<e[n].valueList.length;o++)e[n].valueList[o].checked&&(i.valueId=e[n].valueList[o].id,i.valueText=e[n].valueList[o].value);t.push(i)}return t},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){var e=this;t.showLoading({title:"请稍后"});var n="/collect/addordelete";c.default.httppost(n,{type:0,valueId:this.id}).then(function(n){var i=n.data;0==i.errno?(e.responsdata.userHasCollect=!e.responsdata.userHasCollect,e.responsdata.userHasCollect?t.showToast({title:"收藏成功",icon:"none"}):t.showToast({title:"取消收藏",icon:"none"})):501==i.errno&&t.navigateTo({url:"../public/login"}),t.hideLoading()}).catch(function(e){t.hideLoading()})},buy:function(e){t.setStorageSync("cartId",e),t.navigateTo({url:"/pages/order/createOrder"})},navto:function(){t.navigateTo({url:"/pages/commentlist/index?id=".concat(this.id)})},navtocart:function(e){t.switchTab({url:"/pages/cart/cart",success:function(t){var e=getCurrentPages().pop();e.onLoad()}})},navToDetailPage:function(e){var n=e.id;t.navigateTo({url:"/pages/product/product?id=".concat(n)})}})};e.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},"35f9":function(t,e,n){"use strict";n.r(e);var i=n("463f"),o=n("f3a8");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("f1f9");var c=n("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"463f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},ccdd:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");i(n("66fd"));var e=i(n("35f9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f1f9:function(t,e,n){"use strict";var i=n("1477"),o=n.n(i);o.a},f3a8:function(t,e,n){"use strict";n.r(e);var i=n("2b04"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}},[["ccdd","common/runtime","common/vendor"]]]);
});
require('pages/tuiguang/index.js');
__wxRoute = 'pages/mycoupon/couponlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mycoupon/couponlist.js';

define('pages/mycoupon/couponlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mycoupon/couponlist"],{"0658":function(t,n,e){"use strict";e.r(n);var o=e("5975"),c=e("fe6c");for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);e("1bf6");var i=e("2877"),r=Object(i["a"])(c["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"1bf6":function(t,n,e){"use strict";var o=e("be68"),c=e.n(o);c.a},"378c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e("2f62");var o=c(e("454f"));function c(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{couponList:[],tabCurrentIndex:0,state:0}},onLoad:function(n){t.getStorageSync("couponList")?this.couponList=t.getStorageSync("couponList"):this.mycoloect()},onPullDownRefresh:function(){this.mycoloect(!0)},methods:{mycoloect:function(n){var e=this;t.showLoading({title:"正在加载"});var c="/home/index";o.default.httpget(c).then(function(o){var c=o.data;0==c.errno&&(e.couponList=c.data.couponList),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){t.hideLoading(),n&&t.stopPullDownRefresh()})},receive:function(n){var e=this,c="/coupon/receive";o.default.httppost(c,{couponId:n.id}).then(function(n){var o=n.data;0==o.errno?(t.showToast({title:"领取成功！",icon:"none"}),e.mycoloect()):501==o.errno?(t.showToast({title:o.errmsg,icon:"none"}),t.switchTab({url:"/pages/user/user"})):t.showToast({title:o.errmsg,icon:"none"})}).catch(function(n){t.showToast({title:n.errmsg,icon:"none"})})}}};n.default=u}).call(this,e("6e42")["default"])},5975:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return c})},be68:function(t,n,e){},e549:function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");o(e("66fd"));var n=o(e("0658"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},fe6c:function(t,n,e){"use strict";e.r(n);var o=e("378c"),c=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=c.a}},[["e549","common/runtime","common/vendor"]]]);
});
require('pages/mycoupon/couponlist.js');
__wxRoute = 'pages/mycoupon/mycoupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mycoupon/mycoupon.js';

define('pages/mycoupon/mycoupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mycoupon/mycoupon"],{7242:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("795b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"795b":function(t,e,n){"use strict";n.r(e);var a=n("e461"),o=n("93ef");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("f3bc");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"93ef":function(t,e,n){"use strict";n.r(e);var a=n("c5be"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},c5be:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var a=o(n("454f"));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{couponList:[],tabCurrentIndex:0,currentpage:1,totalPages:1,istabclick:!0,navList:[{state:0,text:"未使用"},{state:1,text:"已使用"},{state:2,text:"已过期"}],state:0}},onLoad:function(t){this.mycoloect()},onPullDownRefresh:function(){this.currentpage=1,this.mycoloect(!0)},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.mycoloect()},methods:{mycoloect:function(e){var n=this;t.showLoading({title:"正在加载"});var o="/coupon/mylist?status="+this.state+"&page="+this.currentpage+"&limit=10";a.default.httpget(o).then(function(a){var o=a.data;0==o.errno&&((e||n.istabclick)&&(n.couponList=[]),n.couponList=n.couponList.concat(o.data.list),n.totalPages=o.data.pages,n.istabclick=!1),e&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(n){t.hideLoading(),e&&t.stopPullDownRefresh()})},tabClick:function(t,e){this.tabCurrentIndex=t,this.state=e,this.istabclick=!0,this.currentpage=1,this.mycoloect()},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(id)})}}};e.default=c}).call(this,n("6e42")["default"])},e461:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},f3bc:function(t,e,n){"use strict";var a=n("fa1c"),o=n.n(a);o.a},fa1c:function(t,e,n){}},[["7242","common/runtime","common/vendor"]]]);
});
require('pages/mycoupon/mycoupon.js');
__wxRoute = 'pages/order/createOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/createOrder.js';

define('pages/order/createOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/createOrder"],{1299:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("454f"));function r(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{maskState:!1,desc:"",payType:1,checkedGoodsList:[],goods:{goodsTotalPrice:0,couponPrice:0},couponList:[],checkedAddress:{name:"请选择地址",province:"",tel:"",city:"",county:"",addressDetail:"",id:0},couponId:0,grouponRulesId:0,grouponLinkId:0,cartId:0,message:"",addressData:{name:"许小星",mobile:"13853989563",addressName:"金九大道",address:"山东省济南市历城区",area:"149号",default:!1}}},onLoad:function(){this.onloadstart()},onShow:function(){this.onloadstart()},onPullDownRefresh:function(){this.cartdata(!0),this.compondata()},methods:{onloadstart:function(){this.cartId=t.getStorageSync("cartId")?t.getStorageSync("cartId"):this.cartId,this.couponId=t.getStorageSync("couponId")?t.getStorageSync("couponId"):this.couponId,this.grouponRulesId=t.getStorageSync("grouponRulesId")?t.getStorageSync("grouponRulesId"):this.grouponRulesId,this.cartdata(),this.compondata()},openmask:function(){this.maskState=!0},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},goto:function(e){t.navigateTo({url:"/pages/address/address"})},cartdata:function(e){var o=this;t.showLoading({title:"正在加载"});var r="/cart/checkout?cartId=".concat(this.cartId,"&addressId=").concat(this.checkedAddress.id,"&couponId=").concat(this.couponId,"&grouponRulesId=").concat(this.grouponRulesId);n.default.httpget(r).then(function(n){var r=n.data;0==r.errno&&(o.checkedGoodsList=r.data.checkedGoodsList,o.goods=r.data,o.couponId=o.goods.couponId,o.checkedAddress=r.data.checkedAddress,console.log(a(o.checkedAddress.name," at pages/order/createOrder.vue:188"))),e&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(o){t.showToast({title:res.data.errmsg,icon:"none"}),t.hideLoading(),e&&t.stopPullDownRefresh()})},compondata:function(){var t=this,e="/coupon/selectlist?cartId="+this.cartId+"&grouponRulesId=0";n.default.httpget(e).then(function(e){0==e.data.errno&&(t.couponList=e.data.data.list)}).catch(function(t){})},toggleMask:function(t){this.maskState=!1,this.couponId=t,this.cartdata()},numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},submit:function(){var e=this;if(0==this.checkedAddress.id)return t.showToast({title:"请选择收货地址",icon:"none"}),!1;var o="/order/submit";t.showLoading({title:"正在加载"}),n.default.httppost(o,{addressId:this.checkedAddress.id,cartId:this.cartId,couponId:this.couponId,grouponLinkId:0,grouponRulesId:this.grouponRulesId,message:this.message}).then(function(o){if(0==o.data.errno){var a=o.data.data.orderId;t.setStorageSync("couponId",0),e.paysub(a)}else t.showToast({title:o.data.errmsg,icon:"none"}),setTimeout(function(){t.redirectTo({url:"/pages/order/order?state=0"})},500);t.hideLoading()}).catch(function(t){}),t.hideLoading()},paysub:function(e){t.showLoading({title:"正在加载"});var o="/order/prepay";o="/order/prepayDouyin",n.default.httppost(o,{orderId:e,code:t.getStorageSync("code")}).then(function(e){if(0===e.data.errno){var o=e.data.data;t.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.packageValue,signType:o.signType,paySign:o.paySign,success:function(e){console.log(a(e.errno," at pages/order/createOrder.vue:268")),0==e.errno?(t.showToast({title:"支付成功！",icon:"none"}),t.redirectTo({url:"/pages/order/order?state=2"})):(t.showToast({title:"支付失败！",icon:"none"}),t.redirectTo({url:"/pages/order/order?state=1"})),t.hideLoading()},fail:function(e){t.showToast({title:"支付失败！",icon:"none"}),t.redirectTo({url:"/pages/order/order?state=1"}),t.hideLoading()},complete:function(e){t.hideLoading()}})}else t.hideLoading(),t.redirectTo({url:"/pages/order/order?state=1"}),t.showToast({title:e.data.errmsg,icon:"none"})})},stopPrevent:function(){}}};e.default=d}).call(this,o("6e42")["default"],o("0de9")["default"])},"30ab":function(t,e,o){"use strict";var a=o("f5bf"),n=o.n(a);n.a},"58c8":function(t,e,o){"use strict";o.r(e);var a=o("1299"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"84f8":function(t,e,o){"use strict";(function(t){o("d82e"),o("921b");a(o("66fd"));var e=a(o("f943"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},ba7a:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},f5bf:function(t,e,o){},f943:function(t,e,o){"use strict";o.r(e);var a=o("ba7a"),n=o("58c8");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("30ab");var d=o("2877"),s=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports}},[["84f8","common/runtime","common/vendor"]]]);
});
require('pages/order/createOrder.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{a37e:function(e,t,n){},ab05:function(e,t,n){"use strict";(function(e){n("d82e"),n("921b");a(n("66fd"));var t=a(n("c108"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},ae08:function(e,t,n){"use strict";n.r(t);var a=n("e4b2"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},bb0f:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},c108:function(e,t,n){"use strict";n.r(t);var a=n("bb0f"),i=n("ae08");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("e752");var s=n("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},e4b2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("454f"));function i(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{addressList:[]}},onPullDownRefresh:function(){this.refreshList(!0)},onShow:function(){this.refreshList()},methods:{checkAddress:function(t){this.$api.prePage().checkedAddress.id=t.id,e.setStorageSync("addressId",t.id),this.$api.prePage().cartdata(),e.navigateBack()},addAddress:function(t,n){var a=0;n&&(a=n.id),e.navigateTo({url:"/pages/address/addressManage?type=".concat(t,"&id=").concat(a)})},deletes:function(t){var n=this;e.showModal({title:"",content:"确定要删除此地址吗？",success:function(i){if(i.confirm){e.showLoading({title:"正在删除"});var r="/address/delete";a.default.httppost(r,{id:t.id}).then(function(t){var a=t.data;0==a.errno&&n.refreshList(),e.hideLoading()}).catch(function(t){e.hideLoading()})}}})},refreshList:function(t){var n=this;e.showLoading({title:"正在加载"});var i="/address/list";a.default.httpget(i).then(function(a){var i=a.data;0==i.errno?n.addressList=i.data.list:501==i.errno?e.navigateTo({url:"../public/login"}):e.showToast({title:i.errmsg,icon:"none"}),t&&e.stopPullDownRefresh(),e.hideLoading()}).catch(function(n){t&&e.stopPullDownRefresh(),e.hideLoading()})}}};t.default=r}).call(this,n("6e42")["default"])},e752:function(e,t,n){"use strict";var a=n("a37e"),i=n.n(a);i.a}},[["ab05","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/address/addressManage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressManage.js';

define('pages/address/addressManage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"1d59":function(t,a,e){},"43f6":function(t,a,e){"use strict";e.r(a);var s=e("eda4"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);a["default"]=n.a},4595:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return n})},7576:function(t,a,e){"use strict";(function(t){e("d82e"),e("921b");s(e("66fd"));var a=s(e("d05b"));function s(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},d05b:function(t,a,e){"use strict";e.r(a);var s=e("4595"),n=e("43f6");for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);e("f39e");var o=e("2877"),d=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);a["default"]=d.exports},eda4:function(t,a,e){"use strict";(function(t,s){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return Promise.all([e.e("common/vendor"),e.e("components/Winglau14-lotusAddress/Winglau14-lotusAddress")]).then(e.bind(null,"a0cc"))},d={components:{"lotus-address":o},data:function(){return{manageType:"add",option:{},addressData:{addressDetail:"",tel:"",name:"",id:0,isDefault:!1,areaCode:"0",city:" ",county:" ",province:" "},lotusAddressData:{visible:!1,provinceName:"",cityName:"",townName:""},region:""}},onLoad:function(t){this.option=t,this.getdata()},onPullDownRefresh:function(){this.getdata(!0)},methods:{openPicker:function(){this.lotusAddressData.visible=!0,this.lotusAddressData.provinceName="广东省",this.lotusAddressData.cityName="广州市",this.lotusAddressData.townName="白云区"},choseValue:function(a){console.log(t(a," at pages/address/addressManage.vue:82")),this.lotusAddressData.visible=a.visible,a.isChose&&(this.addressData.province=a.province,this.addressData.city=a.city,this.addressData.county=a.town,this.addressData.areaCode=a.townCode,this.region="".concat(a.province," ").concat(a.city," ").concat(a.town))},getdata:function(t){var a=this,e="新增收货地址";if("edit"===this.option.type){e="编辑收货地址",s.showLoading({title:"加载中, 请稍后！"});var i="/address/detail?id="+this.option.id;n.default.httpget(i).then(function(e){var n=e.data;0==n.errno?(a.addressData.addressDetail=n.data.addressDetail,a.addressData.tel=n.data.tel,a.addressData.name=n.data.name,a.addressData.id=n.data.id,a.addressData.isDefault=n.data.isDefault,a.addressData.areaCode=n.data.areaCode,a.addressData.city=n.data.city,a.addressData.county=n.data.county,a.addressData.province=n.data.province):501==n.errno?s.navigateTo({url:"../public/login"}):s.showToast({title:n.errmsg,icon:"none"}),t&&s.stopPullDownRefresh(),s.hideLoading()}).catch(function(a){s.showToast({title:respons.errmsg,icon:"none"}),s.hideLoading(),t&&s.stopPullDownRefresh()})}this.manageType=this.option.type,s.setNavigationBarTitle({title:e})},switchChange:function(t){this.addressData.isDefault=t.detail.value},confirm:function(){var t=this.addressData;if(t.name)if(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(t.tel))if(t.addressDetail){s.showLoading({title:"提交中, 请稍后！"});var a="/address/save";n.default.httppost(a,this.addressData).then(function(t){var a=t.data;0==a.errno?(s.showToast({title:a.errmsg,icon:"none"}),s.navigateBack()):501==a.errno?s.navigateTo({url:"../public/login"}):s.showToast({title:a.errmsg,icon:"none"}),s.hideLoading()}).catch(function(t){s.hideLoading()})}else this.$api.msg("请填写详细地址！");else this.$api.msg("请输入正确的手机号码");else this.$api.msg("请填写收货人姓名")}}};a.default=d}).call(this,e("0de9")["default"],e("6e42")["default"])},f39e:function(t,a,e){"use strict";var s=e("1d59"),n=e.n(s);n.a}},[["7576","common/runtime","common/vendor"]]]);
});
require('pages/address/addressManage.js');
__wxRoute = 'pages/money/pay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/money/pay.js';

define('pages/money/pay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/money/pay"],{"0b9f":function(n,t,e){"use strict";var u=e("5e1f"),r=e.n(u);r.a},1811:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,u,r,a,o){try{var c=n[a](o),f=c.value}catch(i){return void e(i)}c.done?t(f):Promise.resolve(f).then(u,r)}function o(n){return function(){var t=this,e=arguments;return new Promise(function(u,r){var o=n.apply(t,e);function c(n){a(o,u,r,c,f,"next",n)}function f(n){a(o,u,r,c,f,"throw",n)}c(void 0)})}}var c={data:function(){return{payType:1,orderInfo:{}}},computed:{},onLoad:function(n){},methods:{changePayType:function(n){this.payType=n},confirm:function(){var t=o(u.default.mark(function t(){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.redirectTo({url:"/pages/money/paySuccess"});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};t.default=c}).call(this,e("6e42")["default"])},"2a28":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"2d44":function(n,t,e){"use strict";(function(n){e("d82e"),e("921b");u(e("66fd"));var t=u(e("38ea"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"38ea":function(n,t,e){"use strict";e.r(t);var u=e("2a28"),r=e("fa30");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("0b9f");var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"5e1f":function(n,t,e){},fa30:function(n,t,e){"use strict";e.r(t);var u=e("1811"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a}},[["2d44","common/runtime","common/vendor"]]]);
});
require('pages/money/pay.js');
__wxRoute = 'pages/money/paySuccess';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/money/paySuccess.js';

define('pages/money/paySuccess.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/money/paySuccess"],{"402f":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"6e77":function(e,n,t){},b6a6:function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return a})},c185:function(e,n,t){"use strict";var u=t("6e77"),a=t.n(u);a.a},cec2:function(e,n,t){"use strict";t.r(n);var u=t("b6a6"),a=t("ea8e");for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);t("c185");var r=t("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},d6b5:function(e,n,t){"use strict";(function(e){t("d82e"),t("921b");u(t("66fd"));var n=u(t("cec2"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},ea8e:function(e,n,t){"use strict";t.r(n);var u=t("402f"),a=t.n(u);for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);n["default"]=a.a}},[["d6b5","common/runtime","common/vendor"]]]);
});
require('pages/money/paySuccess.js');
__wxRoute = 'pages/notice/notice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/notice/notice.js';

define('pages/notice/notice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/notice"],{"13b1":function(t,n,e){"use strict";var u=e("8f69"),r=e.n(u);r.a},3954:function(t,n,e){"use strict";e.r(n);var u=e("e070"),r=e("e1de");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("13b1");var f=e("2877"),o=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"8f69":function(t,n,e){},"9d11":function(t,n,e){"use strict";(function(t){e("d82e"),e("921b");u(e("66fd"));var n=u(e("3954"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a0ff:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},e070:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},e1de:function(t,n,e){"use strict";e.r(n);var u=e("a0ff"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a}},[["9d11","common/runtime","common/vendor"]]]);
});
require('pages/notice/notice.js');
__wxRoute = 'pages/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category.js';

define('pages/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"07ad":function(t,e,n){"use strict";n.r(e);var a=n("9e70"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},2643:function(t,e,n){"use strict";var a=n("71e6"),r=n.n(a);r.a},"364c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"3c23":function(t,e,n){"use strict";n.r(e);var a=n("ce0d"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},6350:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"71e6":function(t,e,n){},"7c57":function(t,e,n){"use strict";n.r(e);var a=n("6350"),r=n("3c23");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var u=n("2877"),c=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"7e05":function(t,e,n){"use strict";n.r(e);var a=n("364c"),r=n("07ad");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("2643");var u=n("2877"),c=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"9e70":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),r=(u(n("7c57")),u(n("454f"))),i=u(n("8e4a"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,a,r,i,u){try{var c=t[i](u),o=c.value}catch(s){return void n(s)}c.done?e(o):Promise.resolve(o).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function u(t){c(i,a,r,u,o,"next",t)}function o(t){c(i,a,r,u,o,"throw",t)}u(void 0)})}}var s={data:function(){return{sizeCalcState:!1,currentImage:"",tabScrollTop:0,currentId:0,flist:[],height:0,slist:[],tlist:[]}},onLoad:function(){var e=this;t.getSystemInfo({success:function(n){var a=0;e.height=n.windowHeight-t.upx2px(a)}});var n=t.getStorageSync("categorylist");n?(this.flist=n.categoryList,this.currentImage=n.currentCategory.picUrl,this.slist=n.currentSubCategory):this.loadData()},onPullDownRefresh:function(){this.currentId=0,this.loadData(!0)},methods:{onShareAppMessage:function(t){i.default.sharebtn(t)},loadData:function(){var e=o(a.default.mark(function e(n){var i,u=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.showLoading({title:"正在加载"}),i="/catalog/index",r.default.httpget(i).then(function(e){var a=e.data;0==a.errno&&(u.flist=a.data.categoryList,u.currentImage=a.data.currentCategory.picUrl,u.slist=a.data.currentSubCategory,t.hideLoading(),t.setStorageSync("categorylist",a.data)),n&&t.stopPullDownRefresh()}).catch(function(e){t.hideLoading(),n&&t.stopPullDownRefresh()});case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),addloadData:function(){var e=o(a.default.mark(function e(n){var i,u=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.showLoading({title:"正在加载"}),i="/catalog/current?id="+n,r.default.httpget(i).then(function(e){var n=e.data;0==n.errno&&(u.slist=n.data.currentSubCategory,u.currentImage=n.data.currentCategory.picUrl,t.hideLoading())}).catch(function(e){t.hideLoading()});case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),tabtap:function(t,e){this.currentId=e,this.addloadData(t.id)},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,n=this.slist.filter(function(t){return t.top<=e}).reverse();n.length>0&&(this.currentId=n[0].pid)},calcSize:function(){var e=0;this.slist.forEach(function(n){var a=t.createSelectorQuery().select("#main-"+n.id);a.fields({size:!0},function(t){n.top=e,e+=t.height,n.bottom=e}).exec()}),this.sizeCalcState=!0},navToList:function(e){t.navigateTo({url:"/pages/product/list?tid=".concat(e)})}}};e.default=s}).call(this,n("6e42")["default"])},c379:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("7e05"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ce0d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a}},[["c379","common/runtime","common/vendor"]]]);
});
require('pages/category/category.js');
__wxRoute = 'pages/product/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/list.js';

define('pages/product/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"1f58":function(t,e,a){"use strict";(function(t){a("d82e"),a("921b");n(a("66fd"));var e=n(a("db09"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"4c76":function(t,e,a){},a466:function(t,e,a){"use strict";a.r(e);var n=a("c9a5"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},c792:function(t,e,a){"use strict";var n=a("4c76"),i=a.n(n);i.a},c9a5:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("a34a")),i=o(a("454f"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,n,i,o,r){try{var c=t[o](r),s=c.value}catch(u){return void a(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(n,i){var o=t.apply(e,a);function c(t){r(o,n,i,c,s,"next",t)}function s(t){r(o,n,i,c,s,"throw",t)}c(void 0)})}}var s=function(){return a.e("components/uni-load-more/uni-load-more").then(a.bind(null,"d05d"))},u={components:{uniLoadMore:s},data:function(){return{cateMaskState:0,currentpage:1,totalPages:1,loadModal:!0,searchtxt:"",loadingType:"more",filterIndex:0,cateId:0,priceOrder:"asc",cateList:[],goodsList:[],sort:0}},onLoad:function(t){this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPullDownRefresh:function(){this.currentpage=1,this.loadData("refresh")},onReachBottom:function(){if(this.currentpage>=this.totalPages)return!1;this.currentpage++,this.loadData()},methods:{loadCateList:function(){var t=c(n.default.mark(function t(e,a){var i,o;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:i=t.sent,o=i.filter(function(t){return t.pid==e}),o.forEach(function(t){var e=i.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=o;case 6:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),loadData:function(){var e=c(n.default.mark(function e(){var a,o,r,c=this,s=arguments;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=s.length>0&&void 0!==s[0]?s[0]:"add",t.showLoading({title:"正在加载"}),o="/goods/list?categoryId="+this.cateId+"&page="+this.currentpage+"&limit=10",i.default.httpget(o).then(function(e){var n=e.data;0==n.errno&&("refresh"===a&&(c.goodsList=[]),c.goodsList=c.goodsList.concat(n.data.list),c.totalPages=n.data.pages),"refresh"===a&&t.stopPullDownRefresh(),c.loadModal=!1,t.hideLoading()}).catch(function(e){t.hideLoading()}),r="/goods/category?id="+this.cateId,i.default.httpget(r).then(function(e){var a=e.data;0==a.errno&&t.setNavigationBarTitle({title:a.data.currentCategory.name}),c.loadModal=!1,t.hideLoading()}).catch(function(e){t.hideLoading()});case 6:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),searchinput:function(){var e=this;t.showLoading({title:"正在加载"});var a="/goods/list?keyword="+this.searchtxt+"&page=1&limit=100&sort=name&order="+this.priceOrder+"&categoryId=0";i.default.httpget(a).then(function(a){var n=a.data;0==n.errno&&(e.goodsList=n.data.list),e.loadModal=!1,t.hideLoading()}).catch(function(e){t.hideLoading()})},tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.sort=e,this.priceOrder=2===e&&"asc"===this.priceOrder?"desc":"asc",t.pageScrollTo({duration:300,scrollTop:0}),this.searchinput())},toggleCateMask:function(t){var e=this,a="show"===t?10:300,n="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=n},a)},changeCate:function(e){this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var a=e.id;t.navigateTo({url:"/pages/product/product?id=".concat(a)})},stopPrevent:function(){}}};e.default=u}).call(this,a("6e42")["default"])},ce34:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},db09:function(t,e,a){"use strict";a.r(e);var n=a("ce34"),i=a("a466");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("c792");var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["1f58","common/runtime","common/vendor"]]]);
});
require('pages/product/list.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

