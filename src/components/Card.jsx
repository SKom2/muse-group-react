import CardInfo from "@components/CardInfo.jsx";
import PropTypes from "prop-types";

const Card = ({ title, color, description, link }) => {
    return (
        <li className="h-[340px] min-w-[271px] flex-wrap w-full rounded-lg outline outline-cardsBorder outline-1 m-0">
            <div className="h-[159px] rounded-tr-lg rounded-tl-lg" style={{ backgroundColor: color }}/>
            <CardInfo title={title} link={link} description={description} />
        </li>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;