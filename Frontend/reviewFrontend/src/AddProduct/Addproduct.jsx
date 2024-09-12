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
    const getToken = localStorage.getItem("authorization")

    const Naviagte = useNavigate()

    const makeProduct = async()=>{
       setLoading(true)
       let makeaProduct = axios.post("http://localhost:9000/v1/addProduct/AddItem" , {
        title : title,
        description : description,
       },
        {
            headers:{
            Authorization : getToken
        }
       })

       makeaProduct
       .then(()=>{
            toast.success("Product will be added soon after all the investigation")
            setTimeout(()=>Naviagte("/") , 3000)
            return
       })
       .catch(()=>{
        toast.error("Something went wrong while Adding the product try again later")
       })
    }

    return(
        <>

        <Navbar></Navbar>
        {loading ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl relative left-[5%]">Loading...</h1>
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
           <input className="mt-11" type="file" placeholder="Image"></input>

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
