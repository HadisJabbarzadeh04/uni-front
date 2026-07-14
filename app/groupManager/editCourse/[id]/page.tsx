"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import Button from "@/components/common/Button";

import {
  getCourseDetail,
  editCourse,
} from "@/services/course/departmentGroupManager";


export default function EditCoursePage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;


  const [form, setForm] =
    useState<any>({});


  useEffect(() => {
    async function load() {
      try {
        const data =
          await getCourseDetail(id);

        setForm(data);

      } catch (err) {
        console.error(err);
      }
    }


    if (id) {
      load();
    }

  }, [id]);



  async function save() {
    try {
      await editCourse(
        id,
        form
      );

      router.push(
        "/groupManager/courses"
      );

    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div
      className="
        bg-white
        p-6
        rounded-xl
      "
    >

      <input
        className="
          border
          p-3
          rounded-xl
          w-full
        "
        value={
          form.status || ""
        }
        onChange={(e) =>
          setForm({
            ...form,
            status:
              e.target.value,
          })
        }
      />


      <Button onClick={save}>
        ذخیره
      </Button>

    </div>
  );
}