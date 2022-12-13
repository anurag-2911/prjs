using Grpc.Core;

namespace ConsoleApp.controller
{
    public class Controller: RemoteService.RemoteServiceBase
    {
        public override Task<RemoteName> GetRemoteName(RemoteNameRequest request, ServerCallContext context)
        {
            RemoteResponseData remoteResponseData= new RemoteResponseData();
            return Task.FromResult(remoteResponseData.GetRemoteName(request));
        }
    }
}
