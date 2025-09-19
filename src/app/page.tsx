import content from "../../config/content";
import DownloadAppSection from "../../public/components/homePage/DownloadComponent";
import FooterLayout from "../../public/components/layout/Footer";
import Header from "../../public/components/layout/Header";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <DownloadAppSection section={content.download} />
      <FooterLayout page={content.footer} />
    </>
  );
}
