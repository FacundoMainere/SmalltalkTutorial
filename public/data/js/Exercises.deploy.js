smalltalk.addPackage('Exercises', {});
smalltalk.addClass('Person', smalltalk.Object, ['name', 'age'], 'Exercises');
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


