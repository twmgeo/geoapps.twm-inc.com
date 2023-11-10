#
# Fix a Stupid Fucking ESRI bug in Experience Builder Exports
#
# Basically a bunch of widget icons get absolute links in the exports which are trying to pull images from localhost:3001
# This must be fixed by making them relative links in the config.json file
# 
# Place this script in the main exported directory and run it to fix those links.
#  ** This directory is something like cdn/1 - wherever the config.json file is **
#
# fESRI
#

import os

# Get the directory of the script
script_directory = os.path.dirname(os.path.abspath(__file__))

# Change the current working directory to the script's directory
os.chdir(script_directory)

fileToFix = "config.json"

search_text1 = "https://localhost:3001/experience/../"
search_text2 = "https://localhost:3001/builder/../"

replacement_text = ""

text_replaced = False  # Variable to track if text is replaced

# Opening text file in read mode
with open(fileToFix, 'r') as file:
    data = file.read()
    if search_text1 in data or search_text2 in data:
        text_replaced = True
        data = data.replace(search_text1, replacement_text)
        data = data.replace(search_text2, replacement_text)

# Opening text file in write mode
with open(fileToFix, 'w') as file:
    file.write(data)

if text_replaced:
    print("Text replaced")
else:
    print("No text replaced")