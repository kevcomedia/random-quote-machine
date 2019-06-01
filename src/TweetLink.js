import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

function TweetLink(props) {
  let tweetParam = stripHTML(props.quote);
  if (props.author) {
    tweetParam += ` — ${props.author}`;
  }

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetParam,
  )}`;
  return (
    <a
      className="btn"
      href={tweetURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tweet this quote"
    >
      <Icon name="twitter" type="brand" />
    </a>
  );
}

TweetLink.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

function stripHTML(htmlString) {
  const el = document.createElement('div');
  el.innerHTML = htmlString.trim();
  return el.textContent;
}

export default TweetLink;
