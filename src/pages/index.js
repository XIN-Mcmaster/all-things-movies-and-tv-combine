import * as React from "react"

import Layout from "../layout/Layout"
import MovieGallery from "../components/MovieGallery"


const IndexPage = () => {

  return (
    <>
      <Layout>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: `calc(var(--size-content) - var(--space-4))`,
            padding: `var(--size-gutter)`,
            minHeight: `70vh`,
          }}
        >
          <div style={{ margin: "0" }}>
            <h1>Search Movies</h1>
          </div>
          <div>
            <MovieGallery />
          </div>
        </div>

      </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
