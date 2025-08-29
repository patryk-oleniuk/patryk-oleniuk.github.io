#!/bin/bash

# Jekyll development server script
# Updated for Ruby 3.2+ and Jekyll 4.4+

set -e

# Check if bundle is installed
if ! command -v bundle &> /dev/null; then
    echo "Bundler is not installed. Installing..."
    gem install bundler
fi

# Install dependencies if needed
if [ ! -d "vendor/bundle" ]; then
    echo "Installing Ruby dependencies..."
    bundle install
fi

if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm install
fi

# Build JavaScript assets
echo "Building JavaScript assets..."
npm run build:js

# Start Jekyll server
echo "Starting Jekyll server..."
echo "Site will be available at: http://localhost:4000"
echo "Press Ctrl+C to stop the server"

# Check if --livereload flag is provided
if [[ $* == *--livereload* ]]; then
    bundle exec jekyll serve --livereload --livereload-port 35729
else
    bundle exec jekyll serve
fi
