import React, { useEffect ,useState} from "react";
import { fetchTodos ,DeleteProduct} from "../Api/reducers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notiflix from 'notiflix';


const Table = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const[responseData,setResponseData]= useState("");
  const[isEdit,setIsEdit]= useState(false)
  const state = useSelector((state) => state);
  
 
    
  useEffect(() => {
    (async()=>{

   
  const response=await  dispatch(fetchTodos());
  setResponseData(response.payload)
})()
  }, []);

 
  const navigation = () => {
    navigate("/AddUser");
  };
  const handleEdit = (data) => {
    console.log(data,"data")
    navigate("/EditUser", { state:data});
    setIsEdit(true)
  };
  const handleDelete=async(data)=>{

    Notiflix.Confirm.show(
      ' Confirm',
      'Do you agree with me?',
      'Yes',
      'No',
      function okCb() {
        const response= dispatch(DeleteProduct(data))

      },
      function cancelCb() {
        
      },
      {
        width: '320px',
        borderRadius: '8px',
        // etc...
      },
    );
  }
  
    return (
    <>
    <div className="container">

      <button type="button" class="btn btn-dark mt-4" onClick={navigation}>
        Add User
      </button>
      <table class="table table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {responseData &&responseData?.map((val, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{val.title}</td>
              <td>{val.body}</td>
              <td>
                {" "}
                <i
                  class="bi bi-pencil-square"
                  onClick={()=>handleEdit(val)}
                  style={{ cursor: "pointer" }}
                ></i>
              </td>

              <td>
                <i class="bi bi-trash" style={{ cursor: "pointer" }} onClick={()=>handleDelete(val.id)}></i>
              </td>
            </tr>
          ))}
         
        </tbody>
      </table>
     
     
    </div>
    
   </>
  );
};

export default Table;
