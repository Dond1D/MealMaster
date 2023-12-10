import React from "react";
import axios from "axios";
import "./HomeAdmin.css"; // Import the CSS file

export default function HomeAdmin() {
  const [product, setProduct] = React.useState({
    name: "",
    price: 0.0,
  });
  const [image, setImage] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (product.name === "" || product.price < 0) {
      return;
    }

    const formData = new FormData();
    formData.append("product", new Blob([JSON.stringify(product)], { type: "application/json" }));
    formData.append("image", image);

    axios
      .post("http://localhost:8080/auth/shopping", formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  }

  function handleImage(e) {
    const itemsImage = e.target.files[0];
    setImage(itemsImage);
  }

  console.log(product, image);

  return (
    <div>
      <div className="header" style={{justifyContent:"center"}}>Admin Site</div>
      <form className="form-container" onSubmit={handleSubmit} method="post" action="post" encType="multipart/form-data">
        <input className="input-field" type="text" name="name" placeholder="Write the Shopping Item's name" onChange={handleChange} />
        <input className="input-field" type="text" name="price" placeholder="Write the item's price" onChange={handleChange} />
        <input className="input-field" type="file" accept="image/*" placeholder="Enter your meal image" onChange={handleImage} />
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
