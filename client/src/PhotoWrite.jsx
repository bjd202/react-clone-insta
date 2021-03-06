import React, { useState } from 'react'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {DropzoneArea} from 'material-ui-dropzone'
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

function PhotoWrite() {

    const classes = useStyles();

    const [Photo, setPhoto] = useState({
        title: '',
        content: ''
    })

    const [Files, setFiles] = useState([])

    const handlePhoto = e => {
        const {name, value} = e.target

        setPhoto({
            ...Photo,
            [name]: value
        })
    }

    const onClickSave = e => {
        console.dir(Photo)
        console.dir(Files)

        const formData = new FormData()
        formData.append('title', Photo.title)
        formData.append('content', Photo.content)
        formData.append('username', JSON.parse(localStorage.getItem('user')).username)
        
        for (let i = 0; i < Files.length; i++) {
            formData.append('file', Files[i])
        }

        axios.post('/api/photo/insert', formData)
        .then(res => {
            console.dir(res)
            if(res.data.result === 'success'){
                // history.push('/photo')
            }else{
                alert('저장 실패')
            }
        })
        .catch(err => {
            alert('저장 실패')
        })
    }

    const onClickCancel = e => {
        
    }

    const onChangeFiles = files => {
        setFiles(files)
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <form noValidate autoComplete="off" encType="multipart/form-data">
                    <div>
                        <TextField name="title" required id="outlined-required" label="제목" variant="outlined" fullWidth margin="normal" onChange={handlePhoto} />
                        <TextField name="content" required label="내용" variant="outlined" fullWidth margin="normal" multiline rows={8} rowsMax={8} onChange={handlePhoto} />
                        <DropzoneArea 
                            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                            showPreviews={true}
                            showPreviewsInDropzone={false}
                            filesLimit={6}
                            showFileNamesInPreview={true}
                            onChange={onChangeFiles}
                        />
                    </div>

                    <div className={classes.root} style={{marginTop: '30px'}}>
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

export default PhotoWrite
