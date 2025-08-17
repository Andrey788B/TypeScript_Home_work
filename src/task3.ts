const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface CommentDTO {
  id: number;
  email: string;
}

async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

getData<CommentDTO[]>(COMMENTS_URL)
  .then(data => {
    data.forEach(({ id, email }) => {
      console.log(`ID: ${id}, Email: ${email}`);
    });
  })
  .catch(err => console.error(err));