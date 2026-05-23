
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <div>
            <Link href={href} className={` rounded-lg px-4 py-2 text-sm font-medium${isActive ? "bg-slate-100 text-sky-600" : " text-slate-700 transition hover:bg-slate-100 hover:text-sky-600 hover:rounded-xl"}`}>
                {children}
            </Link>
        </div >
    );
};

export default NavLink;