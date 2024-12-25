import { ComponentProps } from 'react';

type ModalContentProps = ComponentProps<'form'>;

export function ModalContent({ ...props }: ModalContentProps) {
	return (
		<form
			method='dialog'
			className="flex flex-col gap-7 px-6 py-4 min-w-96 min-h-80"
			{...props}
		/>
	);
}