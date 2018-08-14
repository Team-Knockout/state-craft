

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
            'you have basically no Safety',
            'you have a bit of Safety',
            'you are doing okay in terms of Safety',
            'you have lots of Safety',
            'YOU HAVE TOO MUCH Safety'
        ]
    },
    {
        label:'Environment',
        key: 'environment',
        text: [
            'you have basically no Environment',
            'you have a bit of Environment',
            'you are doing okay in terms of Environment',
            'you have lots of Environment',
            'YOU HAVE TOO MUCH Environment'
        ]
    }
];

export default {
    get: () => results,
};