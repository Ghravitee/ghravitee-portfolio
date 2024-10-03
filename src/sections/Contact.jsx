import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import emailjs from "@emailjs/browser";
import contactMe from "../assets/contact-me.png";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  // const { alert, showAlert, hideAlert } = useAlert();
  const [errors, setErrors] = useState({}); // For tracking errors

  const formRef = useRef();

  // const handleChange = ({ target: { name, value } }) => {
  //   setForm({ ...form, [name]: value });
  // };
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    // Clear error for the current field
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!form.user_name.trim()) {
      newErrors.user_name = "Name is required.";
    } else if (form.user_name.length < 3) {
      newErrors.user_name = "Name must be at least 3 characters long.";
    }

    // Validate email using a regex for proper email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.user_email.trim()) {
      newErrors.user_email = "Email is required.";
    } else if (!emailRegex.test(form.user_email)) {
      newErrors.user_email = "Please enter a valid email address.";
    }

    // Validate subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (form.subject.length < 7) {
      newErrors.message = "Subject must be at least 7 characters long.";
    }

    // Validate message
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors if any
      return;
    }

    setLoading(true);

    // Clear any previous errors when the form is submitted
    setErrors({});

    emailjs
      .sendForm(
        "service_4kgmoef", // Service ID
        "template_i6bc5sj", // Correct Template ID from the dashboard
        formRef.current,
        {
          publicKey: "x2nId_tkoMn2gg5zI", // Public key
        }
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully");

          setTimeout(() => {
            setForm({
              user_name: "",
              user_email: "",
              subject: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Message not sent. Please try again");
        }
      );

    e.target.reset();
  };

  return (
    <section className="container pb-20">
      {/* {alert.show && <Alert {...alert} />} */}
      <div className="pb-28" id="contact" />
      <h2 className="text-[2rem] lg:text-[2.5rem] text-primaryText barlow-bold mb-10 uppercase">
        Let&apos;s work together
      </h2>
      <p className="text-xl md:text-2xl mt-3 max-w-[30rem] outfit font-semibold">
        Whether you&apos;re looking to build a new website, improve your
        existing platform, or bring a unique project to life, I&apos;m here to
        help.
      </p>
      <div className="relative min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 items-start justify-center flex-col">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col space-y-7"
        >
          <label className="space-y-3">
            <span className="field-label">Full Name</span>
            <input
              type="text"
              name="user_name"
              value={form.name}
              onChange={handleChange}
              className={`field-input ${errors.name ? "border-red-500" : ""}`} // Highlight field on error
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </label>

          <label className="space-y-3">
            <span className="field-label">Email</span>
            <input
              type="email"
              name="user_email"
              value={form.email}
              onChange={handleChange}
              className={`field-input ${errors.email ? "border-red-500" : ""}`} // Highlight field on error
              placeholder="johndoe@gmail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>

          <label className="space-y-3">
            <span className="field-label">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`field-input ${errors.email ? "border-red-500" : ""}`} // Highlight field on error
              placeholder="johndoe@gmail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>

          <label className="space-y-3">
            <span className="field-label">Your message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`field-input ${errors.message ? "border-red-500" : ""}`} // Highlight field on error
              placeholder="Hi, I'm interested in..."
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </label>

          <button
            className="bg-primarybtn text-white flex justify-center items-center py-3 gap-1 text-lg"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send Message"}{" "}
            <GoArrowUpRight className="text-2xl" />
          </button>
        </form>

        <div>
          <img src={contactMe} alt="" />
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;

// import emailjs from '@emailjs/browser';
// import { useRef, useState } from 'react';

// import useAlert from '../hooks/useAlert.js';
// import Alert from '../components/Alert.jsx';

// const Contact = () => {
//   const formRef = useRef();

//   const { alert, showAlert, hideAlert } = useAlert();
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: 'JavaScript Mastery',
//           from_email: form.email,
//           to_email: 'sujata@jsmastery.pro',
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
//       )
//       .then(
//         () => {
//           setLoading(false);
//           showAlert({
//             show: true,
//             text: 'Thank you for your message 😃',
//             type: 'success',
//           });

//           setTimeout(() => {
//             hideAlert(false);
//             setForm({
//               name: '',
//               email: '',
//               message: '',
//             });
//           }, [3000]);
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           showAlert({
//             show: true,
//             text: "I didn't receive your message 😢",
//             type: 'danger',
//           });
//         },
//       );
//   };

//   return (
//     <section className="c-space my-20" id="contact">
//       {alert.show && <Alert {...alert} />}

//       <div className="relative min-h-screen flex items-center justify-center flex-col">
//         <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

//         <div className="contact-container">
//           <h3 className="head-text">Let&apos;s talk</h3>
//           <p className="text-lg text-white-600 mt-3">
//             Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
//             life, I’m here to help.
//           </p>

//           <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
//             <label className="space-y-3">
//               <span className="field-label">Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., John Doe"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Email address</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., johndoe@gmail.com"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Your message</span>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="field-input"
//                 placeholder="Share your thoughts or inquiries..."
//               />
//             </label>

//             <button className="field-btn" type="submit" disabled={loading}>
//               {loading ? 'Sending...' : 'Send Message'}

//               <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
