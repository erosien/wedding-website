import Background from "../assets/images/1.jpg"
import ColorScheme from "../assets/images/colorscheme.png"
import Venue from "../assets/images/venue.jpg"
import Venue1 from "../assets/images/venue1.jpg"
import Venue2 from "../assets/images/venue2.jpg"
import Venue3 from "../assets/images/venue3.jpg"

const Details = () => {
  return (
  <div style={{ backgroundImage: `url(${ Background })`}}
  className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-serif'>
    <div className="bg-stone-200 m-5 text-center w-2/3 border-double border-4 border-stone-300 rounded-lg">
      <h1 className="p-8 justify-center text-6xl text-center font-bold">Details</h1>
      <div className="grid grid-cols-2 gap-2 border-2 p-5 m-2">
        <div className="tile mx-auto text-3xl space-y-5">
          <p>Wedding Date: 6/21/24</p>
          <p>Location: Agriturismo Sant'Alfonso</p>
          <p>Address: Via S. Alfonso, 6 | Furore, Italy</p>
          <p>Ceremony: 5:00 PM</p>
          <p>Weather: 67 - 78 degrees F</p>
          <p>Dress code: Formal</p>
          <p>Theme: 70's Garden Party</p>
          <p>Color Scheme:</p>
          <img src={ColorScheme} className="mx-auto h-1/2 w-full object-cover"></img>
        </div>
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <img src={Venue} className="mx-auto h-full w-full object-cover"></img>
        </div>
      </div>
      <div className="mx-auto space-y-5 p-5">
        <img src={Venue1} className="mx-auto h-96 w-full object-cover"></img>
        <img src={Venue2} className="mx-auto h-96 w-full object-cover"></img>
        <img src={Venue3} className="mx-auto h-96 w-full object-cover"></img>
      </div>
    </div>
  </div>
  )
}

export default Details
