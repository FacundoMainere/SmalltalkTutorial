smalltalk.addPackage('SmalltalkTutorial', {});
smalltalk.addClass('Achievement', smalltalk.Widget, ['next', 'title'], 'SmalltalkTutorial');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(".lesson", "_asJQuery", []), "_empty", []);
return self;},
args: [],
source: "close\x0a'.lesson' asJQuery empty.",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@next'];
return self;},
args: [],
source: "next\x0a\x0a^next",
messageSends: [],
referencedClasses: []
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_next_",
smalltalk.method({
selector: "next:",
category: 'not yet classified',
fn: function (aNext){
var self=this;
(self['@next']=aNext);
return self;},
args: ["aNext"],
source: "next: aNext\x0a\x0anext:=aNext",
messageSends: [],
referencedClasses: []
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof document == 'undefined' ? nil : document)]), "_ready_", [(function(){return smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(".lesson", "_asJQuery", [])]);})]);
return self;},
args: [],
source: "open\x0a\x09(window jQuery: document)  ready: [\x0a          \x09self \x0a          \x09\x09appendToJQuery: '.lesson' asJQuery.\x0a        ].",
messageSends: ["ready:", "jQuery:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", [smalltalk.send(smalltalk.send("Congratulations, you just achieved ", "__comma", [self['@title']]), "__comma", ["!"])]);
(function($rec){smalltalk.send($rec, "_with_", ["Next Lesson"]);return smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: "renderOn: html\x0ahtml h2 with:'Congratulations, you just achieved ',title,'!'.\x0ahtml button with: 'Next Lesson'; onClick: [self close. self next new open]\x0a",
messageSends: ["with:", "h2", ",", "onClick:", "close", "open", "new", "next", "button"],
referencedClasses: []
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@title'];
return self;},
args: [],
source: "title\x0a\x0a^title",
messageSends: [],
referencedClasses: []
}),
smalltalk.Achievement);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'not yet classified',
fn: function (aTitle){
var self=this;
(self['@title']=aTitle);
return self;},
args: ["aTitle"],
source: "title: aTitle\x0a\x0atitle:=aTitle",
messageSends: [],
referencedClasses: []
}),
smalltalk.Achievement);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Achievement.klass.superclass || nil), "_initialize", []);
return self;},
args: [],
source: "new\x0a\x0a^super new initialize",
messageSends: ["initialize", "new"],
referencedClasses: []
}),
smalltalk.Achievement.klass);


smalltalk.addClass('Achievement1', smalltalk.Achievement, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_next_", [(smalltalk.Lesson4 || Lesson4)]);
smalltalk.send(self, "_title_", ["DoIt, PrintIt, InspectIt"]);
return self;
return self;},
args: [],
source: "initialize\x0a\x0aself next:Lesson4.\x0aself title:'DoIt, PrintIt, InspectIt'.\x0a^self",
messageSends: ["next:", "title:"],
referencedClasses: ["Lesson4"]
}),
smalltalk.Achievement1);



