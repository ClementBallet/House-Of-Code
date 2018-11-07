using HOC_console.Src;
using Lib_util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HOC_console
{
    class Program
    {
        static void Main(string[] args)
        {
            Shape shape = new Shape();
            shape.Display();

            Triangle triangle = new Triangle();
            ((Shape)triangle).Display();

            Circle circle = new Circle();
            circle.Display();

            MathOps.Add(1, 2);
        }
    }
}
