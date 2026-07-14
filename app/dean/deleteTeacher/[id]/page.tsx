"use client";

import { useParams, useRouter } from "next/navigation";

import Button from "@/components/common/Button";

import { deleteTeacher } from "@/services/teacher/departmentManager";

export default function DeleteTeacherPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  async function remove() {
    try {
      await deleteTeacher(id);

      router.push("/dean/teachers");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      className="
        bg-white
        p-8
        rounded-2xl
      "
    >
      <h2>
        حذف استاد؟
      </h2>

      <Button
        variant="danger"
        onClick={remove}
      >
        حذف
      </Button>
    </div>
  );
}