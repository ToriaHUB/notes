import axios from "axios"

export const addNote = async (title: string, description: string) => {
  const url = process.env.REACT_APP_DB_URL
  await axios.post(`${url}/notes.json`, {
    title: title,
    description: description,
    date: new Date().toString(),
  })
}

export const editNote = async (title: string, description: string, id: string | undefined) => {
  if (id) {
    const url = process.env.REACT_APP_DB_URL
    await axios.put(`${url}/notes/${id}.json`, {
      title: title,
      description: description,
      date: new Date().toString(),
    })
  } else {
    console.log("Note without id")
  }
}

export const fetchNote = async (id: string) => {
  const url = process.env.REACT_APP_DB_URL
  return await axios.get(`${url}/notes/${id}.json`)
}

export const removeNote = async (id: string) => {
  const url = process.env.REACT_APP_DB_URL
  await axios.delete(`${url}/notes/${id}.json`)
}

export const fetchNotes = async () => {
  const url = process.env.REACT_APP_DB_URL

  return await axios.get(`${url}/notes.json`)
}
