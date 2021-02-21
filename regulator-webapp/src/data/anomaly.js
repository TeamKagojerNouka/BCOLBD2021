const anomalies = [{
        name: "Election",
        keywords: [
            "Mail-in Voting",
            "Election",
            "Fraud",
            "Trump",
            "Democrats",
        ],
        flag: 211,
        article: 101,
        articles: [
            { text: `I think you have to rerun that race, because it 's a mess. Nobody knows what'
                s happening with the ballots and the lost ballots and the fraudulent ballots, I guess.`, date: `2020-09-02` },
            { text: `They found a million fraudulent votes`, date: `2020-09-01` },
            {
                text: `When the President says that it 's going to be fraudulent, that it'
                    s going to be rigged,
                    he 's speaking with absolutely no credibility. There'
                    s no evidence of this.There 's no evidence that the states that vote all by mail have larger rates of fraudulent balloting. In fact, fraudulent balloting is rare in all states in the United`,
                date: `2020-09-02`
            },
            {
                text: `Trump asks public about delaying Nov.election over 'inaccurate and fradulent'
                    mail - in voting in tweet https://americanmilitarynews.com/2020/07/trump-asks-public-about-delaying-nov-election-over-inaccurate-and-fradulent-mail-in-voting-in-tweet/`,
                date: `2020-09-03`
            },
            {
                text: `In S.Korea 's 2020 fradulent election, mail-in voting is the key component.`,
                date: `2020-09-02`
            },
            { text: `Every Conservative who participated in mail - in voting engaged in voter fraud.We are all guilty and must therefore absolve ourselves from this sin.The solution is to hold hostage USPS so that our fradulent behavior ceases immediately.I 100 % support Trump’ s voter suppression.`, date: `2020-09-03` }
        ],
        media: ["facebook", "twitter", "youtube"]
    },
    {
        name: "Schools Reopening",
        keywords: [
            "Schools",
            "Reopening",
            "Covid",
            "Close",
            "Again",
        ],
        flag: 172,
        article: 86,
        articles: [],
        media: ["youtube"]
    },
    {
        name: "Sinha Case",
        keywords: [
            "Sinha",
            "Court",
            "Murder",
            "Procedure",
            "Detain",
        ],
        flag: 223,
        article: 52,
        articles: [],
        media: ["facebook"]
    },
    {
        name: "Messi Leaving",
        keywords: [
            "Messi",
            "Surprise",
            "Barcelona",
            "Leave",
            "Football",
        ],
        flag: 12,
        article: 120,
        articles: [],
        media: ["twitter"]
    },
    {
        name: "Medium Blocked",
        keywords: [
            "Medium",
            "Blocked",
            "Internet",
            "Reddit",
            "Firewall",
        ],
        flag: 157,
        article: 61,
        articles: [],
        media: ["facebook", "twitter"]
    },
    {
        name: "India Flights",
        keywords: [
            "India",
            "Flights",
            "Resume",
            "Travel",
            "Bangladesh",
        ],
        flag: 43,
        article: 77,
        articles: [],
        media: ["facebook"]
    },
];

export default anomalies;