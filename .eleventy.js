module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/js/");

    return {
      dir: {
        input: "src",
      }
    }
  };