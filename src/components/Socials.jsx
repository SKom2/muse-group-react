import Links from "@components/Links.jsx";

const Socials = () => {
    return (
        <section>
            <div className="m-auto max-w-[640px] px-6">
                <div className="text-center flex flex-col gap-6">
                    <Links />
                    <p className="main-text-sm">
                        You&apos;re not just a student - you&apos;re part of a vibrant community of
                        like-minded individuals united by a passion for frontend development. Collaborate,
                        innovate, and grow alongside fellow learners and industry professionals as you
                        embark on this exciting journey together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Socials;