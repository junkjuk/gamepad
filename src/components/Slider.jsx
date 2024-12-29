
export function Slider(props) {

  const toPrecent = (val) => {
    if (val > 0) {
      return 50 + val / 1000 * 50
    } else {
      return 50  - val / 1000 * -50
    }
  }
  const val = toPrecent(props.value)
  return (
    <>
      <div className="h-[400px] bg-gray-200 w-[200px] items-end">
        <div className="" style={{height: (100 - val) + '%'}}>

        </div>
        <div className="bg-red-400 w-full text-center" style={{height: val + '%'}}>
          {props.value}
        </div>
      </div>
    </>
  )
}