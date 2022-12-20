export const remove = (url) => {
  return fetch(url, {
    method: 'DELETE',
  }).then((response) => response.json())
}

export default remove
