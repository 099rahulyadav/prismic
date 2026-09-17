import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export const repositoryName = "demo-page";

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};