import Slider from "react-rc-carousel"

const SliderCon = ({ data }: any) => {
  return (
    <Slider>
      {data.map((item: any, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </Slider>
  )
}
export default SliderCon
