import Link from 'next/link';
import Image from 'next/image';
import { HomePageProps } from './Home-page.props';

import cn from 'classnames';
import styles from './Home-page.module.css';

export const HomePage: React.FC<HomePageProps> = ({
	events_categories,
}): JSX.Element => {
	return (
		<div className={cn(styles.homePage)}>
			{events_categories.map((item) => {
				const { id, image, title, description } = item;
				return (
					<Link key={id} className={cn(styles.card)} href={`/events/${id}`}>
						<Image
							src={image}
							width={500}
							height={500}
							alt={title}
							className={cn(styles.image)}
						/>
						<div className={cn(styles.textWrapper)}>
							<h2 className={cn(styles.title)}>{title}</h2>
							<p>{description}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
