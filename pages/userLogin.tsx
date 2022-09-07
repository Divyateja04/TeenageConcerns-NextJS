import { useUserLoginMutation } from '../generated/graphql';
import { useState } from 'react';

type Props = {}

const userLogin = (props: Props) => {
  const [uuid, setUuid] = useState("");

  const [_, loginUser] = useUserLoginMutation();

  const submit = async () => {
    const response = await loginUser({ uuid });
    console.log(response)
  }

  return (
    <div className="bg-violet-900 flex flex-col-reverse md:flex-row px-4 py-4 items-center justify-center text-center align-middle h-screen">
      <div>
      <span className="font-QuickSand text-2xl text-white">Anonymous User Login</span>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10" />
        <div>
          <div>
            <label htmlFor="uuid" className="block m-2 text-sm font-medium text-gray-900 dark:text-gray-300">UUID</label>
            <input type="text" id="uuid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setUuid(e.target.value)} required />
          </div>          
          <button type="submit" className="text-white mt-3 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={submit}>Login</button>
        </div>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10" />
      </div>
    </div>
  )
}
export default userLogin