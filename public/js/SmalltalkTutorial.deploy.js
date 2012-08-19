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



smalltalk.addClass('Congratulations', smalltalk.Widget, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_h2", []), "_with_", ["Congratulations, you just have just completed Smalltalk Tutorial!"]);
return self;}
}),
smalltalk.Congratulations);



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
(function($rec){smalltalk.send($rec, "_class_", ["section center"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_h1", []), "_with_", [smalltalk.send("Lesson ", "__comma", [smalltalk.send(self, "_name", [])])]);smalltalk.send(smalltalk.send(html, "_h5", []), "_with_", [smalltalk.send(self, "_explanation", [])]);smalltalk.send(smalltalk.send(html, "_h4", []), "_with_", [smalltalk.send(self, "_mission", [])]);smalltalk.send(workspace, "_renderOn_", [html]);smalltalk.send(workspace, "_val_", [smalltalk.send(self, "_content", [])]);return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", ["DoIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return ((($receiver = smalltalk.send(self, "_checkResult_", [smalltalk.send(workspace, "_doIt", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_close", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_next", []), "_new", []), "_open", []);})]));})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["PrintIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_printIt", []);})]);})(smalltalk.send(html, "_button", []));(function($rec){smalltalk.send($rec, "_with_", ["InspectIt"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(workspace, "_inspectIt", []);})]);})(smalltalk.send(html, "_button", []));return (function($rec){smalltalk.send($rec, "_with_", ["Class Browser"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_open", []);})]);})(smalltalk.send(html, "_button", []));})]);})]);})(smalltalk.send(html, "_div", []));
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
smalltalk.send(self, "_content_", ["((Array new:2) at:1 put:'Hello') at:2 put:'world'.\x0a\x0a#(9 10 11) at:2.\x0a\x0a{(6+6) (3*4)}.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(15)]);})]);
return self;
return self;}
}),
smalltalk.Lesson11);



smalltalk.addClass('Lesson12', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(12)]);
smalltalk.send(self, "_explanation_", ["The Set is a collection without order and without repetitions, whenever you add an object that was already inside it, it is not added"]);
smalltalk.send(self, "_mission_", ["A Set can be created empty or with elements already inside, you can add elements to a Set with the message \x22add:\x22. Evaluate the following expressions, then create a Set with some strings on it.(Remember: Strings are created with single quotes, double quotes are for comments)"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson13 || Lesson13)]);
smalltalk.send(self, "_content_", ["set:=Set with:1 with:2.\x0aset add:5.\x0a\x0aset includes:3.\x0a\x0aset includes:2.\x0a\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "_isMemberOf_", [(smalltalk.Set || Set)]);})]);
return self;
return self;}
}),
smalltalk.Lesson12);



smalltalk.addClass('Lesson13', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(13)]);
smalltalk.send(self, "_explanation_", ["These are dictionaries, a Dictionary is a collection that stores an Object key and relates it to an Object value, for each key, there is only one value."]);
smalltalk.send(self, "_mission_", ["To add key-value relationships to a Dictionary, use the message \x22at:put:\x22, for example \x22dictionary at:'key' put:'value'\x22.Then get the value 5 from dictionary"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson14 || Lesson14)]);
smalltalk.send(self, "_content_", ["dictionary:= Dictionary new.\x0adictionary at:5 put:7.\x0adictionary at:'smalltalk' put:5.\x0adictionary at:'tutorial' put:9.\x0a\x0adictionary at:'tutorial'.\x0adictionary keys.\x0adictionary values.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(5)]);})]);
return self;
return self;}
}),
smalltalk.Lesson13);



smalltalk.addClass('Lesson14', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(14)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next four lessons you will learn some useful collection messages. The first and less specific is \x22do:\x22, it takes a block with a single parameter and applies it to each element of the collection."]);
smalltalk.send(self, "_mission_", ["The expression \x22n to: i\x22 also creates a collection with the numbers from n to i, the following example is adding all the numbers from 1 to 5, modify it to multiply all the numbers from 5 to 8 (Remember to modify the initial value of \x22res\x22) "]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson15 || Lesson15)]);
smalltalk.send(self, "_content_", ["res:=0.\x0a(1 to: 5) do: [:n| res:=res+n],\x0ares.\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(1680)]);})]);
return self;
return self;}
}),
smalltalk.Lesson14);



