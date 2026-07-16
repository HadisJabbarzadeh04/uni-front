"use client";


interface Props {
  data?: {
    [key:string]: any;
  }[];
}


export default function ActivityTable({
  data = [],
}: Props) {


  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-2xl
        p-6
        mt-6
      "
    >

      <h2 className="font-bold mb-5">
        فعالیت‌ها
      </h2>


      {
        data.map((item,index)=>(
          <div
            key={index}
            className="border-b py-2"
          >
            {JSON.stringify(item)}
          </div>
        ))
      }


    </div>
  );
}