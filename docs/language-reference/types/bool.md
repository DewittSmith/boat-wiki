# bool
[[toc]]

The ```bool``` type represents a Boolean value, which can be either ```true``` or ```false```.

To perform logical operations with values of the ```bool``` type, use [logical](/) operators. The ```bool``` type is the result type of [comparison](/) and [equality](/) operators. A ```bool``` expression can be a controlling conditional expression in the [if](/), [do](/), [while](/), and [for](/) statements and in the [ternary operator ?:](/).

## Literals
You can use the ```true``` and ```false``` literals to initialize a ```bool``` variable or to pass a ```bool``` value:

```cs
const isTrue = true; 

if (isTrue)
{
    print("It comes here");
}

if (false)
{
    print("But not here");
}
```

## Conversions
Booleans are implicitly converted to any numeric type, where ```true``` and ```false``` are treated as ```1``` and ```0``` respectively. Numeric types can be converted explicitly to ```bool```, where ```0``` is treated as ```false``` and any other value as ```true```.