import FormButton from "@ui/FormButton.jsx";
import {useForm} from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        if (data.email) {
            alert("Welcome to the team!")
        }
    }

    const onError = errors => {
        alert(errors.email.message)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
        >
            <div className="max-w-[432px] w-full flex gap-[10px] m-auto max-sm:flex-col max-sm:gap-2">
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Email is invalid"
                        },
                    })}
                    type="email"
                    className="rounded-lg border-border border-[1px] main-text-sm px-5 h-[45px] w-[324px] placeholder:text-placeholder focus:outline-none max-sm:w-full"
                    placeholder="Email"
                />
                <FormButton />
            </div>
        </form>
    );
};

export default Form;