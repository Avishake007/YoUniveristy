import React, { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import styles from "./EventCardPage.module.css";

const EventCardPage = ({ event }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = `Event - ${event.title}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSpinner = () => {
    if (isLoading) {
      return <Spinner animation="grow" role="status" />;
    }
    return null;
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const spinner = renderSpinner();

  return (
    <div className={styles.EventCardContainer}>
      <div className={styles.imgContainer}>
        {spinner}
        <img
          src={event.eventImage || "/assets/icons/no-image.svg"}
          alt={`${event.title}`}
          onLoad={() => handleImageLoaded()}
        />
      </div>
      <div className={styles.detailsContainer}>
        <h2 className={styles.eventTitle}>{event.title}</h2>
        <div className={styles.eventDescription}>{event.desc}</div>
      </div>
    </div>
  );
};

export default EventCardPage;
