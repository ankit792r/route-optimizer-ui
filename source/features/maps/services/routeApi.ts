import { apiClient } from "@/lib/apiConfig";

export const optimizeRoute = async (payload: any) => {
  const response = await apiClient.post(
    "http://localhost:8000/api/route-request",
    payload
  );

  return response.data;
};