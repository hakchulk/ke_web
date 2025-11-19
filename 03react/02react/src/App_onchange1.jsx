import React from "react";

function App() {
  const [form, setForm] = React.useState({
    name: "hak",
    email: "test@test.com",
    id: "",
    agree: false,
  });
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    // setForm({ ...form, ...{ [name]: type === "checkbox" ? checked : value } });
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    console.log(name, value, type, checked);
  }

  return (
    <div>
      <h3>input</h3>
      <p>
        {form["name"]} {form.email} {form.agree.toString()}
      </p>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="email" onChange={handleChange} />
      <input type="checkbox" name="agree" onChange={handleChange} />
    </div>
  );
}

export default App;
