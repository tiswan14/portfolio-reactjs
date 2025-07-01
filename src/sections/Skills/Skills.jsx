import { useTheme } from '../../common/ThemeContext'
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPhp,
    SiPython,
    SiBootstrap,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiNodedotjs,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiSupabase,
    SiGit,
    SiDocker,
    SiPostman,
    SiLinux,
    SiTypescript,
} from 'react-icons/si'
import { FaNetworkWired } from 'react-icons/fa'

const Skills = () => {
    const { theme } = useTheme()
    const iconColor = theme === 'light' ? '#0987f2' : '#fff'
    const iconSize = 32

    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                {
                    name: 'HTML',
                    icon: (
                        <SiHtml5
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'CSS',
                    icon: (
                        <SiCss3
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'JavaScript',
                    icon: (
                        <SiJavascript
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'PHP',
                    icon: (
                        <SiPhp
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Python',
                    icon: (
                        <SiPython
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'TypeScript',
                    icon: (
                        <SiTypescript
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
            ],
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                {
                    name: 'Bootstrap',
                    icon: (
                        <SiBootstrap
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'TailwindCSS',
                    icon: (
                        <SiTailwindcss
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'ReactJS',
                    icon: (
                        <SiReact
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Next.js',
                    icon: (
                        <SiNextdotjs
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Express.js',
                    icon: (
                        <SiExpress
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Node.js',
                    icon: (
                        <SiNodedotjs
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
            ],
        },
        {
            title: 'Database Management',
            skills: [
                {
                    name: 'MySQL',
                    icon: (
                        <SiMysql
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'MongoDB',
                    icon: (
                        <SiMongodb
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'PostgreSQL',
                    icon: (
                        <SiPostgresql
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Supabase',
                    icon: (
                        <SiSupabase
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
            ],
        },
        {
            title: 'Development Tools',
            skills: [
                {
                    name: 'Git',
                    icon: (
                        <SiGit
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Docker',
                    icon: (
                        <SiDocker
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Postman',
                    icon: (
                        <SiPostman
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
            ],
        },
        {
            title: 'Networking & OS',
            skills: [
                {
                    name: 'Mikrotik',
                    icon: (
                        <FaNetworkWired
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Cisco',
                    icon: (
                        <FaNetworkWired
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
                {
                    name: 'Linux',
                    icon: (
                        <SiLinux
                            color={iconColor}
                            size={iconSize}
                        />
                    ),
                },
            ],
        },
    ]

    return (
        <section
            id='skills'
            className='py-16 px-4 sm:px-6 min-h-screen flex items-center'
            style={{ backgroundColor: 'var(--background-color)' }}
        >
            <div className='max-w-7xl w-full mx-auto'>
                <div className='text-center mb-16'>
                    <h1
                        className='text-2xl md:text-2xl font-bold mb-5 relative inline-block'
                        style={{ color: 'var(--text-color)' }}
                    >
                        Skills & Technologies
                        {/* <span
                            className='absolute bottom-0 left-0 w-full h-1 rounded-full'
                            style={{
                                backgroundColor: 'var(--btn-color)',
                                transform: 'scaleX(0.7)',
                                transformOrigin: 'center',
                            }}
                        ></span> */}
                    </h1>
                    <p
                        className='mx-auto text-center'
                        style={{ color: 'var(--text-color)' }}
                    >
                        Technologies and tools I work with
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className='relative rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group'
                            style={{
                                backgroundColor: 'var(--project-card-bg)',
                                borderColor:
                                    theme === 'light'
                                        ? 'rgba(0, 0, 0, 0.1)'
                                        : 'rgba(255, 255, 255, 0.1)',
                                boxShadow:
                                    theme === 'light'
                                        ? '0 4px 20px rgba(0, 0, 0, 0.05)'
                                        : '0 4px 20px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <div
                                className='absolute top-0 left-0 right-0 h-1 rounded-t-xl'
                                style={{ backgroundColor: 'var(--btn-color)' }}
                            ></div>

                            <h2
                                className='text-xl font-semibold mb-6 text-center pb-3 relative'
                                style={{
                                    color: 'var(--text-color)',
                                    borderBottom:
                                        theme === 'light'
                                            ? '1px solid rgba(0, 0, 0, 0.1)'
                                            : '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                {category.title}
                            </h2>

                            <div className='grid grid-cols-2 gap-3 pt-3'>
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className='flex flex-col items-center p-3 rounded-lg transition-all duration-200 hover:bg-opacity-10'
                                        style={{
                                            backgroundColor:
                                                theme === 'light'
                                                    ? 'rgba(0, 0, 0, 0.03)'
                                                    : 'rgba(255, 255, 255, 0.03)',
                                        }}
                                    >
                                        <div className='mb-2 w-10 h-10 flex items-center justify-center'>
                                            {skill.icon}
                                        </div>
                                        <span
                                            className='text-sm font-medium'
                                            style={{
                                                color: 'var(--text-color)',
                                            }}
                                        >
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
