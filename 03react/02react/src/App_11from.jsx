import React from "react";

function App() {
  const eventHandler = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [form, setForm] = React.useState({
    name: "",
    userid: "",
    useremail: "",
  });

  const [errors, setErrors] = React.useState({});

  function validateEmail() {
    const newError = {};

    if (form.name.trim() === "") {
      newError.name = "이름을 입력하세요";
    }

    if (form.userid.trim() === "") {
      newError.userid = "아이디를 입력하세요";
    } else if (form.userid.length < 4) {
      newError.userid = "아이디는 4자 이상 입력하세요";
    }

    if (form.useremail.trim() === "") {
      newError.useremail = "이메일을 입력하세요";
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(form.useremail)) {
      newError.useremail = "이메일 표현식이 올바르지 않습니다.";
    }
    return newError;
  }
  const submitHandler = (e) => {
    e.preventDefault(); // 기본 이벤트(페이지 이동) 막기
    console.log(form);
    const errors = validateEmail();
    setErrors(errors);
    console.log(errors);

    // if (Object.keys(errors).length === 0) alert("회원가입 완료");
    // else alert("회원가입 실패");
  };

  return (
    <div>
      <div className="container">
        <h3>회원가입</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row">
              {/* html : for, react : htmlFor */}
              <label
                htmlFor="name"
                className="form-label"
                style={{ width: "100px" }}
              >
                이름*
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={eventHandler}
              />
            </div>

            {errors.name && (
              <div className="form-text" style={{ color: "red" }}>
                {errors.name}
              </div>
            )}
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row">
              {/* html : for, react : htmlFor */}
              <label
                htmlFor="userid"
                className="form-lable"
                style={{ width: "100px" }}
              >
                아이디*
              </label>
              <input
                type="text"
                className="form-control"
                id="userid"
                name="userid"
                onChange={eventHandler}
              />
            </div>
            {errors.userid && (
              <div className="form-text" style={{ color: "red" }}>
                {errors.userid}
              </div>
            )}
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row">
              {/* html : for, react : htmlFor */}
              <label
                htmlFor="useremail"
                className="form-lable"
                style={{ width: "100px" }}
              >
                이메일*
              </label>
              <input
                type="text"
                className="form-control"
                id="useremail"
                name="useremail"
                onChange={eventHandler}
              />
            </div>
            {errors.useremail && (
              <div className="form-text" style={{ color: "red" }}>
                {errors.useremail}
              </div>
            )}
          </div>

          {/* <button> 은 text로 취급 하기 떄문에 text-end가능 */}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              가입완료
            </button>{" "}
          </div>
        </form>
      </div>
      <div>formData / {JSON.stringify(form)} </div>
      <div>errors / {JSON.stringify(errors)}</div>
    </div>
  );
}

export default App;
