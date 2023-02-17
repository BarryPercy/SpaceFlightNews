import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav'
import Article from './components/Article'

function App() {
  return(
  <BrowserRouter>
          <TopNav/>
          <Routes>
            <Route
                path="/"
                element={<MainPage/>}
              />
            <Route
                path="/:id"
                element={<Article/>}
              />
          </Routes>
    </BrowserRouter>
  )
}

export default App;
