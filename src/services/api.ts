import axios from "axios";
import { Root } from "../models";
import { formatDateWithSlashes } from "../utils/dateUtils";

// Base URL for the Wikipedia API
const BASE_URL = "https://api.wikimedia.org/feed/v1/wikipedia";

// Function to fetch featured content from the Wikimedia API using URL only (no token)
export const fetchFeaturedContent = async (
  date: string,
  language: string
): Promise<Root> => {
  const formattedDate = formatDateWithSlashes(date); // Format date as YYYY/MM/DD
  
  const url = `${BASE_URL}${language}/featured/${formattedDate}`;

  try {
    const response = await axios.get<Root>(url);
    console.log(`Requesting: ${url}`);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching featured content:", error);
    throw new Error("Failed to fetch featured content");
  }
};
