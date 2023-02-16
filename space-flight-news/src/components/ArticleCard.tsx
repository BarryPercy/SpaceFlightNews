import { IArticle } from "../interfaces/IArticle"
import {Card} from 'react-bootstrap'

interface ArticleCardProps{
    article:IArticle
}
const ArticleCard = (props: ArticleCardProps)=>{
    return(
        <Card>
        <Card.Img variant="top" src=""/>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ArticleCard