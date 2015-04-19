'VBScript Example
Set WshShell = WScript.CreateObject("WScript.Shell")

WshShell.Run "chrome.exe"
WshShell.AppActivate "chrome"
Wscript.Sleep 1600

WshShell.SendKeys "twitter.com"
WshShell.SendKeys "{ENTER}"
Wscript.Sleep 4000
WshShell.SendKeys “twitterHandle”
WshShell.SendKeys "{TAB}"
WshShell.SendKeys “twitterPassword”
WshShell.SendKeys "{ENTER}"
