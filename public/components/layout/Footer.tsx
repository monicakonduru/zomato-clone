import Image from "next/image";
import { Footer } from "../../../config/interface";

interface FooterLayoutProps {
  page: Footer; 
}

const FooterLayout: React.FC<FooterLayoutProps> = ({ page }) => {
    return (
        <div className="relative bg-black after:overscroll-y-contain after:absolute after:w-full after:h-20 after:-bottom-20 after:left-0 after:bg-black">
            <footer className="px-5 pt-4 text-white lg:mx-auto lg:max-w-[834px] xl:max-w-[949px] lg:pt-20">
                <div className="flex w-full items-center justify-start py-6">
                    <Image
                        className="h-8 lg:h-9"
                        src={page.logo}
                        alt="Footer Logo"
                        width={170}
                        height={32}
                        priority
                    />
                </div>

                <div className="grid grid-cols-2 gap-6 text-xs font-normal text-zSlate500 md:grid-cols-5">

                    <div className="order-1 h-fit flex flex-col gap-2">
                        <h4 className="text-zGrey200 text-sm lg:text-lg font-semibold">External</h4>
                        {page.external.map((block, i) => (
                            <div key={i} className="w-full text-[16px] text-[#626262]"><a href="#" className="hover:text-[#9a9494]">{block}</a></div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="text-zGrey200 text-sm lg:text-lg font-semibold">Learn More</h4>
                        {page.learnMore.map((block, i) => {
                            const sectionId = block.toLowerCase().replace(/\s+/g, "");
                            return (
                                <div key={i} className="w-full text-[16px] text-[#626262]">
                                    <a
                                        href={`/policy/${sectionId}`}
                                        className="hover:text-[#9a9494]"
                                    >
                                        {block}
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-zGrey200 text-sm lg:text-lg">For Restaurant</h4>
                        {page.forRestaurants.map((block, i) => (
                            <div key={i} className="w-full text-[16px] text-[#626262]"><a href="#" className="hover:text-[#9a9494]">{block}</a></div>
                        ))}
                    </div>

                    <div className="order-2 lg:order-4 flex flex-col gap-2">
                        <h4 className="font-semibold text-zGrey200 text-sm lg:text-lg">For Delivery Partners</h4>
                        {page.forDeliveryPartners.map((block, i) => (
                            <div key={i} className="w-full text-[16px] text-[#626262]"><a href="#" className="hover:text-[#9a9494]">{block}</a></div>
                        ))}
                    </div>

                    <div className="order-3 lg:order-5 flex flex-col gap-2">
                        <h4 className="font-semibold text-zGrey200 text-sm lg:text-lg">Social Links</h4>
                        <div className="flex gap-3 mt-2">
                            {page.socialLinks.website.map((social, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-1 rounded-full flex items-center justify-center"
                                >
                                    <a
                                        href={social.link || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:opacity-80 transition"
                                    >
                                        <Image
                                            src={social.logo}
                                            alt={social.name}
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            {page.download.map((app, i) => (
                                <a key={i} href="#" target="_blank" rel="noreferrer" className="inline-block transform transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={app.logo}
                                        alt={`Download app ${i + 1}`}
                                        width={200}
                                        height={50}
                                        className="object-contain w-full"
                                    />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="mt-8 pb-3 text-[10px] text-[#62626A] text-zSlate500 lg:mt-12  lg:w-full lg:place-self-start lg:border-t lg:border-zSlate500 lg:pt-4">{page.copyrightText}</div>

            </footer>
        </div>
    );
};

export default FooterLayout;

