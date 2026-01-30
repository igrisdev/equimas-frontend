import { CarouselReviews } from "./carousel-reviews";

const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Carlos Méndez",
    company: "Restaurante La Brasa",
    rating: 5,
    text: "El asador industrial que compramos superó nuestras expectativas. La distribución del calor es perfecta para nuestros cortes.",
  },
  {
    id: 2,
    name: "Sofía Vergara",
    company: "Hogar y Jardín",
    rating: 5,
    text: "Mandé a diseñar un módulo de cocina exterior a medida y quedó espectacular. Los acabados en acero inoxidable son de primera.",
  },
  {
    id: 3,
    name: "Fernando Ruiz",
    company: "Pizzería Nápoles",
    rating: 5,
    text: "El horno de leña que instalaron ha mejorado muchísimo el sabor de nuestras pizzas. Muy recomendado.",
  },
  {
    id: 4,
    name: "Andrea López",
    company: "Cliente Particular",
    rating: 4,
    text: "Compré un barril asador pequeño para mi balcón. Funciona de maravilla y no genera casi humo.",
  },
  {
    id: 5,
    name: "Jorge Cárdenas",
    company: "Asados Don Jorge",
    rating: 5,
    text: "Las planchas para asar son muy resistentes. Llevamos 6 meses de uso diario y siguen como nuevas.",
  },
];

export const Reviews = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="mb-8 px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
          Aliados del Fuego
        </h2>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Clientes que confían en la calidad de EQUIMAS
        </p>
      </div>
      <CarouselReviews reviews={MOCK_REVIEWS} />
    </div>
  );
};
