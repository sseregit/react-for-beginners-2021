import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const param = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`
      )
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  }, [param.id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={styles.detail}>
          <img
            src={detail.large_cover_image}
            alt={detail.title}
            className={styles.detail__img}
          />
          <div>
            <h2 className={styles.detail__title}>{detail.title}</h2>
            <h3 className={styles.detail__year}>{detail.year}</h3>
            <p>
              {detail.description_intro.length > 235
                ? `${detail.description_intro.slice(0, 235)}...`
                : detail.description_intro}
            </p>
            <ul className={styles.detail__genres}>
              {detail.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
