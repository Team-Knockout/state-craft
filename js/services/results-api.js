

//text array should have 5 elements

let results = [

    { 
        label: 'Personal Freedom',
        key: 'personalFreedom',
        text: [
            'Personal freedom is nonexistent, everyone is in jail.',
            'Personal freedom is very low, marshall law reigns over the population.',
            'Personal freedom is satisfactory, however nightly curfews continue to strain political approval.',
            'Personal freedom is good, the population seems to be at ease.',
            'YOU HAVE TOO MUCH PERSONAL FREEDOM! THE PRIME MINISTER HAS BEEN DECAPITATED AND THEY ARE DANCING NAKED IN THE STREETS!'
        ]
    },
    { label: 'Economic Freedom',
        key: 'economicFreedom',
        text: [
            'There is absolutely no economic freedom. The nation\'s coffers are filled with exotic riches, however, the population has been living in abject poverty for nearly a decade. Rebels have taken over three major cities and continue to recruit with the promise of economic prosperity.',
            'Economic freedom is low, the facade of Communist policies has not fooled the population. Marshall law has been declared until protests die down.',
            'Economic policies are currently being protested due to the lack of inclusion. The wealth gap continues to cause political uproars across the nation.',
            'The Economy is booming! Industrial development is at an all time high, however the monopolization of commodities has lead to 95% of the country relying on major corporations for their services.',
            'WE SHOULD\'NT HAVE LISTENED TO SENATOR BERNIE SANDERS ... WE SHOULD\'NT HAVE LISTENED!!!!'
        ]
    },
    { label: 'Political Freedom',
        key: 'politicalFreedom',
        text: [
            'The world watched in horror as your political rival was executed on national broadcast yesterday. It has sent a firm message that other political regimes will not be tolerated.',
            'The current authoritarian regime stands strong despite political upheaval from the "Please dont kill us too" socialist party.',
            'Ruling has been smooth sailing, the transition towards elected local officials has lead to four homicides. Also two goats and one adorable corgi dressed as a sailor have been nominated for office in districts 13, 7, and 4.',
            'Hooray, welcome to Democracy! Where everyone has the right to make an ass of themselves',
            'Political turmoil across the nation as vegans protest the inhumanity of the meat industry on every major highway in the nation. This has brought transportation to a standstill and has lead to 342 hit and runs. The national guard has been deployed to handle the situation, however, armed with only words of disapproval little has been done to contain the vegan uprising.'
        ]
    },
    {
        label: 'Approval',
        key: 'approval',
        text: [
            'Approval of current political office has hit an all time low of 36%. Perhaps painting yourself orange and spewing xenophobic nonsense will lead you to an early political grave.',
            'Political approval hit a new low this morning. Apparently making comments about immigrants during the midterm election has results in a political shift to the left.',
            'Decisions in office has lead to the population tolerating your rule. Approval could be higher... lets not forget last week when the middle class found out their taxes were going to fund your golfing addiction.',
            'Look at you go! Despite the accidental bowel movement during this years State of The Nation your approval rating remains the highest it has ever been. You are trending on twitter.',
            'EVERYBODY AGREES ON WHATEVER YOU SAY! FOR THE GOOD OF THE NATION PLEASE STOP WITH BANNING PLASTIC STRAWS AND WORK ON GUN REFORM!'
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