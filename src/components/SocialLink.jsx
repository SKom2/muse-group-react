import PropTypes from "prop-types";

const SocialLink = ({ src: Icon, link}) => {
    return (
        <li>
            <a href={link}>
                <Icon />
            </a>
        </li>
    );
};

SocialLink.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialLink;