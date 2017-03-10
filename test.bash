#!/usr/local/bin/bash

# Set server till $LINUX_SERVER om env-var är satt annars till localhost
server=${LINUX_SERVER:-localhost}
# set port till $LINUX_PORT om env-var är satt annars till 1337
port=${LINUX_PORT:-1337}


#removes the last char in the var
#curl "http://localhost:1337"
#curlit=curl "--silent http://$server:$port"
#curlit=curl "http://${server}:${port}"
sumArg="2&3"
cmdArray=("/index.html" "/status" "/sum?$sumArg" "/filter?$sumArg")


#while read -r line ; do
#    echo "Processing"
#    echo ${line}
#    curlit=${line}
#    ${curlit}
#    echo ${curlit}
#done < <(grep  "curlit=" test.bash|cut -c8-)
echo "testa ett vanligt curl"
curl "$server":$"port"/index.html"
echo "testa ett vanligt curl"
for i in "${cmdArray[@]}"
do
   myCom="curl "$server:$port${i}"""
   echo "${myCom}"
   ${myCom}
done
#pref1='curl "'
#pref2="${server}${port$}"
#array=( "/index.html" "/status" "/sum?$sumArg" "/filter?$sumArg" )
#for i in "${array[@]}"
#do
#	myCom=""curl "$server":"$port${i}"""

#  echo "variabel is ${myCom}"
  #${myCom}
#done
