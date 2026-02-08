import styles from "./explore.module.css";

const ExploreCard = ({
    genre,
    artistName,
    description,
    date,
    venue,
    time,
}) => {
    return (
        <article className={styles.card}>
            <span className={styles.genre}>{genre}</span>

            <h3 className={styles.artistName}>{artistName}</h3>

            <p className={styles.description}>{description}</p>

            <div className={styles.meta}>
                <span className={styles.metaItem}>{date}</span>
                <span className={styles.metaItem}>{venue}</span>
                <span className={styles.metaItem}>{time}</span>
            </div>

            <button className={styles.button}>Buy Passes</button>
        </article>
    );
};

export default ExploreCard;
