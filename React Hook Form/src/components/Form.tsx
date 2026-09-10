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
        {...register("name", { required: "name field is required" })}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@s]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "password must be at least 8 characters",
          },
        })}
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Form;
