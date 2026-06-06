'use client';

import {Review} from "@/lib/model/model";
import ReviewUI from "@/app/movies/components/ReviewUI";
import styles from '@/app/movies/components/ReviewListUI.module.css';

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewListUI({reviews}: ReviewListProps) {
  return (<div className={styles['reviews-container']}>
    {
      reviews.map(review => <ReviewUI key={review._id} review={review} />)
    }
  </div>)
}