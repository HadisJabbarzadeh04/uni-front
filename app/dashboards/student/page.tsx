"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import StatCard from "@/components/dashboard/StatCard";
import DashboardChart from "@/components/dashboard/DashboardChart";
import ActivityTable from "@/components/dashboard/ActivityTable";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import Loading from "@/components/common/Loading";

// TODO:
// import { getStudentDashboard }
// from "@/services/dashboard/student";

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

export default function StudentDashboardPage() {
  const [data, setData] =
    useState<DashboardData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // TODO:
        // const dashboard =
        //   await getStudentDashboard();
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
      title="دانشجو"
      menuItems={[
        {
          label: "انتخاب واحد",
          href: "/student/unitSelection",
        },
        {
          label: "دروس من",
          href: "/student/myLessons",
        },
        {
          label: "اعتراض نمره",
          href: "/student/objections",
        },
        {
          label: "درخواست حذف",
          href: "/student/deleteRequest",
        },
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
          mt-6
          gap-5
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