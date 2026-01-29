"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, Suspense, useState } from "react";
import OpenCart from "./open-cart";
import CloseCart from "../cart/close-cart";
import { SearchProducts } from "../layout/navbar/search-products";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 bottom-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white px-5 py-6 text-black md:w-[550px] md:rounded-l-4xl">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold uppercase">Buscador</p>
                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              <div className="flex h-full w-full overflow-hidden pt-6 pb-4">
                <Suspense fallback={null}>
                  <SearchProducts />
                </Suspense>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
