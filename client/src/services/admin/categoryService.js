import apiClient, { API_BASE_PATH } from "@/utils/apiClient";

export const createCategory = async (categoryForm) => {
  const formData = new FormData();

  formData.append("title", categoryForm.name);
  formData.append("description", categoryForm.description);
  formData.append("image", categoryForm.image);

  // keywords: backend expects Set<String>
  // send as repeated fields OR comma-separated (Spring handles both)
  if (categoryForm.keywords) {
    categoryForm.keywords
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean)
      .forEach((keyword) => {
        formData.append("keywords", keyword);
      });
  }

  try {
    const response = await apiClient.post(
      `${API_BASE_PATH}/category`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  } catch (error) {
    if (error.response?.data) {
      return error.response.data;
    }

    return {
      success: false,
      message: "Server error. Please try again.",
    };
  }
};

/**
 * Fetch categories
 *
 * Usage:
 *  - getCategories() → all categories (List)
 *  - getCategories({ categoryName: "Programming" }) → single category
 *  - getCategories({ keyword: "java" }) → list of categories
 */
export const fetchCategories = async (params = {}) => {
  const response = await apiClient.get(API_BASE_PATH + "/category", {
    params: {
      categoryName: params.categoryName,
      keyword: params.keyword,
    },
  });

  return response.data;
};

export const fetchCategoriesNormalized = async (params = {}) => {
  const data = await fetchCategories(params);
  return Array.isArray(data) ? data : [data];
};
