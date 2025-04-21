import {AuthImage} from "./createAccount/components/AuthImage";

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen p-10">
      <div className="flex w-[40%] h-full items-center justify-center">
        {children}
      </div>
      <div className="flex w-[60%] h-full items-center justify-center">
        <AuthImage />
      </div>
    </div>
  );
}
