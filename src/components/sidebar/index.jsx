import { PiTShirtLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function SidebarElement() {
  return (
    <aside className="relative">
        <ul className="p-3 rounded-lg after:absolute after">
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 border-b-[1px] text-[#666666] text-[15px]"><PiTShirtLight className="me-2" /> T-Shirt</Link></li>
            <li><Link className="flex items-center p-2 text-[#666666] text-[15px] font-bold">View All Categories</Link></li>
        </ul>
    </aside>
  );
}
