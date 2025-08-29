# Personal Page

## To run locally (not on GitHub Pages, to serve on your own computer)

### Prerequisites

1. **Install Ruby** (recommended: use rbenv or rvm for version management)
   ```bash
   # Using Homebrew and rbenv (recommended)
   brew install rbenv ruby-build
   rbenv install 3.2.2
   rbenv global 3.2.2
   
   # Or using rvm
   \curl -sSL https://get.rvm.io | bash -s stable
   rvm install 3.2.2
   rvm use 3.2.2 --default
   ```

2. **Install Node.js** (if not already installed)
   ```bash
   brew install node
   ```

3. **Install Bundler**
   ```bash
   gem install bundler
   ```

### Setup and Run

1. Clone the repository and make updates as needed
2. Install Ruby dependencies:
   ```bash
   bundle install
   ```
3. Install Node.js dependencies (optional, for asset optimization):
   ```bash
   npm install
   ```
4. Run the local server using the provided script:
   ```bash
   ./run_jekyll.sh
   ```
   Or manually with:
   ```bash
   GEM_HOME=./vendor/bundle/ruby/2.6.0 GEM_PATH=./vendor/bundle/ruby/2.6.0 ./vendor/bundle/ruby/2.6.0/bin/jekyll serve
   ```
   
   The site will be available at `http://localhost:4000`

### Troubleshooting

- If you get permission errors, the vendor bundle approach should resolve this
- If you get version conflicts, delete `Gemfile.lock` and run `bundle install` again
- For live reload issues, ensure you're using the correct Jekyll command

### Development

- The local server will automatically rebuild and refresh pages on changes
- Use `./run_jekyll.sh --livereload` for automatic browser refresh
- Check `_config.yml` for site configuration options

### Note for macOS Users

This setup uses a vendor bundle approach to avoid system Ruby permission issues on macOS. The `run_jekyll.sh` script handles the environment setup automatically.
