# Tuple
[[toc]]

Tuples are used to store multiple items in a single variable. You specify types of all its data members and, optionally, the field names. You can't define methods in a tuple type.

```cs
(int, int) simple = (1, 2);
(int min, int max) range = (-1, 1);
(float pi, float tau) = (3.14, 6.28);
const auto = ("It", 'c', 4, "N", 570, 9e2, ("nested", "stuff"));
```

If you don't specify a field name, it may be inferred from the name of the corresponding variable in a tuple initialization expression, as the following example shows:
```cs
const name = "Patrick";
const age = 27;
const tuple = (name, age);
print($"{tuple.name} is {tuple.age} years old!");
// Output: Patrick is 27 years old!
```

## Tuple Equality
Tuple types support the ```==``` and ```!=``` operators. These operators compare members of the left-hand operand with the corresponding members of the right-hand operand following the order of tuple elements. The ```==``` and ```!=``` operations don't take into account tuple field names.

Two tuples are comparable when both of the following conditions are satisfied:
* Both tuples have the same number of elements. For example, t1 != t2 doesn't compile if t1 and t2 have different numbers of elements.
* For each tuple position, the corresponding elements from the left-hand and right-hand tuple operands are comparable with the ```==``` and ```!=``` operators.

## Deconstruction
You can deconstruct types that implement [IDeconstructible](/) to tuples. It is possible to deconstruct up to 4 elements.

```cs
public struct Point : IDeconstructible<int, int>
{
    public int X;
    public int Y;

    void IDeconstructible<int, int>.Deconstruct(out int x, out int y)
    {
        x = X;
        y = Y;
    }
}

const p = Point { X: 5, Y: 3 };

const (x0, y0) = p;
const (x1, y1) = Point { X: 1, Y: 10};

print($"{x0} {y0} {x1} {y1}");
// Output: 5 3 1 10
```