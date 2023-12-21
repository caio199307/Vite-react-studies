import Navigation from './nav'

const Header = () => {

    const onChangeHandler = (event) => {
        console.log(event.target.value)
    }

    return(
        <header>
            <div className="logo">
                Awesome news
            </div>
            <input onChange={onChangeHandler}/>
            <Navigation></Navigation>
        </header>
    )
}

export default Header