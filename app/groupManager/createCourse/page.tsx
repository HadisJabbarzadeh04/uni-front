"use client";

import {
  useState,
} from "react";

import Button from "@/components/common/Button";

import {
  createCourse,
} from "@/services/course/departmentGroupManager";


export default function CreateCoursePage() {

  const [form, setForm] =
    useState({
      lessonId: "",
      professorId: "",
      semester: "",
    });


  function change(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  }


  async function submit() {
    try {
      await createCourse(form);

      alert("دوره ایجاد شد");

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
        space-y-4
        text-indigo-700
      "
    >

      <input
        name="lessonId"
        placeholder="شناسه درس"
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          w-full
          text-indigo-700
          placeholder:text-indigo-400
        "
      />


      <input
        name="professorId"
        placeholder="شناسه استاد"
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          w-full
          text-indigo-700
          placeholder:text-indigo-400
        "
      />


      <input
        name="semester"
        placeholder="نیمسال"
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          w-full
          text-indigo-700
          placeholder:text-indigo-400
        "
      />


      <Button onClick={submit}>
        ثبت دوره
      </Button>

    </div>
  );
}