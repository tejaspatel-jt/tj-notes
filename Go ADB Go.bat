@echo off
setlocal enabledelayedexpansion

rem Kill the Existing adb server as You already come here for Pairing Darling
echo Killing all the running ADB servers.......
adb kill-server

rem Set your IP address, pairing_port and wifi_pairing_code here
set wifi_pairing_code=776843
set ipAddress=192.168.0.138
set pairing_port=41879

rem Attempt to pair with the device
echo GO ADB GO
echo 
echo PERFORMING = adb pair %ipAddress%:%pairing_port% %wifi_pairing_code%
adb pair %ipAddress%:%pairing_port% %wifi_pairing_code%

if %errorlevel%==0 (
    echo Pairing successful!
) else (
    echo Pairing failed or already paired! Error code: %errorlevel%
)

:connectLoop
rem Prompt for the port number
set /p portNumber="Enter the port number: "
set target=%ipAddress%:%portNumber%

echo Connecting to %target%...
@REM adb connect %target%
adb connect %target% > temp_output.txt 2>&1

rem Check if "bad port number" is in the output
findstr /C:"bad port number" temp_output.txt >nul
if %errorlevel%==0 (
    echo  OMG.... Connection failed: Bad port number detected.
    goto connectLoop  rem Retry connecting if there was an error
)

rem Delete the temporary output file before exiting
del temp_output.txt

echo L A U N C H I N G Tejas App........................
cd C:\Projects\PROJECT_FOLDER && npm run reconnect

echo Reversing port to connect Existing Process - STOPPED
@REM adb reverse tcp:8081 tcp:8081 > temp_output.txt 2>&1

rem Show output of above command
echo %errorlevel% 


rem Display output of adb reverse
@REM //type temp_output.txt

rem THIS WILL PAUSE BEFORE EXITING UNTIL WE PRESS ANY KEY - not used
@REM pause

rem Wait for 3 seconds before exiting
timeout /t 5 /nobreak >nul

rem Exit the script
exit /b