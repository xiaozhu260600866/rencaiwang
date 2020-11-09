
call  vue-cli-service build
rd /s/q "D:\object\appMarket\resources\appMarket_admin\dist\templateadmin.zip"
c:
set PATH=%PATH%;C:\Program Files\WinRAR\;
d:
cd D:\object\appMarket\resources\appMarket_admin\dist
WinRAR.exe a -r .\templateadmin.zip .\*
c:
cd C:\Program Files (x86)\WinSCP
winscp.exe /console /command "option batch continue" "option confirm off" "open sftp://root:dx3229010-123@47.115.62.204:22" "option transfer binary"  "cd /usr/site/appMarket/public/templateadmin/" "call rm -rf /usr/site/appMarket/public/templateadmin/*"  "put D:\object\appMarket\resources\appMarket_admin\dist\templateadmin.zip /usr/site/appMarket/public/templateadmin/" "call unzip templateadmin.zip" "exit"  /log=D:\object\log.txt
