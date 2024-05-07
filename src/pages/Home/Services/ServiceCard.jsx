

const ServiceCard = ({service}) => {

    const {title, img, price} = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-[#FF3811] text-lg font-semibold">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn bg-[#FF3811] text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;