export const checkResponse = res => {
  if (res.ok) {
    return {
      res: res.json(),
      headerTotalCount: res.headers.get('X-Total-Count'),
    }
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
