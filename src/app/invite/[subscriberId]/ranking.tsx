import Image from 'next/image'

import medal_gold from '@/assets/medal-gold.svg'
import medal_silver from '@/assets/medal-silver.svg'
import medal_cooper from '@/assets/medal-cooper.svg'
import { getRanking } from '@/http/api'

export async function Ranking() {
	const { ranking } = await getRanking()

	return (
		<div className="w-full max-w-[440px] space-y-5 h-full">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-3.5">
				{ranking.map((item, index) => {
					const rankingPosition = index + 1

					return (
						<div
							key={item.id}
							className="relative rounded-xl bg-gray-700 border border-gray-600 py-6 px-7 flex flex-col justify-center gap-3"
						>
							<span className="text-sm text-gray-300 leading-none">
								<span className="font-semibold">{rankingPosition}º</span> | {item.name}
							</span>
							<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
								{item.score}
							</span>

							{rankingPosition === 1 && (
								<Image src={medal_gold} alt="medal gold" className="absolute top-0 right-8" />
							)}
							{rankingPosition === 2 && (
								<Image src={medal_silver} alt="medal gold" className="absolute top-0 right-8" />
							)}
							{rankingPosition === 3 && (
								<Image src={medal_cooper} alt="medal gold" className="absolute top-0 right-8" />
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}
