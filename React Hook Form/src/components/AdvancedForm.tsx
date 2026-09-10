import { useForm } from "react-hook-form";
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
  } = useForm();
  return (
    <div className="form-container">
      <form>
        <div>
          <label></label>
        </div>
      </form>
    </div>
  );
};

export default AdvancedForm;