smalltalk.addClass('Congratulations', smalltalk.Widget, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Congratulations, you just have just completed Smalltalk Tutorial!"]);
return self;},
args: ["html"],
source: "renderOn: html\x0ahtml h2 with:'Congratulations, you just have just completed Smalltalk Tutorial!'.\x0a",
messageSends: ["with:", "h2"],
referencedClasses: []
}),
smalltalk.Congratulations);



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
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(".lesson", "_asJQuery", []), "_empty", []);
return self;},
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
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof document == 'undefined' ? nil : document)]), "_ready_", [(function(){smalltalk.send(self, "_appendToJQuery_", [smalltalk.send(".lesson", "_asJQuery", [])]);return smalltalk.send((typeof window == 'undefined' ? nil : window), "_saveLesson_", [smalltalk.send(self, "_name", [])]);})]);
return self;},
args: [],
source: "open\x0a\x09(window jQuery: document)  ready: [\x0a          \x09self appendToJQuery: '.lesson' asJQuery.\x0a\x09\x09window saveLesson: self name.\x0a        ].",
messageSends: ["ready:", "jQuery:", "appendToJQuery:", "asJQuery", "saveLesson:", "name"],
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
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send("Lesson ", "__comma", [smalltalk.send(self, "_name", [])])]);smalltalk.send(smalltalk.send(html, "_h5", []), "_with_", [smalltalk.send(self, "_explanation", [])]);smalltalk.send(smalltalk.send(html, "_h4", []), "_with_", [smalltalk.send(self, "_mission", [])]);smalltalk.send(workspace, "_renderOn_", [html]);smalltalk.send(workspace, "_val_", [smalltalk.send(self, "_content", [])]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return ((($receiver = smalltalk.send(self, "_checkResult_", [smalltalk.send(workspace, "_doIt", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})]));})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["Class Browser"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_open", []);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: ('Lesson ',self name).\x0a\x09\x09html h5 with: self explanation.\x0a\x09\x09html h4 with: self mission.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09workspace val: self content.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [(self checkResult:workspace doIt) ifTrue:[\x0aself close.\x0aself next new open.\x0a]].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt].\x0ahtml button with: 'Class Browser'; onClick: [Browser open]\x0a]]",
messageSends: ["new", "class:", "with:", "h1", ",", "name", "h5", "explanation", "h4", "mission", "renderOn:", "val:", "content", "div", "onClick:", "ifTrue:", "checkResult:", "doIt", "close", "open", "next", "button", "printIt", "inspectIt"],
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
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you are going to learn how to evaluate in different ways a piece of code in Smalltalk.\x0aSmalltalk expressions are evaluated by selecting the code and clicking \x22DoIt\x22"]);
smalltalk.send(self, "_name_", [(1)]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(x, "_class", []), "__eq", [(smalltalk.Date || Date)]);})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson2 || Lesson2)]);
smalltalk.send(self, "_content_", ["Date now"]);
smalltalk.send(self, "_mission_", ["To advance to the next lesson evaluate the following code"]);
return self;
return self;},
args: [],
source: "initialize\x0aself explanation: 'Goal: In the next three lessons you are going to learn how to evaluate in different ways a piece of code in Smalltalk.\x0aSmalltalk expressions are evaluated by selecting the code and clicking \x22DoIt\x22'.\x0aself name: 1.\x0aself result:[:x| x class = Date].\x0aself next:Lesson2.\x0aself content: 'Date now'.\x0aself mission: 'To advance to the next lesson evaluate the following code'.\x0a^self",
messageSends: ["explanation:", "name:", "result:", "=", "class", "next:", "content:", "mission:"],
referencedClasses: ["Date", "Lesson2"]
}),
smalltalk.Lesson1);



smalltalk.addClass('Lesson10', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(10)]);
smalltalk.send(self, "_explanation_", ["Some messages take blocks as parameters, this is the case of \x22ifTrue:ifFalse:\x22, it takes two blocks as parameter, the first is executed if the receiver object is true, and the second if it is false"]);
smalltalk.send(self, "_mission_", ["Also you can use them by separate \x22ifTrue:\x22 or \x22ifFalse\x22, see how the two first expressions behave, then correct the last one to get the first block to execute"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson11 || Lesson11)]);
smalltalk.send(self, "_content_", ["3>4 ifTrue:[1] ifFalse:[0].\x0a\x0afalse ifTrue:['yes'] ifFalse:['no'].\x0a\x0a('six' isNumber) ifTrue:['Pass to the next lesson'] ifFalse:['Stay here']\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", ["Pass to the next lesson"]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:10.\x0aself explanation:'Some messages take blocks as parameters, this is the case of \x22ifTrue:ifFalse:\x22, it takes two blocks as parameter, the first is executed if the receiver object is true, and the second if it is false'.\x0aself mission:'Also you can use them by separate \x22ifTrue:\x22 or \x22ifFalse\x22, see how the two first expressions behave, then correct the last one to get the first block to execute'.\x0aself next:Lesson11.\x0aself content: '3>4 ifTrue:[1] ifFalse:[0].\x0a\x0afalse ifTrue:[''yes''] ifFalse:[''no''].\x0a\x0a(''six'' isNumber) ifTrue:[''Pass to the next lesson''] ifFalse:[''Stay here'']\x0a'.\x0aself result:[:x|x='Pass to the next lesson'].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson11"]
}),
smalltalk.Lesson10);



