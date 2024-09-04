import Navbar from "../Navbar/Navbar";

function LandingPage(){
    return(
        <>
        <Navbar></Navbar>
        <div className="flex justify-center items-center h-screen">
                <div className="h-[300px] flex flex-col p-7 w-[800px] relative left-[210px]">
                    <h1 className="text-[60px] font-semibold text-violet-500">The Product Review World</h1>
                    <p className="text-2xl">Welcome to the world of the reviews Search your favourite Product </p>
                   <div>
                    <button className="mt-8 text-4xl bg-blue-400 rounded-2xl p-2 w-[200px] text-yellow-50">Explore</button>
                    <button className="mt-8 text-4xl bg-slate-300 rounded-2xl p-2 w-[200px] ml-10  text-pink-600">Fund Us!!</button>
                   </div>
                </div>
        </div>
         
        </>
    )
}

export default LandingPage
