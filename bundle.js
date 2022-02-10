(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // getTopicStories.js
  var require_getTopicStories = __commonJS({
    "getTopicStories.js"(exports, module) {
      var getTopicStories2 = () => {
        fetch("https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test").then((response) => response.json()).then((data) => console.log(data));
      };
      module.exports = getTopicStories2;
    }
  });

  // displayStories.js
  var require_displayStories = __commonJS({
    "displayStories.js"() {
    }
  });

  // index.js
  var getTopicStories = require_getTopicStories();
  var displayStories = require_displayStories();
})();
