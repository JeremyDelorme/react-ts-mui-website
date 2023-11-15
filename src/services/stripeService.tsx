// stripeService.ts
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51OCmZRGcxzGP8SdkeOMcdKUMgwQB7eZnYIfYHbkTSlbe0wsExH5QeXpaytS4UmRS0giv5fzuHZLfxge6gThfhaEB00azqsWgBh');

export const createPaymentIntent = async (amount: number): Promise<{ clientSecret: string }> => {
    // Implement the logic to create a payment intent on your server
    // ...

    // Return the client secret
    return { clientSecret: 'your_client_secret' };
};

export default stripePromise;
