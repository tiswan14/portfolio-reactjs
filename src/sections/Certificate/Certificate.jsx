import { useState } from 'react'

const Certificate = () => {
    const certificates = [
        // 🛡️ Cybersecurity & Networking
        {
            id: 1,
            issuer: 'Cyber Academy Indonesia',
            title: 'Classical Cryptography for Beginner',
            issued: 'Feb 2025',
            credentialId: 'CCFB01102250325',
            logo: 'cyber-academy',
            category: 'cybersecurity-networking',
        },
        {
            id: 2,
            issuer: 'Cisco',
            title: 'Junior Cybersecurity Analyst Career Path',
            issued: 'Jul 2024',
            logo: 'cisco',
            category: 'cybersecurity-networking',
        },
        {
            id: 4,
            issuer: 'Cisco',
            title: 'Introduction to Cybersecurity',
            issued: 'Mei 2024',
            logo: 'cisco',
            category: 'cybersecurity-networking',
        },
        {
            id: 5,
            issuer: 'Akademi Digital Nusantara (ADINUSA)',
            title: 'Linux System Administration',
            issued: 'Mei 2024',
            expires: 'Mei 2026',
            credentialId: 'C01001-00000-31598',
            logo: 'adinusa',
            category: 'cybersecurity-networking',
        },
        {
            id: 11,
            issuer: 'BISA AI Academy',
            title: 'Cyber Security Essential with Kali Linux',
            issued: 'Apr 2024',
            logo: 'bisaai',
            category: 'cybersecurity-networking',
        },
        {
            id: 10,
            issuer: 'ID-Networkers (IDN.ID)',
            title: 'Cisco Dasar',
            issued: 'Apr 2024',
            expires: 'Apr 2027',
            credentialId: 'IDN-1712114080-184-9101',
            logo: 'idn',
            category: 'cybersecurity-networking',
        },
        {
            id: 12,
            issuer: 'ID-Networkers (IDN.ID)',
            title: 'Jaringan Komputer Dasar',
            issued: 'Apr 2024',
            expires: 'Apr 2027',
            credentialId: 'IDN-1713958868-180-9101',
            logo: 'idn',
            category: 'cybersecurity-networking',
        },
        {
            id: 36,
            issuer: 'MikroTik',
            title: 'MikroTik Certified Network Associate',
            issued: 'Jan 2022',
            expires: 'Jan 2025',
            credentialId: '2201NA2914',
            logo: 'mikrotik',
            category: 'cybersecurity-networking',
        },

        // 💻 Backend & DevOps
        {
            id: 8,
            issuer: 'CODEPOLITAN',
            title: 'Belajar Dasar Express.js',
            issued: 'Mei 2024',
            expires: 'Mei 2027',
            credentialId: '9QRNKXY',
            logo: 'codepolitan',
            category: 'backend-devops',
        },
        {
            id: 9,
            issuer: 'CODEPOLITAN',
            title: 'Belajar Dasar Node.js dan NPM',
            issued: 'Mei 2024',
            expires: 'Mei 2027',
            credentialId: 'BK2LZQ9',
            logo: 'codepolitan',
            category: 'backend-devops',
        },
        {
            id: 29,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
            issued: 'Feb 2023',
            expires: 'Feb 2026',
            credentialId: 'EYX49O6GJPDL',
            logo: 'dicoding',
            category: 'backend-devops',
        },
        {
            id: 28,
            issuer: 'ID-Networkers (IDN.ID)',
            title: 'Linux Dasar',
            issued: 'Mar 2023',
            expires: 'Mar 2026',
            credentialId: 'IDN-1680064963-186-9101',
            logo: 'idn',
            category: 'backend-devops',
        },
        {
            id: 35,
            issuer: 'Aguna Course',
            title: 'Linux Fundamental',
            issued: 'Mar 2022',
            credentialId: 'AC-476-71947523-82',
            logo: 'aguna',
            category: 'backend-devops',
        },
        {
            id: 31,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Dasar-Dasar DevOps',
            issued: 'Nov 2022',
            expires: 'Nov 2025',
            credentialId: 'EYX49YN4RPDL',
            logo: 'dicoding',
            category: 'backend-devops',
        },

        // 🎨 Frontend Development
        {
            id: 16,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Membuat Aplikasi Web dengan React',
            issued: 'Nov 2023',
            expires: 'Nov 2026',
            credentialId: 'GRX528EWVX0M',
            logo: 'dicoding',
            category: 'frontend',
        },
        {
            id: 18,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Membuat Front-End Web untuk Pemula',
            issued: 'Okt 2023',
            expires: 'Okt 2026',
            credentialId: 'QLZ9ROMMEP5D',
            logo: 'dicoding',
            category: 'frontend',
        },
        {
            id: 13,
            issuer: 'CODEPOLITAN',
            title: 'Belajar AJAX dan Web API',
            issued: 'Mar 2024',
            expires: 'Mar 2027',
            credentialId: 'JNZ1MYA',
            logo: 'codepolitan',
            category: 'frontend',
        },
        {
            id: 14,
            issuer: 'CODEPOLITAN',
            title: 'Belajar JavaScript Asynchronous',
            issued: 'Mar 2024',
            expires: 'Mar 2027',
            credentialId: 'FBYFATP',
            logo: 'codepolitan',
            category: 'frontend',
        },
        {
            id: 27,
            issuer: 'CODEPOLITAN',
            title: 'Belajar JavaScript Dasar',
            issued: 'Mei 2023',
            expires: 'Apr 2026',
            credentialId: 'WCY6VTL',
            logo: 'codepolitan',
            category: 'frontend',
        },
        {
            id: 30,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Dasar Pemrograman JavaScript',
            issued: 'Des 2022',
            expires: 'Des 2025',
            credentialId: 'JLX1L7M92X72',
            logo: 'dicoding',
            category: 'frontend',
        },
        {
            id: 25,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Dasar Pemrograman Web',
            issued: 'Mei 2023',
            expires: 'Mei 2026',
            credentialId: '07Z6VVG7RXQR',
            logo: 'dicoding',
            category: 'frontend',
        },

        // 📊 Data & Machine Learning
        {
            id: 19,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Dasar Visualisasi Data',
            issued: 'Sep 2023',
            expires: 'Sep 2026',
            credentialId: '6RPN48Q79X2M',
            logo: 'dicoding',
            category: 'data-ml',
        },
        {
            id: 20,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Machine Learning untuk Pemula',
            issued: 'Sep 2023',
            expires: 'Sep 2026',
            credentialId: '1OP81NDL2ZQK',
            logo: 'dicoding',
            category: 'data-ml',
        },
        {
            id: 21,
            issuer: 'Sololearn',
            title: 'Introduction to Python',
            issued: 'Sep 2023',
            expires: 'Sep 2026',
            credentialId: 'CC-AVE0L1E4',
            logo: 'sololearn',
            category: 'data-ml',
        },
        {
            id: 22,
            issuer: 'Dicoding Indonesia',
            title: 'Memulai Pemrograman dengan Python',
            issued: 'Sep 2023',
            expires: 'Sep 2026',
            credentialId: '1OP81NY8LZQK',
            logo: 'dicoding',
            category: 'data-ml',
        },

        // ☁️ Cloud & Virtualization
        {
            id: 33,
            issuer: 'Dicoding Indonesia',
            title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
            issued: 'Nov 2022',
            expires: 'Nov 2025',
            credentialId: 'EYX4902YRPDL',
            logo: 'dicoding',
            category: 'cloud-virtualization',
        },
        {
            id: 17,
            issuer: 'Alibaba Cloud',
            title: 'Alibaba Cloud Certified',
            issued: 'Okt 2023',
            expires: 'Okt 2025',
            credentialId: 'ACCD0119700100001181',
            logo: 'alibaba',
            category: 'cloud-virtualization',
        },
        {
            id: 34,
            issuer: 'Aguna Course',
            title: 'Virtual Machine Fundamental',
            issued: 'Mar 2022',
            credentialId: 'AC-232-14160822-79',
            logo: 'aguna',
            category: 'cloud-virtualization',
        },

        // 📁 Umum / Penunjang
        {
            id: 26,
            issuer: 'CODEPOLITAN',
            title: 'Belajar GIT untuk Pemula',
            issued: 'Mei 2023',
            expires: 'Apr 2026',
            credentialId: 'HAVCBF0',
            logo: 'codepolitan',
            category: 'general',
        },
        {
            id: 23,
            issuer: 'Dicoding Indonesia',
            title: 'Belajar Dasar Manajemen Proyek',
            issued: 'Jul 2023',
            expires: 'Jul 2026',
            credentialId: 'EYX468RNWPDL',
            logo: 'dicoding',
            category: 'general',
        },
        {
            id: 24,
            issuer: 'Dicoding Indonesia',
            title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
            issued: 'Jul 2023',
            expires: 'Jul 2026',
            credentialId: '72ZD8R30JZYW',
            logo: 'dicoding',
            category: 'general',
        },
    ]

    const [activeFilter, setActiveFilter] = useState('all')

    const filterButtons = [
        { id: 'all', label: 'All Certificates' },
        {
            id: 'cybersecurity-networking',
            label: '🛡️ Cybersecurity & Networking',
        },
        { id: 'backend-devops', label: '💻 Backend & DevOps' },
        { id: 'frontend', label: '🎨 Frontend Development' },
        { id: 'data-ml', label: '📊 Data & Machine Learning' },
        { id: 'cloud-virtualization', label: '☁️ Cloud & Virtualization' },
        { id: 'general', label: '📁 Umum / Penunjang' },
    ]

    const filteredCertificates =
        activeFilter === 'all'
            ? certificates
            : certificates.filter((cert) => cert.category === activeFilter)

    return (
        <section
            id='certificates'
            className='py-16 px-4 bg-[var(--background-color)]'
        >
            <div className='max-w-6xl mx-auto'>
                {/* Heading */}
                <div
                    className='text-center mb-12'
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    <h2 className='text-4xl font-bold text-center mb-4 text-[var(--text-color)]'>
                        Licenses & Certifications
                    </h2>
                    <h4
                        className='text-xl text-[var(--form-text-color)] max-w-3xl mt-3 mx-auto'
                        data-aos='fade-up'
                        data-aos-delay='200'
                    >
                        Professional certifications I've earned through
                        coursework and examinations
                    </h4>
                </div>

                {/* Filter Buttons */}
                <div
                    className='flex flex-wrap justify-center gap-2 mb-8'
                    data-aos='fade-up'
                    data-aos-delay='300'
                >
                    {filterButtons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => setActiveFilter(button.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeFilter === button.id
                                    ? 'bg-[var(--btn-color)] text-[var(--btn-text-color)]'
                                    : 'bg-[var(--project-card-bg)] text-[var(--text-color)] hover:bg-[var(--social-bg-color)]'
                            }`}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>

                {/* Certificates Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredCertificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            data-aos='zoom-in-up'
                            data-aos-delay={400 + index * 100}
                            data-aos-duration='800'
                            className='bg-[var(--project-card-bg)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                        >
                            <div className='flex items-center mb-4'>
                                <div className='w-12 h-12 rounded-lg bg-[var(--social-bg-color)] flex items-center justify-center mr-4'>
                                    <span className='text-lg font-semibold text-[var(--text-color)]'>
                                        {cert.logo === 'cisco'
                                            ? 'C'
                                            : cert.logo === 'codepolitan'
                                            ? 'CP'
                                            : cert.issuer.charAt(0)}
                                    </span>
                                </div>
                                <h3 className='text-xl font-semibold text-[var(--text-color)]'>
                                    {cert.issuer}
                                </h3>
                            </div>

                            <h4 className='text-lg font-medium text-[var(--text-color)] mb-2'>
                                {cert.title}
                            </h4>

                            <div className='text-sm text-[var(--form-text-color)] space-y-1'>
                                <p>Issued: {cert.issued}</p>
                                {cert.expires && <p>Expires: {cert.expires}</p>}
                                {cert.credentialId && (
                                    <p>Credential ID: {cert.credentialId}</p>
                                )}
                            </div>

                            <button className='mt-4 px-4 py-2 text-sm bg-[var(--btn-color)] text-[var(--btn-text-color)] rounded-lg hover:opacity-90 transition-opacity'>
                                Show Credential
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificate
