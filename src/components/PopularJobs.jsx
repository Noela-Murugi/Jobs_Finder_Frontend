import React from 'react'
import '../PopularJobs.css'
// import Categories from './Categories'
import Kafile from './Kafile'

export default function PopularJobs() {
  return (
    <div className='Jobs'>
        <Kafile/>
        <div className='jobs-container'>
            <div className="wera-container">
                <div className="wera">
                    <div>
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="job" />
                        <h3>Job Title</h3>
                        <p>Salary: <span>Kshs. 100000</span></p>
                        <p>Job description</p>
                        <button className='btnpp'>View Job</button>
                    </div>
                </div>
                <div className="wera">
                    <div>
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="job" />
                        <h3>Job Title</h3>
                        <p>Salary: <span>Kshs. 100000</span></p>
                        <p>Job description</p>
                        <button className='btnpp'>View Job</button>
                    </div>
                </div>
                <div className="wera">
                    <div>
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="job" />
                        <h3>Job Title</h3>
                        <p>Salary: <span>Kshs. 100000</span></p>
                        <p>Job description</p>
                        <button className='btnpp'>View Job</button>
                    </div>
                </div>
                <div className="wera">
                    <div>
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="job" />
                        <h3>Job Title</h3>
                        <p>Salary: <span>Kshs. 100000</span></p>
                        <p>Job description</p>
                        <button className='btnpp'>View Job</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}