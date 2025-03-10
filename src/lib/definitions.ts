import { z } from 'zod'

export const SubscriptionFormSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
	email: z.string().email({ message: 'Please enter a valid email.' }).trim()
})

export type SubscriptionFormState =
	| {
			success?: boolean
			errors?: {
				name?: string[]
				email?: string[]
			}
			message?: string
	  }
	| undefined
