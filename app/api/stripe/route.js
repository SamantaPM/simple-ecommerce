import Stripe from 'stripe';
import { NextResponse } from 'next/server'
import { headers } from "next/headers";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const headersList = headers();
    const origin = headersList.get('origin');

    const items = await req.json();

    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1OpNGzKmZKB75ohUM9FH6xe8' },
        { shipping_rate: 'shr_1OpNJMKmZKB75ohUVWmccYGk'},
      ],
      line_items: items.map((item) => {
        const img = item.image[0].asset._ref;
        const newImage = img.replace('image-', 'https://cdn.sanity.io/images/0pu2nydt/production/').replace('-webp', '.webp');

        return {
          price_data: { 
            currency: 'usd',
            product_data: { 
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled:true,
            minimum: 1,
          },
          quantity: item.quantity
        }
      }),
      success_url: `${origin}/success`,
      cancel_url: `${origin}/canceled`,
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: ( error.statusCode || 500 ) });
  }
}