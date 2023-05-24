import React from 'react'

export default function Form() {
  return (
    <>
    <div className='container my-3'>
    <div className='row justify-content-center'>
    <div className='col-md-10' style={{border:"2px solid", borderRadius:"50px", padding:"30px", backgroundColor:"#fff"}}>
    
      <form>
        <div class="mb-3">
          <h1>ToDo App</h1>
          <input type="text" class="form-control" id="todo" placeholder='Try typing: Do Exercise'/>
        </div>
        <button type="submit" class="btn btn-primary w-100" style={{borderRadius:"50px", padding:"5px"}}>Submit</button>
      </form>
      </div>
      </div>
      </div>
    </>
  )
}
