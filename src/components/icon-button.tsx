import { cn } from '@/lib/utils'

export function IconButton({ className, ...props }: React.ComponentProps<'button'>) {
	return (
		<button
			{...props}
			className={cn(
				'inline-flex p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300',
				className
			)}
		/>
	)
}
