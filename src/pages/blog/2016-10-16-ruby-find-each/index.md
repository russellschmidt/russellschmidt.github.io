---
path: "/blog/my-own-find-each/"
date: "2016-10-16T11:12:33.962Z"
title: "My Own Find Each"
type: "blog"
---

One of my current assignments from Bloc is implementing my very own `find_each` function. One of the beauties of Ruby is the ease at which you can iterate over collections.

```ruby
some_array = %w{apple banana corn dog ear}
some.array.each {|organic_thing| puts "i have an #{organic_thing}"}
```

That example will output that line once for each item in the collection. Very easy, easy to read, without a ton of extraneous variables or worrying about incrementing and limits as you would in a traditional `for` loop.

To understand what the heck I am supposed to do here, I need to venture into the world of *Blocks* and *Yield*. I happen to think this is some of the cleverest Ruby, and thus is a bit tricky to conceptualize because Ruby can veer into koan and haiku territory, where very little code is doing a whole lot of stuff.

## GREAT Starter Site on the Topic
I cannot recommend this page enough: <http://mixandgo.com/blog/mastering-ruby-blocks-in-less-than-5-minutes>. It is a great overview of `block` and `yield` in Ruby.

### Block
A `block` is generally a method that you pass into another method. They are very common in Ruby, with the familiar syntax of:

```ruby
anArray.map { |el| puts "this is #{el}" }

# or

someObjectList.each do |obj|
	puts obj.name
end
```

The blocks here are what is between the curlies {} and do/end pairs. We declare a temp variable representing the current element of the collection by putting it between pipes || (called the 'block parameter') and then run the code inside the do/end or curlies. Here, we had the code output something regarding the current element to console, but we could just as well output something random.

There is nothing to a block! You've been using it all along. It is just some code you pass in to a do-end or {}.

### `&amp;Block`
If you want to pass in a method to Ruby as an argument, you can! Why not? The `&amp;Block` syntax is pretty common in Ruby, so it is good for me to really get my head around this.

We use `&amp;Block` to pass a reference to a block into the code. Here is an example I made from tooling around in irb.

```bash
2.3.0 :009 > def textmagic(word, &block)
2.3.0 :010?>   block.call(word)
2.3.0 :011?>   end
 => :textmagic
2.3.0 :012 > textmagic("magic"){|w| puts "w"}
w
 => nil
```

So I have a block in my arguments. I can then reference said block inside my method, and even pass in a local variable to the block parameter. Note that I call the block with `block.call` - pretty straightforward.

### Yield
What `yield` does in Ruby is identical to writing `block.call`! Just some syntactic sugar, sweet thing. It runs the block passed inside the method. In other words, it specifies where in the method the additional code you are inserting via block is going to go.

With do/end and {}, we are running the code between the magic words or curlies. In a typical use case, we are iterating over a collection and applying the block to each element. However, with a method we write, we might need a more nuanced application of the block. `Yield` allows for a custom placement of the code block within the method, with optional arguments passed to `yield(arg1, arg2...)` then as before becoming available as block parameters.

#### Conclusion
Blocks and Yields have taken me a while to wrap my head around, despite, in hindsight, realizing that anonymous functions in JavaScript, which I use all the time as callbacks and whatnot, are blocks. The syntax with Ruby as usual is concise which presents an early learning curve 'what am I even looking at' reaction that later flowers into a resentment at other languages for making me type so much or get buried in parenthesis and curly piles.
