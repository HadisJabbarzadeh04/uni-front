import TeacherForm from "@/components/forms/TeacherForm";

export default function CreateTeacherPage() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-6
        text-indigo-700
      "
    >
      <h2
        className="
          mb-5
          text-indigo-700
        "
      >
        ایجاد استاد
      </h2>

      <TeacherForm />
    </div>
  );
}