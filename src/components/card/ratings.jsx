'use client'
import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'

const Ratings = ({ ratingValue, readOnly }) => {
    const [rating, setRating] = useState(ratingValue?ratingValue:0)
    
    return <ReactRating style={{ maxWidth: 100 }} value={rating} readOnly={readOnly} onChange={setRating} />
}

export default Ratings;
