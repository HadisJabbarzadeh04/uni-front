"use client";

import {
  useState,
} from "react";

import Button from "@/components/common/Button";


// TODO:
// import {
//   createObjection,
// } from "@/services/objection/student";


export default function ObjectionsPage() {

  const [form, setForm] =
    useState({
      courseId: "",
      message: "",
    });



  function change(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  }



  async function submit() {

    try {

      // TODO:
      //
      // await createObjection(form);


      alert(
        "اعتراض ثبت شد"
      );


      setForm({
        courseId: "",
        message: "",
      });


    } catch (err) {
      console.error(err);
    }

  }



  return (
    <div
      className="
        bg-white
        rounded-xl
        p-6
        space-y-4
      "
    >

      <input
        name="courseId"
        placeholder="شناسه درس"
        value={form.courseId}
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          w-full
        "
      />


      <textarea
        name="message"
        placeholder="متن اعتراض"
        value={form.message}
        onChange={change}
        className="
          border
          p-3
          rounded-xl
          w-full
        "
      />


      <Button onClick={submit}>
        ثبت اعتراض
      </Button>


    </div>
  );
}