import React from 'react'
import { Link } from 'react-router-dom'
import './Common.css';

const Common = (props) => {
  return (
 <>
   <section id="header" className='d-flex align-items-center'>
   <div className='container-fluid main'>
              <div className='row'>
                <div className='col-10 mx-auto'>
                  <div className='row'>
                  <div className='col-md-5 col-12'>
                    <h1>{props.name}<strong className='brand-name'> Tech Services </strong></h1>
                    <h2 className='my-3'>
                      We are the team of talented making websites
                    </h2>
                    <div className='my-4'>
                      <Link to={props.visit} className='btn-get-started' > {props.btname} </Link>
                    </div>
                  </div>
                  <div className='col-md-5 col-12 mx-auto header-img'>
                   <img src={props.imgsrc} className="img-fluid animated diag" alt='home img'/>
      
                   </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </section>
 </>
  )
}

export default Common
