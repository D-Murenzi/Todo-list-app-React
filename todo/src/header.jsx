import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

function time(){
    const now = new Date();
    const obj = { weekday:'short', day:'2-digit', month:'short', year:'2-digit', hour:'2-digit', minute:'2-digit' }
    const dateparts = Intl.DateTimeFormat([],obj).formatToParts(now);

    const weekday = dateparts.find(part => part.type==='weekday').value;
    const day = dateparts.find(part => part.type==='day').value;
    const month = dateparts.find(part => part.type==='month').value;
    const year = dateparts.find(part => part.type==='year').value;
    const hour = dateparts.find(part => part.type==='hour').value;
    const minute = dateparts.find(part => part.type==='minute').value;

    const date = { 'weekday':weekday, 'day':day, 'month':month, 'year':year, 'hour':hour, 'minute':minute }

    return date;
}


function Header(){
    let user = {'firstName':'David', secondName:'MURENZI', 'initials':'M.D'}

    let [date, setDate] = useState(time())
    
    useEffect(() => {
	setInterval(()=>{
	    setDate(time());
	}, 1000);
    }, []);


    return (
	<>
	    <section className='datetimesec'>
		<div className='dateonly'>Date: {date.weekday}, {date.day} {date.month} {date.year}</div>
		<div className='timeonly'>Time: {date.hour}:{date.minute}</div>
	    </section>
	    <section className='searchsec'>
		<form>
		    <input className='searchInput' type='search' name='searchFilter'/>
		    <button type='submit' className='searchBut'>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		    </button>
		</form>
	    </section>
	    <section className='usersec'>
		<span className='userName'>{user.firstName}</span>
		<span className='initials'>{user.initials}</span>
	    </section>
	</>
    )
}

export default Header
