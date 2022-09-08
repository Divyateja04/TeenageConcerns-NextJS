import { useState } from 'react';
import { useCreateUserMutation } from '../generated/graphql';

type Props = {}

const userRegister = (props: Props) => {
  const [error, setError] = useState("");

  const [_, createUser] = useCreateUserMutation();

  const submit = async () => {
    const response = await createUser({});
    if (response.data?.userCreate.errors) {
      setError(response.data?.userCreate.errors[0].message)
    }
  }

  return (
    <div className="bg-violet-900 flex flex-col-reverse md:flex-row px-4 py-4 items-center justify-center text-center align-middle h-screen">
      <div>
        <span className="font-QuickSand text-2xl text-white">Anonymous User Register</span>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10" />
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Generate your UUID</label>
          {error && <p className="uppercase mt-2 text-sm text-red-400">
            {error}
          </p>}
          <button type="submit" className="text-white mt-3 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={submit}>Register</button>
        </div>
        <hr className="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10" />
      </div>
    </div>
  )
}
export default userRegister