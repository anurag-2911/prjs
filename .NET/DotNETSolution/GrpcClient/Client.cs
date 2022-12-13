// See https://aka.ms/new-console-template for more information
using Grpc.Core;


try
{
	Channel channel = new Channel("127.0.0.1:50051", ChannelCredentials.Insecure);
	var client = new ZENRemoteService.ZENRemoteServiceClient(channel);
    RemoteResult result = client.RunRemoteMethod(new RemoteMethodRequest { Class = "class1", Method = "method1", Params = "one" });
    channel.ShutdownAsync().Wait();
    Console.WriteLine("Press any key to exit...");
    Console.ReadKey();

}
catch (Exception ex)
{
	Console.WriteLine("exception in grpc client "+ ex.ToString());	
}