import PageMetadata from "@/components/PageMetadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

export default function Layout({children}) { return <><PageMetadata /><a className="skip-link" href="#main-content">Vai al contenuto</a><Navbar /><main id="main-content">{children}</main><Footer /><MobileContactBar /></>; }
