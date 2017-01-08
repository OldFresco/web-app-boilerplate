import {Link} from 'react-router'
import React from 'react'

const NotFound = () => (
      <article>
        <h1>Page not found.</h1>
        <Link to='/' className='btn'>Home</Link>
      </article>
)

export default NotFound