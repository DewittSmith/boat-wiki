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

And you even can alias some data with constants:
```java
public enum PlayerType
{
    Mage { BaseHealth: 3, BaseDamage: 7 } = 2,
    Knight { BaseHealth: 8, BaseDamage: 2 } = 1,
    Archer { BaseHealth: 5, BaseDamage: 5 } = 0
    // And you still can explicitly set its values

    public int BaseHealth { get; private set; }
    public int BaseDamage { get; private set; }
}
```
Enums can contain any child members as [struct](/language-reference/types/struct) does. Every ```enum``` has a static method ```Values()```. It returns an array of all enum constants:

```cs
public enum Direction
{
    Up,
    Down,
    Left,
    Right

    public Direction Invert()
    {
        return switch (this)
        {
            Direction.Up => Direction.Down,
            Direction.Down => Direction.Up,
            Direction.Left => Direction.Right,
            Direction.Right => Direction.Left
        };
    }
}

foreach (var direction in Direction.Values())
{
    print(direction);
}

// Output:
// Up
// Down
// Left
// Right
```

## Enums as Flags
If you want an enumeration type to represent a combination of choices, define enum members for those choices such that an individual choice is a bit field.
```java
public enum Changes
{
    XChanged { Name: "X Changed" } = 0b_0001,
    YChanged { Name: "Y Changed" } = 0b_0010,
    ZChanged { Name: "Z Changed" } = 0b_0100,
    XZChanged { Name: "XZ Changed" } = XChanged | ZChanged,
    AllChanged = XChanged | YChanged | ZChanged,
    // AllChanged will not have 'Name' property defined.
    // You need to explicitly alias all the data.

    public string Name { get; private set; }
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