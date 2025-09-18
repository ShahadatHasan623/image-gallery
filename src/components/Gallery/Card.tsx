import Image from 'next/image'
import React, { FC } from 'react'
import { SaveIcon } from '../icons'
import { IImage } from '@/types'



export const Card:FC<IImage> = (props) => {
 const {name,url,category,likes,shares} =props || {}
  return (
    <figure className='w-fit relative group overflow-hidden rounded'>
        <Image src={url} width={400} height={600} alt={name} className='w-full max-w-md h-auto group-hover:scale-105 transition-all duration-200'></Image>
        <figcaption className='w-full p-3 absolute -bottom-20 left-0 bg-slate-900/30 text-white flex justify-between items-center invisible group-hover:bottom-0 group-hover:visible transition-all duration-200'>
            <div className='space-y-2'>
                <p>{name}</p>
                <p>{likes} likes | {shares} shares</p>
            </div>
            <button><SaveIcon></SaveIcon></button>
        </figcaption>
    </figure>
  )
}
