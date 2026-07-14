"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import {
  getTeacherCourseList,
} from "@/services/course/teacher";


export default function MyCoursesPage() {

  const [courses, setCourses] =
    useState<any[]>([]);


  const [loading, setLoading] =
    useState(true);



  async function load() {
    try {

      const data =
        await getTeacherCourseList();


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

      <h2 className="text-xl mb-5">
        دوره‌های من
      </h2>


      <DataTable
        columns={[
          "id",
          "lesson",
          "semester",
          "students",
          "status",
        ]}
        data={courses}
      />


    </div>
  );
}