smalltalk.addClass('Lesson11', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(11)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you will learn three different types of Smalltalk collections. The first one is the Array, it has predefined size and order, there is many ways to define an array"]);
smalltalk.send(self, "_mission_", ["Below there are three different forms of defining an Array, pick one, then create an array with the numbers from 1 to 5"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson12 || Lesson12)]);
smalltalk.send(self, "_content_", ["((Array new:2) at:1 put:'Hello') at:2 put:'world'.\x0a\x0a#(9 10 11) at:2.\x0a\x0a{(6+6). (3*4)}.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [[(1), (2), (3), (4), (5)]]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:11.\x0aself explanation:'Goal: In the next three lessons you will learn three different types of Smalltalk collections. The first one is the Array, it has predefined size and order, there is many ways to define an array'.\x0aself mission:'Below there are three different forms of defining an Array, pick one, then create an array with the numbers from 1 to 5'.\x0aself next:Lesson12.\x0aself content: '((Array new:2) at:1 put:''Hello'') at:2 put:''world''.\x0a\x0a#(9 10 11) at:2.\x0a\x0a{(6+6). (3*4)}.\x0a'.\x0aself result:[:x|x = #(1 2 3 4 5)].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson12"]
}),
smalltalk.Lesson11);



smalltalk.addClass('Lesson12', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(12)]);
smalltalk.send(self, "_explanation_", ["The Set is a collection without order and without repetitions, whenever you add an object that was already inside it, it is not added"]);
smalltalk.send(self, "_mission_", ["A Set can be created empty or with elements already inside, you can add elements to a Set with the message \x22add:\x22. Evaluate the following expressions, then create a Set with some strings on it.(Remember: Strings are created with single quotes, double quotes are for comments)"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson13 || Lesson13)]);
smalltalk.send(self, "_content_", ["set:=Set with:1 with:2.\x0aset add:5.\x0a\x0aset includes:3.\x0a\x0aset includes:2.\x0a\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "_isMemberOf_", [(smalltalk.Set || Set)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:12.\x0aself explanation:'The Set is a collection without order and without repetitions, whenever you add an object that was already inside it, it is not added'.\x0aself mission:'A Set can be created empty or with elements already inside, you can add elements to a Set with the message \x22add:\x22. Evaluate the following expressions, then create a Set with some strings on it.(Remember: Strings are created with single quotes, double quotes are for comments)'.\x0aself next:Lesson13.\x0aself content: 'set:=Set with:1 with:2.\x0aset add:5.\x0a\x0aset includes:3.\x0a\x0aset includes:2.\x0a\x0a'.\x0aself result:[:x|x isMemberOf:Set].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "isMemberOf:"],
referencedClasses: ["Lesson13", "Set"]
}),
smalltalk.Lesson12);



