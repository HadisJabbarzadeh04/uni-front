"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import {
  getLessonList,
} from "@/services/lesson/departmentGroupManager";


export default function LessonsPage() {
  const [lessons, setLessons] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);



  async function load() {
    try {
      const data =
        await getLessonList();

      setLessons(data);

    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
    }
  }



  useEffect(() => {
    load();
  }, []);



  if (loading) {
    return <Loading />;
  }



  return (
    <div>

      <a
        href="/groupManager/createLesson"
        className="
          bg-blue-600
          text-white
          p-3
          rounded-xl
          inline-block
          mb-5
        "
      >
        ایجاد درس
      </a>


      <DataTable
        columns={[
          "code",
          "title",
          "units",
          "group",
        ]}
        data={lessons}
      />

    </div>
  );
}