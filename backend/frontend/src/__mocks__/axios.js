'use strict';

module.exports = {
  getCurrentUser: () => {
    return Promise.resolve({
      data: {
        createdAt: "2023-09-07T03:49:45.893Z",
        email: "eddie@aviles.com",
        firstName: "eddie",
        isAdmin: false,
        lastName: "aviles",
        username: "eddie",
      }
    })
  },
  getRecents: () => {
    return Promise.resolve({
      data: [
        {
          uuid: 'f163aa79-07a0-4673-8752-902323cd2685',
          title: 'Simone Biles Shows She’s Not Just Easing Her Way Back',
          description: 'In just her second elite meet following a two-year hiatus, Biles, 26, won a record eighth U.S. all-around title and became the oldest gymnast to win the champio...',
          keywords: '',
          snippet: 'That perhaps could partially be chalked up to her attitude: “It’s just gymnastics,” she has told her younger teammates. Keeping with her relaxed demeanor,...',
          url: 'https://www.nytimes.com/2023/08/27/sports/simone-biles-gymnastics-championships.html',
          image_url: 'https://static01.nyt.com/images/2023/08/27/multimedia/27gym-biles-top-cbjv/27gym-biles-top-cbjv-facebookJumbo.jpg',
          language: 'en',
          published_at: '2023-01-28T02:57:13.000000Z',
          visited_at: '2023-01-28T02:57:13.000000Z',
          source: 'nytimes.com',
          locale: 'us'
        },
        {
          uuid: 'bce0958b-d645-417c-8a81-c571719af8a6',
          title: 'Simone Biles wins a record 8th U.S. gymnastics title a full decade after her first',
          description: 'Biles became the oldest woman to win a national title since USA Gymnastics began organizing the event in 1963. Her eight crowns moved her past Alfred Jochim, wh...',
          keywords: '',
          snippet: 'Simone Biles wins a record 8th U.S. gymnastics title a full decade after her first\n' +
            '\n' +
            'Enlarge this image toggle caption Godofredo A. Vásquez/AP Godofredo A. Vás...',
          url: 'https://www.npr.org/2023/08/27/1196274503/simone-biles-wins-a-record-8th-u-s-gymnastics-title-a-full-decade-after-her-firs',
          image_url: 'https://media.npr.org/assets/img/2023/08/27/ap23239779365476_wide-91818d99986b4dc474aa1ff648773af3110113b0-s1400-c100.jpg',
          language: 'en',
          published_at: '2023-01-28T02:51:07.000000Z',
          visited_at: '2023-01-28T02:51:07.000000Z',
          source: 'npr.org',
          locale: 'us'
        },
        {
          uuid: '57f3339d-71e5-4a21-b9ed-6e4a31260f57',
          title: 'Ron DeSantis booed at vigil as hundreds mourn victims of racially-motivated Jacksonville shooting',
          description: 'Hundreds of people gathered Sunday at prayer vigils and in church to mourn the three people killed in a racially-motivated shooting at a Dollar General in Jacks...',
          keywords: 'News, florida, jacksonville, mass shootings, racism, Ron DeSantis, shootings',
          snippet: 'JACKSONVILLE, Fla. — Hundreds of people gathered Sunday at prayer vigils and in church, in frustration and exhaustion, to mourn yet another racist attack in A...',
          url: 'https://nypost.com/2023/08/27/ron-desantis-booed-at-vigil-for-victims-of-racially-motivated-jacksonville-shooting/',
          image_url: 'https://nypost.com/wp-content/uploads/sites/2/2023/08/newspress-collage-l3r85vx4q-1693187699533.jpg?quality=75&strip=all&1693173461&w=1024',
          language: 'en',
          published_at: '2023-01-28T02:44:05.000000Z',
          visited_at: '2023-01-28T02:44:05.000000Z',
          source: 'nypost.com',
          locale: 'us'
        }
      ]
    })
  }
}