using System;

namespace ConsoleAppDotNetFramework
{
    internal class Program
    {
        static void Main(string[] args)
        {            
            string runtime = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

            Console.WriteLine("runtime " + runtime);

            Console.WriteLine("Version: {0}", Environment.Version.ToString());
        }
    }
}
