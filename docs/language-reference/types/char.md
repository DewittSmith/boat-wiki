# char
[[toc]]

The ```char``` type represents a Unicode UTF-8 character. It supports all operations that [ubyte](/) supports.

The [string](/language-reference/types/string) type represents text as a sequence of ```char``` values.

## Literals
You can specify a char value with:
* Character literal
* Unicode escape sequence, which is ```\u``` followed by the two-symbol hexadecimal representation of a character code.

```rust
const chars = ['a', '\u41', (char)74];
// Will contain 'a, a, a'
```
As the preceding example shows, you can also cast the value of a character code into the corresponding ```char``` value.

## Conversions
The ```char``` type follows same conversion rules as [ubyte](/). There is an implicit conversion to [ubyte](/) as well.