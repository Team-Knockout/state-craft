

//text array should have 5 elements

let results = [

    { 
        label: 'Personal Freedom',
        key: 'personalFreedom',
        text: [
            'you have basically no personal freedom',
            'you have a bit of personal freedom',
            'you are doing okay in terms of personal freedom',
            'you have lots of personal freedom',
            'YOU HAVE TOO MUCH PERSONAL FREEDOM'
        ]
    },
    { label: 'Economic Freedom',
        key: 'economicFreedom',
        text: [
            'you have basically no Economic Freedom',
            'you have a bit of Economic Freedom',
            'you are doing okay in terms of Economic Freedom',
            'you have lots of Economic Freedom',
            'YOU HAVE TOO MUCH Economic Freedom'
        ]
    },
    { label: 'Political Freedom',
        key: 'politicalFreedom',
        text: [
            'you have basically no Political Freedom',
            'you have a bit of Political Freedom',
            'you are doing okay in terms of Political Freedom',
            'you have lots of Political Freedom',
            'YOU HAVE TOO MUCH Political Freedom'
        ]
    },
    {
        label: 'Approval',
        key: 'approval',
        text: [
            'you have basically no Approval',
            'you have a bit of Approval',
            'you are doing okay in terms of Approval',
            'you have lots of Approval',
            'YOU HAVE TOO MUCH Approval'
        ]
    },
    {
        label:'Population',
        key: 'population',
        text: [
            'The hypothetical dream of every middle school boy\'s has finally been realized: they must find a girl and repopulate the Earth (or at least your nation). Unforunately, all the dead bodies are hard to sort through, making it a lot less romantic than they anticipated.',
            'The birth rate in your nation has been dropping precipitously of late. Your industries have an aging, but productive workforce — for now.',
            'People hold the ideal of 2 kids and a dog sacred. The population is very stable, almost too stable. Movies about heroic soccer moms are incredibly popular.',
            'The population of your nation is a growing concern, literally. You recall a book you read back in college by Thomas Malthus. A bead of sweat drips down your forehead. You wip it off and go home to your family of 15.',
            'The hottest startup business in your nation is a home delivery service for diapers. Many households have stay at home moms and stay at home dads. Fertility gods and goddesses are some of the most common mascots for high school sports teams.',
        ]
    },
    {
        label:'Economic Production',
        key: 'econProduction',
        text: [
            'you have basically no Economic Production',
            'you have a bit of Economic Production',
            'you are doing okay in terms of Economic Production',
            'you have lots of Economic Production',
            'YOU HAVE TOO MUCH Economic Production'
        ]
    },
    {
        label:'Health',
        key:'health',
        text: [
            'You should\'ve kept to Michelle Obama\'s school lunch program. Now fat people roam your streets, cannibalizing each other and causing pot holes due to all of the stress on the roads.',
            'Rub some dirt on it. That\'s literally what my oncologist told me when I went in to have a malignant tumor removed.',
            'You don\'t have universal healthcare or anything, but people generally have what they need.',
            'Healthiness is happiness, so your citizens say. Culinary and fitness videos consistently top the charts of your nation\'s video streaming services.',
            'Women in your nation are world famous for their incredible beauty. Men are sought after by tourists who flock to your beaches, to get a glimpse of peak physical specimens. Nobody really works, but tourism dollars flow in by the ton.'
        ]
    },
    {
        label:'Safety',
        key: 'safety',
        text: [
            'There is a growing problem of people going missing, partly due the human trafficking gangs that have successfully infiltrated the police forces and control the nation from within.',
            'The most popular pastimes for your citizens involve high speed and little protection. Thankfully they\'re tough, because you run the rest of your nation like the Wild West too.',
            'You have a law that requires seatbelts, but you also require that people drive long distances everyday because you haven\'t invested in public transportation. The irony is thick.',
            'People may not be excited to say they are from your great nation, but suburban moms in neighboring countries are checking your housing prices and walkability scores incessantly because your nation consistently ranks one of the safest in the world.',
            'Your nation hasn\'t had a workplace injury in 5 years. Maybe it is the bubblewrap that every citizen is required to wear that led that.'
        ]
    },
    {
        label:'Environment',
        key: 'environment',
        text: [
            'China looks like a beach in paradise compared to the disgusting monstrosity that is your nation. You \'water\' your plants with Brawndo, and nothing grows. Is it really any wonder?',
            'Is it global warming or global cooling? People aren\'t really sure, thanks to fake news outlets. Corporations capitalize on the apathy by using cheap production techniques that dirty local rivers. Business as usual.',
            'People are aware of global warming, but it\'s a long way off, right? Nothing has really changed in your nation, as peak oil looms on the horizon.',
            'The world is an amazing place, thanks to your nation. You\'ve spearheaded efforts with the UN to pass strict cap-and-trade policies to eliminate fossil fuels within the next 40 years.',
            'The environmentalists have won. People live until 150, wild bears come up to hikers for pets, and the only smog people know of is from movies.'
        ]
    }
];

export default {
    get: () => results,
};