smalltalk.addClass('Lesson13', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(13)]);
smalltalk.send(self, "_explanation_", ["These are dictionaries, a Dictionary is a collection that stores an Object key and relates it to an Object value, for each key, there is only one value."]);
smalltalk.send(self, "_mission_", ["To add key-value relationships to a Dictionary, use the message \x22at:put:\x22, for example \x22dictionary at:'key' put:'value'\x22.Then get the value 5 from dictionary"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson14 || Lesson14)]);
smalltalk.send(self, "_content_", ["dictionary:= Dictionary new.\x0adictionary at:5 put:7.\x0adictionary at:'smalltalk' put:5.\x0adictionary at:'tutorial' put:9.\x0a\x0adictionary at:'tutorial'.\x0adictionary keys.\x0adictionary values.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(5)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:13.\x0aself explanation:'These are dictionaries, a Dictionary is a collection that stores an Object key and relates it to an Object value, for each key, there is only one value.'.\x0aself mission:'To add key-value relationships to a Dictionary, use the message \x22at:put:\x22, for example \x22dictionary at:''key'' put:''value''\x22.Then get the value 5 from dictionary'.\x0aself next:Lesson14.\x0aself content: 'dictionary:= Dictionary new.\x0adictionary at:5 put:7.\x0adictionary at:''smalltalk'' put:5.\x0adictionary at:''tutorial'' put:9.\x0a\x0adictionary at:''tutorial''.\x0adictionary keys.\x0adictionary values.\x0a'.\x0aself result:[:x|x=5].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson14"]
}),
smalltalk.Lesson13);



smalltalk.addClass('Lesson14', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(14)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next four lessons you will learn some useful collection messages. The first and less specific is \x22do:\x22, it takes a block with a single parameter and applies it to each element of the collection."]);
smalltalk.send(self, "_mission_", ["The expression \x22n to: i\x22 also creates a collection with the numbers from n to i, the following example is adding all the numbers from 1 to 5, modify it to multiply all the numbers from 5 to 8 (Remember to modify the initial value of \x22res\x22) "]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson15 || Lesson15)]);
smalltalk.send(self, "_content_", ["res:=0.\x0a(1 to: 5) do: [:n| res:=res+n].\x0ares.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(1680)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:14.\x0aself explanation:'Goal: In the next four lessons you will learn some useful collection messages. The first and less specific is \x22do:\x22, it takes a block with a single parameter and applies it to each element of the collection.'.\x0aself mission:'The expression \x22n to: i\x22 also creates a collection with the numbers from n to i, the following example is adding all the numbers from 1 to 5, modify it to multiply all the numbers from 5 to 8 (Remember to modify the initial value of \x22res\x22) '.\x0aself next:Lesson15.\x0aself content: 'res:=0.\x0a(1 to: 5) do: [:n| res:=res+n].\x0ares.\x0a'.\x0aself result:[:x|x=1680].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson15"]
}),
smalltalk.Lesson14);



smalltalk.addClass('Lesson15', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(15)]);
smalltalk.send(self, "_explanation_", ["The next message is \x22collect:\x22, it is similar to \x22do:\x22 but it also makes a new collection made of the results of applying the block to each element."]);
smalltalk.send(self, "_mission_", ["Write a collect block that returns a collection with the size of each string on set"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson16 || Lesson16)]);
smalltalk.send(self, "_content_", ["set:= Set with: 'smalltalk' with: 'tutorial' with: 'rules'.\x0aset collect:\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [smalltalk.send((smalltalk.Set || Set), "_with_with_with_", [(9), (8), (5)])]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:15.\x0aself explanation:'The next message is \x22collect:\x22, it is similar to \x22do:\x22 but it also makes a new collection made of the results of applying the block to each element.'.\x0aself mission:'Write a collect block that returns a collection with the size of each string on set'.\x0aself next:Lesson16.\x0aself content: 'set:= Set with: ''smalltalk'' with: ''tutorial'' with: ''rules''.\x0aset collect:\x0a'.\x0aself result:[:x|x=(Set with:9 with: 8 with: 5)].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "=", "with:with:with:"],
referencedClasses: ["Lesson16", "Set"]
}),
smalltalk.Lesson15);



