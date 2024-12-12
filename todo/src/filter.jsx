import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import {taskContext, isFormVisibleContext, isMenuVisibleContext } from './main.jsx'

export function Filter(){

    const [isFormVisible, setIsFormVisible, setFormVisibility] = useContext(isFormVisibleContext);
    const [isMenuVisible, setIsMenuVisible, setMenuVisibility] = useContext(isMenuVisibleContext);
    const [tasklist, setTasklist] = useContext(taskContext);
    
    const [filters, setFilters] = useState({
	all:true,
	active:true,
	completed:false,
	deleted:false,
	flagged:false
    });

    
    {/*this function handles filters object. this helps before fetching coresponding tasks*/}
    function filterHandler(event){
	const { name, checked } = event.target;
	setFilter((prev)=>({...prev, [name]: checked}));
	fetchFilteredTasks();
    }

    async function fetchFilteredTasks(){
	try {
	    const response = await fetch('http://localhost:5000', {
		method:"POST",
		headers:{
		    "Content-Type":"application/json",
		},
		body:JSON.stringify(filters),
	    });

	    if (!response.ok){
		throw new Error(`Failed to fetch tasks: ${response.status}`);
	    }

	    const filteredTask = await response.json();

	    {/* this is where you will  use the context to update tasks state*/}
	    setTaskList(filteredTask);
	    
	} catch (error) {
	    alert('Sorry, we couldn\'t load you tasks! try reloading a page.');
	    console.log(`Failed to load task due to this error:${error.message}`);
	}
    }

    return (
	<>
	    <section className='menubut' >
		<div className='filterbuttons' onClick={setMenuVisibility}>
		    <FontAwesomeIcon icon={faBars} />
		</div>
	    </section>
	    
	    <section className='filterwrapper'>
		{console.log(Object.keys(filters))}
		{Object.keys(filters).map((filter) => (
		    <div className='filterbuttons' key={filter}>
			<input
			    className='circularbut'
			    type='checkbox'
			    name={filter}
			    checked={filters[filter]}
			    onChange={filterHandler}>
			</input>
			<label htmlFor={filter}>
			    {filter.charAt(0).toUpperCase()+filter.slice(1)}
			</label>
		    </div>
		))}
	    </section>
	    
	    <section className='addtaskbut' >
		<div className='newTaskButton'>
		    <button className='newTaskBut' onClick={setFormVisibility}>
			<div>+</div>
			<div>Add Task</div>
		    </button>
		</div>
	    </section>
	</>
    )
}

