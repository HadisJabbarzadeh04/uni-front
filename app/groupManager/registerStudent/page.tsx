"use client";

import {
  useState,
} from "react";

import Button from "@/components/common/Button";

import {
  createStudentCourse,
} from "@/services/studentCourse/student";


export default function RegisterStudentPage() {

  const [form, setForm] =
    useState({
      studentId: "",
      courseId: "",
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
      await createStudentCourse(form);

      alert("ثبت شد");

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
        text-indigo-700
      "
    >

      <input
        name="studentId"
        placeholder="شناسه دانشجو"
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          text-indigo-700
          placeholder:text-indigo-400
        "
      />


      <input
        name="courseId"
        placeholder="شناسه دوره"
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          text-indigo-700
          placeholder:text-indigo-400
        "
      />


      <Button onClick={submit}>
        ثبت
      </Button>

    </div>
  );
}