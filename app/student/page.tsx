"use client";

import { useEffect, useState } from "react";
import { getStudentList } from "@/services/studentService";

export default function StudentsPage() {
  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadStudents() {
      try {
        const res =
          await getStudentList();

        console.log(res);

        setStudents(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
  <div style={{ padding: "20px" }}>
    <h1>Students</h1>

    <table border={1} cellPadding={10}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Student Number</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s, index) => (
          <tr key={index}>
            <td>{s.id}</td>
            <td>{s.firstName}</td>
            <td>{s.lastName}</td>
            <td>{s.studentNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}