#!/bin/bash
# Video conversion script - requires ffmpeg
# Install ffmpeg: brew install ffmpeg

INPUT="src/assets/grok-search-demo.mov"
OUTPUT="src/assets/grok-search-demo.mp4"

if command -v ffmpeg &> /dev/null; then
    echo "Converting $INPUT to $OUTPUT..."
    ffmpeg -i "$INPUT" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "$OUTPUT"
    echo "Conversion complete! Update Projects.tsx to use .mp4 instead of .mov"
else
    echo "ffmpeg not found. Install with: brew install ffmpeg"
    echo "Or use an online converter like: https://cloudconvert.com/mov-to-mp4"
fi
