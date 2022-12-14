using GrpcClientLibNetFramework;
using System;

namespace GrpcClientDotNetFramework
{
    internal class GrpcDotNetFrameworkClient
    {
        static void Main(string[] args)
        {
            string className = (new GrpcDotNetFrameworkClient()).GetType().FullName;
            GrpcClient.Start("ClassLibraryDotNet.Helper", "Run",string.Empty);
           
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
