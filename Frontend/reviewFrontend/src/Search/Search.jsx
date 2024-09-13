import { useState ,useEffect} from "react"
import Navbar from "../Navbar/Navbar"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Search(){

  let Navigate = useNavigate()

  const [Product,setProduct] = useState("")
  const [id , setId] = useState(0)
  const [findItem , setFindItem] = useState(false)
  const [loading , setLoading] = useState(false)
  console.log(id)
   const findTheProduct = async()=>{
    setLoading(true)
      await axios.post("http://localhost:9000/v1/findProduct/client/findProduct",{
        title : Product
      })

      .then((respond)=>{
        setId(respond.data.id)
        setFindItem(respond.data.findedItem)
      })
      .catch(()=>{
        toast.error("unable to find the product")
      })
   }
   
   

   if(findItem){
    parseInt(id)
    toast.success("Your product had been found out")
    setTimeout(()=>Navigate(`/getProductdata/${id}`) , 3000);
   }

  //  else{
  //   toast.success("Unable to find project")
  //  }

    return(
        <>
        <Navbar></Navbar>
        {loading ?(
          <div className="flex justify-center items-center h-screen">
          <h1 className="text-[70px] relative left-[9%]">Loading...</h1>
        </div>

        ) : (
          <div className="h-screen flex flex-col items-center">
           <div className="mt-10 flex-wrap relative left-[200px] flex flex-row gap-4 justify-center items-center w-[600px] h-[200px]">
             <input onChange={(e)=>setProduct(e.target.value)} className=" w-[400px] h-[50px] p-4 border-2 border-blue-500 rounded-lg cursor-pointer" type="search"></input>
             <button onClick={findTheProduct} className="bg-slate-300 p-3 rounded-xl cursor-pointer">Search Product</button>
           </div>

        <div className=" flex items-center flex-col  w-[auto] h-[300px] relative left-[150px]">
           <h1 className="mt-[30px] text-7xl font-medium text-violet-700">Search & Know Reality</h1>
           <p className="mt-8 text-[20px]">Search your desired product and get to know it's real review</p>
           <button className="mt-8 text-4xl bg-blue-400 rounded-2xl p-2 w-[200px] text-yellow-50">Explore</button>
        </div>

        </div>
       
        )}
        <ToastContainer />
        
        </>
    )
}
export default Search