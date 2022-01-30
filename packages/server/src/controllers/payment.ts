import Stripe from 'stripe';
import type { RequestHandler } from 'express';
import { User, UserDocument } from '../models/User';

const stripeKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeKey, { apiVersion: '2020-08-27' });

export const paymentController: RequestHandler = async (req, res) => {
  const { amount, id } = req.body;
  const user = req.user as UserDocument;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Emailify',
      payment_method: id,
      confirm: true,
    });

    await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { credit: user.credits + payment.amount } },
      { new: true },
    ).catch(console.log);

    res.json({
      message: 'Payment Succesful',
      success: true,
    });
  } catch (error) {
    console.log(error);

    res.json({
      message: 'Payment failed',
      success: false,
    });
  }
};
