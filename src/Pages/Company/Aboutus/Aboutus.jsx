import React from 'react'
import aboutus from '../../../assets/images/aboutus.jpg';
import ImageTag from '../../../Components/ImageTag/ImageTag';
import OrangeBtn from '../../../Components/Buttons/OrangeBtn';


import ourstory from '../../../assets/images/orustory.png';
// import ourmission from '../../../assets/images/ourmission.png';
// import ourvission from '../../../assets/images/ourvission.png';
// import corevalue from '../../../assets/images/corevalue.png';
export default function Aboutus() {
    return (
        <React.Fragment>
            <section className='relative overflow-hidden isolate bg-[#d9d9d9] min-h-dvh'>
                <div className="absolute inset-0">
                    <ImageTag src={aboutus} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative inset-x-0 z-10 flex justify-center md:justify-start items-center h-screen top-1/4 lg:left-11">
                    <div className="max-w-sm md:max-w-xl lg:max-w-5xl px-4 py-4 md:px-8 space-y-6">
                        <h1 className="text-white font-bold lg:max-w-2xl tracking-wide text-sm text-center md:text-start lg:text-2xl font-Poppins leading-6">We are shaping the future of logistics, committed to elevating your experience and delivering excellence nationwide.</h1>
                        <p className='max-w-md md:text-start text-center text-white font-Poppins font-normal text-[0.65rem] tracking-wide leading-5 '>Lorem ipsum dolor sit amet consectetur. Risus nulla vulputate lobortis aliquet odio aliquam lectus viverra. Lorem fames dui sit quam.</p>
                        <div className="block md:text-start text-center">
                            <OrangeBtn text={'Get a Qutoe'} />
                        </div>
                    </div>
                </div>
            </section>

            {/* story */}
            <section className='relative isolate overflow-hidden bg-[#d9d9d9] '>
                <div className="mx-auto max-w-full md:max-w-screen-xl">
                    <div className="px-4 py-4 md:px-8 md:py-10 flex gap-x-10 justify-start items-start md:flex-row flex-col">
                        <div className="w-full lg:w-1/2 md:pr-5 h-1/2 overflow-hidden rounded-md sm:rounded-xl">
                            <ImageTag src={ourstory} className={'object-fill'} alt={'orustory'} />
                        </div>
                        <div className="w-full mt-4 md:mt-0">
                            <h1 className='text-2xl font-bold  md:text-4xl font-Poppins tracking-wide leading-5 text-black'>Our Stroy</h1>
                            <p className='text-[0.65rem] mt-4 font-Poppins font-normal leading-5 tracking-normal md:-tracking-tight text-[#000000]'>began as a bold startup with a clear vision to disrupt and elevate the logistics industry in India. Recognizing an opportunity to transform the landscape, we embarked on a mission to innovate and lead with unwavering determination. Driven by a commitment to excellence and a sense of responsibility, we set out to redefine industry standards. As we navigate early challenges and achieve significant milestones, 16D Cargos is emerging as a powerful force poised to conquer the national logistics space, setting new benchmarks and shaping a future where logistics excellence is the new standard.</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
