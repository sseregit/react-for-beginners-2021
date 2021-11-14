import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div>
          <div>
            <img alt={detail.id} src={detail.medium_cover_image} />
          </div>
          <div>
            <h1>{detail.title}</h1>
            <h3>{detail.year}</h3>
            <h3>{detail.rating}</h3>
            <ul>
              {detail.genres.map((value) => (
                <li>value</li>
              ))}
            </ul>
            <p>{detail.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
