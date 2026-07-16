"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import StatCard from "@/components/dashboard/StatCard";
import DashboardChart from "@/components/dashboard/DashboardChart";
import ActivityTable from "@/components/dashboard/ActivityTable";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import Loading from "@/components/common/Loading";

interface Stat {
  title: string;
  value: string | number;
}

interface Activity {
  [key: string]: any;
}

interface Notification {
  [key: string]: any;
}

interface MenuItem {
  label: string;
  href: string;
}

export default function DeanDashboardPage() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [notifications, setNotifications] =
    useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);


  const menu: MenuItem[] = [
    {
      label: "گروه‌های آموزشی",
      href: "/dean/groups",
    },
    {
      label: "تعیین مدیر گروه",
      href: "/dean/assignManager",
    },
    {
      label: "اساتید",
      href: "/dean/teachers",
    },
    {
      label: "کلاس‌ها",
      href: "/dean/classes",
    },
  ];


  useEffect(() => {
    async function load() {
      try {

        // TODO:
        // const data = await getDeanDashboard();
        // setStats(data.stats);
        // setActivities(data.activities);
        // setNotifications(data.notifications);


        // Temporary data until backend dashboard API exists
        setStats([]);
        setActivities([]);
        setNotifications([]);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }
    }


    load();

  }, []);



  if (loading) {
    return <Loading />;
  }



  return (
    <DashboardLayout

      title="مدیر دانشکده"

      menuItems={menu}

      breadcrumb={[
        "داشبورد",
        "مدیر دانشکده",
      ]}

    >

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >

        {stats.map((item, i) => (

          <StatCard

            key={i}

            title={item.title}

            value={item.value}

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

          data={stats}

        />


        <NotificationPanel

          notifications={notifications}

        />

      </div>



      <ActivityTable

        data={activities}

      />


    </DashboardLayout>
  );
}