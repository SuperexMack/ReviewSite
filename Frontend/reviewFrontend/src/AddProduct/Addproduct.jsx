import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function AddProduct(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [loading , setLoading] = useState(false)
    const [file,setFile] = useState("")
    const getToken = localStorage.getItem("authorization")

    const Naviagte = useNavigate()

   

    const handleFile = (e) => {
    let newfile = e.target.files[0];
    if (newfile) {
        var reader = new FileReader();
        reader.onloadend = function () {
            setFile(reader.result);  
        };
        reader.readAsDataURL(newfile);  
    }
};


    const makeProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file) {
        setLoading(false);
        return;
    }

    try {
        let makeaProduct = await axios.post(
            "http://localhost:9000/v1/addProduct/AddItem",
            {
                title: title,
                description: description,
                image: file  
            },
            {
                headers: {
                    Authorization: getToken
                }
            }
        );

        toast.success("Product will be added soon after all the investigation");
        setTimeout(() => Naviagte("/"), 3000);
    } catch (error) {
        toast.error("Something went wrong while Adding the product, try again later");
    } finally {
        setLoading(false);
    }
};


    return(
        <>

        <Navbar></Navbar>
        {loading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-[40px] relative left-[5%]">Loading...</h1>
        </div>
        ) : (
       <div className="h-[1000px] flex justify-center pt-10">
        <div className="flex flex-col h-[850px] bg-slate-200 rounded-xl w-[700px] relative left-[200px] p-8">
        <h1 className="text-[50px] font-medium">Add Your Product</h1>
        
        <div className="flex flex-col w-full mt-8 space-y-6">
            <label className="text-2xl">Product Name</label>
           <input onChange={(e)=>setTitle(e.target.value)} className="w-[400px] p-1 mt-5" placeholder="Product Name"></input>
           <label className="text-2xl mt-10">Product Details</label>
           <textarea onChange={(e)=>setDescription(e.target.value)} className="h-[200px] p-1 mt-11"></textarea>
           <label className="text-2xl mt-10">Add Image</label>
           <input onChange={handleFile} className="mt-11" type="file" placeholder="Image"></input>

            <div className="flex flex-row justify-center items-center h-[100px] mt-14">
            <button onClick={makeProduct} className="bg-green-500 p-2 rounded-xl text-white w-[300px] text-[30px]">Add Item</button>
           </div>

        </div> 

        </div>

        </div>
        )}
        <ToastContainer />
        
        
        </>
    )
}


export default AddProduct
