const KEY = 'AIzaSyDITvynOQM2W7tSnMw7FBC1y2rM1N_bnCE';

const youtube = async term => {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    const params = {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: term


    };
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url, {
        method: "get",
        headers: new Headers({

            "Content-Type": "application/json"
        })
    });

    const data = await response.json();
    console.log({data})
    return data.items;
};

export default youtube;