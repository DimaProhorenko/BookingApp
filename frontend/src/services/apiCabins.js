export const getAllCabins = async () => {
  const res = await fetch("/api/cabins");
  if (!res.ok) {
    throw new Error("Failed to fetch cabins");
  }

  return res.json(); // Assuming the response is JSON
};

export const deleteCabin = async (id) => {
  console.log("Hello");
  const res = await fetch(`/api/cabins/${id}`, {
    method: "DELETE",
  });

  console.log(res);

  if (!res.ok) {
    throw new Error("Failed to delete cabin");
  }

  return res.json();
};
