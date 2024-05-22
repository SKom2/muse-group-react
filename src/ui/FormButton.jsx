import CaretRight from "@images/CaretRight.jsx";

const FormButton = () => {
    return (
        <button
            type="submit"
            className="bg-cta rounded-lg border-none w-[98px] h-[45px] max-sm:w-full"
        >
            <div className="flex gap-2 justify-center items-center">
                    <span className="btn-text">
                        Join
                    </span>
                <CaretRight/>
            </div>
        </button>
    );
};

export default FormButton;