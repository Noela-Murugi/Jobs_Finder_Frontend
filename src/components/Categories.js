import React, { useState, useEffect }from 'react'
import '../categories.css'
import '../PopularJobs.css'
import { useNavigate } from 'react-router-dom'


const Categories = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    const [filter, setFilter] = useState(jobs)
    const [componentMounted, seTComponentMounted] = useState(true) 
    
    useEffect(() => {
      const getProducts = async () => {
        const res = await fetch('http://127.0.0.1:9292/jobs')
        if (componentMounted){
          setJobs(await res.clone().json())
          setFilter(await res.json())
        }

        return () => {
          seTComponentMounted(false)
        }
      }
      getProducts()
    },[componentMounted])


    const filterJobs = (cat) => {
      const updatedList = jobs.filter((x) => x.tag === cat)
      setFilter(updatedList)
    }

    const [query, setQuery] = useState("")

    console.log(query)
    const keys = ["description", "title", "requirements", "tag"]
    const search = (data) => {
    return data.filter((item) => 
            keys.some((key) => 
                item[key].toLowerCase().includes(query)
            )
    )}

    return (
      <div className='category-main'>
        <h1 className='popular'>JOBS</h1>
        <div className='category-buttons'>
          <button onClick={() => setFilter(jobs)}>All</button>
          <button onClick={() => filterJobs("Artificial Intelligence")}>Artificial Intelligence</button>
          <button onClick={() => filterJobs("Software Development")}>Software Development</button>
          <button onClick={() => filterJobs("Cyber Security")}>Cyber Security</button>
          <button onClick={() => filterJobs("Networking")}>Networking</button>
        </div>
        <div className='categories-input'>
          <input
            type={'text'}
            placeholder={'Search'}
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
          />
        </div>
        <div className='jobs-container'>
              <div className="wera-container">
                {search(filter).map((job) =>
                  <div className="wera" key={job.id}>
                      <div>
                          <img src={job.image} alt="job" />
                          <h3>{job.title}</h3>
                          <p>Salary: <span>Kshs. {job.salary}</span></p>
                          <p>{job.description.substring(0,20)}...</p>
                          <button className='btnpp' onClick={() => navigate(`/jobs/${job.id}`)}>View Job</button>
                      </div>
                  </div>
                )}
              </div>
          </div>
      </div>
    )
}

export default Categories
