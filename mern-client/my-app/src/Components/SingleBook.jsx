import React,{useState} from 'react'
import { useParams } from 'react-router-dom'



export default function SingleBook() {
  const theme = {
    colors: {
      background: '#ffffff', // Replace with your background color
    },
  };
  const {id} = useParams()
  const [book,setBook] = useState(null)
 


  return (
    <>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <img src=""/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">Title: ABC</h5>
            <p className="card-text">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et reprehenderit earum facere ab quod vero, sequi cumque pariatur, fugit eius tempora, animi numquam ipsa voluptatem officia quidem. Dolore accusamus voluptatibus laudantium quas cupiditate esse dolor officiis amet ratione ducimus deleniti ipsum libero sapiente, nobis eaque deserunt doloremque. Sunt, molestiae sit.

            </p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
