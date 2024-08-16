import type {Metadata} from "next";
import "@/app/styles.css";
import '@smastrom/react-rating/style.css'


export const metadata: Metadata = {
  title: "Discover movies",
  description: "Discover movies - List of all Movies",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  );
}
