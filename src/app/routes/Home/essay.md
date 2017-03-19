# Syntax Highlighting for English

A while back, I learned Rob Pike believes that code shouldn't be syntax highlighted. He argues that we get along just fine without it in English, so it's just a distraction. That made me think, "Well why don't we have it English?" It seems like more of an accident of history rather than an intentional design decision. Anyways, what are **bolding** and *italicizing* if not a limited form of syntax highlighting?

Years ago, I developed a method of reading where I focus on verbs to “anchor” clauses and then attach the rest of the sentence to those anchor points. I found it helps me to read faster and with better comprehension. Similarly, I realized that I understand just as much when I all but ignore articles and other filler words (e.g. “a”, “the”).

These experiences made me wonder what changes we could make to text to improve the experience of reading. I tried a few different syntax highlighting schemes, with some interesting results:

{toc.allPartsOfSpeech}
### All parts of speech

Highlighting all parts of speech with different styles was a total mess. The rainbow of colors made my eyes hurt, and they added very little meaning to the structure of the sentence. I now have some sympathy for how Rob Pike must feel when he reads syntax highlighted code.

{allPartsOfSpeech}

Though this experiment was a failure, it made me wonder why it had such a different effect from similarly colorful code. Maybe I'm just used to syntax highlighting in code; maybe Rob Pike is right that a rainbow painted text editor would drive me just as crazy if I was used to programming in monochrome.

I don't think that's quite right though, because my when I removed some of the variation and applied a simpler theme, it had a different effect. I found myself skipping along the sentences without any loss of comprehension, and it didn't given me a headache like the the first example.

{somePartsOfSpeech}

One hypothesis is that prose is interpretive, not mechanical. Code has more visual structure, because underlying the syntax is more literal structure – its meaning is deterministic and machine-readable. By contrast, natural languages are "fuzzy", with slightly different interpretations with each reading. The grammatical rules in English are nowhere near as strict as a compiler or an interpreter, and even within those rules the variations are endless. The number of words in English vastly outnumbers the keywords in even the most complex programming languages. Add in synonyms, cultural connotations, and punctuation and you lose a lot of the symmetry and patterns that might make make brightly colored syntax highlighting easier to digest. In short, there are many more degrees of freedom in natural languages than machine-readable ones, which might make syntax-highlighting them less useful (or at least more headache-inducing).

A few questions I'm still thinking about:

- Simplifying the rules for highlighting English made the formatting far more useful and eliminated the frenzy of the first colorful example. Perhaps we should apply simpler syntax highlighting themes for programming as well?
- Esperanto has simpler vocab and grammar than most natural languages. (The correct categorization of Esperanto is "artificial language", since it was designed rather than evolving organically.) Maybe Esperanto would

{colorfulCode}

{plaintext}

{toc.highlightedVerbs}
### Verbs

* Worked very well for some garden paths, not so helpful for others
* Not nearly as distracting as highlighting all parts of speech

{highlightedVerbs}

{toc.fadedArticles}
### Faded articles

* Worked less well than I imagined in my head. In the emphasized verb/noun strategies, most words were faded and just the keywords were darkened. By contrast, only articles and stop words were faded in this case, which was significantly more distracting somehow.
* Striking how different this is from code – in code, greying out certain characters is extremely helpful because their value is in structuring the code rather than having important meaning / content in their own right. Intuitively I would think stop words are analogous, but fading them is far more distracting. My guess is that usage of stop words is far more open-ended, and so they don't have as defined a “shape” as tokens like quotes, string interpolation, etc. And as a result the actual “content” of then english tokens is more important.

{toc.fadedGerundEndings}
### Faded gerund endings

{fadedGerundEndings}

{toc.gardenPaths}
### Garden paths

{gardenPaths}

{toc.noPunctuation}
### No punctuation

{noPunctuation}

{toc.automatedTools}
## Automated tools

{automatedTools}

{toc.automatedPOSReading}
### Automated part-of-speech tagging

This didn't work so well, unfortunately. The first chunk of text I tried to process using theAutomatedPOS tagged was this passage about reading, which immediately uncovered the weaknesses of this approach:

{automatedPOSReading}

As you can see, the tagger was extremely confused, because “reading” the subject of this passage.Probabilistically, “reading” is usually a verb.

{toc.historicalPerspective}
## Historical perspective

I've also been reading about the history and evolution of writing, and something that's striking is how much the written word has changed over time. It seems like something so static to us day to day, but new patterns and tools and styles have evolved throughout writing's entire history. For example, [spaces were only introduced](https://www.evernote.com/l/ANb3bLif9QhHCIRaqrvCaZE6iQ5uzHaBAy4) into most Western writing in the 13th century, and [a standard system of punctuation](https://www.evernote.com/l/ANavzaoLHiNBdrV9NSu76NvX-0i8qNZq07s) was only introduced into English in the 1450s with the introduction of moveable type. Of course there have been more recent changes in the way we write as well – emoji being a seemingly trivial but actually important example – but I find it particularly interesting to look back on these parts of writing that we find so "obvious" and take for granted now, because it's a great reminder that the way things work are not the way they always worked or necessarily have to moving forward.

This project's name, Aldine, comes from a man who owned a printing press around the time of Gutenberg. He realized that this new technology was not only a shift in the scale of publishing but also a window of opportunity for totally new techniques, offered writers a larger toolbox to explore and communicate ideas. (Paperbacks, etc) Aldine understood that the printing press would enable publishers to qualitatively change the work they produced.

As technology continues to evolve and shape more of our lives, I'm excited to see how publishing and the form of writing will evolve alongside it. The tools we have at our disposal are extremely powerful, and they open up new ways to consume media.

I've only touched on the tip of the iceberg here – new technology will shape far more than just the formatting of the words we read. The possibilities for collaboration, citations, explorable explanations, feedback on our work, multimedia, and more that I haven't even imagined are wide open!



## What's next?

* measurement/tests of various highlighting strategies
* ...

I'd love to hear what your experiences were with each of the experiments above! I've read each passage so many times and overthought the pros and cons of the various themes that it's hard for me to put myself in the shoes of someone reading a given syntax-highlighted text for the first time.

* * *

When I see a gray line, I immediately know it's a comment. When I see green, it's a string.


This led me to ...

"We Process Images and Symbols Faster than Words" in [an article of Ryan Florence's](http://ryanflorence.com/2011/case-against-coffeescript/). When I see a gray line, I immediately know it's a comment. When I see green, it's a string.

something I already do when reading is focus on verbs to "anchor" clauses and then attach the rest of the sentence to those anchor points. I've noticed this allows me to read faster and (I think) we better comprehension. This is a bit difficult to measure of course, but I've had promising enough results that I want to pursue the idea and similar methods further. I've been building some tools (and playing with Typescript at the same time!) around this concept, and I'm starting to think of experiment design for testing different forms of syntax highlighting.

It seems rather path-dependent and more of an accident than intentional design decision. After all, languages (for the most part) emerge organically through generations of semi-random evolution.

Independently, something I already do when reading is focus on verbs to "anchor" clauses and then attach the rest of the sentence to those anchor points. I've noticed this allows me to read faster and (I think) we better comprehension. This is a bit difficult to measure of course, but I've had promising enough results that I want to pursue the idea and similar methods further. I've been building some tools (and playing with Typescript at the same time!) around this concept, and I'm starting to think of experiment design for testing different forms of syntax highlighting.
