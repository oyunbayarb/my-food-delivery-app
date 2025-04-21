import {IoIosArrowBack} from "react-icons/io";

export const CreateYourPassword = () => {
  return (
    <div className="flex gap-8 flex-col w-[416px] p-6">
      <IoIosArrowBack className="w-6 h-6 rounded-md border-1 border-[#E4E4E7]" />
      <div>
        <p className="font-semibold text-2xl">Create a strong password</p>
        <p className="font-normal text-[16px] text-[#71717A]">
          Create a strong password with letters, numbers.
        </p>
      </div>

      <div className="w-full flex-col flex gap-5">
        <input
          className="border-1 border-[#E4E4E7] rounded-md w-full"
          type="Password"
          placeholder="Password"
        ></input>
        <input
          className="border-1 border-[#E4E4E7] rounded-md w-full"
          type="Confirm"
          placeholder="Confirm your password"
        ></input>

        <div className="flex-row items-center justify-start flex gap-2">
          <input type="checkbox"></input>
          <span className="text-[#71717A]">Show your password</span>
        </div>
        <button className="font-normal text-[16px] bg-[#E4E4E7] w-full text-black rounded-md">
          Let's Go
        </button>
      </div>

      <div className="flex flex-row justify-center gap-2">
        <p>Already have an account?</p>
        <button className="text-[#2563EB]">Log in</button>
      </div>
    </div>
  );
};
