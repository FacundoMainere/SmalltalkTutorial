smalltalk.addPackage('SmalltalkTutorial', {});
smalltalk.addClass('Lesson', smalltalk.Widget, ['explanation', 'mission', 'result', 'name', 'next', 'content'], 'SmalltalkTutorial');
smalltalk.addMethod(
"_checkResult_",
smalltalk.method({
selector: "checkResult:",
category: 'render',
fn: function (aResult){
var self=this;
return smalltalk.send((function(){return smalltalk.send(smalltalk.send(self, "_result", []), "_value_", [aResult]);}), "_on_do_", [(smalltalk.Error || Error), (function(){return smalltalk.send(self, "_error_", ["That is not the result"]);})]);
return self;},
args: ["aResult"],
source: "checkResult:aResult\x0a\x0a^[self result value:aResult] on: Error do:[self error: 'That is not the result']",
messageSends: ["on:do:", "value:", "result", "error:"],
referencedClasses: ["Error"]
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'render',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(".lesson", "_asJQuery", []), "_empty", []);
    return self;
},
args: [],
source: "close\x0a'.lesson' asJQuery empty.",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_content",
smalltalk.method({
selector: "content",
category: 'accessors',
fn: function (){
var self=this;
return self['@content'];
return self;},
args: [],
source: "content\x0a\x0a^content",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_content_",
smalltalk.method({
selector: "content:",
category: 'accessors',
fn: function (aContent){
var self=this;
(self['@content']=aContent);
return self;},
args: ["aContent"],
source: "content:aContent\x0a\x0acontent:=aContent",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_explanation",
smalltalk.method({
selector: "explanation",
category: 'accessors',
fn: function () {
    var self = this;
    return self['@explanation'];
    return self;
},
args: [],
source: "explanation\x0a\x0a^explanation",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_explanation_",
smalltalk.method({
selector: "explanation:",
category: 'accessors',
fn: function (aExplanation) {
    var self = this;
    self['@explanation'] = aExplanation;
    return self;
},
args: ["aExplanation"],
source: "explanation: aExplanation\x0a\x0aexplanation:= aExplanation",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_mission",
smalltalk.method({
selector: "mission",
category: 'accessors',
fn: function (){
var self=this;
return self['@mission'];
return self;},
args: [],
source: "mission\x0a\x0a^mission",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_mission_",
smalltalk.method({
selector: "mission:",
category: 'accessors',
fn: function (aMission){
var self=this;
(self['@mission']=aMission);
return self;},
args: ["aMission"],
source: "mission:aMission\x0a\x0amission:=aMission",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessors',
fn: function () {
    var self = this;
    return self['@name'];
    return self;
},
args: [],
source: "name\x0a\x0a^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'accessors',
fn: function (aName) {
    var self = this;
    self['@name'] = aName;
    return self;
},
args: ["aName"],
source: "name:aName\x0a\x0aname:=aName",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'accessors',
fn: function () {
    var self = this;
    return self['@next'];
    return self;
},
args: [],
source: "next\x0a\x0a^next",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'accessors',
fn: function (aNext) {
    var self = this;
    self['@next'] = aNext;
    return self;
},
args: ["aNext"],
source: "next: aNext\x0a\x0anext:=aNext",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'render',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(typeof window == "undefined" ? nil : window, "_jQuery_", [typeof document == "undefined" ? nil : document]), "_ready_", [function () {return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(".lesson", "_asJQuery", [])]);}]);
    return self;
},
args: [],
source: "open\x0a\x09(window jQuery: document)  ready: [\x0a          \x09self \x0a          \x09\x09appendToJQuery: '.lesson' asJQuery.\x0a        ].",
messageSends: ["ready:", "jQuery:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (html){
var self=this;
var workspace=nil;
(workspace=smalltalk.send((smalltalk.SourceArea || SourceArea), "_new", []));
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send(self, "_name", [])]);smalltalk.send(smalltalk.send(html, "_h5", []), "_with_", [smalltalk.send(self, "_explanation", [])]);smalltalk.send(smalltalk.send(html, "_h4", []), "_with_", [smalltalk.send(self, "_mission", [])]);smalltalk.send(workspace, "_renderOn_", [html]);smalltalk.send(workspace, "_val_", [smalltalk.send(self, "_content", [])]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return ((($receiver = smalltalk.send(self, "_checkResult_", [smalltalk.send(workspace, "_doIt", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})]));})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["Class Browser"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_open", []);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: self name.\x0a\x09\x09html h5 with: self explanation.\x0a\x09\x09html h4 with: self mission.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09workspace val: self content.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [(self checkResult:workspace doIt) ifTrue:[\x0aself close.\x0aself next new open.\x0a]].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt].\x0ahtml button with: 'Class Browser'; onClick: [Browser open]\x0a]]",
messageSends: ["new", "class:", "with:", "h1", "name", "h5", "explanation", "h4", "mission", "renderOn:", "val:", "content", "div", "onClick:", "ifTrue:", "checkResult:", "doIt", "close", "open", "next", "button", "printIt", "inspectIt"],
referencedClasses: ["SourceArea", "Browser"]
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
category: 'accessors',
fn: function () {
    var self = this;
    return self['@result'];
    return self;
},
args: [],
source: "result\x0a\x0a^result",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
category: 'accessors',
fn: function (aResult) {
    var self = this;
    self['@result'] = aResult;
    return self;
},
args: ["aResult"],
source: "result:aResult\x0a\x0aresult:= aResult",
messageSends: [],
referencedClasses: []
}),
smalltalk.Lesson);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Lesson.klass.superclass || nil), "_initialize", []);
    return self;
},
args: [],
source: "new\x0a\x0a^super new initialize",
messageSends: ["initialize", "new"],
referencedClasses: []
}),
smalltalk.Lesson.klass);


