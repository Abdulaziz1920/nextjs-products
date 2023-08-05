import Link from "next/link";
import React from "react";
import "@/components/TheHeader/header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_left_logo">
            <h1>Exclusive</h1>
          </div>
          <div className="header_nav">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
