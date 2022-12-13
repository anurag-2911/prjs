using Grpc.Core;

namespace ConsoleApp.controller
{
    public class RemoteMethodImpl: ZENRemoteService.ZENRemoteServiceBase
    {
        public override Task<RemoteResult> RunRemoteMethod(RemoteMethodRequest request, ServerCallContext context)
        {
            RemoteMethodResponse remoteMethodResponse = new RemoteMethodResponse();
            return Task.FromResult(remoteMethodResponse.RunRemoteMethod(request)); 
           
        }
    }
}
