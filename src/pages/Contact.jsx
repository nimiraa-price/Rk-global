import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';
import bannerImage from '../assets/images/unlock-banner.png';
import contactImage from '../assets/images/bottom.png';

const contactCards = [
  {
    title: 'Email',
    value: 'info@rkglobalimmigration.com',
    Icon: Mail,
  },
  {
    title: 'Call',
    value: '+971 56 415 8163',
    Icon: Phone,
  },
  {
    title: 'Address',
    value: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.',
    Icon: MapPin,
  },
  {
    title: 'Working Hours',
    value: 'Mon-Fri: 10:00 AM - 6:00 PM',
    Icon: Clock3,
  },
];

const contactFaqs = [
  {
    question: 'How soon will your team respond after I submit the form?',
    answer: 'Our advisory team usually replies within one business day. For urgent requests, please include your preferred callback time in the message.',
  },
  {
    question: 'Do you offer both residency and citizenship by investment support?',
    answer: 'Yes. We provide end-to-end advisory support for both residency and citizenship pathways based on your goals, timeline, and eligibility.',
  },
  {
    question: 'Can my family be included in one application?',
    answer: 'In many programmes, spouses and dependent children can be included. Family eligibility varies by country and route, and we confirm this during consultation.',
  },
  {
    question: 'Do you assist with document preparation and compliance?',
    answer: 'Yes. We support document planning, source-of-funds guidance, application packaging, and coordination with legal partners where required.',
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: 'Select message subject',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your first name.' });
      return;
    }
    if (!formData.email.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please enter your message.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "003ef45c-0893-4fe4-845b-aed8c9e7d940",
          subject: `New Contact Form Enquiry - ${formData.firstName} ${formData.lastName}`,
          from_name: "RK Global Website",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          "Phone Number": formData.phoneNumber,
          "Subject Category": formData.subject,
          Message: formData.message
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: 'Select message subject',
          message: ''
        });
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "Something went wrong. Please try again later."
      });
    }
  };

  return (
    <main className="w-full bg-[#f4f6f8] pt-[calc(var(--site-header-height,88px)+14px)] pb-8 md:pb-12 px-3 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-4 md:gap-6">

        {/* ── Hero Banner ───────────────────────────── */}
        <section
          className="relative overflow-hidden rounded-[20px] md:rounded-[28px] min-h-[140px] md:min-h-[220px] lg:min-h-[280px] flex items-center justify-center px-5 md:px-8 bg-cover bg-center"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        >
          <div className="absolute inset-0 bg-[#0a2769]/60" />
          <div className="relative z-10 text-center">
            <h1 className="text-white text-[30px] md:text-[56px] font-extrabold tracking-tight leading-none">
              Contact Us
            </h1>
            <p className="text-white/70 text-[13px] md:text-[17px] font-medium mt-2 md:mt-3 tracking-wide">
              We&apos;d love to hear from you
            </p>
          </div>
        </section>

        {/* ── Main Grid: Form + Info ──────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

          {/* Left Column — Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-[18px] md:rounded-[24px] p-5 md:p-8 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)]">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-8 h-[3px] rounded-full bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em]">
                Get in Touch
              </span>
            </div>
            <h2 className="text-[#0a2769] text-[26px] md:text-[42px] leading-[1.06] font-extrabold tracking-tight">
              Have Questions?
              <br />
              We&apos;re Just a
              <br />
              Message Away!
            </h2>
            <p className="text-[#7d8993] text-[13px] md:text-[15px] leading-[1.6] mt-3 md:mt-4 max-w-xl">
              Fill out the form below, and one of our team members will get back to you shortly.
            </p>

            {status.success && (
              <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-[14px] font-medium transition-all duration-300">
                Thank you! Your enquiry has been sent successfully. We will get back to you shortly.
              </div>
            )}
            
            {status.error && (
              <div className="mt-4 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-[14px] font-medium transition-all duration-300">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 md:mt-7 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold text-[#3d4f62] tracking-wide">First Name</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-[10px] border border-[#dde3ec] bg-[#f8fafc] px-4 text-[14px] text-[#1a2942] outline-none focus:border-[#0a2769] focus:ring-2 focus:ring-[#0a2769]/10 transition-all duration-200 placeholder:text-[#b0bac5]"
                  placeholder="First name"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold text-[#3d4f62] tracking-wide">Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-12 rounded-[10px] border border-[#dde3ec] bg-[#f8fafc] px-4 text-[14px] text-[#1a2942] outline-none focus:border-[#0a2769] focus:ring-2 focus:ring-[#0a2769]/10 transition-all duration-200 placeholder:text-[#b0bac5]"
                  placeholder="Last name"
                />
              </label>

              <label className="md:col-span-2 flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold text-[#3d4f62] tracking-wide">E-mail</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-[10px] border border-[#dde3ec] bg-[#f8fafc] px-4 text-[14px] text-[#1a2942] outline-none focus:border-[#0a2769] focus:ring-2 focus:ring-[#0a2769]/10 transition-all duration-200 placeholder:text-[#b0bac5]"
                  placeholder="you@email.com"
                />
              </label>

              <label className="md:col-span-2 flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold text-[#3d4f62] tracking-wide">Phone Number</span>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="h-12 rounded-[10px] border border-[#dde3ec] bg-[#f8fafc] px-4 text-[14px] text-[#1a2942] outline-none focus:border-[#0a2769] focus:ring-2 focus:ring-[#0a2769]/10 transition-all duration-200 placeholder:text-[#b0bac5]"
                  placeholder="+971 000000000"
                />
              </label>

              <label className="md:col-span-2 flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold text-[#3d4f62] tracking-wide">Subject</span>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-12 rounded-[10px] border border-[#dde3ec] bg-[#f8fafc] px-4 text-[14px] text-[#1a2942] outline-none focus:border-[#0a2769] focus:ring-2 focus:ring-[#0a2769]/10 transition-all duration-200"
                >
                  <option>Select message subject</option>
                  <option>Residency by Investment</option>
                  <option>Citizenship by Investment</option>
                  <option>General Enquiry</option>
                </select>
              </label>

              <label className="md:col-span-2 flex flex-col gap-1.5">
                <span className="text-[12px] font-semibold text-[#3d4f62] tracking-wide">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-[10px] border border-[#dde3ec] bg-[#f8fafc] px-4 py-3 text-[14px] text-[#1a2942] outline-none focus:border-[#0a2769] focus:ring-2 focus:ring-[#0a2769]/10 transition-all duration-200 resize-none placeholder:text-[#b0bac5]"
                  placeholder="Leave us a message..."
                />
              </label>

              <div className="md:col-span-2 flex justify-start md:justify-end pt-1">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="group h-12 px-7 md:px-9 rounded-full bg-[#C9A84C] hover:bg-[#b5933c] text-white text-[14px] md:text-[17px] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column — Image + Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4 md:gap-6">
            <div className="relative overflow-hidden rounded-[18px] md:rounded-[24px] min-h-[200px] md:min-h-[305px] border border-[#0a2769]/10 shadow-[0_4px_24px_rgba(10,39,105,0.08)]">
              <img src={contactImage} alt="Contact support" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2769]/40 via-transparent to-transparent" />
            </div>

            <div className="bg-white rounded-[18px] md:rounded-[24px] p-4 md:p-5 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)] flex flex-col gap-3 md:gap-3.5">
              {contactCards.map(({ title, value, Icon }) => (
                <div
                  key={title}
                  className="group flex items-center gap-3 md:gap-4 bg-[#f0f4fa] hover:bg-[#e6ecf7] rounded-[14px] p-3.5 md:p-4 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a2769] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#0a2769] text-[13px] md:text-[15px] font-bold">{title}</p>
                    <p className="text-[#6c7883] text-[12px] md:text-[13px] leading-[1.35]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ─────────────────────────── */}
        <section className="bg-white rounded-[18px] md:rounded-[24px] p-4 md:p-8 border border-[#e4e9f0] shadow-[0_4px_32px_rgba(10,39,105,0.04)]">
          <div className="text-center mb-5 md:mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="inline-block w-6 h-[3px] rounded-full bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em]">
                FAQ
              </span>
              <span className="inline-block w-6 h-[3px] rounded-full bg-[#C9A84C]" />
            </div>
            <h2 className="text-[28px] md:text-[42px] font-extrabold text-[#0a2769] tracking-tight leading-[1.05]">
              Contact FAQ&apos;s
            </h2>
            <p className="text-[#73808b] text-[13px] md:text-[16px] mt-2">
              Quick answers before you book a consultation.
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-[1400px] mx-auto">
            {contactFaqs.map((item, index) => {
              const isOpen = openFaq === index;
              const Icon = isOpen ? ChevronUp : ChevronDown;

              return (
                <div
                  key={item.question}
                  className={`rounded-[14px] border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#0a2769] border-[#0a2769] shadow-lg shadow-[#0a2769]/15'
                      : 'bg-[#f8fafc] border-[#e5eaee] hover:border-[#c4cedb] hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left px-4 md:px-6 py-4 md:py-5 flex items-start justify-between gap-4"
                  >
                    <span
                      className={`text-[14px] md:text-[18px] font-semibold leading-[1.35] transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-[#1a2942]'
                      }`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-[#C9A84C] text-white' : 'bg-[#e8ecf3] text-[#0a2769]'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                  </button>

                  <div className={`${isOpen ? 'max-h-[240px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 overflow-hidden`}>
                    <p className="px-4 md:px-6 pb-5 text-white/80 text-[13px] md:text-[15px] leading-[1.65]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        </div>
      </div>
    </main>
  );
};

export default Contact;
