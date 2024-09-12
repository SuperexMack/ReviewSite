import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Register(){
    const [email,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [userName , setUserName] = useState("")
    const [loading , setLoading] = useState(false);

    let Navigate = useNavigate()

   

    const UserRegister = async()=>{
        setLoading(true)
        await axios.post("http://localhost:9000/v1/register" , {
            email : email,
            password : password,
            userName : userName
        })
        .then((response)=>{
            
            toast.success("User Registered successfully")
            setTimeout(()=>Navigate("/") , 3000);
            localStorage.setItem("authorization" , "Bearer " + response.data.token)
        })

        .catch((error)=>{
           console.log(error)
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
       
        <div className="flex justify-center items-center h-screen">

            <div className="bg-slate-200 flex flex-col h-[500px] w-[400px] relative left-[200px] rounded-xl p-6">

                <h1 className="text-4xl mt-2">User Register</h1>
                <div className="flex flex-col space-y-5 p-3">
               <label>E-mail</label>
               <input onChange={(e)=>setEmail(e.target.value)} type="email" className="p-2" placeholder="Email*"></input>
               <label>Password</label>
               <input onChange={(e)=>setPassword(e.target.value)} className="p-2" type="password" placeholder="Password*"></input>
               <label>UserName</label>
               <input onChange={(e)=>setUserName(e.target.value)} type="text" className="p-2" placeholder="UserName*"></input>
               </div>
               <div className="space-x-7 ml-6 mt-3 text-2xl">
                <button onClick={UserRegister} className="bg-green-500 p-2 rounded-xl text-white w-[120px]">Register</button>
                <button className="bg-red-500 p-2 rounded-xl text-white w-[120px]">Login</button>
               </div>
            </div>

        </div>

        )}
        <ToastContainer />
        </>
    )
}

export default Register