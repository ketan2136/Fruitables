import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux'
import { addShop, deleteShop, editShop, getShop } from '../../Redux/action/shop.action';

const Shop = () => {
    const [imagePreview, setImagePreview] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getShop());
    }, [dispatch]);

    const shopVal = useSelector(state => state.shop);
    console.log('product', shopVal);

    const columns = [
        { field: 'fruite', headerName: 'Name', width: 70 },
        { field: 'description', headerName: 'Discretion ', width: 130 },
        { field: 'price', headerName: 'Price ', width: 130 },
        { field: 'image', headerName: 'Image ', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleupdate(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        }
    ];

    const handleupdate = (data) => {
        formik.setValues(data)
        handleClickOpen()
        // dispatch(editShop(data))
        setUpdate(data)
    }

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteShop(id))
    }

    let productSchema = yup.object({
        fruite: yup.string().required(),
        description: yup.string().required(),
        price: yup.string().test('is-number', 'Price must be a valid number', (value) => !isNaN(parseFloat(value))),
        image: yup.mixed().required("please upload file"),
    });

    const formik = useFormik({
        validationSchema: productSchema,
        initialValues: {
            fruite: '',
            description: '',
            price: '',
            image: '',
        },
        onSubmit: async (values, action) => {
            // const imagePath = await uploadImage(values.image);
            // console.log('file',imagePath);

            // if (update) {
                
            // } else {
                const rNo = Math.floor(Math.random() * 1000)
                dispatch(addShop({ ...values, id: rNo }));
            // }


            action.resetForm();
            handleClose();
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = formik;

    return (
        <div>
            <h1>Product</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            id="fruite"
                            name="fruite"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.fruite}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.fruite && touched.fruite ? errors.fruite : null}  </span>
                        <TextField
                            margin="dense"
                            id="description"
                            name="description"
                            label="description"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.description && touched.description ? errors.description : null}  </span>
                        <TextField
                            margin="dense"
                            id="price"
                            name="price"
                            label="Price"
                            type="text"
                            variant="standard"
                            fullWidth
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null}  </span>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            onChange={(event) => setFieldValue("image", event.target.files[0])}
                            onBlur={formik.handleBlur}
                        />
                        <span style={{ color: 'red' }}>{formik.errors.image && formik.touched.image ? formik.errors.image : null}</span>
                        <img width={'150px'} height={'150px'} src={typeof values.image === "string" ? values.image : URL.createObjectURL(values.image)} />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Subscribe</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={shopVal.shop}
                    columns={columns}
                    pageSize={5}
                />
            </div>
        </div>
    )
}

export default Shop;


