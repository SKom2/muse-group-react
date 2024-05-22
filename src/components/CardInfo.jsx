import PropTypes from "prop-types";
import RightArrow from "@images/RightArrow.jsx";

const CardInfo = ({ title, description,link }) => {
    return (
        <div className="p-4 h-[181px]">
            <div className="text-start flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="card-title">{title}</h3>
                    <p className="main-text cut-multiline">{description}</p>
                </div>
                <a href={link} className="link flex items-center gap-2 h-[33px]">
                    Read more <RightArrow />
                </a>
            </div>
        </div>
    );
};

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default CardInfo;