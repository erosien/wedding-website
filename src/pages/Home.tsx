import Background from '../assets/images/4.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}}
      className='flex flex-row justify-center mx-auto bg-cover bg-right bg-fixed font-serif'
      >
        <div className='flex place-items-center h-screen'>
          <div className='p-8 flex-row'>
            <h1 className='p-5 text-white text-opacity-75 rounded text-9xl'>E & J</h1>
          </div>
        </div>
    </div>
  )
}

export default Home
