export default async function getNewPost() {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=150c432dd7f74f579722ea083695aede";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Cannot Find Post");
  }
  return response.json();
}
