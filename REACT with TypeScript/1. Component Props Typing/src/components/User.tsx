const User = ({
  name,
  age,
  isStudent,
}: {
  name: string;
  age: number;
  isStudent: boolean;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isStudent}</h3>
    </div>
  );
};

export default User;
