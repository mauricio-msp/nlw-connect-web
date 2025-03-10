'use client'

import { useActionState } from 'react'
import { User, Mail, ArrowRight } from 'lucide-react'

import { Button } from '@/components/button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { subscription } from '@/actions/subscription'
import { useSearchParams } from 'next/navigation'

export function SubscriptionForm() {
	const [state, formAction, isPending] = useActionState(subscription, {
		message: '',
		success: false
	})

	const searchParams = useSearchParams()
	const referrer = searchParams.get('referrer') || ''

	return (
		<form
			action={formAction}
			className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">Inscrição</h2>

			<div className="space-y-3">
				<InputField type="hidden" name="referrer" value={referrer} />

				<InputRoot>
					<InputIcon>
						<User />
					</InputIcon>
					<InputField type="text" name="name" placeholder="Nome completo" disabled={isPending} />
				</InputRoot>
				{state?.errors?.name && <p className="text-danger text-sm">{state?.errors?.name}</p>}

				<InputRoot>
					<InputIcon>
						<Mail />
					</InputIcon>
					<InputField type="email" name="email" placeholder="E-mail" disabled={isPending} />
				</InputRoot>
				{state?.errors?.email && <p className="text-danger text-sm">{state?.errors?.email}</p>}
			</div>

			<Button type="submit" disabled={isPending}>
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	)
}
