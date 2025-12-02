import { Link } from "react-router-dom";
import type { MainPageTypes } from "../types/MainPageTypes";
import type { detailsType } from "../types/detailsTypes";
import { useParams } from "react-router-dom";

type SingleCardProps =
  | { article: MainPageTypes; data?: never }
  | { detail: detailsType; article?: never };

const SingleCard = (props: SingleCardProps) => {
  const item = props.article ?? props.detail;
  const params = useParams();
  return (
    <div className="col col-12 col-md-6">
      <div
        className="card my-3 border-2 border-dark"
        style={{
          backgroundImage: `url(${item.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}>
        <div
          className="card-body fw-bold rounded-5"
          style={{
            color: "white",
            textShadow: `
                        -1px -1px 0 black,
                        1px -1px 0 black,
                        -1px  1px 0 black,
                        1px  1px 0 black
                        `,
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            backgroundColor: "rgba(0,0,0,0.3)",
            overflowY: "auto",
          }}>
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.summary}</p>
          <p>{item.published_at}</p>
          <Link
            className="bg-dark px-3 py-2 rounded-3"
            to={`${params.id ? "/" : item.id}`}>
            Details
          </Link>
        </div>
      </div>
      <div className={`${params.id ? "d-block" : "d-none"}`}>
        <h1>CARLO</h1>
      </div>
    </div>
  );
};

export default SingleCard;
