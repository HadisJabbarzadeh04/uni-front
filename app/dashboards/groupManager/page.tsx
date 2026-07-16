"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import StatCard from "@/components/dashboard/StatCard";
import DashboardChart from "@/components/dashboard/DashboardChart";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import ActivityTable from "@/components/dashboard/ActivityTable";
import Loading from "@/components/common/Loading";

// TODO:
// import { getGroupManagerDashboard }
// from "@/services/dashboard/groupManager";

interface Stat {
  title: string;
  value: string | number;
}

interface DashboardData {
  stats: Stat[];
  chart: any;
  notifications: any[];
  activities: any[];
}

export default function GroupManagerDashboardPage() {
  const [data, setData] =
    useState<DashboardData | null>(null);

  const menu = [
  {
    label: "دروس",
    href: "/groupManager/lessons",
  },
  {
    label: "دوره‌ها",
    href: "/groupManager/courses",
  },
  {
    label: "دانشجویان",
    href: "/groupManager/students",
  },
  {
    label: "ثبت نام",
    href: "/groupManager/registerStudent",
  },
];

  useEffect(() => {
    async function load() {
      try {
        // TODO:
        // const dashboard =
        //   await getGroupManagerDashboard();
        // setData(dashboard);

        // Temporary placeholder
        setData({
          stats: [],
          chart: [],
          notifications: [],
          activities: [],
        });
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <DashboardLayout
      title="مدیر گروه"
      menuItems={menu}
      breadcrumb={[
        "داشبورد",
        "مدیر گروه",
      ]}
    >
      <div
        className="
          grid
          md:grid-cols-4
          gap-5
        "
      >
        {data.stats.map((x, i) => (
          <StatCard
            key={i}
            title={x.title}
            value={x.value}
          />
        ))}
      </div>

      <div
        className="
          grid
          lg:grid-cols-2
          gap-5
          mt-6
        "
      >
        <DashboardChart
          data={data.chart}
        />

        <NotificationPanel
          notifications={
            data.notifications
          }
        />
      </div>

      <ActivityTable
        data={data.activities}
      />
    </DashboardLayout>
  );
}