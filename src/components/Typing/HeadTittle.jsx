const HeadTittle = ({ heading, tittle }) => {
  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-semibold text-center px-2">
        {heading}
      </h2>
      <p>{tittle}</p>
    </div>
  );
};

export default HeadTittle;
