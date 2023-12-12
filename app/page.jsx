// import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="home--container">
      <div className="blah">
        <h1 className="home--title">Browse Thousands Of Movie Trailers</h1>
        <p className="home--description">Information also includes what it is   about, rating and release date.</p>
        <p className="home--description">Ready to Search? Go ahead and type below.</p>
      </div>
      <form className="home--search-form">
        <input type="text" id="search" />
        <button type="submit">Search</button>
      </form>
    </main>
  )
}
