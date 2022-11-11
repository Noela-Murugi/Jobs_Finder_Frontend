import React, { useState, useEffect }from 'react'
import '../categories.css'
import '../PopularJobs.css'
import { useNavigate } from 'react-router-dom'


const Categories = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    const [filter, setFilter] = useState(jobs)
    const [loading, setLoading] = useState(false)
    let componentMounted = true 
    
    // useEffect(() => {
    //   fetch('http://127.0.0.1:9292/jobs')
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data))
    // },[])

    useEffect(() => {
      const getProducts = async () => {
        setLoading(true)
        const res = await fetch('http://127.0.0.1:9292/jobs')
        if (componentMounted){
          setJobs(await res.clone().json())
          setFilter(await res.json())
          setLoading(false)
        }

        return () => {
          componentMounted = false
        }
      }
      getProducts()
    }, [])


    const filterJobs = (cat) => {
      const updatedList = jobs.filter((x) => x.tag === cat)
      setFilter(updatedList)
    }




  const [search, setSearch] = useState('')
  const filteredList = jobs.filter(list => list.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='category-main'>
      <h1 className='popular'>JOBS</h1>
      <div className='category-buttons'>
        <button onClick={() => filterJobs("Artificial Intelligence")}>Artificial Intelligence</button>
        <button onClick={() => filterJobs("Software Development")}>Software Development</button>
        <button onClick={() => filterJobs("Cyber Security")}>Cyber Security</button>
        <button onClick={() => filterJobs("Networking")}>Networking</button>
      </div>
      <div className='categories-input'>
        <input
          type={'text'}
          placeholder={'Search'}
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div className='jobs-container'>
            <div className="wera-container">
              {filter.map((job) =>
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
