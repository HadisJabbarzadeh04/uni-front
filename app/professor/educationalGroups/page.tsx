"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";

// TODO:
// import { getGroupList } from "@/services/group/teacher";


export default function EducationalGroupsPage() {
  const [groups, setGroups] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);



  useEffect(() => {
    async function load() {
      try {

        // TODO:
        // const data = await getGroupList();
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
    <div>

      <h2 className="mb-5">
        گروه‌های آموزشی
      </h2>


      <DataTable
        columns={[
          "id",
          "title",
          "manager",
          "members",
        ]}
        data={groups}
      />

    </div>
  );
}