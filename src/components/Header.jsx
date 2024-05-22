import Logo from "@images/Logo.png"

const Header = () => {
    return (
        <header>
            <div className="py-6 sm:py-8">
                <img src={Logo} alt="Muse group logo" className="w-[144px] h-10 m-auto"/>
            </div>
        </header>
    );
};

export default Header;