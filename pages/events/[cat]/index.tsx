import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Event } from '@/interfaces/data.interface';
import EventCategory from '@/src/components/events-cat/Events-cat';

const CategoryPage = ({
	eventData,
	eventCity,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		<>
			{/* <h1>Events in {stringCapitalizeHelper(eventCity)}</h1>
			{eventData.map((item) => {
				const { city, id, title, image, description } = item;
				return (
					<Link
						key={id}
						href={`/events/${city.toLocaleLowerCase()}/${id.toLocaleLowerCase()}`}
					>
						<h2>{title}</h2>
						<Image alt={title} height={200} width={300} src={image} />
						<p>{description}</p>
					</Link>
				);
			})} */}
			<EventCategory eventCity={eventCity} eventData={eventData} />
		</>
	);
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const { events_categories } = await import('../../../data/data.json');

	return {
		paths: events_categories.map((item) => {
			return {
				params: {
					cat: item.id.toString(),
				},
			};
		}),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<IEventProps> = async ({
	params,
}) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	console.log('params ->', params.cat, '<- params');

	const { allEvents } = await import('../../../data/data.json');
	const eventData: Event[] = allEvents.filter((event: Event) => {
		if ('cat' in params && typeof params.cat === 'string') {
			return event.city.toLocaleLowerCase() === params.cat.toLocaleLowerCase();
		} else {
			return false;
		}
	});
	return {
		props: { eventData, eventCity: params.cat as string },
	};
};

interface IEventProps {
	eventData: Event[];
	eventCity: string;
}
