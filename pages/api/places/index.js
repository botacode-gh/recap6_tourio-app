import dbConnect from "../../../db/connect";
// import { places } from "../../../lib/db";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    console.log("request.body:", request.body);
    const placeData = request.body;
    const createdPlace = await Place.create(placeData);
    console.log("createdPlace:", createdPlace);

    response.status(201).json(createdPlace);
  }
}
