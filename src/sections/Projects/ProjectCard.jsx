import PropTypes from 'prop-types'

const ProjectCard = ({ src, link, h3, p, tags, theme }) => {
    return (
        <div className='group relative bg-[var(--project-card-bg)] backdrop-blur-sm border border-[var(--social-bg-color)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
            {/* Gradient overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-[var(--btn-color)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10'></div>

            {/* Image container with overlay */}
            <div className='relative overflow-hidden h-48'>
                <img
                    src={src}
                    alt={h3}
                    className='w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110'
                />
                {/* Gradient overlay on image */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Floating action button */}
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0'>
                    <div className='w-10 h-10 bg-[var(--btn-color)] rounded-full flex items-center justify-center shadow-lg'>
                        <svg
                            className='w-5 h-5 text-[var(--btn-text-color)]'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className='p-6 space-y-4 relative z-20'>
                <div className='space-y-3'>
                    <h3 className='text-xl font-bold text-[var(--text-color)] line-clamp-2 group-hover:text-[var(--btn-color)] transition-colors duration-300'>
                        {h3}
                    </h3>
                    <p className='text-[var(--form-text-color)] leading-relaxed line-clamp-3 text-sm'>
                        {p}
                    </p>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className='px-3 py-1 text-xs font-medium bg-[var(--social-bg-color)] text-[var(--text-color)] rounded-full border border-[var(--btn-color)]/20 hover:border-[var(--btn-color)] hover:bg-[var(--btn-color)]/10 transition-all duration-300 cursor-default'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Link */}
                <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-6 py-2 bg-[var(--btn-color)] text-[var(--btn-text-color)] font-medium rounded-lg hover:shadow-lg hover:shadow-[var(--btn-color)]/25 transition-all duration-300 transform hover:scale-105 group/link'
                >
                    <span>View Project</span>
                    <svg
                        className='w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                    </svg>
                </a>
            </div>

            {/* Decorative elements */}
            <div className='absolute -top-20 -right-20 w-40 h-40 bg-[var(--btn-color)] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500'></div>
            <div className='absolute -bottom-10 -left-10 w-20 h-20 bg-[var(--btn-color)] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500'></div>
        </div>
    )
}

ProjectCard.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    h3: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    theme: PropTypes.string,
}

export default ProjectCard
