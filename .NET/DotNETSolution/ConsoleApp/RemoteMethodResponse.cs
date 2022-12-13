using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class RemoteMethodResponse
    {
       public RemoteResult RunRemoteMethod(RemoteMethodRequest request)
        {
            RemoteResult remoteResult = new RemoteResult();

            string methodName = request.Method;
            string className = request.Class;
            string parameter = request.Params;

            remoteResult.Result = "success";

            return remoteResult;
        }
    }
}
