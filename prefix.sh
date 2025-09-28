#!/bin/bash

# Current directory
DIR="$(pwd)"

# Backup folder (optional)
mkdir -p "$DIR/backup"
cp "$DIR"/*.html "$DIR/backup/" 2>/dev/null

# Loop through HTML files in current directory
for file in "$DIR"/*.html; do
    [ -e "$file" ] || continue  # skip if no HTML files
    # Prepend DLiteSoftware/ to relative src and href
    sed -i.bak -E 's/(src|href)=["'"'"']([^"'"'"']+)/\1="DLiteSoftware\/\2/g' "$file"
    rm "${file}.bak"
done

echo "All HTML files in $DIR updated!"
