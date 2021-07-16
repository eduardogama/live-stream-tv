import React from 'react';

import {useRef, useEffect} from 'react';

import dashjs from 'dashjs'

import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// CSS
import './index.css';


// var url = "http://streamer-1.dynavideo.com.br/channel1/bbb_movie.mpd";
// var url = "http://localhost/channel1/bbb_movie.mpd"
// var player = dashjs.MediaPlayer().create();


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Clip({ url }) {
  const videoRef = useRef();
  const previousUrl = useRef(url);

  useEffect(() => {
    if (previousUrl.current !== url) {
      console.log(url);
      videoRef.current.load();
    }
  }, [url]);

  return (
    <video data-dashjs-player="" autoplay="true" src={url} width="1080px" height="720px" controls></video>
  );
}
// <video data-dashjs-player="" autoplay="true" src={this.state.url} width="1080px" height="720px" controls></video>

const Channel2 = (props) => {
  // const classes = useStyles();
  var url: "https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd";

  function handleClick(str) {
    url = str;
    console.log(str);
    console.log("============================");
  }

  function ClickChannel1() {
    var str = "";
    props.history.push("channel-1");
    window.location.reload();
  }

  function ClickChannel2() {
    props.history.push("channel-2");
    window.location.reload();
  }

  function ClickChannel3() {
    props.history.push("channel-3");
    window.location.reload();
  }

  function ClickChannel4() {
    props.history.push("channel-4");
    window.location.reload();
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={useStyles.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Live stream tv
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container>
          <div>
            <Grid container spacing={2} justifyContent="center">
              <video data-dashjs-player="" autoplay="true" src="https://cmafref.akamaized.net/cmaf/live-ull/2006350/akambr/out.mpd" width="1080px" height="720px" controls></video>
            </Grid>
          </div>
        </Container>

        <div className={useStyles.heroContent}>
          <Container maxWidth="sm">
            <div className={useStyles.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <Button onClick={ClickChannel1} variant="contained" color="primary">
                  Canal 1
                </Button>
                </Grid>
                <Grid item>
                <Button onClick={ClickChannel2} variant="contained" color="primary">
                  Canal 2
                </Button>
                </Grid>
                <Grid item>
                <Button onClick={ClickChannel3} variant="contained" color="primary">
                  Canal 3
                </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary">
                  Canal 4
                </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

      </main>
    </React.Fragment>
  )
}


export default Channel2;
// ReactDom.render(<VideoStream />, document.getElementById('root'));
