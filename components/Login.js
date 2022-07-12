import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center border border-black">
      <Image
        src="https://links.papareact.com/5me"
        width={200}
        height={200}
        objectFit="contain"
      />
      <h1 onClick={signIn} className="mt-10 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
