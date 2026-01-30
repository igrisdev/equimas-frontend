"use client";

import Link from "next/link";

import Logo from "@/assets/logo/image.webp";
import { ChevronDown } from "lucide-react";

import { IDropDownMenu } from "@/types/navbar";

import { MobileMenu } from "../../common/movil-menu-drawer";
import CartModal from "../../cart/modal";
import { getMenu } from "@/lib/shopify";
import { Suspense, useEffect, useRef, useState } from "react";
import { SearchProducts } from "./search-products";
import { MAIN_MENU } from "@/lib/constants";
import { IconChevronCompactDown } from "@tabler/icons-react";
import { Menu } from "@/lib/shopify/types";
import SearchModal from "@/components/search/modal";
import clsx from "clsx";

interface AnimationButtonAppearsProps {
  children: React.ReactNode;
  firstColor?: string;
  secondColor?: string;
  handleClick?: () => void;
  hidden?: boolean;
}

export const AnimationButtonAppears = ({
  children,
  firstColor = "bg-transparent",
  secondColor = "bg-white",
  handleClick,
  hidden = true,
}: AnimationButtonAppearsProps) => {
  return (
    <button
      className={clsx(
        "group relative w-full cursor-pointer overflow-hidden rounded-full",
        hidden && "hidden md:block",
      )}
      onClick={handleClick}
    >
      <div
        className={`flex flex-nowrap items-center justify-center gap-2 px-5 py-3 ${firstColor}`}
      >
        {children}
      </div>

      <div
        className={`absolute inset-0 flex translate-y-full flex-nowrap items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-black transition group-hover:z-50 group-hover:translate-y-0 ${secondColor}`}
      >
        {children}
      </div>
    </button>
  );
};

export const MenuDesktop = ({
  isOpenMenu,
  menu,
  handleClick,
}: {
  isOpenMenu: boolean;
  menu: Menu[];
  handleClick: () => void;
}) => {
  return (
    <div
      data-open-menu={isOpenMenu}
      className={`absolute top-[88px] -z-10 hidden w-full rounded-b-4xl border-b border-blue-400 bg-black p-4 transition-all md:block ${isOpenMenu ? "translate-y-0" : "-translate-y-full"}`}
    >
      <section className="grid w-full flex-1 gap-4">
        {menu.map((route) => {
          if (route.children && route.children.length > 0) {
            return (
              <DropdownMenu
                name={route.title}
                drop={route.children}
                key={route.title}
                handleClick={handleClick}
              />
            );
          }
          return;
        })}
      </section>
    </div>
  );
};

interface DropdownMenuProps {
  name: string;
  drop: IDropDownMenu[];
  handleClick?: () => void;
}

const DropdownMenu = ({ name, drop, handleClick }: DropdownMenuProps) => {
  const hasSubmenus = drop.some(
    (item) => item.children && item.children.length > 0,
  );

  return (
    <ul
      className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${hasSubmenus ? "gap-4" : "gap-2"}`}
    >
      {drop.map((item) => (
        <li key={item.title} className="group/sub-group relative">
          {!item.children || item.children.length === 0 ? (
            <Link
              onClick={handleClick}
              href={item.path + "?title=" + name + "&collection=" + item.title}
              className={`text-blue-300 uppercase hover:underline ${hasSubmenus ? "text-lg font-semibold" : ""}`}
            >
              {item.title}
            </Link>
          ) : (
            <div className="">
              <h3 className="mb-2 text-lg font-semibold text-blue-300 uppercase hover:underline">
                <Link
                  onClick={handleClick}
                  href={
                    item.path + "?title=Categoría" + "&collection=" + item.title
                  }
                >
                  {item.title}
                </Link>
              </h3>

              <ul className="flex flex-col gap-0">
                {item.children.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      onClick={handleClick}
                      href={
                        subItem.path +
                        "?title=Subcategoría" +
                        "&collection=" +
                        subItem.title
                      }
                      className="block w-full py-2 hover:underline"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export const Navbar = ({ menuResponse }: { menuResponse: Menu[] }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  const handleOpenMenu = () => setIsOpenMenu((prev) => !prev);
  const handleCloseMenu = () => setIsOpenMenu(false);

  const menu = [...menuResponse];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isOpenMenu) return;

      if (navRef.current && navRef.current.contains(e.target as Node)) {
        return;
      }

      setIsOpenMenu(false);
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <>
      {/* Desktop */}
      <nav
        ref={navRef} // Asignamos la ref aquí
        className="max-w-8xl sticky top-0 z-30 mx-auto block h-[90px] w-full border-b border-transparent transition-all duration-300 ease-in-out hover:border-blue-400"
        data-open-menu={isOpenMenu}
      >
        <div className="relative flex items-center justify-between bg-black py-2">
          {/* Botón Menú */}
          <section className="grid place-content-center pl-4">
            <AnimationButtonAppears handleClick={handleOpenMenu}>
              <p className="text-lg font-semibold">Menú</p>
              <IconChevronCompactDown stroke={4} />
            </AnimationButtonAppears>

            <MobileMenu routes={menu} />
          </section>

          {/* Logo */}
          <section className="flex items-center">
            <Link href="/" onClick={handleCloseMenu}>
              <img
                src={Logo.src ?? "/not-found.png"}
                alt="logo"
                className="h-18"
              />
            </Link>
          </section>

          {/* Buscador, Carrito */}
          <section className="flex flex-nowrap items-center gap-6 pr-5 md:gap-10 md:pr-8">
            <SearchModal />

            <CartModal />
          </section>

          {/* Menú Desplegable */}
          <MenuDesktop
            isOpenMenu={isOpenMenu}
            menu={menu}
            handleClick={() => setIsOpenMenu(false)}
          />
        </div>
      </nav>
    </>
  );
};
