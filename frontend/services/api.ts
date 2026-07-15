export async function apiFetch(path: string){
  const res = await fetch(path)
  return res.json()
}
