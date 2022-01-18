import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import Link from 'next/link'

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password does not match");
    }
    if (email == "" || password == "") {
      return setError("Email and password fields cannot be left empty");
    }
    try {
      setError("");
      await signup(email, password);
      router.push("/");
    } catch (error) {
      setError(
        "pls make sure email is properly formatted and password is more than 6 characters"
      );
    }
  }

  return (
    <div className="flex items-center justify-center text-teal-800">
      <div className="md:w-1/2 pt-3 px-6">
        <div className="mb-6 text-left font-bold text-4xl tracking-wider">
          SignUp
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

          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
              className="input"
            />
          </div>
        </div>

        <button className="regBtn" onClick={handleSignup}>
          sign Up
        </button>

        <h2 className="text-center my-3">
          Already have an account? {""}
          <Link href="/registration/login">
            <a>Log In</a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
