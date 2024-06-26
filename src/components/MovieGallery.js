import * as React from "react"
import { useState, useEffect } from "react"
import Masonry from "react-masonry-css"
import "../styles/MoviesGallery.css"
import Loading from "./Loading"
import PosterDetail from "./Poster"
import axios from 'axios';

const apiKey = process.env.GATSBY_OMDB_API_KEY;

const MovieGallery = ({  }) => {

  const [tinput, settInput] = React.useState("")
  const [yinput, setyInput] = React.useState("")
  const [keyword, setKeyword] = useState("")
  const [year, setYear] = useState("")
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = useState([])
  const [page,setPage] =useState(1)

  const [loadmore, setLoadmore] = React.useState(false)



  const gridColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


  const handleTtileSearch = event => {
    settInput(event.target.value)
  }

  const handleYearSearch = event => {
    setyInput(event.target.value)
  }


  const handleSearch = () => {
    setKeyword(tinput)
    setYear(yinput)
    setPage(1)
    setLoading(true)
    setData([])
  }

  useEffect(() => {

    const handleScroll = () => {
      if (document.documentElement.offsetHeight - window.scrollY - window.innerHeight <= 200) {
        setLoadmore(true)
      } else {
        setLoadmore(false)
      }
    };


    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (loadmore) {
      setPage((current) => current + 1)
    }
  }, [loadmore])

  useEffect(() => {
    const fetchMovies = async () => {
      if (keyword) {

        try {
          const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&y=${year}&page=${page}`);
          // setData(response.data.Search);
          const res= response.data.Search.filter(value=>value.Poster!=="N/A")
          setData((predata) => [...predata, ...res]);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);

        }
       
      } else {
        try {
          const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=Ted&page=${page}`);
          // setData(response.data.Search);
          const res= response.data.Search.filter(value=>value.Poster!=="N/A")
          setData((predata) => [...predata, ...res]);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }

      }
    }
    fetchMovies();
  }, [keyword, year,page])

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
              <label className="ontario-label" htmlFor="text-input-example">
                Title<span className="ontario-label__flag"></span>
              </label>
              <input className="ontario-input" type="text" id="text-input-example" onChange={handleTtileSearch} />
            </div>
            <div className="ontario-form-group search-input" style={{ marginRight: "var(--space-2)" }}>
              <label className="ontario-label" htmlFor="text-input-example">
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