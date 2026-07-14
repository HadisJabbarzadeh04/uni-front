"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";
import Modal from "@/components/common/Modal";
import TeacherForm from "@/components/forms/TeacherForm";

import {
  getTeacherList,
} from "@/services/teacher/departmentManager";


export default function TeachersPage() {
  const [teachers, setTeachers] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);


  async function load() {
    try {
      const data =
        await getTeacherList();

      setTeachers(data);

    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    load();
  }, []);



  if (loading) {
    return <Loading />;
  }


  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="
          bg-blue-600
          text-white
          p-3
          rounded-xl
          mb-5
        "
      >
        ایجاد استاد
      </button>


      <DataTable
        columns={[
          "id",
          "name",
          "email",
          "group",
          "status",
        ]}
        data={teachers}
      />


      <Modal
        open={open}
        title="ایجاد استاد"
        close={() =>
          setOpen(false)
        }
      >
        <TeacherForm
          close={() =>
            setOpen(false)
          }
          refresh={load}
        />
      </Modal>
    </>
  );
}