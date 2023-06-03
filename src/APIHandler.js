export const fetchAPIData = (query, callback) => {
    const environment = process.env.NODE_ENV;
    let url = '';
    if(environment === 'production') {
        url = `https://api.deezer.com` + query;
    } else {
        url = '/api' + query;
    }

    fetch(url)
    .then(res => res.json())
    .then(data => callback(data));
}