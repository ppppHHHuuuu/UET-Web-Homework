import {useEffect, useRef, useState} from 'react'
import { DatePicker, Input, Alert } from 'antd';

export default function Home() {
    const mountedRef = useRef(-1)                 // ← the "flag"

    const [date, setDate] = useState('2003-21-12');
    const [showAlert, setShowAlert] = useState(false)
    
    function onSelectDate(_, dateString) {
        setDate(dateString);
    }

    useEffect(() => {
        console.log(mountedRef.current)
        if (mountedRef.current >= 0){                // ← the trick
            setShowAlert(true)
            const timer = setTimeout(() => {
                setShowAlert(false);  
            }, 2000)

            return (() => clearTimeout(timer))
        }
    }, [date])
    useEffect(() => {
        mountedRef.current += 1
      }, [])
    
    return (
    <>    
        <div style={{display: "flex", flexDirection: 'column', maxWidth: '1000px', justifyContent: 'center', alignItems: 'center'}}>
            <h2> Choosing date cause input field data change (using useState) </h2>
            && 
            <h2>alert to pop up for 2s (using useEffect)</h2>
            <span>ANTD DatePicker</span><DatePicker placeholder="select date" onChange={onSelectDate}/>
            <span>ANTD Input</span><Input size="large" placeholder="large size" value={date} style={{ display:"inline", maxWidth: '300px' }}/>
            {showAlert && <Alert message="Success Pick Date" type='success' />}
        </div>
    </>
    )
}