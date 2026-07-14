export default function Button({
children,
onClick,
type="button",
variant="primary"
}){


const style =
variant==="danger"
?
"bg-red-600"
:
"bg-blue-600";



return (

<button

type={type}

onClick={onClick}

className={`
${style}
text-white
px-5
py-2
rounded-xl
hover:opacity-90
`}

>

{children}

</button>

)

}