export default async function GetAllPost() {
  const url =
    " https://newsapi.org/v2/everything?q=bitcoin&apiKey=150c432dd7f74f579722ea083695aede";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
}
