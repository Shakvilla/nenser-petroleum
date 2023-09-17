"use client"
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    SupportIcon,
    MenuIcon,
    ChatAlt2Icon,
    SpeakerphoneIcon,
    XIcon,
    MailIcon,
    AcademicCapIcon,
    ChipIcon,
} from '@heroicons/react/outline'
import {
    ChatAltIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
// import ReddeLogoRed from '../../public/assets/Logos/redde-logo.png'


import Logo from '../../../public/assets/images/logo.svg'
const features = [
    {
        name: 'Home',
        href: '/',
        description: 'Want to find out more about our company? ',
        icon: ChatAlt2Icon,
    },
    {
        name: 'About',
        href: '/about',
        description:
            'Find out why you need to use ReddeOnline Payment Platform!',
        icon: SpeakerphoneIcon,
    },
  
    {
        name: 'Products & Services',
        href: '/products-services',
        description: 'You have more questions about our product? Speak To Us',
        icon: MailIcon,
    },
     {
        name: 'HSE & Quality',
        href: '/hse-quality',
        description: 'You have more questions about our product? Speak To Us',
        icon: ChipIcon,
    },
     {
        name: 'Careers',
        href: '/carees',
        description: 'You have more questions about our product? Speak To Us',
        icon: AcademicCapIcon,
    },
    {
        name: 'News',
        href: '/news',
        description: 'You have more questions about our product? Speak To Us',
        icon: BookmarkAltIcon,
    },
]

const resources = [
    {
        name: 'What we do',
        description:
            'Get all of your questions answered in our forums or contact support.',
        href: '/about/what-we-do',
        icon: SupportIcon,
    },
    {
        name: 'Leadership',
        description: 'For all our latest news and updates',
        href: '/about/leadership',
        icon: ChatAlt2Icon,
    },
    {
        name: 'Our strategy',
        href: "Our target is simple, exceptional service to our customers...",
        description:
            '/about/our-strategy',
        target: '_blank',
        icon: BookmarkAltIcon,
    },
     {
        name: 'Partnership',
        href: "/about/partnership",
        description:
            '#',
        target: '_blank',
        icon: BookmarkAltIcon,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    const changeBackground = () => {
        {
            window.scrollY > 30 ? setScrolled(true) : setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <>
            <nav
                className={
                    scrolled
                        ? 'bg-white shadow-md shadow-slate-200'
                        : 'bg-transparent'
                }
            >
                <Popover className="container relative mx-auto ">
                    <div className="layout">
                        <div className="flex items-center justify-between py-3 lg:justify-start lg:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link href="/">
                                        <span className="sr-only">Nenser</span> 

                                        <Image
                                            src={Logo}
                                            width={130}
                                            height={50}
                                            alt="redde-logo"
                                        />
                                    {/* Nenser */}
                                </Link>
                            </div>
                            <div className="-my-2 -mr-2 lg:hidden">
                                <Popover.Button className="inline-flex items-center justify-center p-2 bg-transparent rounded-md glass hover:text-gray-500 ">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon
                                        className="w-6 h-6 text-gray-800 opacity-50"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                            <Popover.Group
                                as="nav"
                                className="hidden mr-16 space-x-10 lg:flex"
                            >
                                    <Link
                                        className={
                                            scrolled
                                                ? 'text-base font-medium text-yellow-600 hover:text-gray-900'
                                                : 'text-base font-medium text-gray-900 hover:text-yellow-600'
                                        }
                                        href="/"
                                    >
                                        Home
                                    </Link>

                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <span>
                                                <Popover.Button
                                                    className={classNames(
                                                        open
                                                            ? 'text-gray-900 group inline-flex items-center '
                                                            : scrolled
                                                            ? 'text-base font-medium text-yellow-600 hover:text-gray-900 group inline-flex items-center '
                                                            : 'text-base font-medium text-gray-900 hover:text-yellow-600 group inline-flex items-center'
                                                    )}
                                                >
                                                    <span>About</span>
                                                    {open ? (
                                                        <ChevronUpIcon
                                                            className={classNames(
                                                                open
                                                                    ? 'text-gray-900'
                                                                    : scrolled
                                                                    ? 'text-yellow-600'
                                                                    : 'text-gray-900',
                                                                ' h-5 w-5 group-hover:text-gray-900'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open
                                                                    ? 'text-gray-900'
                                                                    : scrolled
                                                                    ? 'text-yellow-600'
                                                                    : 'text-gray-900',
                                                                ' h-5 w-5 group-hover:text-gray-900'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </Popover.Button>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                                                        <div className="overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                                                                {resources.map(
                                                                    (item) => (
                                                                        <Link
                                                                            key={
                                                                                item.name
                                                                            }
                                                                            href={
                                                                                item.href
                                                                            }
                                                                            target={
                                                                                item.target
                                                                                    ? '_blank'
                                                                                    : '_self'
                                                                            }
                                                                            rel="noopener noreferrer"
                                                                            className="flex items-start p-3 -m-3 rounded-lg hover:bg-red-50"
                                                                        >
                                                                            <item.icon
                                                                                className="flex-shrink-0 w-6 h-6 text-gray-900"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-semibold text-gray-900">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="mt-1 text-sm font-medium text-gray-900 ">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </span>
                                        </>
                                    )}
                                </Popover>

                                <Link href="/why-choose-us"      className={
                                            scrolled
                                                ? 'text-base font-medium text-yellow-600 hover:text-gray-900'
                                                : 'text-base font-medium text-gray-900 hover:text-yellow-600'
                                        }>
                                    
                                        Products & Services
                                </Link>
                                <Link href="#"    className={
                                            scrolled
                                                ? 'text-base font-medium text-yellow-600 hover:text-gray-900'
                                                : 'text-base font-medium text-gray-900 hover:text-yellow-600'
                                        }>
                                  
                                        HSE & Qualities
                                </Link>

                                <Link href="/contact-us"  className={
                                            scrolled
                                                ? 'text-base font-medium text-yellow-600 hover:text-gray-900'
                                                : 'text-base font-medium text-gray-900 hover:text-yellow-600'
                                        }>
                                   
                                        Careers
                                </Link>
                            </Popover.Group>
                            <div className="items-center justify-end hidden lg:flex md:flex-1 lg:w-0 ">
                                <Link href="#"    className="px-4 py-2 mx-2 text-xs text-yellow-600 rounder-sm transition duration-500 ease-in-out transform border-2 rounded border-yellow-600 hover:-translate-y-1 hover:scale-110 md:text-base font-base"
                                        target="_blank">
                                  
                                        Learn more
                                </Link>
                                <Link href="https://app.reddeonline.com/register"  className="px-4 py-2 mx-2 text-xs text-white transition duration-500 ease-in-out transform bg-yellow-600 rounded hover:bg-yellow-700 hover:-translate-y-1 hover:scale-110 md:text-base font-base "
                                        target="_blank">
                               
                                        Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform lg:hidden "
                        >
                            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="flex items-center justify-between">
                                        <Link href="/">
                                           <Image
                                                    className="w-16 h-8 sm:h-10"
                                                    src={Logo}
                                                    alt="#"
                                                    width={100}
                                                    height={30}
                                                />
                                        </Link>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-800 ">
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className="w-6 h-6 text-gray-800"
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {features.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center p-3 -m-3 text-gray-800 rounded-md opacity-80 hover:base-glass"
                                                >
                                                    <item.icon
                                                        className="flex-shrink-0 w-6 h-6 "
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-3 text-base font-normal text-gray-800">
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="px-5 py-6 space-y-6">
                                    {/* <span className="font-bold text-gray-800">
                                        Resources{' '}
                                    </span> */}

                                    <div className="flex flex-col justify-between gap-y-4 gap-x-8">
                                        {/* {resources.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="text-base font-normal text-gray-800"
                                            >
                                                {item.name}
                                            </Link>
                                        ))} */}


                                        <Link href="/contact" className="px-4 py-2 text-xs text-center text-yellow-600 border border-yellow-600 hover:bg-yellow-700 md:text-base font-base rounded"
                                                target="_blank">
                                         
                                                Learn more
                                        </Link>
                                        <Link href="/contact" className="px-4 py-2 text-xs text-center text-white bg-yellow-600 rounded hover:bg-yellow-700 md:text-base font-base "
                                                target="_blank">
                                         
                                                Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </nav>
        </>
    )
}

export default Navbar