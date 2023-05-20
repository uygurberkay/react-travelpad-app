import './css/App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import TravelPad from './images/TravelPad_Logo.png';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>TravelPad</Typography>
        <img className={classes.image} src={TravelPad} alt="TravelPad" height={80}/>
      </AppBar>
      <Grow in>
        <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
