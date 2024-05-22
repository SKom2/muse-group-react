import FormButton from "@ui/FormButton.jsx";

const Form = () => {
    return (
        <form className="max-w-[432px] w-full flex gap-[10px] m-auto max-sm:flex-col max-sm:gap-2">
            <input
                type="email"
                className="rounded-lg border-border border-[1px] main-text-sm px-5 h-[45px] w-[324px] placeholder:text-placeholder focus:outline-none max-sm:w-full"
                placeholder="Email"
            />
            <FormButton />
        </form>
    );
};

export default Form;