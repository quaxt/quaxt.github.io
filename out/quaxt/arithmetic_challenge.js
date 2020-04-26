// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('quaxt.arithmetic_challenge');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('clojure.edn');
if((typeof quaxt !== 'undefined') && (typeof quaxt.arithmetic_challenge !== 'undefined') && (typeof quaxt.arithmetic_challenge.app_state !== 'undefined')){
} else {
quaxt.arithmetic_challenge.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof quaxt !== 'undefined') && (typeof quaxt.arithmetic_challenge !== 'undefined') && (typeof quaxt.arithmetic_challenge.quiz_length !== 'undefined')){
} else {
quaxt.arithmetic_challenge.quiz_length = (10);
}
quaxt.arithmetic_challenge.all_questions = (function quaxt$arithmetic_challenge$all_questions(){
return cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function quaxt$arithmetic_challenge$all_questions_$_iter__4608(s__4609){
return (new cljs.core.LazySeq(null,(function (){
var s__4609__$1 = s__4609;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4609__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var op = cljs.core.first(xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__4609__$1,op,xs__6012__auto__,temp__5457__auto__){
return (function quaxt$arithmetic_challenge$all_questions_$_iter__4608_$_iter__4610(s__4611){
return (new cljs.core.LazySeq(null,((function (s__4609__$1,op,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__4611__$1 = s__4611;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__4611__$1);
if(temp__5457__auto____$1){
var xs__6012__auto____$1 = temp__5457__auto____$1;
var x = cljs.core.first(xs__6012__auto____$1);
var iterys__4519__auto__ = ((function (s__4611__$1,s__4609__$1,x,xs__6012__auto____$1,temp__5457__auto____$1,op,xs__6012__auto__,temp__5457__auto__){
return (function quaxt$arithmetic_challenge$all_questions_$_iter__4608_$_iter__4610_$_iter__4612(s__4613){
return (new cljs.core.LazySeq(null,((function (s__4611__$1,s__4609__$1,x,xs__6012__auto____$1,temp__5457__auto____$1,op,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__4613__$1 = s__4613;
while(true){
var temp__5457__auto____$2 = cljs.core.seq(s__4613__$1);
if(temp__5457__auto____$2){
var s__4613__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__4613__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__4613__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__4615 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__4614 = (0);
while(true){
if((i__4614 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__4614);
cljs.core.chunk_append(b__4615,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));

var G__4628 = (i__4614 + (1));
i__4614 = G__4628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4615),quaxt$arithmetic_challenge$all_questions_$_iter__4608_$_iter__4610_$_iter__4612(cljs.core.chunk_rest(s__4613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4615),null);
}
} else {
var y = cljs.core.first(s__4613__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null),quaxt$arithmetic_challenge$all_questions_$_iter__4608_$_iter__4610_$_iter__4612(cljs.core.rest(s__4613__$2)));
}
} else {
return null;
}
break;
}
});})(s__4611__$1,s__4609__$1,x,xs__6012__auto____$1,temp__5457__auto____$1,op,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__4611__$1,s__4609__$1,x,xs__6012__auto____$1,temp__5457__auto____$1,op,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(13))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,quaxt$arithmetic_challenge$all_questions_$_iter__4608_$_iter__4610(cljs.core.rest(s__4611__$1)));
} else {
var G__4629 = cljs.core.rest(s__4611__$1);
s__4611__$1 = G__4629;
continue;
}
} else {
return null;
}
break;
}
});})(s__4609__$1,op,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__4609__$1,op,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(13))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,quaxt$arithmetic_challenge$all_questions_$_iter__4608(cljs.core.rest(s__4609__$1)));
} else {
var G__4630 = cljs.core.rest(s__4609__$1);
s__4609__$1 = G__4630;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+","*"], null));
})(),(function (){var iter__4523__auto__ = (function quaxt$arithmetic_challenge$all_questions_$_iter__4616(s__4617){
return (new cljs.core.LazySeq(null,(function (){
var s__4617__$1 = s__4617;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4617__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__4617__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function quaxt$arithmetic_challenge$all_questions_$_iter__4616_$_iter__4618(s__4619){
return (new cljs.core.LazySeq(null,((function (s__4617__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__4619__$1 = s__4619;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__4619__$1);
if(temp__5457__auto____$1){
var s__4619__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__4619__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__4619__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__4621 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__4620 = (0);
while(true){
if((i__4620 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__4620);
cljs.core.chunk_append(b__4621,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,"-",cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));

var G__4631 = (i__4620 + (1));
i__4620 = G__4631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4621),quaxt$arithmetic_challenge$all_questions_$_iter__4616_$_iter__4618(cljs.core.chunk_rest(s__4619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4621),null);
}
} else {
var y = cljs.core.first(s__4619__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,"-",cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null),quaxt$arithmetic_challenge$all_questions_$_iter__4616_$_iter__4618(cljs.core.rest(s__4619__$2)));
}
} else {
return null;
}
break;
}
});})(s__4617__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__4617__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),x)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,quaxt$arithmetic_challenge$all_questions_$_iter__4616(cljs.core.rest(s__4617__$1)));
} else {
var G__4632 = cljs.core.rest(s__4617__$1);
s__4617__$1 = G__4632;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(13)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function quaxt$arithmetic_challenge$all_questions_$_iter__4622(s__4623){
return (new cljs.core.LazySeq(null,(function (){
var s__4623__$1 = s__4623;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4623__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__4623__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function quaxt$arithmetic_challenge$all_questions_$_iter__4622_$_iter__4624(s__4625){
return (new cljs.core.LazySeq(null,((function (s__4623__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__4625__$1 = s__4625;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__4625__$1);
if(temp__5457__auto____$1){
var s__4625__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__4625__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__4625__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__4627 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__4626 = (0);
while(true){
if((i__4626 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__4626);
cljs.core.chunk_append(b__4627,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,"/",cljs.core.cst$kw$x,(x * y),cljs.core.cst$kw$y,y], null));

var G__4633 = (i__4626 + (1));
i__4626 = G__4633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4627),quaxt$arithmetic_challenge$all_questions_$_iter__4622_$_iter__4624(cljs.core.chunk_rest(s__4625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4627),null);
}
} else {
var y = cljs.core.first(s__4625__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,"/",cljs.core.cst$kw$x,(x * y),cljs.core.cst$kw$y,y], null),quaxt$arithmetic_challenge$all_questions_$_iter__4622_$_iter__4624(cljs.core.rest(s__4625__$2)));
}
} else {
return null;
}
break;
}
});})(s__4623__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__4623__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(13))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,quaxt$arithmetic_challenge$all_questions_$_iter__4622(cljs.core.rest(s__4623__$1)));
} else {
var G__4634 = cljs.core.rest(s__4623__$1);
s__4623__$1 = G__4634;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(13)));
})()], 0)));
});
quaxt.arithmetic_challenge.sort_by_difficulty = (function quaxt$arithmetic_challenge$sort_by_difficulty(questions){
var map__4635 = cljs.core.deref(quaxt.arithmetic_challenge.app_state);
var map__4635__$1 = (((((!((map__4635 == null))))?(((((map__4635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4635):map__4635);
var difficulty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4635__$1,cljs.core.cst$kw$difficulty);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(((function (map__4635,map__4635__$1,difficulty){
return (function (a,b){
return cljs.core.compare((difficulty.cljs$core$IFn$_invoke$arity$2 ? difficulty.cljs$core$IFn$_invoke$arity$2(b,(1000000)) : difficulty.call(null,b,(1000000))),(difficulty.cljs$core$IFn$_invoke$arity$2 ? difficulty.cljs$core$IFn$_invoke$arity$2(a,(1000000)) : difficulty.call(null,a,(1000000))));
});})(map__4635,map__4635__$1,difficulty))
,questions);
});
quaxt.arithmetic_challenge.make_quiz = (function quaxt$arithmetic_challenge$make_quiz(n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,quaxt.arithmetic_challenge.sort_by_difficulty(quaxt.arithmetic_challenge.all_questions()));
});
quaxt.arithmetic_challenge.now = (function quaxt$arithmetic_challenge$now(){
return Date.now();
});
quaxt.arithmetic_challenge.start_new_quiz = (function quaxt$arithmetic_challenge$start_new_quiz(n){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quaxt.arithmetic_challenge.app_state,cljs.core.assoc,cljs.core.cst$kw$quiz,quaxt.arithmetic_challenge.make_quiz(n),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$results,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$user_DASH_answer,"",cljs.core.cst$kw$start_DASH_time,quaxt.arithmetic_challenge.now()], 0));
});
quaxt.arithmetic_challenge.ask = (function quaxt$arithmetic_challenge$ask(p__4637,user_answer){
var map__4638 = p__4637;
var map__4638__$1 = (((((!((map__4638 == null))))?(((((map__4638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4638):map__4638);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4638__$1,cljs.core.cst$kw$x);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4638__$1,cljs.core.cst$kw$op);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4638__$1,cljs.core.cst$kw$y);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"20vh"], null)], null),x,op,y,"=",user_answer,"\u25AE"], null);
});
quaxt.arithmetic_challenge.type_key = (function quaxt$arithmetic_challenge$type_key(text){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quaxt.arithmetic_challenge.app_state,cljs.core.update,cljs.core.cst$kw$user_DASH_answer,cljs.core.str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));
});
quaxt.arithmetic_challenge.keypad_key = (function quaxt$arithmetic_challenge$keypad_key(text,map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(map,cljs.core.cst$kw$style,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"10vh",cljs.core.cst$kw$width,"100%"], null)),cljs.core.cst$kw$on_DASH_click,(function (){
return quaxt.arithmetic_challenge.type_key(text);
})),text], null);
});
quaxt.arithmetic_challenge.type_backspace = (function quaxt$arithmetic_challenge$type_backspace(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quaxt.arithmetic_challenge.app_state,cljs.core.update,cljs.core.cst$kw$user_DASH_answer,(function (string){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(cljs.core.count(string) - (1)));
}));
});
quaxt.arithmetic_challenge.backspace_key = (function quaxt$arithmetic_challenge$backspace_key(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"10vh",cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,quaxt.arithmetic_challenge.type_backspace], null),"\u232B"], null);
});
quaxt.arithmetic_challenge.as_int = (function quaxt$arithmetic_challenge$as_int(x){
if(typeof x === 'string'){
return parseInt(x);
} else {
return x;
}
});
quaxt.arithmetic_challenge.set_local_storage = (function quaxt$arithmetic_challenge$set_local_storage(key_name,value){
return window.localStorage.setItem(key_name,value);
});
quaxt.arithmetic_challenge.get_local_storage = (function quaxt$arithmetic_challenge$get_local_storage(key_name){
return window.localStorage.getItem(key_name);
});
quaxt.arithmetic_challenge.lookup_op = new cljs.core.PersistentArrayMap(null, 4, ["+",cljs.core._PLUS_,"-",cljs.core._,"*",cljs.core._STAR_,"/",cljs.core._SLASH_], null);
quaxt.arithmetic_challenge.right_QMARK_ = (function quaxt$arithmetic_challenge$right_QMARK_(op,x,y,user_answer){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__4640 = (quaxt.arithmetic_challenge.lookup_op.cljs$core$IFn$_invoke$arity$1 ? quaxt.arithmetic_challenge.lookup_op.cljs$core$IFn$_invoke$arity$1(op) : quaxt.arithmetic_challenge.lookup_op.call(null,op));
return (fexpr__4640.cljs$core$IFn$_invoke$arity$2 ? fexpr__4640.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__4640.call(null,x,y));
})(),user_answer);
});
quaxt.arithmetic_challenge.difficulty = (function quaxt$arithmetic_challenge$difficulty(p__4641){
var map__4642 = p__4641;
var map__4642__$1 = (((((!((map__4642 == null))))?(((((map__4642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4642):map__4642);
var question = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4642__$1,cljs.core.cst$kw$question);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4642__$1,cljs.core.cst$kw$time);
var user_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4642__$1,cljs.core.cst$kw$user_DASH_answer);
var map__4644 = question;
var map__4644__$1 = (((((!((map__4644 == null))))?(((((map__4644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4644):map__4644);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4644__$1,cljs.core.cst$kw$op);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4644__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4644__$1,cljs.core.cst$kw$y);
if(quaxt.arithmetic_challenge.right_QMARK_(op,x,y,user_answer)){
return time;
} else {
return (2000000);
}
});
quaxt.arithmetic_challenge.read_difficulty_table_from_local_storage = (function quaxt$arithmetic_challenge$read_difficulty_table_from_local_storage(){
var difficulty_table_string = quaxt.arithmetic_challenge.get_local_storage("difficulty");
var difficulty_table = (cljs.core.truth_(difficulty_table_string)?clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(difficulty_table_string):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quaxt.arithmetic_challenge.app_state,cljs.core.assoc,cljs.core.cst$kw$difficulty,difficulty_table);
});
quaxt.arithmetic_challenge.compute_difficulty_table = (function quaxt$arithmetic_challenge$compute_difficulty_table(results){
var old_results = cljs.core.cst$kw$difficulty.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quaxt.arithmetic_challenge.app_state));
var result_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (old_results){
return (function (result){
quaxt.arithmetic_challenge.difficulty(result);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$question.cljs$core$IFn$_invoke$arity$1(result),quaxt.arithmetic_challenge.difficulty(result)], null);
});})(old_results))
,results));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_results,result_map], 0));
});
quaxt.arithmetic_challenge.update_difficulty_table = (function quaxt$arithmetic_challenge$update_difficulty_table(results){
var difficulty_table = quaxt.arithmetic_challenge.compute_difficulty_table(results);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([difficulty_table], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quaxt.arithmetic_challenge.app_state,cljs.core.assoc,cljs.core.cst$kw$difficulty,difficulty_table);

return quaxt.arithmetic_challenge.set_local_storage("difficulty",difficulty_table);
});
quaxt.arithmetic_challenge.type_enter = (function quaxt$arithmetic_challenge$type_enter(){
var map__4646 = cljs.core.deref(quaxt.arithmetic_challenge.app_state);
var map__4646__$1 = (((((!((map__4646 == null))))?(((((map__4646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4646):map__4646);
var user_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4646__$1,cljs.core.cst$kw$user_DASH_answer);
var quiz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4646__$1,cljs.core.cst$kw$quiz);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4646__$1,cljs.core.cst$kw$results);
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4646__$1,cljs.core.cst$kw$start_DASH_time);
if(cljs.core.truth_(cljs.core.first(quiz))){
var results__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$question,cljs.core.first(quiz),cljs.core.cst$kw$time,(quaxt.arithmetic_challenge.now() - start_time),cljs.core.cst$kw$user_DASH_answer,quaxt.arithmetic_challenge.as_int(user_answer)], null));
quaxt.arithmetic_challenge.update_difficulty_table(results__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quaxt.arithmetic_challenge.app_state,cljs.core.assoc,cljs.core.cst$kw$user_DASH_answer,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$quiz,cljs.core.rest(quiz),cljs.core.cst$kw$results,results__$1,cljs.core.cst$kw$start_DASH_time,quaxt.arithmetic_challenge.now()], 0));
} else {
return quaxt.arithmetic_challenge.start_new_quiz(quaxt.arithmetic_challenge.quiz_length);
}
});
quaxt.arithmetic_challenge.enter_key = (function quaxt$arithmetic_challenge$enter_key(font_size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,(function (){var or__4131__auto__ = font_size;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "10vh";
}
})(),cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_click,quaxt.arithmetic_challenge.type_enter], null),"\u23CE"], null);
});
quaxt.arithmetic_challenge.keypad = (function quaxt$arithmetic_challenge$keypad(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100vw"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"8"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"9"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"6"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"3"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad_key,"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.backspace_key], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.enter_key], null)], null)], null)], null)], null);
});
quaxt.arithmetic_challenge.right_or_wrong_td = (function quaxt$arithmetic_challenge$right_or_wrong_td(style,op,x,y,user_answer){
var right = quaxt.arithmetic_challenge.right_QMARK_(op,x,y,user_answer);
var s = cljs.core.assoc_in(style,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,cljs.core.cst$kw$color], null),((right)?"#00aa00":"ff0000"));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,s,((right)?"\u2713":"\u2717")], null);
});
quaxt.arithmetic_challenge.results_div = (function quaxt$arithmetic_challenge$results_div(){
var results = cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quaxt.arithmetic_challenge.app_state));
var style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"7vh"], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (results,style){
return (function (index,p__4648){
var map__4649 = p__4648;
var map__4649__$1 = (((((!((map__4649 == null))))?(((((map__4649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4649):map__4649);
var map__4650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4649__$1,cljs.core.cst$kw$question);
var map__4650__$1 = (((((!((map__4650 == null))))?(((((map__4650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4650):map__4650);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4650__$1,cljs.core.cst$kw$op);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4650__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4650__$1,cljs.core.cst$kw$y);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4649__$1,cljs.core.cst$kw$time);
var user_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4649__$1,cljs.core.cst$kw$user_DASH_answer);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,style,x,op,y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,style,"="], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,style,user_answer], null),quaxt.arithmetic_challenge.right_or_wrong_td(style,op,x,y,user_answer),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,style,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((time / (1000)))," s"].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null));
});})(results,style))
,results),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col_DASH_span,"4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.enter_key,"7vh"], null)], null)], null)], null)], null);
});
quaxt.arithmetic_challenge.quiz_app = (function quaxt$arithmetic_challenge$quiz_app(){
var map__4653 = cljs.core.deref(quaxt.arithmetic_challenge.app_state);
var map__4653__$1 = (((((!((map__4653 == null))))?(((((map__4653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4653):map__4653);
var user_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4653__$1,cljs.core.cst$kw$user_DASH_answer);
var quiz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4653__$1,cljs.core.cst$kw$quiz);
var question = cljs.core.first(quiz);
if(cljs.core.truth_(question)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.ask,question,user_answer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.keypad], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.results_div], null);
}
});
quaxt.arithmetic_challenge.mount = (function quaxt$arithmetic_challenge$mount(el){
var G__4655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quaxt.arithmetic_challenge.quiz_app], null);
var G__4656 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__4655,G__4656) : reagent.core.render_component.call(null,G__4655,G__4656));
});
quaxt.arithmetic_challenge.get_app_element = (function quaxt$arithmetic_challenge$get_app_element(){
return goog.dom.getElement("app");
});
quaxt.arithmetic_challenge.mount_app_element = (function quaxt$arithmetic_challenge$mount_app_element(){
var temp__5457__auto__ = quaxt.arithmetic_challenge.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return quaxt.arithmetic_challenge.mount(el);
} else {
return null;
}
});
quaxt.arithmetic_challenge.key_listener = (function quaxt$arithmetic_challenge$key_listener(key_event){
var key = key_event.key;
if(cljs.core.truth_((function (){var fexpr__4657 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["9",null,"3",null,"4",null,"8",null,"7",null,"5",null,"6",null,"1",null,"0",null,"2",null], null), null);
return (fexpr__4657.cljs$core$IFn$_invoke$arity$1 ? fexpr__4657.cljs$core$IFn$_invoke$arity$1(key) : fexpr__4657.call(null,key));
})())){
return quaxt.arithmetic_challenge.type_key(key);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")){
return quaxt.arithmetic_challenge.type_backspace();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Enter")){
return quaxt.arithmetic_challenge.type_enter();
} else {
return null;
}
}
}
});
quaxt.arithmetic_challenge.add_key_listener = (function quaxt$arithmetic_challenge$add_key_listener(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["akl"], 0));

return goog.dom.getDocument().addEventListener("keydown",quaxt.arithmetic_challenge.key_listener);
});
quaxt.arithmetic_challenge.mount_app_element();
if((typeof quaxt !== 'undefined') && (typeof quaxt.arithmetic_challenge !== 'undefined') && (typeof quaxt.arithmetic_challenge.setup_stuff !== 'undefined')){
} else {
quaxt.arithmetic_challenge.setup_stuff = (function (){
quaxt.arithmetic_challenge.read_difficulty_table_from_local_storage();

quaxt.arithmetic_challenge.add_key_listener();

quaxt.arithmetic_challenge.start_new_quiz(quaxt.arithmetic_challenge.quiz_length);

return true;
})()
;
}
quaxt.arithmetic_challenge.on_reload = (function quaxt$arithmetic_challenge$on_reload(){
return quaxt.arithmetic_challenge.mount_app_element();
});
