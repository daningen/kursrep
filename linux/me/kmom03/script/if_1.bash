#!/usr/bin/env bash

#
# linux
# bash2
# daer16

# Skapa ett skript if_1.bash som hanterar ett argument, en siffra, som kollar om argumentet är större än 5 med hjälp av en if-sats. Ex: ./if_1.bash 7 ska returnera “7 is greater than 5” och ./if_1.bash 3 ska returnera “3 is NOT greater than 5”.

echo -e "$1"
if [ "$1" -gt 5 ]
then
  echo -e "$1 is greater than 5"
else
  echo -e "$1 is not greater than 5"
fi

#echo -e "$STR\n"
#echo -e 'Hello\nworld'
#echo Hello$'\n'world
