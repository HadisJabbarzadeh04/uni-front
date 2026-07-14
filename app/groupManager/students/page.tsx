"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import {
  getStudentList,
} from "@/services/student/departmentGroupManager";


export default function StudentsPage() {
  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);



  async function load() {
    try {
      const data =
        await getStudentList();

      setStudents(data);

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
    <div>

      <a
        href="/groupManager/registerStudent"
        className="
          bg-green-600
          text-white
          p-3
          rounded-xl
          inline-block
          mb-5
        "
      >
        ثبت دانشجو
      </a>


      <DataTable
        columns={[
          "id",
          "name",
          "number",
          "major",
          "status",
        ]}
        data={students}
      />

    </div>
  );
}