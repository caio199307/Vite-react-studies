
const Header = () => {

    const onChangeHandler = (event) => {
        console.log(event.target.value)
    }

    return(
        <header>
            <div className="logo" onClick={()=> console.log("click")} onPointerEnter={e => console.log('onPpointerEnter')}>
                Logo
            </div>
            <input onChange={onChangeHandler} onFocus={e => console.log('on focus')} onBlur={e => console.log('on blur')} />
        </header>
    )
}

export default Header