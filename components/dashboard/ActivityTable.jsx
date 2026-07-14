import DataTable
from "../common/DataTable";


export default function ActivityTable({
data=[]
}){


return (

<DataTable

columns={[
"title",
"date",
"status"
]}

data={data}


/>

)

}