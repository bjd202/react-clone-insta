import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';

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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Board(props) {
    const {history} = props
    console.dir(history)

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
