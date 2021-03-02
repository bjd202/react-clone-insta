import React, { useState } from 'react'
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

function BoardWrite(props) {
    const {history} = props
    const classes = useStyles();

    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const onClickSave = () => {
        axios.post('/api/board/insert', {
            title: Title,
            content: Content,
            username: JSON.parse(localStorage.getItem('user')).username
        })
        .then((res) => {
            console.dir(res)
            if(res.data.result === 'success'){
                history.push('/board')
            }else{
                alert('저장 실패')
            }

        })
        .catch((err) => {
            alert('저장 실패')
        })
    }

    const onClickCancel = () => {
        history.push('/board')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <form noValidate autoComplete="off">
                    <div>
                        <TextField required id="outlined-required" label="제목" variant="outlined" fullWidth margin="normal" onChange={handleTitle} />
                        <TextField required label="내용" variant="outlined" fullWidth margin="normal" multiline rows={8} rowsMax={8} onChange={handleContent} />
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

export default BoardWrite
