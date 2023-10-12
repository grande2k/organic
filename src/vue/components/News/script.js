'use strict';

export default{
    name: 'News',
    props: {
        count: Number,
    },
    data() {
        return {
            news: [
                {
                    id: 1,
                    title: 'The Benefits of Vitamin D & How to Get It',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    autor: 'Rachi Card',
                    date: '25 Nov',
                    fullDate: '2023-11-25 14:00',
                    img: '1',
                },
                {
                    id: 2,
                    title: 'Our Favorite Summertime Tomato',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    autor: 'Robert Moore',
                    date: '29 Nov',
                    fullDate: '2023-11-29 21:00',
                    img: '2',
                },
                {
                    id: 3,
                    title: 'Benefits of Vitamin C & How to Get It',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    autor: 'Riana Croxford',
                    date: '30 Nov',
                    fullDate: '2023-11-30 16:00',
                    img: '3',
                },
                {
                    id: 4,
                    title: 'Research More Organic Foods',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    autor: 'Christiane Amanpour',
                    date: '1 Dec',
                    fullDate: '2023-12-01 16:00',
                    img: '4',
                },
                {
                    id: 5,
                    title: 'Everyday Fresh Fruites',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    autor: 'Jeremy Clarkson',
                    date: '31 Dec',
                    fullDate: '2023-12-31 14:30',
                    img: '5',
                },
                {
                    id: 6,
                    title: 'Don’t Use Plastic Product! it’s Kill Nature',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    autor: 'Piers Morgan',
                    date: '1 Jan',
                    fullDate: '2023-01-01 15:00',
                    img: '6',
                },
            ]
        }
    },
    computed: {
        filteredNews() {
            return this.news.slice(0, this.count);
        }
    }
}