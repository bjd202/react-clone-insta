import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
            '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function BoardEdit(props) {
    const {history, match} = props
    const classes = useStyles();

    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")

    const [Board, setBoard] = useState({
        content: '',
        id: '',
        ins_dt: '',
        ins_user: '',
        title: '',
        upt_dt: '',
        upt_user: ''
    })

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

    const handleOnChange = (e) => {
        const {value, name} = e.target
    
        setBoard({
            ...Board,
            [name]: value
        })
    }

    const onClickSave = () => {
        axios.post(`/api/board/update`, Board)
        .then((res) => {
            console.dir(res)
            history.push(`/board/${match.params.id}`)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const onClickCancel = () => {
        history.push(`/board/${match.params.id}`)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <form noValidate autoComplete="off">
                    <div>
                        <TextField required id="outlined-required" name="title" label="제목" variant="outlined" fullWidth margin="normal" onChange={handleOnChange} value={Board.title} />
                        <TextField required label="내용" name="content" variant="outlined" fullWidth margin="normal" multiline rows={8} rowsMax={8} onChange={handleOnChange} value={Board.content} />
                    </div>

                    <div className={classes.root}>
                        <Button variant="contained" color="primary" onClick={onClickSave}>
                            저장
                        </Button>
                        <Button variant="contained" color="secondary" onClick={onClickCancel}>
                            취소
                        </Button>
                    </div>
                    
                </form>
            </Container>
        </React.Fragment>
    )
}

export default BoardEdit
