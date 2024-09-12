import {Link} from "react-router-dom";
function Navbar(){ 
    
    return(
        <>
        <div className="fixed w-[450px] h-[100vh] bg-black flex flex-col items-center">

            <div>
              <h1 className="text-5xl mt-[30px] text-violet-600 font-bold">The Review Store</h1>
            </div>

            <div className="flex flex-col items-center justify-center text-3xl cursor-pointer">
               <ul className="space-y-6 font-bold mt-[100px]">
                <li className=" bg-black text-white rounded-2xl p-2"><Link to="/"> Home</Link></li> 
                <li className=" bg-black text-white rounded-2xl p-2"><Link to="/Register"> Login</Link></li>
                <li className=" bg-black text-white rounded-2xl p-2">Contact</li>
                <li className=" bg-black text-white rounded-2xl p-2"><Link to="/addproduct">List your Product</Link></li>
                <li className=" bg-black text-white rounded-2xl p-2"> Support Us</li>
                <li className=" bg-black text-white rounded-2xl p-2"> <Link to="/searchItem"> Search Product</Link></li>
               </ul>
            </div>

        </div>
        </>
    )
}

export default Navbar