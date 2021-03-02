import React, { useEffect, useState } from 'react';
import {withRouter, Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '100px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Login(props) {
    const {history} = props
    const classes = useStyles();
    const [User, setUser] = useState({
      username: '',
      password: ''
    })   
    
    const handleOnChange = (e) => {
      const {name, value} = e.target

      setUser({
        ...User,
        [name]: value
      })
    }

    const onClickLogin = () => {
      axios.post('/api/user/login', User)
      .then(res => {
        if(res.data.result === 'success'){
          setUser(res.data.user)
          localStorage.setItem('user', JSON.stringify(res.data.user[0]))
          history.push('/')
          history.go(0)
        }else{
          alert('로그인 실패')
        }
      })
      .catch(err => {
        alert(err)
      })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          로그인
                        </Typography>
                        <TextField 
                          required 
                          id="outlined-required"
                          name="username" 
                          label="아이디" 
                          variant="outlined" 
                          fullWidth 
                          margin="normal" 
                          onChange={handleOnChange} />
                        <TextField
                          required
                          id="standard-password-input"
                          name="password"
                          label="비밀번호"
                          variant="outlined" 
                          fullWidth
                          type="password"
                          autoComplete="current-password"
                          onChange={handleOnChange}
                        />
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={onClickLogin}>
                            로그인
                        </Button>
                    </CardActions>
                    </Card>
            </Container>
        </React.Fragment>
    )
}

export default withRouter(Login)
