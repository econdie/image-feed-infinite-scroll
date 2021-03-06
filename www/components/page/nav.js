import React from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  {
    href: "hhttps://github.com/econdie/image-feed-infinite-scroll/",
    label: "GitHub"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
