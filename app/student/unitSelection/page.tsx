"use client";

import {
  useEffect,
  useState,
} from "react";

import Button from "@/components/common/Button";
import DataTable from "@/components/common/DataTable";

import {
  getStudentCourseList,
} from "@/services/course/student";

import {
  createStudentCourse,
} from "@/services/studentCourse/student";


export default function UnitSelectionPage() {


  const [courses, setCourses] =
    useState<any[]>([]);



  async function load() {

    try {

      const data =
        await getStudentCourseList();


      setCourses(data);


    } catch (err) {
      console.error(err);
    }

  }



  useEffect(() => {
    load();
  }, []);



  async function register(
    id: string
  ) {

    try {

      await createStudentCourse({
        courseId: id,
      });


      alert(
        "انتخاب واحد شد"
      );


      load();


    } catch (err) {
      console.error(err);
    }

  }



  return (
    <div>

      <h2 className="mb-5">
        انتخاب واحد
      </h2>


      <DataTable
        columns={[
          "id",
          "lesson",
          "professor",
          "capacity",
          "status",
        ]}

        data={courses}


        actions={(row: any) => (

          <Button
            onClick={() =>
              register(row.id)
            }
          >
            انتخاب
          </Button>

        )}

      />


    </div>
  );
}