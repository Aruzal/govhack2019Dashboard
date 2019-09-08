import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Snackbar from '@material-ui/core/Snackbar'


import Navbar from './components/Navbar'

import Chart1 from './components/Chart1'
import Quad3 from './components/Quad3'
import Table from './components/Table'

import Notification from './components/Notification'
import NotificationButton from './components/NotificationButton'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '95%'
  },
}));

function App() {

  const classes = useStyles();

  const [notifications, setNotifications] = useState(0)
  const [updated, setUpdated] = useState(false)


  function _handleSubscribe() {
    setTimeout(() => {
      setUpdated(!updated)
      setNotifications(updated ? 0 : 1)
    }, 2000)
  }

  function _handleNotificationClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setUpdated(false);
  }
  

  return (
    <div className={classes.root}>
      <Navbar notifications={notifications} />

        <Grid container spacing={3} style={{ padding: 20 }}>
          
          {/* <Grid item xs={2}></Grid>
          <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Chart1 updated={updated}/>
            <NotificationButton onClick={_handleSubscribe} />
          </Paper>
          </Grid>
          <Grid item xs={2}></Grid> */}

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Chart1 updated={updated}/>
              <NotificationButton onClick={_handleSubscribe} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Chart1/>
              <NotificationButton />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Quad3 />
              <NotificationButton />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Table/>
              <NotificationButton />
            </Paper>
          </Grid>

        </Grid>

        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={updated}
        autoHideDuration={6000}
        onClose={_handleNotificationClose}
      >
       <Notification
          onClose={_handleNotificationClose}
        />
      </Snackbar>

    </div>
  );
}

export default App;
