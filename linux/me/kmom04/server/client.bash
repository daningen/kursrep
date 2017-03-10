#!/usr/local/bin/bash
echo "$EDITOR"

echo -e "$1"

echo "port is $port"

# Set server till $LINUX_SERVER om env-var är satt annars till localhost
server=${LINUX_SERVER:-localhost}
# set port till $LINUX_PORT om env-var är satt annars till 1337
port=${LINUX_PORT:-1337}
#kurlit="curl --silent http://$server:$port"
echo "port is $port"

echo "$@"

for val in "$@"
do

  if [ "$val" -eq "$val" ] 2>/dev/null; then
    sumArg=$sumArg$val"&"

    #filter?2&3
    #echo "$sumArg"
  else
    echo not a number
    echo "$val"
  fi

done
#removes the last char in the var
sumArg=${sumArg%?}
#echo $sumArg


if [ "$1" == "hello" ]
then
  curl "$server:$port"

elif [ "$1" == "html" ]
then
  #curl "localhost:"$port"/index.html"
  curlit="curl "$server:$port/index.html""
  $curlit
elif [ "$1" == "status" ]
then
  curlit="curl "$server:$port/status""
  $curlit
elif [ "$1" == "sum" ]
then
  #echo "sumArg is $sumArg
  myCom="curl "$server:$port${i}""
  #curl "http://localhost:1337/sum?2&3"

  curlit=""curl "$server:$port/sum?${sumArg}"""
  $curlit
elif [ "$1" == "filter" ]
then
  curlit=""curl "$server:$port/filter?${sumArg}"""
  $curlit
elif [ "$1" == 404 ]
then
  echo "hello there"
  curlit="curl -I "$server:$port""
  $curlit
elif [ "$1" == all ]
then
  # echo "hello there"
  # curlit="curl -I "$server:$port""
  # $curlit
  sumArg="2&3" #denna hårdkodar jag för sum och filter
  cmdArray=("/index.html" "/status" "/sum?$sumArg" "/filter?$sumArg")
  echo "####################"
  echo "printing result for no variable"
  echo "####################"
  curl "$server:$port"
  for i in "${cmdArray[@]}"
  do
     myCom="curl "$server:$port${i}""
     echo "${myCom}"
     echo "printing result for"
     echo "####################"
     echo "${i}"
     echo "####################"
     ${myCom}
  done



else
    echo "oh no"
    curlit="curl -I "$server:$port""
    $curlit
fi
exit 0

# while IFS= read -r result
# do
#   echo "Processing $result"
#     #whatever with value $result
# done < <(grep "curlit=curl" client.bash|cut -c10- )


#grep curlit=curl client.bash|cut -c10- | while read -r line ; do
#    echo "Processing $line"
#    curlit=${line}
#    ${curlit}
#done


#while read -r line ; do
#    echo "Processing "$line""
#    curlit=${line}
#    ${curlit}
#done < <(grep curlit=curl client.bash|cut -c10-)
