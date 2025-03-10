'use server'

import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { redirect } from 'next/navigation'

import { SubscriptionFormSchema } from '@/lib/definitions'
import { subscribeToEvent } from '@/http/api'

export async function subscription(prevState: unknown, formData: FormData) {
	const validatedFields = SubscriptionFormSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email')
	})

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			success: false
		}
	}

	try {
		const referrer = formData.get('referrer') as string

		const { subscriberId } = await subscribeToEvent({
			name: validatedFields.data.name,
			email: validatedFields.data.email,
			referrer: referrer ? referrer : null
		})

		redirect(`/invite/${subscriberId}`)
	} catch (error) {
		if (isRedirectError(error)) throw error

		return {
			success: false,
			message: 'Occurred an error to subscribe. Try again later!'
		}
	}
}
