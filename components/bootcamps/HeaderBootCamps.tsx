'use client'
import Link from 'next/link'

const HeaderBootcamps: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="bg-gray-50 dark:bg-gray-800 mt-8 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Our Bootcamps
            </h2>
            <nav className="flex font-bold space-x-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <Link 
                href="/" 
                className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <span>/</span>
              <span>Bootcamps</span>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}

export default HeaderBootcamps
