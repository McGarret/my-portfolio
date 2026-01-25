import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/McGarret" },
    { icon: <FaLinkedin />, path: "https://www.linkdin.com/in/benjaminakossou-89427b199/" },
    { icon: <FaWhatsapp />, path: "https://wa.me/+22890302111" },
];


interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => {
                    return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
                })
            }
        </div>
    );
}

export default Social