// CppConsoleApp.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#ifndef __wtypes_h__
#include <wtypes.h>
#endif

#ifndef __WINDEF_
#include <windef.h>
#endif

#ifndef _WINUSER_
#include <winuser.h>
#endif

#ifndef __RPC_H__
#include <rpc.h>
#endif


int main()
{
	std::cout << "Hello World!\n";
	LPWSTR domainName = (LPWSTR)malloc(2 * sizeof(WCHAR));
	domainName = const_cast<LPWSTR>(L"AzureAD");
	if (domainName == const_cast<LPWSTR>(L"AzureAD"))
	{
		std::cout << "matched";
	}

}

