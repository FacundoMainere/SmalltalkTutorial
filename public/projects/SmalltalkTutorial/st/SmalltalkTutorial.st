Smalltalk current createPackage: 'SmalltalkTutorial' properties: #{}!
Widget subclass: #Lesson
	instanceVariableNames: 'explanation result name next content'
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

^self result value:aResult
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
		html h3 with: self explanation.
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
self explanation: 'Para avanzar a la siguiente leccion evalue una expresion de resultado 6'.
self name: 'Lesson 1'.
self result:[:x|x=6].
self next:Lesson2.
self content: '3+'.
^self
! !

Lesson subclass: #Lesson2
	instanceVariableNames: ''
	package: 'SmalltalkTutorial'!

!Lesson2 methodsFor: 'not yet classified'!

initialize
self explanation: 'Para avanzar a la siguiente leccion cree un string de 7 caracteres'.
self name: 'Lesson 2'.
self result:[:x|x size = 7].
self next:Lesson1.
^self
! !

