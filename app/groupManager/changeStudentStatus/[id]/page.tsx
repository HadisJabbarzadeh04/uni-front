"use client";

import { useState } from "react";

import {
  useParams,
} from "next/navigation";

import Button from "@/components/common/Button";

import {
  changeStudentStatus,
} from "@/services/student/departmentGroupManager";


export default function ChangeStudentStatusPage() {
  const params = useParams();

  const id = params.id as string;


  const [status, setStatus] =
    useState("");


  async function save() {
    try {
      await changeStudentStatus({
        id,
        status,
      });

      alert("وضعیت تغییر کرد");

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
      <select
        className="
          border
          p-3
          rounded-xl
        "
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="">
          انتخاب
        </option>

        <option value="ACTIVE">
          فعال
        </option>

        <option value="INACTIVE">
          غیرفعال
        </option>

        <option value="PROBATION">
          مشروط
        </option>
      </select>


      <Button onClick={save}>
        ثبت
      </Button>
    </div>
  );
}