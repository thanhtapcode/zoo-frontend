import styles from './home.module.scss';

function Home() {
    return (<>
        <div className={styles.background}>
            <h1>Background</h1>
        </div>
        
        <div className={styles.animal_card}>
            <h1>Animal Card</h1>
        </div>
    </>);
}

export default Home;