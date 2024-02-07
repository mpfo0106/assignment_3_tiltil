"use client";

import { FormEventHandler, useState } from "react";

function SignUpForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    // if (data === "OK" && response.status === 200) {
    //   auth.setIsLoggedIn(true);
    // } else {
    //   alert("로그인 실패~");
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="ID"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Password"
      />
      <button
        type="submit"
        className="w-full p-2 bg-green-800 text-white rounded"
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