smalltalk.addClass('Lesson1', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_explanation_", ["Smalltalk expressions are evaluated by selecting the code and clicking \x22DoIt\x22"]);
smalltalk.send(self, "_name_", ["Lesson 1"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(x, "_class", []), "__eq", [(smalltalk.Date || Date)]);})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson2 || Lesson2)]);
smalltalk.send(self, "_content_", ["Date now"]);
smalltalk.send(self, "_mission_", ["To advance to the next lesson value the following code"]);
return self;
return self;},
args: [],
source: "initialize\x0aself explanation: 'Smalltalk expressions are evaluated by selecting the code and clicking \x22DoIt\x22'.\x0aself name: 'Lesson 1'.\x0aself result:[:x| x class = Date].\x0aself next:Lesson2.\x0aself content: 'Date now'.\x0aself mission: 'To advance to the next lesson value the following code'.\x0a^self",
messageSends: ["explanation:", "name:", "result:", "=", "class", "next:", "content:", "mission:"],
referencedClasses: ["Date", "Lesson2"]
}),
smalltalk.Lesson1);



smalltalk.addClass('Lesson2', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_explanation_", ["Also, you can know the result of evaluating your expression by selecting the code and clicking \x22PrintIt\x22"]);
smalltalk.send(self, "_mission_", ["Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click \x22DoIt\x22"]);
smalltalk.send(self, "_name_", ["Lesson 2"]);
smalltalk.send(self, "_result_", [(function(x){return x;})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson3 || Lesson3)]);
smalltalk.send(self, "_content_", ["3+3.\x0a\x0a'tutorial' class.\x0a\x0aDate now.\x0a\x0a3<4"]);
return self;
return self;},
args: [],
source: "initialize\x0aself explanation: 'Also, you can know the result of evaluating your expression by selecting the code and clicking \x22PrintIt\x22'.\x0aself mission:'Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click \x22DoIt\x22'.\x0aself name: 'Lesson 2'.\x0aself result:[:x|x].\x0aself next:Lesson3.\x0aself content:'3+3.\x0a\x0a''tutorial'' class.\x0a\x0aDate now.\x0a\x0a3<4'.\x0a^self",
messageSends: ["explanation:", "mission:", "name:", "result:", "next:", "content:"],
referencedClasses: ["Lesson3"]
}),
smalltalk.Lesson2);



smalltalk.addClass('Lesson3', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", ["Lesson 3"]);
smalltalk.send(self, "_explanation_", ["Sometimes you may need to explore inside yours results, that is when InspectIt becomes very handy"]);
smalltalk.send(self, "_mission_", ["Select the following code and InspectIt, get the age of the person, write it, and then value it"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson1 || Lesson1)]);
smalltalk.send(self, "_content_", ["david:=Person bornWithName:'David'.\x0a\x0adavid"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(0)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:'Lesson 3'.\x0aself explanation:'Sometimes you may need to explore inside yours results, that is when InspectIt becomes very handy'.\x0aself mission:'Select the following code and InspectIt, get the age of the person, write it, and then value it'.\x0aself next:Lesson1.\x0aself content: 'david:=Person bornWithName:''David''.\x0a\x0adavid'.\x0aself result:[:x|x=0].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson1"]
}),
smalltalk.Lesson3);


