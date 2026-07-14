"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import {
  getStudentCourseList,
} from "@/services/course/student";


export default function SemesterCoursesPage() {

  const [courses, setCourses] =
    useState<any[]>([]);


  const [loading, setLoading] =
    useState(true);



  async function load() {

    try {

      const data =
        await getStudentCourseList();


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
    <DataTable
      columns={[
        "id",
        "lesson",
        "professor",
        "units",
        "schedule",
      ]}
      data={courses}
    />
  );
}