smalltalk.addPackage('Exercises', {});
smalltalk.addClass('Animal', smalltalk.Object, ['name', 'owner'], 'Exercises');
smalltalk.addMethod(
"_initialize_",
smalltalk.method({
selector: "initialize:",
fn: function (aName){
var self=this;
smalltalk.send(self, "_name_", [aName]);
return self;
return self;}
}),
smalltalk.Animal);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Animal);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aName){
var self=this;
(self['@name']=aName);
return self;}
}),
smalltalk.Animal);

smalltalk.addMethod(
"_owner",
smalltalk.method({
selector: "owner",
fn: function (){
var self=this;
return self['@owner'];
return self;}
}),
smalltalk.Animal);

smalltalk.addMethod(
"_owner_",
smalltalk.method({
selector: "owner:",
fn: function (anOwner){
var self=this;
(self['@owner']=anOwner);
return self;}
}),
smalltalk.Animal);


smalltalk.addMethod(
"_bornWithName_",
smalltalk.method({
selector: "bornWithName:",
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Animal.klass.superclass || nil), "_initialize_", [aName]);
return self;}
}),
smalltalk.Animal.klass);


smalltalk.addClass('Person', smalltalk.Object, ['name', 'age'], 'Exercises');
smalltalk.addMethod(
"_age",
smalltalk.method({
selector: "age",
fn: function (){
var self=this;
return self['@age'];
return self;}
}),
smalltalk.Person);

smalltalk.addMethod(
"_age_",
smalltalk.method({
selector: "age:",
fn: function (anAge){
var self=this;
(self['@age']=anAge);
return self;}
}),
smalltalk.Person);

smalltalk.addMethod(
"_initialize_",
smalltalk.method({
selector: "initialize:",
fn: function (aName){
var self=this;
smalltalk.send(self, "_name_", [aName]);
smalltalk.send(self, "_age_", [(0)]);
return self;
return self;}
}),
smalltalk.Person);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.Person);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aName){
var self=this;
(self['@name']=aName);
return self;}
}),
smalltalk.Person);


smalltalk.addMethod(
"_bornWithName_",
smalltalk.method({
selector: "bornWithName:",
fn: function (aName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", [], smalltalk.Person.klass.superclass || nil), "_initialize_", [aName]);
return self;}
}),
smalltalk.Person.klass);


