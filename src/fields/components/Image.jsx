import React from 'react';
import ModalImage from 'react-modal-image';

export default ({ alt, src }) => (
  <div style={{ marginTop: '1.5em' }}>
    {/* <img src={src} alt={alt} height={height} width={width} /> */}
    <ModalImage small={src} large={src} alt={alt} />
  </div>
);
