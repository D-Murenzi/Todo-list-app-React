import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faCalendarWeek, faCalendarDays, faCalendar } from '@fortawesome/free-solid-svg-icons'


function Menufilter() {
    return (
	<>
	    <div className='daysfiltercontainer'>
		<button className='daysfilter'>
		    <FontAwesomeIcon id='todayicon' icon={faCalendarDay} />
		</button>
		<label htmlFor='todayicon'>To Day</label>
	    </div>
	    
	    <div className='daysfiltercontainer'>
		<button className='daysfilter'>
		    <FontAwesomeIcon id='weekicon' icon={faCalendarWeek} />
		</button>
		<label htmlFor='weekicon'>This week</label>
	    </div>
	    
	    <div className='daysfiltercontainer'>
		<button className='daysfilter'>
		    <FontAwesomeIcon id='monthicon' icon={faCalendarDays} />
		</button>
		<label htmlFor='monthicon'>This month</label>
	    </div>
	    <div className='daysfiltercontainer'>
		<button className='daysfilter'>
		    <FontAwesomeIcon id='calendaricon' icon={faCalendar} />
		</button>
		<label htmlFor='calendaricon'>My Calendar</label>
	    </div>
	</>
    )
}

export default Menufilter
