import PropTypes from "prop-types";

const SocialLink = ({ src: Icon, href}) => {
    return (
        <li>
            <a href={href}>
                <Icon />
            </a>
        </li>
    );
};

SocialLink.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default SocialLink;