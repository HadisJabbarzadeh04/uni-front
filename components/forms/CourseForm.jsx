import {
useState
}
from "react";


import Button
from "../common/Button";


import FormInput
from "../common/FormInput";


import {
createCourse
}
from "../../api/courseApi";



export default function CourseForm({
close,
refresh
}){


const [form,setForm]=useState({

lesson:"",
professor:"",
semester:""

});



const change=e=>

setForm({

...form,

[e.target.name]:
e.target.value

});



const submit=async()=>{


await createCourse(form);


refresh();

close();


};



return (

<div className="space-4">


<FormInput

label="درس"

name="lesson"

value={form.lesson}

onChange={change}

/>



<FormInput

label="استاد"

name="professor"

value={form.professor}

onChange={change}

/>



<FormInput

label="نیمسال"

name="semester"

value={form.semester}

onChange={change}

/>



<Button
onClick={submit}
>

ثبت دوره

</Button>



</div>

)

}