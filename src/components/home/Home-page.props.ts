import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { EventsCategory } from './../../../interfaces/data.interface';

export interface HomePageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	events_categories: EventsCategory[];
}
