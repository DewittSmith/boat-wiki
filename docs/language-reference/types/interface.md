# Interface
[[toc]]

An ```interface``` defines a contract. Any [struct](/language-reference/types/struct) or [enum](/language-reference/types/enum) that implements that contract must provide an implementation of the members defined in the interface. An interface may define a default implementation for members. It may also define static members in order to provide a single implementation for common functionality. You can't create instance fields in an ```interface``` type.

```cs
public interface IMovable
{
    public struct Vector2
    {
        public float X;
        public float Y;

        operator +(Vector2 lhs, Vector2 rhs)
        {
            return Vector2 { X: lhs.X + rhs.X, Y: lhs.Y + rhs.Y };
        }
    }

    string Name { get; }
    Vector2 Position { get; set; }

    void Move(Vector2 velocity);
}
```

You can implement ```interface``` methods by adding its name after colon (```:```).
```cs
public struct Car : IMovable
{
    private Vector2 position;

    string IMovable.Name => "Car";

    Vector2 IMovable.Position 
    { 
        get => position; 
        set => position = value;
    }

    void IMovable.Move(Vector2 velocity)
    {
        position += velocity;
    }
}
```

Interfaces can inherit other interfaces, which you can separate with comma (```,```):
```cs
public interface INamed
{
    string Name { get; }
}

public interface IPositioned
{
    Vector2 Position { get; set; }
}

public interface IEntity : INamed, IPositioned
{
}

public struct Car : IEntity
{
    string INamed.Name { get; }
    Vector2 IPositioned.Position { get; set; }
}
```

## Conversions
It is possible to convert type to implemented ```interface```, but you can convert interfaces only to base interfaces:
```cs
Car car = Car { Position: Vector2.zero };

// Implicit conversion is used when possible
IEntity entity = car;
const named = (INamed)entity;

print(named.Name);
// Output: Car
```