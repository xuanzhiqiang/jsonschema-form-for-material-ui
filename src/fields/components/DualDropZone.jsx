import React from 'react';
import LinkplayDropZone from './LinkplayDropZone';
import Image from './Image';

export default ({ disabled = false, ...ret }) => {
  if (disabled) {
    return (
      <div style={{ marginTop: '3em' }}>
        <Image {...ret} />
      </div>
    );
  }
  return (
    <div style={{ marginTop: '3em' }}>
      <LinkplayDropZone disabled={disabled} {...ret} />
    </div>
  );
};
