"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";


interface MenuItem {
  label: string;
  href: string;
}


interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  menuItems?: MenuItem[];
  breadcrumb?: string[];
}


export default function DashboardLayout({
  children,
  title,
  menuItems = [],
  breadcrumb = [],
}: DashboardLayoutProps) {


  const [collapsed, setCollapsed] =
    useState(false);



  return (
    <div
      className="
        flex
        min-h-screen
        bg-slate-100
        dark:bg-slate-950
      "
    >


      <Sidebar
        collapsed={collapsed}
        menuItems={menuItems}
      />


      <div
        className="
          flex-1
          flex
          flex-col
        "
      >


        <Header
          title={title}
          onToggleSidebar={() =>
            setCollapsed(!collapsed)
          }
        />


        <main
          className="
            p-6
          "
        >

          <Breadcrumb
            items={breadcrumb}
          />


          <div>
            {children}
          </div>


        </main>


      </div>


    </div>
  );
}