import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAuth } from "../../contexts/AuthContext";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    if (email == "" || password == "") {
      return setError("Email and password fields cannot be left empty");
    }
    try {
      setError("");
      await login(email, password);
      router.push("/");
    } catch (error) {
      setError("Internet problem or wrong credentials");
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center text-teal-800">
      <div className="md:w-1/2 pt-3 px-6">
        <div className="mb-6 text-left font-bold text-4xl tracking-wider">
          LogIn
          <br />
          page
        </div>

        <div>
          {error && (
            <h3 className="text-center bg-pink-300 text-pink-600 p-3 rounded-md my-4">
              {error}
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

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input"
            />
          </div>
        </div>

        <button className="regBtn" onClick={handleLogin}>
          Login
        </button>

        <h2 className="p-2 capitalize text-center text-blue-600 underline">
          <Link href="/registration/resetPass">
            <a>forgotten password</a>
          </Link>
        </h2>

        <h2 className="text-center my-3">
          Don't have an account? {""}
          <Link href="/registration/signup">
            <a>Sign Up</a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
