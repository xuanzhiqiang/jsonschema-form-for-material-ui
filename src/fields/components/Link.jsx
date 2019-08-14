import React from 'react';
import Link from '@material-ui/core/Link';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

export default ({ disabled = false, value = '', ...ret }) => {
  if (disabled) {
    const url = value.length === 0 ? 'None' : value;
    return (
      <div style={{ marginTop: '3em' }}>
        <Typography variant="body1" gutterBottom>
          <Link href={url} target="_blank">
            {url}
          </Link>
        </Typography>
      </div>
    );
  }
  return <Input disabled={disabled} value={value} {...ret} />;
};
