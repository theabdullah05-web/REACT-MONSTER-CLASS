import { useForm, type SubmitHandler } from "react-hook-form";

const Form = () => {
  interface formData {
    name: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formData>();
  const onSubmit: SubmitHandler<formData> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        {...register("name", { required: "Name field is required" })}
      />
      <button>Submit</button>
      {errors.name && <p>{errors.name.message}</p>}
    </form>
  );
};

export default Form;
