import { ToastContainer, toast } from 'react-toastify';
import styles from './Login.module.css';
import { useState } from 'react';


function Regsiter() {
    const [showPassword, setShowPassword] = useState(false);

    const notify = () => toast.success('Please fill every field to proceed')

    return (
        <>
            <ToastContainer position="bottom-left" autoClose={5000} />

            <div className={`${styles['content']} pb-5`}>
                <form action="" method="post">
                    <div className="form-group mt-2">
                        <label htmlFor="firstname" className="small fw-lighter">Full Name <span className='text-danger'>*</span></label>
                        <div className="row">
                            <div className='col-md-6'>
                                <input 
                                    type="text" 
                                    name="firstname" 
                                    placeholder='First'
                                    id="" 
                                    className='form-control'
                                />
                            </div>
                            <div className='col-md-6'>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder='Last'
                                    id="" 
                                    className='form-control'
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="email" className='small fw-lighter'>Email <span className='text-danger'>*</span></label>
                        <input type="email" name="email" id="" className='form-control' />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="phone" className='small fw-lighter'>Phone Number <span className='text-danger'>*</span></label>
                        <input 
                            type="tel" 
                            name="phone" 
                            className='form-control'
                            id="" 
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="password" className='small fw-lighter'>Password <span className='text-danger'>*</span></label>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        name="password" 
                                        className='form-control' 
                                        id="" 
                                        placeholder='Password'
                                    />
                                    <div className="input-prepend">
                                        <button 
                                            type="button" 
                                            className={`${showPassword ? 'bi-eye-slash' : 'bi-eye'} btn btn-light`}
                                            onClick={() => {
                                                setShowPassword(!showPassword)
                                            }}
                                        >
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="input-group">
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        name="confirm_password" 
                                        className='form-control'
                                        id="" 
                                        placeholder='Confirm password'
                                    />
                                    <div className="input-append">
                                        <button 
                                            type="button"  
                                            className={`${showPassword ? 'bi-eye-slash' : 'bi-eye'} btn btn-light`}

                                            onClick={() => {
                                                setShowPassword(!showPassword)
                                            }}
                                        ></button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <button type="submit" className='btn btn-dark w-100'>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}



export default Regsiter;