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



const Facility = () => {

    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = React.useState(null)

    const dispatch = useDispatch();

    const facility = useSelector(state => state.facility);

    console.log(facility.facility);

    console.log(facility);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'discretion', headerName: 'Discretion ', width: 130 },
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
        dispatch(deleteFacility(id))
    }




    let facilitySchema = object({
        name: string().required(),
        discretion: string().required(),
    });

    const formik = useFormik({
        validationSchema: facilitySchema,

        initialValues: {
            name: '',
            discretion: '',
        },
        onSubmit: (values, action) => {

            if (update) {
                dispatch(editFacility(values))
            } else {
                const rNo = Math.floor(Math.random() * 100)
                dispatch(addfacility({ ...values, id: rNo }))
            }

            // setUpdate(null)
            action.resetForm()
            handleClose()
        },

    });


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;


    return (
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
                            id="name"
                            name="name"
                            label="name Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                        <TextField
                            margin="dense"
                            id="discretion"
                            name="discretion"
                            label="discretion Address"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={values.discretion}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.discretion && touched.discretion ? errors.discretion : null}  </span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Subscribe</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={facility.facility}
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
    )
}

export default Facility
