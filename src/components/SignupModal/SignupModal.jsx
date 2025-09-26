import React from 'react'

const SignupModal = () => {
  return (
    <div>
        <div className='modal fade' id='signupModal' tabIndex= "-1" aria-labelledby='signupModalLabel' aria-hidden="true">
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content p-4'>
              <div className='modal-header border-0'>
                <h5 className='modal-title fw-bold' id='signupModalLabel'>Sign Up</h5>
                <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type="text" className='form-control' placeholder='Enter your name' required/>
                  </div>

                  <div className='mb-3'>
                    <label className='form-label'>Email Address</label>
                    <input type="email" className='form-control' placeholder='Enter email address' required/>
                  </div>

                  <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control' placeholder='Enter password' required/>
                  </div>

                  <p className='text-muted'>
                    By sign up, you agree to our <a href="#" className='text-success text-decoration-none'>Terms</a> & <a href="#" className='text-success text-decoration-none'>Privacy Policy</a>
                  </p>

                  <button type='button' className='btn btn-dark w-100'>Sign Up</button>

                </form>

                <div className='text-center mt-3'>
                  <p>Alreay have an account? <a href="#" className='text-success fw-bold'>Sign In</a> </p>
                </div>

              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default SignupModal