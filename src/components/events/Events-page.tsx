import Link from 'next/link';
import Image from 'next/image';
import { EventsPageProps } from './Events-page.props';
import { stringCapitalizeHelper } from '@/helpers/stringCapitalize';

import cn from 'classnames';
import styles from './Events-page.module.css';

const Events = ({ events_categories }: EventsPageProps): JSX.Element => {
	return (
		<>
			{/* <h1 className={cn(styles.header)}>Events Page</h1> */}
			<div className={cn(styles.events_wrapper)}>
				{events_categories.map((item) => {
					const { id, title, description, image } = item;
					return (
						<>
							<Link
								key={title}
								href={`/events/${id}`}
								className={cn(styles.event)}
							>
								<Image
									src={image}
									width={300}
									height={300}
									alt={title}
									className={cn(styles.event_image)}
								/>
								<h2
									className={cn(styles.event_header)}
								>{`Events in ${stringCapitalizeHelper(id)}`}</h2>
							</Link>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Events;
