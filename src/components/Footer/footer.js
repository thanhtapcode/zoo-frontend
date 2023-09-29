import styles from './footer.module.scss';

function Footer() {
    return (<>
        <div className={styles.container}>
            <div className={styles.background}>
                <img src='https://wintang-zoo.s3.ap-southeast-1.amazonaws.com/footer.png' alt=''/>
            </div>
            <div className={styles.text}>
                <h1>Footer</h1>
            </div>
        </div>
    </>);
}

export default Footer;