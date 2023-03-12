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

	hr = CLSIDFromProgID(L"CalledOverCom.MyLibrary", &clsid);
	if (FAILED(hr))
	{
		printf("CLSIDFromProgID failed with error 0x%x\n", hr);
		return 1;
	}

	hr = IIDFromString(L"{12345678-1234-1234-1234-123456789012}", &iid);
	if (FAILED(hr))
	{
		printf("IIDFromString failed with error 0x%x\n", hr);
		return 1;
	}

	CalledOverCom::IMyLibrary* pMyLibrary = NULL;
	hr = CoCreateInstance(clsid, NULL, CLSCTX_INPROC_SERVER, iid, (LPVOID*)&pMyLibrary);
	if (FAILED(hr))
	{
		_com_error err(hr);
		LPCTSTR errMsg = err.ErrorMessage();
		printf("CoCreateInstance failed with error 0x%x\n", hr);
		return 1;
	}

	pMyLibrary->DoSomething();

	pMyLibrary->Release();

	CoUninitialize();

	return 0;
}
