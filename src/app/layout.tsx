import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume Banwa Lo", 
  description: "Create Professional resume instantly with AI assistance"
}

export default function RootLayout({
  children,
}:  Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel= "stylesheet"
          href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin= "anonymous"
          referrerPolicy= "no-referrer"
        />
        <link 
          href= "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel= "stylesheet"
        />
      </head>
      <body className= "antialiased">
        {children}
      </body>
    </html>
  );
}
