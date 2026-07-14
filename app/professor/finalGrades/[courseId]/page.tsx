"use client";

import {
  useParams,
  useRouter,
} from "next/navigation";

import Button from "@/components/common/Button";


export default function FinalGradesPage() {
  const params = useParams();
  const router = useRouter();

  const courseId =
    params.courseId as string;



  async function finalize() {
    try {

      // TODO:
      // Replace when backend route exists.
      //
      // Example:
      // await finalizeGrades(courseId);


      alert("نمرات نهایی شد");


      router.push(
        "/professor/courses"
      );

    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div
      className="
        bg-white
        rounded-xl
        p-8
      "
    >

      <h2>
        ثبت نهایی نمرات
      </h2>


      <p className="my-5">
        بعد از تایید امکان تغییر وجود ندارد.
      </p>


      <Button onClick={finalize}>
        تایید نهایی
      </Button>

    </div>
  );
}