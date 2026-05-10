import { apiClient } from "@/lib/apiConfig";

export const optimizeRoute = async (payload: any) => {
  const response = await apiClient.post(
    "/route-request",
    payload
  );

  return response.data;
};