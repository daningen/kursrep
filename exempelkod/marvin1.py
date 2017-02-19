
marvin1.py
""" Assignment 2, Marvin, Jason Smith """
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import random

"""
Marvin with a simple menu to start up with.
Marvin doesnt do anything, just presents a menu with some choices.
You should add functinoality to Marvin.
"""

def MeImage():
    """
    Store my ascii image in a separat variabel as a raw string
    """
    return r"""
                                                    
       ___                                      .-~. /_"-._
      `-._~-.                                  / /_ "~o\  :Y
          \  \                                / : \~x.  ` ')
           ]  Y                              /  |  Y< ~-.__j
          /   !                        _.--~T : l  l<  /.-~
         /   /                 ____.--~ .   ` l /~\ \<|Y
        /   /             .-~~"        /| .    ',-~\ \L|
       /   /             /     .^   \ Y~Y \.^>/l_   "--'
      /   Y           .-"(  .  l__  j_j l_/ /~_.-~    .
     Y    l          /    \  )    ~~~." / `/"~ / \.__/l_
     |     \     _.-"      ~-{__     l  :  l._Z~-.___.--~
     |      ~---~           /   ~~"---\_  ' __[>
     l  .                _.^   ___     _>-y~
      \  \     .      .-~   .-~   ~>--"  /
       \  ~---"            /     ./  _.-'
        "-.,_____.,_  _.--~\     _.-~
                    ~~     (   _}       -Rawr
                           `. ~(
                             )  \
                            /,`--'~\--'~\
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    """


def Menu():
    """
    Display the menu with the options that a T-Rex can do.
    """
    print(chr(27) + "[2J" + chr(27) + "[;H")
    print(MeImage())
    print()
    print("Hi, I'm a T-Rex. I know it all. What can I do you for?")
    print("1) Present yourself to a T-Rex.")
    print("2) Learn your age in seconds.")
    print("3) Learn your weight on the moon.")
    print("4) Minutes to hours.")
    print("5) Celsius to Farenheit.")
    print("6) Repeat word X times.")
    print("7) Random Number Generator")
    print("8) Total the numbers")
    print("9) Points to Grade")
    print("q) Quit.")

def MyNameIs():
    """
    The T-Rex knows you already.
    """
    name = 'Jason'
    print("\nA T-Rex says:\n")
    print("Your name is {0} - you already know that!".format(name))

def MyAgeSeconds():
    """
    Displays my age in seconds.
    """
    age = 30
    seconds = 30 * 365 * 24 * 60 * 60
    print("\nA T-Rex says:\n")
    print("Your age is {0} - you're {1} seconds old.".format(age, seconds))

def MyWeightMoon():
    """
    Displays my weight on the moon.
    """
    weight = 75
    moonWeight = 75 * 5 / 6
    print("\nA T-Rex says:\n")
    print("""Your weight is {0} - you're weight on the moon is, {1}.""".format(weight, moonWeight))

def MinutesHours():
    """
    Takes minutes and converts to hours + minutes
    """
    minutes = int(input("Please enter the number of minutes."))

    while minutes < 60:
        minutes = input("Please enter 60 or more.")

    hours = int(minutes / 60)
    minutes = minutes % 60
    print("\nA T-Rex says:\n")
    print("Ok, that is {0} hours and {1} minutes.".format(hours, minutes))

def TempConvert():
    """
    Converts Celsius into Farenheit
    """
    celsius = float(input("Enter the temp you want to convert."))
    fahrenheit = celsius * 9 / 5 + 32
    print("\nA T-Rex says:\n")
    print("{0} celsius is {1} fahrenheit.".format(celsius, fahrenheit))

def RepeatWords():
    """
    Repeats words because he can.
    """
    repeat = int(input("Enter a positive number.  No zeroes please!"))    

    while repeat < 0:
        repeat = input("Dude, I said a positive number")

    word = input("What's a word I could repeat?")
    word = str(word)
    print("\nA T-Rex says:\n")

    for dummy_x in range(0, repeat):
        print(word)

def RandomNum():
    """
    Does some RNG.
    """
    numOne = int(input("Enter a positive, non-zero number."))

    while numOne < 1:
        numOne = int(input("A positive, non-zero number."))

    numTwo = int(input("Enter another number."))

    while numTwo < 1:
        numTwo = int(input("A positive, non-zero number."))

    print("\nA T-Rex says:\n")    
    print("Your random number is {0}".format(random.randint(numOne, numTwo)))

def SumAverage():
    """
    Does what it says on the tin.
    """
    loops = 0
    average = 0
    sumNum = int(input("Enter a number."))
    while True:
        choice = input("Enter another number, or press q to quit.")

        if choice == 'q':
            average = sumNum / loops
            print("\nA T-Rex says:\n")
            print("The sum is {0} and the average is {1}".format(sumNum, average))
            break
        elif float(choice):
            sumNum += float(choice)
            loops += 1
        else:
            print("That is not a valid choice.")

def PointGrade():
    """
    Determines a grade from a point value using a US system.
    """
    points = float(input("Enter the points you earned."))
    maxP = float(input("Enter the maximum points."))
    print("\nA T-Rex says:\n")

    if points / maxP < 0.6:
        print("Sorry, but you receive an F.")
    elif points / maxP >= 0.6 and float(points) < 70:
        print("You got a D.")
    elif points / maxP >= 0.7 and float(points) < 80:
        print("You got a C.")
    elif points / maxP >= 0.8 and float(points) < 90:
        print("You got a B, nice!")
    elif points / maxP >= 0.9:
        print("Great job, you made an A!")

def Main():
    """
    This is the main method, I call it main by convention.
    Its an eternal loop, until q is pressed. 
    It should check the choice done by the user and call a appropriate 
    function.
    """
    while True:
        Menu()
        choice = input("--> ")

        if choice == "q":
            print("Bye, bye - and welcome back anytime!")
            return
        elif choice == "1":
            MyNameIs()
        elif choice == "2":
            MyAgeSeconds()
        elif choice == "3":
            MyWeightMoon()
        elif choice == "4":
            MinutesHours()
        elif choice == "5":
            TempConvert()
        elif choice == "6":
            RepeatWords()
        elif choice == "7":
            RandomNum()
        elif choice == "8":
            SumAverage()
        elif choice == "9":
            PointGrade()
        else:
            print("That isn't a valid choice.")          
        input("\nPress enter to continue...")

if __name__ == "__main__":
    Main()
