import "./globals.css";

export const metadata = {
  title: "Yogesh | Full Stack Web Developer",
  description:
    "Yogesh is a Full Stack Web Developer specializing in React, Next.js, Python and Django. Explore projects, skills and services.",
  keywords: [
    "Yogesh",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Django Developer",
    "Freelancer",
  ],
  authors: [{ name: "Yogesh" }],
  creator: "Yogesh",
  openGraph: {
    title: "Yogesh | Full Stack Web Developer",
    description:
      "Premium portfolio of a Full Stack Web Developer specializing in modern web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}