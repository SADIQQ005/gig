import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

export default function resetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { resetPassword } = useAuth();

  async function handleReset(e) {
    e.preventDefault();
    if (email == "") {
      return setError("fill in your email to reset password pls");
    }
    try {
      setError("");
      await resetPassword(email);
      setMessage("check your mail for further instructions");
    } catch (error) {
      setError("Internet problem or email not found");
    }
  }

  return (
    <div className="flex items-center justify-center text-teal-800">
      <div className="md:w-1/2 pt-3 px-6">
        <div className="mb-6 text-left font-bold text-4xl tracking-wider">
          Password
          <br />
          Reset
          <br />
          page
        </div>

        <div>
          {error && (
            <h3 className="text-center bg-pink-300 text-pink-600 p-3 rounded-md my-4">
              {error}
            </h3>
          )}
          {message && (
            <h3 className="text-center bg-green-300 text-green-600 p-3 rounded-md my-4">
              {message}
            </h3>
          )}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
            />
          </div>
        </div>

        <button className="regBtn" onClick={handleReset}>
          Reset Password
        </button>

        <h2 className="p-2 capitalize text-center text-blue-600 underline">
          <Link href="/registration/login">
            <a>Cancel</a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
