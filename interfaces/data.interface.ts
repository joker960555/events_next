export interface EventsData {
	events_categories: EventsCategory[];
	allEvents: Event[];
}

export interface EventsCategory {
	id: string;
	title: string;
	description: string;
	image: string;
}

export interface Event {
	id: string;
	title: string;
	city: string;
	description: string;
	image: string;
	emails_registered: string[];
}
