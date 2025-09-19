import { Download, Footer } from "./interface";

const content = {
  footer: {
    logo: "/images/logos/zomato.png",
    external: [
      "Zomato",
      "Blinkit",
      "District",
      "Hyperpure",
      "Feeding India",
      "Investor Relations",
    ],
    forRestaurants: ["Partner With Us", "Apps For You"],
    forDeliveryPartners: ["Partner With Us", "Apps For You"],
    learnMore: [
      "Privacy",
      "Security",
      "Terms of Service",
      "Help & Support",
      "Report a Fraud",
      "Blog",
    ],
    socialLinks: {
      website: [
        {
          name: "linkedin",
          logo: "images/logos/linkedIn.svg",
          link: "https://www.linkedin.com",
        },
        {
          name: "instagram",
          logo: "images/logos/instagram.svg",
          link: "https://www.instagram.com",
        },
        {
          name: "facebook",
          logo: "images/logos/facebook.svg",
          link: "https://www.facebook.com",
        },
        {
          name: "twitter",
          logo: "images/logos/twitter.svg",
          link: "https://www.twitter.com",
        },
        {
          name: "youtube",
          logo: "images/logos/youtube.svg",
          link: "https://www.youtube.com",
        },
      ],
    },
    download: [
      {
        logo: "/images/logos/playstore.png",
      },
      {
        logo: "/images/logos/appstore.png",
      },
    ],
    copyrightText:
      "By continuing past this page, you agree to our Terms of Service, Privacy Policy, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.",
  } as Footer,

  download: {
    desktopImage: "/images/homePage/downloadSection/desktopImage.png",
    mobileImage: "/images/homePage/downloadSection/mobileImage.png",
    title: "Download the app now!",
    description: "Experience seamless online ordering only on the Zomato app",
    download: [
      {
        logo: "/images/logos/playstore.png",
      },
      {
        logo: "/images/logos/appstore.png",
      },
    ],
  } as Download
};

export default content;
