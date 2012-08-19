Smalltalk current createPackage: 'Exercises' properties: #{}!
Object subclass: #Animal
	instanceVariableNames: 'name owner'
	package: 'Exercises'!

!Animal methodsFor: 'not yet classified'!

initialize:aName

self name:aName.
^self
!

name

^name
!

name: aName

name:=aName
!

owner

^owner
!

owner: anOwner

owner:=anOwner
! !

!Animal class methodsFor: 'not yet classified'!

bornWithName:aName

^super new initialize:aName
! !

Object subclass: #Person
	instanceVariableNames: 'name age'
	package: 'Exercises'!

!Person methodsFor: 'not yet classified'!

age

^age
!

age: anAge

age:=anAge
!

initialize:aName

self name:aName.
self age:0.
^self
!

name

^name
!

name: aName

name:=aName
! !

!Person class methodsFor: 'not yet classified'!

bornWithName:aName

^super new initialize:aName
! !

