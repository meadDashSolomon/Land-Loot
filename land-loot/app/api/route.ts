import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { location, attractionType } = req.query;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Google Maps API key is missing" });
  }

  try {
    const googleMapsResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${attractionType}+in+${location}&key=${apiKey}`
    );

    const places = googleMapsResponse.data.results;

    // Limit to 100 most popular places (or any other logic you want)
    const top100Places = places.slice(0, 100);

    res.status(200).json({ places: top100Places });
  } catch (error) {
    console.error("Google Maps API Error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from Google Maps API" });
  }
}
