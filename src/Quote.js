import React from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

function Quote(props) {
  return (
    <blockquote className="quote">
      <div
        className="quote__content"
        dangerouslySetInnerHTML={{ __html: props.quote }}
      />
      <p className="quote__author">{props.author}</p>
    </blockquote>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
