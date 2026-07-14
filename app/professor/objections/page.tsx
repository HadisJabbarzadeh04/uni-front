"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Button from "@/components/common/Button";


// TODO:
// import {
//   getObjections,
//   answerObjection,
// } from "@/services/objection/teacher";


export default function ObjectionsPage() {

  const [data, setData] =
    useState<any[]>([]);



  async function load() {
    try {

      // TODO:
      //
      // const result =
      //   await getObjections();
      //
      // setData(result);


      setData([]);


    } catch (err) {
      console.error(err);
    }
  }



  useEffect(() => {
    load();
  }, []);



  async function answer(
    id: string
  ) {

    const text =
      prompt(
        "پاسخ اعتراض:"
      );


    try {

      // TODO:
      //
      // await answerObjection(
      //   id,
      //   {
      //     answer: text,
      //     status: "answered",
      //   }
      // );


      load();


    } catch (err) {
      console.error(err);
    }

  }



  return (
    <DataTable
      columns={[
        "id",
        "student",
        "lesson",
        "message",
        "status",
      ]}
      data={data}
      actions={(row: any) => (
        <Button
          onClick={() =>
            answer(row.id)
          }
        >
          پاسخ
        </Button>
      )}
    />
  );
}