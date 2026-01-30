export const getBestProductPosterQuery = /* GraphQL */ `
  query getBestProductPoster {
    metaobjects(type: "equimas_prueba_best_product", reverse: true, first: 1) {
      edges {
        node {
          id
          handle
          fields {
            key
            value
            reference {
              ... on Product {
                handle
                title
                tags
                images(first: 10) {
                  edges {
                    node {
                      url
                      altText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
