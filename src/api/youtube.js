import axios from 'axios';

const KEY = 'AIzaSyDa0ay6tnzlQCPF785fZeQqtBlIY7TygvM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})