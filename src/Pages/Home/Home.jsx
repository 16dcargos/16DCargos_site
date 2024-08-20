import OrangeBtn from '../../Components/Buttons/OrangeBtn';
import Img from '../../Components/ImageTag/ImageTag';
import HomeHero from '../../assets/images/Home.png';
export default function Home() {
    return (
        <>
            <div className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Img src={HomeHero} alt="Background Image" className="object-cover object-center w-full h-full" />
                    {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <div className='text-5xl text relative lg:text-8xl flex justify-start flex-row font-bold font-Poppins  px-6 py-4 '>
                        <span className="hidden md:block text-xs sm:text-xs text-start font-medium tracking-wide font-Poppins mb-4 absolute inset-y-0">Welcome to</span>
                        <h1 className='tracking-wider'>
                            <span className='text-[#0025A9]'>16D</span> <span className='text-[#C96202]'>
                                Cargos
                            </span>
                        </h1>
                    </div>
                    <p className="text-xs lg:text-lg font-Poppins max-w-sm lg:max-w-lg leading-4 tracking-wider lg:tracking-wide text-gray-300 mb-6">We're dedicated to transforming logistics in India, delivering unmatched service and innovative solutions to meet all your transportation needs.</p>

                    <OrangeBtn text={'Learn More'} />
                </div>
            </div>

        </>
    )
}