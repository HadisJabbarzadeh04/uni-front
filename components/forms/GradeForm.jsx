import {
useState
}
from "react";


import Button
from "../common/Button";


import {
submitGrade
}
from "../../api/gradeApi";



export default function GradeForm({
studentId,
courseId,
refresh
}){


const [grade,setGrade]=
useState("");



const save=async()=>{


await submitGrade({

studentId,

courseId,

grade

});


refresh();


};



return (

<div>


<input

value={grade}

onChange={
e=>setGrade(e.target.value)
}

placeholder="نمره"

className="
border
p-3
rounded-xl
"


/>



<Button
onClick={save}
>

ثبت نمره

</Button>



</div>

)

}