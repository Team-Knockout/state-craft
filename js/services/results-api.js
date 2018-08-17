

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
            'WE SHOULDN\'T HAVE LISTENED TO SENATOR BERNIE SANDERS ... WE SHOULDN\'T HAVE LISTENED!!!!'
        ]
    },
    { label: 'Political Freedom',
        key: 'politicalFreedom',
        text: [
            'The world watched in horror as your political rival was executed on national broadcast yesterday. It has sent a firm message that other political regimes will not be tolerated.',
            'The current authoritarian regime stands strong despite political upheaval from the "Please dont kill us too" socialist party.',
            'Ruling has been smooth sailing, the transition towards elected local officials has lead to four homicides. Also two goats and one adorable corgi dressed as a sailor have been nominated for office in districts 13, 7, and 4.',
            'Hooray, welcome to Democracy! Where everyone has the right to make an ass of themselves.',
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
            'The ports of this nation haven\'t exported a single item of worth. As a nation we cannot continue on only exporting grass. EVERYONE HAS GRASS!',
            'Economic production is at an all time low, our manufactories have come to a standstill! It will be unsustainable to keep the current working conditions.',
            'Production could be higher. Last month the nations GDP dropped three points due to the trade war with China.',
            'An increase in GDP over the last three years has pushed the country into its first renaissance!',
            'The nation is in crisis! Without the ability to deal with our surplus we will quickly shift towards an economic spiral. We all remember twenty years ago. Lets not go back to that.'
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