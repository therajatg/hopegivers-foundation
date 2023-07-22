import "../globals.css";
import { Navbar, Footer } from "@/components";
import { ModalProvider } from "@/context/context";

export const metadata = {
  title: "Hope Givers Foundation",
  description: "Hope Givers Foundation - Home for elderly",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
