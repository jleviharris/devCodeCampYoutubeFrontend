import axios from "axios";

export const SearchForVideos = async (query = "") => {
  const APIKEY = "AIzaSyAFCq9O6e9AbyAtZ-_9yxb_1F7qEptTaIg";
  let response = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${APIKEY}&fields=items(id,snippet(channelId,title))&part=snippet&type=video`
    )
    .catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response.data.items;
};
