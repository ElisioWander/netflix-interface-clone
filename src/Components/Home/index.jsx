import { useEffect, useState } from 'react'
import Tmdb from '../../Tmdb'
import { MovieRow } from '../MovieRow/index'
import { FeaturedMovie } from '../FeaturedMovie/index'
import { Header } from '../Header/index'

export function Home() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState()
  const [headerBlack, setHeaderBlack] = useState(false)
  
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList()

      setMovieList(list)
      console.log(list)

      //pegando a featured
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

      console.log(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setHeaderBlack(true)
      } else {
        setHeaderBlack(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header headerBlack={headerBlack} />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} items={item.items} title={item.title} />
          </div>
        ))}
      </section>

      <footer>
        Feito com <span role="img" arial-label="coração">❤️</span> por Elisio Wander
        <br/>
        Direitos de imagem para Netflix
        <br/>
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  )
}