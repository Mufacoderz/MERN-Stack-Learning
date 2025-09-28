import React from 'react'

const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form className='box'>
                    <div className="field mt-5">
                        <label  className="label">Name</label>
                        <div className="control">
                            <input type="text" name="" id="" className='input' placeholder='Name' />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label  className="label">Email</label>
                        <div className="control">
                            <input type="text" name="" id="" className='input' placeholder='Email' />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label  className="label">Password</label>
                        <div className="control">
                            <input type="password" name="" id="" className='input' placeholder='*****' />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label  className="label">Confirm Password</label>
                        <div className="control">
                            <input type="password" name="" id="" className='input' placeholder='*****' />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">Register</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
