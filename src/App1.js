import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import jobs from "./jobs"

function App() {
  const [job, setJob] = useState(jobs)
  const [value, setValue] = useState(0)
  const {aka, info, links} = job[value]

  const [specialty, setSpecialty] = useState(specialty)

  return (
    <section className="section">
      <div className="title">
        <h2>software related jobs</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
        { job.map((item,index) => {
            return (
              <button
                key={item.id}
                onClick={()=>setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
                >
                {item.title}
              </button>
          )
        })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{aka}</h3>
          {info.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
