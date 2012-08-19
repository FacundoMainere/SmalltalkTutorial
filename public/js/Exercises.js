smalltalk.addPackage('Exercises', {});
smalltalk.addClass('Animal', smalltalk.Object, ['name', 'owner'], 'Exercises');
smalltalk.addMethod(
"_initialize_",
smalltalk.method({
selector: "initialize:",
category: 'not yet classified',
fn: function (aName){
var self=this;
smalltalk.send(self, "_name_", [aName]);
return self;
return self;},
args: ["aName"],
source: "initialize:aName\x0a\x0aself name:aName.\x0a^self",
messageSends: ["name:"],
referencedClasses: []
}),
smalltalk.Animal);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: "name\x0a\x0a^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.Animal);

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
source: "name: aName\x0a\x0aname:=aName",
messageSends: [],
referencedClasses: []
}),
smalltalk.Animal);

smalltalk.addMethod(
"_owner",
smalltalk.method({
selector: "owner",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@owner'];
return self;},
args: [],
source: "owner\x0a\x0a^owner",
messageSends: [],
referencedClasses: []
}),
smalltalk.Animal);

smalltalk.addMethod(
"_owner_",
smalltalk.method({
selector: "owner:",
category: 'not yet classified',
fn: function (anOwner){
var self=this;
(self['@owner']=anOwner);
return self;},
args: ["anOwner"],
source: "owner: anOwner\x0a\x0aowner:=anOwner",
messageSends: [],
referencedClasses: []
}),
smalltalk.Animal);


smalltalk.addMethod(
"_bornWithName_",
smalltalk.method({
selector: "bornWithName:",
category: 'not yet classified',
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Animal.klass.superclass || nil), "_initialize_", [aName]);
return self;},
args: ["aName"],
source: "bornWithName:aName\x0a\x0a^super new initialize:aName",
messageSends: ["initialize:", "new"],
referencedClasses: []
}),
smalltalk.Animal.klass);


smalltalk.addClass('Person', smalltalk.Object, ['name', 'age'], 'Exercises');
smalltalk.addMethod(
"_age",
smalltalk.method({
selector: "age",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@age'];
return self;},
args: [],
source: "age\x0a\x0a^age",
messageSends: [],
referencedClasses: []
}),
smalltalk.Person);

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
smalltalk.send(self, "_name_", [aName]);
smalltalk.send(self, "_age_", [(0)]);
return self;
return self;},
args: ["aName"],
source: "initialize:aName\x0a\x0aself name:aName.\x0aself age:0.\x0a^self",
messageSends: ["name:", "age:"],
referencedClasses: []
}),
smalltalk.Person);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: "name\x0a\x0a^name",
messageSends: [],
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
source: "name: aName\x0a\x0aname:=aName",
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
source: "bornWithName:aName\x0a\x0a^super new initialize:aName",
messageSends: ["initialize:", "new"],
referencedClasses: []
}),
smalltalk.Person.klass);


