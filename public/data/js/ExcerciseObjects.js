smalltalk.addPackage('ExcerciseObjects', {});
smalltalk.addClass('Person', smalltalk.Object, ['name', 'age'], 'ExcerciseObjects');
smalltalk.addMethod(
"_age_",
smalltalk.method({
selector: "age:",
category: 'not yet classified',
fn: function (anAge){
var self=this;
(self['@age']=anAge);
return self;},
args: ["anAge"],
source: "age: anAge\x0a\x0aage:=anAge",
messageSends: [],
referencedClasses: []
}),
smalltalk.Person);

smalltalk.addMethod(
"_initialize_",
smalltalk.method({
selector: "initialize:",
category: 'not yet classified',
fn: function (aName){
var self=this;
smalltalk.send(self, "_age_", [(0)]);
smalltalk.send(self, "_name_", [aName]);
return self;
return self;},
args: ["aName"],
source: "initialize:aName\x0a\x0aself age:0.\x0aself name:aName.\x0a^self",
messageSends: ["age:", "name:"],
referencedClasses: []
}),
smalltalk.Person);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'not yet classified',
fn: function (aName){
var self=this;
(self['@name']=aName);
return self;},
args: ["aName"],
source: "name:aName\x0a\x0aname:=aName",
messageSends: [],
referencedClasses: []
}),
smalltalk.Person);


smalltalk.addMethod(
"_bornWithName_",
smalltalk.method({
selector: "bornWithName:",
category: 'not yet classified',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Person.klass.superclass || nil), "_initialize_", [aName]);
return self;},
args: ["aName"],
source: "bornWithName:aName\x0a\x0a^super new initialize: aName",
messageSends: ["initialize:", "new"],
referencedClasses: []
}),
smalltalk.Person.klass);


