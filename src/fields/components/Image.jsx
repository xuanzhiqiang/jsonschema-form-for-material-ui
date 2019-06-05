import React from 'react';

export default ({ alt, src, height = 'auto', width = '100%' }) => (
  <div>
    <img src={src} alt={alt} height={height} width={width} />
  </div>
);
