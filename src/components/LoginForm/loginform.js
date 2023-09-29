import '../../assests/themify-icons.css';
import styles from './loginform.module.scss';

function LoginForm({ open }) {
    return (<>
        <div className={`${styles.overlay}`}>
            <div className={styles.modal}>
                <div className={styles.close} onClick={() => open(false)}>
                    <i className='ti-close'></i>
                </div>

                <h1>Login</h1>

                <div className={styles.form}>

                    <div className={styles.field}>
                        <label for='' className={styles.label}>
                            <i className='ti-user'></i>
                            <div className={styles.title}>Username</div>
                        </label>
                        <input type='text' className={styles.input} placeholder='Username'></input>
                    </div>

                    <div className={styles.field}>
                        <label for='' className={styles.label}>
                            <i className='ti-lock'></i>
                            <div className={styles.title}>Password</div>
                        </label>
                        <input type='password' className={styles.input} placeholder='Password'></input>
                    </div>

                    <button id='login'>Login</button>
                </div>
                <div className={styles.footer}></div>
            </div>
        </div>
    </>);
}

export default LoginForm;