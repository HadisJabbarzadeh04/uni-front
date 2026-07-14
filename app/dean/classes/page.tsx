"use client";

import { useEffect, useState } from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

import { getClassRoomList } from "@/services/classRoom/departmentManager";

export default function ClassesPage() {
  const [classes, setClasses] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getClassRoomList();

        setClasses(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <DataTable
      columns={[
        "id",
        "name",
        "capacity",
        "building",
        "status",
      ]}
      data={classes}
    />
  );
}