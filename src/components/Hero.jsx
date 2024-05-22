import Form from "@components/Form.jsx";

const Hero = () => {
    return (
        <section className="bg-bg">
            <div className="m-auto max-w-[640px] px-6 box-content py-10 max-sm:py-6">
                <div className="text-center flex flex-col gap-6 relative">
                    <h1 className="title max-sm:title-sm">
                        Muse Group Frontend Academy
                    </h1>
                    <p className="main-text max-sm:main-text-sm">
                        Our academy offers a transformative learning experience designed to empower you
                        with the skills and knowledge needed to succeed in the ever-evolving field of frontend
                        development.
                    </p>
                    <div
                        className="w-full h-[293px] rounded-lg bg bg-hero-pattern bg-cover bg-center max-sm:h-[206px]"
                    />
                    <p className="main-text-sm">
                        Are you ready to turn your passion for technology into a thriving career?
                    </p>
                    <Form/>
                </div>
            </div>
        </section>
    );
};

export default Hero;