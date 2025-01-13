import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const FormPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    phone: "",
    email: "",
    dobb: "",
    addr: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be max 15 characters and numbers/special characters are not allowed",
      label: "Username",
      pattern: "^[A-Za-z]{1,15}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "phone number",
      errorMessage: "Enter a valid phone number with 10 digits.",
      label: "Phone",
      required: true,
      pattern: "^[0-9]{10}$",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "Enter a valid email address.",
      label: "Email",
      required: true,
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\\.[a-zA-Z]{2,}$",
    },
    {
      id: 4,
      name: "dobb",
      type: "date",
      placeholder: "date of Birth",
      errorMessage: "Enter date properly",
      label: "Date of Birth",
      required: true,
    },
    {
      id: 5,
      name: "addr",
      placeholder: "Address",
      errorMessage: "Address is required",
      label: "Address",
      required: true,
      pattern: ".{10,}",
      isTextarea: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/display", { state: values }); 
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      <button className="back-button2" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default FormPage;
