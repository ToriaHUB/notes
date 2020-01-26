import axios from "axios"

const url = process.env.REACT_APP_DB_URL

export const addNote = async (title: string, description: string) => {
  await axios.post(`${url}/notes.json`, {
    title: title,
    description: description,
    date: new Date().toString(),
  })
}

export const editNote = async (title: string, description: string, id: string | undefined) => {
  if (id) {
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
  return await axios.get(`${url}/notes/${id}.json`)
}

export const removeNote = async (id: string) => {
  await axios.delete(`${url}/notes/${id}.json`)
}

export const fetchNotes = async () => {
  return await axios.get(`${url}/notes.json`)
}
