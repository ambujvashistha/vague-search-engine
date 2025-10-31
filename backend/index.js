import Exa from "exa-js";

const exa = new Exa("EXA_API_KEY");

async function searchWeb(query, numResults = 10) {
  try {
    const results = await exa.search({
      query,
      numResults,
      type: "auto",
    });
    return results;
  } catch (error) {
    console.error("Search error:", error);
    return { results: [] };
  }
}
