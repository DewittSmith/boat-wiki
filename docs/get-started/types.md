# Types
[[toc]]

* Primitive Types
    * [Signed Integer](/language-reference/types/integer-numeric-types): ```byte, short, int, long```
    * [Unsigned Integer](/language-reference/types/integer-numeric-types): ```ubyte, ushort, uint, ulong```
    * [Fixed Point](/language-reference/types/real-numeric-types): ```norm```
    * [Floating Point](/language-reference/types/real-numeric-types): ```half, float, double```
    * [Boolean](/language-reference/types/bool): ```bool```, which represents ```true``` or ```false```
    * [Characters](/language-reference/types/uchar): ```char```, which represents a UTF-8 code unit
    * [Strings](/language-reference/types/ustring): ```string```
* [Tuple Types](/): User-defined types of the form ```(T1, T2, ...)```
* [Enum Types](/): User-defined types of the form ```enum E {...}```. An enum type is a distinct type with predefined constants.
* [Struct Types](/): User-defined types of the form ```struct S {...}```
* [Interface Types](/): User-defined types of the form ```interface I {...}```
* Array Types
    * [Fixed Array](/): ```TYPE[SIZE]```
    * [Dynamic Array](/): ```TYPE[]```
* [Delegate Types](/): User-defined types of the form ```delegate TYPE D(...)```
* [Pointer Types](/): ```T*```