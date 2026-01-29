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
  return <CarouselReviews reviews={MOCK_REVIEWS} />;
};