smalltalk.addClass('Lesson16', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(16)]);
smalltalk.send(self, "_explanation_", ["\x22select:\x22 and \x22reject:\x22 are opposite messages, both take a block with one parameter that returns true or false, \x22select:\x22 returns a collection with all the elements returning true, \x22reject:\x22 returns a collection without the elements returning true. "]);
smalltalk.send(self, "_mission_", ["The following is a \x22select:\x22 taking all the strings that have \x22h\x22 as the first letter, create a \x22reject:\x22 block to discard all the strings with size 4 or more"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson17 || Lesson17)]);
smalltalk.send(self, "_content_", ["array:=#('cow' 'horn' 'helicopter' 'pig').\x0aarray select:[:word|word first='h']\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [["cow", "pig"]]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:16.\x0aself explanation:'\x22select:\x22 and \x22reject:\x22 are opposite messages, both take a block with one parameter that returns true or false, \x22select:\x22 returns a collection with all the elements returning true, \x22reject:\x22 returns a collection without the elements returning true. '.\x0aself mission:'The following is a \x22select:\x22 taking all the strings that have \x22h\x22 as the first letter, create a \x22reject:\x22 block to discard all the strings with size 4 or more'.\x0aself next:Lesson17.\x0aself content: 'array:=#(''cow'' ''horn'' ''helicopter'' ''pig'').\x0aarray select:[:word|word first=''h'']\x0a'.\x0aself result:[:x|x=#('cow' 'pig')].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson17"]
}),
smalltalk.Lesson16);



smalltalk.addClass('Lesson17', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(17)]);
smalltalk.send(self, "_explanation_", ["\x22inject:into:\x22 is the more complex, it takes two parameters, first any object and second a block that takes two parameters too, it uses the block to operate the first parameter with the first element of the collection, then operates the result of that with the next element in the collection, until there is no more elements "]);
smalltalk.send(self, "_mission_", ["With \x22inject:into:\x22 we can make the sum without using a variable, try to complete it."]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson18 || Lesson18)]);
smalltalk.send(self, "_content_", ["(1 to: 5) inject: into:[:x :y|]\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(15)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:17.\x0aself explanation:'\x22inject:into:\x22 is the more complex, it takes two parameters, first any object and second a block that takes two parameters too, it uses the block to operate the first parameter with the first element of the collection, then operates the result of that with the next element in the collection, until there is no more elements '.\x0aself mission:'With \x22inject:into:\x22 we can make the sum without using a variable, try to complete it.'.\x0aself next:Lesson18.\x0aself content: '(1 to: 5) inject: into:[:x :y|]\x0a'.\x0aself result:[:x|x=15].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson18"]
}),
smalltalk.Lesson17);



smalltalk.addClass('Lesson18', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(18)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you will learn how to create your own classes, instance methods and class methods. To create a class, click on \x22Class Browser\x22 button, then choose a category in the first column, then complete the template and save."]);
smalltalk.send(self, "_mission_", ["Create a Cat class that's subclass of Animal, to do subclassification replace \x22Object\x22 in the template with \x22Animal\x22. Then evaluate the following code"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson19 || Lesson19)]);
smalltalk.send(self, "_content_", ["mrnoodles:=Cat bornWithName: 'MrNoodles'.\x0amrnoodles name"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", ["MrNoodles"]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:18.\x0aself explanation:'Goal: In the next three lessons you will learn how to create your own classes, instance methods and class methods. To create a class, click on \x22Class Browser\x22 button, then choose a category in the first column, then complete the template and save.'.\x0aself mission:'Create a Cat class that''s subclass of Animal, to do subclassification replace \x22Object\x22 in the template with \x22Animal\x22. Then evaluate the following code'.\x0aself next:Lesson19.\x0aself content: 'mrnoodles:=Cat bornWithName: ''MrNoodles''.\x0amrnoodles name'.\x0aself result:[:x|x='MrNoodles'].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson19"]
}),
smalltalk.Lesson18);



