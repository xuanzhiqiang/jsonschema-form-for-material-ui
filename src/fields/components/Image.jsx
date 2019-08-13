import React from 'react';
import ModalImage from 'react-modal-image';

export default ({ alt, src, small }) => (
  <div style={{ marginTop: '1.5em' }}>
    <ModalImage small={small} large={src} alt={alt} />
  </div>
);
