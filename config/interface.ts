export interface Footer {
  logo: string;
  external: string[];
  forRestaurants: string[];
  forDeliveryPartners: string[];
  learnMore: string[];
  socialLinks: {
    website: {
      name: string;
      logo: string;
      link: string;
    }[];
  };
  download: {
    logo: string;
  }[];
  copyrightText: string;
}

