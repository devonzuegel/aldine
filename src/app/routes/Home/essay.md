# Syntax Highlighting for English #

A while back, I learned Rob Pike believes that code shouldn't be syntax highlighted. He argues that we get along just fine without it in English, so it's just a distraction. That made me think, "Well why don't we have it English?" It seems like more of an accident of history rather than an intentional design decision. Anyways, what are **bolding** and *italicizing* if not a limited form of syntax highlighting?

Years ago, I developed a method of reading where I focus on verbs to “anchor” clauses and then attach the rest of the sentence to those anchor points. I found it helps me to read faster and with better comprehension. Similarly, I realized that I understand just as much when I all but ignore articles and other filler words (e.g. “a”, “the”).

These experiences made me wonder what changes we could make to text to improve the experience of reading. I tried a few different syntax highlighting schemes, with some interesting results:

### All parts of speech ###

Highlighting all parts of speech with different styles was a total mess. The rainbow of colors made my eyes hurt, and they added very little meaning to the structure of the sentence. I now have some sympathy for how Rob Pike must feel when he reads syntax highlighted code.

{{allPartsOfSpeech}}

Though this experiment was a failure, it made me wonder why it had such a different effect from similarly colorful code. Maybe I'm just used to syntax highlighting in code; maybe Rob Pike is right that a rainbow painted text editor would drive me just as crazy if I was used to programming in monochrome.

// "kaleidoscopic"

I don't think that's quite right though, because my when I removed some of the variation and applied a simpler theme, it had a different effect. I found myself skipping along the sentences without any loss of comprehension, and it didn't given me a headache like the first example.

{{somePartsOfSpeech}}

One hypothesis is that prose is interpretive, not mechanical. Code has more visual structure, because underlying the syntax is more literal structure. Its meaning is deterministic and machine-readable. By contrast, natural languages are "fuzzy", with slightly different interpretations with each reading. The grammatical rules in English are nowhere near as strict as a compiler or an interpreter, and even within those rules the variations are endless. The number of words in English vastly outnumbers the keywords in even the most complex programming languages. Add synonyms, cultural connotations, and punctuation and you lose a lot of the symmetry and patterns that might make make brightly colored syntax highlighting easier to digest. In short, there are many more degrees of freedom in natural languages than machine-readable ones, which might be why colorful syntax-highlighting prose is less useful (or at least more headache-inducing).

// A few questions I'm still thinking about:

// - Simplifying the rules for highlighting English made the formatting far more useful and eliminated the frenzy of the first colorful example. Perhaps we should apply simpler syntax highlighting themes for programming as well?
// - Esperanto has simpler vocab and grammar than most natural languages. (The correct categorization of Esperanto is "artificial language", since it was designed rather than evolving organically.) Maybe Esperanto would

{{plaintextCode}}

{{colorfulCode}}

### Garden paths ###

One benefit of syntax highlighting in code is that it helps programmers find subtle errors before they move on. It serves as the first line of defense linter and type system, immediately pinpointing syntax errors as you code. For example, editors color string literals in a different color, which makes it much easier to spot a missing delimeter.

{{stringLiteralGif}}

Since syntax highlighting is helpful when debugging code, it made me wonder if it could be helpful when debugging complicated prose, too. One of my favorite linguistic quirks is the [garden path sentence](https://en.wikipedia.org/wiki/Garden_path_sentence), a sentence that starts in such a way that a reader's initial interpretation is likely incorrectly. For example, most people intially parse *"The old man the boat"* as *"The man who is old the boat"*, but the correct parse is *"The elderly people control the boat"*.

I wanted to see if syntax highlighting would make garden paths easier to read, so I tried a few different schemes. The result was mixed. My first approach was to highlight the verb of the sentence, which was very helpful for some examples and not so much for others. The key differentiator between those it helped and those it did not was whether the confusion in the original sentence was due to verb usage. For instance, it made *"Time flies like an arrow; fruit flies like a banana"* much easier to read, but had little impact on the readability of *"I convinced her children are noisy"*.

{{gardenPathVerbs}}

This experiment had some interesting results, but the overarching lesson is that you should just avoid writing garden paths. No amount of syntax highlighting will clarify badly structured sentences, just as it doesn't make poorly designed code easy to read. Syntax highlighting is secondary notation. It reinforces but is not a substitute for good structure and readability. That's the writer's (or programmer's!) responsibility.

