import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { firestore } from '../firebase/config';

export const sendContactForm = async ({ name, email, message }) => {
  try {
    const ref = collection(firestore, 'contacts');
    await addDoc(ref, {
      name,
      email,
      message,
      sentAt: Timestamp.now().toDate(),
    });
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  } catch (err) {
    console.error('Error sending contact form:', err);
    return { success: false, message: 'Something went wrong. Please try again later.' };
  }
};