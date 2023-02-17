import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import {IArticle} from '../interfaces/IArticle'
import ArticleList from './ArticleList'
import ArticleCard from './ArticleCard'

const MainPage = () => {
  const URL = 'https://api.spaceflightnewsapi.net/v3/articles'
  const [articles,setArticles] = useState<IArticle[]>([])

  const fetchArticles = async () => {
    try {
      let response = await fetch(URL)
      if (response.ok) {
        let newsArticles = await response.json()
        setArticles(newsArticles)
      } else {
        console.log('Error! :(')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <>
        
        <Container fluid>
            <Row>
                <Col lg={5}>
                    <ArticleList articles = {articles}/>
                </Col>
                <Col lg={7}>
                    <Image className="rocket" src="spaceflight.png"></Image>
                </Col>
            </Row>
            <Row>
            {articles.map((article)=>{
                        return(
                            <Col lg={3} key={article.id}><ArticleCard article={article}/></Col>
                        )
                    })}    
            </Row>
        </Container>
    </>
  )
}

export default MainPage
