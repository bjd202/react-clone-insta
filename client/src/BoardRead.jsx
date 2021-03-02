import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios'

import BoardReply from './BoardReply'

const useStyles = makeStyles((theme) => ({
    root: {
            '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function BoardRead(props) {
    const {history, match} = props
    const classes = useStyles();
    
    const username = JSON.parse(localStorage.getItem('user')).username

    const [Board, setBoard] = useState({})
    

    useEffect( () => {
        axios.post('/api/board/read', {
            id: match.params.id
        })
        .then((res) => {
            console.dir(res)
            setBoard(res.data.data[0])
        })
        .catch((err) => {
            alert(err)
        })
    }, [])

    const onClickEdit = () => {
        history.push(`/board-edit/${match.params.id}`)
    }

    const onClickList = () => {
        history.push('/board')
    }

    const onClickDelete = () => {
        axios.post(`/api/board/delete`, Board)
        .then((res) => {
            console.dir(res)
            history.push('/board')
        })
        .catch((err) => {
            alert(err)
        })
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography gutterBottom variant="h5" component="h2">
                    {Board.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Board.content}
                </Typography>

                <div className={classes.root}>
                    {
                        username === Board.ins_user ? 
                        <Button variant="contained" color="primary" onClick={onClickEdit}>
                            수정
                        </Button> : ''
                    }
                    {
                        username === Board.ins_user ? 
                        <Button variant="contained" color="secondary" onClick={onClickDelete}>
                            삭제
                        </Button> : ''
                    }
                    <Button variant="contained" color="primary" onClick={onClickList}>
                        목록
                    </Button>
                </div>

                <BoardReply board_id={match.params.id} />
            </Container>
        </React.Fragment>
    )
}

export default BoardRead
