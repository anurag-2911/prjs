// See https://aka.ms/new-console-template for more information
using Grpc.Core;


try
{
	Channel channel = new Channel("127.0.0.1:50051", ChannelCredentials.Insecure);
	var client = new RemoteService.RemoteServiceClient(channel);
	RemoteName remoteName=client.GetRemoteName(new RemoteNameRequest{ RemoteId="1"});
    channel.ShutdownAsync().Wait();
    Console.WriteLine("Press any key to exit...");
    Console.ReadKey();

}
catch (Exception ex)
{
	Console.WriteLine("exception in grpc client "+ ex.ToString());	
}