
call  vue-cli-service build
rd /s/q "D:\object\rencaiwang\resources\rencaiwang_admin\dist\templateadmin.zip"
c:
set PATH=%PATH%;C:\Program Files\WinRAR\;
d:
cd D:\object\rencaiwang\resources\rencaiwang_admin\dist
WinRAR.exe a -r .\templateadmin.zip .\*
c:
cd C:\Program Files (x86)\WinSCP
winscp.exe /console /command "option batch continue" "option confirm off" "open sftp://root:dx3229010-123@47.115.62.204:22" "option transfer binary"  "cd /usr/site/rencaiwang/public/templateadmin/" "call rm -rf /usr/site/rencaiwang/public/templateadmin/*"  "put D:\object\rencaiwang\resources\rencaiwang_admin\dist\templateadmin.zip /usr/site/rencaiwang/public/templateadmin/" "call unzip templateadmin.zip" "exit"  /log=D:\object\log.txt
