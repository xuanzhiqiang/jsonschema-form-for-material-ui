import React from 'react';

export default ({ alt, src, height, width = '100%' }) => (
  <img src={src} alt={alt} height={height} width={width} />
);
