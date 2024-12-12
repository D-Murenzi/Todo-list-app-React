import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import {taskContext, notifContext, isFormVisibleContext, isMenuVisibleContext } from './main.jsx'

function Notify(){
    const [notifications, setNotification] = useContext(notifContext);
    
    return (
	<>
	    <div className='notificationIcon'>
		<FontAwesomeIcon className='notIcon' icon={faBell} />
	    </div>
	    <div className='notimessagecontainer'>
		<ul className='notificationlist'>
		    {notifications.map((notification)=>(
			<li key={notification.id} className='linotification'>
			    <div className='realmessagebody'>{notification.message}</div>
			</li>
		    ))}
		</ul>
	    </div>
	</>
    )
}


export default Notify
