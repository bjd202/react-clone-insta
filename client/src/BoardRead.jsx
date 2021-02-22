import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function BoardRead(props) {
    const {history} = props
    const classes = useStyles();

    const onClickEdit = () => {
        const id = 1
        history.push(`/board-edit/${id}`)
    }

    const onClickList = () => {
        history.push('/board')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
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
