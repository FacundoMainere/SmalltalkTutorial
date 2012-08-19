smalltalk.addPackage('SmalltalkTutorial', {});
smalltalk.addClass('Achievement', smalltalk.Widget, ['next', 'title'], 'SmalltalkTutorial');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(".lesson", "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return self['@next'];
return self;}
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (aNext){
var self=this;
(self['@next']=aNext);
return self;}
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof document == 'undefined' ? nil : document)]), "_ready_", [(function(){return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(".lesson", "_asJQuery", [])]);})]);
return self;}
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [smalltalk.send(smalltalk.send("Congratulations, you just achieved ", "__comma", [self['@title']]), "__comma", ["!"])]);
(function($rec){smalltalk.send($rec, "_with_", ["Next Lesson"]);return smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return self['@title'];
return self;}
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aTitle){
var self=this;
(self['@title']=aTitle);
return self;}
}),
smalltalk.Achievement);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Achievement.klass.superclass || nil), "_initialize", []);
return self;}
}),
smalltalk.Achievement.klass);


smalltalk.addClass('Achievement1', smalltalk.Achievement, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_next_", [(smalltalk.Lesson4 || Lesson4)]);
smalltalk.send(self, "_title_", ["DoIt, PrintIt, InspectIt"]);
return self;
return self;}
}),
smalltalk.Achievement1);



smalltalk.addClass('Lesson', smalltalk.Widget, ['explanation', 'mission', 'result', 'name', 'next', 'content'], 'SmalltalkTutorial');
smalltalk.addMethod(
"_checkResult_",
smalltalk.method({
selector: "checkResult:",
fn: function (aResult){
var self=this;
return smalltalk.send((function(){return smalltalk.send(smalltalk.send(self, "_result", []), "_value_", [aResult]);}), "_on_do_", [(smalltalk.Error || Error), (function(){return smalltalk.send(self, "_error_", ["That is not the result"]);})]);
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(".lesson", "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_content",
smalltalk.method({
selector: "content",
fn: function (){
var self=this;
return self['@content'];
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_content_",
smalltalk.method({
selector: "content:",
fn: function (aContent){
var self=this;
(self['@content']=aContent);
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_explanation",
smalltalk.method({
selector: "explanation",
fn: function () {
    var self = this;
    return self['@explanation'];
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_explanation_",
smalltalk.method({
selector: "explanation:",
fn: function (aExplanation) {
    var self = this;
    self['@explanation'] = aExplanation;
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_mission",
smalltalk.method({
selector: "mission",
fn: function (){
var self=this;
return self['@mission'];
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_mission_",
smalltalk.method({
selector: "mission:",
fn: function (aMission){
var self=this;
(self['@mission']=aMission);
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
    var self = this;
    return self['@name'];
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aName) {
    var self = this;
    self['@name'] = aName;
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
fn: function () {
    var self = this;
    return self['@next'];
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
fn: function (aNext) {
    var self = this;
    self['@next'] = aNext;
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof document == 'undefined' ? nil : document)]), "_ready_", [(function(){smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(".lesson", "_asJQuery", [])]);return smalltalk.send((typeof window == 'undefined' ? nil : window), "_saveLesson_", [smalltalk.send(self, "_name", [])]);})]);
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var workspace=nil;
(workspace=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(self, "_name", [])]);smalltalk.send(smalltalk.send(html, "_h5", []), "_with_", [smalltalk.send(self, "_explanation", [])]);smalltalk.send(smalltalk.send(html, "_h4", []), "_with_", [smalltalk.send(self, "_mission", [])]);smalltalk.send(workspace, "_renderOn_", [html]);smalltalk.send(workspace, "_val_", [smalltalk.send(self, "_content", [])]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return ((($receiver = smalltalk.send(self, "_checkResult_", [smalltalk.send(workspace, "_doIt", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})]));})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["Class Browser"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_open", []);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function () {
    var self = this;
    return self['@result'];
    return self;
}
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aResult) {
    var self = this;
    self['@result'] = aResult;
    return self;
}
}),
smalltalk.Lesson);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Lesson.klass.superclass || nil), "_initialize", []);
    return self;
}
}),
smalltalk.Lesson.klass);


smalltalk.addClass('Lesson1', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you are going to learn how to evaluate in different ways a piece of code in Smalltalk.\x0aSmalltalk expressions are evaluated by selecting the code and clicking \x22DoIt\x22"]);
smalltalk.send(self, "_name_", [(1)]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(x, "_class", []), "__eq", [(smalltalk.Date || Date)]);})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson2 || Lesson2)]);
smalltalk.send(self, "_content_", ["Date now"]);
smalltalk.send(self, "_mission_", ["To advance to the next lesson evaluate the following code"]);
return self;
return self;}
}),
smalltalk.Lesson1);



