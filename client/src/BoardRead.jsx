import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

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
                    <Button variant="contained" color="primary" onClick={onClickEdit}>
                        수정
                    </Button>
                    <Button variant="contained" color="primary" onClick={onClickList}>
                        목록
                    </Button>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default BoardRead
