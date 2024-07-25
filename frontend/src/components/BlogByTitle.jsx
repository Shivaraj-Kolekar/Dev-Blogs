import React, { useEffect } from 'react'
import axios from 'axios'
function BlogByTitle () {
  function getBlogByTitle () {
    axios
      .get('http://localhost:3000/blogs/:title', {
        params: {
          title: 'title'
        }
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div>
      <button onClick={getBlogByTitle}>getBlogByTitle</button>
    </div>
  )
}

export default BlogByTitle
