

const JobCategoryCard = ({ job }) => {
    const {id,category_name,availability,logo} = job
    return (
        <div className=" bg-[#7E90FE] rounded-2xl  bg-opacity-5 w-[311px] h-[243px] ">
  <figure className="ml-10 mt-10">
    <img
      src={logo}
      alt={`cannot find image of ${category_name}`} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{category_name}</h2>
    <p>{availability}</p>
  </div>
</div>
    );
};

export default JobCategoryCard;