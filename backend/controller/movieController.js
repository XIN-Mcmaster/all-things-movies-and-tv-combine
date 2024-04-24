const axios = require('axios');
const apiKey = process.env.OMDB_API_KEY;

const getMovies=async (req, res) => { 
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=Ted&page=2`);
        res.status(200).json({
            result:response.data.totalResults,
            data:response.data.Search
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching movie data' });
    }
};

const getPoster=async (req, res) => { 
    const id = req?.query?.id;
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
        res.status(200).json({
            data:response.data
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching movie data' });
    }
};

const search= async (req, res) => {
    const year= req?.body?.year
    const keyword= req?.body?.keyword
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&y=${year}`);
        res.status(200).json({
            data:response.data.Search
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching movie data' });
    }
};




module.exports={getMovies,getPoster,search}