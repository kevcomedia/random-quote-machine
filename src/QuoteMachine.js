import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import NewQuoteButton from './NewQuoteButton';
import TweetLink from './TweetLink';
import fetchQuote from './fetchQuote';

function QuoteMachine(props) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleQuoteFetch = () => {
    new Promise((resolve) => {
      setIsFetching(true);
      setErrorMessage('');
      resolve(fetchQuote());
    }).then(
      ({ quote, author }) => {
        setQuote(quote);
        setAuthor(author);
        setIsFetching(false);
      },
      (err) => {
        if (err.timeout) {
          setErrorMessage('Request timed out. Please try again');
        } else {
          setErrorMessage("Couldn't fetch quote. Please try again");
        }
        setIsFetching(false);
        console.error(err);
      },
    );
  };

  useEffect(handleQuoteFetch, []);

  return (
    <div className="quote-machine">
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <Quote quote={quote} author={author} />
      )}
      <NewQuoteButton disabled={isFetching} onClick={handleQuoteFetch} />
      <TweetLink quote={quote} author={author} />
    </div>
  );
}

export default QuoteMachine;
