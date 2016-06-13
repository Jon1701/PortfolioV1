SET SOURCE_FOLDER=..\JavaScript
SET DEST_FOLDER=.\projects

SET PROJECT_ARRAY=(LifeIsStrangeQuoteGenerator RomanNumeralConverter TwitchViewer WeatherApp WikiViewer)

for %%i in %PROJECT_ARRAY% do robocopy %SOURCE_FOLDER%\%%i %DEST_FOLDER%\%%i /MIR /Z /R:1 /W:1