import { ToastContainer, toast } from 'react-toastify';
import styles from './Login.module.css';
import { useState } from 'react';


function Regsiter() {
    const [showPassword, setShowPassword] = useState(false);
    const [disbaleBtn, setDisableBtn] = useState();

    // validate form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isEmpty = Object.values(formData).some(value => value.trim() === '');
        if (isEmpty) {
            toast.error('All fields are required to proceed, please try again.', {
                toastId: 'form-error',
                position: 'bottom-left',
                autoClose: 3000
            })
        }
        else {
            toast.success('Form has been submitted successfully', {
                toastId: 'form-success',
                position: 'bottom-left',
                autoClose: 3000
            })
        }

        setDisableBtn(true);

        // for submit button
        setTimeout(() => {
            setDisableBtn(false);
        }, 5000)
    }

    return (
        <>
            <div className={`${styles['content']} pb-5`}>
                <form action="" method="post" onSubmit={handleSubmit}>
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
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className='col-md-6'>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder='Last'
                                    id="" 
                                    className='form-control'
                                    onChange={handleInputs}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="email" className='small fw-lighter'>Email <span className='text-danger'>*</span></label>
                        <input 
                            type="email" 
                            name="email" 
                            id="" 
                            className='form-control' 
                            onChange={handleInputs}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="phone" className='small fw-lighter'>Phone Number <span className='text-danger'>*</span></label>
                        <input 
                            type="tel" 
                            name="phone" 
                            className='form-control'
                            id="" 
                            onChange={handleInputs}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="password" className='small fw-lighter'>Password <span className='text-danger'>*</span></label>

                        <div className="col-md-12">
                            <div className="input-group">
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    name="password" 
                                    className='form-control' 
                                    id="" 
                                    placeholder='Password'
                                    onChange={handleInputs}
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


                        <div className="form-group mt-4">
                            <button 
                                type="submit" 
                                className='btn btn-dark w-100'
                                disabled={disbaleBtn}
                            >
                                {disbaleBtn ? 'REGISTERING...' : 'REGISTER'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />

        </>
    )
}



export default Regsiter;