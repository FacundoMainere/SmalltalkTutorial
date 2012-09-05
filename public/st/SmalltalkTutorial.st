Smalltalk current createPackage: 'SmalltalkTutorial' properties: #{}!
Widget subclass: #Congratulations
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Congratulations methodsFor: 'not yet classified'!

open
	(window jQuery: document)  ready: [
          	self appendToJQuery: '.lesson' asJQuery.
        ].
!

renderOn: html
html h2 with:'Congratulations, you just have just completed Smalltalk Tutorial!! Thanks for doing it.'.
! !

Widget subclass: #Lesson
	instanceVariableNames: 'explanation mission result name next content'
	package: 'SmalltalkTutorial'!

!Lesson methodsFor: 'accessors'!

content

^content
!

content:aContent

content:=aContent
!

explanation

^explanation
!

explanation: aExplanation

explanation:= aExplanation
!

mission

^mission
!

mission:aMission

mission:=aMission
!

name

^name
!

name:aName

name:=aName
!

next

^next
!

next: aNext

next:=aNext
!

result

^result
!

result:aResult

result:= aResult
! !

!Lesson methodsFor: 'render'!

checkResult:aResult

^[self result value:aResult] on: Error do:[self error: 'That is not the result']
!

close
'.lesson' asJQuery empty.
!

open
	(window jQuery: document)  ready: [
          	self appendToJQuery: '.lesson' asJQuery.
		window saveLesson: self name.
        ].
!

renderOn: html

	| workspace |
	workspace := SourceArea new.
	html div class: 'section center'; with: [
		html h1 with: ('Lesson ',self name).
		html h5 with: self explanation.
		html h4 with: self mission.
		workspace renderOn: html.
		workspace val: self content.
		html div with: [
			html button
				with: 'DoIt';
				onClick: [(self checkResult:workspace doIt) ifTrue:[
self close.
self next new open.
]].
			html button
				with: 'PrintIt';
				onClick: [workspace printIt].
			html button
				with: 'InspectIt';
				onClick: [workspace inspectIt].
html button with: 'Class Browser'; onClick: [Browser open]
]]
! !

!Lesson class methodsFor: 'instance creation'!

new

^super new initialize
! !

Lesson subclass: #Lesson1
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson1 methodsFor: 'initialize'!

initialize
self explanation: 'Goal: In the next three lessons you are going to learn how to evaluate in different ways a piece of code in Smalltalk.
Smalltalk expressions are evaluated by selecting the code and clicking "DoIt"'.
self name: 1.
self result:[:x| x class = Date].
self next:Lesson2.
self content: 'Date now'.
self mission: 'To advance to the next lesson evaluate the following code'.
^self
! !

Lesson subclass: #Lesson10
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson10 methodsFor: 'not yet classified'!

initialize
self name:10.
self explanation:'Some messages take blocks as parameters, this is the case of "ifTrue:ifFalse:", it takes two blocks as parameter, the first is executed if the receiver object is true, and the second if it is false'.
self mission:'Also you can use them by separate "ifTrue:" or "ifFalse", see how the two first expressions behave, then correct the last one to get the first block to execute'.
self next:Lesson11.
self content: '3>4 ifTrue:[1] ifFalse:[0].

false ifTrue:[''yes''] ifFalse:[''no''].

(''six'' isNumber) ifTrue:[''Pass to the next lesson''] ifFalse:[''Stay here'']
'.
self result:[:x|x='Pass to the next lesson'].
^self
! !

Lesson subclass: #Lesson11
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson11 methodsFor: 'not yet classified'!

initialize
self name:11.
self explanation:'Goal: In the next three lessons you will learn three different types of Smalltalk collections. The first one is the Array, it has predefined size and order, there is many ways to define an array'.
self mission:'Below there are three different forms of defining an Array, pick one, then create an array with the numbers from 1 to 5'.
self next:Lesson12.
self content: '(Array new:2) at:1 put:''Hello''; at:2 put:''world''.

#(9 10 11) at:2.

