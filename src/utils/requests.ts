import { Response } from "@/types";
import request, { gql } from "graphql-request";

const ENDPOINT = "https://graphqlzero.almansi.me/api";

export async function getAllPosts() {
  const query = gql`
  query () {
    posts() {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
  `;

  const response = await request<Response>(ENDPOINT, query);

  return response.posts.data;
}
