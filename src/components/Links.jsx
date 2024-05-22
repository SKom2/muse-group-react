import {socials} from "@data/socials.js";
import SocialLink from "@components/SocialLink.jsx";

const Links = () => {
    return (
        <ul className="flex gap-10 m-auto sm:gap-[60px]">
            {socials.map(social => (
                <SocialLink
                    key={social.id}
                    href={social.href}
                    src={social.src}
                />
            ))}
        </ul>
    );
};


export default Links;