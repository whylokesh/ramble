import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramble Group",
  description: `Welcome to Ramble Group - where advertising meets creativity! With over 38 years of experience, we are a team of advertising veterans who have worked with major startups and legacies like Zomato, Nerolac, Bikiaji, Kingfisher, and many more.

Now, let's dive into our services. Firstly, we are proud to be OOH media owners, offering pan-India coverage to our clients. Our extensive network of vendors across the nation enables us to cater to the best competitive rates in the market. We are committed to providing our clients with the most effective and innovative OOH solutions that meet their business goals.

In addition, we also serve media buying agencies, ensuring seamless coordination between us and our clients to achieve the best results possible.

We believe that every business deserves to be heard, and we are here to help you amplify your message. So why not connect with us today? Let's explore how we can work together to make your brand stand out. Drop us a mail at info@ramble.agency and let's take the first step toward a fruitful partnership.

`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://p.usestyle.ai" defer></script>
      </head>
      <body className={`dark text-foreground bg-background ${inter.className}`}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
