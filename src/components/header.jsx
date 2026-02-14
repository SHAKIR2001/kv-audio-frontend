import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import {
    FiCalendar,
    FiGrid,
    FiHome,
    FiImage,
    FiMail,
    FiMenu,
    FiX,
} from "react-icons/fi";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = useMemo(
        () => ([
            { to: "/", label: "Home", icon: FiHome },
            { to: "/items", label: "Items", icon: FiGrid },
            { to: "/gallery", label: "Gallery", icon: FiImage },
            { to: "/booking", label: "Booking", icon: FiCalendar },
            { to: "/contact", label: "Contact", icon: FiMail },
        ]),
        []
    );

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isMenuOpen]);

    return(
        <>
            <header className="w-full bg-accent h-[80px] sm:h-[90px] md:h-[100px] shadow-2xl flex items-center px-4 md:px-8 sticky top-0 z-50 relative">
                <img
                    src="/logo.png"
                    alt="KV Audio"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-[150px] md:h-[150px] object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />

                {/* Desktop nav */}
                <nav className="hidden md:flex flex-1 justify-center gap-8 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300 ${isActive ? "text-gray-200" : ""}`
                        }
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/items"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300 ${isActive ? "text-gray-200" : ""}`
                        }
                    >
                        Items
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300 ${isActive ? "text-gray-200" : ""}`
                        }
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300 ${isActive ? "text-gray-200" : ""}`
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Desktop booking/cart */}
                <NavLink
                    to="/booking"
                    className="hidden md:flex text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300"
                    aria-label="Booking"
                >
                    <FaCartShopping />
                </NavLink>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="md:hidden ml-auto text-white p-2"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={isMenuOpen}
                >
                    <FiMenu size={26} />
                </button>
            </header>

            {/* Mobile drawer */}
            <div
                className={`md:hidden fixed inset-0 z-[60] ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                aria-hidden={!isMenuOpen}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Panel */}
                <aside
                    className={`absolute left-0 top-0 h-full w-[82%] max-w-[360px] bg-primary transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-accent h-[70px] px-4 flex items-center justify-between">
                        <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center overflow-hidden bg-white/10">
                            <img src="/logo.png" alt="KV Audio" className="w-full h-full object-cover" />
                        </div>

                        <button
                            type="button"
                            className="text-white p-2"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <FiX size={26} />
                        </button>
                    </div>

                    <nav className="py-4">
                        {navItems.map(({ to, label, icon: Icon }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-5 py-3 text-base font-medium transition-colors ${
                                        isActive ? "text-accent" : "text-gray-700"
                                    } hover:text-accent`
                                }
                            >
                                <Icon size={18} className="text-gray-500" />
                                <span>{label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </aside>
            </div>
        </>
    )
}