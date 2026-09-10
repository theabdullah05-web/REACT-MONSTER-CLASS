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
      <h2 style={{ textAlign: "center" }}>User Information Form</h2>
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
        <div>
          <label htmlFor="email">Email: </label>
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
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input
            id="state"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && <p>{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="zip">Zip: </label>
          <input
            id="zip"
            {...register("zip", { required: "Zip is required" })}
          />
          {errors.zip && <p>{errors.zip.message}</p>}
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            id="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </div>
        <div>
          <label htmlFor="completeLocation">Complete Location: </label>
          <input
            id="completeLocation"
            {...register("completeLocation", {
              required: "complete location is required",
            })}
          />
          {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
