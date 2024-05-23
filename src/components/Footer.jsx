import {footerLinks} from "@data/footerLinks.js";

const Footer = () => {
    return (
        <footer>
            <div className="py-5 sm:py-7">
                <ul className="flex gap-4 justify-center">
                    {footerLinks.map((link) => (
                        <li
                            key={link.id}
                        >
                            <a
                                href={link.href}
                                className="footer-link-sm sm:footer-link p-1 transition rounded hover:bg-cta hover:text-white"
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