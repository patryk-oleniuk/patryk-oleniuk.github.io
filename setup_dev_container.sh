#!/bin/bash

# Dev container setup script
# This script handles the initial setup for the Jekyll development environment

set -e

echo "🚀 Setting up Jekyll development environment..."

# Install bundler if not present
if ! command -v bundle &> /dev/null; then
    echo "📦 Installing Bundler..."
    gem install bundler
fi

# Clean up any existing bundle to avoid conflicts
if [ -d "vendor/bundle" ]; then
    echo "🧹 Cleaning up existing bundle..."
    rm -rf vendor/bundle
fi

if [ -f "Gemfile.lock" ]; then
    echo "🧹 Removing old Gemfile.lock..."
    rm -f Gemfile.lock
fi

# Install Ruby dependencies
echo "📦 Installing Ruby dependencies..."
bundle install

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Build JavaScript assets
echo "🔨 Building JavaScript assets..."
npm run build:js

echo "✅ Setup complete!"
echo ""
echo "🌐 To start the development server, run:"
echo "   ./run_jekyll.sh"
echo ""
echo "📖 The site will be available at: http://localhost:4000"
echo "🔄 For live reload, run: ./run_jekyll.sh --livereload"
echo ""
echo "💡 Tip: You can also start the server manually with:"
echo "   bundle exec jekyll serve --host 0.0.0.0"
