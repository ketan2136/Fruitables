
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
import { addCoupon } from '../../Redux/slice/couponSlice';

const AdminCoupon = () => {

    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = React.useState(null)

    const dispatch = useDispatch();

    React.useEffect(() => {
        // dispatch(adminLoginGet())
    }, [dispatch])

    // const userVal = useSelector(state => state.users);
    // console.log(userVal.users);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const columns = [
        { field: 'code', headerName: 'code', width: 70 },
        { field: 'percentage', headerName: 'percentage', width: 70 },
        { field: 'expiryDate', headerName: 'expiryDate ', width: 130 },
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

    let couponSchema = object({
        code: string().required(),
        percentage: string().required(),
        expiryDate: string().required(),
    });

    const formik = useFormik({
        
        initialValues: {
            code: '',
            percentage: '',
            expiryDate: '',
        },
        validationSchema: couponSchema,
        onSubmit: (values, action) => {
            console.log(values);

            if (update) {
               
            } else {
                dispatch(addCoupon(values));
            }

            // setUpdate(null)
            action.resetForm()
            handleClose()
        },

    });


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;


    return (
        <div>
            <div>
                <>

                    <h1>Coupon</h1>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Open form dialog
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogTitle>Add TO Coupon</DialogTitle>
                        <DialogContent>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    margin="dense"
                                    id="code"
                                    name="code"
                                    label="Coupon code"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.code}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.code && touched.code ? errors.code : null}  </span>
                                <TextField
                                    margin="dense"
                                    id="percentage"
                                    name="percentage"
                                    label="percentage Address"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    value={values.percentage}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.percentage && touched.percentage ? errors.percentage : null}  </span>
                                <TextField
                                    margin="dense"
                                    id="expiryDate"
                                    name="expiryDate"
                                    label=""
                                    type="date"
                                    variant="standard"
                                    fullWidth
                                    value={values.expiryDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span style={{ color: 'red' }}>{errors.expiryDate && touched.expiryDate ? errors.expiryDate : null}  </span>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">Subscribe</Button>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </Dialog>

                    {/* <div style={{ height: 400, width: '100%' }}>
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
                    </div> */}
                </>
            </div>
        </div>
    )
}

export default AdminCoupon
