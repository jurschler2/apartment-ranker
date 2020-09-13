export function calculateAggregateRankings(rankings) {

  let agg = 0;

  let {ranking_price,
      ranking_price_weight,
      ranking_location,
      ranking_location_weight,
      ranking_space,
      ranking_space_weight,
      ranking_parking,
      ranking_parking_weight,
      ranking_privacy,
      ranking_privacy_weight,
      ranking_laundry,
      ranking_laundry_weight,
      ranking_common_space,
      ranking_common_space_weight} = rankings;

  agg = ranking_price*ranking_price_weight + ranking_location*ranking_location_weight + ranking_space*ranking_space_weight + ranking_parking*ranking_parking_weight + ranking_privacy*ranking_privacy_weight + ranking_laundry*ranking_laundry_weight + ranking_common_space*ranking_common_space_weight;

  agg = agg / 100

  return agg.toFixed(2);
}