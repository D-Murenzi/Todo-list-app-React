import { useState, useContext } from 'react'
import {taskContext, notifContext, userContext, isFormVisibleContext, isMenuVisibleContext } from './main.jsx'

function Form(){
    const [isFormVisible, setIsFormVisible, setFormVisibility] = useContext(isFormVisibleContext);
    
    return (
	<>
	    <form className='newtaskform' action='' method='post'>
		<p>
		    <label htmlFor='task'><strong>Task</strong></label>
		    <input id='task' type='text' name='taskName'/>
		</p>
		<p>
		    <label htmlFor='desc'><strong>Description</strong></label>
		    <textarea id='desc' name='taskDescription'></textarea>
		</p>
		<fieldset>
		    <legend ><strong>Scheduled:</strong></legend>
		    <label htmlFor='date'>Date</label>
		    <input id='date' name='taskDate' type='date'/>
		    <br/>
		    <label htmlFor='time'>Planned Time</label>
		    <input id='time' name='taskTime' type='time'/>
		</fieldset>
		<p>
		    <label htmlFor='priority'><strong>Priority:</strong></label>
		    <input id='priority' name='taskPriority' type='range' min='1' max='10' step='1' />
		</p>
		<div className='formbuts'>
		    <p className='button'>
			<button id='formbut' type='submit'><strong>Add Task</strong></button>
		    </p>
		    
		    <p className='button' id='cancelid'>
			<button id='formbut' onClick={(e) => {
				    e.preventDefault();
				    setFormVisibility();
				}
						     }>
			    <strong>cancel</strong>
			</button>
		    </p>
		</div>
	    </form>
	</>	
    )
}

export default Form
