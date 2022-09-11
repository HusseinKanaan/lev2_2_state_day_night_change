import { useState } from 'react'
import './Switch.css'

const Switch = () => {

    const [button, setButton] = useState('change to day')
    const [switcher, setSwitcher] = useState(false) 

    const change = () => {
        setSwitcher(!switcher)
        if (!switcher) {
            setButton('change to night')
        } else {
            setButton('change to day')
        }

    }


    return (
        <main>
            <div className='background' style={!switcher ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}>
                <p></p>
                <button onClick={change}>{button}</button>
            </div>

        </main>
    )
}
export default Switch;