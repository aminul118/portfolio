import { Link } from "react-router";
const Slides = ({
  image,
  title,
  description,
  tech,
  liveLink,
  detailsLinks,
}) => {
  return (
    <div className="card bg-slate-200 ">
      <figure>
        <img className="h-64 object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tech?.map((t, i) => (
            <div key={i} className="badge badge-outline">
              {t}
            </div>
          ))}
        </div>
        <div className="space-x-4 flex justify-center">
          <Link to={liveLink}>
            <button className="btn btn-outline">Live Link</button>
          </Link>
          <Link to={detailsLinks}>
            <button className="btn btn-warning">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slides;
