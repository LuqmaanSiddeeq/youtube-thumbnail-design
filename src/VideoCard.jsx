import React from "react";
import "./VideoCard.css";

function VideoCard({
  thumbnailUrl,
  channelImageUrl,
  title,
  channelName,
  noOfViews,
  postedDate,
}) {
  return (
    <div className="videoCard">
      <img
        className="videoCard__thumbnail"
        src={thumbnailUrl}
        alt="thumbnail-img"
      />
      <div className="videoCard__info">
        <div className="videoCard__infoChannelImage">
          <img src={channelImageUrl} alt="channel-image" />
        </div>
        <div className="videoCard__infoText">
          <p className="videoCard__Title">{title}</p>
          <p className="videoCard__channelName">{channelName}</p>
          <p className="videoCard__noOfViewsAndPostedDate">
            {noOfViews} • {postedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
