import React from 'react'
import BannerCard from './BannerCard'


export default function Banner() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <h1>Sell your books</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum quas, cupiditate temporibus laudantium necessitatibus dolores eum similique, obcaecati nisi amet. Odit illum vel nam molestiae, quidem laborum non labore cumque, voluptatum recusandae quisquam itaque quae suscipit quis blanditiis fugiat in voluptatem necessitatibus doloremque laudantium natus? Dolore ex nam dolorum!</p>
            
            <div className='input-group mb-3'>
              <input className='form-control' type="text"></input>
              <button className= 'btn btn-dark'>Search</button>
                
            </div>
            </div>
            <div className='col-md-6'>
              <BannerCard/>
            </div>
            
          
        </div>

    </div>
  )
}
