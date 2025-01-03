const Slides = ({ image, title, description, tech }) => {
  return (
    <div className="card  ">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tech.map((t, i) => (
            <div key={i} className="badge badge-outline">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slides;
