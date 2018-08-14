

let results = [

    { 
        label: 'Personal Freedom',
        key: 'personalFreedom',
        thresholds: [
            'you dont have much personal freedom',
            'you have lots of personal freedom'

        ]
    },
    
    { label: 'Economic Freedom',
        key: 'economicFreedom',
        thresholds: [
            'you dont have much economic freedom',
            'you have lots of economic freedom'
        ]
    },
    
    { label: 'Political Freedom',
        key: 'politicalFreedom',
        thresholds: [
            'you dont have have much political freedom',
            'you have lots of political freedom'
        ]
    
    },
    {
        label: 'Approval',
        key: 'approval',
        thresholds: [
            'you dont have have much approval',
            'you have lots of approval'
        ]
    },
    {
        label:'Population',
        key: 'population',
        thresholds: [
            'you dont have have much population',
            'you have a large population'
        ]
    },
    {
        label:'EconProduction',
        key: 'econProduction',
        thresholds: [
            'you dont have have much economic production',
            'you have lots of economic production'
        ]
    },
    {
        label:'Health',
        key:'health',
        thresholds: [
            'you  dont have have much healthcare',
            'you have lots of healthcare'
        ]
    },
    {
        label:'Safety',
        key: 'safety',
        thresholds: [
            'you  dont have have much safety',
            'you have lots of safety'
        ]
    },
    {
        label:'Environment',
        key: 'environment',
        thresholds: [
            'you  dont have have much environmental policies',
            'you have lots of environmental policies'
        ]
    }
];

export default {
    get: () => results
};