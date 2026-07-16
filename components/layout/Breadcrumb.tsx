"use client";

interface BreadcrumbProps {
  items?: string[];
}


export default function Breadcrumb({
  items = [],
}: BreadcrumbProps) {


  return (
    <div
      className="
        text-sm
        text-slate-500
        mb-5
      "
    >
      {items.join(" / ")}
    </div>
  );
}