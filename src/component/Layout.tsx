import React, { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

interface LayoutI {
  children: ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <div>
      {/* <nav>
        <Link href={"/"}>Index</Link>
        <Link href={"/second"}>second</Link>
      </nav> */}
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </div>
  );
};

export default Layout;
