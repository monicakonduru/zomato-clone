import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PolicyPageHeader = () => {
    const [activeTab, setActiveTab] = useState<string>("General");

    const tabs = ["General", "Online Ordering", "Zomato Dining", "Zomato Awards"];
    return (
        <nav className="navbar navbar--fixed-top h-15 flex items-center px-4 py-2">
            <div>
                <div className="mr-29">
                <Link href="/">
                    <Image
                        src="/images/logos/zomato-black.png"
                        alt="Zomato Logo"
                        width={150}
                        height={52}
                    />
                </Link>
            </div>
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`py-1 px-3 text-[16px] cursor-pointer ${activeTab === tab ? "text-[#ED5A6B]" : "text-[#1C1E21]"
                        }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
            </div>
            
        </nav>
    );
};

export default PolicyPageHeader;
