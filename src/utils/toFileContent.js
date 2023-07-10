const LINE_BREAK = "\n";

function toFileContent(text, url) {
  const problemLinkComment = `/**
 * leetcode problem link: ${url}
 */

`;

  return problemLinkComment + text + LINE_BREAK;
}