smalltalk.addClass('Lesson15', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(15)]);
smalltalk.send(self, "_explanation_", ["The next message is \x22collect:\x22, it is similar to \x22do:\x22 but it also makes a new collection made of the results of applying the block to each element."]);
smalltalk.send(self, "_mission_", ["Write a collect block that returns a collection with the size of each string on set"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson16 || Lesson16)]);
smalltalk.send(self, "_content_", ["set:= Set with: 'smalltalk' with: 'tutorial' with: 'rules'.\x0aset collect:\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(x, "__eq", [(smalltalk.Set || Set)]), "_with_with_with_", [(9), (8), (5)]);})]);
return self;
return self;}
}),
smalltalk.Lesson15);



smalltalk.addClass('Lesson16', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(16)]);
smalltalk.send(self, "_explanation_", ["\x22select:\x22 and \x22reject:\x22 are opposite messages, both take a block with one parameter that returns true or false, \x22select:\x22 returns a collection with all the elements returning true, \x22reject:\x22 returns a collection without the elements returning true. "]);
smalltalk.send(self, "_mission_", ["The following is a \x22select:\x22 taking all the strings that have \x22h\x22 as the first letter, create a \x22reject:\x22 block to discard all the strings with size 4 or more"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson17 || Lesson17)]);
smalltalk.send(self, "_content_", ["array:=#('cow' 'horn' 'helicopter' 'pig').\x0aarray select:[:word|word first='h']\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [["cow", "pig"]]);})]);
return self;
return self;}
}),
smalltalk.Lesson16);



smalltalk.addClass('Lesson17', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(17)]);
smalltalk.send(self, "_explanation_", ["\x22inject:into:\x22 is the more complex, it takes two parameters, first any object and second a block that takes two parameters too, it uses the block to operate the first parameter with the first element of the collection, then operates the result of that with the next element in the collection, until there is no more elements "]);
smalltalk.send(self, "_mission_", ["With \x22inject:into:\x22 we can make the sum without using a variable, try to complete it."]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson18 || Lesson18)]);
smalltalk.send(self, "_content_", ["(1 to: 5) inject: into:[:x :y|]\x0a"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", [(15)]);})]);
return self;
return self;}
}),
smalltalk.Lesson17);



smalltalk.addClass('Lesson18', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(18)]);
smalltalk.send(self, "_explanation_", ["Goal: In the next three lessons you will learn how to create your own classes, instance methods and class methods. To create a class, click on \x22Class Browser\x22 button, then choose a category in the first column, then complete the template and save."]);
smalltalk.send(self, "_mission_", ["Create a Dog class that's subclass of Animal, to do subclassification replace \x22Object\x22 in the template with \x22Animal\x22. Then evaluate the following code"]);
smalltalk.send(self, "_next_", [(smalltalk.Lesson19 || Lesson19)]);
smalltalk.send(self, "_content_", ["spike:=Dog bornWithName: 'Spike'.\x0aspike name"]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(x, "__eq", ["Spike"]);})]);
return self;
return self;}
}),
smalltalk.Lesson18);



smalltalk.addClass('Lesson19', smalltalk.Lesson, [], 'SmalltalkTutorial');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self, "_name_", [(20)]);
smalltalk.send(self, "_explanation_", ["A Class method is what a Class can do, we generally use it for constructing instances of a Class, to create one is similar to an instance method, but choosing the Class tab."]);
smalltalk.send(self, "_mission_", ["Create a class method \x22bornWithName:withOwner:\x22 that takes as argument the name of the dog and its owner, it returns a dog with its owner and its name assigned(Tip: use the message \x22bornWithName:\x22 and \x22owner:\x22, dont forget to return it)"]);
smalltalk.send(self, "_next_", [(smalltalk.Congratulations || Congratulations)]);
smalltalk.send(self, "_content_", ["david:= Person bornWithName:'David'.\x0aspike:= Dog bornWithName: 'Spike' withOwner:david.\x0aspike."]);
smalltalk.send(self, "_result_", [(function(x){return smalltalk.send(smalltalk.send(smalltalk.send(x, "_owner", []), "_name", []), "__eq", ["David"]);})]);
return self;
return self;}
}),
smalltalk.Lesson19);



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
smalltalk.send(self, "_next_", [(smalltalk.Lesson9 || Lesson9)]);
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



