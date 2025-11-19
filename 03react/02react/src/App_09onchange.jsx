import React from "react";

function App() {
  const [text, setText] = React.useState("");
  const [form, setForm] = React.useState({ myname: "", email: "" });
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const [fruit, setFruit] = React.useState("banana");

  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  function handleFormChange(e) {
    // const { name, value } = e.target;
    // console.log(e.target);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <h4>Form</h4>
      <input type="text" onChange={handleChange} />
      <p>{text}</p>
      <input
        type="text"
        name="myname"
        placeholder="이름"
        onChange={handleFormChange}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={handleFormChange}
      />
      <p>
        {form.myname} / {form.email}
      </p>

      <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />
      <p>{num1 + num2}</p>

      <input
        type="checkbox"
        onChange={(e) => {
          console.log(e.target.checked);

          setChecked(e.target.checked);
        }}
      />

      <p>{checked ? "checked" : "unchecked"}</p>

      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="grape">grape</option>
      </select>
      <p>{fruit}</p>
    </div>
  );
}

export default App;
