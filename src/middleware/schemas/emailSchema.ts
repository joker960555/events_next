// import { InferType, object, string, ValidationError } from 'yup';
import { string, z } from 'zod';

export const zEmailSchema = z.object({
	email: string().email('Email is required "ZOD"'),
});
export const zEmailRequestSchema = zEmailSchema.extend({
	eventId: string(),
});

export type zEmailType = z.infer<typeof zEmailSchema>;
export type zEmailRequestType = z.infer<typeof zEmailRequestSchema>;
