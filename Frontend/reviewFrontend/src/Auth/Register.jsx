import Navbar from "../Navbar/Navbar"

function Register(){
    return(
        <>
        <Navbar></Navbar>
        <div className="flex justify-center items-center h-screen">

            <div className="bg-slate-200 flex flex-col h-[500px] w-[400px] relative left-[200px] rounded-xl p-6">

                <h1 className="text-4xl mt-2">User Register</h1>
                <div className="flex flex-col space-y-5 p-3">
               <label>E-mail</label>
               <input type="email" className="p-2" placeholder="Email*"></input>
               <label>Password</label>
               <input className="p-2" type="password" placeholder="Password*"></input>
               <label>UserName</label>
               <input type="text" className="p-2" placeholder="UserName*"></input>
               </div>
               <div className="space-x-7 ml-6 mt-3 text-2xl">
                <button className="bg-green-500 p-2 rounded-xl text-white w-[120px]">Register</button>
                <button className="bg-red-500 p-2 rounded-xl text-white w-[120px]">Login</button>
               </div>
            </div>

        </div>
        </>
    )
}

export default Register