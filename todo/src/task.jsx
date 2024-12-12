import  { useContext } from 'react';
import {taskContext, isFormVisibleContext, isMenuVisibleContext } from './main.jsx'

function Task(props) {
    return (
	<li className={props.header ? 'headerlist':''}>
	    <div className='taskinfo'>
		<span className={`id ${props.header ? 'header':''}`}>{props.id }.</span>
		<span className={`taskName ${props.header ? 'header':''}`}>{props.name }</span>
		<span className={`desc ${props.header ? 'header':''}`}>{props.description }</span>
	    </div>
	    <div className='buttons'>
		<button className={`completebut ${props.header ? 'headerbut':''}`}>
		    <img src='editicon.png' className={`completeimg ${props.header ? 'headerimg':''}`} />
		    <p className={`completep ${props.header ? 'headerp':''}`}>Edit</p>
		</button>
		<button className={`completebut ${props.header ? 'headerbut':''}`} >
		    <img src='completeicon.png' className={`completeimg ${props.header ? 'headerimg':''}`} />
		    <p className={`completep ${props.header ? 'headerp':''}`}>Mark as complete</p>
		</button>
		<button className={`completebut ${props.header ? 'headerbut':''}`}>
		    <img src='addcommenticon.png' className={`completeimg ${props.header ? 'headerimg':''}`} /> 
		    <p className={`completep ${props.header ? 'headerp':''}`}>Add comment</p>
		</button>
	    </div>
	</li>
    )
}

function Tasklist(){
    const [tasks, setTasks] = useContext(taskContext); 
    const taskpoints = tasks?.map(task => <Task id={task.id} name={task.name} description={task.description} key={task.id}/>);
    

    return (
	<>
	    <h1>My Tasks</h1>
	    <ul className='ul'>
		<Task id='Id' name='Name' description='Description' header/>
		{taskpoints}
	    </ul>
	</>
    );
}
		
							     
							      
export { Task, Tasklist }
