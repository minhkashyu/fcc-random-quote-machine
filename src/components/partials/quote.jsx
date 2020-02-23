import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const getRandomInteger = intInput => Math.floor(Math.random() * intInput);

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [
                ["When there is no desire, all things are at peace.", "Laozi"],
                ["Simplicity is the ultimate sophistication.", "Leonardo da Vinci"],
                ["Simplicity is the essence of happiness.", "Cedric Bledsoe"],
                ["Smile, breathe, and go slowly.", "Thich Nhat Hanh"],
                ["Simplicity is an acquired taste.", "Katharine Gerould"],
                ["Only a life for others is a life worthwhile.", "Albert Einstein"],
                ["Gratitude is the fairest blossom which springs from the soul.", "Hosea Ballou"],
                ["Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.", "Brian Tracy"],
                ["We should all be concerned about the future because we will have to spend the rest of our lives there.", "Charles Kettering"],
                ["By the mile it’s a trial; by the yard it may be hard but inch by inch – it’s a cinch.", "Reverend Robert Schuller"],
                ["Lack of self-confidence is not the result of difficulty; the difficulty comes from lack of confidence.", "Seneca"],
                ["Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.", "Shakespeare"],
                ["People are not disturbed by events, but by their view of events.", "Epictetus"],
                ["To know and not to do is not yet to know.", "An old zen saying"],
                ["Four things come not back: the spoken word, the sped arrow, time past and the neglected opportunity.", "Arabian proverb"],
                ["The unexamined life is not worth living.", "Socrates"],
                ["If I have been further, it is by standing on the shoulders of giants.", "Issac Newton"],
                ["We should have some ways of connecting programs like garden hose--screw in another segment when it becomes necessary to massage data in another way. This is the way of IO also.", "Doug McIlroy"],
                ["The most technologically efficient machine that man has ever invented is the book.", "Northrop Frye"],
                ["It has become appallingly obvious that our technology has exceeded our humanity.", "Albert Einstein"],
                ["One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.", "Elbert Hubbard"],
                ["Technology is a word that describes something that doesn’t work yet.", "Douglas Adams"],
                ["All this modern technology just makes people try to do everything at once.", "Bill Watterson"],
                ["We are stuck with technology when what we really want is just stuff that works.", "Douglas Adams"],
                ["Humanity is acquiring all the right technology for all the wrong reasons.", "R. Buckminster Fuller"],
                ["Technology… the knack of so arranging the world that we don’t have to experience it.", "Max Frisch"],
                ["Technology frightens me to death. It’s designed by engineers to impress other engineers. And they always come with instruction booklets that are written by engineers for other engineers — which is why almost no technology ever works.", "John Cleese"],
                ["Computers are useless. They can only give you answers.", "Pablo Picasso"],
                ["Ethics change with technology.", "Larry Niven"],
                ["The real danger is not that computers will begin to think like men, but that men will begin to think like computers.", "Sydney J. Harris"],
                ["The real problem is not whether machines think but whether men do.", "B.F. Skinner"],
                ["Technology… is a queer thing. It brings you great gifts with one hand, and it stabs you in the back with the other.", "Carrie Snow"],
                ["Technology is a useful servant but a dangerous master.", "Christian Lous Lange"],
                ["Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.", "Steve Jobs"],
                ["I have not failed. I've just found 10,000 ways that won't work", "Thomas A. Edison"],
                ["Everybody gets so much information all day long that they lose their common sense.", "Gertrude Stein"],
                ["Technology is supposed to make our lives easier, allowing us to do things more quickly and efficiently. But too often it seems to make things harder, leaving us with fifty-button remote controls, digital cameras with hundreds of mysterious features and book-length manuals, and cars with dashboard systems worthy of the space shuttle.", "James Surowiecki"],
                ["Cell phones, mobile e-mail, and all the other cool and slick gadgets can cause massive losses in our creative output and overall productivity.", "Robin S. Sharma"]
            ],
            colors: ['#800000', '#8E388E', '#7171C6', '#7D9EC0', '#388E8E', '#71C671', '#8E8E38', '#C67171', '#FF4040', '#FF4500'],
            quote: ["Simplicity is the ultimate sophistication.", "Leonardo da Vinci"],
            color: '#800000'
        };
        this.newQuote = this.newQuote.bind(this);
    }
    newQuote(e) {
        e.preventDefault();

        this.setState((state) => ({
            quote: state.quotes[getRandomInteger(state.quotes.length)],
            color: state.colors[getRandomInteger(state.colors.length)]
        }));
    }
    render() {
        document.body.style.backgroundColor = this.state.color;
        document.body.style.color = this.state.color;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="quote-box">
                            <blockquote style={{borderColor: this.state.color}}>
                                <p id="text">{this.state.quote[0]}</p>
                                <footer id="author">{this.state.quote[1]}</footer>
                            </blockquote>
                            <a id="tweet-quote" className="btn btn-default btn-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + this.state.quote[0]} role="button" target="_blank" rel="noopener noreferrer" style={{backgroundColor: this.state.color}}>
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <button id="new-quote" className="btn btn-default btn-quote" style={{backgroundColor: this.state.color}} onClick={this.newQuote}>New Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;
