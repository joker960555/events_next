import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { zEmailRequestType } from '../../src/middleware/schemas/emailSchema';
import { z } from 'zod';

export const validate = (
	schema: z.Schema<zEmailRequestType>,
	handler: NextApiHandler
) => {
	return async (
		req: NextApiRequest & { body: zEmailRequestType },
		res: NextApiResponse
	) => {
		try {
			if (['POST', 'PUT'].includes(req?.method as string)) {
				req.body = schema.parse(req.body);
				// console.log('WTF', req.body, req);
				await handler(req, res);
			} else {
				const error = {
					cookies: req.cookies,
					statusCode: req.statusCode,
					url: req.url,
					method: req.method,
					message: 'method not allowed',
				};

				console.log('whoa re you', error, typeof error);
				return res.status(405).json(error);
			}
		} catch (error) {
			if (error instanceof z.ZodError) {
				const message = `Error ${error.name} happend - code ${error.errors[0].code}, fatal ${error.errors[0].fatal}, message ${error.errors[0].message}, path ${error.errors[0].path}`;
				return res.status(400).json(message);
			} else {
				return res.status(406).json(error);
			}
		}
	};
};
