'VBScript Example
Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.Run "chrome.exe"
WshShell.AppActivate "chrome"
Wscript.Sleep 1600

WshShell.SendKeys "facebook.com"
WshShell.SendKeys "{ENTER}"
Wscript.Sleep 4000
WshShell.SendKeys “facebookUsername”
WshShell.SendKeys "{TAB}"
WshShell.SendKeys “facebookPassword”
WshShell.SendKeys "{ENTER}"