smalltalk.addClass('Lesson19', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(19)]);
smalltalk.send(self, "_explanation_", ["An instance method is what messages an instance of a class can understand. To define a new one, choose a class from the second Column, choose a category in the third column and complete the template"]);
smalltalk.send(self, "_mission_", ["Define an instance method \x22meow\x22 for the class Cat, the method should return a string of what the Cat meows like(Tip: to define what the method return use \x22^\x22. For example \x22^'bark bark!'\x22.)"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson20 || Lesson20)]);
smalltalk.send(self, "_content_", ["mrnoodles:= Dog bornWithName: 'MrNoodles'.\x0amrnoodles meow."]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "_isKindOf_", [(smalltalk.String || String)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:19.\x0aself explanation:'An instance method is what messages an instance of a class can understand. To define a new one, choose a class from the second Column, choose a category in the third column and complete the template'.\x0aself mission:'Define an instance method \x22meow\x22 for the class Cat, the method should return a string of what the Cat meows like(Tip: to define what the method return use \x22^\x22. For example \x22^''bark bark!''\x22.)'.\x0aself next:Lesson20.\x0aself content: 'mrnoodles:= Dog bornWithName: ''MrNoodles''.\x0amrnoodles meow.'.\x0aself result:[:x|x isKindOf:String].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "isKindOf:"],
referencedClasses: ["Lesson20", "String"]
}),
smalltalk.Lesson19);



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
smalltalk.send(self, "_name_", [(2)]);
smalltalk.send(self, "_result_", [(function(x){return x;})]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson3 || Lesson3)]);
smalltalk.send(self, "_content_", ["3+3.\x0a\x0a'tutorial' class.\x0a\x0aDate now.\x0a\x0a3<4"]);
return self;
return self;},
args: [],
source: "initialize\x0aself explanation: 'Also, you can know the result of evaluating your expression by selecting the code and clicking \x22PrintIt\x22'.\x0aself mission:'Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click \x22DoIt\x22'.\x0aself name: 2.\x0aself result:[:x|x].\x0aself next:Lesson3.\x0aself content:'3+3.\x0a\x0a''tutorial'' class.\x0a\x0aDate now.\x0a\x0a3<4'.\x0a^self",
messageSends: ["explanation:", "mission:", "name:", "result:", "next:", "content:"],
referencedClasses: ["Lesson3"]
}),
smalltalk.Lesson2);



smalltalk.addClass('Lesson20', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(20)]);
smalltalk.send(self, "_explanation_", ["A Class method is what a Class can do, we generally use it for constructing instances of a Class, to create one is similar to an instance method, but choosing the Class tab."]);
smalltalk.send(self, "_mission_", ["Create a class method \x22bornWithName:withOwner:\x22 that takes as argument the name of the cat and its owner, it returns a cat with its owner and its name assigned(Tip: use the message \x22bornWithName:\x22 and \x22owner:\x22, dont forget to return it)"]);
smalltalk.send(self, "_next_", [(smalltalk.Congratulations || Congratulations)]);
smalltalk.send(self, "_content_", ["david:= Person bornWithName:'David'.\x0amrnoodles:= Cat bornWithName: 'MrNoodles' withOwner:david.\x0amrnoodles."]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(smalltalk.send(x, "_owner", []), "_name", []), "__eq", ["David"]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:20.\x0aself explanation:'A Class method is what a Class can do, we generally use it for constructing instances of a Class, to create one is similar to an instance method, but choosing the Class tab.'.\x0aself mission:'Create a class method \x22bornWithName:withOwner:\x22 that takes as argument the name of the cat and its owner, it returns a cat with its owner and its name assigned(Tip: use the message \x22bornWithName:\x22 and \x22owner:\x22, dont forget to return it)'.\x0aself next:Congratulations.\x0aself content: 'david:= Person bornWithName:''David''.\x0amrnoodles:= Cat bornWithName: ''MrNoodles'' withOwner:david.\x0amrnoodles.'.\x0aself result:[:x|x owner name = 'David'].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "=", "name", "owner"],
referencedClasses: ["Congratulations"]
}),
smalltalk.Lesson20);



