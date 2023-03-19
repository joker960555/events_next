import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import EventComponent from '@/src/components/event/Event';
import { Event } from '@/interfaces/data.interface';

const EventPage = ({
	eventData,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		<>
			<EventComponent eventData={eventData} />
		</>
	);
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const { allEvents } = await import('../../../data/data.json');

	return {
		paths: allEvents.map((item: Event) => {
			return {
				params: {
					cat: item.city.toString().toLocaleLowerCase(),
					id: item.id.toString(),
				},
			};
		}),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Record<string, Event>> = async ({
	params,
}) => {
	if (!params) {
		return { notFound: true };
	}

	const { allEvents } = await import('../../../data/data.json');
	const eventData: Event | undefined = allEvents.find((item: Event) => {
		if ('id' in params && typeof params.id === 'string') {
			return item.id.toLocaleLowerCase() === params.id.toLocaleLowerCase();
		} else {
			return false;
		}
	});

	if (!eventData) {
		return { notFound: true };
	}

	return {
		props: { eventData },
	};
};
