import PersonData from '../assets/PersonData';

function TopStudents() {
    return (
      <>
        <h2 className="text-center text-xl font-bold h-12 shadow-lg">Our Top Students</h2>
        <div className="p-20 flex gap-20 justify-evenly align-center flex-wrap">
             {/* map */}
             {
                PersonData.map((item,index)=>(
                  <div key={index} className="basis-1/4 h-96 rounded-xl overflow-hidden shadow-lg">
                      <div className=" w-full h-[75%] ">
                          <img src={item.path} className="w-full h-[100%]" alt="student" />
                      </div>
                      <div className="h-[25%] w-full py-2 px-4 bg-gray-300"> 
                        <h1 >Name: <span className=" font-semibold">{item.name}</span></h1>
                        <p >class: <span className=" font-semibold">{item.class}</span></p>
                        <p >Rank: <span className=" font-semibold">{item.rank}</span></p>
                      </div>
                  </div>  
                ))
                }
        
        </div>
      </>
    )
  }
  
  export default TopStudents;
  