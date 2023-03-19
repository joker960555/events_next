import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const onInputChange = (
	e: ChangeEvent<HTMLInputElement>,
	inputState: string,
	setInputState: Dispatch<SetStateAction<string>>
): void => {
	console.log(e.target.value);
	setInputState(e.target.value);
	console.log(inputState, '<<=');
};
