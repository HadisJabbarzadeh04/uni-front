"use client";

import {
  useState,
} from "react";

import Button from "@/components/common/Button";


// TODO:
// import {
//   createDeleteRequest,
// } from "@/services/request/student";


export default function DeleteRequestPage() {

  const [courseId, setCourseId] =
    useState("");



  async function submit() {

    try {

      // TODO:
      //
      // await createDeleteRequest({
      //   courseId,
      // });


      alert(
        "درخواست حذف ارسال شد"
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

      <h2>
        حذف دوره
      </h2>


      <input
        placeholder="شناسه دوره"
        value={courseId}
        onChange={(e) =>
          setCourseId(
            e.target.value
          )
        }
        className="
          border
          p-3
          rounded-xl
          my-5
          w-full
        "
      />


      <Button onClick={submit}>
        ثبت درخواست
      </Button>


    </div>
  );
}