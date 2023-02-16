import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {IArticles} from '../interfaces/IArticle'
import ArticleList from './ArticleList'
import ArticleCard from './ArticleCard'

const MainPage = () => {
  const URL = 'https://api.spaceflightnewsapi.net/v3/articles'
  const [articles,setArticles] = useState<IArticles[]>([])

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
        <ArticleList articles = {articles}/>
        <ArticleCard article={articles[0]}/>    </>
  )
}

export default MainPage
