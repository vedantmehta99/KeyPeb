'VBScript Example
Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.SendKeys "twitter.com"
WshShell.SendKeys "{ENTER}"
Wscript.Sleep 4000
WshShell.SendKeys "EMAIL"
WshShell.SendKeys "{TAB}"
WshShell.SendKeys "PASSWORD"
WshShell.SendKeys "{ENTER}"
