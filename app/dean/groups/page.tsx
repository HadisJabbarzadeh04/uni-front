"use client";

import { useEffect, useState } from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

// TODO:
// import { getGroupList } from "@/services/group/departmentManager";

interface Group {
  id: string;
  title: string;
  manager: string;
  members: number;
}

export default function GroupsPage() {
  const [groups, setGroups] =
    useState<Group[]>([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {
    async function load() {
      try {
        // TODO:
        // const data =
        //   await getGroupList();

        // setGroups(data);

        setGroups([]);

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
        "title",
        "manager",
        "members",
      ]}
      data={groups}
    />
  );
}