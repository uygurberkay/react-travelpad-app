import './css/App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import TravelPad from './images/TravelPad_Logo.png';

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          TravelPad
        </Typography>
        <img src={TravelPad} alt="TravelPad" width={500} height={200}/>
      </AppBar>
      <Grow in>
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
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
