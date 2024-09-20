import React from 'react'
import {useRouteError, Link, useNavigate} from "react-router-dom"

//library icon imports
import {HomeIcon, ArrowUturnLeftIcon} from "@heroicons/react/16/solid"
const Error = () => {

  //hook
  const error= useRouteError()
  const navigate = useNavigate()
  return (
    <div className="error">
      <h2> Uh oh! We've got a problem</h2>
      <p> {error.message || error.statusText} </p>

      <div className="flex-md">
        <button className="btn btn--dark" 
        onClick={handleGoBack}>
          <ArrowUturnLeftIcon width={20}/>
          <span>Go Back</span>
         </button>
          <Link
          to="/"
          className="btn btn--dark">
          <HomeIcon width={20}/>
          <span>Go back to Homepage</span>
          </Link>
        
      </div>
    </div>
  )
}

export default Error