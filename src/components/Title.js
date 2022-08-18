import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { props: { headline } } = this;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
