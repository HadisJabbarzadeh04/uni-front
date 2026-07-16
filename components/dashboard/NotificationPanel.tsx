"use client";


interface Notification {
  [key:string]: any;
}


interface Props {
  notifications?: Notification[];
}


export default function NotificationPanel({
  notifications = [],
}: Props) {


  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-2xl
        p-6
      "
    >

      <h2 className="font-bold mb-5">
        اعلان‌ها
      </h2>


      {
        notifications.map((item,index)=>(
          <div
            key={index}
            className="mb-3"
          >
            {item.message || "-"}
          </div>
        ))
      }


    </div>
  );
}