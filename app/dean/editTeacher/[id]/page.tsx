"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import FormInput from "@/components/common/FormInput";
import Button from "@/components/common/Button";

import {
  getTeacherDetail,
  editTeacher,
} from "@/services/teacher/departmentManager";

interface TeacherForm {
  name: string;
  email: string;
  group: string;
}

export default function EditTeacherPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [form, setForm] =
    useState<TeacherForm>({
      name: "",
      email: "",
      group: "",
    });

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getTeacherDetail(id);

        setForm(data);
      } catch (err) {
        console.error(err);
      }
    }

    if (id) {
      load();
    }
  }, [id]);

  function change(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  }

  async function save() {
    try {
      await editTeacher({
        id,
        ...form,
      });

      router.push("/dean/teachers");

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
      <FormInput
        label="نام"
        name="name"
        value={form.name}
        onChange={change}
      />

      <FormInput
        label="ایمیل"
        name="email"
        value={form.email}
        onChange={change}
      />

      <FormInput
        label="گروه"
        name="group"
        value={form.group}
        onChange={change}
      />

      <Button onClick={save}>
        ذخیره
      </Button>
    </div>
  );
}