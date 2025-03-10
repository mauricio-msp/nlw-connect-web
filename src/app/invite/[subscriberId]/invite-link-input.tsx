'use client'

import { useState } from 'react'
import { Link, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'

import { IconButton } from '@/components/icon-button'
import { InputRoot, InputIcon, InputField } from '@/components/input'

interface InviteLinkInputProps {
	inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
	const [isCopied, setIsCopied] = useState(false)

	function handleCopyInviteLink() {
		setIsCopied(true)
		navigator.clipboard.writeText(inviteLink)
		setTimeout(() => setIsCopied(false), 2000)
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField readOnly defaultValue={inviteLink} />

			<IconButton className="-mr-2 relative" onClick={handleCopyInviteLink}>
				<motion.span
					animate={isCopied ? { opacity: isCopied ? 0.6 : 1, scale: isCopied ? 1.2 : 1 } : {}}
					initial={{ opacity: isCopied ? 0.6 : 1, scale: isCopied ? 0.9 : 1 }}
					transition={{
						duration: 0.3,
						ease: 'easeInOut'
					}}
					className="inline-flex items-center justify-center"
				>
					{isCopied ? <Check className="size-5" /> : <Copy className="size-5" />}
				</motion.span>
			</IconButton>
		</InputRoot>
	)
}
