import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ name: '', email: '', message: '' });
        setSubmitMessage('Message sent successfully!');
        setIsSubmitting(false);
      }, (error) => {
        console.log('FAILED...', error);
        setSubmitMessage('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-2/3 mx-auto mt-10 pb-4">
      <h2 className="text-white text-2xl font-bold mb-5 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black text-white border-b border-white focus:outline-2 focus:border-white transition-all duration-300 ease-in-out"
              style={{
                borderRadius: '0',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-black text-white border-b border-white focus:outline-2 focus:border-white transition-all duration-300 ease-in-out"
            style={{
              borderRadius: '0',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
            }}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-white">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 bg-black text-white border-b border-white focus:outline-2 focus:border-white transition-all duration-300 ease-in-out"
            style={{
              borderRadius: '0',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form >
      {submitMessage && (
        <p className={`mt-4 text-center ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {submitMessage}
        </p>
      )}
    </div >
  );
};

export default Contact;