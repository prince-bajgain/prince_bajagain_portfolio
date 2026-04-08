"use client"

import { JSX, useEffect, useState } from 'react'
import { CiGrid41 } from 'react-icons/ci'
import { FaAngleDown, FaAngleUp, FaGithub, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa'
import { IoFlaskOutline } from 'react-icons/io5'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { BsHouse, BsSuitcase } from 'react-icons/bs'
import { BiSolidUser } from 'react-icons/bi'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger);

type OptionItem = {
    title: string;
    description: string;
    icon: JSX.Element;
    href?: string; // only for links
};

// Regular navigation items
const navOptions: OptionItem[] = [
    { title: "Home", description: "Go to homepage", icon: <BsHouse /> },
    { title: "About", description: "Learn more about me", icon: <BiSolidUser /> },
    { title: "Projects", description: "View my projects", icon: <BsSuitcase /> },
];

// Social media links
const socialOptions: OptionItem[] = [
    { title: "Github", description: "View my github profile", icon: <FaGithub />, href: "https://github.com/mainprins" },
    { title: "LinkedIn", description: "View my linkedin profile", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/prince-bajgain-39376b363/" },
    { title: "Instagram", description: "View my instagram profile", icon: <FaInstagram />, href: "https://www.instagram.com/prince.bajagain/" },
];


const Navbar = () => {
    const lenis = useLenis();
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState<string>("");
    const [openOptions, setOpenOptions] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [hovered, setHovered] = useState(false);

    const filteredNavOptions = navOptions.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const filteredSocialOptions = socialOptions.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );



    useGSAP(() => {
        gsap.fromTo("#menu", {
            y: -10,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        })
    }, [open]);

    const handleEscape = (e: any) => {
        if (e.key === 'Escape') {
            setOpenOptions(false);
        }
    }

    useEffect(() => {
        if (!lenis) return;

        if (openOptions) {
            window.addEventListener('keydown', handleEscape)
            lenis.stop();
            document.body.style.overflow = "hidden"

        } else {
            window.removeEventListener('keydown', handleEscape);
            lenis.start();
            document.body.style.overflow = "auto"
        }

    }, [openOptions, lenis]);




    useGSAP(() => {
        gsap.to("#navIcons", {
            x: -window.innerWidth / 4,
            backgroundColor: "rgba(0, 0, 0, 0.70)",
            scrollTrigger: {
                scrub: true,
                start: "+=10",
                end: "+=100",
            },
        });

        gsap.to("#nav-desc", {
            scale: 0.5,
            opacity: 0,
            scrollTrigger: {
                scrub: true,
                start: "+=10",
                end: "+=50"
            },
        })
    }, [])

    return (
        <nav className='flex fixed w-screen top-0 left-0 z-50 items-center justify-between py-10 px-10'>
            <div id="left" className='flex gap-10 items-center justify-center'>
                <div id="left">
                    <span className='font-dancing font-bold text-xl'>PB</span>
                </div>
                <div id="nav-desc" className='flex items-center justify-center gap-2'>
                    <span className='text-green-400 font-bold'>.</span>
                    <div className='flex flex-col items-center gap-1 justify-center'>
                        <span id="top" className='text-[0.6em] tracking-[0.3em] text-stone-500'>CREATIVE DEVELOPER</span>
                        <span id="bottom" className='text-green-400 text-xs tracking-widest'>BUILDING THE FUTURE</span>
                    </div>
                </div>
            </div>
            <div id="right-desktop" className='hidden md:flex gap-8 items-center justify-center'>
                <div id="navIcons" className='flex gap-5 relative items-center justify-center p-2 border border-stone-800 rounded-full'>
                    <div id="left" className='flex items-center justify-center gap-4 rounded-full '>
                        <span className='hover:bg-white transition-all duration-500 cursor-pointer hover:text-stone-950 rounded-full py-2 px-4 text-sm'>Home</span>
                        <span className='hover:bg-white transition-all duration-500 cursor-pointer hover:text-stone-950 rounded-full py-2 px-4 text-sm'>About</span>
                        <span className='hover:bg-white transition-all duration-500 cursor-pointer hover:text-stone-950 rounded-full py-2 px-4 text-sm'>Blogs</span>
                        <span className={`hover:bg-white transition-all duration-500 cursor-pointer ${open && "bg-stone-400 text-stone-950"} hover:text-stone-950 rounded-full py-2 px-4 text-sm flex gap-1 items-center justify-center`} onClick={() => { setOpen(!open) }}>More {open ? <FaAngleUp /> : <FaAngleDown />}</span>
                    </div>
                    <div id="right" className='flex gap-2'>
                       
                        <div id="right">
                            <a href="https://wa.me/9779708090851?text=Hello"
                                target="_blank"
                                rel="noopener noreferrer" className='bg-linear-to-b from-stone-800 via-stone-700 hpver:from-stone-700 hover:via-stone-600 hover:to-stone-500 to-stone-600 transition-colors duration-500 text-stone-300 hover:text-stone-200 cursor-pointer rounded-full py-2 px-4 text-sm'>Book a call</a>
                        </div>
                    </div>
                    <div className={`${open ? "flex" : "hidden"} absolute top-15 z-50 items-center bg-stone-900 justify-between w-120 p-2`} id='menu'>
                        <div id="left" className='bg-purple-800 cursor-pointer hover:bg-purple-500 w-1/2 flex p-4 flex-col transition-all duration-500 justify-between rounded-md min-h-60' onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
                            <div id="top" className={`flex justify-end overflow-hidden ${hovered ? "rotate-10 text-stone-200" : "rotate-40 text-stone-400"} transition-all duration-500 w-full`}>
                                <IoFlaskOutline size={100} />
                            </div>
                            <div id="bottom" className='flex flex-col gap-2'>
                                <span className='font-bold text-xl'>Labs</span>
                                <span className='font-semibold text-xs'>Experimental Playground and fun micro tools</span>
                            </div>
                        </div>
                        <div id="right" className='flex flex-col gap-4'>
                            <Link href={'https://github.com/mainprins'} target='_blank' id="one" className='flex gap-3 items-center w-50 hover:bg-stone-700 p-3 rounded-md cursor-pointer'>
                                <div id="left" className='bg-stone-700 p-2 border border-stone-500'>
                                    <FaGithub size={30} />
                                </div>
                                <div id="right">
                                    <div id="top" className='font-bold'>Github</div>
                                    <div id="bottom" className='text-xs text-stone-400'>My projects and works</div>
                                </div>
                            </Link>
                            <Link href={'https://www.linkedin.com/in/prince-bajgain-39376b363/'} target='_blank' id="two" className='flex gap-3 items-center w-50 hover:bg-stone-700 p-3 rounded-md cursor-pointer'>
                                <div id="left" className='bg-stone-700 p-2 border border-stone-500'>
                                    <FaLinkedin size={30} />
                                </div>
                                <div id="right">
                                    <div id="top" className='font-bold'>LinkedIn</div>
                                    <div id="bottom" className='text-xs text-stone-400'>My technical details</div>
                                </div>
                            </Link>
                            <Link href={'https://www.instagram.com/prince.bajagain/'} target='_blank' id="three" className='flex gap-3 items-center w-50 hover:bg-stone-700 p-3 rounded-md cursor-pointer'>
                                <div id="left" className='bg-stone-700 p-2 border border-stone-500'>
                                    <FaInstagram size={30} />
                                </div>
                                <div id="right">
                                    <div id="top" className='font-bold'>Instagram</div>
                                    <div id="bottom" className='text-xs text-stone-400'>catch up with my routine</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="options">
                    <div id="left" className='p-3 border border-stone-950 hover:border-stone-600 rounded-full transition-all duration-500 bg-stone-800 hover:bg-stone-70 cursor-pointer text-xl' onClick={() => setOpenOptions(true)}>
                        <CiGrid41 />
                    </div>
                </div>

            </div>
            {openOptions && (
                <div className="fixed flex pt-20 justify-center inset-0 bg-black/40 backdrop-blur-xs z-40">
                    <div className='w-[50%] h-[80%] bg-black/60'>
                        {/* Top search bar */}
                        <div id="top" className='flex w-full justify-between'>
                            <div id="left" className='flex items-center w-full gap-4'>
                                <FaSearch />
                                <input type="text" className='outline-none w-full text-white/80' placeholder='Type a command or search ...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                            </div>
                            <div id="right" className='flex justify-end'>
                                <span className='text-white/60 text-sm'>ESC</span>
                            </div>
                        </div>

                        {/* Bottom items */}
                        <div id="bottom-items" className='flex flex-col gap-3 w-full py-6'>
                            {/* Navigation items */}
                            {filteredNavOptions.map(item => (
                                <div key={item.title} className='w-full py-2 cursor-pointer hover:bg-white/20 px-4 rounded-xl items-center gap-6 flex'>
                                    <div id="left" className='flex items-center'>{item.icon}</div>
                                    <div id="right" className='flex flex-col'>
                                        <span className='text-white/80 text-sm'>{item.title}</span>
                                        <span className='text-white/60 text-xs'>{item.description}</span>
                                    </div>
                                </div>
                            ))}

                            <span className='text-white/50 px-4 font-semibold text-xs tracking-wider'>SOCIAL MEDIA</span>

                            {/* Social media links */}
                            {filteredSocialOptions.map(item => (
                                <Link key={item.title} href={item.href!} target='_blank' className='w-full py-2 cursor-pointer hover:bg-white/20 px-4 rounded-xl items-center gap-6 flex'>
                                    <div id="left" className='flex items-center'>{item.icon}</div>
                                    <div id="right" className='flex flex-col'>
                                        <span className='text-white/80 text-sm'>{item.title}</span>
                                        <span className='text-white/60 text-xs'>{item.description}</span>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            )}

        </nav>
    )
}

export default Navbar