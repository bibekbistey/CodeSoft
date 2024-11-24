import React, { useContext } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import ToDoContext from '../context/ToDoContext';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import { TiTick } from "react-icons/ti";


const ToDo = () => {
    const task=useContext(ToDoContext);
  return (
    <div className='max-w-[1200px] mt-5 bg-black mx-auto h-[90vh]'>
        <div>
            <h1 className='text-5xl p-4 font-mono text-white font-bold text-center mt-5'>
                To Do Tracker
            </h1>
        </div>
        
        <div className='flex justify-center mt-5'>
            <input value={task.newtask} onChange={task.handletask} className='p-2 rounded-xl max-w-[400px] ' type="text" placeholder='Enter your task...'></input>
            <IoIosAddCircleOutline onClick={()=>{task.addtask(task.newtask)}} className='text-red-200 w-8 h-8 items-center mx-5 mt-1 hover:scale-125' />
        </div>
        <div className='text-red-600 justify-center mt-10 max-w-[1000px] mx-auto '>
            <ul className='w-1/2 font-mono capitalize mx-auto '>
                {task.tasks.map((t,index)=>
                    <li key={index} className={`p-3 mt-4 bg-gray-300 rounded-lg flex items-center justify-between my-5 ${t.markcomplete ? 'line-through text-gray-500' : ""}`}>
                       
                        <h1 className='mx-5 capitalize'>{t.title}</h1>
                        <div className='flex mr-5'>
                            <MdDelete className='w-5 h-5 mr:3 md:mr-8' onClick={()=>{task.deletetask(index)}}/>
                            {!task.change?<FaEdit className='h-5 w-4 mr:3 md:mr-8' onClick={()=>{task.edittask(index)}}/>:<MdSystemUpdateAlt className='h-5 w-5 mr:3 md:mr-8' onClick={()=>{task.updatetask(index)}}/>}
                            
                            
                            <TiTick className={`h-5 w-5 ${t.markcomplete?'text-green-500':'text-gray-500'}`} onClick={()=>{task.handlecomplete(index)}} />
                        </div>
                        
                    </li>
                    
                    
                )}

            </ul>
            
        </div>
    </div>
  )
}


export default ToDo




// import React, { useContext } from 'react'
// import { IoIosAddCircleOutline } from "react-icons/io";
// import ToDoContext from '../context/ToDoContext';
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import { MdSystemUpdateAlt } from "react-icons/md";
// import { TiTick } from "react-icons/ti";

// const ToDo = () => {
//     const task = useContext(ToDoContext);

//     return (
//         <div className='max-w-[1200px] mt-5 bg-black mx-auto h-[90vh]'>
//             <div>
//                 <h1 className='text-5xl p-4 font-mono text-white font-bold text-center mt-5'>
//                     To Do Tracker
//                 </h1>
//             </div>
            
//             <div className='flex justify-center mt-5'>
//                 <input value={task.newtask} onChange={task.handletask} className='p-2 rounded-xl max-w-[400px]' type="text" placeholder='Enter your task...'></input>
//                 <IoIosAddCircleOutline onClick={() => task.addtask(task.newtask)} className='text-red-200 w-8 h-8 items-center mx-5 mt-1 hover:scale-125' />
//             </div>
            
//             <div className='text-red-600 justify-center mt-10 max-w-[600px] mx-auto'>
//                 <ul className='w-1/2 font-mono capitalize mx-auto'>
//                     {task.tasks.map((t, index) => (
//                         <li key={index} className={`p-3 mt-4 bg-gray-300 rounded-lg flex items-center justify-between my-5 ${t.markcomplete ? 'line-through text-gray-500' : ""}`}>
//                             <h1 className='mx-5'>{t.title}</h1>
//                             <div className='flex mr-5'>
//                                 <MdDelete className='w-5 h-5 mr-8' onClick={() => task.deletetask(index)} />
//                                 {!task.change ? (
//                                     <FaEdit className='h-5 w-4 mr-8' onClick={() => task.edittask(index)} />
//                                 ) : (
//                                     <MdSystemUpdateAlt className='h-5 w-5 mr-7' onClick={() => task.updatetask(index)} />
//                                 )}
//                                 <TiTick className={`h-5 w-5 ${t.markcomplete ? 'text-green-500' : 'text-gray-500'}`} onClick={() => task.handlecomplete(index)} />
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default ToDo;
