import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add this to your main App.js/index.js
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';


function Header() {
    return (
        <>
            <div className={`${styles['header']} container`}>
                <div className="row">
                    <NavLink to={'/'} className={({isActive}) => `text-decoration-none col-md-6  col-6 text-center ${isActive ? styles.isActive : styles.notActive}`}>Login</NavLink>

                    <NavLink to={'/register'} className={({isActive}) => `${isActive ? styles.isActive : styles.notActive} text-decoration-none text-center col-md-6 col-6  text-center `}>Regsiter</NavLink>
                </div>
            </div> 
        </>
    )
}

    
export default Header;
