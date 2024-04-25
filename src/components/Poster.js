import React, { useEffect } from "react"
import { Card } from "react-bootstrap";
import "../styles/MoviesGallery.css"
import axios from 'axios';

const apiKey = process.env.GATSBY_OMDB_API_KEY;

export default function PosterDetail({ id }) {

  const [poster, setPoster] = React.useState([]);


  useEffect(() => {
    const getPoster = async () => {

      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
        setPoster(response?.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }


    if (id)
      getPoster().catch(console.error)

  }, [id])



  return (
    <>
      {poster.Poster != "N/A" &&
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={poster.Poster} className="images" />
          <Card.Body>
            <Card.Title><strong>{poster.Title}</strong></Card.Title>
            <Card.Text>
              <div className="ontario-margin-bottom-4-!">Year: {poster.Year}</div>
              <div className="ontario-margin-bottom-4-!">Actors: {poster.Actors}</div>
              <div className="ontario-margin-bottom-16-!">Genre: {poster.Genre}</div>
              <p>{poster.Plot}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </>
  );
}