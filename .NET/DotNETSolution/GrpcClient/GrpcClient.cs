// See https://aka.ms/new-console-template for more information
using Grpc.Core;


try
{
	Channel channel = new Channel("127.0.0.1:50051", ChannelCredentials.Insecure);
	var client = new ZENRemoteService.ZENRemoteServiceClient(channel);
    RemoteResult result = client.RunRemoteMethod(new RemoteMethodRequest { Class = "ClassLibraryDotNet.Helper", Method = "Run", Params = "one" });
    channel.ShutdownAsync().Wait();
    Console.WriteLine("Press any key to exit...");
    Console.ReadKey();

}
catch (Exception ex)
{
	Console.WriteLine("exception in grpc client "+ ex.ToString());	
}