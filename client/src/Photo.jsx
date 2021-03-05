import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
}));

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    list: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

const tileData = [
    {
        id: 1,
        img: 'https://lh3.googleusercontent.com/proxy/ggfw380t2GYm9GhiBTvrEJOuZVpZs1oes2K2oXUJl3huk2CCk9azAmW8HddXPwSw3lY_COQJdbh7zyX5PMXQibcuSzGeijpHmGBNKk44YTiL3i9neQ',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        id: 2,
        img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTJfMjYw/MDAxNTc2MTQwMDE0MjIy.F1V39cfeZPhX87yFFlqkZQqfGmycVOxXbO3vg0dFrvEg.12ulcNAMUNyNzlE7rz5Hk2NVlJfkakVTOspDnzyRkUMg.PNG.vet6390/%EA%B8%B8%EA%B3%A0%EC%96%91%EC%9D%B4_%EC%9E%85%EC%96%91.PNG?type=w800',
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        id: 3,
        img: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_286/84-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        id: 4,
        img: 'https://lh3.googleusercontent.com/proxy/ebtO7UOZjASRnGn32bwK2WnNHERlUgFkgMdqjQ2ZJrG5avT4WAqQxk2OuDwD6IRhPm-fK0Ui591grpvImJcb5Ns7kfaEf5z0Su7DLNH-JwUEBTFji_Q',
        title: 'Image',
        author: 'author',
        cols: 2,
    }
];

const cycle = [2, 1, 1, 1, 1, 1, 2]

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function Photo({history}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const onClickImage = (e) => {
        console.log(e.target.id)
        handleClickOpen()
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickWriteBtn = () => {
        history.push('/photo/write')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">

                <Button variant="contained" color="primary" onClick={onClickWriteBtn}>
                    작성
                </Button>
                
                <div className={classes.root}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileData.map((tile, i) => (
                            <GridListTile key={tile.img} cols={cycle[i % cycle.length] || 1} onClick={onClickImage}>
                                <img id={tile.id} src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>

                    <div className={{flexGrow: 1}}>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth="true" maxWidth="lg">
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Modal title
                        </DialogTitle>
                        <DialogContent dividers>
                            <Grid container alignItems="center">
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <Paper elevation={3}>
                                        <img style={{width: '100%', height: '100%'}} src="https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTJfMjYw/MDAxNTc2MTQwMDE0MjIy.F1V39cfeZPhX87yFFlqkZQqfGmycVOxXbO3vg0dFrvEg.12ulcNAMUNyNzlE7rz5Hk2NVlJfkakVTOspDnzyRkUMg.PNG.vet6390/%EA%B8%B8%EA%B3%A0%EC%96%91%EC%9D%B4_%EC%9E%85%EC%96%91.PNG?type=w800" alt="" />
                                    </Paper>
                                </Grid>
                                
                                {/* <Divider orientation="vertical" flexItem /> */}

                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>

                                    <List>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Brunch this weekend?"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Summer BBQ"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Oui Oui"
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                                
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Save changes
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Photo
