import React from "react";
import Skeleton, { SkeletonItem } from "../shared/Skeleton";

const AnimeCard = () => {
  return (
    <Skeleton>
      <SkeletonItem className="aspect-w-9 aspect-h-16"></SkeletonItem>
    </Skeleton>
  );
};

export default AnimeCard;