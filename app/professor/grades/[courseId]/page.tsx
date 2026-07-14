"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "next/navigation";

import Button from "@/components/common/Button";
import Loading from "@/components/common/Loading";

import {
  getStudentCourseList,
  editScore,
} from "@/services/studentCourse/teacher";


export default function GradesPage() {

  const params = useParams();

  const courseId =
    params.courseId as string;


  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);



  async function load() {
    try {

      const data =
        await getStudentCourseList();


      // Depending on backend response,
      // we may filter here:
      //
      // data.filter(
      //   x => x.courseId === courseId
      // )

      setStudents(data);


    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
    }
  }



  useEffect(() => {
    load();
  }, []);



  function change(
    id: string,
    value: string
  ) {

    setStudents(prev =>
      prev.map(s =>
        s.id === id
          ? {
              ...s,
              grade: value,
            }
          : s
      )
    );

  }



  async function save() {

    try {

      for (const student of students) {

        await editScore({
          studentCourseId:
            student.id,

          score:
            student.grade,
        });

      }


      alert("نمرات ثبت شد");


    } catch (err) {
      console.error(err);
    }

  }



  if (loading) {
    return <Loading />;
  }



  return (
    <div
      className="
        bg-white
        rounded-xl
        p-5
      "
    >

      <h2 className="mb-5">
        ثبت نمره
      </h2>


      {
        students.map(student => (

          <div
            key={student.id}
            className="
              flex
              justify-between
              p-3
              border-b
            "
          >

            <span>
              {student.name}
            </span>


            <input
              type="number"
              value={
                student.grade || ""
              }
              onChange={(e) =>
                change(
                  student.id,
                  e.target.value
                )
              }
              className="
                border
                rounded-xl
                p-2
                w-24
              "
            />

          </div>

        ))
      }



      <Button onClick={save}>
        ثبت نمرات
      </Button>


    </div>
  );
}