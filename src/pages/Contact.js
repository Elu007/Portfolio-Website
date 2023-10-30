import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const shadowStyle = {
    filter: 'drop-shadow(5px 5px 50px white)'
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6yio8qr', 'template_9lqqobl', form.current, 'MXtYNMF86gUdC-4Df')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully 🎉');
      }, (error) => {
        console.log(error.text);
        toast.error('Something went wrong 😓');
      });
  };

  return (
    <div className="container shadow-lg p-3 mb-5 bg-gray-900 text-white rounded">
      <h2 className="text-3xl">Write me a Message👇</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form ref={form} onSubmit={sendEmail} className="col">
          <div className="mb-3 mt-3">
            <label className="text-xl">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="text-xl">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="text-xl">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              onClick={sendEmail}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <div className="hidden md:block col h-64 w-64 md:h-68 md:w-64 ml-44 mt-8">
          <img src="/images/contact.svg" alt="contact" className='h-64 rounded-full' style={shadowStyle}/>
        </div>
      </div>
    </div>
  )
}

export default Contact
