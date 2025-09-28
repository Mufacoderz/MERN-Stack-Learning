import React from 'react'

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form className='box'>
                    <div className="field">
                        <label  className="label">Email or Username</label>
                        <div className="control">
                            <input type="text" name="" id="" className='input' placeholder='Username' />
                        </div>
                    </div>
                    <div className="field">
                        <label  className="label">Password</label>
                        <div className="control">
                            <input type="password" name="" id="" className='input' placeholder='*****' />
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-success is-fullwidth">Login</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
