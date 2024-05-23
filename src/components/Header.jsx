import Logo from "@images/Logo.png"

const Header = () => {
    return (
        <header>
            <div className="py-6 sm:py-8 text-center">
                <a href="https://www.mu.se/" className="inline-block">
                    <img src={Logo} alt="Muse group logo" className="w-[144px] h-10"/>
                </a>
            </div>
        </header>
    );
};

export default Header;