#!/usr/bin/env bash

#
# linux
# bash2
# daer16
# $# --> number of arguments
# $1..$n --> script arguments

# Skapa ett script myFunction.bash som innehåller en funktion, greet(). Kalla på funktionen som ska skriva ut “Hello $USER”.

function greet() {
  echo -e "Hello $USER"
}

echo -e "calling the function"
greet