{(6+6). (3*4)}.
'.
self result:[:x|x = #(1 2 3 4 5)].
^self.
! !

Lesson subclass: #Lesson12
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson12 methodsFor: 'not yet classified'!

initialize
self name:12.
self explanation:'The Set is a collection without order and without repetitions, whenever you add an object that was already inside it, it is not added'.
self mission:'A Set can be created empty or with elements already inside, you can add elements to a Set with the message "add:". Evaluate the following expressions, then create a Set with some strings on it.(Remember: Strings are created with single quotes, double quotes are for comments)'.
self next:Lesson13.
self content: 'set:=Set with:1 with:2.
set add:5.

set includes:3.

set includes:2.

'.
self result:[:x|x isMemberOf:Set].
^self.
! !

Lesson subclass: #Lesson13
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson13 methodsFor: 'not yet classified'!

initialize
self name:13.
self explanation:'These are dictionaries, a Dictionary is a collection that stores an Object key and relates it to an Object value, for each key, there is only one value.'.
self mission:'To add key-value relationships to a Dictionary, use the message "at:put:", for example "dictionary at:''key'' put:''value''".Then get the value 5 from dictionary'.
self next:Lesson14.
self content: 'dictionary:= Dictionary new.
dictionary at:5 put:7.
dictionary at:''smalltalk'' put:5.
dictionary at:''tutorial'' put:9.

dictionary at:''tutorial''.
dictionary keys.
dictionary values.
'.
self result:[:x|x=5].
^self.
! !

Lesson subclass: #Lesson14
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson14 methodsFor: 'not yet classified'!

initialize
self name:14.
self explanation:'Goal: In the next four lessons you will learn some useful collection messages. The first and less specific is "do:", it takes a block with a single parameter and applies it to each element of the collection.'.
self mission:'The expression "n to: i" also creates a collection with the numbers from n to i, the following example is adding all the numbers from 1 to 5, modify it to multiply all the numbers from 5 to 8 (Remember to modify the initial value of "res") '.
self next:Lesson15.
self content: 'res:=0.
(1 to: 5) do: [:n| res:=res+n].
res.
'.
self result:[:x|x=1680].
^self.
! !

Lesson subclass: #Lesson15
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson15 methodsFor: 'not yet classified'!

initialize
self name:15.
self explanation:'The next message is "collect:", it is similar to "do:" but it also makes a new collection made of the results of applying the block to each element.'.
self mission:'Write a collect block that returns a collection with the size of each string on set'.
self next:Lesson16.
self content: 'set:= Set with: ''smalltalk'' with: ''tutorial'' with: ''rules''.
set collect:
'.
self result:[:x|x=(Set with:9 with: 8 with: 5)].
^self.
! !

Lesson subclass: #Lesson16
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson16 methodsFor: 'not yet classified'!

initialize
self name:16.
self explanation:'"select:" and "reject:" are opposite messages, both take a block with one parameter that returns true or false, "select:" returns a collection with all the elements returning true, "reject:" returns a collection without the elements returning true. '.
self mission:'The following is a "select:" taking all the strings that have "h" as the first letter, create a "reject:" block to discard all the strings with size 4 or more'.
self next:Lesson17.
self content: 'array:=#(''cow'' ''horn'' ''helicopter'' ''pig'').
array select:[:word|word first=''h'']
'.
self result:[:x|x=#('cow' 'pig')].
^self.
! !

Lesson subclass: #Lesson17
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson17 methodsFor: 'not yet classified'!

initialize
self name:17.
self explanation:'"inject:into:" is the more complex, it takes two parameters, first any object and second a block that takes two parameters too, it uses the block to operate the first parameter with the first element of the collection, then operates the result of that with the next element in the collection, until there is no more elements '.
self mission:'With "inject:into:" we can make the sum without using a variable, try to complete it.'.
self next:Lesson18.
self content: '(1 to: 5) inject: into:[:x :y|]
'.
self result:[:x|x=15].
^self.
! !

Lesson subclass: #Lesson18
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson18 methodsFor: 'not yet classified'!

initialize
self name:18.
self explanation:'Goal: In the next three lessons you will learn how to create your own classes, instance methods and class methods. To create a class, click on "Class Browser" button, then choose a category in the first column, then complete the template and save.'.
self mission:'Create a Cat class that''s subclass of Animal, to do subclassification replace "Object" in the template with "Animal". Then evaluate the following code'.
self next:Lesson19.
self content: 'mrnoodles:=Cat bornWithName: ''MrNoodles''.
mrnoodles name'.
self result:[:x|x='MrNoodles'].
^self.
! !

Lesson subclass: #Lesson19
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson19 methodsFor: 'not yet classified'!

initialize
self name:19.
self explanation:'An instance method is what messages an instance of a class can understand. To define a new one, choose a class from the second Column, choose a category in the third column and complete the template'.
self mission:'Define an instance method "meow" for the class Cat, the method should return a string of what the Cat meows like(Tip: to define what the method return use "^". For example "^''bark bark!!''".)'.
self next:Lesson20.
self content: 'mrnoodles:= Cat bornWithName: ''MrNoodles''.
mrnoodles meow.'.
self result:[:x|x isKindOf:String].
^self.
! !

Lesson subclass: #Lesson2
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson2 methodsFor: 'not yet classified'!

initialize
self explanation: 'Also, you can know the result of evaluating your expression by selecting the code and clicking "PrintIt"'.
self mission:'Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click "DoIt"'.
self name: 2.
self result:[:x|x].
self next:Lesson3.
self content:'3+3.

''tutorial'' class.

Date now.

3<4'.
^self
! !

Lesson subclass: #Lesson20
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson20 methodsFor: 'not yet classified'!

initialize
self name:20.
self explanation:'A Class method is what a Class can do, we generally use it for constructing instances of a Class, to create one is similar to an instance method, but choosing the Class tab.'.
self mission:'Create a class method "bornWithName:withOwner:" that takes as argument the name of the cat and its owner, it returns a cat with its owner and its name assigned(Tip: use the message "bornWithName:" and "owner:", dont forget to return it)'.
self next:Congratulations.
self content: 'david:= Person bornWithName:''David''.
mrnoodles:= Cat bornWithName: ''MrNoodles'' withOwner:david.
mrnoodles.'.
self result:[:x|x owner name = 'David'].
^self.
! !

Lesson subclass: #Lesson3
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson3 methodsFor: 'not yet classified'!

initialize
self name:3.
self explanation:'Sometimes you may need to explore inside your results, then is when InspectIt becomes very handy'.
self mission:'Select the following code and InspectIt, get the age of the person, write it, and then evaluate it'.
self next:Lesson4.
self content: 'david:=Person bornWithName:''David''.

david'.
self result:[:x|x=0].
^self
! !

Lesson subclass: #Lesson4
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson4 methodsFor: 'not yet classified'!

initialize
self name:4.
self explanation:'Goal: In the next four lessons you are going to learn the three types of messages: Unary, Binary and Keyword.
The following are examples of unary messages, you have seen many in the past lessons, in a Smalltalk expression, unary messages are the first to be evaluated.'.
self mission:'Print the expressions to see the results, then ask for the object String length, to do it, send it the message "size"'.
self next:Lesson5.
self content: '3 squared.

Date now asString.

''ImAString'''.
self result:[:x|x=9].
^self
! !

Lesson subclass: #Lesson5
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson5 methodsFor: 'not yet classified'!

initialize
self name:5.
self explanation:'The next expressions are binary messages, they are evaluated after unary messages, they are generally arithmetic, comparison, and logical operations.'.
self mission:'To advance to the next lesson, first check the results of the following expressions, probably they wont behave the way you think, so analyze the results, then complete the last one with a number to get 4 as result'.
self next:Lesson6.
self content: '10>7.

15-6/9.

2*3-4*'.
self result:[:x|x=4].
^self
! !

Lesson subclass: #Lesson6
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson6 methodsFor: 'not yet classified'!

initialize
self name:6.
self explanation:'Here you got some keyword messages, as you may see, they are of the form "object message: argument", they are the last to be evaluated in a combined Smalltalk expression'.
self mission:'Try the examples, then complete the argument of the last expression to get 9'.
self next:Lesson7.
self content: '2 max:3.

5@7 x:6.

9 min:'.
self result: [:x|x=9].
^self
! !

Lesson subclass: #Lesson7
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson7 methodsFor: 'not yet classified'!

initialize
self name:7.
self explanation:'Also, you can combine unary, binary and keyword messages, but what if the evaluation order does not match your needs? then you can use parentheses, expressions between parentheses evaluate before any other, using them you can control the evaluation order of the expression'.
self mission:'See how parentheses work in the first three expressions, then complete the last with them so you can obtain 6'.
self next:Lesson8.
self content: '3+4 squared.

(3+4) squared.

3+ (4 squared).

3 min: 4 * 2
'.
self result:[:x|x=6].
^self
! !

Lesson subclass: #Lesson8
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson8 methodsFor: 'not yet classified'!

initialize
self name:8.
self explanation:'Goal: In the next three lessons you will learn blocks and some usage for them.The following expressions are blocks, they contain code, but the code is not executed until you tell the block to execute the code inside it.'.
self mission:'To evaluate the code inside the block you have to send it the message "value", try it with these blocks.'.
self next:Lesson9.
self content: '[4+6] 

[david:=Person bornWithName:''David''.david name]
 
[david age:15. david age]'.
self result:[:x|x=15].
^self.
! !

Lesson subclass: #Lesson9
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson9 methodsFor: 'not yet classified'!

initialize
self name:9.
self explanation:'Also block can have some parameters'.
self mission:'To value blocks with parameters you can use the messages "value:", "value: value:", "value: value: value:", depending on the number of arguments of the block. Value the following blocks, pass the correct arguments to the last one to get 9'.
self next:Lesson10.
self content: '[:n|n*5]

[:aName :anAge|person:=Person bornWithName:aName.person age:anAge]

[:x :y :z| x+y*z]
'.
self result:[:x|x=9].
^self
! !

