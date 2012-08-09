Smalltalk current createPackage: 'Excercises' properties: #{}!
Object subclass: #Person
	instanceVariableNames: 'name age'
	package: 'Excercises'!

!Person methodsFor: 'not yet classified'!

age: anAge

age:=anAge
!

initialize:aName

self name:aName.
self age:0.
^self
!

name: aName

name:=aName
! !

!Person class methodsFor: 'not yet classified'!

bornWithName:aName

^super new initialize:aName
! !

