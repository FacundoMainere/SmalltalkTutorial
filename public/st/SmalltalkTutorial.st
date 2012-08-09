Smalltalk current createPackage: 'SmalltalkTutorial' properties: #{}!
Object subclass: #Achievement
	instanceVariableNames: 'next name'
	package: 'SmalltalkTutorial'!

!Achievement methodsFor: 'not yet classified'!

close
'.lesson' asJQuery empty.
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

open
	(window jQuery: document)  ready: [
          	self 
          		appendToJQuery: '.lesson' asJQuery.
        ].
!

renderOn: html

html button with: 'Next Lesson'; onClick: [self close. self next new open]
! !

Achievement subclass: #Achievement1
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Achievement1 methodsFor: 'not yet classified'!

initialize

self next:Lesson1.
self name:'DoIt, PrintIt, InspectIt'.
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
          	self 
          		appendToJQuery: '.lesson' asJQuery.
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
self explanation: 'Smalltalk expressions are evaluated by selecting the code and clicking "DoIt"'.
self name: 'Lesson 1'.
self result:[:x| x class = Date].
self next:Lesson2.
self content: 'Date now'.
self mission: 'To advance to the next lesson value the following code'.
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
self explanation:'Sometimes you may need to explore inside your results, that is when InspectIt becomes very handy'.
self mission:'Select the following code and InspectIt, get the age of the person, write it, and then value it'.
self next:Achievement1.
self content: 'david:=Person bornWithName:''David''.

david'.
self result:[:x|x=0].
^self
! !

