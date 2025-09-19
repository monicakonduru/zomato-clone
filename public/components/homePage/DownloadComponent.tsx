import { Download } from "../../../config/interface";

interface DownloadAppSection {
    section: Download;
}

const DownloadAppSection: React.FC<DownloadAppSection> = ({ section }) => {
    return (
        <>
            <div className="md:py-10 bg-white md:mb-16 md:mx-auto w-full md:w-[88%]">
                <div
                    className="relative mx-auto max-w-[1488px] shadow-[0px_8px_10px_0px_#1C1C1C14] 
                               rounded-t-[45px] md:rounded-[45px] md:overflow-hidden"
                    style={{
                        background: "linear-gradient(180deg, #FFEDEF 0%, #FFDBE0 100%)", // Gradient from pink to white
                    }}
                >
                    <div className="pt-6 px-6 md:px-12 gap-7 grid grid-cols-1 md:grid-cols-2 justify-evenly items-center w-full">

                        <div className="pt-6 px-4 md:px-12 flex flex-col w-full sm:items-center">
                            <div className="text-[26px] md:text-[40px] font-bold text-start mb-2">{section.title}</div>
                            <div className="text-[#596378] font-normal text-[14px] md:text-[24px] md:text-start md:text-base items-center text-center">
                                {section.description}
                            </div>
                            <div className="mt-[40px] flex max-h-[48px] w-4/5 items-center justify-center gap-4 mx-auto">
                                {section.download.map((app) => (
                                    <div key={app.logo}><img src={app.logo} alt="" className="inline-block transform transition-transform duration-300 hover:scale-105" /></div> // Ensure each child has a key
                                ))}
                            </div>
                        </div>

                        <div>
                            {/* Mobile Image for small screens */}
                            <img
                                src={section.mobileImage}
                                alt=""
                                className="block md:hidden w-full"
                            />
                            {/* Desktop Image for medium+ screens */}
                            <img
                                src={section.desktopImage}
                                alt=""
                                className="hidden md:block w-full"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DownloadAppSection;
