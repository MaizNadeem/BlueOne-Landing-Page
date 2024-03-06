import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  // {
  //   id: 1,
  //   icon: <Image src="./images/features/hotel.svg" alt="Hotel Management" width={30} height={30} />,
  //   title: "Hotel Management",
  //   paragraph: "Specialized management solutions crafted to meet the unique demands of the hospitality sector.",
  //   btn: "Learn More",
  //   btnLink: "/#",
  // },
  {
    id: 2,
    icon: <Image src="./images/features/cleaning.svg" alt="Hotel Management" width={40} height={40} />,
    title: "Housekeeping",
    paragraph: "Professional cleaning and maintenance services for residential and commercial properties.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: <Image src="./images/features/delivery-truck.svg" alt="Hotel Management" width={40} height={40} />,
    title: "Linen",
    paragraph: "Streamlined linen handling and delivery services for hospitality establishments, ensuring seamless guest experiences.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: <Image src="./images/features/food.svg" alt="Hotel Management" width={40} height={40} />,
    title: "Supplies and Consumables",
    paragraph: "Reliable sourcing and delivery of essential supplies for businesses and households.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
