import { Image } from './image';

export function Logo() {
	return (
		<div className="flex items-center gap-3">
			<Image
				src="/logo.png"
				alt="Lucas Almeida"
				className="size-10 p-1.5 rounded-md bg-zinc-900"
			/>
			<h3 className="text-xl font-semibold">Aurora Library</h3>
		</div>
	);
}
