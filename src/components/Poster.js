import React, { useEffect} from "react"
import { Card } from "react-bootstrap";
import "../styles/MoviesGallery.css"


export default function PosterDetail({ id }) {

  const [poster, setPoster] = React.useState([]);


  useEffect(() => {
    const getPoster = async () => {
      const res = await fetch(
        `${process.env.GATSBY_BACKEND_URL}/api/movies/getPoster?id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const json = await res.json()
      setPoster(json?.data)
    }


    if (id)
      getPoster().catch(console.error)

  }, [id])

//   const [thumbUpBtn, setThumbUpBtn] = React.useState(false)
//   const [thumbUpNum, setThumbUpNum] = React.useState(kudos?.likes)

//   const handleThumbUp = async () => {
//     const clickType = thumbUpBtn ? "dislike" : "like"

//     try {
//       const accessToken = await fetchToken(accounts[0], instance)
//       await fetch(`${process.env.GATSBY_BACKEND_URL}/api/kudos/thumbup/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify({
//           name: user,
//           type: clickType,
//         }),
//       })
//     } catch (error) {
//       console.error(error)
//     }
//     thumbUpBtn ? setThumbUpNum(thumbUpNum - 1) : setThumbUpNum(thumbUpNum + 1)
//     setThumbUpBtn(!thumbUpBtn)
//   }

//   React.useEffect(() => {
//     setThumbUpBtn(kudos?.people?.includes(userID) ? true : false)
//   }, [kudos?.people, userID])



//   const KudoClicked = () => {
//     clickedKudo(id)
//   }


  return (

      <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={poster.Poster} className="images"/>
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

  );
}