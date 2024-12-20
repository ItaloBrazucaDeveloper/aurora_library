import { ComponentProps, useContext } from 'react';
import { RadioGroupContext } from './radio-group-context';

type RadioGroupControlProps = Omit<ComponentProps<'input'>, 'type' | 'name' | 'checked'>;

export function RadioGroupControl({ value, ...props }: RadioGroupControlProps) {
	const { defaultSelected, name, handleChange } = useContext(RadioGroupContext);

	return (
		<input
			onChange={() => handleChange(value ?? defaultSelected)}
			checked={defaultSelected === value}
			type="radio"
			name={name}
			{...props}
		/>
	);
}
