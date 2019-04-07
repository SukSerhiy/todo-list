import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Footer = props => {
  const { contactInfo } = props;
  return (
    <footer>
      {Object.keys(contactInfo).map((ci, key) => (
        <div className='contact-info'>
          <span className='title'>
            {`${ci}: `}
          </span>
          <span className='value'>
            {contactInfo[ci]}
          </span>
        </div>
      ))}
    </footer>
  )
}

Footer.propTypes = {
  contactInfo: PropTypes.object
}

export default Footer;