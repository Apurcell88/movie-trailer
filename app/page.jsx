// import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="home--container">
      <div className="blah">
        <h1 className="home--title">Browse Thousands Of Movies</h1>
        <p className="home--description">Information includes what it is about, rating, release date and trailer.</p>
        <p className="home--description">Ready to Search? Go ahead and type below.</p>
      </div>
      <form className="home--search-form">
        <input
          type="text"
          id="search"
          placeholder="Search Movies..."
        />
        <button type="submit">Search</button>
      </form>
    </main>
  )
}
