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
  getLessonDetail,
  editLesson,
} from "@/services/lesson/departmentGroupManager";


export default function EditLessonPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;


  const [form, setForm] =
    useState<any>({});



  useEffect(() => {
    async function load() {
      try {
        const data =
          await getLessonDetail(id);

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
      await editLesson(
        id,
        form
      );

      router.push(
        "/groupManager/lessons"
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
        rounded-2xl
        text-indigo-700
      "
    >

      <input
        className="
          border
          p-3
          rounded-xl
          w-full
          text-indigo-700
        "
        value={
          form.title || ""
        }
        onChange={(e) =>
          setForm({
            ...form,
            title:
              e.target.value,
          })
        }
      />


      <Button onClick={save}>
        ویرایش
      </Button>

    </div>
  );
}