import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState, createContext, useContext } from 'react'
import { App } from './App.jsx'


export const taskContext = createContext();
export const notifContext = createContext();
export const userContext = createContext();
export const isFormVisibleContext = createContext(false);
export const isMenuVisibleContext = createContext(true);

export function ContextProvider({children}){

    const [tasklist, setTaskList] = useState([]);
    const [notification, setNotification] = useState([]);
    const [user, setUser] = useState('')
    const [formState, setFormState] = useState('');

    const [isFormVisible, setIsFormVisible] = useState(false);

    function setFormVisibility(){
	setIsFormVisible((prev)=>!prev)
    }

    const [isMenuVisible, setIsMenuVisible] = useState(true);

    function  setMenuVisibility(){
	setIsMenuVisible((prev)=>!prev);
    }
    
    
    return (
	<>
	    <taskContext.Provider value={[tasklist, setTaskList]}>
		<notifContext.Provider value={[notification, setNotification]}>
		    <userContext.Provider value={[user, setUser]}>
			<isFormVisibleContext.Provider value={[isFormVisible, setIsFormVisible, setFormVisibility]}>
			    <isMenuVisibleContext.Provider value={[isMenuVisible, setIsMenuVisible, setMenuVisibility]}> 
				{children}
			    </isMenuVisibleContext.Provider>
			</isFormVisibleContext.Provider>
		    </userContext.Provider>
		</notifContext.Provider>
	    </taskContext.Provider>
	</>
	
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
	<ContextProvider>
	    <App/>
	</ContextProvider>
  </StrictMode>,
);

