using Novell.Zenworks.AppModule;
using System;
using System.Runtime.InteropServices;

namespace CalledOverCom
{
    [Guid("225a4f70-2191-4398-8f8d-5172eee5ce1e")]
    [ComVisible(true)]
    public interface IComBridge
    {
        void DoSomething();
    }

    [Guid("a31aace2-4213-48ad-8f52-50150c0ff802")]
    [ComVisible(true)]

    public class ComBridge : IComBridge
    {
        AppSettings m_Settings = null;
        public ComBridge()
        {
            m_Settings = new AppSettings();
        }

        public void DoSomething()
        {

            Console.WriteLine("C# library method called!");
        }
    }

}
