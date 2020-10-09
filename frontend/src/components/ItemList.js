import React from "react";
import ItemCard from "./ItemCard";

/**
 *  DESCRIPTION: Component that accepts the apartments object and renders ItemCards for each apartment, sorted in order by highest aggregate ranking.
 *  PROPS: apartments (Object) 
 *  FLOW: App => Routes => HomeContainer => Home => ItemList
 *  PARENT: Home
 *  CHILDREN: ItemCard
 */

function ItemList({apartments}) {

  return apartments
      .sort((a,b) => b.apartment_rankings.ranking_aggregate - a.apartment_rankings.ranking_aggregate)
      .map(a => (
        <ItemCard address={a.apartment_address}
                  price={a.apartment_price}
                  url={a.apartment_url}
                  pics={a.apartment_photos}
                  rankings={a.apartment_rankings}
                  key={a.apartment_url}
        />
      )); 
}

export default ItemList;