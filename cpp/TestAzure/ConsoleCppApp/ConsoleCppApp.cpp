// ConsoleCppApp.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <windows.h>
#include <string>
#define AADDomainName					TEXT("AzureAD")

int main()
{
	std::cout << "Hello World!\n";
	std::string domain = "AzureAD";
	LPWSTR lpwzDomain = const_cast<LPTSTR>(TEXT("AzureAD"));
	const wchar_t* string1 = L"AzureAD";
	int ret = wcscmp(string1, AADDomainName);
	if (ret == 0)
	{
		std::cout << "dunno ekke hai";
	}
	else {
		std::cout << "olga";
	}


}



