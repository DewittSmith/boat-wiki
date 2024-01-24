---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Real Numeric Types
[[toc]]

<br>
All real numeric types support arithmetic, comparison, and equality operators.

## Characteristics of Real Types
### Fixed Point
| Keyword |   Range   | Bit Size |
|---------|-----------|----------|
|  norm   | $[-1, 1]$ |    8     |

### Floating Point
| Keyword |              Approximate Range              | Bit Size |
|---------|---------------------------------------------|----------|
|  half   | $[\pm5.96 * 10^{-8}, \pm6.55 * 10^{4}]$     |    16    |
|  float  | $[\pm1.40 * 10^{-45}, \pm3.40 * 10^{38}]$   |    32    |
|  double | $[\pm4.94 * 10^{-324}, \pm1.80 * 10^{308}]$ |    64    |

## Real Literals
The type of a real literal is determined by its suffix as follows:
| Keyword | Suffix |
|---------|--------|
|  norm   |   N    |
|  half   |   H    |
|  float  |   F    |
|  double |   D    |

```cs
const _norm = 0.8N;
const _half = 1.61H;
const _float = 21.61F;

var _double = 3_000_000;
_double = 0.1D;
```

The preceding example also shows the use of ```_``` as a digit separator. You can use the digit separator with all kinds of numeric literals.

You can also use scientific notation, that is, specify an exponent part of a real literal, as the following example shows:
```cs
var exp = 12.35E11
exp = 125.1e+3;
exp = 56.5e-10;
```

## Conversions
You can convert any real numeric type to any other real numeric type. If the destination type can store all values of the source type, the conversion is implicit. Otherwise, you need to use a cast expression to perform an explicit conversion.