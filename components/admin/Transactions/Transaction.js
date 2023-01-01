import React from 'react'
import Image from 'next/image'


function Transaction() {
  return (
    <div className="w-full bg-white my-2 h-12">
        <div className="flex justify-between">
            <div className="flex items-center justify-center">
                <div>
                    <Image className="p-2" width={50} height={50} src="/assets/imgs/authors/author-1.jpg"/>
                </div>
                <div >
                    <span className='text-xs'>FirstName Lastanem</span>
                    <p className='text-xs'>Date</p>
                </div>
            </div>
            <div className="p-2">
                <p>Price</p>
            </div>
        </div>
        
    </div>
  )
}

export default Transaction