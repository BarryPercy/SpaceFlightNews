import { IArticle } from "../interfaces/IArticle"
import { Container, Row, Col } from "react-bootstrap"
import { useEffect } from "react"
import { Link } from "react-router-dom"

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
                                return(
                                    <Link key={article.id} to={"/"+article.id}><p>{article.title}</p></Link>
                                )
                            })}
                        </>
                    </Col>
                </Row>
            </Container>
    )
}

export default ArticleList