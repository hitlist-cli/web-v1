import Head from "next/head";

const Meta = ({ title, keywords, desc }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#121212" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hitlist.dev/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/images/preview.jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hitlist.dev/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="/images/preview.jpeg" />

      <meta property="og:site_name" content="Hit-List CLI" />
      <meta property="og:site" content="https://hitlist.dev/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="" />
      <meta property="og:url" content="/images/preview.jpeg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Hit-List CLI",
  keywords:
    "commands, hit, list, hitlist, cli, command line, ayodeji, osasona, developer, tool, tools, dev, ternimal, line",
  desc: "Your personal online commands manager! - Take your commands with you 😎",
};

export default Meta;
