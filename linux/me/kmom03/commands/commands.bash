#!/usr/bin/env bash

#
# linux
# bash2
# daer16
# $# --> number of arguments
# $1..$n --> script arguments

# Name of the script
SCRIPT=$( basename "$0" )

# Current version
VERSION="1.0.0"

# Om argumentet är “d” så ska “date” skrivas ut, dvs dagens datum Om argumentet är “n” ska scriptet skriva ut alla siffror från 1 till 20, tips: {1..20}. Om argumentet är “a” ska nästa argument skrivas ut, om man skickar in två argument. Om man inte skickat in två argument skall följande skrivas ut “Missing argument”.
#num_arguments="$#"

#!/usr/bin/env bash

#
# linux
# bash2
# daer16
# $# --> number of arguments
# $1..$n --> script arguments

# Name of the script
SCRIPT=$( basename "$0" )

# Current version
VERSION="1.0.0"

# Om argumentet är “d” så ska “date” skrivas ut, dvs dagens datum Om argumentet är “n” ska scriptet skriva ut alla siffror från 1 till 20, tips: {1..20}. Om argumentet är “a” ska nästa argument skrivas ut, om man skickar in två argument. Om man inte skickat in två argument skall följande skrivas ut “Missing argument”.
#num_arguments="$#"

function usage
{
    local txt=(
"Utility $SCRIPT for doing stuff."
"Usage: $SCRIPT [options] <command> [arguments]"
""
"Command:"
"  reverse  [words]          Returns the word in reverse order"
"  factors  [numbers]        Returns the factor of the numbers"
""
"Options:"
"  --help, -h     Print help."
"  --version, -h  Print version."
    )

    printf "%s\n" "${txt[@]}"
}

function version
{

    local txt=(
"$SCRIPT version $VERSION"
    )

    printf "%s\n" "${txt[@]}"
}

function app-reverse
{
    #echo -e "This is output from reverse"
    #echo -e "Hello $USER"
    #local message="$1"
    #echo -e $1|rev
    echo -e "$*"|rev
}

function app-factors
{
    #$a=factor 6
    #num=$1
    #echo $1:
    echo " Number of arguments = '$#'"
    echo " List of arguments = '$*'"
    echo "$@"

    for var in "$@"
    do
      num=$var
      #echo "$var"
      #echo "num "$num
      for (( i=2; i<="$var"; i++ ));do
        while [ $((num%"$i")) == 0 ];do
          #echo hoho $i
          result+="$i"
          result+=" "
          #echo "the result in the loop $result"
          num=$((num/i))
          #num=$((num/$i))
        done
      done
      echo "$var: $result"
      result=""
      i=""
    done

}


#
# Process options
#
while (( $# ))
do
    case "$1" in

        --help | -h)
            usage
            exit 0
        ;;

        --version | -v)
            version
            exit 0
        ;;

        reverse         \
        | factors )
        command="$1"
            shift
            #app-$command $*
            app-"$command" "$@"
            exit 0
        ;;

        *)
            badUsage "Option/command not recognized."
            exit 1
        ;;

    esac
done





#if [ $? != 0 ] ; then echo "Failed parsing options." >&2 ; exit 1 ; fi

# echo "$OPTS"
# eval set -- "$OPTS"
#
#
# while true; do
#   case "$1" in
#     -v | --version ) echo -e "the version";;
#     -h | --help )    usage;;
#     * ) break ;;
#   esac
# done


#
# Message to display for usage and help.
#


# if  [[ $1 == "-h" ]]; then
#     echo "Option -h turned on"
# else
#     echo "You did n't use option -h"
# fi





if [ "$#" -lt 1 ]
then
  usage
else echo -e "hoppla"
fi

# if  [[ $1 == "-h" ]]; then
#     echo "Option -h turned on"
# else
#     echo "You did n't use option -h"
# fi
