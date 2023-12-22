import NewsListItem from "./news_list_item"

const NewsList = (props) => {
    console.log(props)
    const newsHandler = props.news.map(item => (
        <NewsListItem key={item.id} item={item}></NewsListItem>
    ));
    return(
        <>
            {newsHandler}
            {props.children}
        </>
    )
}

export default NewsList