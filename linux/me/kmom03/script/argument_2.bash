#!/usr/bin/env bash

#
# linux
# bash2
# daer16
# $# --> number of arguments
# $1..$n --> script arguments

# Om argumentet är “d” så ska “date” skrivas ut, dvs dagens datum Om argumentet är “n” ska scriptet skriva ut alla siffror från 1 till 20, tips: {1..20}. Om argumentet är “a” ska nästa argument skrivas ut, om man skickar in två argument. Om man inte skickat in två argument skall följande skrivas ut “Missing argument”.
#num_arguments="$#"

echo -e "$1"
echo -e The arguments are: "$1", "$2"   #skriver ut de två första
if [ "$1" == "d" ]
then
  date=$(date)
  echo "$date"
elif [ "$1" == "n" ]
then
  for val in {1..20}
  do
    echo "$val"
  done
elif [ "$1" == "a" ]
then
  if [ $# -gt 1 ]
  then
    echo -e "$2"
  else
    echo - e "du måste skicka in minst 2 arg"
  fi
fi
