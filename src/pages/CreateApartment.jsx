import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CreateApartment() {
  const [formData, setFormData] = useState({})
  const params = useParams(); // same as req.params.apartmentId
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault()
    axios
    .post(
      `https://ironbnb-m3.herokuapp.com/apartments/`, 
      formData
      )
      .then(() => navigate("/"))
      .catch((error) => navigate(`/`));
  }

  function handleChange(event){
   // event.preventDefault()
   const inputName = event.target.name
   const value = event.target.value
   setFormData((formData) => {
     return {...formData, [inputName]: value}})
  }

  return (
    <div className="AddApartmentPage">
      <h3>Add apart </h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange}/>

        <label>Price per Day</label>
        <input type="number" name="pricePerDay" onChange={handleChange}/>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
