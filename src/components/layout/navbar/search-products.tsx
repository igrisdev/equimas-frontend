"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { useSearchProducts } from "@/hooks/use-search-products";
import { RefreshCw, Search } from "lucide-react";
import { createUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";

const RenderProductItem = ({
  product,
  pathname,
}: {
  product: any;
  pathname: string;
}) => {
  const isActive = pathname?.includes(product.handle);
  const itemClass = isActive ? "bg-green-300" : "hover:bg-blue-100";

  return (
    <li key={product.id} className={itemClass}>
      <Link
        href={`/product/${product.handle}`}
        className="flex items-center gap-4"
      >
        <div className="size-25 overflow-hidden rounded-lg bg-black">
          <img
            src={product?.featuredImage?.url ?? "/not-found.png"}
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-sm">
          <p className="font-medium">{product.title}</p>
        </div>
      </Link>
    </li>
  );
};

const RenderDropdown = ({
  isView,
  productsSearch,
  searchAttempted,
  loading,
  pathname,
}: {
  isView: boolean;
  productsSearch: any[];
  searchAttempted: boolean;
  loading: boolean;
  pathname: string;
}) => {
  if (!isView) return null;
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-gray-700">Productos</h3>
        <hr className="mt-2 border-gray-400" />
      </div>

      <ul className="flex h-[73vh] w-full flex-col gap-2 overflow-y-auto text-black">
        {loading ? (
          <div className="text-center">Buscando...</div>
        ) : productsSearch.length > 0 ? (
          productsSearch.map((product: any) => (
            <RenderProductItem
              key={product.id}
              product={product}
              pathname={pathname}
            />
          ))
        ) : searchAttempted ? (
          <div className="text-center">No se encontraron resultados</div>
        ) : (
          <div className="text-center">Buscando...</div>
        )}
      </ul>
    </div>
  );
};

export const SearchProducts = () => {
  const router = useRouter();

  const {
    handleChange,
    loading,
    isView,
    productsSearch,
    searchAttempted,
    pathname,
    setFocus,
    search,
  } = useSearchProducts();

  const inputRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFocus(false);

    inputRef.current?.blur();

    const form = e.currentTarget;
    const q = ((new FormData(form).get("q") as string) || "").trim();

    const newParams = new URLSearchParams();
    if (q) newParams.set("q", q);

    router.push(createUrl("/search", newParams));
  }

  return (
    <section className="relative flex h-full w-full flex-col gap-8">
      <form onSubmit={onSubmit} className="relative flex w-full items-center">
        <input
          ref={inputRef}
          type="text"
          name="q"
          placeholder="Buscar productos..."
          autoComplete="off"
          value={search}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          className="w-full rounded-lg border border-gray-400 bg-gray-100 px-4 py-4 outline-0 focus:border-blue-500"
        />
        {loading ? (
          <RefreshCw className="absolute right-4 animate-spin" />
        ) : (
          <Search className="absolute right-4" />
        )}
      </form>

      <RenderDropdown
        productsSearch={productsSearch}
        searchAttempted={searchAttempted}
        loading={loading}
        isView={isView}
        pathname={pathname}
      />
    </section>
  );
};
