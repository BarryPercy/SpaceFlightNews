import { IArticle } from "../interfaces/IArticle"
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { parseISO, format } from "date-fns";

interface ArticleCardProps{
    article:IArticle
}
const ArticleCard = (props: ArticleCardProps)=>{
    const publishDate = props.article.publishedAt.toString()
    const parsedTime = parseISO(publishDate)
    const formattedTime = format(parsedTime,"dd-MM-yyyy")
    return(
        <Card className="main-page-cards">
            <Card.Img className="card-images" variant="top" src={props.article.imageUrl}/>
            <Card.Body>
                <Card.Title><Link to={"/"+props.article.id}><p>{props.article.title}</p></Link></Card.Title>
                <Card.Text>
                    <h4>{formattedTime}</h4>
                </Card.Text>
            </Card.Body>
      </Card>
    )
}

export default ArticleCard