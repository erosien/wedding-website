import Background from '../assets/images/4.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center h-full bg-cover bg-right bg-fixed font-serif'
      >
        <div className='flex place-items-center h-screen'>
            <h1 className='text-white text-opacity-75 rounded text-8xl'>E & J</h1>
        </div>
    </div>
  )
}

export default Home
