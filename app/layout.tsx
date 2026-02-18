import "./globals.css";
import Background from "./components/background";
import SmoothScroll from "./components/smooth-scroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" href="/assets/bg.jpg" as="image" />
        <link rel="preload" href="/assets/mountain.png" as="image" />
        <link rel="preload" href="/assets/stars.png" as="image" />
        {/* Space-themed Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <Background />
        {children}
      </body>
    </html>
  );
}
