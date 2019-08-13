import React from 'react';
import ModalImage from 'react-modal-image';

export default ({ alt, value, src = value, small = src }) => (
  <div style={{ marginTop: '1.5em' }}>
    <ModalImage small={small} large={src} alt={alt} />
  </div>
);
