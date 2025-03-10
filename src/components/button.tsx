export function Button(props: React.ComponentProps<'button'>) {
	return (
		<button
			{...props}
			className="flex items-center justify-between px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
		/>
	)
}
