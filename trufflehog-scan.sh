#!/bin/bash

# Create a temporary file for exclusions
EXCLUDE_FILE=$(mktemp)

# Write exclusion paths to the temporary file
echo ".next
node_modules
build
dist" > "$EXCLUDE_FILE"

# Run TruffleHog with specific options
trufflehog git file://. \
  --exclude-paths "$EXCLUDE_FILE" \
  --only-verified \
  --fail

# Store the exit status
TRUFFLEHOG_EXIT_CODE=$?

# Remove the temporary file
rm "$EXCLUDE_FILE"

# Check the exit status
if [ $TRUFFLEHOG_EXIT_CODE -eq 0 ]; then
    echo "TruffleHog scan completed successfully."
    exit 0
else
    echo "TruffleHog scan failed. Please review the findings above."
    exit 1
fi