using Grpc.Core;
using System;

namespace GrpcClientLibNetFramework
{
    public class GrpcClient
    {
        public static void Start(string className, string methodName,string parameters)
        {
            Channel channel = new Channel("127.0.0.1:50051", ChannelCredentials.Insecure);
            var client = new ZENRemoteService.ZENRemoteServiceClient(channel);
            RemoteResult result = client.RunRemoteMethod(new RemoteMethodRequest { Class = className, Method = methodName, Params = parameters });
            channel.ShutdownAsync().Wait();
           
        }
    }
}
