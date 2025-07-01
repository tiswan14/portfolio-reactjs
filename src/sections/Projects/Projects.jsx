import pendaftaranKursus from '../../assets/pendaftaran-kursus-lpk-cti.png'
import restApi from '../../assets/rest-api.jpg'
import bookingHotel from '../../assets/hotel-booking.png'
import ProjectCard from '../Projects/ProjectCard.jsx'
import wannTrip from '../../assets/wanntrip.png'
import websitef22 from '../../assets/websitef22.png'
import rentalMobil from '../../assets/rental-mobil.png'
import { useTheme } from '../../common/ThemeContext'

const Projects = () => {
    const { theme } = useTheme()

    const projects = [
        {
            id: 1,
            image: bookingHotel,
            link: 'https://github.com/tiswan14/nextjs-booking-hotel',
            title: 'Booking Hotel',
            description: 'Aplikasi booking hotel dengan Next.js',
            tags: ['Next.js', 'TypeScript', 'Tailwind'],
        },
        {
            id: 2,
            image: pendaftaranKursus,
            link: 'https://github.com/tiswan14/sistem-informasi-pendaftaran-kursus-lpk-cti',
            title: 'Pendaftaran Kursus LPK CTI',
            description: 'Aplikasi pendaftaran kursus berbasis web (Proyek KP)',
            tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
        },
        {
            id: 3,
            image: rentalMobil,
            link: 'http://localhost/rentalmobil-tiswan',
            title: 'Rental Mobil',
            description:
                'Aplikasi manajemen rental mobil (Tugas Pemrograman Internet)',
            tags: ['PHP', 'Bootstrap', 'MySQL'],
        },
        {
            id: 4,
            image: wannTrip,
            link: 'https://github.com/tiswan14/wann-trip-uts',
            title: 'WannTrip',
            description: 'Website pariwisata Pangandaran',
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: 5,
            image: websitef22,
            link: 'https://github.com/tiswan14/website-f22',
            title: 'Website Informatika F-22',
            description:
                'Halaman web kelas F-22 Teknik Informatika Universitas Perjuangan',
            tags: ['HTML', 'TailwindCSS', 'JavaScript'],
        },
        {
            id: 6,
            image: restApi,
            link: 'https://github.com/tiswan14/be-perpustakaan-express',
            title: 'Sistem Perpustakaan (Backend)',
            description: 'RESTful API untuk operasional perpustakaan',
            tags: ['Node.js', 'Express', 'PostgreSQL ', 'JWT'],
        },
    ]

    return (
        <section
            id='projects'
            className='py-20 px-4 md:px-8 lg:px-16 xl:px-32 min-h-screen bg-[var(--background-color)] transition-all duration-500 ease-in-out'
        >
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16 space-y-6'>
                    <div className='relative'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-color)] mb-4 relative z-10'>
                            My Projects
                        </h1>
                        <div className='absolute inset-0 bg-gradient-to-r from-[var(--btn-color)] to-transparent opacity-10 blur-3xl rounded-full transform -rotate-12'></div>
                    </div>
                    <h4 className='text-xl md:text-xl text-[var(--form-text-color)] mx-auto leading-relaxed capitalize'>
                        Selected works I&apos;ve built
                    </h4>
                    <div className='flex justify-center space-x-2'>
                        <div className='w-12 h-1 bg-[var(--btn-color)] rounded-full animate-pulse'></div>
                        <div className='w-8 h-1 bg-[var(--btn-color)] opacity-60 rounded-full animate-pulse delay-150'></div>
                        <div className='w-4 h-1 bg-[var(--btn-color)] opacity-30 rounded-full animate-pulse delay-300'></div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className='transform transition-all duration-500 hover:scale-105'
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animation: 'fadeInUp 0.8s ease-out forwards',
                            }}
                        >
                            <ProjectCard
                                src={project.image}
                                link={project.link}
                                h3={project.title}
                                p={project.description}
                                tags={project.tags}
                                theme={theme}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
