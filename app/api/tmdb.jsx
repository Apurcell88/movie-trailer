// const TMBD_API_KEY = '51199ad127900c0adc25977cf075af18'
// const TMBD_API_KEY = process.env.API_KEY;

export async function getAllMovies() {
  
    // const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=51199ad127900c0adc25977cf075af18`);

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
}

// export default getAllMovies;