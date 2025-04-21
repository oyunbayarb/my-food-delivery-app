import {IoIosArrowBack} from "react-icons/io";
export const CreateYourAccount = () => {
  return (
    <div className="flex gap-8 flex-col w-[416px] p-6">
      <IoIosArrowBack className="w-6 h-6 rounded-md border-1 border-[#E4E4E7]" />
      <div>
        <p className="font-semibold text-2xl">Create your account</p>
        <p className="font-normal text-[16px] text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <div className="w-full flex-col flex gap-2">
        <input
          className="border-1 border-[#E4E4E7] rounded-md w-full"
          type="email"
          placeholder="Enter your email address"
        ></input>
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