smalltalk.addClass('Lesson10', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(10)]);
smalltalk.send(self, "_explanation_", ["Some messages take blocks as parameters, this is the case of \x22ifTrue:ifFalse:\x22, it takes two blocks as parameter, the first is executed if the receiver object is true, and the second if it is false"]);
smalltalk.send(self, "_mission_", ["Also you can use them by separate \x22ifTrue:\x22 or \x22ifFalse\x22, see how the two first expressions behave, then correct the last one to get the second block to execute"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson1 || Lesson1)]);
smalltalk.send(self, "_content_", ["3>4 ifTrue:[1] ifFalse:[0].\x0a\x0afalse ifTrue:['yes'] ifFalse:['no'].\x0a\x0a('six' isNumber) ifTrue:['stay here'] ifFalse:['Pass to the next lesson']\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", ["Pass to the next lesson"]);})]);
return self;
return self;}
}),
smalltalk.Lesson10);



smalltalk.addClass('Lesson11', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(11)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you will learn three different types of Smalltalk collections. The first one is the Array, it has predefined size and order, there is many ways to define an array"]);
smalltalk.send(self, "_mission_", ["Below there are three different forms of defining an Array, pick one, then create an array with the numbers from 1 to 5"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson12 || Lesson12)]);
smalltalk.send(self, "_content_", ["((Array new:2) at:1 put:'Hello') at:2 put:'world'.\x0a\x0a#(9 10 11).\x0a\x0a{(6+6) (3*4)}.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(15)]);})]);
return self;
return self;}
}),
smalltalk.Lesson11);



smalltalk.addClass('Lesson2', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_explanation_", ["Also, you can know the result of evaluating your expression by selecting the code and clicking \x22PrintIt\x22"]);
smalltalk.send(self, "_mission_", ["Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click \x22DoIt\x22"]);
smalltalk.send(self, "_name_", [(2)]);
smalltalk.send(self, "_result_", [(function(x){return x;})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson3 || Lesson3)]);
smalltalk.send(self, "_content_", ["3+3.\x0a\x0a'tutorial' class.\x0a\x0aDate now.\x0a\x0a3<4"]);
return self;
return self;}
}),
smalltalk.Lesson2);



smalltalk.addClass('Lesson3', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(3)]);
smalltalk.send(self, "_explanation_", ["Sometimes you may need to explore inside your results, then is when InspectIt becomes very handy"]);
smalltalk.send(self, "_mission_", ["Select the following code and InspectIt, get the age of the person, write it, and then evaluate it"]);
smalltalk.send(self, "_next_", [(smalltalk.Achievement1 || Achievement1)]);
smalltalk.send(self, "_content_", ["david:=Person bornWithName:'David'.\x0a\x0adavid"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(0)]);})]);
return self;
return self;}
}),
smalltalk.Lesson3);



