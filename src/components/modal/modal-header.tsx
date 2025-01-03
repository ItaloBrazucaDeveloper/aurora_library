import { ComponentProps } from 'react';

type ModalHeaderProps = ComponentProps<'header'>;

export function ModalHeader({ ...props }: ModalHeaderProps) {
	return (
		<header
			className="relative flex justify-between items-center pb-4 pt-2 m-0 after:absolute after:h-px after:w-full after:bg-zinc-800 after:bg-opacity-15 after:top-full after:left-1/2 after:-translate-x-1/2"
			{...props}
		/>
	);
}
