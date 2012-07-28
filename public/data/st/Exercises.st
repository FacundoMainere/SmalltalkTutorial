Smalltalk current createPackage: 'Exercises' properties: #{}!
Object subclass: #Person
	instanceVariableNames: 'name age'
	package: 'Exercises'!

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

