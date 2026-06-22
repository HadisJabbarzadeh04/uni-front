"use client";

import { useEffect, useState } from "react";
import { getCourseList } from "@/services/courseService";

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await getCourseList();

        console.log("📦 course response:", res);

        setCourses(Array.isArray(res?.data) ? res.data : []);
      } catch (err) {
        console.error("❌ course error:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Code</th>
            <th>Unit</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c, index) => (
            <tr key={index}>
              <td>{c.id}</td>
              <td>{c.title}</td>
              <td>{c.code}</td>
              <td>{c.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}