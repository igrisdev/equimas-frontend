import Link from "next/link";

import { ICategoryCart } from "@/types/category";
import { getCollectionCategoriesAndBrands } from "@/lib/shopify";
import { MAIN_MENU } from "@/lib/constants";

export const Categories = async () => {
  const { categories } = await getCollectionCategoriesAndBrands(MAIN_MENU);

  if (categories.length < 1) return null;

  return (
    <section className="max-w-8xl mx-auto flex w-full flex-col gap-4 md:px-4">
      <div className="grid grid-cols-2 gap-8 rounded-4xl bg-white px-6 py-10 sm:px-8 sm:py-15 md:px-20 md:py-40 lg:grid-cols-3 xl:grid-cols-4">
        {categories.slice(0, 20).map((category) => (
          <CardCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

const CardCategory = ({ category }: { category: ICategoryCart }) => {
  return (
    <Link
      href={
        category.path + "?title=Categoría" + "&collection=" + category.title
      }
      className="group overflow-hidden rounded-2xl border border-black bg-black"
    >
      <article className="flex flex-col overflow-hidden rounded-sm">
        <div className="aspect-square overflow-hidden">
          <img
            src={category?.image ?? "/not-found.png"}
            alt={category.altText ?? category.title}
            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="p-4 md:p-6">
          <h3 className="text-sm font-semibold underline-offset-3 group-hover:underline sm:text-lg">
            {category.title}
          </h3>
        </div>
      </article>
    </Link>
  );
};
