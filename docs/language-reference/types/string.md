# string
[[toc]]

Represents text as a sequence of UTF-8 code units.

## Literals
### Single-line Sring Literal
You can specify a string value with character sequence enclosed in double quotation marks ("):
```cs
"Hello, World!"
```

### Multi-line Sring Literal
It is possible to create multi-line string by enclosing it with three quotes ("""):
```cs
"""
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
"""
```

The newlines following the opening quote and preceding the ending quote aren't included in the final content. The closing quote sequence dictates the leftmost column for the string literal. You can indent a raw string literal to match the overall code format:

```cs
const message = """
    "This is a message."
    """;
print(message);

// Output: "This is a message."
```

### String Contents
String literals can contain any character literal. Escape sequences are included. It is possible to add any Unicode character by using ```\u{...}``` with hexadecimal representation of a character code inside curly braces.

```js
const message = "\\\u0036\u{39}\n hehe";
print(message);

// Output:
// \69
//  hehe
```


### Verbatim Strings
Verbatim string literals start with ```@``` and are also enclosed in quotation marks. For example:
```cs
@"C:\Projects\TicTacToe.boat"
```

To include a double quotation mark in a verbatim string, double it:
```cs
@"Do you know the ""What the dog doin?"" origin?"
```

### String Interpolation
Strings can be interpolated by adding ```$``` before string literal. An interpolated string is a string literal that might contain expressions. When an interpolated string is resolved to a result string, items with expressions are replaced by the string representations of the expression results. Expressions use ```{EXPRESSION:FORMAT}``` syntax, where ```:FORMAT``` can be omitted.

```cs
const name = "Patrick";
const age = 27;

print($"My name is {name} and I am {age} years old...");
// Output: My name is Patrick and I am 27 years old...
```

#### Formatting
Expressions inside interpolated strings can be formatted by using [format specifier](/), for example:
```cs
print($"I am {0.975746:P} sure about it...");
print($"I am {0.975746:P1} sure about it...");
print($"I am {0.975746:P4} sure about it...");

// Output:
// I am 97.57% sure about it...
// I am 97.6% sure about it...
// I am 97.5746% sure about it...
```