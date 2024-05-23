import PropTypes from "prop-types";
import RightArrow from "@images/RightArrow.jsx";

const CardInfo = ({ title, description, href }) => {
    return (
        <div className="p-4 h-[181px]">
            <div className="text-start flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <h3 className="card-title">{title}</h3>
                    <p className="main-text cut-multiline">{description}</p>
                </div>
                <a href={href} className="link flex items-center gap-2 h-[33px] transition hover:translate-x-2">
                    Read more
                    <button type="button" className="h-[14px] w-[14px] flex justify-center items-center">
                        <RightArrow />
                    </button>
                </a>
            </div>
        </div>
    );
};

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default CardInfo;