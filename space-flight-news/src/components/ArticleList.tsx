import { IArticle } from "../interfaces/IArticle"
import { Container, Row, Col } from "react-bootstrap"
import { useEffect } from "react"

interface ArticleListProps{
    articles:IArticle[]
}


const ArticleList = (props: ArticleListProps)=>{
    useEffect(() => {
        console.log(props.articles)
      }, [props.articles])
    return(
            <Container>
                <Row>
                    <Col lg={6}>
                        <>
                        {props.articles.map((article)=>{
                            {article.title}
                        })}
                        </>
                    </Col>
                </Row>
            </Container>
    )
}

export default ArticleList