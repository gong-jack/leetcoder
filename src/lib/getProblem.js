async function graphql(query) {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "user-agent": "Mozilla/5.0 LeetCode API",
        origin: "https://leetcode.com",
        referer: "https://leetcode.com",
      },
      body: JSON.stringify(query),
    });

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function getProblem(problemTitle) {
  try {
    const { data } = await graphql({
      variables: {
        titleSlug: problemTitle.toLowerCase().replace(/\s/g, "-"),
      },
      query: `
        query ($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            questionId
            title
            titleSlug
            isPaidOnly
            difficulty
            topicTags {
              name
              slug
              translatedName
            }
            codeSnippets {
              lang
              langSlug
              code
            }
          }
        }
      `,
    });

    return data.question;
  } catch (error) {
    throw error;
  }
}
