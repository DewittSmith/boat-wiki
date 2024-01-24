# Integer Numeric Types
[[toc]]

<br>
All integer numeric types support arithmetic, bitwise, comparison, and equality operators.

## Characteristics of Integer Types
### Signed Integers
| Keyword |                   Range                       | Bit Size |
|---------|-----------------------------------------------|----------|
|  byte   | $[-128, 127]$                                 |    8     |
|  short  | $[-32768, 32767]$                             |    16    |
|  int    | $[-2147483648, 2147483647]$                   |    32    |
|  long   | $[-9223372036854775808, 9223372036854775807]$ |    64    |

### Unsigned Integers
| Keyword |                 Max Value                     | Bit Size |
|---------|-----------------------------------------------|----------|
|  ubyte  | $255$                                         |    8     |
|  ushort | $65535$                                       |    16    |
|  uint   | $4294967295$                                  |    32    |
|  ulong  | $18446744073709551615$                        |    64    |

## Integer Literals
Integer literals can be
* Decimal: no prefix
* Hexadecimal: prefixed with ```0x```
* Octal: prefixed with ```0o```
* Binary: prefixed with ```0b```

```rust
const decimal = 69;
const hexadecimal = 0x45;
const octal = 0o105;
const binary = 0b_0100_0101;
```

The preceding example also shows the use of ```_``` as a digit separator. You can use the digit separator with all kinds of numeric literals.

> [!NOTE]
> Literals are interpreted as positive values. For example, the literal ```0xFF_FF_FF_FF``` represents the number ```4294967295``` of the uint type, though it has the same bit representation as the number ```-1``` of the int type.

The type of an integer literal is determined by its suffix as follows:
| Keyword | Suffix |
|---------|--------|
|  byte   |   Y    |
|  short  |   S    |
|  int    |   I    |
|  long   |   L    |
|  ubyte  |   UY   |
|  ushort |   US   |
|  uint   |   UI   |
|  ulong  |   UL   |

## Conversions
You can convert any integer numeric type to any other integer numeric type. If the destination type can store all values of the source type, the conversion is implicit. Otherwise, you need to use a cast expression to perform an explicit conversion.