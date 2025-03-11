import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
