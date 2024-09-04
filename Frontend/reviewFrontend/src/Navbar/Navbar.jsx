function Navbar(){
    return(
        <>
        <div className="fixed w-[450px] h-[100vh] bg-black flex flex-col items-center">

            <div>
              <h1 className="text-5xl mt-[30px] text-violet-600 font-bold">The Review Store</h1>
            </div>

            <div className="flex flex-col items-center justify-center text-3xl cursor-pointer">
               <ul className="space-y-6 font-bold mt-[100px]">
                <li className=" bg-black text-white rounded-2xl p-2"><i class="fa-solid fa-house"></i>  Home</li> 
                <li className=" bg-black text-white rounded-2xl p-2"><i class="fa-solid fa-lock"></i>  Login</li>
                <li className=" bg-black text-white rounded-2xl p-2"><i class="fa-solid fa-phone"></i> Contact</li>
                <li className=" bg-black text-white rounded-2xl p-2"><i class="fa-solid fa-shop"></i>List Your Product</li>
                <li className=" bg-black text-white rounded-2xl p-2"><i class="fa-regular fa-face-smiling-hands"></i> Support Us</li>
                <li className=" bg-black text-white rounded-2xl p-2"><i class="fa-solid fa-arrow-right-to-bracket"></i >  Join us</li>
               </ul>
            </div>

        </div>
        </>
    )
}

export default Navbar