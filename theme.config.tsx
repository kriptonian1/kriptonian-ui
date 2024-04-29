/* eslint-disable @typescript-eslint/restrict-template-expressions -- for nextra config */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- for nextra config */
/* eslint-disable react/no-unknown-property -- for nextra config */
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <svg width="150" viewBox="0 0 1994 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m188.64 399.713-48.435-27.082.021-.035 84.551-137.395 39.329 22.024-75.466 142.488ZM80.18 62.195l77.048 141.96-38.276 22.546L32.403 90.546l47.776-28.35Zm55.913 80.583L211.031.29l47.912 27.601-.026.042-84.548 137.391-38.276-22.546Zm231.703 165.618-48.44 28.432h-.349l-77.62-140.984 38.806-23.074 87.603 135.626ZM21.209 234.607l160.962 4.75 1.049 44.57-162.01 6.86v-56.18Zm195.767-118.534 162.018-6.86.525 55.657h-.318l-162.225-3.699v-45.098Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width=".418"
    />
    <path
      d="M517.165 103.023V290H481.85V103.023h35.315Zm112.237 0L554.406 194.2l-42.891 45.845-6.293-34.287 29.793-38.654 51.11-64.081h43.277ZM590.106 290l-58.173-87.581 25.298-22.858L632.099 290h-41.993Zm89.765-110.568V290h-33.903V151.052h32.105l1.798 28.38Zm42.249-29.279-.514 31.591c-1.883-.343-4.023-.6-6.42-.771a89.026 89.026 0 0 0-6.55-.257c-5.222 0-9.802.728-13.74 2.183-3.939 1.37-7.235 3.382-9.889 6.036-2.568 2.654-4.537 5.907-5.907 9.76-1.37 3.767-2.14 8.047-2.311 12.842l-7.32-.899c0-8.818.899-16.994 2.697-24.528 1.797-7.534 4.409-14.126 7.833-19.777 3.425-5.65 7.705-10.016 12.842-13.098 5.222-3.168 11.215-4.752 17.978-4.752 1.884 0 3.896.172 6.036.514 2.226.257 3.981.642 5.265 1.156Zm54.578.899V290h-34.031V151.052h34.031Zm-36.343-36.343c0-5.051 1.713-9.246 5.137-12.584 3.51-3.34 8.219-5.009 14.126-5.009s10.573 1.67 13.998 5.009c3.51 3.338 5.265 7.533 5.265 12.584 0 4.966-1.755 9.118-5.265 12.457-3.425 3.339-8.091 5.008-13.998 5.008s-10.616-1.669-14.126-5.008c-3.424-3.339-5.137-7.491-5.137-12.457Zm102.606 63.054v165.659h-34.03v-192.37h31.462l2.568 26.711Zm89.251 41.35v2.697c0 10.102-1.199 19.477-3.596 28.124-2.311 8.561-5.736 16.052-10.273 22.473-4.538 6.335-10.188 11.301-16.951 14.896-6.678 3.51-14.383 5.265-23.116 5.265-8.561 0-16.009-1.626-22.344-4.88-6.336-3.338-11.686-8.047-16.053-14.126-4.366-6.078-7.876-13.141-10.53-21.188-2.568-8.134-4.495-16.994-5.779-26.583v-8.604c1.284-10.188 3.211-19.434 5.779-27.738 2.654-8.39 6.164-15.624 10.53-21.703 4.367-6.164 9.675-10.915 15.924-14.254 6.336-3.339 13.741-5.009 22.217-5.009 8.818 0 16.565 1.67 23.243 5.009 6.764 3.339 12.457 8.133 17.08 14.383 4.623 6.249 8.09 13.697 10.402 22.344 2.311 8.647 3.467 18.278 3.467 28.894Zm-34.031 2.697v-2.697c0-6.164-.556-11.857-1.669-17.079-1.113-5.308-2.825-9.931-5.137-13.869-2.312-4.024-5.308-7.149-8.989-9.375-3.682-2.226-8.133-3.339-13.356-3.339-5.222 0-9.717.856-13.484 2.569-3.767 1.712-6.849 4.152-9.246 7.319-2.397 3.168-4.28 6.935-5.65 11.301-1.284 4.281-2.14 9.032-2.568 14.255v21.317c.77 6.335 2.268 12.028 4.494 17.08 2.226 5.051 5.479 9.074 9.76 12.071 4.366 2.996 10.017 4.494 16.951 4.494 5.222 0 9.674-1.155 13.356-3.467 3.681-2.311 6.677-5.479 8.989-9.503 2.311-4.109 3.981-8.818 5.008-14.126 1.027-5.308 1.541-10.958 1.541-16.951Zm124.569-70.758v24.399h-79.623v-24.399h79.623Zm-58.305-34.159h34.031v133.041c0 4.109.556 7.277 1.674 9.503 1.11 2.225 2.78 3.724 5 4.494 2.23.771 4.88 1.156 7.97 1.156 2.22 0 4.28-.129 6.16-.385 1.88-.257 3.47-.514 4.75-.771l.13 25.427c-2.83.942-6.04 1.712-9.63 2.311-3.51.6-7.49.899-11.95.899-7.615 0-14.292-1.284-20.028-3.852-5.736-2.654-10.188-6.892-13.356-12.714-3.167-5.907-4.751-13.697-4.751-23.372V116.893Zm71.525 105.045v-2.696c0-10.188 1.46-19.563 4.37-28.124 2.91-8.647 7.15-16.138 12.71-22.473 5.57-6.335 12.37-11.258 20.42-14.768 8.05-3.596 17.21-5.394 27.48-5.394 10.45 0 19.69 1.798 27.74 5.394 8.13 3.51 14.98 8.433 20.55 14.768 5.56 6.335 9.8 13.826 12.71 22.473 2.91 8.561 4.37 17.936 4.37 28.124v2.696c0 10.103-1.46 19.477-4.37 28.124-2.91 8.561-7.15 16.052-12.71 22.473-5.57 6.335-12.37 11.258-20.42 14.768-8.05 3.51-17.25 5.265-27.61 5.265-10.27 0-19.48-1.755-27.61-5.265-8.13-3.51-14.98-8.433-20.55-14.768-5.56-6.421-9.8-13.912-12.71-22.473-2.91-8.647-4.37-18.021-4.37-28.124Zm33.91-2.696v2.696c0 6.079.6 11.772 1.79 17.08 1.2 5.308 3.04 9.974 5.53 13.998 2.48 4.023 5.69 7.191 9.63 9.503 4.02 2.225 8.82 3.338 14.38 3.338 5.48 0 10.19-1.113 14.13-3.338 3.93-2.312 7.14-5.48 9.63-9.503 2.57-4.024 4.45-8.69 5.65-13.998 1.2-5.308 1.8-11.001 1.8-17.08v-2.696c0-5.993-.6-11.601-1.8-16.823-1.2-5.308-3.08-9.974-5.65-13.998-2.49-4.109-5.74-7.319-9.76-9.631-3.94-2.397-8.69-3.596-14.26-3.596-5.48 0-10.18 1.199-14.12 3.596-3.94 2.312-7.15 5.522-9.63 9.631-2.49 4.024-4.33 8.69-5.53 13.998-1.19 5.222-1.79 10.83-1.79 16.823Zm154.35-38.526V290h-33.9V151.052h31.85l2.05 29.664Zm-5.39 34.802h-10.02c.09-10.103 1.46-19.263 4.11-27.482 2.66-8.219 6.38-15.282 11.18-21.189 4.88-5.907 10.65-10.444 17.33-13.612 6.68-3.168 14.13-4.752 22.35-4.752 6.67 0 12.71.942 18.1 2.826 5.4 1.883 10.02 4.879 13.87 8.989 3.94 4.109 6.94 9.503 8.99 16.181 2.14 6.592 3.21 14.725 3.21 24.399V290h-34.16v-89.379c0-6.335-.94-11.343-2.82-15.025-1.8-3.681-4.45-6.292-7.96-7.833-3.43-1.541-7.67-2.312-12.72-2.312-5.22 0-9.8 1.07-13.74 3.211-3.85 2.054-7.1 4.922-9.76 8.604-2.57 3.681-4.53 7.919-5.9 12.713s-2.06 9.974-2.06 15.539Zm155-64.466V290h-34.03V151.052h34.03Zm-36.34-36.343c0-5.051 1.71-9.246 5.14-12.584 3.51-3.34 8.21-5.009 14.12-5.009 5.91 0 10.57 1.67 14 5.009 3.51 3.338 5.26 7.533 5.26 12.584 0 4.966-1.75 9.118-5.26 12.457-3.43 3.339-8.09 5.008-14 5.008s-10.61-1.669-14.12-5.008c-3.43-3.339-5.14-7.491-5.14-12.457Zm145.24 145.755v-64.081c0-4.708-.81-8.775-2.44-12.199-1.63-3.425-4.11-6.079-7.45-7.962-3.34-1.884-7.58-2.826-12.71-2.826-4.54 0-8.52.771-11.94 2.312-3.34 1.541-5.91 3.724-7.71 6.549-1.8 2.74-2.7 5.908-2.7 9.503h-34.03c0-5.736 1.37-11.172 4.11-16.309 2.74-5.222 6.64-9.845 11.69-13.869 5.13-4.109 11.26-7.32 18.36-9.631 7.19-2.312 15.24-3.468 24.14-3.468 10.53 0 19.91 1.798 28.13 5.394 8.3 3.51 14.81 8.818 19.52 15.924 4.79 7.106 7.19 16.052 7.19 26.839v60.613c0 6.935.43 12.885 1.28 17.851.94 4.879 2.31 9.117 4.11 12.713V290h-34.54c-1.63-3.51-2.87-7.962-3.73-13.355-.85-5.48-1.28-10.873-1.28-16.181Zm4.75-55.091.26 20.161h-21.45c-5.31 0-9.97.557-14 1.67-4.02 1.027-7.32 2.568-9.88 4.623-2.57 1.969-4.5 4.366-5.78 7.191-1.29 2.74-1.93 5.864-1.93 9.375 0 3.424.77 6.506 2.31 9.246 1.63 2.739 3.94 4.922 6.94 6.549 3.08 1.541 6.68 2.312 10.78 2.312 6 0 11.22-1.199 15.67-3.596 4.45-2.483 7.92-5.479 10.4-8.989 2.49-3.511 3.81-6.849 3.98-10.017l9.76 14.64c-1.19 3.51-2.99 7.234-5.39 11.172-2.4 3.938-5.48 7.619-9.25 11.044-3.76 3.424-8.3 6.25-13.61 8.475-5.31 2.226-11.47 3.339-18.49 3.339-8.99 0-17.04-1.797-24.14-5.393-7.11-3.596-12.72-8.519-16.83-14.768-4.1-6.25-6.16-13.356-6.16-21.318 0-7.362 1.37-13.869 4.11-19.519 2.74-5.651 6.81-10.402 12.2-14.255 5.39-3.938 12.07-6.891 20.03-8.86 8.05-2.055 17.25-3.082 27.61-3.082h22.86Zm93.23-24.657V290h-33.9V151.052h31.85l2.05 29.664Zm-5.39 34.802h-10.02c.09-10.103 1.46-19.263 4.11-27.482 2.66-8.219 6.38-15.282 11.17-21.189 4.88-5.907 10.66-10.444 17.34-13.612 6.68-3.168 14.13-4.752 22.35-4.752 6.67 0 12.71.942 18.1 2.826 5.4 1.883 10.02 4.879 13.87 8.989 3.94 4.109 6.94 9.503 8.99 16.181 2.14 6.592 3.21 14.725 3.21 24.399V290h-34.16v-89.379c0-6.335-.94-11.343-2.82-15.025-1.8-3.681-4.46-6.292-7.97-7.833-3.42-1.541-7.66-2.312-12.71-2.312-5.22 0-9.8 1.07-13.74 3.211-3.85 2.054-7.11 4.922-9.76 8.604-2.57 3.681-4.54 7.919-5.91 12.713s-2.05 9.974-2.05 15.539Zm291.12-112.495h35.32v124.181c0 14.297-3.08 26.325-9.25 36.085-6.16 9.674-14.55 16.994-25.17 21.96-10.61 4.879-22.69 7.319-36.21 7.319-13.7 0-25.9-2.44-36.6-7.319-10.7-4.966-19.09-12.286-25.17-21.96-6.08-9.76-9.12-21.788-9.12-36.085V103.023h35.32v124.181c0 8.732 1.45 15.881 4.36 21.445 2.91 5.48 7.02 9.546 12.33 12.2 5.31 2.654 11.6 3.981 18.88 3.981 7.36 0 13.65-1.327 18.88-3.981 5.3-2.654 9.37-6.72 12.19-12.2 2.83-5.564 4.24-12.713 4.24-21.445V103.023Zm106.46 0V290h-35.31V103.023h35.31Z"
      fill="currentColor"
    />
    /
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/kriptonian1/kriptonian-ui",
  },
  docsRepositoryBase: "https://github.com/kriptonian1/kriptonian-ui",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Krinonian UI",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();

    const socialCard = "https://ui.kriptonian.xyz/og.jpg"

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="ui.kriptonian.xyz" />
        <meta name="twitter:url" content="https://ui.kriptonian.xyz/" />
        <meta
          name="og:title"
          content={title ? `${title} – Kriptonian UI` : "Kriptonian UI"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Kriptonian UI" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        /> */}
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  chat: {
    link: "https://twitter.com/kriptonian8",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 300 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 p-px"
      >
        <path
          // stroke="currentColor"
          fill="currentColor"
          d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
        />
      </svg>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    component: function FooterComp() {
      return <div />;
    },
  },
  toc: {
    backToTop: true,
  },
};

export default config;
