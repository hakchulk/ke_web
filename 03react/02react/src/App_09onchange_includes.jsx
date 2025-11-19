import React from "react";

function App() {
  const [email, setEmail] = React.useState("");
  const isValid = email.includes("@"); // includes 메서드로 유효성 검사
  return (
    <div>
      <h3> 유효성검사 includes </h3>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p>{email}</p>
      <p style={isValid ? { color: "green" } : { color: "red" }}>
        {isValid ? "유효한 이메일" : "유효하지 않은 이메일"}
      </p>
    </div>
  );
}

export default App;
