using System.Reflection;

namespace ConsoleApp
{
    public class RemoteMethodResponse
    {
       public RemoteResult RunRemoteMethod(RemoteMethodRequest request)
        {
            RemoteResult remoteResult = new RemoteResult();
            

            string methodName = request.MethodName;
            string className = request.NamespaceQualifiedClassName;
            string parameter = request.Parameters;
            string assemblyName = request.AssemblyName;
            string? result = string.Empty;


            try
            {
                string typeNamewithAssembly = string.Format("{0},{1}", className, assemblyName);
                Type? type = Type.GetType("ClassLibraryDotNet.Helper, ClassLibraryDotNet");

                if (type != null) 
                { 
                    MethodInfo? m = null;
                    
                    m = type.GetMethod(
                            methodName,
                            BindingFlags.Public | BindingFlags.Static | BindingFlags.InvokeMethod);
                    if (m != null)
                    {
                        result = (string)m.Invoke(null, null);
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            remoteResult.Result = "sucess";// result;

            return remoteResult;
        }
    }
}
