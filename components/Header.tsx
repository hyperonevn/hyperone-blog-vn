import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'relative flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Logo & Title */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>

      {/* Navigation + Actions */}
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>

      {/* ⚡ Powered by HYPER ONE góc phải */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-6 flex items-center gap-1 bg-white/70 dark:bg-gray-800/70 px-3 py-1 rounded-full text-[10px] sm:text-xs border border-gray-300/50 dark:border-gray-700 shadow-sm">
        <span className="text-gray-600 dark:text-gray-300">Powered by</span>
        <a
          href="https://hyperonevn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5 font-bold text-gray-900 dark:text-white"
        >
          <span className="text-[#00b8ff]">HYPER</span>ONE
        </a>
      </div>
    </header>
  )
}

export default Header
