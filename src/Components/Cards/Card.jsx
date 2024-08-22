import React from 'react'
import ImageTag from '../ImageTag/ImageTag'
export default function Card({ title, img, content }) {
    return (
        <React.Fragment>
            <div className='rounded-lg bg-white shadow-custom-white shadow-gray-500'>
                <div className='px-4 py-4'>
                    <div className="flex justify-start items-center gap-x-3">
                        <div className='w-6 rounded-full bg-black h-auto'>
                            <ImageTag src={img} alt={'profil'} />
                        </div>
                        <div className="px-3 py-3">
                            <p className='text-sm font-Poppins tracking-wider font-bold text-black'>{title}</p>
                        </div>
                    </div>
                    <div className="max-w-full md:max-w-md mt-4">
                        <p className='text-[8px] leading-4 tracking-wider font-Poppins font-normal text-black'>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
