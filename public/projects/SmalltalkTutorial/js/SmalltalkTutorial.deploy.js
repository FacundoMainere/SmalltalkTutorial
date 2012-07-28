smalltalk.addPackage('SmalltalkTutorial', {});
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(".lesson", "_asJQuery", []), "_empty", []);
    return self;
}
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
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof document == "undefined" ? nil : document]), "_ready_", [function () {return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(".lesson", "_asJQuery", [])]);}]);
    return self;
}
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
smalltalk.send(self, "_explanation_", ["Smalltalk expressions are evaluated by selecting the code and clicking \x22DoIt\x22"]);
smalltalk.send(self, "_name_", ["Lesson 1"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(x, "_class", []), "__eq", [(smalltalk.Date || Date)]);})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson2 || Lesson2)]);
smalltalk.send(self, "_content_", ["Date now"]);
smalltalk.send(self, "_mission_", ["To advance to the next lesson value the following code"]);
return self;
return self;}
}),
smalltalk.Lesson1);



smalltalk.addClass('Lesson2', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_explanation_", ["Also, you can know the result of evaluating your expression by selecting the code and clicking \x22PrintIt\x22"]);
smalltalk.send(self, "_mission_", ["Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click \x22DoIt\x22"]);
smalltalk.send(self, "_name_", ["Lesson 2"]);
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
smalltalk.send(self, "_name_", ["Lesson 3"]);
smalltalk.send(self, "_explanation_", ["Sometimes you may need to explore inside yours results, that is when InspectIt becomes very handy"]);
smalltalk.send(self, "_mission_", ["Select the following code and InspectIt, get the age of the person, write it, and then value it"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson1 || Lesson1)]);
smalltalk.send(self, "_content_", ["david:=Person bornWithName:'David'.\x0a\x0adavid"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(0)]);})]);
return self;
return self;}
}),
smalltalk.Lesson3);



