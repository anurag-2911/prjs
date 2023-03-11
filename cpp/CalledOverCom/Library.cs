using System;
using System.Runtime.InteropServices;

namespace CalledOverCom
{
    [Guid("12345678-1234-1234-1234-123456789012")]
    [ComVisible(true)]
    public interface IMyLibrary
    {
        void DoSomething();
    }

    [Guid("87654321-4321-4321-4321-210987654321")]
    [ComVisible(true)]
    public class MyLibrary : IMyLibrary
    {
        public void DoSomething()
        {
            Console.WriteLine("C# library method called!");
        }
    }

}
