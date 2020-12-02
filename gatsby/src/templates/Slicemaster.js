// I just copy/pasted Pizza.js to make this page
// changed every "pizza" reference to "slicemaster"
// altered the styled.div css and the graphql query a bit
// seems to work!

import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SlicemasterGrid = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  text-align: center;
  .gatsby-image-wrapper {
    margin: 0.3rem;
    height: 700px;
  }
  .description {
    margin-top: 4rem;
  }
`;

export default function SlicemasterPage({ data: { slicemaster } }) {
  return (
    <>
      <SEO
        title={`Slicemaster ${slicemaster.name}`}
        image={slicemaster.image.asset.src}
      />
      <SlicemasterGrid>
        <Img fluid={slicemaster.image.asset.fluid} />
        <div>
          <h2 className="mark">{slicemaster.name}</h2>
          <div className="description">{slicemaster.description}</div>
        </div>
      </SlicemasterGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in
// via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      slug {
        current
      }
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
