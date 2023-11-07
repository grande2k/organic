'use strict';

import ArrowButton from '../../UI/ArrowButton/ArrowButton.vue'

export default{
    name: 'Team',
    components: {
        ArrowButton,
    },
    props: {
        preview: Number,
    },
    data() {
        return {
            team: [
                {
                    id: 1,
                    name: 'Giovani Bacardo',
                    job: 'Director',
                    photo: 'giovani-bacardo',
                    socialMedia: [
                        {
                            id: 1,
                            icon: ['fab', 'facebook'],
                            link: 'https://facebook.com',
                        },
                        {
                            id: 2,
                            icon: ['fab', 'twitter'],
                            link: 'https://twitter.com',
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Marianne Loreno',
                    job: 'Designer',
                    photo: 'marianne-loreno',
                    socialMedia: [
                        {
                            id: 1,
                            icon: ['fab', 'instagram'],
                            link: 'https://instagram.com',
                        },
                        {
                            id: 2,
                            icon: ['fab', 'facebook'],
                            link: 'https://facebook.com',
                        },
                        {
                            id: 3,
                            icon: ['fab', 'twitter'],
                            link: 'https://twitter.com',
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Riga Pelore',
                    job: 'Manager',
                    photo: 'riga-pelore',
                    socialMedia: [
                        {
                            id: 1,
                            icon: ['fab', 'instagram'],
                            link: 'https://instagram.com',
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Keira Knightley',
                    job: 'Reporter',
                    photo: 'keira-knightley',
                    socialMedia: [
                        {
                            id: 1,
                            icon: ['fab', 'instagram'],
                            link: 'https://instagram.com/frankorreo',
                        },  
                        {
                            id: 3,
                            icon: ['fab', 'twitter'],
                            link: 'https://twitter.com',
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Scott Lawrence',
                    job: 'Farmer',
                    photo: 'scott-lawrence',
                },
                {
                    id: 6,
                    name: 'Karen Allen',
                    job: 'photographer',
                    photo: 'karen-allen',
                    socialMedia: [
                        {
                            id: 1,
                            icon: ['fab', 'instagram'],
                            link: 'https://instagram.com',
                        },
                        {
                            id: 2,
                            icon: ['fab', 'facebook'],
                            link: 'https://facebook.com',
                        },
                        {
                            id: 3,
                            icon: ['fab', 'twitter'],
                            link: 'https://twitter.com',
                        },
                    ]
                },
            ]
        }
    },
    computed: {
        countedTeam() {
            return this.team.slice(0, this.preview);
        }
    }
}