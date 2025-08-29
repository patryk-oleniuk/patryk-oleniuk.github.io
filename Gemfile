source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# Use the latest Jekyll version
gem "jekyll", "~> 4.4.0"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-archives", "~> 2.2"
  gem "jekyll-include-cache", "~> 0.2"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-gist", "~> 1.5"
  gem "jekyll-avatar", "~> 0.8"
  gem "jekyll-remote-theme", "~> 0.4"
  gem "jekyll-relative-links", "~> 0.6"
  gem "jekyll-optional-front-matter", "~> 0.3"
  gem "jekyll-readme-index", "~> 0.3"
  gem "jekyll-default-layout", "~> 0.1"
  gem "jekyll-titles-from-headings", "~> 0.5"
  gem "jekyll-redirect-from", "~> 0.16"
  gem "jekyll-mentions", "~> 1.6"
  gem "jekyll-coffeescript", "~> 1.2"
  gem "jekyll-github-metadata", "~> 2.16"
  gem "jemoji", "~> 0.13"
end

# Development dependencies
group :development do
  gem "webrick", "~> 1.8"
end
