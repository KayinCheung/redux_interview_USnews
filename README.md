
## US News App Features

- Built with ReactJS and Redux.
- Infinite scrolling. Load 10 more articles when scrolled to bottom of page, up to an API limit of 100.
- Informs user when reaching end of search result, on loading error, or if no news articles were found for keyword.
- If news article does not provide a image, default image is used instead.
- Upon clicking news article, open url in new tab.


## Building and running the project

- Requirements: Recent version of Node - https://nodejs.org/en/download/
- Download and unzip the repository.
- `npm install`, then `npm start` to run it locally in browser. 
- `npm run build` to build the project for deployment

## Limitations
- API key has a limit of 500 requests per day. If limit is reached, change the API key in /src/Constants.js. Getting a new key: https://newsapi.org/register