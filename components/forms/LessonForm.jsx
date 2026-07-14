import {
useState
}
from "react";


import Button
from "../common/Button";


import FormInput
from "../common/FormInput";


import {
createLesson
}
from "../../api/lessonApi";



export default function LessonForm({
close,
refresh
}){


const [form,setForm]=useState({

code:"",
title:"",
units:""

});



const change=e=>

setForm({

...form,

[e.target.name]:
e.target.value

});



const submit=async()=>{


await createLesson(form);


refresh();

close();

};



return (

<div
className="space-y-4"
>


<FormInput

label="کد درس"

name="code"

value={form.code}

onChange={change}

/>



<FormInput

label="عنوان"

name="title"

value={form.title}

onChange={change}

/>



<FormInput

label="واحد"

name="units"

value={form.units}

onChange={change}

/>



<Button onClick={submit}>
ثبت درس
</Button>


</div>

)

}