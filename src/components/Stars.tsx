import React, { FC } from 'react'
import { Star } from './Star'

type StarsProps = {
    count?: number
}

export const Stars:FC<StarsProps> = ({count = 0}) => {
    const isValidCount = () => {
        if(!count || typeof count !== 'number' || count > 5){
            return false
        }
        return true
    }
  return (
    <>
        {isValidCount() && (
            <ul className='card-body-stars'>
                {Array.from({ length: count }).map((_, index) => (
                    <Star key={index} />
                ))}
            </ul>
        )}
    </>
  )
}
