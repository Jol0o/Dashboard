import { useStore } from "@/zustand/store";
import React , {useEffect} from "react";

function Header() {
  const { user } = useStore((state) => state);
  useEffect(() => {
    user;
  }, []);
  return (
    <div className="w-full">
      <div className="flex m-2 rounded-sm max-w-full justify-between  px-10 bg-[#494b4b] py-3 min-h-50">
        <div className="text-[#D8E9A8] font-bold uppercase">Dashboard</div>
        {user && <div>WELCOME Back, {user.user.email.split("@")[0]}</div>}
      </div>
    </div>
  );
}

export default Header;
