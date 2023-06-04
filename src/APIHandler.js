export const fetchAPIData = (query, callback) => {
    const environment = process.env.NODE_ENV;
    let url = '';
    if(environment === 'production') {
        url = `https://api.deezer.com` + query;
    } else {
        url = '/api' + query;
    }
    let r = null;
    fetch(url)
    .then(res => {r = res; return res.json()})
    .then(data => callback(data, r));
}