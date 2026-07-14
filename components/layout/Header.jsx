import {
  Bell,
  UserCircle,
  LogOut
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";


export default function Header({
  title
}) {

  const {
    user,
    logout
  } = useAuth();


  return (

    <header
      className="
      bg-white
      dark:bg-slate-900
      rounded-2xl
      p-4
      shadow-sm
      flex
      justify-between
      items-center
      "
    >

      <h1
        className="
        font-bold
        text-xl
        dark:text-white
        "
      >
        {title}
      </h1>


      <div
        className="
        flex
        items-center
        gap-5
        "
      >

        <Bell
          className="cursor-pointer"
        />


        <div
          className="
          flex
          items-center
          gap-2
          "
        >

          <UserCircle
            size={32}
          />

          <span>
            {user?.name}
          </span>

        </div>



        <button
          onClick={logout}
          className="
          flex
          gap-2
          text-red-600
          "
        >

          <LogOut size={20}/>

          خروج

        </button>


      </div>


    </header>

  );
}