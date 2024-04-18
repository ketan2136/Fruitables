
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import { DataGrid } from '@mui/x-data-grid';
import { addfacility, deleteFacility, editFacility } from '../../Redux/action/facility.action';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { adminLoginAdd, adminLoginGet } from '../../Redux/action/admin.action';


const AdminLogin = () => {


    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = React.useState(null)

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(adminLoginGet())
    }, [dispatch])

    const userVal = useSelector(state => state.users);
    console.log(userVal.users);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const columns = [
        { field: 'email', headerName: 'Email', width: 70 },
        { field: 'password', headerName: 'Password ', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleupdate(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>

                </>
            ),

        }
    ];

    const handleupdate = (data) => {
        formik.setValues(data)
        handleClickOpen()
        setUpdate(data)
    }

    const handleDelete = (id) => {

    }

    let adminLoginSchema = object({
        email: string().required(),
        password: string().required(),
    });

    const formik = useFormik({
        validationSchema: adminLoginSchema,

        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, action) => {
            console.log(values);

            // if (update) {
            //     dispatch(editFacility(values))
            // } else {
                const rNo = Math.floor(Math.random() * 100)
                dispatch(adminLoginAdd({ ...values, id: rNo }))
            // }

            // setUpdate(null)
            action.resetForm()
            handleClose()
        },

    });


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <div>
            <>

                <h1>facility</h1>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>
                            <TextField
                                margin="dense"
                                id="password"
                                name="password"
                                label="password Address"
                                type="text"
                                variant="standard"
                                fullWidth
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : null}  </span>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Subscribe</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={userVal.users}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </>
        </div>
    )
}

export default AdminLogin
