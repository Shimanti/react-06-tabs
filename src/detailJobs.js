import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import specialty from "./specialty"

export default function Specialties() {
  const data = specialty
  function specialties() {
    console.log("This doesn't work on screen")
    console.log(data[0].title)
    console.log(data[0].info[0])
    data.map(item=>{
      return (
        <article className="job-info">
          <div key={item.id} className="job-desc">
            <h3>{item.title}</h3>
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{item.info}</p>
          </div>
        </article>
      )
    })
    }


  return (
    <div>
      <button
        className="btn"
        onClick={specialties}>
        specialties
      </button>
    </div>
  )
}
