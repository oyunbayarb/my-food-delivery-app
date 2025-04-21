import {IoIosArrowBack} from "react-icons/io";

export const ResetYourPassword = () => {
  return (
    <div className="flex gap-8 flex-col w-[416px] p-6">
      <IoIosArrowBack className="w-6 h-6 rounded-md border-1 border-[#E4E4E7]" />
      <div>
        <p className="font-semibold text-2xl">Reset your password</p>
        <p className="font-normal text-[16px] text-[#71717A]">
          Enter your email to receive a password reset link.
        </p>
      </div>

      <div className="w-full flex-col flex gap-5">
        <input
          className="border-1 border-[#E4E4E7] rounded-md w-full"
          type="email"
          placeholder="Email"
        ></input>

        <button className="font-normal text-[16px] bg-black w-full text-white rounded-md">
          Send link
        </button>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <p>Don’t have an account?</p>
        <button className="text-[#2563EB]">Sign up</button>
      </div>
    </div>
  );
};
