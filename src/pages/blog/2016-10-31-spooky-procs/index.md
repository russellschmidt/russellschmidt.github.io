---
path: "/blog/spooky-procs/"
date: "2017-10-31T17:12:33.962Z"
title: "Spooky Procs"
type: "blog"
---

### Spooky Procs
Happy Halloween!

I found something more terrifying than the gore-filled visuals from one of my favorite sci-fi horror movies, *[Event Horizon](http://www.imdb.com/title/tt0119081/)*. It is passing a symbol as a proc to a method. ![Where We are Going, We Don't Need Eyes to See](https://www.dropbox.com/s/afqfutwm56sg5fq/eyes2see.jpg?dl=0)

This syntax is why Ruby is my vote for the most hipster language of the handful I have had a chance to use (C, C++, PHP, Ruby, JS, Swift). Just when you think you found a pretty cool band, along comes Ruby to tell you your taste is basic, your favorite band is derivative and here are some rarer groups on vinyl predating the pop junk you think you discovered on Soundcloud. Realizing what a suburban loser in dad jeans you are, your teary eyes look around and suddenly you notice all the cool kids writing uber-succinct clever Rubyisms in their code and you slink off to your computer to sheepishly make yet another repo private.

#### Emotional Detour
At first I despaired that I would (a) never get to the bottom of the Sarlacc pit of Ruby knowledge and (b) do I even want to be there in Ruby mastery since apparently [JavaScript is eating the world](https://arc.applause.com/2015/11/06/javascript-is-eating-the-world/) or rather [JavaScript already took over the world](https://arc.applause.com/2016/03/22/javascript-is-the-worlds-dominant-programming-language/). However, Ruby gives me a headache like no other language, but in ways I like. I hated all the parenthesis in PHP and vanilla JS, and found that coffeescript was not quite the perfect bastard son of Ruby and JavaScript that I desired. Ruby makes me think, and makes me really struggle to unpack what is going on in the underlying code. I felt the same way about learning relativity and quantum physics - that throbbing in my skull was raw new neuron connections forming. In the end, human behavior is driven by emotion and psychology which means something my parents did to me has driven me to like Ruby and that is that. Free will is an elaborate illusion.

### Back to life, back to reality
The a capella version of this song at the start of the movie *[Belly](https://www.youtube.com/watch?v=hRaN7wB85a4)* is just so good - warning there are some NSFW bits in this video.

Anyhoo, the code in question for today:

```ruby
ids = self.map(&:id)
```

I have seen this sort of thing before in Ruby, but never had a chance to apply it when more verbose code would do. I just wrote a post that is probably semi-accurate on `block` and `yield` and after the fact found [this post](http://www.skorks.com/2013/04/ruby-ampersand-parameter-demystified/) that was really helpful in furthering my understanding.

### So what is going on here
Spoke with my ever-helpful Bloc mentor Cyle who tried in vain to get me to understand what is going on. We moved our sessions to 8am so I blame my lack of caffeine on a Monday morning following a rowdy Halloween weekend on my lack of understanding.

Buckle up, for our journey to understanding begins now.
![Save yourselves from hell](https://www.dropbox.com/s/xds7p0srbia2rhc/liberateme.png?dl=0)

So we know about blocks. Blocks are essentially anonymous functions we can pass into a method. Here are a couple of blocks a beginning Rubyist will know and love, and as a side benefit, we can see a difference between `each` and `map` methods.

```ruby
y = [1,2,3].each{|y| y+1}
# => [1, 2, 3]
z = [1,2,3].map{|x| x+1}
# => [2, 3, 4]
```

Here, our block is in the {}s. We are having both the `each` and `map` methods apply the block to the items in the array. We can see that `each` executes the block once for each item in the collection but simply returns the original, unchanged array. In contrast, `map` returns the transformed array while still keeping the original untouched (unless you used `map!` instead which mutates the original array and returns it). `Map` could be thought of as a more OCD version of `each`, keeping all of the transformed data in the same order and type of collection they came from instead of simply iterating over the objects in the collection as `each` does.

So we get to our original code snippet `self.map()` and see that we are iterating over the object calling the function, in this case, an array of database update queries (think `["name=Bob", "email=bob@aol.com"]`). We are going to get the array right back. But what is in the array?

### Diving into the unknown
![Event Horizon space folding thingie](https://www.dropbox.com/s/cg5k2z7g5o15fp3/event-horizon.jpg?dl=0) Thanks to *Event Horizon* I knew what a [Dyson sphere](http://www.universetoday.com/131680/search-alien-signals-around-tabbys-star/) looked like, which is relevant to the news that SETI researchers are trying to explain a bizarre light signature coming from Tabby's star in the Cygnus constellation.

So `ids = self.map(&:id)` is passing in `:id` as a method. We normally think of `id` in this context of models as a model attribute. However, in Ruby World, everything is an object. In this case, our instance variable `id` in the model has baked into it a `to_proc` method. This specific syntax ("pretzel colon") (redundant, all colons looks like pretzels -ed.) will call this `to_proc` method. That's not entirely correct but I wanted to make that joke.

### `to_proc`
![Tupac Shakur to_proc I'm sure](https://www.dropbox.com/s/vqztymgfpyo7sj4/tupac.jpg?dl=0)
So we know putting an ampersand signals that we take a block as an argument. If that argument is a symbol which is marked by leading colon, then what Ruby does is check to see if that object is in fact already a Proc (or rather, points to a Proc, since its a symbol). If it is not a Proc, then Ruby calls `to_proc` on the Symbol.

### Procs Revisited
Ah yes, Procs. ![Good ol Orange Crocs with socks](https://www.dropbox.com/s/j3ul53h6f1ynsdp/crocs.jpg?dl=0). Procs and Blocks are apparently identical save for one special feature - Procs exist as Ruby objects. Like any good cloth diaper, we can name Procs and lovingly reuse them. Blocks, like disposable diapers, clean up your mess once and get chucked in the bin.

```ruby
myProc = Proc.new do |x|
	x = x + 1
end
```

#### Lambda Lambda Lambda
We should mention the third part of the trinity, Lambdas. A Little Lambda is like a Proc and Block in that it is a bunch of code resembling a named method that we in fact pass into methods. Like Procs, Lambdas can be named and reused. They are in fact defined in the Proc class (HUGE 10-GALLON HAT TIP to <https://blog.newrelic.com/2015/04/30/weird-ruby-part-4-code-pods/>). So the following works:

```ruby
myLambda = lambda { |frat| puts "#{frat} #{frat} #{frat} and Omega Mu"}
myLambda.call("Lambda")
# => "Lamdba Lamdba Lamdba and Omega Mu"
```

You can also declare Lambdas with the 'stabby Lambda syntax' - such a good name.

```ruby
myLambda -> { |frat| puts "#{frat} #{frat} #{frat} and Omega Mu"}
```

![Tri-Lambs portrait from Revenge of the Nerds](https://www.dropbox.com/s/uafuhl98evil5kw/trilamb.jpg?dl=0)

You can also declare a Lambda with `Proc.new({ some code }, TRUE)`, generally omitting the parenthesis in practice (not the curlies, though). The default is false and you can omit the comma and explicitly declaring the Proc to be a Proc by adding the `,false` to the definition.

There are a couple of important Lambda-vs-Proc distinctions to make. For one, Lambdas enforce argument counts, Procs and Blocks do not. Meaning, you have to pass the right number of arguments to a Lambda or it throws an error. Procs and Blocks don't enforce this. They came to party.

For another, Lambdas have a different return behavior. Lambdas return from their own context, and Procs return from the surrounding context instead. HUH?

This means Lambdas are dangerously close to being named methods. They do their thing and can return a value as you would expect if you had a named method and an explicit return value. Procs do not have this - they do their thing and pass their return value to the surrounding/calling function. This matters when you are iterating over a collection. The `return` keyword in a Block or Proc gets you out of the iterating - it is normal `return` keyword behavior that ends the operation of the calling method. Lambdas will return a value to the calling method, but then keep on iterating - the calling method is not itself calling `return`.

### Getting Closure
These are all forms of closures. Closures are just reusable code bits you can pass to methods. **Methods are, in fact, a type of closure** ![Mind Blown](https://www.dropbox.com/s/v8f8o8h8dqwvm8p/tim-and-eric-mind-blown.gif?dl=0) <https://scotch.io/tutorials/understanding-ruby-closures> Closures can be passed around like any other object and they store the values of the variables they had access to when they were called, like little Han Solos encased in carbonite, asking about Leia when de-thawed.

### To_Proc Once More
So to wrap up our example and discussion, when we passed in `&:id` Ruby looked to see if we had defined a Proc named `id` and we had not made that explicitly. So Ruby converts that into a Proc as follows:

```ruby
# step 1
ids = self.map(&:id)

# step 2
ids = self.map(&:id.to_proc)

#step 3
ids = self.map{|selfObj| selfObj.id}

# => [id1, id2, id3...]
```

What this clever little code did was the equivalent of:

```ruby
ids = [];

self.each |model| do
    ids.push(model.id)
end
```

With `map` the code iterates over the collection and returns a transformed collection. Passing the `&:id` calls `:id.to_proc` which treats `id` as a method to call on each object in the collection. This, then, applies `id` to each item in the collection - in this case, `id` is an instance variable so we are using the getter methods baked into the `attr_accessor` for this object, because everything is an object in Ruby, we are all one, and namaste.

Big assumption alert: does each item have an `id` already? For our purposes of a SQL update, this is a fair assumption, though it would be a different story for an UPSERT type command.
