import { useState } from 'react'
import './Switch.css'

const Switch = () => {

    const [button, setButton] = useState('')
    const [switcher, setSwitcher] = useState(false)

    const change = () => {
        setSwitcher(!switcher)
        if (!switcher) {
            setSwitcher('change to night')
        }
    }

    const changeDay = () => {
        setSwitcher(!switcher)
        if(!switcher){
            
        }
    }


    return (
        <main>
            <div className='background' style={!switcher ? { backgroundColor: 'grey' } : { backgroundColor: 'white' }}>
                <p style={!switcher? {text:'day'} : {text:'night'}}></p>
                <button onClick={change}>change to day{switcher}</button>
            </div>

        </main>
    )
}
export default Switch;