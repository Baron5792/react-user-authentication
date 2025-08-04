import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Login.module.css';
import { ToastContainer, toast } from "react-toastify";


function Login() {

    const [ showPassword, setShowPassword ] = useState(false);
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = Object.values(formData).some(value => value.trim() === '' );
        if (isEmpty) {
            toast.error('All fields are required to proceed, please try again later.', {
                toastId: 'form-error',
                position: 'bottom-left',
                autoClose: 4000
            })
        }

        else {
            toast.success('Login successful', {
                toastId: 'form-success',
                position: 'bottom-center',
                autoClose: 4000
            })
        }

    }

    return (
        <>
            <div className={`${styles['content']}`}>
                <form action="" method='POST' onSubmit={handleSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="email" className='small fw-lighter'>E-Mail <span className='text-danger'>*</span></label>
                        <input type="text" onChange={handleInput} name="email" className='form-control' id="" />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="password" className='small fw-lighter'>Password <span className='text-danger'>*</span></label>
                        <div>
                            <div className="input-group">
                                <input 
                                    type=
                                    {showPassword ? 'text' : 'password'} 
                                    name="password" 
                                    id="password" 
                                    className='form-control'
                                    onChange={handleInput} 
                                />
                                <div className="input-prepend">
                                    <button 
                                        type='button' 
                                        className='btn btn-light text-secondary small'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span                                                        className={showPassword ? 'bi-eye' : 'bi-eye-slash'}
                                        ></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <NavLink className={`text-decoration-none small`}>Forgot your credentials?</NavLink>
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-dark form-control">LOGIN</button>
                    </div>

                    <div>
                        <p className="small text-center mt-4">Powered by Collins</p>
                    </div>
                </form>
            </div>

            <ToastContainer />
        </>
    )
}

export default Login;