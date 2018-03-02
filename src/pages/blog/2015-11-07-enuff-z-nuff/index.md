---
path: "/blog/enuff-z-nuff/"
date: "2015-11-07T17:12:33.962Z"
title: "Enuff Z Nuff"
type: "blog"
---

So that title might be a *little* bit of an exaggeration.  But it expresses my horror of going from sweet, sweet Ruby-babe to the gsub method within Ruby that uses Regular Expressions. For all my millions of readers that are unfamiliar with the concept, Regular Expressions (henceforth to be called "regex") are "a sequence of characters that define a search pattern" per Wikipedia. Put another way, it is a cross between cuneiform and heiroglyphics that allows you as a programmer to match patterns and characters and find stuff. This is helpful if you are dealing with user input and validation, databases, doing find and replace type functions, and anything where you are hunting down a specific sequence of characters.

**The good news** is that regex is pretty much identical across different programming languages, so you don't need to learn different flavors. **The bad news** is that regex, for me, has always represented the worst part of programming: inscrutable, arbitrary symbols that you just have to memorize. It is still a steaming pile of bracket, slash and and semicolon slop into my Ruby crème brulée. I mean they use the carat ^ ffs. Who uses a carat.

### Enough Complaining
I once asked an employee how he was doing. He responded, "Not too bad and no one would care if I was." I think I gave him a bewildered pat on the back and realized he might be some sort of sage and also checked on the corporate mental health benefits.

Regex, similarly, may be ugly, and it may not be Ruby-like, but neither are a lot of other handy tools. The beauty lay in their power, like an A-10 Thunderbolt or a bulldozer.

My come to Jesus moment was with a codewars example. The idea was to convert words greater than 4 letters in length to an abbreviated version automatically. So 'abbreviated' would be 'a9d' for the first and last letters and 9 for 9 letters in between. Hyphenated words would be treated as two words with the hyphen preserved. Commas and punctuation presented a challenge, as did spaces between words, at least as compared to a base case of a single word you had to convert.

Here is my solution that I completed in 90 minutes instead of the alloted 6 hours ([brushes dirt off shoulder](https://www.youtube.com/watch?v=Oz_-VaTHpc8)) and am very proud of.

```ruby
class Abbreviator

  def self.abbreviate(string)
    array = string.split(" ")
    array.each_with_index do |str, i|
      if str.length > 3
        if str.include? "-"
          array[i] = self.dehyphen(str)
        else
          array[i] = self.transform(str)
        end
       end
    end
    array.join(' ')
  end

  def self.transform(string)
    str_a = string.split(//)
    sc = ""
    spec_char = %w{, . ? !}
    if spec_char.include?(str_a.last)
      sc = str_a.last
      str_a.slice!(-1)
    end
    if str_a.length > 3
      "#{str_a.first}#{str_a.length - 2}#{str_a.last}#{sc}"
    else
      str_a.join() + sc
    end

  end

  def self.dehyphen(string)
    array = string.split('-')
    array.each_index {|i| array[i] = transform(array[i]) if array[i].length > 3}
    array.join("-")
  end

end
```

I was so proud of this. And then I submitted my assignment, got my credit, and saw the other solutions. (bends over, picks up dirt, puts back on shoulder).

```ruby
class Abbreviator

  def self.abbreviate(string)
    string.gsub(/([a-z]+)/i) {|w| w.length < 4 ? w : w[0] + (w.length - 2).to_s + w[-1]}
  end

end
```

or this

```ruby
class Abbreviator

  def self.abbreviate(string)
    string.gsub(/(\w)(\w{2,})(\w)/i) { "#{$1}#{$2.size}#{$3}" }
  end

end
```

I was kicking myself because I knew that gosh dangnab darn ```#gsub``` method would have probably done a great job of swapping out things but when I was digging around the documentation I kept thinking that I didn't want to learn regex. And then I see that my 20 lines of code was totally superfluous and reduced to a single line of Ruby code to my astonishment. It had me looking up Anchorman images to capture my exact emotional response.
![I'm not even mad. Thats amazing.](http://e.lvme.me/l2fdwg1.jpg).

### Oedipus Regex
So it is time to fulfill my destiny as foretold by the Sphinx and the Oracle of Delphi.  I have to make some flashcards and memorize the regex expressions.

### Resources I found.
* [Regexr](http://regexr.com) is a neat web app for practicing regex
* [Rubular](http://rubular.com) is similar to Regex (and vice versa)
* [tutsplus](http://code.tutsplus.com/categories/regular-expressions) is a coding education website with some helpful articles on regex
* [Learn the Hard Way](http://regex.learncodethehardway.org/book/) is a blog from a gentleman I learned about via the [codenewbie)[http://www.codenewbie.org] podcast. This is a work in progress so as of Nov. 8, 2015, this is an incomplete but nevertheless helpful resource.
* [RegexOne](http://regexone.com) is a very cool resource as well.

### Conclusion
I told my mentor at Bloc that I have two things that I want to learn cold. One is Regex and the other is method chaining for Fixnum, Arrays, Hashes and Strings. I am bowled over by the cleverness of the solutions in codewars and really want to be able to write these tight one liners. After that I guess I would need to learn whether this is the most performant way to go, because in the real world of web apps I would think that fast code > clever code, and readability + ease of maintenance > cleverness + brevity.
