import sanityClient  from   "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "co3uch0c",
    dataset: 'production',
    apiVersion: '2022-10-19',
    useCdn:true,
    token:
    "skBzd6sU2IzgSjcf7boMcFVNDWWsZLLmZYvHxQwahtoIBzdKt0JzekZaCifL0V51DoQANMjlm39GhjPZbbMQdmovNVOPPQls3xXQMDX6UbxBKnf6wT8qDV4e52GifZCTAG4nXZU93P4xrdZCvXgf7eMxN9thY13pdgNuuO4Uw1mFecC6uq2V"

})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)
