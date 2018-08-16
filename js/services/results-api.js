

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
            'you have basically no Population',
            'you have a bit of Population',
            'you are doing okay in terms of Population',
            'you have lots of Population',
            'YOU HAVE TOO MUCH Population'
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
            'you have basically no Health',
            'you have a bit of Health',
            'you are doing okay in terms of Health',
            'you have lots of Health',
            'YOU HAVE TOO MUCH Health'
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
            'China looks like a beach in paradise compared to the disgusting monstrosity that is your nation. A tear flows down an aboriginal\'s face, as he witnesses the destruction of everything good in his world.',
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