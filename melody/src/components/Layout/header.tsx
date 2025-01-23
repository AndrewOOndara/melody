
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <footer className="flex w-full shrink-0 flex-col md:flex-row items-start md:items-center justify-start gap-2 p-4 md:p-6 border-t">
      <Link href="#" className="order-1 md:order-none" prefetch={false}>
        <Image
            src="/melody_logo.png"
            alt="Melody Logo"
            width="100"
            height="100"
        >

        </Image>
      </Link>
      <nav className="order-3 md:order-none flex-1 justify-center grid md:flex">
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="order-2 md:order-none flex w-full max-w-xs items-center justify-end gap-4">
        <Link
          href="#"
          className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">Twitter</span>
          <TwitterIcon className="w-4 h-4 fill-twitter" />
        </Link>
        <Link
          href="#"
          className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon className="w-4 h-4 fill-github" />
        </Link>
        <Link
          href="#"
          className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">YouTube</span>
          <PlayIcon className="w-4 h-4 fill-youtube" />
        </Link>
      </div>
    </footer>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}