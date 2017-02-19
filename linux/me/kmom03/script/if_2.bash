#!/usr/bin/env bash

#
# linux
# bash2
# daer16

# Skapa ett skript if_2.bash som hanterar ett argument, en siffra, och skriver ut “Higher!” om argumentet är högre än 5, “Lower!” om det är lägre och “Same!” om det är samma.

echo -e "$1"
if [ "$1" -gt 5 ]
then
  echo -e "Higher"
elif [ "$1" -eq 5 ]
then
  echo -e "Same"
else
  echo -e "Lower"
fi

#echo -e "$STR\n"
#echo -e 'Hello\nworld'
#echo Hello$'\n'world
