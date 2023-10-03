import React from 'react'
import "./item.css"


const Pagination = ({data,perpage,pageHandler}) => {
  let pageNumbers=[];
  for(let i=1;i<Math.ceil(data.length/6)+1;i++){
    pageNumbers.push(i);
  }

  return (
    <center>
      <div className='pageNumber_container'>
      <span className='nonpageNumber'><i className="fa-solid fa-arrow-right"></i></span>
      {
        pageNumbers.map((each,index)=>{
          return (<span className='PageNumber' key={index} onClick={()=>pageHandler(each)}>{each}</span>)
        })
      }
       <span className='nonpageNumber'><i className="fa-solid fa-arrow-left"></i></span>
    </div>
    </center>
  )
}

export default Pagination












