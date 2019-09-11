import React from 'react';
import LinkplayDropZone from './LinkplayDropZone';
import Image from './Image';

export default ({ disabled = false, ...ret }) => {
  if (disabled) {
    const { width = 'auto', height = 'auto' } = ret;
    return (
      <div
        style={{
          marginTop: '3em',
          width,
          height,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: 'black',
          overflow: 'hidden'
        }}
      >
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
