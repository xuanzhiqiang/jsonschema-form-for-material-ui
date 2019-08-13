import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default ({ linktext, value = '' }) => (
  <div style={{ marginTop: '1.5em' }}>
    <Typography variant="h6" gutterBottom>
      <Link href={value} target="_blank">
        {linktext}
      </Link>
    </Typography>
  </div>
);
