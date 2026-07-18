"use client";

import { useEffect, useState } from "react";

import Button from "@/components/common/Button";

// TODO:
// import {
//   getGroupList,
//   assignGroupManager,
// } from "@/services/group/departmentManager";

interface Group {
  id: string;
  title: string;
}

export default function AssignManagerPage() {
  const [groups, setGroups] =
    useState<Group[]>([]);

  const [selected, setSelected] =
    useState("");

  const [teacher, setTeacher] =
    useState("");

  useEffect(() => {
    async function load() {
      try {
        // TODO:
        // const data =
        //   await getGroupList();
        // setGroups(data);

        // Temporary
        setGroups([]);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  async function submit() {
    try {
      // TODO:
      // await assignGroupManager(
      //   selected,
      //   teacher
      // );

      alert("مدیر گروه تعیین شد");
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
        shadow-lg
        text-indigo-700
      "
    >
      <select
        className="
          border
          p-3
          rounded-xl
          text-indigo-700
        "
        value={selected}
        onChange={(e) =>
          setSelected(e.target.value)
        }
      >
        <option value="">
          انتخاب گروه
        </option>

        {groups.map((g) => (
          <option
            key={g.id}
            value={g.id}
          >
            {g.title}
          </option>
        ))}
      </select>

      <input
        className="
          border
          p-3
          rounded-xl
          block
          my-5
          text-indigo-700
          placeholder:text-indigo-400
        "
        placeholder="شناسه استاد"
        value={teacher}
        onChange={(e) =>
          setTeacher(e.target.value)
        }
      />

      <Button onClick={submit}>
        تعیین مدیر
      </Button>
    </div>
  );
}