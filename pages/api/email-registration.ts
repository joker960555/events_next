import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { validate } from '../../src/middleware/validateEmail';
import {
	zEmailRequestSchema,
	zEmailRequestType,
} from '@/src/middleware/schemas/emailSchema';
import { EventsData, Event } from '@/interfaces/data.interface';

export interface IResponseMessage {
	message: string;
	eventId: string;
}

interface IEventRequest extends NextApiRequest {
	body: zEmailRequestType;
}

const buildPath = () => {
	return path.join(process.cwd(), 'data', 'data.json');
};

const extractData = (filePath: string | Buffer | URL): EventsData => {
	const jsonData = fs.readFileSync(filePath);
	const data = JSON.parse(jsonData.toString());
	return data;
};

const writeData = (filePath: string | Buffer | URL, data: EventsData) => {
	fs.writeFileSync(filePath, JSON.stringify(data));
};

const handler = (
	req: IEventRequest,
	res: NextApiResponse<IResponseMessage>
) => {
	const filePath = buildPath();
	const { events_categories, allEvents }: EventsData = extractData(filePath);
	if (!allEvents) {
		return res.status(404).json({
			message: 'Events data not fount',
			eventId: '',
		});
	}
	const { method } = req;

	if (method === 'POST') {
		const { email, eventId } = req.body;
		const newAllEvents: Event[] = allEvents.map((item) => {
			const { id, emails_registered } = item;
			if (id === eventId) {
				if (emails_registered.includes(email)) {
					res.status(409).json({
						message: 'This email has already been registered',
						eventId,
					});
				} else {
					return { ...item, emails_registered: [...emails_registered, email] };
				}
			}
			return item;
		});
		writeData(filePath, { events_categories, allEvents: newAllEvents });
		res.status(200).json({
			message: `You were successfully registered for this event with this email: ${email}`,
			eventId,
		});
	}
};

export default validate(zEmailRequestSchema, handler);
// export default handler;
