import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boqian Liu CV",
  description: "Online CV for Boqian Liu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenu className="nav-bar fixed m-2 left-1/2 transform -translate-x-1/2 p-2 border-2 rounded-full border-slate-400 backdrop-blur-sm overflow-hidden">
          <NavigationMenuList className="flex m-2 gap-2">
            <NavigationMenuItem className="w-24 text-center">
              <Link href="#hello">Hello</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-24 text-center">
              <Link href="#skills">Skills</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-24 text-center">
              <Link href="#experience">Experience</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-24 text-center">
              <Link href="#education">Education</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-24 text-center">
              <Link href="#contact">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {children}
      </body>
    </html>
  );
}
