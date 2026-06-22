"use client";

import { useEffect, useState } from "react";
import { getTeacherList } from "@/services/teacherService";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getTeacherList();

        console.log("📦 teacher response:", res);

        setTeachers(res?.data ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teachers</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Teacher Number</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((t, index) => (
            <tr key={index}>
              <td>{t.id}</td>
              <td>{t.firstName}</td>
              <td>{t.lastName}</td>
              <td>{t.teacherNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}