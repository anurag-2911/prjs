#include <iostream>
#include <Windows.h>
#include <sddl.h>
#include <LM.h>

#pragma comment(lib, "Netapi32.lib")

std::wstring GetCurrentUserSidString()
{
	HANDLE token = nullptr;
	DWORD size = 0;
	TOKEN_USER* tokenUser = nullptr;
	LPWSTR stringSid = nullptr;
	std::wstring sidString;

	if (OpenProcessToken(GetCurrentProcess(), TOKEN_QUERY, &token))
	{
		GetTokenInformation(token, TokenUser, nullptr, 0, &size);
		tokenUser = (TOKEN_USER*)new BYTE[size];
		if (GetTokenInformation(token, TokenUser, tokenUser, size, &size))
		{
			if (ConvertSidToStringSidW(tokenUser->User.Sid, &stringSid))
			{
				sidString = stringSid;
				LocalFree(stringSid);
			}
		}
		delete[] tokenUser;
		CloseHandle(token);
	}
	return sidString;
}

std::wstring GetUserUPNBySid(const std::wstring& sidString)
{
	std::wstring userUPN;
	PSID sid;
	LPWSTR domainName = nullptr;
	DWORD domainNameSize = 0;
	SID_NAME_USE sidType;
	LPWSTR userName = nullptr;
	DWORD userNameSize = 0;

	if (ConvertStringSidToSidW(sidString.c_str(), &sid))
	{
		LookupAccountSidW(nullptr, sid, nullptr, &userNameSize, nullptr, &domainNameSize, &sidType);
		userName = new WCHAR[userNameSize];
		domainName = new WCHAR[domainNameSize];

		if (LookupAccountSidW(nullptr, sid, userName, &userNameSize, domainName, &domainNameSize, &sidType))
		{
			userUPN = userName;
			userUPN += L'@';
			userUPN += domainName;
		}

		delete[] userName;
		delete[] domainName;
		LocalFree(sid);
	}
	return userUPN;
}

int main()
{
	std::wstring sidString = GetCurrentUserSidString();
	std::wstring userUPN = GetUserUPNBySid(sidString);
	std::wcout << L"User Principal Name: " << userUPN << std::endl;
	system("pause");
	return 0;
}
