"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import {
  getCourseList,
} from "@/services/course/departmentGroupManager";


export default function CoursesPage() {
  const [courses, setCourses] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);


  async function load() {
    try {
      const data =
        await getCourseList();

      setCourses(data);

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
        href="/groupManager/create-course"
        className="
          bg-blue-600
          text-white
          p-3
          rounded-xl
          inline-block
          mb-5
        "
      >
        ایجاد دوره
      </a>


      <DataTable
        columns={[
          "id",
          "lesson",
          "professor",
          "semester",
          "status",
        ]}
        data={courses}
      />
    </div>
  );
}