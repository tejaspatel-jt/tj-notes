@ECHO OFF
SETLOCAL EnableDelayedExpansion
SET /A count=0
SET /A delayMinutes=0

:START
SET /A count+=1
msg * "Hello Tejas - PANI PI LE BHAI (Count = !count!) 30 Mins Delay"

REM Check if delayMinutes is set, if not, set it to 30 by default
IF !delayMinutes! EQU 0 (
    SET /P delayMinutes="Enter delay in minutes (default is 30): "
    IF "!delayMinutes!"=="" SET delayMinutes=30
)

REM Convert minutes to seconds for timeout
SET /A delaySeconds=delayMinutes*60

REM Open Chrome URL
start chrome --new-window "https://calendar.google.com/calendar/u/0/r"
echo Water Sipped for !count! times

REM Wait for the specified delay
timeout /t !delaySeconds!
SET delayMinutes=0  REM Reset delayMinutes for the next iteration
goto START