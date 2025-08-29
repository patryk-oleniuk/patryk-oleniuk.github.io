# Personal Page

This is a personal website built with Jekyll using the Minimal Mistakes theme (v4.27.3).

## Development Options

### Option 1: VS Code Dev Container (Recommended)

The easiest way to get started is using VS Code's Dev Container feature:

1. **Prerequisites:**
   - Install [VS Code](https://code.visualstudio.com/)
   - Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. **Setup:**
   - Open the project in VS Code
   - When prompted, click "Reopen in Container" or use `Ctrl+Shift+P` → "Dev Containers: Reopen in Container"
   - The container will automatically install all dependencies and start the development server

3. **Running the site:**
   - The site will be automatically available at `http://localhost:4000`
   - Changes will automatically trigger rebuilds
   - The server runs in the background and restarts automatically when the container starts

### Option 2: Local Development

If you prefer to run locally without containers:

#### Prerequisites

1. **Install Ruby 3.2+** (recommended: use rbenv or rvm for version management)
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

2. **Install Node.js 18+** (if not already installed)
   ```bash
   brew install node
   ```

3. **Install Bundler**
   ```bash
   gem install bundler
   ```

#### Setup and Run

1. Clone the repository and make updates as needed
2. Install Ruby dependencies:
   ```bash
   bundle install
   ```
3. Install Node.js dependencies (for asset optimization):
   ```bash
   npm install
   ```
4. Run the local server using the provided script:
   ```bash
   ./run_jekyll.sh
   ```
   Or manually with:
   ```bash
   bundle exec jekyll serve
   ```
   
   The site will be available at `http://localhost:4000`

### Troubleshooting

- **Permission errors**: Make sure you're using a Ruby version manager (rbenv/rvm) instead of system Ruby
- **Version conflicts**: Delete `Gemfile.lock` and run `bundle install` again
- **Port already in use**: Change the port with `bundle exec jekyll serve --port 4001`
- **Live reload issues**: Use `./run_jekyll.sh --livereload` for automatic browser refresh
- **Dev container issues**: If the dev container fails to start, run `./setup_dev_container.sh` manually
- **Dependency conflicts**: The site has been updated to use Jekyll 4.x compatible plugins. If you encounter plugin conflicts, ensure you're using the latest version of the repository

### Development Features

- **Live reload**: Automatically refreshes browser when files change
- **Asset optimization**: JavaScript files are minified for production
- **Hot reload**: CSS and JavaScript changes are reflected immediately
- **Container support**: Full development environment in VS Code containers

### Configuration

- Check `_config.yml` for site configuration options
- Modify `_data/` files for site content
- Update `_pages/` for custom pages
- Edit `_sass/` for custom styling

### Deployment

This site is configured for GitHub Pages deployment. Simply push to the main branch and GitHub Actions will build and deploy the site automatically.

### Note for macOS Users

The new setup uses modern Ruby and Jekyll versions, eliminating the need for vendor bundles. The `run_jekyll.sh` script handles all the setup automatically.
