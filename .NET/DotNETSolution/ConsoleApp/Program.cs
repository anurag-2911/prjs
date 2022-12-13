// See https://aka.ms/new-console-template for more information
using CommonLibDotNETFramework;
using ConsoleApp.controller;
using Grpc.Core;

Console.WriteLine("Hello, World!");

Utils.Hello();

string runtime = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

Console.WriteLine("runtime " + runtime);

Console.WriteLine("Version: {0}", Environment.Version.ToString());

const int port = 50051;
try
{
	Server server = new Server
	{
		Services =
		{
			RemoteService.BindService(new Controller())
		},
		Ports =
		{
			new ServerPort("localhost", port, ServerCredentials.Insecure)
		}


	};
	server.Start();

    Console.WriteLine("Accounts server listening on port " + port);
    Console.WriteLine("Press any key to stop the server...");
    Console.ReadKey();
    server.ShutdownAsync().Wait();
}
catch (Exception ex)
{
	Console.WriteLine($"Exception encountered: {ex}");
}