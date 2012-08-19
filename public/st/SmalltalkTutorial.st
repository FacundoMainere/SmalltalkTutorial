Smalltalk current createPackage: 'SmalltalkTutorial' properties: #{}!
Widget subclass: #Achievement
	instanceVariableNames: 'next title'
	package: 'SmalltalkTutorial'!

!Achievement methodsFor: 'not yet classified'!

close
'.lesson' asJQuery empty.
!

next

^next
!

next: aNext

next:=aNext
!

open
	(window jQuery: document)  ready: [
          	self 
          		appendToJQuery: '.lesson' asJQuery.
        ].
!

renderOn: html
html h2 with:'Congratulations, you just achieved ',title,'!!'.
html button with: 'Next Lesson'; onClick: [self close. self next new open]
!

title

^title
!

title: aTitle

title:=aTitle
! !

!Achievement class methodsFor: 'not yet classified'!

new

^super new initialize
! !

Achievement subclass: #Achievement1
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Achievement1 methodsFor: 'not yet classified'!

initialize

self next:Lesson4.
self title:'DoIt, PrintIt, InspectIt'.
^self
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
		window alert: self name.
        ].
!

renderOn: html

	| workspace |
	workspace := SourceArea new.
	html div class: 'section center'; with: [
		html h1 with: self name.
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
self name: 'Lesson 1'.
self result:[:x| x class = Date].
self next:Lesson2.
self content: 'Date now'.
self mission: 'To advance to the next lesson evaluate the following code'.
^self
! !

Lesson subclass: #Lesson2
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson2 methodsFor: 'not yet classified'!

initialize
self explanation: 'Also, you can know the result of evaluating your expression by selecting the code and clicking "PrintIt"'.
self mission:'Print the results of the next expressions one by one, once finished, select the result of printing 3<4 and click "DoIt"'.
self name: 'Lesson 2'.
self result:[:x|x].
self next:Lesson3.
self content:'3+3.

''tutorial'' class.

Date now.

3<4'.
^self
! !

Lesson subclass: #Lesson3
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson3 methodsFor: 'not yet classified'!

initialize
self name:'Lesson 3'.
self explanation:'Sometimes you may need to explore inside your results, then is when InspectIt becomes very handy'.
self mission:'Select the following code and InspectIt, get the age of the person, write it, and then evaluate it'.
self next:Achievement1.
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
self name:'Lesson 4'.
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
self name:'Lesson 5'.
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
self name:'Lesson 6'.
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
self name:'Lesson 7'.
self explanation:'Also, you can combine unary, binary and keyword messages, but what if the evaluation order does not match your needs? then you can use parentheses, expressions between parentheses evaluate before any other, using them you can control the evaluation order of the expression'.
self mission:'See how parentheses work in the first three expressions, then complete the last with them so you can obtain 6'.
self next:Lesson1.
self content: '3+4 squared.

(3+4) squared.

3+ (4 squared).

3 min: 4 * 2
'.
self result:[:x|x=6].
^self
! !

