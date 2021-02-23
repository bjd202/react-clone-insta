import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import moment from 'moment'

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
});

function CustomPagination(props) {
    const { state, api } = props;
    const classes = useStyles();

    return (
        <Pagination
            className={classes.root}
            color="primary"
            page={state.pagination.page}
            count={state.pagination.pageCount}
            onChange={(event, value) => {
                console.dir(event)
                api.current.setPage(value)
            }}
            showFirstButton
            showLastButton
        />
    );
}

CustomPagination.propTypes = {
    /**
     * ApiRef that let you manipulate the grid.
     */
    api: PropTypes.shape({
        current: PropTypes.object.isRequired,
    }).isRequired,
    /**
     * The GridState object containing the current grid state.
     */
    state: PropTypes.object.isRequired,
};

const columns = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    { field: 'title', headerName: '제목', flex: 1 },
    { 
        field: 'ins_dt', 
        headerName: '작성일', 
        flex: 1,
        valueFormatter: (params) => moment(params.value).format('YYYY-MM-DD HH:mm:ss')
    },
    {
        field: 'upt_dt',
        headerName: '수정일',
        flex: 1,
        valueFormatter: (params) => moment(params.value).format('YYYY-MM-DD HH:mm:ss')
    },
    {
        field: 'ins_user',
        headerName: '작성자',
        flex: 1,
    },
    {
        field: 'upt_user',
        headerName: '수정자',
        flex: 1,
    }
];

let rows = [];

function Board(props) {
    const {history} = props
    const [Rows, setRows] = useState([])

    useEffect( () => {
        const datas = async () => {
          try {
            setRows([])
    
            const response = await axios.get('/api/board/list')
    
            rows = response.data.data
            setRows(response.data.data)
          } catch (error) {
            alert(error)
          }
        }
    
        datas()
      }, [])

    const onRowClick = (param) => {
        console.log(param)
        console.log(param.row)
        console.log(param.getValue())
        history.push(`/board/${param.row.id}`)
    }

    const onWriteBtnClick = (e) => {
        history.push('/board-write')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Button variant="contained" color="primary" onClick={onWriteBtnClick}>
                    글쓰기
                </Button>
                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pageSize={10}
                        onRowClick={onRowClick}
                    />
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Board
