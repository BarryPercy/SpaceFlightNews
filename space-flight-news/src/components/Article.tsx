import { IArticle } from "../interfaces/IArticle"
import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import ArticleContent from './ArticleContent'

const Article = ()=>{
    const URL = 'https://api.spaceflightnewsapi.net/v3/articles/'
    const [article,setArticle] = useState<IArticle>()
    const params = useParams<{ id: string }>()
    const location = useLocation()
    const fetchArticle = async () => {
        try {
          let response = await fetch(URL+params.id)
          if (response.ok) {
            let newsArticles = await response.json()
            setArticle(newsArticles)
          } else {
            console.log('Error! :(')
          }
        } catch (error) {
          console.log(error)
        }
    }
    useEffect(() => {
    fetchArticle()
    }, [])

    return(
        <>
            {article? <ArticleContent article = {article} />:""}
        </>
    )
}

export default Article