import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
    const educationHistory = [
        {
            institution: 'Perjuangan University',
            period: 'July 2023 - Present',
            major: 'Informatics Engineering',
            icon: <FaGraduationCap size={20} />,
        },
        {
            institution: 'STMIK Tasikmalaya',
            period: 'September 2022 - January 2023',
            major: 'Informatics Engineering',
            icon: <FaGraduationCap size={20} />,
        },
        {
            institution: 'SMK N 1 Padaherang',
            period: '2019 - 2022',
            major: 'Computer Network Engineering',
            icon: <FaGraduationCap size={20} />,
        },
    ]

    return (
        <section
            className='py-12 px-4 md:px-6 w-full capitalize'
            style={{ backgroundColor: 'var(--background-color)' }}
        >
            <div className='max-w-4xl mx-auto'>
                <h1
                    className='text-center mb-12 text-2xl md:text-3xl font-bold'
                    style={{ color: 'var(--text-color)' }}
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    Education Timeline
                </h1>

                <div className='relative w-full md:max-w-2xl mx-auto mt-12'>
                    {/* Timeline Line */}
                    <div
                        className='absolute left-6 top-0 bottom-0 w-0.5'
                        style={{ backgroundColor: 'var(--btn-color)' }}
                    ></div>

                    {educationHistory.map((edu, index) => (
                        <div
                            key={index}
                            className='relative mb-8 last:mb-0'
                            data-aos='fade-up'
                            data-aos-delay={200 + index * 100}
                            data-aos-duration='800'
                        >
                            <div className='flex items-start'>
                                {/* Icon */}
                                <div
                                    className='flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative z-10'
                                    style={{
                                        backgroundColor: 'var(--btn-color)',
                                    }}
                                >
                                    <div className='text-white'>{edu.icon}</div>
                                </div>

                                {/* Content */}
                                <div className='ml-6 flex-1'>
                                    <div
                                        className='p-4 md:p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-300'
                                        style={{
                                            backgroundColor:
                                                'var(--project-card-bg)',
                                            borderColor:
                                                'var(--project-card-bg)',
                                            color: 'var(--text-color)',
                                        }}
                                    >
                                        <h2
                                            className='text-lg md:text-xl font-bold mb-2'
                                            style={{
                                                color: 'var(--text-color)',
                                            }}
                                        >
                                            {edu.institution}
                                        </h2>
                                        <p
                                            className='text-sm md:text-base font-medium mb-2'
                                            style={{
                                                color: 'var(--btn-color)',
                                            }}
                                        >
                                            {edu.period}
                                        </p>
                                        <p
                                            className='text-sm md:text-base'
                                            style={{
                                                color: 'var(--form-text-color)',
                                            }}
                                        >
                                            {edu.major}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
