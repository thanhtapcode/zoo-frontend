import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import LoginForm from '../LoginForm/loginform';
import { useState } from 'react';

function Header() {
    const[open, setOpen] = useState(false);
    return (<>
        <header className={styles.container}>
            <div className={styles.logo}>
                <img src='https://wintang-zoo.s3.ap-southeast-1.amazonaws.com/croc.jpg' alt=''/>
            </div>
            <div className={styles.navwrap}>
                <div className={styles.navbar}>
                    <Link to="/" className={styles.navitem}>Home</Link>
                    <Link to="/news" className={styles.navitem}>News</Link>
                    <Link to="/animals" className={styles.navitem}>Animals</Link>
                    <Link to="/gallery" className={styles.navitem}>Gallery</Link>
                    <Link to="/about" className={styles.navitem}>About</Link>
                </div>
            </div>
            <div className={styles.login}>
                <Link onClick={() => setOpen(true)} className={`${styles.loginitem} ${styles.js_open}`}>Log In</Link>
            </div>
        </header>
        
        {open && <LoginForm open={setOpen}/>}

    </>);
}

export default Header;