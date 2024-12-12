import {createContext, useState, useEffect, useContext } from 'react'
import  { Task, Tasklist } from './task.jsx'
import Header from './header.jsx'
import  { Filter } from './filter.jsx'
import Menufilter from './menufilter.jsx'
import Notify from './notification.jsx'
import Form from './form.jsx'
import {taskContext, notifContext, userContext, isFormVisibleContext, isMenuVisibleContext } from './main.jsx'


function barAnimation(){
    const canva = document.querySelectorAll('.anime');

    for(let a = 0; a < canva.length; a++) {
	let red = 0;
	let green = 0;
	let blue = 50;
	let start = 0;
	let x = 0;
	
	let canvas = canva[a];
	const ctx = canvas.getContext('2d');
	const width = (canvas.width = window.innerWidth);
	const height = (canvas.height = 6);
	
	function Animate() {

		    
	    /*drawing the rectangele anime.*/
	    ctx.fillStyle = `rgb(${red} ${green} ${blue})`;
	    ctx.fillRect(start, 0, x, height);
	    
	    /*updating the variable.*/
	    start = x;
	    x = x + (width/600);
	    red = red + 0.085;
	    green = green + 0.85;
	    blue = blue + 0.85;
	    
	    if(x <= width){
		window.requestAnimationFrame(Animate);
	    }
	};
	Animate();

    }
}

{/*Temporally data for development.*/}

const newtask = [
    {'id':1, 'name':'Fetching water', 'description':'I will go to Kiradiha river and get water'},
    {'id':2, 'name':'cooking beans', 'description':'I will remove stones and put them in boiling water'},
];

const notif = [
    {'id': 1, 'message':'This is the trial notification message you will have to change it in main.jsx file when handling dynamics'},
    {'id':2, 'message':'Another trials my friend I am trying my best to give out the best project as of now'}
]

export function App(){
    console.log('trying the taskContext');
    console.log(useContext(taskContext));
    console.log('end of trial');
    {/*declaring needed variables.*/}
    const [tasklist, setTasklist] = useContext(taskContext);
    const [notiflist, setNotification] = useContext(notifContext);
    const [isFormVisible, setIsFormVisible, setFormVisibility] = useContext(isFormVisibleContext);
    const [isMenuVisible, setIsMenuVisible, setMenuVisibility] = useContext(isMenuVisibleContext);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
	setTasklist(newtask);
	setNotification(notif);
	barAnimation();
    }, [newtask, notif, width]
	     )

    useEffect(()=>{
	window.addEventListener('resize',()=>{
	    setWidth(window.innerWidth);
	});
    }, []);
	      
  
    return (
	<>
	    <header className='wholeheader'>
		<Header />
	    </header>
	    
	    <div id='anime'>
		<canvas className='anime'>
		</canvas>
	    </div>
	    {console.log(isFormVisible)}
	    {/*form section */}
	    {isFormVisible &&
	     <div className='formSec'>
		 <Form />
	     </div>}
	    {/* formend*/}
		
	    <article>
		{/*menufiltersection*/}

		{isMenuVisible &&
		 <section id='menufiltersec' className='menufiltersec'>
		     <div id='menufilters' className='menufilters'>
			 <Menufilter/>
		     </div>
		     <div id='statchart' className='statchart'>
		     </div>
		 </section>}
		{/*end of menufiltersection.*/}
		    
		{/*tasksection */}
		<section className='tasksec'>
		    {/* filters container.*/}
		    <div id='filters' className='allfilters'>
			<Filter/>
		    </div>
		    {/*filter end*/}
		    {/* This is where task list starts.*/}
		    <div id='fulltasklist' className='listoftask'>
			<Tasklist/>
		    </div>
		    {/*end of the list*/}
		</section>
		{/*end of tasksection*/}
	    </article>
	    
	    <div id='anime'>
		<canvas className='anime'>
		</canvas>
	    </div>
	    
	    <article>
		{/*starting of notification section.*/}
		<section className='notificationsec'>
		    <Notify/>
		</section>
		{/*end of  notification section.*/}
	    </article>
	</>
    )
}


