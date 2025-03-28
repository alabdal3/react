import { useEffect, useState } from "react"

function Quote() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchQuote = () => {
    setLoading(true)
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content)
        setAuthor(data.author)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch quote", err)
        setQuote("Couldn't load a quote right now.")
        setAuthor("")
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div>
      <h2>"{quote}"</h2>
      {author && <p>Author: {author}</p>}
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Wait....." : "New Quote"}
      </button>
    </div>
  )
}

export default Quote