import { IArticle } from "../interfaces/IArticle"
import { Image } from "react-bootstrap"
import { useEffect } from "react"
import { parseISO, format } from "date-fns";

interface ArticleCardProps{
    article:IArticle
}

const ArticleContent = (props: ArticleCardProps)=>{
    const publishDate = props.article.publishedAt.toString()
    const parsedTime = parseISO(publishDate)
    const formattedTime = format(parsedTime,"dd-MM-yyyy")
    useEffect(() => {
        console.log(props.article)
        }, [])

    return(
        <>
            <Image className="article-image" src={props.article.imageUrl}></Image>
            <h1>{props.article.title}</h1>
            <p>Published: {formattedTime}</p>
            <p>{props.article.summary}</p>
            <p>Source: <strong>{props.article.newsSite}</strong></p>
        </>
    )
}

export default ArticleContent