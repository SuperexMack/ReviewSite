import Navbar from "../Navbar/Navbar"

function Search(){
    return(
        <>
        <Navbar></Navbar>
        <div className="h-screen flex flex-col items-center">
           <div className="mt-10 flex-wrap relative left-[200px] flex flex-row gap-4 justify-center items-center w-[600px] h-[200px]">
             <input className=" w-[400px] h-[50px] p-4 border-2 border-blue-500 rounded-lg" type="search"></input>
             <button className="bg-slate-300 p-3 rounded-xl ">Search Product</button>
           </div>

        <div className=" flex items-center flex-col  w-[auto] h-[300px] relative left-[150px]">
           <h1 className="mt-[30px] text-7xl font-medium text-violet-700">Search & Know Reality</h1>
           <p className="mt-8 text-[20px]">Search your desired product and get to know it's real review</p>
           <button className="mt-8 text-4xl bg-blue-400 rounded-2xl p-2 w-[200px] text-yellow-50">Explore</button>
        </div>

        </div>
        </>
    )
}
export default Search