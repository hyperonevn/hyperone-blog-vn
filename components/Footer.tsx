import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0C0C0F] text-center">
      <div className="mt-16 flex flex-col items-center px-4">
        {/* SOCIAL ICONS */}
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>

        {/* GIỚI THIỆU HỆ SINH THÁI */}
        <p className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Một sản phẩm trong hệ sinh thái{' '}
          <strong className="text-[#00B8FF]">HYPER</strong>
          <span className="text-white dark:text-white"> ONE</span>
        </p>

        {/* THÔNG TIN CÔNG TY */}
        <div className="mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p className="font-medium text-gray-800 dark:text-gray-200">HYPER ONE CO., LTD</p>
          <p>68 Nguyễn Huệ, phường Sài Gòn, TP. Hồ Chí Minh, Việt Nam</p>
          <p>
            <a
              href="mailto:info@hyperonevn.com"
              className="text-[#00B8FF] hover:underline"
            >
              info@hyperonevn.com
            </a>{' '}
            ·{' '}
            <a href="tel:+84352608068" className="text-[#8B5CF6] hover:underline">
              +84 352 608 068
            </a>{' '}
            ·{' '}
            <a
              href="https://hyperonevn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EC4899] hover:underline"
            >
              hyperonevn.com
            </a>
          </p>
        </div>

        {/* GẠCH NGĂN */}
        <div className="my-5 h-px w-2/3 max-w-md bg-gray-200 dark:bg-gray-700 opacity-70" />

        {/* BẢN QUYỀN + SITE INFO */}
        <div className="mb-2 flex flex-wrap justify-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{siteMetadata.author}</span>
          <span>•</span>
          <span>© {year}</span>
          <span>•</span>
          <Link href="/" className="hover:text-[#00B8FF]">
            {siteMetadata.title}
          </Link>
        </div>

        {/* POWERED BY */}
        <div className="mb-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <a
            href="https://hyperonevn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-semibold transition-colors duration-300"
          >
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-[#00B8FF]">
              Powered by
            </span>
            <span className="ml-1 font-extrabold">
              <span className="text-[#00B8FF] group-hover:text-[#8B5CF6] transition-colors duration-300">
                HYPER
              </span>
              <span className="text-gray-900 dark:text-white group-hover:text-[#EC4899] transition-colors duration-300">
                {' '}ONE
              </span>
            </span>
            <span className="ml-2 text-gray-500 dark:text-gray-400">
              — AI for Humanity
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