smalltalk.addClass('Lesson4', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(4)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next four lessons you are going to learn the three types of messages: Unary, Binary and Keyword.\x0aThe following are examples of unary messages, you have seen many in the past lessons, in a Smalltalk expression, unary messages are the first to be evaluated."]);
smalltalk.send(self, "_mission_", ["Print the expressions to see the results, then ask for the object String length, to do it, send it the message \x22size\x22"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson5 || Lesson5)]);
smalltalk.send(self, "_content_", ["3 squared.\x0a\x0aDate now asString.\x0a\x0a'ImAString'"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(9)]);})]);
return self;
return self;}
}),
smalltalk.Lesson4);



smalltalk.addClass('Lesson5', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(5)]);
smalltalk.send(self, "_explanation_", ["The next expressions are binary messages, they are evaluated after unary messages, they are generally arithmetic, comparison, and logical operations."]);
smalltalk.send(self, "_mission_", ["To advance to the next lesson, first check the results of the following expressions, probably they wont behave the way you think, so analyze the results, then complete the last one with a number to get 4 as result"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson6 || Lesson6)]);
smalltalk.send(self, "_content_", ["10>7.\x0a\x0a15-6/9.\x0a\x0a2*3-4*"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(4)]);})]);
return self;
return self;}
}),
smalltalk.Lesson5);



smalltalk.addClass('Lesson6', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(6)]);
smalltalk.send(self, "_explanation_", ["Here you got some keyword messages, as you may see, they are of the form \x22object message: argument\x22, they are the last to be evaluated in a combined Smalltalk expression"]);
smalltalk.send(self, "_mission_", ["Try the examples, then complete the argument of the last expression to get 9"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson7 || Lesson7)]);
smalltalk.send(self, "_content_", ["2 max:3.\x0a\x0a5@7 x:6.\x0a\x0a9 min:"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(9)]);})]);
return self;
return self;}
}),
smalltalk.Lesson6);



smalltalk.addClass('Lesson7', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(7)]);
smalltalk.send(self, "_explanation_", ["Also, you can combine unary, binary and keyword messages, but what if the evaluation order does not match your needs? then you can use parentheses, expressions between parentheses evaluate before any other, using them you can control the evaluation order of the expression"]);
smalltalk.send(self, "_mission_", ["See how parentheses work in the first three expressions, then complete the last with them so you can obtain 6"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson8 || Lesson8)]);
smalltalk.send(self, "_content_", ["3+4 squared.\x0a\x0a(3+4) squared.\x0a\x0a3+ (4 squared).\x0a\x0a3 min: 4 * 2\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(6)]);})]);
return self;
return self;}
}),
smalltalk.Lesson7);



smalltalk.addClass('Lesson8', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(8)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you will learn blocks and some usage for them.The following expressions are blocks, they contain code, but the code is not executed until you tell the block to execute the code inside it."]);
smalltalk.send(self, "_mission_", ["To evaluate the code inside the block you have to send it the message \x22value\x22, try it with this blocks."]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson1 || Lesson1)]);
smalltalk.send(self, "_content_", ["[4+6] \x0a\x0a[david:=Person bornWithName:'David'.david name]\x0a \x0a[david age:15. david age]"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(15)]);})]);
return self;
return self;}
}),
smalltalk.Lesson8);



smalltalk.addClass('Lesson9', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(9)]);
smalltalk.send(self, "_explanation_", ["Also block can have some parameters"]);
smalltalk.send(self, "_mission_", ["To value blocks with parameters you can use the messages \x22value:\x22, \x22value: value:\x22, \x22value: value: value:\x22, depending on the number of arguments of the block. Value the following blocks, pass the correct arguments to the last one to get 9"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson10 || Lesson10)]);
smalltalk.send(self, "_content_", ["[:n|n*5]\x0a\x0a[:aName :anAge|person:=Person bornWithName:aName.person age:anAge]\x0a\x0a[:x :y :z| x+y*z]\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(9)]);})]);
return self;
return self;}
}),
smalltalk.Lesson9);



