"use client";

import {
  useState,
} from "react";

import FormInput from "@/components/common/FormInput";
import Button from "@/components/common/Button";

import {
  createLesson,
} from "@/services/lesson/departmentGroupManager";


export default function CreateLessonPage() {

  const [form, setForm] =
    useState({
      code: "",
      title: "",
      units: "",
      group: "",
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
      await createLesson(form);

      alert("درس ایجاد شد");

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
        space-y-4
        text-indigo-700
      "
    >

      <FormInput
        label="کد درس"
        name="code"
        value={form.code}
        onChange={change}
      />


      <FormInput
        label="عنوان"
        name="title"
        value={form.title}
        onChange={change}
      />


      <FormInput
        label="واحد"
        name="units"
        value={form.units}
        onChange={change}
      />


      <Button onClick={submit}>
        ثبت
      </Button>

    </div>
  );
}