import heroImg from '../../assets/tiswan-coding.jpg'
import { ReactTyped } from 'react-typed'
import { useTheme } from '../../common/ThemeContext.jsx'
import { FaTiktok } from 'react-icons/fa'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Hero = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <section
            id='hero'
            className='min-h-screen flex items-center justify-center px-4 py-8'
            style={{ backgroundColor: 'var(--background-color)' }}
        >
            <div className='max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-20'>
                <div className='flex-1 flex justify-center lg:justify-end order-1 lg:order-2'>
                    <div className='relative group'>
                        <img
                            className='w-54 h-54 lg:w-96 lg:h-96 object-cover rounded-full border-4 shadow-2xl group-hover:scale-105 transition-transform duration-300'
                            style={{ borderColor: 'var(--btn-color)' }}
                            src={heroImg}
                            alt='Tiswan Profile'
                        />
                        <button
                            onClick={toggleTheme}
                            className='absolute top-4 right-[-20px] w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 hover'
                            style={{
                                backgroundColor: 'var(--btn-color)',
                                color: 'var(--btn-text-color)',
                            }}
                            aria-label={`Switch to ${
                                theme === 'light' ? 'dark' : 'light'
                            } mode`}
                        >
                            {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
                        </button>
                    </div>
                </div>

                <div className='flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1'>
                    <h1 className='mb-4'>Tiswan</h1>
                    <h2
                        className='mb-6 h-16 flex items-center justify-center lg:justify-start'
                        style={{ color: 'var(--btn-color)' }}
                    >
                        <ReactTyped
                            strings={[
                                'Fullstack Developer',
                                'Cyber Security Enthusiast',
                            ]}
                            loop
                            typeSpeed={70}
                            backSpeed={50}
                            startDelay={100}
                            showCursor={false}
                        />
                    </h2>

                    <p className='leading-relaxed max-w-2xl'>
                        Enthusiastic about coding, always exploring new
                        technologies, and passionate about problem-solving and
                        innovation.
                    </p>

                    <div className='flex justify-center lg:justify-start space-x-6 py-4 order-1 lg:order-2'>
                        <a
                            href='https://github.com/tiswan14'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg'
                            style={{
                                backgroundColor: 'var(--social-bg-color)',
                                color: 'var(--social-icon-color)',
                            }}
                        >
                            <FaGithub className='text-xl' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/tiswann/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg'
                            style={{
                                backgroundColor: 'var(--social-bg-color)',
                                color: 'var(--social-icon-color)',
                            }}
                        >
                            <FaLinkedin className='text-xl' />
                        </a>
                        <a
                            href='https://www.instagram.com/code.wannn/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg'
                            style={{
                                backgroundColor: 'var(--social-bg-color)',
                                color: 'var(--social-icon-color)',
                            }}
                        >
                            <FaInstagram className='text-xl' />
                        </a>
                        <a
                            href='https://www.tiktok.com/@code.wannn'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg'
                            style={{
                                backgroundColor: 'var(--social-bg-color)',
                                color: 'var(--social-icon-color)',
                            }}
                        >
                            <FaTiktok className='text-xl' />
                        </a>
                    </div>

                    <a
                        href='#'
                        className='inline-flex items-center gap-3 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover'
                        style={{
                            backgroundColor: 'var(--btn-color)',
                            color: 'var(--btn-text-color)',
                        }}
                    >
                        <FiDownload className='text-xl' />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
