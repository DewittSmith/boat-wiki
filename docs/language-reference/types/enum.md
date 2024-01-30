# Enumeration
[[toc]]

Enumerations represent a set of logically related constants. An enumeration is declared using the ```enum``` operator, followed by the name of the enumeration. Then comes a list of enumeration elements separated by commas:

```java
public enum Day
{
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday // 6
}
```

By default ```enum``` uses [int](/) as underlying type. You can specify ```enum``` type by adding integer type as template argument:
```java
public enum<byte> ClientMessageType
{
    Connected, // 0
    Disconnected, // 1
    Data // 2
}
```

You can explicitly specify underlying value of an ```enum```:
```java
public enum Direction
{
    Up = 2,
    Down = 5,
    Left = -3,
    Right = 69
}
```

And you even can alias some data:
```rust
public enum WebEvent {
    // An 'enum' variant may either be 'unit-like',
    PageLoad = 5,
    PageUnload = 4,
    // like tuple structs,
    KeyPress(char) = 3,
    Paste(string, int) = 2,
    // or like structures.
    Click : IDeconstructible<int, int>
    { 
        public int X;
        public int Y;

        public WebEvent.Click Negate()
        {
            return Click { X: -X, Y: -Y };
        }

        void IDeconstructible<int, int>.Deconstruct(out int x, out int y)
        {
            x = X;
            y = Y;
        }
    } = 0,

    public static void Process(WebEvent evt)
    {
        switch (evt)
        {
            PageLoad => print("Page loaded");
            PageUnload => print("Page unloaded");
            // Deconstruct tuple values
            KeyPress(char c) => print($"Key '{c}' is pressed");
            Paste(string s, int i) => print($"Pasted '{s}' at '{i}'");
            // Struct-like enum variants need to implement 'IDeconstructible' for this to work
            Click(int x, int y) => print($"Clicked at ({x}, {y})");
        }
    }
}

WebEvent.Process(WebEvent.PageLoad);
WebEvent.Process(WebEvent.PageUnload);
WebEvent.Process(WebEvent.KeyPress('A'));
WebEvent.Process(WebEvent.Paste("Test", 3));
WebEvent.Process(WebEvent.Click { X: 3, Y: 5 });
```

You can alias shared data with enums by using structure initialization syntax:
```rust
public enum PlayerType
{
    Mage { BaseHealth: 3, BaseDamage: 7 },
    Knight { BaseHealth: 8, BaseDamage: 2 },
    Archer { BaseHealth: 5, BaseDamage: 5 }

    public int BaseHealth { get; }
    public int BaseDamage { get; }
}

print(PlayerType.Mage.BaseHealth);
print(PlayerType.Knight.BaseHealth);
print(PlayerType.Archer.BaseHealth);
```

Enums can contain any child members as [struct](/language-reference/types/struct) does.

## Enums as Flags
If you want an enumeration type to represent a combination of choices, define enum members for those choices such that an individual choice is a bit field.
```java
public enum Changes
{
    XChanged { Name: "X Changed" } = 0b_0001,
    YChanged { Name: "Y Changed" } = 0b_0010,
    ZChanged { Name: "Z Changed" } = 0b_0100,
    XZChanged { Name: "XZ Changed" } = XChanged | ZChanged,

    // All unitialized enum variants will have all the fields defaulted
    AllChanged = XChanged | YChanged | ZChanged,

    public string Name { get; }
}
```

## Conversions
Enumeration types use the same conversion rules as their underlying type. They inherit all operations from underlying type as well:
```cs
public enum Axis
{
    X,
    Y,
    Z
}

print((byte)Axis.Y + 1);
print(Axis.X + 1);
// Output: 
// 2
// Y
```