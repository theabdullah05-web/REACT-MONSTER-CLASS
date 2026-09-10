import { useForm, type SubmitHandler } from "react-hook-form";
import "../style.css";
const AdvancedForm = () => {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    completeLocation: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            id="firstName"
            {...register("firstName", { required: "first name is required" })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            id="lastName"
            {...register("lastName", { required: "last name is required" })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
