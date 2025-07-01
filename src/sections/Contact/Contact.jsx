import { Mail, User, MessageSquare, Send, Phone, MapPin } from 'lucide-react'

const Contact = () => {
    return (
        <section
            id='contact'
            className='py-16 px-4 bg-[var(--background-color)] transition-colors duration-300 relative overflow-hidden'
        >
            {/* Background decorative elements */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-10 left-10 w-20 h-20 border-2 border-[var(--btn-color)] rounded-full'></div>
                <div className='absolute top-32 right-20 w-16 h-16 bg-[var(--btn-color)] rounded-full'></div>
                <div className='absolute bottom-20 left-1/4 w-12 h-12 border-2 border-[var(--btn-color)] rotate-45'></div>
                <div className='absolute bottom-40 right-10 w-8 h-8 bg-[var(--btn-color)] rounded-full'></div>
            </div>

            <div className='max-w-6xl mx-auto relative z-10'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    
                    <h1 className='text-5xl font-bold text-center mb-4 text-[var(--text-color)] bg-gradient-to-r from-[var(--btn-color)] to-purple-600 bg-clip-text'>
                        Get In Touch
                    </h1>
                    <h4 className='text-xl mt-3 text-[var(--form-text-color)] max-w-3xl mx-auto '>
                        Have a project in mind or just want to say hello?
                        I&apos;d love to hear from you.
                    </h4>
                </div>

                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* Contact Info Cards */}
                    <div className='lg:col-span-2 space-y-6'>
                        <div className='bg-[var(--project-card-bg)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <div className='flex items-center space-x-4'>
                                <div className='w-12 h-12 bg-[var(--btn-color)] rounded-xl flex items-center justify-center shadow-md'>
                                    <Mail className='w-6 h-6 text-[var(--btn-text-color)]' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-[var(--text-color)] text-lg'>
                                        Email
                                    </h3>
                                    <p className='text-[var(--form-text-color)] lowercase'>
                                        tiswan30@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[var(--project-card-bg)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <div className='flex items-center space-x-4'>
                                <div className='w-12 h-12 bg-[var(--btn-color)] rounded-xl flex items-center justify-center shadow-md'>
                                    <Phone className='w-6 h-6 text-[var(--btn-text-color)]' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-[var(--text-color)] text-lg'>
                                        Phone
                                    </h3>
                                    <p className='text-[var(--form-text-color)]'>
                                        +6281223638151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[var(--project-card-bg)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                            <div className='flex items-center space-x-4'>
                                <div className='w-12 h-12 bg-[var(--btn-color)] rounded-xl flex items-center justify-center shadow-md'>
                                    <MapPin className='w-6 h-6 text-[var(--btn-text-color)]' />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-[var(--text-color)] text-lg'>
                                        Location
                                    </h3>
                                    <p className='text-[var(--form-text-color)]'>
                                        Tasikmalaya, Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='lg:col-span-3'>
                        <div className='bg-[var(--project-card-bg)] p-8 rounded-3xl shadow-xl backdrop-blur-sm h-full'>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <label
                                        htmlFor='name'
                                        className='sr-only'
                                    >
                                        Name
                                    </label>
                                    <div className='relative group'>
                                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                            <User className='h-5 w-5 text-[var(--form-text-color)] group-focus-within:text-[var(--btn-color)] transition-colors duration-300' />
                                        </div>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            placeholder='Your Name'
                                            required
                                            className='w-full pl-12 pr-4 py-4 bg-[var(--project-card-bg)] rounded-xl text-[var(--form-text-color)] placeholder-[var(--form-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-color)] focus:shadow-md transition-all duration-300 shadow-sm hover:shadow-md'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label
                                        htmlFor='email'
                                        className='sr-only'
                                    >
                                        Email
                                    </label>
                                    <div className='relative group'>
                                        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                            <Mail className='h-5 w-5 text-[var(--form-text-color)] group-focus-within:text-[var(--btn-color)] transition-colors duration-300' />
                                        </div>
                                        <input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='your.email@example.com'
                                            required
                                            className='w-full pl-12 pr-4 py-4 bg-[var(--project-card-bg)] rounded-xl text-[var(--form-text-color)] placeholder-[var(--form-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-color)] focus:shadow-md transition-all duration-300 shadow-sm hover:shadow-md'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label
                                        htmlFor='message'
                                        className='sr-only'
                                    >
                                        Message
                                    </label>
                                    <div className='relative group'>
                                        <div className='absolute top-4 left-0 pl-4 flex items-start pointer-events-none'>
                                            <MessageSquare className='h-5 w-5 text-[var(--form-text-color)] group-focus-within:text-[var(--btn-color)] transition-colors duration-300' />
                                        </div>
                                        <textarea
                                            name='message'
                                            id='message'
                                            placeholder='Tell me about your project or just say hello...'
                                            required
                                            rows={6}
                                            className='w-full pl-12 pr-4 py-4 bg-[var(--project-card-bg)] rounded-xl text-[var(--form-text-color)] placeholder-[var(--form-text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-color)] focus:shadow-md transition-all duration-300 resize-vertical shadow-sm hover:shadow-md'
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full py-3 md:py-4 px-6 bg-[var(--btn-color)] text-[var(--btn-text-color)] font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--btn-color)] focus:ring-offset-2 focus:ring-offset-[var(--background-color)] transition-all duration-300 active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group'
                                >
                                    <span>Send Message</span>
                                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
