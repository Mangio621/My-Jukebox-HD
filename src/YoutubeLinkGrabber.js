const ytScrape = (html, callback) => {
    const strVidIDEtc = html.split('"url":"/watch?v=')[1];
    const strVidID = strVidIDEtc.split('\\')[0];
    //callback(`https://www.youtube.com/watch?v=${strVidID}`);
    callback(strVidID);
}

export const GetYTVideoLink = (query, callback) => {
    query = query.replace(' ', '+');
    let url = `https://www.youtube.com/results?search_query=${query}`;
    fetch(url)
        .then(res => res.text())
        .then(data => ytScrape(data, (videoId) => {
            callback(videoId);
        }));
}