{{confusingCPP}}

### Faded stop words ###

Next thing I tried was a scheme that greys out just stop words (i.e. articles like "the", "a" and conjunctions like "and", "but"). I thought this would be effective for a few reasons. For one, articles and conjunctions are the "least important" words in a sentence. When I'm programming, my text editor theme greys out the least important tokens, which then fade into the background. This allows me to see them as a sort of scaffolding for the actual content of the code, which is emphasized relative to the faded characters. My guess was that stop words were analogous to these tokens. Also, in earlier experiments, the busy, colorful schemes were overwhelming. Simpler schemes worked better, and this approach of fading stop words would be very simple.

{{plaintextTsx}}
{{greyedOutTsx}}

However, this approach did not work well. The infrequent faded words were distracting, and it felt like there were holes in my paragraphs. The de-emphasis of the articles and conditionals didn't save me any headspace – it just interrupted the flow of sentences.

{{fadedStopWords}}

It was interesting how different an effect downplaying certain words had from earlier experiments, in which we took words that were mostly faded and then emphasized some categories in various ways. Faded stop words felt disorganized, while emphasizing just a few key elements gave the prose better visual hierarchy. Perhaps this shouldn't have been so surprising. Hierarchy is a well-understood design principle. You have to reserve emphasis for the most importat elements on the page, and I was violating that rule by effectively emphasizing everything but the stop words.

// - In the emphasized verb/noun strategies, most words were faded and just the keywords were darkened. By contrast, only articles and stop words were faded in this case, which was significantly more distracting somehow.
// - Given the findings that simpler schemes tended to be more helpful, I expected
// Worked less well than I imagined in my head.
// - in code greying out tokens that require the least attention is one of my
// - Striking how different this is from code – in code, greying out certain characters is extremely helpful because their value is in structuring the code rather than having important meaning / content in their own right. Intuitively I would think stop words are analogous, but fading them is far more distracting. My guess is that usage of stop words is far more open-ended, and so they don't have as defined a “shape” as tokens like quotes, string interpolation, etc. And as a result the actual “content” of then english tokens is more important.

### Faded gerund endings ###

{{fadedGerundEndings}}

### Faded parentheses ###

When I see a grey line, I immediately know it's a comment. When I see green, it's a string.

### No punctuation ###

{{noPunctuation}}

### Automated part-of-speech tagging ###

This didn't work so well, unfortunately. The first chunk of text I tried to process using theAutomatedPOS tagged was this passage about reading, which immediately uncovered the weaknesses of this approach:

{{automatedPOSReading}}

As you can see, the tagger was extremely confused, because “reading” the subject of this passage.Probabilistically, “reading” is usually a verb.

## What's next? ##

* measurement/tests of various highlighting strategies
    - A study published in the conference PPIG evaluated the effects of syntax highlighting on the comprehension of short programs, finding that the presence of syntax highlighting significantly reduces the time taken for a programmer to internalise the semantics of a program.[2] Additionally, data gathered from an eye-tracker during the study suggested that syntax highlighting enables programmers to pay less attention to standard syntactic components such as keywords. http://www.ppig.org/library/paper/impact-syntax-colouring-program-comprehension
* what other secondary notation, typography, and design elements could we incorporate into our writing to reinforce its meaning and readability?
* disfluency

I'd love to hear what your experiences were with each of the experiments above! I've read each passage so many times and overthought the pros and cons of the various themes that it's hard for me to put myself in the shoes of someone reading a given syntax-highlighted text for the first time.

* We should experiment with a broader range of tools and methods of reading rather than simply take from history the strategies we've been given.
    * Reading twice, highlighting the important parts the second time through

Language is taught as a static set of rules to obey. Instead, we should view it as a collection of tools that we can select, improve upon, and even build for ourselves. Syntax highlighting for prose might be a useful addition to that toolbox, but I'm even more excited other tools people come up with.
