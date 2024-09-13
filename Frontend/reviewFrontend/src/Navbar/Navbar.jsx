import { useState , useEffect} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar(){ 

    const [checkOnline , setCheckOnline] = useState(false)
    const Navigate = useNavigate()

    useEffect(() => {
        const authToken = localStorage.getItem("authorization");
        if (authToken) {
            setCheckOnline(true); 
        }
    }, []);



    const logout = ()=>{
        localStorage.removeItem("authorization")
        toast.success("User is now logout")
        setCheckOnline(false)
        setTimeout(()=>Navigate("/Register") , 2000)
    }

    
    return(
        <>
        <div className="fixed w-[450px] h-[100vh] bg-black flex flex-col items-center">

            <div>
              <h1 className="text-5xl mt-[30px] text-violet-600 font-bold">The Review Store</h1>
            </div>

            <div className="flex flex-col items-center justify-center text-3xl cursor-pointer">
               <ul className="space-y-6 font-bold mt-[100px]">
                <li className=" bg-black text-white rounded-2xl p-2"><Link to="/"> Home</Link></li> 
                
                {checkOnline ? (
                <li className=" bg-black text-white rounded-2xl p-2" onClick={logout}>Log out</li>
                ) : (
               <li className=" bg-black text-white rounded-2xl p-2"><Link to="/Register"> Log in</Link></li>
                )  

                }

                <li className=" bg-black text-white rounded-2xl p-2">Contact</li>
                <li className=" bg-black text-white rounded-2xl p-2"><Link to="/addproduct">List your Product</Link></li>
                <li className=" bg-black text-white rounded-2xl p-2"> Support Us</li>
                <li className=" bg-black text-white rounded-2xl p-2"> <Link to="/searchItem"> Search Product</Link></li>
               </ul>
            </div>

        </div>
        <ToastContainer />
        </>
    )
}

export default Navbar