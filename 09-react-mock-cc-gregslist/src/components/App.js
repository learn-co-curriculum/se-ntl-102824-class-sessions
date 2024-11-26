import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const baseURL = "http://localhost:6001"
function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(baseURL + "/listings")
      .then(response => response.json())
      .then(setListings)
  }, [])

  function removeListing(listingId){
    console.log("🚀 ~ removeListing ~ listingId:", listingId)
    fetch(`${baseURL}/listings/${listingId}`, { method: 'DELETE' })
      .then(r => {
        if (r.ok) {
          setListings(listings.filter(listing => listing.id !== listingId)) // pessimistic rendering
        } else {
          throw new Error("Couldn't remove listing")
        }
      })
    // setListings(listings.filter(listing => listing.id !== listingId)) // optimistic rendering
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDelete={removeListing}/>
    </div>
  );
}

export default App;
