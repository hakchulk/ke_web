async function getUser(id) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    if (!res.ok) {
      throw new Error("HTTP Error:" + res.status);
    }
    return await res.json();
  } catch (error) {
    console.log("getUser.catch(error):" + error);
  }
}
