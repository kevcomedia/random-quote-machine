import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

function NewQuoteButton(props) {
  const icon = props.disabled ? (
    <Icon name="circle-notch" spin />
  ) : (
    <Icon name="quote-left" />
  );

  return (
    <button className="btn" disabled={props.disabled} onClick={props.onClick}>
      {icon} New Quote
    </button>
  );
}

NewQuoteButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

NewQuoteButton.defaultProps = {
  disabled: false,
};

export default NewQuoteButton;
