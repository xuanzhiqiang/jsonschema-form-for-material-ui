import React from 'react';
import LinkplayDropZone from './LinkplayDropZone';
import Image from './Image';

export default ({ disabled = false, ...ret }) => {
  if (disabled) {
    const { width = 'auto', height = 'auto', ...rett } = ret;
    return (
      <div
        style={{
          marginTop: '3em',
          width,
          height,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: 'black'
        }}
      >
        <Image {...rett} />
      </div>
    );
  }
  return (
    <div style={{ marginTop: '3em' }}>
      <LinkplayDropZone disabled={disabled} {...ret} />
    </div>
  );
};
