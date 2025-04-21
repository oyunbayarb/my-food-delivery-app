import {IoIosArrowBack} from "react-icons/io";
export const LoginPage = () => {
  return (
    <div className="flex gap-8 flex-col w-[416px] p-6">
      <IoIosArrowBack className="w-6 h-6 rounded-md border-1 border-[#E4E4E7]" />
      <div>
        <p className="font-semibold text-2xl">Log in </p>
        <p className="font-normal text-[16px] text-[#71717A]">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <div className="w-full flex-col flex gap-4">
        <input
          className="border-1 border-[#E4E4E7] rounded-md w-full"
          type="email"
          placeholder="Enter your email address"
        ></input>
        <input
          className="border-1 border-[#E4E4E7] rounded-md w-full"
          type="email"
          placeholder="Password"
        ></input>
        <button className="flex justify-start font-normal text-[14px]">
          Forgot password?
        </button>
        <button className="font-normal text-[16px] bg-[#E4E4E7] w-full text-black rounded-md">
          Let's Go
        </button>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <p>Don’t have an account?</p>
        <button className="text-[#2563EB]">Sign up</button>
      </div>
    </div>
  );
};
