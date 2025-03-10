import Image from 'next/image'

import { InviteLinkInput } from '@/app/invite/[subscriberId]/invite-link-input'
import { Ranking } from '@/app/invite/[subscriberId]/ranking'
import { Stats } from '@/app/invite/[subscriberId]/stats'

import devstage_logo from '@/assets/logo.svg'

export default async function InvitePage({
	params
}: { params: Promise<{ subscriberId: string }> }) {
	const subscriberId = (await params)?.subscriberId

	const inviteLink = `http://localhost:3333/invites/${subscriberId}`

	return (
		<div className="min-h-dvh flex items-start justify-center gap-16 flex-col">
			<Image src={devstage_logo} alt="devstage · logo" width={108.5} height={30} />

			<div className="w-full flex flex-col items-stretch md:flex-row gap-16">
				<div className="flex flex-col gap-10 w-full max-w-[550px]">
					<div className="space-y-2">
						<h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
							Inscrição confirmada
						</h1>
						<p className="text-gray-300">
							Para entrar no evento, acesse o link enviado para seu e-mail.
						</p>
					</div>

					<div className="space-y-6">
						<div className="space-y-3">
							<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
								Indique e Ganhe
							</h2>
							<p className="text-gray-300">
								Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só
								compartilhar o link abaixo e acompanhar as inscrições:
							</p>
						</div>

						<InviteLinkInput inviteLink={inviteLink} />

						<Stats subscriberId={subscriberId} />
					</div>
				</div>

				<Ranking />
			</div>
		</div>
	)
}
