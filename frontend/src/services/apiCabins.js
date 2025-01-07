export const getAllCabins = async () => {
  const res = await fetch("/api/cabins");
  if (!res.ok) {
    throw new Error("Failed to fetch cabins");
  }

  return res.json(); // Assuming the response is JSON
};

export const deleteCabin = async (id) => {
  const res = await fetch(`/api/cabins/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.error || "Failed to delete cabin");
  }

  return res.json();
};
