import { IArticle } from "../interfaces/IArticle"
import { Card } from 'react-bootstrap'

interface ArticleCardProps{
    article:IArticle
}
const ArticleCard = (props: ArticleCardProps)=>{
    return(
        <Card style={{width:'18rem'}}>
            <Card.Img variant="top" src={props.article.imageUrl}/>
            <Card.Body>
                <Card.Title>{props.article.title}</Card.Title>
                <Card.Text>
                    {props.article.summary}
                </Card.Text>
            </Card.Body>
      </Card>
    )
}

export default ArticleCard