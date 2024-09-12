import { useEffect, useState } from "react"
import colgate from "./colgate.png"
import axios from "axios"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetProduct(){
    
    let {id} = useParams()
    const [title , setTitle] = useState("")
    const [detail ,setDetail] = useState("")
    const [content , setContent] = useState("")
    const [comments , setComments] = useState([])
    const [loading , setLoading] = useState(true)
    const [secondLoading , setSecondLoading] = useState(true);

    let getToken = localStorage.getItem("authorization")

    const AddComment = async()=>{
        setSecondLoading(false)
        await axios.post(`http://localhost:9000/v1/addProduct/makecomment/addCommentToproduct/${id}` , {
            content : content
        } ,
        
        { headers : {
            Authorization : getToken
        }
    
    })
      
    .then(()=>{
       setSecondLoading(true)
       toast.success("Comment Added Successfully , refresh Page to see your comment")

    })

    .catch(()=>{
        toast.error("Something went wrong while adding the comment try to add once more")
    })

    }


    useEffect(()=>{

      let getData =  axios.get(`http://localhost:9000/v1/getProduct/getProductdata/${id}`)

      getData
      .then((respond)=>{
          setTitle(respond.data.title)
          setDetail(respond.data.description)
          setComments(respond.data.comments)
          setLoading(false)
      })

      .catch((error)=>{
        console.log("something went wrong while fetching the data")
      })

    } , [])
   

    return(
        <>

        {loading ? (
        
        <div className="flex  justify-center items-center h-screen bg-black">
            <div className="text-[80px] text-white">Loading......</div>
        </div>

        ) : (
            <>
        <div className="h-[auto] items-center flex flex-row flex-wrap justify-center space-x-11">

          <div className="h-[auto] w-[900px]">
            <div className="flex flex-row justify-center">
            <h1 className=" text-[100px] font-semibold text-violet-600">{title}</h1>
            </div>
           
           <div>
            <p className="p-11 text-red-700">
               {detail}
            </p>
           </div>

          </div>

          <div className="h-[500px] w-[500px]  rounded-2xl flex justify-center items-center">
           <img src={colgate}></img>
          </div>

        </div>

        {/* comment section */}

        <div className="mt-9 h-[auto] w-[full] flex flex-col justify-center">

            <div className="flex flex-row justify-center items-center">
            <h1 className="text-[40px]">Comment Section</h1>
            </div> 

            <div className="flex flex-row justify-center items-center space-x-5 mt-8">

            <input onChange={(e)=>setContent(e.target.value)} className="w-[600px] bg-slate-200 rounded-xl text-black p-4" placeholder="Enter commment"></input>
            <button onClick={AddComment} className="bg-green-500 p-2 rounded-xl text-white w-[250px] text-[25px]">{secondLoading ? "Add Comment" : "Adding Comment"}</button>

            </div>

            <div className="mt-20 text-[30px] p-11 space-y-32 w-[full]">
               {comments && (
                  
                <>
                
                {comments.map((commentValue , index)=>(
              
                <div key={index}>
                    <p><span className="text-red-700">{commentValue.author}</span> --- <span className="text-green-600">{commentValue.content}</span></p>
                </div>
                
              
               ))}


                </>

               )}
            </div>

        </div>

        </>

        )}
        
         <ToastContainer />

            

        </>
    )
}

export default GetProduct