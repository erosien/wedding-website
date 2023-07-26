import Background from "../assets/images/1.jpg"
import headerimg from "../assets/images/KNP_5000.jpg"
import img1 from "../assets/images/KNP_5137.jpg"
import img2 from "../assets/images/KNP_4635.jpg"
import img3 from "../assets/images/KNP_5482.jpg"
import img4 from "../assets/images/KNP_5226.jpg"
import img5 from "../assets/images/KNP_4744.jpg"
import img6 from "../assets/images/KNP_4921.jpg"
import colorscheme from "../assets/images/colorscheme.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch, faHeart, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
  return (
  <div style={{ backgroundImage: `url(${ Background })`}}
  className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-sans'>
    <div className="bg-stone-200 container mt-5 mb-5 p-5 text-center w-2/3 border-double border-4 border-stone-300 rounded-lg">
      <h1 className="p-3 justify-center text-4xl text-center font-bold">Details</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 border-2 p-1 m-1">
        <div className="tile mx-auto text-1xl space-y-4">
          <p className="font-bold">Our Wedding Day</p>
          <p> June 21st, 2024</p>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="tile mx-auto text-1xl space-y-4">
          <p className="font-bold">Ceremony</p>
          <p>5:00 PM</p>
          <FontAwesomeIcon icon={faChurch} />
        </div>
        <div className="tile mx-auto text-1xl space-y-4">
          <p className="font-bold">Reception</p>
          <p>6:30 PM</p>
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </div>
      </div>
      <div className="mx-auto space-y-5 p-1">
        <img src={headerimg} className="object-cover object-top w-full h-32 shadow-lg rounded-lg"></img>
      </div>
      <div className="mx-auto space-y-1 p-1 w-2/3">
        <p className="text-1xl mx-auto m-1">Both the ceremony and reception will be held at <b>Agriturismo Sant'Alfonso</b> located
         at Via S. Alfonso, 6 - 84010 Furore, Italy. Shuttles can be arranged from your accomodation upon request.</p>
        <p className="text-1xl mx-auto p-2">The theme for the wedding is 70's Garden Party - please dress formally.</p>
        <p className="text-1xl mx-auto p-2">Color Scheme:</p>
        <img src={colorscheme} className="object-cover object-top w-full h-20 shadow-lg rounded-lg"></img>
      </div>
      <div className="container p-2 mx-auto space-y-2 lg:space-y-0 lg:gap-5 lg:grid lg:grid-cols-3">
        <div className="w-full rounded">
          <img src={img1}></img>
        </div>
        <div className="w-full rounded">
          <img src={img2}></img>
        </div>
        <div className="w-full rounded">
          <img src={img3}></img>
        </div>
        <div className="w-full rounded">
          <img src={img4}></img>
        </div>
        <div className="w-full rounded">
          <img src={img5}></img>
        </div>
        <div className="w-full rounded">
          <img src={img6}></img>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details
