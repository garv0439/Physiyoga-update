import React, { useState, useEffect } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // Back to the previous review
  const backBtnClick = () => {
    setReview((prev) => (prev <= 0 ? reviewsLength : prev - 1));
  };

  // Go to the next review
  const frontBtnClick = () => {
    setReview((prev) => (prev >= reviewsLength ? 0 : prev + 1));
  };

  // Automatically change review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setReview((prev) => (prev >= reviewsLength ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [reviewsLength]);

  const { name: rName, location: rLocation, message: rMessage } =
    customerReviews[review];

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients' words</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{rMessage}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
