import { Fragment } from "react";
import { IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";

const MarqueeGroup = ({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 px-10"
    >
      {items.map((text, i) => (
        <Fragment key={i}>
          <p className="text-xs font-light whitespace-nowrap uppercase">
            {text}
          </p>

          <div className="size-[7px] rounded-full bg-white"></div>
        </Fragment>
      ))}
    </div>
  );
};

export const AnnouncementBar = () => {
  const announcements = [
    "Envíos a todo Colombia 🇨🇴",
    "Pago contra entrega 💵",
    "Créditos con Brisa y Banco de Bogotá 🏦",
  ];

  return (
    <section className="max-w-8xl relative z-30 mx-auto flex w-full bg-black px-4 py-4 text-white md:z-50 md:px-8">
      <div className="hidden gap-x-4 lg:flex">
        <IconBrandWhatsapp stroke={2} />
        <IconBrandFacebook stroke={2} />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-1 overflow-hidden">
        <MarqueeGroup items={announcements} />
        <MarqueeGroup items={announcements} ariaHidden={true} />
      </div>

      <div className="hidden lg:block"></div>
    </section>
  );
};
