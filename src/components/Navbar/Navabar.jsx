
import Links from "./links/Links"

const Navabar = () => {

  return (
    <div className=" flex justify-between w-full items-center ">
      <div className="text-[30px] font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navabar