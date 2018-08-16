

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

// economicfreedom, personalfreedom, politicalfreedom
//we are interpolating nation variables into a string, treating it as 3d coordinates and searching for that unique key in the philosophy object
let govType = {
    '0,0,0': { 
        name: 'Psychotic Dictatorship',
        overview: 'Corrupt, authoritarian state where everyone is considered the leader\'s toy.',
        details: 'Citizens are ruled without fear or favor by a psychotic dictator, who outlaws just about everything and refers to the populace as "my little playthings."'
    },
    '0,0,1': { 
        name: 'Authoritarian Democracy',
        overview: 'Not really a democracy, but a dictatorship pretending to be one.',
        details: 'Citizens are prohibited from doing almost everything except voting, which they do timidly and conservatively.'
    },
    '0,0,2': { 
        name: 'Tyranny by Majority',
        overview: 'Pure democracy without minority rights.',
        details: 'Citizens enjoy great social freedoms and frequent elections, where the majority of the populace regularly votes to increase its benefits at the expense of various hapless minorities.'
    },
    '0,1,0': { 
        name: 'Corrupt Dictatorship',
        overview: 'A totalitarian state in which the government will interfere with everything, lowering political and economic rights and adopting a fluctuating civil rights policy.',
        details: 'Citizens are ruled with an iron fist by the dictatorship government, which ensures that no-one outside the party gets too rich. In their personal lives, however, citizens are relatively unoppressed; it remains to be seen whether this is because the government genuinely cares about its people, or if it hasn\'t gotten around to stamping out civil rights yet.'
    },
    '0,1,1': { 
        name: 'Democratic Socialists',
        overview: 'Political Freedoms in this state would be regarded as average, while the government is omnipresent and has much say in the economy, with citizens having few economic rights.',
        details: 'Citizens are fiercely patriotic and enjoy great social equality; they tend to view other, more capitalist countries as somewhat immoral and corrupt.'
    },
    '0,1,2': { 
        name: 'Liberal Democratic Socialists',
        overview: 'Like Democratic Socialists, but more concerned with social reforms and without an oppriment centralist government.',
        details: 'Citizens love a good election, and the government gives them plenty of them. Universities tend to be full of students debating the merits of various civil and political rights, while businesses are tightly regulated and the wealthy viewed with suspicion.'
    },
    '0,2,0': { 
        name: 'Iron Fist Socialists',
        overview: 'The state is omnipresent, and will provide everything for its people except political freedom.',
        details: 'Citizens are ruled with an iron fist by the socialist government, which grants its people the freedom to do whatever they like so long as it doesn\'t involve getting richer than anybody else or challenging the government.'
    },
    '0,2,1': { 
        name: 'Scandinavian Liberal Paradise',
        overview: 'High taxes, tons of civil freedom, but a weak economy.',
        details: 'Citizens enjoy extensive civil rights and enjoy a level of social equality free from the usual accompanying government corruption.'
    },
    '0,2,2': { 
        name: 'Left-wing Utopia',
        overview: 'The democratic government grants broad civil rights but keeps a tight leash on business.',
        details: 'Citizens are free to do what they want with their own bodies, and vote for whoever they like in elections; if they go into business, however, they are regulated to within an inch of their lives.'
    },
    
    '1,0,0': { 
        name: 'Iron Fist Socialists',
        overview: 'The state is omnipresent, and will provide everything for its people except political freedom.',
        details: 'Citizens are ruled with an iron fist by the socialist government, which grants its people the freedom to do whatever they like so long as it doesn\'t involve getting richer than anybody else or challenging the government.'
    },
    '1,0,1': { 
        name: 'Moralistic Democracy',
        overview: 'A self-righteous democracy in which morality influences everything.',
        details: 'Citizens are highly moralistic and fiercely conservative, in the sense that they tend to believe most things should be outlawed. People who have good jobs and work quietly at them are lauded; others are viewed with suspicion.'
    },
    '1,0,2': { 
        name: 'Conservative Democracy',
        overview: 'People are free to vote but tend to avoid other types of freedom.',
        details: 'Citizens are known throughout the region for their efficiency and work ethic, as well as their general suspicion of leisure.'
    },
    '1,1,0': { 
        name: 'Father Knows Best State',
        overview: 'The government will usually interfere in the lives of everyone. It works like a parent. One does what they think is best.',
        details: 'Citizens are ruled by a mostly-benevolent dictator, who grants the populace the freedom to live their own lives but watches carefully for anyone to slip up.'
    },
    '1,1,1': { 
        name: 'Inoffensive Centrist Democracy',
        overview: 'Where the people have a good mix of political and civil rights as well as security. Obviously most centrist of the UN Categories as well as the most common.',
        details: 'Citizens have some civil rights, but not too many, enjoy the freedom to spend their money however they like, to a point, and take part in free and open elections, although not too often.'
    },
    '1,1,2': { 
        name: 'New York Times Democracy',
        overview: 'Liberal democracy, with elections heavily influenced by the media.',
        details: 'Citizens enjoy a sensible mix of personal and economic freedoms, while the political process is open and the people\'s right to vote held sacrosanct.'
    },
    '1,2,0': { 
        name: 'Libertarian Police State',
        overview: 'The state does nothing to impede on your private life, yet will require you to register everything down to your sneakers with a bureau of some sort.',
        details: 'Citizens are proud of their wide-ranging civil freedoms, and those who aren\'t tend to be dragged off the streets by men in dark suits and hustled into cars with tinted windows.'
    },
    '1,2,1': { 
        name: 'Left-Leaning College State',
        overview: 'What would happen if college students ruled the world. Civil rights are the main priority, followed by political rights.',
        details: 'Citizens enjoy extensive civil freedoms, particularly in social issues, while business tends to be more regulated.'
    },
    '1,2,2': { 
        name: 'Civil Rights Lovefest',
        overview: 'Libertarian rule, with less emphasis on the economy and more on civil and political rights.',
        details: 'Citizens hold their civil and political rights very dear, although the wealthy and those in business tend to be viewed with suspicion.'
    },
    '2,0,0': { 
        name: 'Corporate Police State',
        overview: 'The government = big businesses. Individuals have few rights and have to buy from the top corporations.',
        details: 'Citizens are ruled with an iron fist by the corrupt, dictatorship government, which oppresses anyone who isn\'t on the board of a Fortune 500 company.Large corporations tend to be above the law, and use their financial clout to gain ever - increasing government benefits at the expense of the poor and unemployed.'
    },
    '2,0,1': { 
        name: 'Right-wing Utopia',
        overview: 'A conservative state where little change is desired or put into action. Religion will usually play the role of the media.',
        details: 'Citizens are free to succeed or fail in life on their own merits; the successful tend to enjoy an opulent (but moralistic) lifestyle, while the failures can be seen crowding out most jails.'
    },
    '2,0,2': { 
        name: 'Free-Market Paradise',
        overview: 'People are free to vote and make money but have few civil rights.',
        details: 'Citizens enjoy frequent elections, which are uniformly corrupted by big-spending corporations buying politicians who best suit their interests.'
    },
    '2,1,0': { 
        name: 'Compulsory Consumerist State',
        overview: 'This is similar to Iron Fist Consumerists, but the government mandates that you spend money to keep the economy up. This is a form of dictatorship, with very little in the way of political rights and modest civil rights.',
        details: 'Citizens are rabid consumers, partly through choice and partly because the government tells them to and dissenters tend to vanish from their homes at night.'
    },
    '2,1,1': { 
        name: 'Capitalist Paradise',
        overview: 'No restrictions whatsoever are placed on trade; civil rights and political rights are not repressed but take a back seat to the economy.',
        details: 'Citizens are either ruled by a small, efficient government or a conglomerate of multinational corporations; it\'s difficult to tell which.'
    },
    '2,1,2': { 
        name: 'Corporate Bordello',
        overview: 'Free trade, free market, not-so-free merchandise. Civil rights are moderate; political rights are generous.',
        details: 'Citizens are effectively ruled by a group of massive corporations, who run for political office and provide their well-off citizens with world-class goods and services. Their poorer citizens, however, are mostly starving to death while being urged to go out and get real jobs. The populace has reasonably extensive civil rights, although these are mostly aimed at allowing them to buy whatever they like.'
    },
    '2,2,0': { 
        name: 'Benevolent Dictatorship',
        overview: 'A dictatorship ruled by someone who pays no attention to the people and allows them to do whatever they want, except challenge the government.',
        details: 'Citizens enjoy great individual freedoms in everything except elections, which, where they exist at all, are populist shams for a dictatorship government that has no intention of ever giving up power.'
    },
    '2,2,1': { 
        name: 'Capitalizt',
        overview: 'It\'s all about business.Civil rights are generous.',
        details: 'Citizens enjoy some of the most opulent lifestyles in the region, unless they are unemployed or working-class, in which case they are variously starving to death or crippled by easily preventable diseases.'
    },
    '2,2,2': { 
        name: 'Anarchy',
        overview: 'No state actually exists.',
        details: 'Citizens live in a state of perpetual fear, as a complete breakdown of social order has led to the rise of order through biker gangs.'
    },

}

export default {
    getResults: () => results,
    getGovType: () => govType,
};