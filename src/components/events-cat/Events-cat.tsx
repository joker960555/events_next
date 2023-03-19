import Link from 'next/link';
import Image from 'next/image';

import { EventsCategoryProps } from './Events-cat.props';

import styles from './Events-cat.module.css';
import { stringCapitalizeHelper } from '@/helpers/stringCapitalize';
import cn from 'classnames';

const EventCategory: React.FC<EventsCategoryProps> = ({
	eventData,
	eventCity,
}) => {
	return (
		<div className={cn(styles.content)}>
			<h1 className={cn(styles.header)}>
				Events in {stringCapitalizeHelper(eventCity)}
			</h1>
			<div className={cn(styles.wrapper)}>
				{eventData.map((item, i) => {
					const { city, id, title, image, description } = item;
					return (
						<Link
							key={id}
							href={`/events/${city.toLocaleLowerCase()}/${id.toLocaleLowerCase()}`}
							className={cn(styles.cat_wrapper)}
						>
							<h2 className={cn(styles.cat_title)}>{title}</h2>
							<Image
								alt={title}
								height={400}
								width={400}
								src={image}
								className={cn(styles.cat_image)}
							/>
							<div className={cn(styles.cat_description)}>
								<p>{(i === 0 && description + description) || description}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default EventCategory;
