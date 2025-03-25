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

# Define the base directory (where the script is located)
base_directory = os.path.dirname(os.path.abspath(__file__))

# Define search and replacement strings
search_text1 = "https://localhost:3001/experience/../"
search_text2 = "https://localhost:3001/builder/../"
replacement_text = ""

# Track how many files were updated
files_updated = 0

# Walk through all subdirectories
for root, dirs, files in os.walk(base_directory):
    if "config.json" in files:
        file_path = os.path.join(root, "config.json")
        with open(file_path, 'r') as file:
            data = file.read()

        if search_text1 in data or search_text2 in data:
            data = data.replace(search_text1, replacement_text)
            data = data.replace(search_text2, replacement_text)
            with open(file_path, 'w') as file:
                file.write(data)
            files_updated += 1
            print(f"Fixed: {file_path}")

if files_updated:
    print(f"\n✅ Fixed {files_updated} config.json file(s).")
else:
    print("\nℹ️ No config.json files needed fixing.")
