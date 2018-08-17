
let questions = [
    {
        title: 'Should Democracy Be Compulsory?',
        text: 'In response to a slow news week, certain highbrow newspapers have stirred up the debate over voluntary vs compulsory voting.',
        options:[{
            answer: '"Compulsory voting makes about as much sense as having the death penalty for attempted suicide," says civil rights activist Ambrose Macklin. "You can\'t force people to be free! You can only give them the choice. Besides, if all those derelicts who can\'t be bothered to get off their butts once every few years voted, who would they elect? I shudder to think."',
            response: 'Voting is voluntary.',
            effects: (nation) => {
                nation.personalFreedom += 0.8;
                nation.politicalFreedom += 1.1;
                nation.approval += 0.4;

                nation.health += 0.1;
                nation.safety += 0.2;

                if(nation.personalFreedom > 2) {
                    nation.approval += 0.4;
                }
            }
        },
        {
            answer: '"It\'s not contradictory at all," argues political commentator Elene Dang. "The fact is, if not everyone votes, the outcome isn\'t truly representative. Some groups—like elderly gun nuts—vote more often than others. That\'s why we always end up with such terrible politicians."',
            response: 'Voting is compulsory.',
            effects: (nation) => {
                nation.personalFreedom -= 1.1;
                nation.politicalFreedom -= 1.1;
                nation.safety -= 0.1;

                if(nation.PersonalFreedom < 2) {
                    nation.approval -= 0.4;
                }
            }
        },
        {
            answer: '"This raises an interesting issue," says Kala Becerra, your brother. "And that is: why do we need elections, anyway? Seems to me it would be much simpler if you just decided what was right, and did it. Wouldn\'t that save everyone a lot of time?"',
            response: 'Elections have been outlawed.',
            effects: (nation) => {
                nation.personalFreedom -= 2.0;
                nation.politicalFreedom -= 2.1;

                if(nation.politicalFreedom < 2) {
                    nation.approval -= 0.3;
                }
            }
        }] 
    },
    {
        title: 'Where\'s The Love Gone?',
        text: 'Last night the respected tabloid TV show "60 Minutes" ran a report on the nation\'s rising divorce rate. What is happening to the nuclear family?',
        options:[{
            answer: '"There\'s a simple solution," says Pastor Felix, of the Catholic Church. "Divorce should be illegal. \'For better or worse,\' anyone remember how that goes? We should return to the good old days, when you got married for life and stuck by your partner no matter how much of a drunken, abusive, adulterating disappointment they turned out to be."',
            effects: (nation) => {
                nation.personalFreedom -= 0.8;
                nation.population += 2.0;
                nation.econProduction += 0.8;
                nation.health -= 0.3;
                
                if(nation.personalFreedom < 2) {
                    nation.approval -= 0.2;
                }

                if(nation.econProduction > 2.5) {
                    nation.approval += 0.3;
                }
            }
        },
        {
            answer: 'John Black, author of the hit book, \'Men are from Mars, Women are from Some Whole Other Place,\' has a simpler solution. "If couples would just call each other \'darling\' once in a while, there would be far fewer relationship breakdowns. A little affection is all it takes. So the government should make it mandatory: call your spouse \'darling\' at least once a day, or face a fine."',
            effects: (nation) => {
                nation.personalFreedom -= 0.4;
                nation.population += 1.3;
                nation.econProduction -= 0.1;
                nation.health -= 0.1;
                nation.safety += 0.1;

                if(nation.personalFreedom < 2) {
                    nation.approval -= 0.2;
                }

                if(nation.safety > 2) {
                    nation.approval += 0.1;
                }
            }
        },
        {
            answer: '"There\'s a simple way to boost the marriage rate, " says gay rights activist Mariam Boykin. "Abolish those archaic laws that discriminate against same-sex marriages.It\'s obscene to treat people differently because of their sexual preference. Besides, everyone knows gay relationships are more stable than straight ones."',
            effects: (nation) => {
                nation.personalFreedom += 0.8;
                nation.population -= 0.8;
                nation.econProduction += 0.5;
                nation.health += 0.1;
                nation.safety += 0.1;

                if(nation.population < 2.5) {
                    nation.approval -= 0.2;
                }
            }
        }] 
    },
    {
        title: 'Reclaim The Streets!',
        text: 'Several major city streets were clogged with bicycles this morning, as the environmental group \'Two Wheels Good, Four Wheels Bad\' staged a protest. Several hundred riders ambled through downtown streets, blissfully ignoring the torrent of abuse hurled at them by thousands of motorists running late for work.',
        options: [{
            answer: '"People are sick of dirty, smelly automobiles," said protest organizer Shanelle Hyatt. "They\'re choking the city, the environment - our lives! Cars must be banned!"',
            effects: (nation) => {
                nation.personalFreedom -= 0.8;
                nation.economicFreedom += 0.1;
                nation.population -= 0.3;
                nation.econProduction -= 0.5;
                nation.health += 0.7;
                nation.safety += 0.7;
                nation.environment += 1.0;


                if(nation.environment > 3) {
                    nation.approval += 0.4;
                }

                if(nation.econProduction < 2.5) {
                    nation.approval -= 0.2;
                }
            }
        },
        {
            answer: '"The only thing people are sick of is long-haired idiots riding their bicycles at two miles an hour on major thoroughfares," says committed motorist Savannah Lennon. "People shouldn\'t be able to protest like this.The government needs to crack down on them."',
            effects: (nation) => {
                nation.economicFreedom -= 1.0;
                nation.politicalFreedom -= 0.3;
                nation.econProduction += 0.5;
                nation.environment -= 0.6;
            }
        },
        {
            answer: 'The Automotive Manufacturers Association, meanwhile, has called for government support. "It\'s clear that we need to boost the level of automobile support in this country.This protest this morning is a clear indication of...um...anyway, we need more government funds."',
            effects: (nation) => {
                nation.economicFreedom -= 0.7;
                nation.econProduction += 1.0;
                nation.health -= 0.5;
                nation.safety -= 0.3;
                nation.environment -= 1.1;

                if(nation.environment < 2.5) {
                    nation.approval -= 0.3;
                }
            }
        }]
    },
    {
        title: 'Harry Potter Censorship Row',
        text: 'The latest "Harry Potter" book to hit schools across the nation has stirred up the greatest controversy yet.',
        options: [{
            answer: '"I quite enjoyed the book, until I got to the part where Harry summons evil demons to do his bidding," says religious leader Connie Stamm. "Now that\'s just wrong.We need to restore some sense to this debate, by which I mean we should remove this book from the shelves, salt it thoroughly, and burn it."',
            effects: (nation) => {
                nation.personalFreedom -= 0.7;
                nation.economicFreedom -= 0.1;
                nation.population += 0.4;
                nation.econProduction += 0.1;
                nation.safety += 0.1;
                nation.environment -= 0.4;

                if(nation.personalFreedom < 3) {
                    nation.approval -= 0.1;
                }
            }
        },
        {
            answer: 'Teachers union President Davina Back says, "Come on, the book is fantasy! And it\'s a damn good read.I\'d like the government to issue a statement of support for our teachers and librarians, so kids can enjoy good books without interference from religious wackos, like Christians."',
            effects: (nation) => {
                nation.personalFreedom += 1.3;
                nation.population -= 0.05;
                nation.environment += 0.3;

                if(nation.personalFreedom > 3) {
                    nation.approval += 0.2;
                }
            }
        }]
    },
    {
        title: 'Economic Collapse Looms!',
        text: 'Big business, fed up with over-regulation in your nation, are heading offshore in ever-increasing numbers.',
        options: [{
            answer: '"Good riddance!" says noted environmentalist Renaldo Pyle. "Sniff that air! It\'s never been so clean!At last, our society is freeing itself from the consumer death-trap! I say it\'s time to take the final step and outlaw capitalism once and for all!"',
            effects: (nation) => {
                nation.personalFreedom -= 1.5;
                nation.economicFreedom -= 0.4;
                nation.population -= 1.8;
                nation.econProduction -= 2.5;
                nation.health += 0.3;
                nation.safety += 0.3;
                nation.environment -= 0.5;


                if(nation.personalFreedom < 2.5) {
                    nation.approval -= 0.1;
                }

                if(nation.environment > 4) {
                    nation.approval += 0.5;
                }
            }
        },
        {
            answer: '"This is a catastrophe waiting to happen," says the Chamber of Commerce. "Think of the consequences! Without big business, where do the jobs come from? Where do we get our medicine? Our cars? Our latest fashions? There are dozens of useless regulations the government could abolish today to make life easier for commerce, and it\'s high time they did."',
            effects: (nation) => {
                nation.personalFreedom += 1.5;
                nation.economicFreedom += 0.3;
                nation.population -= 0.4;
                nation.econProduction -= 0.4;
                nation.health -= 0.2;
                nation.safety -= 0.2;
                nation.environment -= 1.1;

                if(nation.environment > 3) {
                    nation.approval -= 0.2;
                }
            }
        }]
    },
    {
        title: 'Child Casino Shock',
        text: 'Children as young as eight have been spotted gambling in some of the nation\'s seedier casinos.',
        options: [{
            answer: 'Social activist Jovita Sample is outraged. "Gambling needs to be outlawed immediately. It\'s no wonder children are becoming sucked into the vice, with adults setting such a poor example.Gambling is a stain on the nation\'s international reputation and it must be stopped!"',
            effects: (nation) => {
                nation.personalFreedom -= 1.1;
                nation.economicFreedom -= 0.3;
                nation.population += 0.4;
                nation.econProduction -= 0.2;
                nation.health += 0.3;
                nation.safety += 0.5;

                if(nation.personalFreedom < 2.5) {
                    nation.approval -= 0.1;
                }
                if(nation.safety > 3) {
                    nation.approval += 0.2;
                }
            }
        },
        {
            answer: 'However, Crown Casino chairperson Criselda Messer says, "What\'s wrong with children gambling? It prepares them for the realities of life, teaching them that success or failure is not due to hard work or intelligence, but the roll of the dice.Besides, if kids weren\'t gambling, they\'d be spray painting trains."',
            effects: (nation) => {
                nation.personalFreedom += 1.5;
                nation.economicFreedom += 0.3;
                nation.population -= 0.2;
                nation.econProduction += 0.4;
                nation.health -= 0.1;
                nation.safety -= 0.8;
                nation.environment -= 0.3;

                if(nation.personalFreedom && nation.econProduction > 2.5) {
                    nation.approval += 0.2;
                }

                if(nation.safety < 2.5) {
                    nation.approval -= 0.3;
                }
            }
        }]
    },
    {
        title: 'Appointment Of Spiritual Advisor',
        text: 'It\'s time for the government to hire a new religious advisor.Your people have narrowed down the candidates to:',
        options: [{
            answer: 'Staunch traditionalist religious leader Salina Binkley: boasts an excellent track record, having rapidly increased religious service attendances in male/female constituencies through the "Reaching God Through Guilt" program. Seen as a solid choice.',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
                nation.population += 0.7;
                nation.econProduction -= 0.3;
                nation.health -= 0.1;
                nation.safety += 0.3;
                nation.environment -= 0.8;

                if(nation.population > 2.5) {
                    nation.approval += 0.1;
                }

                if(nation.environment < 3) {
                    nation.approval -= 0.2;
                }
            }
        },
        {
            answer: 'New Age thinker Rashida Creighton: a left-field candidate with some radical ideas. "For me, it\'s not about the name of your religion.It\'s about discovering your spirituality in whatever guise that takes. Some people call that a cult: I call it taking spirituality to the people."',
            effects: (nation) => {
                nation.personalFreedom += 0.4;
                nation.economicFreedom -= 0.05;
                nation.population -= 0.7;
                nation.econProduction += 0.7;
                nation.health += 0.3;
                nation.safety -= 0.3;

                nation.environment += 0.7;

                if(nation.environment > 3) {
                    nation.approval += 0.1;
                }

                if(nation.health && nation.econProduction > 2.5) {
                    nation.approval += 0.2;
                }

                if(nation.economicFreedom < 3) {
                    nation.approval -= 0.1;
                }
            }
        },
        {
            answer: 'Finally, there\'s Josue Morehead. "If I am awarded the appointment, I will immediately resign," the ex-schoolteacher has declared. "Because, frankly, God is a big load of hokey. I\'ll be doing everyone a favor by just shutting up about it."',
            effects: (nation) => {
                nation.personalFreedom += 0.2;
                nation.economicFreedom += 0.1;
                nation.population -= 0.1;
                nation.econProduction += 0.1;
                nation.health += 0.3;
                nation.safety += 0.3;
                nation.environment += 0.3;
            }
        }]
    },
    {
        title: 'Animal Liberation Front Strikes Again',
        text: 'The increasingly militant Animal Liberation Front struck again last night, freeing dozens of chickens bound for delicious snack packs.',
        options: [{
            answer: '"These nuts have got to be stopped," demands concerned consumer Alina Betts. "They need to face the fact people want snack packs, no matter how many innocent chickens must be sacrificed. Besides, chickens would do the same to us if they had the chance."',
            effects: (nation) => {
                nation.personalFreedom -= 0.4;
                nation.economicFreedom += 0.5;
                nation.politicalFreedom -= 0.2;
                nation.econProduction += 0.2;
                nation.environment -= 0.1;
            }
        },
        {
            answer: '"These Liberationists are highlighting an important issue," pleads Catarina Bellamy. "Too often, animals are put through needless cruelty, just to make their flesh taste a little more deliciously succulent. I\'m sure we could ban the more horrific abuses without putting too much of a dent in our national obesity figures.Couldn\'t we?"',
            effects: (nation) => {
                nation.personalFreedom -= 0.3;
                nation.economicFreedom -= 0.2;
                nation.politicalFreedom += 0.7;
                nation.econProduction -= 0.1;
                nation.health += 0.1;
                nation.environment += 0.1;
            }
        },
        {
            answer: '"Animals have feelings too!" yelled protestor Heidy Britton, before being set upon by hungry passers-by. "Free the animals! Ban meat-eating!"',
            effects: (nation) => {
                nation.personalFreedom -= 1.4;
                nation.economicFreedom -= 0.9;
                nation.econProduction -= 0.7;
                nation.health -= 0.1;

                nation.environment += 0.5;

                if(nation.personalFreedom && nation.economicFreedom < 3) {
                    nation.approval -= 0.1;
                }
            }
        },
        {
            answer: 'Economist Stacee Lange has an alternative. "You don\'t need to take away the people\'s right to choose. You just need to build the costs of animal suffering into the price. A tax on meat-eating, in proportion to the amount of cruelty involved, would do the trick. Plus think of the benefit for the national coffers! Of course, poor people wouldn\'t be able to afford meat, but that\'s just more incentive for them to get jobs."',
            effects: (nation) => {
                nation.personalFreedom -= 0.6;
                nation.economicFreedom -= 0.2;
                nation.econProduction -= 0.4;
                nation.environment += 0.3;
                nation.approval -= 0.1;
            }
        }]
    },
    {
        title: 'Nudists Demand Time In Sun',
        text: 'A loose coalition of sartorially-challenged individuals known as "Let It All Hang Out" has called on the government to relax public nudity laws.',
        options: [{
            answer: '"For too long, our bodies have been trapped in these prisons of cotton and polyester!" yelled protester Erin Bentley, while apparently developing a nasty case of sunburn. "We must repeal the puritanical laws that make public nudity a crime. My body—my choice to dangle!"',
            effects: (nation) => {
                nation.personalFreedom += 1.2;
                nation.economicFreedom += 0.3;
                nation.population -= 0.3;
                nation.econProduction -= 0.4;
                nation.health += 0.8;

                nation.environment += 0.5;

                if(nation.personalFreedom && nation.health > 3) {
                    nation.approval += 0.2;
                }
            }
        },
        {
            answer: '"I agree," mused sociology professor Blythe Ackerman. "But I don\'t think the protestors are going far enough.Public nudity shouldn\'t be an option: it should be compulsory. Nudity is highly liberating. And it would put that disgusting "Hooters" out of business once and for all."',
            effects: (nation) => {
                nation.personalFreedom -= 0.7;
                nation.economicFreedom += 0.4;
                nation.population -= 0.5;
                nation.econProduction -= 0.6;
                nation.health += 1.1;
                nation.environment += 0.5;

                if(nation.personalFreedom < 3) {
                    nation.approval -= 0.1;
                }
                if(nation.health > 3) {
                    nation.approval += 0.2;
                }
            }
        },
        {
            answer: '"Whoa, whoa," says noted accountant Kandice Beckham. "Are these people serious? The last thing I want to see when I\'m out for a coffee is some lumbering, over-weight nudist coming down the sidewalk toward me.If people want to get naked, they can do it in the privacy of their own homes.Think of the children!"',
            effects: (nation) => {
                nation.personalFreedom -= 0.6;
                nation.population += 0.2;
                nation.econProduction -= 0.05;
                nation.health -= 0.2;
            }
        }]
    },
    {
        title: 'Baby Seals On The Dinner Table',
        text: 'In a bid to provide a new revenue stream for Baby Seal Beef - Based Agriculture industry, it has been suggested that Baby Seals could be added to the menu.',
        options: [{
            answer: '"The fact is, the Baby Seal population is out of control," says Beef-Based Agriculture spokesperson Vada Pitts. "We have to do something about them anyway, so why not market them as tasty snacks? We could have Baby Seal kebabs, Baby Seal pies, Baby Seal-on-a-sticks—the possibilities are endless! Let’s not pass up this golden opportunity to provide a feast, if you will, for our economy."',
            effects: (nation) => {
                nation.personalFreedom += 0.1;
                nation.economicFreedom += 0.1;
                nation.population += 0.2;
                nation.econProduction += 0.1;
                nation.health += 0.1;
                nation.safety += 0.1;
                nation.environment += 0.2;
            }
        },
        {
            answer: '"I agree that something needs to be done about Baby Seal over-population," says random passer-by Keven Snodgrass, "but eating them? That\'s kind of gross. Let\'s just shoot the ones we have to and shovel their bodies into ditches like normal."',
            effects: (nation) => {
                nation.personalFreedom += 0.2;
                nation.economicFreedom += 0.05;
                nation.econProduction += 0.3;
                nation.health -= 0.2;
                nation.safety -= 0.2;
                nation.environment -= 0.6;
            }
        },
        {
            answer: '"I am shocked and appalled!" declared SPCA President Elsy Dolan. "If anyone needs to be culled, it\'s us humans. The Baby Seals were here first, remember? We need to take this as a sign to get our industry - agriculture in particular - to back off. The Baby Seal is part of what makes our nation a great nation!"',
            effects: (nation) => {
                nation.personalFreedom -= 0.4;
                nation.economicFreedom -= 0.1;
                nation.population -= 0.5;
                nation.econProduction -= 0.3;
                nation.health += 0.1;
                nation.safety += 0.1;
                nation.environment += 0.3;
            }
        }]
    },
];


export default {
    getOne: (i) => questions[i],
    getAll: () => questions,
};
