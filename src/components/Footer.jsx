import {footerLinks} from "@data/footerLinks.js";

const Footer = () => {
    return (
        <footer>
            <div className="py-6 sm:py-8">
                <ul className="flex gap-6 justify-center">
                    {footerLinks.map((link) => (
                        <li
                            key={link.id}
                        >
                            <a
                                href={link.href}
                                className="footer-link-sm sm:footer-link"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;