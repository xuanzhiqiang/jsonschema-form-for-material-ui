import React from 'react';

export default ({ alt, src, height, width = '100%' }) => (
  <dev>
    <img src={src} alt={alt} height={height} width={width} />
  </dev>
);