smalltalk.addClass('Lesson3', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(3)]);
smalltalk.send(self, "_explanation_", ["Sometimes you may need to explore inside your results, then is when InspectIt becomes very handy"]);
smalltalk.send(self, "_mission_", ["Select the following code and InspectIt, get the age of the person, write it, and then evaluate it"]);
smalltalk.send(self, "_next_", [(smalltalk.Achievement1 || Achievement1)]);
smalltalk.send(self, "_content_", ["david:=Person bornWithName:'David'.\x0a\x0adavid"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(0)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:3.\x0aself explanation:'Sometimes you may need to explore inside your results, then is when InspectIt becomes very handy'.\x0aself mission:'Select the following code and InspectIt, get the age of the person, write it, and then evaluate it'.\x0aself next:Achievement1.\x0aself content: 'david:=Person bornWithName:''David''.\x0a\x0adavid'.\x0aself result:[:x|x=0].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Achievement1"]
}),
smalltalk.Lesson3);



smalltalk.addClass('Lesson4', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(4)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next four lessons you are going to learn the three types of messages: Unary, Binary and Keyword.\x0aThe following are examples of unary messages, you have seen many in the past lessons, in a Smalltalk expression, unary messages are the first to be evaluated."]);
smalltalk.send(self, "_mission_", ["Print the expressions to see the results, then ask for the object String length, to do it, send it the message \x22size\x22"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson5 || Lesson5)]);
smalltalk.send(self, "_content_", ["3 squared.\x0a\x0aDate now asString.\x0a\x0a'ImAString'"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(9)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:4.\x0aself explanation:'Goal: In the next four lessons you are going to learn the three types of messages: Unary, Binary and Keyword.\x0aThe following are examples of unary messages, you have seen many in the past lessons, in a Smalltalk expression, unary messages are the first to be evaluated.'.\x0aself mission:'Print the expressions to see the results, then ask for the object String length, to do it, send it the message \x22size\x22'.\x0aself next:Lesson5.\x0aself content: '3 squared.\x0a\x0aDate now asString.\x0a\x0a''ImAString'''.\x0aself result:[:x|x=9].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson5"]
}),
smalltalk.Lesson4);



smalltalk.addClass('Lesson5', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(5)]);
smalltalk.send(self, "_explanation_", ["The next expressions are binary messages, they are evaluated after unary messages, they are generally arithmetic, comparison, and logical operations."]);
smalltalk.send(self, "_mission_", ["To advance to the next lesson, first check the results of the following expressions, probably they wont behave the way you think, so analyze the results, then complete the last one with a number to get 4 as result"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson6 || Lesson6)]);
smalltalk.send(self, "_content_", ["10>7.\x0a\x0a15-6/9.\x0a\x0a2*3-4*"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(4)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:5.\x0aself explanation:'The next expressions are binary messages, they are evaluated after unary messages, they are generally arithmetic, comparison, and logical operations.'.\x0aself mission:'To advance to the next lesson, first check the results of the following expressions, probably they wont behave the way you think, so analyze the results, then complete the last one with a number to get 4 as result'.\x0aself next:Lesson6.\x0aself content: '10>7.\x0a\x0a15-6/9.\x0a\x0a2*3-4*'.\x0aself result:[:x|x=4].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson6"]
}),
smalltalk.Lesson5);



smalltalk.addClass('Lesson6', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(6)]);
smalltalk.send(self, "_explanation_", ["Here you got some keyword messages, as you may see, they are of the form \x22object message: argument\x22, they are the last to be evaluated in a combined Smalltalk expression"]);
smalltalk.send(self, "_mission_", ["Try the examples, then complete the argument of the last expression to get 9"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson7 || Lesson7)]);
smalltalk.send(self, "_content_", ["2 max:3.\x0a\x0a5@7 x:6.\x0a\x0a9 min:"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(9)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:6.\x0aself explanation:'Here you got some keyword messages, as you may see, they are of the form \x22object message: argument\x22, they are the last to be evaluated in a combined Smalltalk expression'.\x0aself mission:'Try the examples, then complete the argument of the last expression to get 9'.\x0aself next:Lesson7.\x0aself content: '2 max:3.\x0a\x0a5@7 x:6.\x0a\x0a9 min:'.\x0aself result: [:x|x=9].\x0a^self\x0a\x0a\x0a",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson7"]
}),
smalltalk.Lesson6);



