import React from "react";

const Modal = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form>
          <div className="mt-3">
            <label className="block font-medium text-lg text-gray-700" for="username">
              Email
            </label>
            <input
              className="w-full mt-2 form-input"
              id="username"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-3">
            <label className="block font-medium text-lg text-gray-700" for="password">
              Password
            </label>
            <input
              className="w-full mt-2 form-input"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <button
              className="w-full bg-yellow-300 text-black hover:bg-yellow-400 py-2 px-4 rounded"
              type="submit"
            >
              Log in
            </button>
            <button
              className="w-full bg-yellow-300 text-black hover:bg-yellow-400 py-2 px-4 rounded"
              type="submit"
            >
              Don't have an account? Sign up.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
