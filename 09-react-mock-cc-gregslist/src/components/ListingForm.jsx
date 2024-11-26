import {useState} from 'react'

const initialState = {
    description: "",
    image: "",
    location: ""
}

function ListingForm({ onSubmitListing }) {

    const [formData, setFormData] = useState(initialState)

    function handleChange(e){
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:6001/listings', config)
            .then(response => response.json())
            .then(onSubmitListing)
        setFormData(initialState)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="description" value={formData.description} placeholder="enter description" onChange={handleChange}/>
        <input type="text" name="image" value={formData.image} placeholder="enter image" onChange={handleChange}/>
        <input type="text" name="location" value={formData.location} placeholder="enter location" onChange={handleChange}/>
        <button type="submit">Add New Listing</button>
    </form>
  )
}

export default ListingForm