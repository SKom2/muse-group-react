import PropTypes from "prop-types";

const SocialLink = ({ src: Icon, href}) => {
    return (
        <li
            className="max-h-6 max-w-6"
        >
            <a href={href} className="transition hover:opacity-75">
                <Icon />
            </a>
        </li>
    );
};

SocialLink.propTypes = {
    src: PropTypes.elementType.isRequired,
    href: PropTypes.string.isRequired,
};

export default SocialLink;