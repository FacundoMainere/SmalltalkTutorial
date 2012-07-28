Smalltalk current createPackage: 'ExcerciseObjects' properties: #{}!
Object subclass: #Person
	instanceVariableNames: 'name age'
	package: 'ExcerciseObjects'!

!Person methodsFor: 'not yet classified'!

age: anAge

age:=anAge
!

initialize:aName

self age:0.
self name:aName.
^self
!

name:aName

name:=aName
! !

!Person class methodsFor: 'not yet classified'!

bornWithName:aName

^super new initialize: aName
! !

