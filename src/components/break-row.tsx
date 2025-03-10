interface BreakRowProps extends React.ComponentProps<'br'> {
	rows?: number
}

export function BreakRow({ rows = 1, ...props }: BreakRowProps) {
	return (
		<>
			{[...Array(rows)].map((_, index) => (
				<br key={index} data-br={index} {...props} />
			))}
		</>
	)
}
