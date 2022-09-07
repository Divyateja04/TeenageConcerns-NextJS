import { useState } from "react";
import { useMentorLoginMutation } from '../generated/graphql';

type Props = {}

const volunteerLogin = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, login] = useMentorLoginMutation();

  const submitLogin = async () => {
    const response = await login({email, password});
    console.log(response)
  }

  return (
    <div className="bg-violet-900 flex flex-col-reverse md:flex-row px-4 py-4 items-center justify-center text-center align-middle h-screen">
      <div>
        <span className="font-QuickSand text-2xl text-white">Login</span>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10" />
        <div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password" className="block m-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="text-white mt-3 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={submitLogin}>Submit</button>
        </div>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10" />
      </div>
    </div>
  )
}
export default volunteerLogin