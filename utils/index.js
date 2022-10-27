import axios from "axios";

export async function subgraphQuery(query) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/munj1/testgraph";
    const response = await axios.post(SUBGRAPH_URL, { query });
    if (response.data.errors) {
      console.log(response.data.errors);
      throw new Error("Failed to fetch data from subgraph");
    }
    return response.data.data;
  } catch (e) {
    console.error(e);
    throw new Error(`Error fetching subgraph data: ${e.message}`);
  }
}
