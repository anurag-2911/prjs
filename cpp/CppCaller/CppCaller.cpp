#include <windows.h>
#include <stdio.h>
#include "Header.h"
#include <comdef.h>


int main()
{
	CoInitialize(NULL);

	CLSID clsid;
	IID iid;
	HRESULT hr;

	hr = CLSIDFromProgID(L"CalledOverCom.ComBridge", &clsid);
	if (FAILED(hr))
	{
		printf("CLSIDFromProgID failed with error 0x%x\n", hr);
		return 1;
	}

	hr = IIDFromString(L"{225a4f70-2191-4398-8f8d-5172eee5ce1e}", &iid);
	if (FAILED(hr))
	{
		printf("IIDFromString failed with error 0x%x\n", hr);
		return 1;
	}

	CalledOverCom::IComBridge* comBridge = NULL;
	hr = CoCreateInstance(clsid, NULL, CLSCTX_INPROC_SERVER, iid, (LPVOID*)&comBridge);
	if (FAILED(hr))
	{
		_com_error err(hr);
		LPCTSTR errMsg = err.ErrorMessage();
		printf("CoCreateInstance failed with error 0x%x\n", hr);
		return 1;
	}

	comBridge->DoSomething();

	comBridge->Release();

	CoUninitialize();

	return 0;
}
