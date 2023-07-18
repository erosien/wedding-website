import stay1 from "../assets/images/stay1.jpg"
import stay2 from "../assets/images/stay2.jpg"
import stay3 from "../assets/images/stay3.jpg"
import stay4 from "../assets/images/stay4.jpg"
import stay5 from "../assets/images/stay5.jpg"
import stay6 from "../assets/images/stay6.jpg"
import Background from "../assets/images/1.jpg"
import { Button } from "@mui/material"

const Accomodations = () => {
  return (
  <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-serif'>  
    <div className="bg-stone-200 container mt-5 mb-5 place-items-center p-5 w-2/3 border-double border-4 border-stone-300 rounded-lg">
      <h1 className="p-8 justify-center text-6xl text-center font-bold">Accomodations</h1>
      <h2 className="text-3xl italic text-center">Positano Stays (6/17/24 - 6/20/24)</h2>
      <div className="grid grid-cols-2 gap-6 border-2 p-5 m-2">
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <h1 className="tile-marker font-bold text-center">Casa Oceano</h1>
          <p>Two-Bedroom Apartment</p>
          <p>$1,800 for 2 | $1,906 for 3 | $2,118 for 4</p>
          <p>2 Queen Beds | 2 Rooms | 1 Bath</p>
          <p>Closest to beach & town center</p>
          <p>Breakfast Included</p>
          <p className="text-center"><a href="https://www.booking.com/Share-2LUmogK">
            <Button variant="outlined">Book Here</Button>
            </a>
          </p>
        </div>
        <div className="tile">
        <img src={stay1} className="mx-auto h-96 w-full object-cover border-solid border-5 border-stone-300 rounded" alt="Hotel room with a bed and a couch" />
        </div>
        <div className="tile">
          <img src={stay2} className="mx-auto h-96 w-full object-cover  border-solid border-5 border-stone-300 rounded" alt="Hotel room with a bed and a couch" />
        </div>
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <h1 className="tile-marker font-bold text-center">Casa Laurito</h1>
          <p>One-Bedroom Apartment</p>
          <p>$978 for 2 | $1,141 for 3</p>
          <p>1 Full Bed | 1 Room | 1 Bath</p>
          <p>Farther from the town center</p>
          <p>Breakfast Included</p>
          <p className="text-center"><a href="https://www.booking.com/Share-kzPhSNQ">
            <Button variant="outlined">Book Here</Button>
            </a>
          </p>
        </div>
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <h1 className="tile-marker font-bold text-center">Casa Roberta</h1>
          <p>One-Bedroom Apartment</p>
          <p>$619 for 2</p>
          <p>1 Full Bed | 1 Room | 1 Bath</p>
          <p>Farthest from town center</p>
          <p>Breakfast Included</p>
          <p className="text-center"><a href="https://www.booking.com/Share-54Favs">
            <Button variant="outlined">Book Here</Button>
            </a>
          </p>
        </div>
        <div className="tile">
        <img src={stay3} className="mx-auto h-96 w-full object-cover border-solid border-5 border-stone-300 rounded" alt="Hotel room with a bed" />
        </div>
      </div>
      <hr className="w-3/4 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <h2 className="text-3xl italic text-center">Furore Stays (6/20/24 - 6/23/24)</h2>
      <div className="grid grid-cols-2 gap-6 border-2 p-5 m-2">
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <h1 className="tile-marker font-bold text-center">Villa Paradise Resort</h1>
          <p>Deluxe Triple Room</p>
          <p>$391 for 1 | $456 for 2 | $521 for 3</p>
          <p>1 Twin 1 King Bed | 1 Room | 1 Bath</p>
          <p>Airport Shuttle Offered</p>
          <p>Breakfast Included</p>
          <p className="text-center"><a href="https://www.booking.com/Share-8GcSO4">
            <Button variant="outlined">Book Here</Button>
            </a>
          </p>
        </div>
        <div className="tile">
        <img src={stay4} className="mx-auto h-96 w-full object-cover border-solid border-5 border-stone-300 rounded" alt="Hotel room with a bed and a couch" />
        </div>
        <div className="tile">
          <img src={stay5} className="mx-auto h-96 w-full object-cover border-solid border-5 border-stone-300 rounded" alt="Hotel room with a bed and a couch" />
        </div>
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <h1 className="tile-marker font-bold text-center">Ambra Holiday House</h1>
          <p>Two-Bedroom Apartment</p>
          <p>$471 for 2 | $499 for 3 | $609 for 4</p>
          <p>2 Full 1 Sofa Bed | 2 Room | 1 Bath</p>
          <p>Balcony & Kitchen</p>
          <p>Free WiFi</p>
          <p className="text-center"><a href="https://www.booking.com/Share-Ir1KJy">
            <Button variant="outlined">Book Here</Button>
            </a>
          </p>
        </div>
        <div className="tile justify-self-center self-center text-3xl space-y-6">
          <h1 className="tile-marker font-bold text-center">Villa le Arcate</h1>
          <p>Three-Bedroom House</p>
          <p>$978 for 7</p>
          <p>3 Queen 1 Sofa Bed | 3 Rooms | 1 Bath</p>
          <p>Airport Shuttle Offered</p>
          <p>Terrace, BBQ facilities, free parking</p>
          <p className="text-center"><a href="https://www.booking.com/Share-Gg5685">
            <Button variant="outlined">Book Here</Button>
            </a>
          </p>
        </div>
        <div className="tile">
        <img src={stay6} className="mx-auto h-96 w-full object-cover border-solid border-5 border-stone-300 rounded" alt="Hotel room with a bed" />
        </div>
      </div>
  </div>
</div>
  )
}

export default Accomodations
