using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class RemoteResponseData
    {
        public RemoteName GetRemoteName(RemoteNameRequest request) 
        {
            RemoteName remoteName= new RemoteName();
            switch (request.RemoteId)
            {
                case "1":
                    remoteName.MethodName = "start";
                    remoteName.ClassName = "class1";
                    break;
                default:
                    break;
            }
            return remoteName;

        }
    }
}
