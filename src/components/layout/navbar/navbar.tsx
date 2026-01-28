import Link from "next/link";

import Logo from "@/assets/logo/image.png";
import { ChevronDown } from "lucide-react";

import { IDropDownMenu } from "@/types/navbar";

import { MobileMenu } from "../../common/movil-menu-drawer";
import CartModal from "../../cart/modal";
import { getMenu } from "@/lib/shopify";
import { Suspense } from "react";
import { SearchProducts } from "./search-products";
import { MAIN_MENU } from "@/lib/constants";
import { IconChevronCompactDown } from "@tabler/icons-react";
import { Menu } from "@/lib/shopify/types";

export const AnimationButtonAppears = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <button className="group relative cursor-pointer overflow-hidden rounded-full">
      <div className="flex flex-nowrap items-center gap-2 px-6 py-4">
        {children}
      </div>

      <div className="absolute inset-0 flex translate-y-full flex-nowrap items-center gap-2 rounded-full bg-white px-6 py-4 text-black transition group-hover:z-50 group-hover:translate-y-0">
        {children}
      </div>
    </button>
  );
};

export const Navbar = ({ menuResponse }: { menuResponse: Menu[] }) => {
  const menu = [
    ...menuResponse,
    // { title: "Crédito", path: "/credit" },
    // { title: "Sobre Nosotros", path: "/about-us" },
  ];

  return (
    <>
      {/* Desktop */}
      <nav className="max-w-8xl sticky top-0 z-30 mx-auto hidden h-[90px] w-full border-b border-transparent transition-all duration-300 ease-in-out hover:border-white sm:block">
        <div className="relative flex items-center justify-between bg-black py-2">
          <section className="grid place-content-center pl-4">
            <AnimationButtonAppears>
              <p className="text-xl font-semibold">Menú</p>
              <IconChevronCompactDown stroke={4} />
            </AnimationButtonAppears>
          </section>

          <section className="flex items-center">
            <Link href="/">
              <img
                src={Logo.src ?? "/not-found.png"}
                alt="logo"
                className="h-18"
              />
            </Link>
          </section>

          <section className="flex flex-nowrap items-center gap-6 pr-4">
            <CartModal />
          </section>

          <div className="absolute top-[88px] -z-10 -translate-y-full bg-blue-400">
            hola Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium quasi id beatae repellat, eum ea doloremque accusantium
            similique ipsam magnam eius et aspernatur? Accusantium delectus
            dolorum ipsum impedit distinctio dicta. Velit fugit, nam et deleniti
            atque vero ea magni quisquam. Voluptas minima voluptatum possimus,
            blanditiis dicta est! Repellat impedit autem voluptatem. Natus
            eveniet quo magni quaerat porro, in quod debitis similique expedita,
            eveniet quo magni quaerat porro, in quod debitis similique expedita,
            eveniet quo magni quaerat porro, in quod debitis similique expedita,
            odio architecto officia laboriosam ut? Tempore. Rerum ut possimus
            hic, modi fugit quis voluptatem ipsum voluptatibus praesentium
            assumenda quasi autem recusandae odio, incidunt dolore ducimus a? Et
            illo veniam blanditiis dicta est! Repellat impedit autem voluptatem.
            Natus odio architecto officia laboriosam ut? Tempore. Rerum ut
            possimus hic, modi fugit quis voluptatem ipsum voluptatibus
            praesentium assumenda quasi autem recusandae odio, incidunt dolore
            ducimus a? Et illo veniam blanditiis dicta est! Repellat impedit
            autem voluptatem. Natus odio architecto officia laboriosam ut?
            Tempore. Rerum ut possimus hic, modi fugit quis voluptatem ipsum
            voluptatibus praesentium assumenda quasi autem recusandae odio,
            incidunt dolore ducimus a? Et illo veniam blanditiis dicta est!
            Repellat impedit autem voluptatem. Natus laudantium excepturi
            voluptate, delectus ex accusamus necessitatibus tempora officia quam
            alias, quasi temporibus vel, vero a corporis praesentium suscipit
            impedit et repellat maxime aperiam aliquid iusto consectetur!
            Explicabo, vel!
          </div>
        </div>
      </nav>

      {/* <section className="grid flex-1 gap-4 md:px-5 lg:px-10 xl:px-20">
          <Suspense fallback={<div className="h-[42px] w-full"></div>}>
          <SearchProducts />
          </Suspense>
          
          <ul className="flex h-full text-sm lg:text-base">
          {menu.map((route) => {
            if (route.children && route.children.length > 0) {
              return (
                <DropdownMenu
                name={route.title}
                drop={route.children}
                key={route.title}
                />
                );
                }
                
                return (
                  <li key={route.title} className="h-full pr-6">
                  <Link href={route.path} className="h-full whitespace-nowrap">
                  {route.title}
                  </Link>
                  </li>
                  );
                  })}
                  </ul>
                  </section> */}

      {/* Mobile */}
      {/* <nav className="fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 transform flex-col gap-4 border-b border-gray-400 bg-white p-2 py-2 sm:hidden">
        <section className="flex items-center justify-between">
          <div>
            <MobileMenu routes={menu} />
          </div>

          <Link href="/">
            <img
              src={Logo.src ?? "/not-found.png"}
              alt="logo"
              className="h-[40px] w-[70px]"
            />
          </Link>

          <div className="h-[44px] w-[48px]">
            <CartModal />
          </div>
        </section>

        <section className="px-2">
          <SearchProducts />
        </section>
      </nav> */}
    </>
  );
};

interface DropdownMenuProps {
  name: string;
  drop: IDropDownMenu[];
}

const DropdownMenu = ({ name, drop }: DropdownMenuProps) => {
  const hasSubmenus = drop.some(
    (item) => item.children && item.children.length > 0,
  );

  return (
    <li className="group">
      <span className="flex cursor-default items-center gap-1 pr-6 group-hover:text-blue-800">
        {name} <ChevronDown size={14} />
      </span>
      <div className="animate-fade-up animate-once animate-duration-100 animate-ease-out absolute top-full right-0 left-0 z-20 hidden w-full border-t border-b border-gray-300 bg-blue-50 pb-8 shadow-2xl group-hover:block">
        <h2 className="border-b border-gray-300 px-10 py-8 text-center text-4xl font-bold uppercase md:px-20 lg:px-40">
          {name}
        </h2>

        <ul
          className={`grid sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:px-20 lg:grid-cols-4 lg:px-40 xl:grid-cols-5 ${hasSubmenus ? "gap-4" : "gap-2"}`}
        >
          {drop.map((item) => (
            <li key={item.title} className="group/sub-group relative">
              {!item.children || item.children.length === 0 ? (
                <Link
                  href={
                    item.path + "?title=" + name + "&collection=" + item.title
                  }
                  className={`uppercase hover:underline ${hasSubmenus ? "text-lg font-semibold" : ""}`}
                >
                  {item.title}
                </Link>
              ) : (
                <div className="">
                  <h3 className="mb-2 text-lg font-semibold uppercase hover:underline">
                    <Link
                      href={
                        item.path +
                        "?title=Categoría" +
                        "&collection=" +
                        item.title
                      }
                    >
                      {item.title}
                    </Link>
                  </h3>

                  <ul className="flex flex-col gap-0">
                    {item.children.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
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
      </div>
    </li>
  );
};
