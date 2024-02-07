"use client";
import { updateNickname } from "@/lib/store/reducers/user.reducer";
import { RootState } from "@/lib/store/store";

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../_contexts/auth.context";

function ProfilePage() {
  const userNickname = useSelector((state: RootState) => state.user.nickname);
  const auth = useAuth();
  const dispatch = useDispatch();
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const handleClickUpdateNickname = () => {
    if (nicknameInputRef.current) {
      const newNickname = nicknameInputRef.current.value;
      if (newNickname.trim() !== "") {
        dispatch(updateNickname(newNickname));
      }
    }
  };

  return (
    <section>
      <h2 className="text-center text-4xl">마이 페이지</h2>

      {
        <>
          <div className="text-center">
            <h3>아이디 수정</h3>
            <input
              ref={nicknameInputRef}
              type="text"
              placeholder={userNickname}
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={handleClickUpdateNickname}
              className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              아이디 변경하기
            </button>
          </div>
        </>
      }
    </section>
  );
}

export default ProfilePage;
