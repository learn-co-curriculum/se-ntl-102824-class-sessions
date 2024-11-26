import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const listingCards = listings.map((listItem) => (
    <ListingCard
      key={listItem.id}
      listing={listItem}
      onDelete={onDelete}
    />
  ));

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
