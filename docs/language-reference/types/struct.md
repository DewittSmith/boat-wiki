# Structure
[[toc]]

A structure type is a value type that can encapsulate data and related functionality. You can create a structure by using the ```struct``` keyword and declare each of its [members](/) inside curly braces:

```cs
public struct Point
{
    public double X;
    public double Y;

    public Point Invert()
    {
        return Point { X: -X, Y: -Y }
    }
}
```

To use a ```struct``` after we’ve defined it, we create an instance of that struct by specifying concrete values for each of the fields. We create an instance by stating the name of the struct and then add curly brackets containing <i>key: value</i> pairs, where the keys are the names of the fields and the values are the data we want to store in those fields. We don’t have to specify the fields in the same order in which we declared them in the struct. In other words, the struct definition is like a general template for the type, and instances fill in that template with particular data to create values of the type:

```rust
const point = Point { Y: 0.5, X: 1.1 };

print(point.X);
// Output: 1.1
```

The preceding example also shows how to access a specific struct member by using dot (```.```) notation.

There are no constructors in ```BoatLang```, but you can create factory methods instead:
```cs
public struct Point
{
    public double X;
    public double Y;

    public static Point New(double x, double y)
    {
        return Point {X: x, Y: y};
    }
}
```

Because the parameter names and the struct field names are exactly the same, we can use the field init shorthand syntax:
```cs
public struct Point
{
    private double x;
    private double y;

    public double X => x;
    public double Y => y;

    public static Point(double x, double y)
    {
        return Point { x, y };
    }
}
```