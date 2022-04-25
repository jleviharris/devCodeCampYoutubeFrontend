import axios from "axios";

export const RelatedVideos = async (query) => {
  const APIKEY = "AIzaSyCtX3zDth6rZdOmGUDYvkztZgumCT1zkgQ";
  let response = await axios
    .get(
       `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${query}&type=video&key=${APIKEY}&fields=items(id,snippet(channelId,title,description))&part=snippet&type=video`
      )
    .catch((err) => err);
  if (response instanceof Error) {
    return response;
  }
  return response.data.items;
};