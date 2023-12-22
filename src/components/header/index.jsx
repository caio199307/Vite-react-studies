import { useState } from 'react'
import Navigation from './nav'

const Header = (props) => {
    let [active, setActive] = useState('active')
    let [keywords, setKeywords] = useState('')

    /* const onChangeHandler = (event) => {
        const value = event.target.value === '' ? 'active' : 'not-active'
        setKeywords(event.target.value)

        setActive(value)
    } */

    console.log(props)

    return(
        <header className={active}>
            <div className="logo">
                Awesome news
            </div>
            <input onChange={props.getKeywords}/>
            {/* the Keywords are: {keywords} */}
            <Navigation></Navigation>
        </header>
    )
}

export default Header