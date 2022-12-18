import './App.css';
import {Container , AppBar , Typography, Grow, Grid} from "@material-ui/core"
import { useDispatch } from 'react-redux';
import memory from "./images/6.jpeg"
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import useStyles from "./style"
import { useEffect } from 'react';
import {getPost} from "./actions/posts"

function App() {
  const classes=useStyles()
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(getPost)
  },[dispatch])
  return (
   <Container maxWidth="lg">
    <AppBar position="static" color="inherit">
      <Typography variant='h2' align='center'>Memories</Typography>
      <img src={memory} alt="memory" height="60"/>
    </AppBar>
    <Grow in >
      <Container>
        <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form/>
            </Grid>
        </Grid>
      </Container>
    </Grow>

    </Container>
  );
}

export default App;
