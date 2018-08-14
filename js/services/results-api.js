

//text array should have 5 elements

let results = [

    { 
        label: 'Personal Freedom',
        key: 'personalFreedom',
        text: [
            'you dont have much personal freedom',
            'you have lots of personal freedom'
        ]
    },
    { label: 'Economic Freedom',
        key: 'economicFreedom',
        text: [
            'you dont have much economic freedom',
            'you have lots of economic freedom'
        ]
    },
    { label: 'Political Freedom',
        key: 'politicalFreedom',
        text: [
            'you dont have have much political freedom',
            'you have lots of political freedom'
        ]
    },
    {
        label: 'Approval',
        key: 'approval',
        text: [
            'you dont have have much approval',
            'you have lots of approval'
        ]
    },
    {
        label:'Population',
        key: 'population',
        text: [
            'you dont have have much population',
            'you have a large population'
        ]
    },
    {
        label:'EconProduction',
        key: 'econProduction',
        text: [
            'you dont have have much economic production',
            'you have lots of economic production'
        ]
    },
    {
        label:'Health',
        key:'health',
        text: [
            'you  dont have have much healthcare',
            'you have lots of healthcare'
        ]
    },
    {
        label:'Safety',
        key: 'safety',
        text: [
            'you  dont have have much safety',
            'you have lots of safety'
        ]
    },
    {
        label:'Environment',
        key: 'environment',
        text: [
            'you  dont have have much environmental policies',
            'you have lots of environmental policies'
        ]
    }
];

export default {
    get: () => results,
};