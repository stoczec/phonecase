import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'

export async function POST(req: Request) {
	try {
		const body = await req.text()
		const signature = headers().get('stripe-signature')

		if (!signature) {
			return new Response('Invalid signature', { status: 400 })
		}

		const event = stripe.webhooks.constructEvent(body, signature)
	} catch (err) {}
}
