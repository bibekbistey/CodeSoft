// import React, { useState } from 'react'

// const ToDoContext = React.createContext();

// export const ToDoContextProvider = ({children})=>{

//     const[tasks,settasks]=useState([])

//     const [newtask,setnewtask]=useState("");

//     const [update,setupdate]=useState(null);

//     const [change,setChange]=useState(false);

//     const [markcomplete,setmarkcomplete]=useState(false);

//     // const handlechange=()=>{
//     //     setChange(!change)
//     // }

//     const handlecomplete=(index)=>{
//         settasks(
//             tasks.map((task,i)=>{
//                 if(i===index){
//                     return{
//                      ...task,
//                         markcomplete:!task.markcomplete
//                     }
//                 }
//                 return task;

//             })
//         )
//     }



//     const handletask=(e)=>{
//         setnewtask(e.target.value)
//     }

//     const addtask=()=>{
//         if(newtask===""){
//             alert("Enter a task")
//             return;
            
//         }
//         settasks([...tasks,{ title: newtask, markcomplete: false }])
//         alert("Task Added")
//         setnewtask("")
//     }

//     const deletetask=(index)=>{
//         settasks(tasks.filter((_,i)=>i!==index));
//     }

//     const edittask=(index)=>{
//         const edit=tasks;
//         setnewtask(edit[index].title);
//         setupdate(index);
//         setChange(true);
//     }

//     const updatetask=()=>{
//         if(update!==null){
//             const updatedData=[...tasks];
//             updatedData[update].title=newtask;
//             settasks(updatedData);
//             setnewtask("");
//             setupdate(null);
//             setChange(false);
//             // handlechange();
//         }


//     }

//     // const handleComplete = (index) => {
//     //     const updatedTasks = [...tasks];
//     //     updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle completed state
//     //     settasks(updatedTasks);
//     // }





//     return(
//         <ToDoContext.Provider value={{tasks,handletask,addtask,newtask,deletetask,edittask,updatetask,change,handlecomplete}}>
//             {children}
//         </ToDoContext.Provider>
//     )

// }

// export default ToDoContext




import React, { useState } from 'react';

const ToDoContext = React.createContext();

export const ToDoContextProvider = ({ children }) => {
    const [tasks, settasks] = useState([]);
    const [newtask, setnewtask] = useState("");
    const [update, setupdate] = useState(null);
    const [change, setChange] = useState(false);

    const handletask = (e) => {
        setnewtask(e.target.value);
    };

    const addtask = () => {
        if (newtask === "") {
            alert("Enter a task");
            return;
        }
        settasks([...tasks, { title: newtask, markcomplete: false }]);
        alert("Task Added");
        setnewtask("");
    };

    const deletetask = (index) => {
        settasks(tasks.filter((_, i) => i !== index));
    };

    const edittask = (index) => {
        const edit = tasks;
        setnewtask(edit[index].title);
        setupdate(index);
        setChange(true);
    };

    const updatetask = () => {
        if (update !== null) {
            const updatedData = [...tasks];
            updatedData[update].title = newtask;
            settasks(updatedData);
            setnewtask("");
            setupdate(null);
            setChange(false);
        }
    };

    const handlecomplete = (index) => {
        settasks(
            tasks.map((task, i) => {
                if (i === index) {
                    return {
                        ...task,
                        markcomplete: !task.markcomplete
                    };
                }
                return task;
            })
        );
    };

    return (
        <ToDoContext.Provider value={{ tasks, handletask, addtask, newtask, deletetask, edittask, updatetask, change, handlecomplete }}>
            {children}
        </ToDoContext.Provider>
    );
};

export default ToDoContext;
