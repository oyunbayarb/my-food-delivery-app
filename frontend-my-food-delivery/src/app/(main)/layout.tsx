import {Header} from "@/mainComponents/elements";

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex rounded-md p-10 flex-col bg-[#404040]">
      <Header />
      <div>{children}</div>
    </div>
  );
}
