import * as React from "react"
import { useState, useEffect } from "react"
import Masonry from "react-masonry-css"
import "../styles/MoviesGallery.css"
import Loading from "./Loading"
import PosterDetail from "./Poster"

const MovieGallery = ({ onLike, searchType }) => {

  const [tinput, settInput] = React.useState("")
  const [yinput, setyInput] = React.useState("")
  const [keyword, setKeyword] = useState("")
  const [year, setYear] = useState("")
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = useState([])


  const gridColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


  const handleTtileSearch = event => {
    settInput(event.target.value)
  }

  const handleYearSearch = event =>{
    setyInput(event.target.value)
  }


  const handleSearch = () => {
    setKeyword(tinput)
    setYear(yinput)
    setLoading(true)
    setData([])
  }

  useEffect(() => {
    const fetchMovies = async () => {
      if (keyword) {
        const body = {
          keyword: keyword,
          year: year,
        }

        const res = await fetch(
          `${process.env.GATSBY_BACKEND_URL}/api/movies/search`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const json = await res.json()
        setData(json?.data);
        setLoading(false)
      } else {
        const res = await fetch(
          `${process.env.GATSBY_BACKEND_URL}/api/movies/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const json = await res.json()
        console.log(' json?.data = ', json?.data)
        setData(json?.data);
      }
    }
    fetchMovies();
  }, [keyword, searchType])

  console.log(data)

  return (
    <>
      <div className="ontario-row">
        <div style={{ display: "flex", flexDirection: "column", marginTop: `var(--space-2)`, }}>
          <h5>
            Search Movies<span className="ontario-label__flag">(optional)</span>
          </h5>

          <div style={{ display: "flex" }}>
            <div className="ontario-form-group search-input" style={{ marginRight: "var(--space-2)" }}>
              <label className="ontario-label" for="text-input-example">
                Title<span className="ontario-label__flag"></span>
              </label>
              <input className="ontario-input" type="text" id="text-input-example" onChange={handleTtileSearch} />
            </div>
            <div className="ontario-form-group search-input" style={{ marginRight: "var(--space-2)" }}>
              <label className="ontario-label" for="text-input-example">
                Year<span className="ontario-label__flag"></span>
              </label>
              <input className="ontario-input" type="text" id="text-input-example" onChange={handleYearSearch} />
            </div>
            <button
              className="ontario-button ontario-button--secondary"
              style={{ marginBottom: 0, margin: 'auto' }}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: `var(--space-4)` }}>
        {loading ? (
          <Loading />
        ) : (
          <Masonry
            breakpointCols={gridColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data &&
              data?.map(item => (
                <div key={item.imdbID}>
                  <PosterDetail id={item.imdbID} />
                </div>
              ))}
          </Masonry>
        )}


      </div>
    </>
  );

}

export default MovieGallery