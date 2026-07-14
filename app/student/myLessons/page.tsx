"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import {
  getStudentCourseList,
} from "@/services/studentCourse/student";


export default function MyLessonsPage() {

  const [lessons, setLessons] =
    useState<any[]>([]);


  const [loading, setLoading] =
    useState(true);



  async function load() {
    try {

      const data =
        await getStudentCourseList();


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

      <h2 className="mb-5 text-xl">
        دروس انتخاب شده
      </h2>


      <DataTable
        columns={[
          "id",
          "title",
          "units",
          "professor",
          "status",
        ]}
        data={lessons}
      />


    </div>
  );
}