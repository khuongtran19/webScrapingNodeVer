const cheerio = require("cheerio");
const axios = require("axios");

axios("http://www.surrenderat20.net/")
  .then(result => {
    const $ = cheerio.load(result.data);
    const articles = [];
    const articleWidgets = $(".date-posts").each((i, elem) => {
      const articleElement = $(elem);
      const article = {
        title: articleElement.find("h1 > a").text(),
        posted: articleElement.find("span > a").text(),
        url: articleElement.find("h1 > a").attr("href"),
        pic: articleElement.find("img").attr("src")
      };

      articles.push(article);
    });

    console.log(JSON.stringify(articles, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
