import React from 'react';
import ModalImage from 'react-modal-image';

export default ({
  alt,
  value,
  src = value,
  small = src,
  width = 'auto',
  height = 'auto'
}) => (
  <div
    style={{
      marginTop: '1.5em',
      width,
      height,
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: 'black',
      overflow: 'hidden'
    }}
  >
    <ModalImage small={small} large={src} alt={alt} />
  </div>
);
