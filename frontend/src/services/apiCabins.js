export const getAllCabins = async () => {
  const res = await fetch("/api/cabins");
  if (!res.ok) {
    throw new Error("Failed to fetch cabins");
  }

  return res.json();
};

export const createCabin = async (cabinData) => {
  const res = await fetch("/api/cabins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cabinData),
  });

  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.error || "Failed to create a cabin");
  }

  return res.json();
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
