import Background from "../assets/images/1.jpg"
import img1 from "../assets/images/KNP_4625.jpg"

const Itinerary = () => {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed font-sans'>  
        <div className="bg-stone-200 container mt-5 mb-5 place-items-center p-5 w-2/3 border-double border-4 border-stone-300 rounded-lg">
            <h1 className="p-3 justify-center text-4xl text-center font-bold">Itinerary</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 w-2/3 mx-auto bg-stone-300 border-2 border-black rounded-lg p-3 mb-5">
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                    <p>Monday, 6/17</p>
                </div>
                <div className="tile text-1xl space-y-1 align-text-middle">
                    <p>♡ Arrive in Positano</p>
                    <p>♡ Free Day</p>
                </div>
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                    <p>Tuesday, 6/18</p>
                </div>
                <div className="tile text-1xl space-y-1 align-text-middle">
                    <p>♡ Jayson's 31st Birthday</p>
                    <p>♡ Beach Day</p>
                    <p>♡ Birthday Dinner</p>
                </div>
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                <p>Wednesday, 6/19</p>
                </div>
                <div className="tile text-1xl space-y-1 align-text-middle">
                    <p>♡ Free Day</p>
                    <p>♡ Bach Pre-Party Dinner</p>
                    <p>♡ Combined Bach Party</p>
                </div>
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                    <p>Thursday, 6/20</p>
                </div>
                <div className="tile text-1xl space-y-1 align-middle">
                    <p>♡ Arrive at Venue</p>
                    <p>♡ Ceremony Rehearsal</p>
                    <p>♡ Rehearsal Dinner</p>
                </div>
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                    <p>Friday, 6/21</p>
                </div>
                <div className="tile text-1xl space-y-1">
                    <p>♡ The Big Day!</p>
                </div>
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                    <p>Saturday, 6/22</p>
                </div>
                <div className="tile text-1xl space-y-1 align-middle">
                    <p>♡ Brunch</p>
                    <p>♡ Recovery Beach Day</p>
                </div>
                <div className="tile justify-self-center self-center text-1xl space-y-6 font-bold">
                    <p>Sunday, 6/23</p>
                </div>
                <div className="tile text-1xl space-y-1 align-middle">
                    <p>♡ The Honeymoon Begins!</p>
                </div>
            </div>
        <div className="justify-center">
            <img src={img1} className="mx-auto w-2/3 h-96 object-cover object-center shadow-lg rounded-lg"></img>
        </div>
        </div>
        </div>
  )
}

export default Itinerary
