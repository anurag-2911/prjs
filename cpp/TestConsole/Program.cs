using System;
using System.IO;

namespace TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            string runtimedir = System.Runtime.InteropServices.RuntimeEnvironment.GetRuntimeDirectory();
            Console.WriteLine(runtimedir);
            string path = System.IO.Path.GetTempPath() + "\\Nallog.txt";
            File.AppendAllLines(path, new[] { "The very first line!" });
            Console.ReadKey();
        }
    }
}
