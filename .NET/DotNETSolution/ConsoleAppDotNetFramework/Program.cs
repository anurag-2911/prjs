using CommonLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppDotNetFramework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Starter.Connect();

            string runtime = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

            Console.WriteLine("runtime " + runtime);

            Console.WriteLine("Version: {0}", Environment.Version.ToString());
        }
    }
}
