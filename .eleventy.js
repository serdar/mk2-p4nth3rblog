const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const embedYouTube = require("eleventy-plugin-youtube-embed");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(embedTwitter, {
    theme: "dark",
    align: "center",
    doNotTrack: "true",
  });
  eleventyConfig.addPlugin(embedYouTube, {
    lite: true,
  });

  return {
    dir: {
      data: "_data",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
