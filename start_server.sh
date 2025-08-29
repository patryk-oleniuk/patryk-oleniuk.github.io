#!/bin/bash

# Start Jekyll server script for dev containers
# This script starts the Jekyll server with proper host binding

set -e

# Check if bundle is available
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler is not installed. Please run './setup_dev_container.sh' first."
    exit 1
fi

# Check if Jekyll is available
if ! bundle exec jekyll --version &> /dev/null; then
    echo "❌ Jekyll is not available. Please run './setup_dev_container.sh' first."
    exit 1
fi

# Check if the server is already running
if pgrep -f "jekyll serve" > /dev/null; then
    echo "⚠️  Jekyll server is already running!"
    echo "🌐 Site should be available at: http://localhost:4000"
    exit 0
fi

# Start the server in background
echo "🚀 Starting Jekyll development server..."
echo "📖 Server will be available at: http://localhost:4000"

# Start Jekyll with proper host binding for dev containers
# Use nohup to keep it running in background
nohup bundle exec jekyll serve --host 0.0.0.0 --port 4000 > /tmp/jekyll.log 2>&1 &

# Wait a moment for the server to start
sleep 3

# Check if server started successfully
if curl -s -o /dev/null -w "%{http_code}" http://localhost:4000 | grep -q "200"; then
    echo "✅ Jekyll server started successfully!"
    echo "🌐 Site is available at: http://localhost:4000"
else
    echo "❌ Failed to start Jekyll server. Check /tmp/jekyll.log for details."
    exit 1
fi
