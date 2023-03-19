import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { EventComponentProps, IForm } from './Event.props';
import { IResponseMessage } from 'pages/api/email-registration';

import { FieldErrors, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onSubmit } from '@/helpers/onSubmit';
import { onInputChange } from '@/helpers/onInputChange';
import { zEmailSchema, zEmailType } from '@/src/middleware/schemas/emailSchema';
import cn from 'classnames';
import styles from './Event.module.css';
import { transformer } from 'zod';

const EventComponent: React.FC<EventComponentProps> = ({ eventData }) => {
	const { id, title, city, description, image, emails_registered } = eventData;
	const [inputState, setInputState] = useState('');
	const [APIResponse, setAPIResponse] = useState<
		IResponseMessage & { status: 'success' | '' }
	>({
		message: '',
		eventId: '',
		status: '',
	});
	const { query } = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm<zEmailType>({
		resolver: async (data, context, options) => {
			// you can debug your validation schema here
			// console.log('formData', data);
			// console.log(
			// 	'validation result',
			// 	await zodResolver(zEmailSchema)(data, context, options)
			// );
			return zodResolver(zEmailSchema)(data, context, options);
		},
		// defaultValues: { email: '' },
	});

	const isError = Object.keys(errors).length > 0;
	useEffect(() => {
		// console.log('error or success');
		isError &&
			setTimeout(() => {
				clearErrors();
			}, 1000);
		APIResponse.status !== '' &&
			setTimeout(() => {
				reset();
				setAPIResponse({
					message: '',
					eventId: '',
					status: '',
				});
			}, 2000);
	}, [isError, APIResponse.status]);
	// console.log(isError, 'SWAG', APIResponse);
	return (
		<>
			<div className={cn(styles.wrapper)} key={id}>
				<h1 className={cn(styles.header)}>{title}</h1>
				<Image
					height={700}
					width={700}
					src={image}
					alt={title}
					className={cn(styles.image)}
				/>
				<h2 className={cn(styles.subheader)}>{city}</h2>
				<p className={cn(styles.description)}>
					{description + description + description + description}
				</p>
				{emails_registered.length > 0 && (
					<ul className={cn(styles.list)}>
						{emails_registered.map((item) => {
							return (
								<>
									<li className={cn(styles.list_item)}>{item}</li>
								</>
							);
						})}
					</ul>
				)}
				<form
					action='submit'
					onSubmit={
						// console.log('see', inputState),
						handleSubmit((inputState, e) => {
							// console.log('INSIDE', e);
							onSubmit(inputState, query.id, setAPIResponse);
						})
					}
					className={cn(styles.form)}
				>
					<label htmlFor='email' className={cn(styles.label)}>
						Get Registered for this event!
					</label>
					<input
						{...register('email')}
						type='text'
						id='email'
						placeholder='Please insert your email here'
						value={inputState}
						onChange={(e) => onInputChange(e, inputState, setInputState)}
						onKeyDownCapture={(e) => e.code === 'Enter' && e.preventDefault()}
						className={cn(styles.input, { [styles.inputOnError]: isError })}
					/>
					<div className={cn(styles.buttonWrapper)}>
						{errors.email && (
							<div
								className={cn(styles.error, {
									[styles.hidden]: !isError,
								})}
							>
								{errors.email.message}
							</div>
						)}
						{APIResponse.message.length > 0 && (
							<div
								className={cn(styles.registrationMessage, {
									[styles.hidden]: isError || !APIResponse.status,
								})}
							>
								{APIResponse.message}
							</div>
						)}
						<button
							type='submit'
							disabled={isError || !!APIResponse.status}
							className={cn(styles.submitButton, {
								[styles.hidden]: isError || APIResponse.status,
							})}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default EventComponent;
