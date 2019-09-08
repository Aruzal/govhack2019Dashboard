import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonAppBar(props) {
    return (
        <Button onClick={props.onClick} variant="contained" color="primary">
            Subscribe to Notifications
        </Button>
    );
  }