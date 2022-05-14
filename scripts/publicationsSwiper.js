const publicationsArray = [
    {
        image: 'images/publications/publication_Peregreen–modular.png',
        titleString: 'Peregreen–modular database for efficient storage of historical tim…',
        subtitleString: 'Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…',
        description: 'The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…',
        link: 'https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:hMod-77fHWUC'
    },
    {
        image: 'images/publications/publication_Intelligent.png',
        titleString: 'Intelligent sightseeing in immensely manifold cities: Case …',
        subtitleString: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich',
        description: 'In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location\'s social media popularity and rating, distances of place from others in r…',
        link: 'https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:k_IJM867U9cC'
    },
    {
        image: 'images/publications/publication_User Profiles.png',
        titleString: 'User Profiles Matching for Different Social Networks Based …',
        subtitleString: 'Timur Sokhin, Nikolay Butakov,\n Denis Nasonov',
        description: 'It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…',
        link: 'https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:4JMBOYKVnBMC'
    },
    {
        image: 'images/publications/publication_Orienteering.png',
        titleString: 'Orienteering Problem with Functional Profits for multi-sourc…',
        subtitleString: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
        description: 'Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …',
        link: 'https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:RHpTSmoSYBkC'
    },
    {
        image: 'images/publications/publicaion_Intellectual.png',
        titleString: 'Intellectual Execution Scheme of Iterative Computational Models …',
        subtitleString: 'Mikhail Melnik, Denis A Nasonov,\n Alexey Liniov',
        description: 'In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also\nbecomes more complex. This leads more and more often to the need to use high-performance computational\n clusters, such as supercomputers. Created m…',
        link: 'https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:maZDTaKrznsC'
    },
    {
        image: 'images/publications/publication_Urban events.png',
        titleString: 'Urban events prediction via convolutional neural networks a…',
        subtitleString: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
        description: 'In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...',
        link: 'https://scholar.google.ru/citations?view_op=view_citation&hl=ru&user=r5WYVCIAAAAJ&sortby=pubdate&citation_for_view=r5WYVCIAAAAJ:TFP_iSt0sucC'
    }
];

const publicationsTemplate = document.querySelector('#publications-card-template')
      .content;
const publicationsContainer = document.querySelector('.publications__card-container');
const publicationsNavButtons = Array.from(document.querySelectorAll('.publications__button'));


const publicationsInfo = publicationsArray.map(function (item) {
    return {
        image: item.image,
        titleString: item.titleString,
        subtitleString: item.subtitleString,
        description: item.description,
        link: item.link
    };
  });
  
  function renderPublications() {
    publicationsInfo.forEach(renderCardPublication);
  }

  function renderCardPublication ({ image, titleString, subtitleString, description, link }) {
    const publicationElement = publicationsTemplate.querySelector('.publications__card')
          .cloneNode(true);
    publicationElement.querySelector('.publications__image').src = image;
    publicationElement.querySelector('.publications__article-title').textContent = titleString;
    publicationElement.querySelector('.publications__article-subtitle').textContent = subtitleString;
    publicationElement.querySelector('.publications__article-text').textContent = description;
    publicationElement.querySelector('.publications__link').href = link;

    publicationsContainer.prepend(publicationElement);
  }

  renderPublications();



  // const publicationsArticle = document.querySelector('.publications__article');
  // const publicationsImage = document.querySelector('.publications__image');
  // const publicationsButtonContainer = document.querySelector('.publications__btn-container');
  
  
  // publicationsArticle.addEventListener('mouseover', () => publicationsArticle.style.backgroundColor = 'red');
  
const publicationSwiper = new Swiper('.publications__swiper', {   
    centeredSlides: true,
    speed: 800,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideClass: 'publications__card',
    slideVisibleClass: 'publications__card_visible',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
  
    breakpoints: {
      710: {
        spaceBetween: 30,
        centeredSlides: false,
        watchOverflow: false,
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 33
      }
    },
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});