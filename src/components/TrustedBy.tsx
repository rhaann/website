import React from 'react';

const TrustedBy: React.FC = () => {
  const logos: { src: string; alt: string; invert?: boolean }[] = [
    { src: '/mcdonalds.png', alt: "McDonald's" },
    { src: '/asurion.png', alt: 'Asurion' },
    { src: '/unilever.png', alt: 'Unilever' },
    { src: '/makerWine.png', alt: "Maker Wine" },
    { src: '/compassEast.png', alt: 'Compass East' },
    { src: '/venturous.png', alt: "Venturous" },
    { src: '/walkerBrothers.avif', alt: "Walker Brothers" },
    { src: '/foresight.png', alt: "Foresight", invert: true },
  ];

  return (
    <section id="trusted-by" className="relative z-30 -mt-20 sm:-mt-24 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-pure-white">
      {/* Wave top edge */}
      <svg
        className="absolute top-0 left-0 w-full -translate-y-[calc(100%-1px)]"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1440V18C1440 18 1320 0 1080 6C840 12 720 30 480 27C240 24 120 9 0 15V48Z"
          fill="white"
        />
      </svg>
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-navy-black/35 text-xs font-medium tracking-[0.2em] uppercase">
            Trusted By
          </span>
        </div>

        <div className="marquee">
          <div className="marquee-track gap-6 sm:gap-8 md:gap-10">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                className="h-10 w-28 sm:h-12 sm:w-32 md:h-14 md:w-36 lg:h-16 lg:w-40 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-full max-w-full object-contain${logo.invert ? ' invert' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;


