
// How to access
// questions[i]['text']
// questions[i]['options'][j].answer
// questions[i]['options'][j].effects(this.nation)

// source: https://nsindex.net/wiki/NationStates_Issue_No._1

let questions = [
    {
        title: 'Should Democracy Be Compulsory?',
        text: 'In response to a slow news week, certain highbrow newspapers have stirred up the debate over voluntary vs compulsory voting.',
        options:[{
            answer: '"Compulsory voting makes about as much sense as having the death penalty for attempted suicide," says civil rights activist @@RANDOMNAME@@. "You can\'t force people to be free! You can only give them the choice. Besides, if all those derelicts who can\'t be bothered to get off their butts once every few years voted, who would they elect? I shudder to think."',
            effects: (nation) => {
                nation.personalFreedom += 0.05;
            }
        },
        {
            answer: '"It\'s not contradictory at all," argues political commentator @@RANDOMNAME@@. "The fact is, if not everyone votes, the outcome isn\'t truly representative. Some groups—like elderly gun nuts—vote more often than others. That\'s why we always end up with such terrible politicians."',
            effects: (nation) => {
                nation.personalFreedom -= 0.05;
            }
        },
        {
            answer: '"This raises an interesting issue," says @@RANDOMMALENAME@@, your brother. "And that is: why do we need elections, anyway? Seems to me it would be much simpler if you just decided what was right, and did it. Wouldn\'t that save everyone a lot of time?"',
            effects: (nation) => {
                nation.personalFreedom -= 0.05;
            }
        }] 
    },
    {
        title: 'Where\'s The Love Gone?',
        text: 'Last night the respected tabloid TV show "60 Minutes" ran a report on @@NAME@@\'s rising divorce rate. What is happening to the nuclear family?',
        options:[{
            answer: '"There\'s a simple solution," says Pastor Felix, of the Catholic Church. "Divorce should be illegal. \'For better or worse,\' anyone remember how that goes? We should return to the good old days, when you got married for life and stuck by your partner no matter how much of a drunken, abusive, adulterating disappointment they turned out to be."',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'John Black, author of the hit book, \'Men are from Mars, Women are from Some Whole Other Place,\' has a simpler solution. "If couples would just call each other \'darling\' once in a while, there would be far fewer relationship breakdowns. A little affection is all it takes. So the government should make it mandatory: call your spouse \'darling\' at least once a day, or face a fine."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: 'John Black, author of the hit book, \'Men are from Mars, Women are from Some Whole Other Place,\' has a simpler solution. "If couples would just call each other \'darling\' once in a while, there would be far fewer relationship breakdowns. A little affection is all it takes. So the government should make it mandatory: call your spouse \'darling\' at least once a day, or face a fine."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }] 
    },
    {
        title: 'Reclaim The Streets!',
        text: 'Several major city streets were clogged with bicycles this morning, as the environmental group \'Two Wheels Good, Four Wheels Bad\' staged a protest. Several hundred riders ambled through downtown streets, blissfully ignoring the torrent of abuse hurled at them by thousands of motorists running late for work.',
        options: [{
            answer: '"People are sick of dirty, smelly automobiles," said protest organizer @@RANDOMNAME@@. "They\'re choking the city, the environment - our lives! Cars must be banned!"',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: '"The only thing people are sick of is long-haired idiots riding their bicycles at two miles an hour on major thoroughfares," says committed motorist @@RANDOMNAME@@. "People shouldn\'t be able to protest like this.The government needs to crack down on them."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: 'The Automotive Manufacturers Association, meanwhile, has called for government support. "It\'s clear that we need to boost the level of automobile support in this country.This protest this morning is a clear indication of...um...anyway, we need more government funds."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: 'Harry Potter Censorship Row',
        text: 'The latest "Harry Potter" book to hit schools across @@NAME@@ has stirred up the greatest controversy yet.',
        options: [{
            answer: '"I quite enjoyed the book, until I got to the part where Harry summons evil demons to do his bidding," says religious leader @@RANDOMNAME@@. "Now that\'s just wrong.We need to restore some sense to this debate, by which I mean we should remove this book from the shelves, salt it thoroughly, and burn it."',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'Teachers union President @@RANDOMNAME@@ says, "Come on, the book is fantasy! And it\'s a damn good read.I\'d like the government to issue a statement of support for our teachers and librarians, so kids can enjoy good books without interference from religious wackos, like Christians."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: 'Economic Collapse Looms!',
        text: 'Big business, fed up with over-regulation in @@NAME@@, are heading offshore in ever-increasing numbers.',
        options: [{
            answer: '"Good riddance!" says noted environmentalist @@RANDOMNAME@@. "Sniff that air! It\'s never been so clean!At last, our society is freeing itself from the consumer death-trap! I say it\'s time to take the final step and outlaw capitalism once and for all!"',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: '"This is a catastrophe waiting to happen," says the Chamber of Commerce. "Think of the consequences! Without big business, where do the jobs come from? Where do we get our medicine? Our cars? Our latest fashions? There are dozens of useless regulations the government could abolish today to make life easier for commerce, and it\'s high time they did."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: 'Child Casino Shock',
        text: 'Children as young as eight have been spotted gambling in some of @@NAME@@ seedier casinos.',
        options: [{
            answer: 'Social activist @@RANDOMNAME@@ is outraged. "Gambling needs to be outlawed immediately. It\'s no wonder children are becoming sucked into the vice, with adults setting such a poor example.Gambling is a stain on @@NAME @@international reputation and it must be stopped!"',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'However, Crown Casino chairperson @@RANDOMNAME@@ says, "What\'s wrong with children gambling? It prepares them for the realities of life, teaching them that success or failure is not due to hard work or intelligence, but the roll of the dice.Besides, if kids weren\'t gambling, they\'d be spray painting trains."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: 'Appointment Of Spiritual Advisor',
        text: 'It\'s time for the government to hire a new religious advisor.Your people have narrowed down the candidates to:',
        options: [{
            answer: 'Staunch traditionalist religious leader @@RANDOMNAME@@: boasts an excellent track record, having rapidly increased religious service attendances in @@HIS/HER@@ constituencies through the "Reaching God Through Guilt" program. Seen as a solid choice.',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'New Age thinker @@RANDOMNAME@@: a left-field candidate with some radical ideas. "For me, it\'s not about the name of your religion.It\'s about discovering your spirituality in whatever guise that takes. Some people call that a cult: I call it taking spirituality to the people."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: 'Finally, there\'s @@RANDOMNAME@@. "If I am awarded the appointment, I will immediately resign," the ex-schoolteacher has declared. "Because, frankly, God is a big load of hokey. I\'ll be doing everyone a favor by just shutting up about it."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: 'Animal Liberation Front Strikes Again',
        text: 'The increasingly militant Animal Liberation Front struck again last night, freeing dozens of chickens bound for delicious snack packs.',
        options: [{
            answer: '"These nuts have got to be stopped," demands concerned consumer @@RANDOMNAME@@. "They need to face the fact people want snack packs, no matter how many innocent chickens must be sacrificed. Besides, chickens would do the same to us if they had the chance."',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: '"These Liberationists are highlighting an important issue," pleads @@RANDOMNAME@@. "Too often, animals are put through needless cruelty, just to make their flesh taste a little more deliciously succulent. I\'m sure we could ban the more horrific abuses without putting too much of a dent in our national obesity figures.Couldn\'t we?"',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: '"Animals have feelings too!" yelled protestor @@RANDOMNAME@@, before being set upon by hungry passers-by. "Free the animals! Ban meat-eating!"',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: 'Economist @@RANDOMNAME@@ has an alternative. "You don\'t need to take away the people\'s right to choose. You just need to build the costs of animal suffering into the price. A tax on meat-eating, in proportion to the amount of cruelty involved, would do the trick. Plus think of the benefit for the national coffers! Of course, poor people wouldn\'t be able to afford meat, but that\'s just more incentive for them to get jobs."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: 'Nudists Demand Time In Sun',
        text: 'A loose coalition of sartorially-challenged individuals known as "Let It All Hang Out" has called on the government to relax public nudity laws.',
        options: [{
            answer: '"For too long, our bodies have been trapped in these prisons of cotton and polyester!" yelled protester @@RANDOMNAME@@, while apparently developing a nasty case of sunburn. "We must repeal the puritanical laws that make public nudity a crime. My body—my choice to dangle!"',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: '"I agree," mused sociology professor @@RANDOMNAME@@. "But I don\'t think the protestors are going far enough.Public nudity shouldn\'t be an option: it should be compulsory. Nudity is highly liberating. And it would put that disgusting "Hooters" out of business once and for all."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: '"Whoa, whoa," says noted accountant @@RANDOMNAME@@. "Are these people serious? The last thing I want to see when I\'m out for a coffee is some lumbering, over-weight nudist coming down the sidewalk toward me.If people want to get naked, they can do it in the privacy of their own homes.Think of the children!"',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '@@ANIMALPLURAL@@ On The Dinner Table',
        text: 'In a bid to provide a new revenue stream for @@NAME@@\'s Beef - Based Agriculture industry, it has been suggested that @@ANIMALPLURAL @@could be added to the menu.',
        options: [{
            answer: '"The fact is, the @@ANIMAL@@ population is out of control," says Beef-Based Agriculture spokesperson @@RANDOMNAME@@. "We have to do something about them anyway, so why not market them as tasty snacks? We could have @@ANIMAL@@ kebabs, @@ANIMAL@@ pies, @@ANIMAL@@-on-a-sticks—the possibilities are endless! Let’s not pass up this golden opportunity to provide a feast, if you will, for our economy."',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: '"I agree that something needs to be done about @@ANIMAL@@ over-population," says random passer-by @@RANDOMNAME@@, "but eating them? That\'s kind of gross. Let\'s just shoot the ones we have to and shovel their bodies into ditches like normal."',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        },
        {
            answer: '"I am shocked and appalled!" declared SPCA President @@RANDOMNAME@@. "If anyone needs to be culled, it\'s us humans. The @@ANIMALPLURAL@@ were here first, remember? We need to take this as a sign to get our industry - agriculture in particular - to back off. The @@ANIMAL@@ is part of what makes @@NAME@@ a great nation!"',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
];


export default {
    getOne: (i) => questions[i],
    getAll: () => questions,
};
