import { zEmailType } from '@/src/middleware/schemas/emailSchema';
import { IResponseMessage } from 'pages/api/email-registration';
import { NextApiResponse } from 'next';
import { Dispatch, SetStateAction } from 'react';
// : Promise<NextApiResponse<IResponseMessage>>
export const onSubmit = async (
	inputState: zEmailType,
	eventId: string | string[] | undefined,
	setAPIResponse: Dispatch<
		SetStateAction<IResponseMessage & { status: 'success' | '' }>
	>
	// setResponse: BaseSyntheticEvent<IResponseMessage>
) => {
	const { email } = inputState;
	console.log('==>>', inputState);
	try {
		const resp = await fetch('/api/email-registration', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, eventId }),
		});

		if (!resp.ok) {
			const onErrorData = await resp.json();
			console.log(typeof onErrorData, 'sS');
			switch (resp.status) {
				case 400:
					onErrorData.status = resp.status;
					console.log(onErrorData);
					return onErrorData;
				case 404:
					onErrorData.status = resp.status;
					onErrorData.url = resp.url;
					onErrorData.ok = resp.ok;
					console.log(onErrorData, resp);
					return onErrorData;
				case 405:
					onErrorData.status = resp.status;
					console.log(onErrorData);
					return onErrorData;
				case 406:
					const message_406 =
						'the server cannot return a response that matches the clients requested format or media type';
					onErrorData.status = resp.status;
					onErrorData.message = message_406;
					console.log(onErrorData, message_406);
					return onErrorData;
				case 409:
					// onErrorData.status = resp.status;
					setAPIResponse({ ...onErrorData, status: 'conflict' });
					return onErrorData;
			}
		}
		const data: IResponseMessage = await resp.json();
		if (resp.ok && data.message) {
			console.log('OK RESPONSE', data);
			// return data;
			setAPIResponse({ ...data, status: 'success' });
		}
	} catch (e) {
		console.log('Error happened when trying to submit', e);
		return `${e}`;
	}
};
