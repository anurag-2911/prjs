// See https://aka.ms/new-console-template for more information
using CommonLibDotNETFramework;

Console.WriteLine("Hello, World!");

Utils.Hello();

string runtime = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

Console.WriteLine("runtime " + runtime);