smalltalk.addClass('Lesson7', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(7)]);
smalltalk.send(self, "_explanation_", ["Also, you can combine unary, binary and keyword messages, but what if the evaluation order does not match your needs? then you can use parentheses, expressions between parentheses evaluate before any other, using them you can control the evaluation order of the expression"]);
smalltalk.send(self, "_mission_", ["See how parentheses work in the first three expressions, then complete the last with them so you can obtain 6"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson8 || Lesson8)]);
smalltalk.send(self, "_content_", ["3+4 squared.\x0a\x0a(3+4) squared.\x0a\x0a3+ (4 squared).\x0a\x0a3 min: 4 * 2\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(6)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:7.\x0aself explanation:'Also, you can combine unary, binary and keyword messages, but what if the evaluation order does not match your needs? then you can use parentheses, expressions between parentheses evaluate before any other, using them you can control the evaluation order of the expression'.\x0aself mission:'See how parentheses work in the first three expressions, then complete the last with them so you can obtain 6'.\x0aself next:Lesson8.\x0aself content: '3+4 squared.\x0a\x0a(3+4) squared.\x0a\x0a3+ (4 squared).\x0a\x0a3 min: 4 * 2\x0a'.\x0aself result:[:x|x=6].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson8"]
}),
smalltalk.Lesson7);



smalltalk.addClass('Lesson8', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(8)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you will learn blocks and some usage for them.The following expressions are blocks, they contain code, but the code is not executed until you tell the block to execute the code inside it."]);
smalltalk.send(self, "_mission_", ["To evaluate the code inside the block you have to send it the message \x22value\x22, try it with these blocks."]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson9 || Lesson9)]);
smalltalk.send(self, "_content_", ["[4+6] \x0a\x0a[david:=Person bornWithName:'David'.david name]\x0a \x0a[david age:15. david age]"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(15)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:8.\x0aself explanation:'Goal: In the next three lessons you will learn blocks and some usage for them.The following expressions are blocks, they contain code, but the code is not executed until you tell the block to execute the code inside it.'.\x0aself mission:'To evaluate the code inside the block you have to send it the message \x22value\x22, try it with these blocks.'.\x0aself next:Lesson9.\x0aself content: '[4+6] \x0a\x0a[david:=Person bornWithName:''David''.david name]\x0a \x0a[david age:15. david age]'.\x0aself result:[:x|x=15].\x0a^self.",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson9"]
}),
smalltalk.Lesson8);



smalltalk.addClass('Lesson9', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(9)]);
smalltalk.send(self, "_explanation_", ["Also block can have some parameters"]);
smalltalk.send(self, "_mission_", ["To value blocks with parameters you can use the messages \x22value:\x22, \x22value: value:\x22, \x22value: value: value:\x22, depending on the number of arguments of the block. Value the following blocks, pass the correct arguments to the last one to get 9"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson10 || Lesson10)]);
smalltalk.send(self, "_content_", ["[:n|n*5]\x0a\x0a[:aName :anAge|person:=Person bornWithName:aName.person age:anAge]\x0a\x0a[:x :y :z| x+y*z]\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(9)]);})]);
return self;
return self;},
args: [],
source: "initialize\x0aself name:9.\x0aself explanation:'Also block can have some parameters'.\x0aself mission:'To value blocks with parameters you can use the messages \x22value:\x22, \x22value: value:\x22, \x22value: value: value:\x22, depending on the number of arguments of the block. Value the following blocks, pass the correct arguments to the last one to get 9'.\x0aself next:Lesson10.\x0aself content: '[:n|n*5]\x0a\x0a[:aName :anAge|person:=Person bornWithName:aName.person age:anAge]\x0a\x0a[:x :y :z| x+y*z]\x0a'.\x0aself result:[:x|x=9].\x0a^self",
messageSends: ["name:", "explanation:", "mission:", "next:", "content:", "result:", "="],
referencedClasses: ["Lesson10"]
}),
smalltalk.Lesson9);



