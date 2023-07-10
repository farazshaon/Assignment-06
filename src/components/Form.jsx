import React from 'react'

const Form = () => {

    const SubmitForm = (e) => {
            alert('Click Me!')
        e.preventDefault()
    }

  return (
    <>
        <div className='form'>
            <form onSubmit={SubmitForm}>
                <input/>
                <button>Send</button>    
            </form>
        </div> 
    </>
  )
}

export default Form
