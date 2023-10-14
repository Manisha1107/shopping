function Navbar(){
    return(
        <div className="flex flex-row justify-between mt-5 ">
            <div>
        <span className=" text-sm mt-10 md:text-2xl md:ml-10 text-slate-900 md:mb-10 md:mt-10  ">Shop</span>
            <h1 className=" text-sm md:ml-10 text-slate-300   ">Searching 40 of 14050</h1>
            </div>
            <div  className="flex flex-row justify-around mr-10 mt-10  md:mr-15 md:mt-10 ">
                <div className="text-slate-900  text-sm  md:mr-4 md:text-xl " >Sort</div>
                <div className="text-slate-900 ml-5 text-sm md:text-xl">newest</div>
                </div>
                </div>
            

    );
    }

export default Navbar;