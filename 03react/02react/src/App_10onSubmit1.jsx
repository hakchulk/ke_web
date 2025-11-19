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

  const submitHandler = (e) => {
    e.preventDefault(); // 기본 이벤트(페이지 이동) 막기
    console.log(form);

    if (form.name.trim() === "") {
      alert("이름을 입력하세요");
      return;
    }
    if (form.userid.trim() === "") {
      alert("아이디를 입력하세요");
      return;
    } else if (form.userid.length < 4) {
      alert("아이디는 4자 이상 입력하세요");
      return;
    }

    if (form.useremail.trim() === "") {
      alert("이메일을 입력하세요");
      return;
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(form.useremail)) {
      alert("이메일 표현식이 올바르지 않습니다.");
      return;
    }

    alert("회원가입이 완료되었습니다.");
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
                이름
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={eventHandler}
              />
            </div>
            <div className="form-text">이름을 입력하세요</div>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row">
              {/* html : for, react : htmlFor */}
              <label
                htmlFor="userid"
                className="form-lable"
                style={{ width: "100px" }}
              >
                아이디
              </label>
              <input
                type="text"
                className="form-control"
                id="userid"
                name="userid"
                onChange={eventHandler}
              />
            </div>
            <div className="form-text">아이디를 입력하세요</div>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row">
              {/* html : for, react : htmlFor */}
              <label
                htmlFor="useremail"
                className="form-lable"
                style={{ width: "100px" }}
              >
                이메일
              </label>
              <input
                type="text"
                className="form-control"
                id="useremail"
                name="useremail"
                onChange={eventHandler}
              />
            </div>
            <div className="form-text">이메일을 입력하세요</div>
          </div>

          {/* <button> 은 text로 취급 하기 떄문에 text-end가능 */}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              가입완료
            </button>{" "}
          </div>
        </form>
      </div>
      {JSON.stringify(form)}
    </div>
  );
}

export default App;
