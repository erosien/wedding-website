import Background from "../assets/images/1.jpg"
import img1 from "../assets/images/3.jpg"

const Itinerary = () => {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-serif'>  
        <div className="bg-stone-200 container m-5 place-items-center p-5 w-100 border-double border-4 border-stone-300 rounded-lg">
            <h1 className="p-8 justify-center text-6xl text-center font-bold">Itinerary</h1>
            <div className="grid grid-cols-2 gap-6 border-2 p-5 m-2">
                <div className="tile justify-self-center text-3xl space-y-3 font-bold">
                    <p>June 17th</p>
                    <p>Monday</p>
                </div>
                <div className="tile text-2xl space-y-1 align-text-middle">
                    <p>♡ Arrive in Positano</p>
                    <p>♡ Free Day</p>
                </div>
                <div className="tile justify-self-center self-center text-3xl space-y-6 font-bold">
                    <p>June 18th</p>
                    <p>Tuesday</p>
                </div>
                <div className="tile text-2xl space-y-1 align-text-middle">
                    <p>♡ Jayson's 31st Birthday</p>
                    <p>♡ Activity TBD</p>
                    <p>♡ Dinner TBD</p>
                </div>
                <div className="tile justify-self-center self-center text-3xl space-y-6 font-bold">
                <p>June 19th</p>
                <p>Wednesday</p>
                </div>
                <div className="tile text-2xl space-y-1 align-text-middle">
                    <p>♡ Bachelorette/Bachelor Parties</p>
                    <p>♡ Half Day Boat Tour</p>
                    <p>♡ Activites and food on Capri</p>
                    <p>♡ Club Night at Music On the Rocks</p>
                </div>
                <div className="tile justify-self-center self-center text-3xl space-y-6 font-bold">
                    <p>June 20th</p>
                    <p>Thursday</p>
                </div>
                <div className="tile text-2xl space-y-1 align-middle">
                    <p>♡ Arrive at venue</p>
                    <p>♡ Ceremony Rehearsal</p>
                    <p>♡ Rehearsal Dinner</p>
                </div>
                <div className="tile justify-self-center self-center text-3xl space-y-6 font-bold">
                    <p>June 21st</p>
                    <p>Friday</p>
                </div>
                <div className="tile text-2xl space-y-1">
                    <p>♡ Wedding Day!</p>
                </div>
                <div className="tile justify-self-center self-center text-3xl space-y-6 font-bold">
                    <p>June 22nd</p>
                    <p>Saturday</p>
                </div>
                <div className="tile text-2xl space-y-1 align-middle">
                    <p>♡ Brunch</p>
                    <p>♡ Recovery Beach Day</p>
                </div>
                <div className="tile justify-self-center self-center text-3xl space-y-6 font-bold">
                    <p>June 23rd</p>
                    <p>Sunday</p>
                </div>
                <div className="tile text-2xl space-y-1 align-middle">
                    <p>♡ The Honeymoon Begins!</p>
                </div>
            </div>
        <div className="justify-center">
            <img src={img1} className="mx-auto w-full object-cover"></img>
        </div>
        </div>
        </div>
  )
}

export default Itinerary
