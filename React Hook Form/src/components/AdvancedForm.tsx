import { useForm } from "react-hook-form";
import "../style.css";
const AdvancedForm = () => {
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
