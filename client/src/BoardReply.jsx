import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    btn: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}));

let upt_id = 0

function BoardReply(props) {

    const classes = useStyles();
    const [Reply, setReply] = useState([])
    const [ReplyContent, setReplyContent] = useState('')

    useEffect(() => {
        axios.post('/api/board_reply/list', {
            board_id: props.board_id
        })
        .then((res) => {
            setReply(res.data.data)
        })
        .catch((err) => {
            alert(err)
        })
    }, [])

    const onChangeReplyContent = (e) => {
        const {name, value} = e.target
        setReplyContent(value)
    }

    const onClickAddReply = () => {
        axios.post('/api/board_reply/insert', {
            board_id: props.board_id,
            content: ReplyContent,
            username: JSON.parse(localStorage.getItem('user')).username
        })
        .then((res) => {
            setReply([
                ...Reply,
                res.data.data[0]
            ])
        })
        .catch((err) => {
            alert(err)
        })
    }

    const onClickDeleteReply = id => e => {
        console.log(id)
        axios.post('/api/board_reply/delete', {
            id: id
        })
        .then((res) => {
            setReply(Reply.filter(item => item.id !== id))
        })
        .catch((err) => {
            alert(err)
        })
    }

    return (
        <div>
            <TextField label="댓글 내용" variant="outlined" fullWidth margin="normal" multiline rows={3} rowsMax={8} onChange={onChangeReplyContent} />
            <Button variant="contained" color="primary" onClick={onClickAddReply}>
                댓글 작성
            </Button>

            <List>
                {Reply.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <ListItem alignItems="flex-start" >
                            <ListItemAvatar>
                                <Avatar alt={item.ins_user} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>

                            <ListItemText
                                primary={moment(item.ins_dt).format('YYYY-MM-DD HH:mm:ss')}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {item.ins_user + ' - '}
                                        </Typography>
                                        {item.content}
                                    </React.Fragment>
                                }
                            /> 

                            {
                                (item.ins_user == JSON.parse(localStorage.getItem('user')).username) ? 
                                <div className={classes.btn}>
                                    <Button variant="contained" color="secondary" onClick={onClickDeleteReply(item.id)}>
                                        삭제
                                    </Button>
                                </div> : '' 
                            }

                            
                            
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}

export default BoardReply
