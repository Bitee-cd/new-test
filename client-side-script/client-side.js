let instrumentalists = [
    {
        profilepic: 'instrumentalist-1.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-2.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-3.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-4.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-5.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-6.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-7.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-8.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-9.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-10.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-11.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    },
    {
        profilepic: 'instrumentalist-12.jpg',
        chromecast: '30',
        downloads: '2k',
        likes: '2k',
        dislikes: '0',
        reviews: 150
    }
]

let infosection = document.getElementById('info-layout');
let html = "";

instrumentalists.forEach(e =>{
    html += `
        <div class="col-lg-3 col-md-6 mb-3 fs-6">
            <div class="img-card ">
                <img src="/images/${e.profilepic}" alt="Guitarist" width="200px" height="200px" class="img-card p-2 shadow-sm rounded">
            </div>
            <div class="d-flex align-items-center">
                <div class="pe-2">
                    <img src="/images/chromecast.png" alt="chromecast" width="15px" height="15px">
                    <span>${e.chromecast}</span>
                </div>
                <div class="pe-2">
                    <img src="/images/download.png" alt="chromecast" width="15px" height="15px">
                    <span>${e.downloads}</span>
                </div>
                <div class="pe-2">
                    <img src="/images/likes.png" alt="chromecast" width="15px" height="15px">
                    <span >${e.likes}</span>
                </div>
                <div>
                    <img src="/images/dislikes.png" alt="chromecast" width="15px" height="15px">
                    <span >${e.dislikes}</span>
                </div>
            </div>
            <div class="">
                <img src="/images/review-icon.png" alt="chromecast" width="50px">
                    <span>${e.reviews} Reviews</span>
            </div>
            <div class="">
                <p>Hi, I’m Michael.  A guitarist and a soloist with over 20 years of >>></p>
            </div>
        </div>
    `
    infosection.innerHTML = html
})