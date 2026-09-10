import { useForm } from "react-hook-form";

const Form = () => {
  interface formData {
    name: string;
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<formData>();
  return <div>Form</div>;
};

export default Form;
