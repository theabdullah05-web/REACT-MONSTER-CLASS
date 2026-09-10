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
  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};

export default Form;
