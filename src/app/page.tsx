import content from "../../config/content";
import FooterLayout from "../../public/components/layout/Footer";
import Header from "../../public/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <FooterLayout page={content.footer} />
    </>
  );
}
