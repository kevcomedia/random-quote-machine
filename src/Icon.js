import React from 'react';
import PropTypes from 'prop-types';

const iconTypes = {
  solid: 'fas',
  brand: 'fab',
}

function Icon(props) {
  let classes = `${iconTypes[props.type]} fa-fw fa-${props.name}`;
  if (props.spin) {
    classes += ' fa-spin';
  }
  return <span className={classes} aria-hidden="true" />;
}

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  type: 'solid',
  spin: false,
}

export default Icon;
