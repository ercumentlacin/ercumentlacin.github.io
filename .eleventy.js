const fs = require('fs');
const NOT_FOUND_PATH = '_site/404.html';
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const now = String(Date.now());

function notFoundPageConfig(eleventyConfig) {
  return eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(
              `Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`
            );
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });
}

module.exports = function (eleventyConfig) {
  const addPassthroughCopyDirectories = [
    'src/style.css',
    'src/assets',
    { './_tmp/style.css': './style.css' },
  ];
  const addWatchTargetDirectories = [
    './styles/tailwind.config.js',
    './styles/tailwind.css',
    './styles/font-awesome.min.css',
  ];

  eleventyConfig.addPlugin(syntaxHighlight);

  addPassthroughCopyDirectories.forEach((directory) => {
    eleventyConfig.addPassthroughCopy(directory);
  });

  addWatchTargetDirectories.forEach((directory) => {
    eleventyConfig.addWatchTarget(directory);
  });

  eleventyConfig.addShortcode('version', function () {
    return now;
  });

  eleventyConfig.addNunjucksFilter('timeFormat', function (date) {
    date = date || this?.ctx?.date;
    if (date) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return '';
  });

  notFoundPageConfig(eleventyConfig);

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
