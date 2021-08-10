import {useState} from 'react'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import './style.css'

interface MovieRowProps {
  items: {
    results: [{
      poster_path: string,
      original_title: string
    }]
  },
  title: string
}

export function MovieRow({ items, title }: MovieRowProps) {
  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)

    if(x > 0) {
      x = 0
    }

    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listWidth = items.results.length * 150

    if((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60
    }
    setScrollX(x)
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left" onClick={handleLeftArrow} >
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow-right">
        <NavigateNextIcon style={{fontSize: 50}} onClick={handleRightArrow} />
      </div>
      <div className="movieRow-listArea">
        <div className="movieRow-list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow-item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}