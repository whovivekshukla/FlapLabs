import FooterComponent from "@/components/component/FooterComponent";
import { Navbar } from "@/components/component/NavBar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <FooterComponent />
    </div>
  );
};

export default HomeLayout;
