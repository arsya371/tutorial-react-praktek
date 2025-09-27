import React from 'react'
import { useState } from 'react'

const ProductCreate = ({onCreateProduct}) => {
    const initialState = {
        nama: '',
        deskripsi: '',
        imageURL: ''
    }
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const { nama, deskripsi, imageURL } = formData
    const handleChange = (e) => {
        // const { nama, value } = e.target
        setFormData({...formData, [e.target.name]  : e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        onCreateProduct(formData)
        setFormData(initialState)
    }
    const handleShow = () => {
        setShowForm(!showForm)
    }
    return (
    <div className="product-create">
        <div className='toggle-add'>
            <button onClick={handleShow} className='edit-input-submit add-toggle'>
                {showForm ? 'Close Form' : 'Add Product'}
            </button>
        </div>
        {showForm && (<form onSubmit={handleSubmit} className="form">
            <div className="form-add-title">Add Product</div>
            <div className="form-group">
                <input type="text" className="add-input-text" placeholder='Nama Produk' name="nama" value={nama} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="add-input-text" placeholder='Deskripsi Produk' name="deskripsi" value={deskripsi} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="add-input-text" placeholder='Image Produk' name="imageURL" value={imageURL} onChange={handleChange}/>
            </div>
            <input type="submit" className='edit-input-submit add' />
        </form>)}
    </div>
    )
}

export default ProductCreate
