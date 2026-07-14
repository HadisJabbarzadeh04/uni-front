"use client";

import {
  useEffect,
  useState,
} from "react";

import DataTable from "@/components/common/DataTable";
import Loading from "@/components/common/Loading";


// TODO:
// import {
//   getTranscript,
// } from "@/services/transcript/student";


export default function TranscriptPage() {

  const [grades, setGrades] =
    useState<any[]>([]);


  const [loading, setLoading] =
    useState(true);



  async function load() {

    try {

      // TODO:
      //
      // const data =
      //   await getTranscript();
      //
      // setGrades(data);


      setGrades([]);


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

      <h2 className="mb-5">
        کارنامه
      </h2>


      <DataTable
        columns={[
          "lesson",
          "units",
          "grade",
          "semester",
        ]}
        data={grades}
      />


    </div>
  );
}