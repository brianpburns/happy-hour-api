import { Request } from 'express';
import asyncHandler from 'express-async-handler';
import { Pub } from '../database/pub';
import { PubType } from '../types';

interface Params {
  id: string;
  name: string;
  logo: string;
  website: string;
  latitude: string;
  longitude: string;
  weekday: string;
  weekend: string;
}

export function createPub() {
  return asyncHandler(async (req: Request<{}, {}, {}, Params>, res) => {
    const {
      id: stringId,
      name,
      logo,
      website,
      latitude,
      longitude,
      weekday,
      weekend,
    } = req.query;
    const id = parseInt(stringId);

    console.log('id', id, req.query);

    if (
      !id ||
      !name ||
      !logo ||
      !website ||
      !latitude ||
      !longitude ||
      !weekday ||
      !weekend
    ) {
      res.status(400).send('Missing query params');
    }

    // Creates table if it doesn't exist. Can add { alter: true } to allow adding new Columns without needing migrations
    await Pub.sync();

    // TODO: REMOVE
    // await Pub.destroy({ where: { googlePlaceId: id } });

    try {
      await Pub.create({
        googlePlaceId: id,
        name,
        logo,
        website,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        weekday: JSON.parse(weekday),
        weekend: JSON.parse(weekend),
      });

      const newPub = (await Pub.findOne({
        where: { googlePlaceId: id },
      })) as unknown as PubType;

      res.status(201).send({ team: newPub });
    } catch (err) {
      console.log('err', err);
      res.status(400).send(`Failed to create new pub: ${err}`);
    }
  });
}
