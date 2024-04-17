const bgdiv = document.querySelector('#bgdiv');
async function loadEmUp() {
    const apikey = 'DEMO_KEY';
    const testParams = new URLSearchParams;
    testParams.append('api_key', apikey);
    // testParams.append('date', '2021-07-15');
    // testParams.append('start_date', '2021-07-15'); // default is none
    // testParams.append('end_date', '2021-07-15'); // default is today
    testParams.append('count', 1); // cannot be used with any date parameters
    // testParams.append('thumbs', false);
    const testFetch = await fetch(`https://api.nasa.gov/planetary/apod?${testParams.toString()}`);
    const data = await testFetch.json();
    console.log(data);
    bgdiv.style.backgroundImage = `url(${data[0].hdurl})`;
    // bgdiv.style.backgroundPosition = 'center center';
    // make background not tile
    // bgdiv.style.backgroundRepeat = 'no-repeat';
    // make background fill but keep aspect ratio
    // bgdiv.style.backgroundSize = 'cover';

    document.querySelector('h1').textContent = data[0].title;
    // fill the body element with red
    // document.body.style.backgroundColor = 'red';
}

document.addEventListener('DOMContentLoaded', loadEmUp);