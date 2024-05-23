import CaretRight from "@images/CaretRight.jsx";

const FormButton = () => {
    return (
        <button
            type="submit"
            className="bg-cta rounded-lg border-none w-[98px] h-[45px] max-sm:w-full transition hover:bg-card4 group"
        >
            <div className="flex gap-2 justify-center items-center">
                <span className="btn-text">
                    Join
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <CaretRight/>
                </span>
            </div>
        </button>
    );
};

export default FormButton;