import React, { useState, useEffect } from "react";
import { AddProduct, UpdateProduct } from "../Api/reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {
  const location = useLocation();
  console.log(location, "location");
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const state = useSelector((state) => state);

  const initialValues = {
   
    title: "",
    body: "",
    
  };
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    }
  }, [location]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(AddProduct(formData));
    if (!state.user.isLoading) {
      toast("Post Added Successfully");
      navigate("/");
    }
  };

  const EditSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(UpdateProduct(formData));
    if (!state.user.isLoading) {
      toast("Post Updated Successfully");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div class="card mt-4" style={{ width: "38rem", marginLeft: "210px" }}>
        <form onSubmit={location.state ? EditSubmit : handleSubmit}>
          <div class="card-body">
            <h5
              class="card-title"
              style={{ color: "black", textAlign: "center" }}
            >
              {location.state ? "Edit Post" : "Add Post"}
            </h5>
            <div class="mb-3 mt-4">
              <label for="exampleFormControlInput1" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="user"
                value={formData.title}
                name="title"
                onChange={handleInputChange}
                placeholder="Enter the Title"
              />
            </div>

            <div class="mb-3 ">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-dark mt-4"
              style={{ marginLeft: "160px" }}
            >
              {" "}
              {!state.user.isLoading ? "Submit" : "Loading"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
