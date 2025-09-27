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
    const [errors, setErrors] = useState({})
    const { nama, deskripsi, imageURL } = formData
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
        // Clear error when user starts typing
        if (value.trim() !== '') {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }
    const validateForm = () => {
        const newErrors = {}
        if (!nama.trim()) newErrors.nama = 'Nama produk harus diisi'
        if (!deskripsi.trim()) newErrors.deskripsi = 'Deskripsi produk harus diisi'
        if (!imageURL.trim()) newErrors.imageURL = 'URL gambar harus diisi'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            onCreateProduct(formData)
            setFormData(initialState)
            setErrors({})
        }
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
                {errors.nama && <div className="error-message" style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.nama}</div>}
            </div>
            <div className="form-group">
                <input type="text" className="add-input-text" placeholder='Deskripsi Produk' name="deskripsi" value={deskripsi} onChange={handleChange}/>
                {errors.deskripsi && <div className="error-message" style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.deskripsi}</div>}
            </div>
            <div className="form-group">
                <input type="text" className="add-input-text" placeholder='Image Produk' name="imageURL" value={imageURL} onChange={handleChange}/>
                {errors.imageURL && <div className="error-message" style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>{errors.imageURL}</div>}
            </div>
            <input 
                type="submit" 
                className='edit-input-submit add' 
                disabled={!nama.trim() || !deskripsi.trim() || !imageURL.trim()}
                style={{
                    opacity: (!nama.trim() || !deskripsi.trim() || !imageURL.trim()) ? '0.5' : '1',
                    cursor: (!nama.trim() || !deskripsi.trim() || !imageURL.trim()) ? 'not-allowed' : 'pointer'
                }}
            />
        </form>)}
    </div>
    )
}

export default ProductCreate
