import axios from 'axios';

export default function fetchQuote() {
  return Promise.race([
    axios
      .get(
        // timestamp parameter prevents from caching the previous quote
        `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`,
        { responseType: 'json' },
      )
      .then(({ data }) => ({
        quote: data[0].content, // content has HTML embedded in it
        author: data[0].title,
      })),
    new Promise((_, reject) => {
      setTimeout(() => reject({ timeout: true }), 10000);
    }),
  ]);
}
