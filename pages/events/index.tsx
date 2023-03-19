import { EventsCategory } from '@/interfaces/data.interface';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import Events from '@/src/components/events/Events-page';

const EventsPage = ({
	events_categories,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	console.log(events_categories);
	return (
		<>
			<Events events_categories={events_categories} />
		</>
	);
};

export default EventsPage;

export const getStaticProps: GetStaticProps<
	Record<'events_categories', EventsCategory[]>
> = async () => {
	const { events_categories } = await import('../../data/data.json');
	return {
		props: { events_categories },
	};
};
