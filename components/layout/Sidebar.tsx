"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ChevronLeft,
  LayoutDashboard,
} from "lucide-react";


interface MenuItem {
  label: string;
  href: string;
}


interface SidebarProps {
  title?: string;
  menuItems: MenuItem[];
  collapsed?: boolean;
}



export default function Sidebar({

  title,

  menuItems,

  collapsed = false,

}: SidebarProps) {



  const [collapse, setCollapse] = useState(collapsed);



  return (

    <aside

      className={`

        bg-slate-950

        text-white

        h-screen

        transition-all

        duration-300

        ${collapse ? "w-20" : "w-72"}

        p-4

        hidden

        lg:block

      `}

    >



      <div

        className="
          flex
          justify-between
          items-center
          mb-8
        "

      >


        {
          !collapse &&

          <h2>
            {title}
          </h2>

        }



        <button

          onClick={() =>
            setCollapse(!collapse)
          }

        >

          <ChevronLeft />

        </button>


      </div>





      <ul

        className="
          space-y-3
        "

      >

        {
          menuItems.map((item, index) => (

            <Link

              key={index}

              href={item.href}

            >

              <li

                className="
                  p-3
                  rounded-xl
                  hover:bg-blue-700
                  cursor-pointer
                  flex
                  gap-3
                "

              >

                <LayoutDashboard />


                {
                  !collapse &&
                  item.label
                }


              </li>


            </Link>


          ))
        }


      </ul>


    </aside>

  );

}