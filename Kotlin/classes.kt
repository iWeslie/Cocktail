class Empty

class Invoice {...}

class Person constructor(firstName: String) { ... }
class Person(firstName: String) { ... }

class InitOrderDemo(name: String) {
    val firstProperty = "First property: $name".also(::println)

    init {
        println("First initializer block that prints ${name}")
    }

    val secondProperty = "Second property: ${name.length}".also(::println)

    init {
        println("Second initializer block that prints ${name.length}")
    }
}


class Customer(name: String) {
    val customerKey = name.toUpperCase()
}

class Person(val firstName: String, val lastName: String, val age: Int) { ... }

class Customer public @Inject constructor(name: String) { ... }


class Person {
    constructor(parent: Person) {
        parent.children.add(this)
    }

    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}

class Constructors {
    init {
        println("Init block")
    }

    constructor(i: Int) {
        println("Constructor")
    }
}

val invoice = Invoice()

val customer = Customer("Joe Smith")


// Inheritance

class Example

open class Base(p: Int)

class Derived(p: Int) : Base(p)

class MyView : View {
    constructor(ctx: Content) : super(ctx)

    constructor(ctx: Content, attrs: Attributes) : super(ctx, attrs)
}

// overriding

open class Base {
    open fun v() { ... }
    fun nv() { ... }
}

class Derived() : Base() {
    override fun v() { ... }
}

open class AnotherDerived() : Base() {
    final override fun v() { ... }
}

open class Foo {
    open val x: Int get() { ... }
}

class Bar1 : Foo() {
    override val x: Int = ...
}

interface Foo {
    val count: Int
}

class Bar1(override val count: Int) : Foo

class Bar2 : Foo {
    override var count: Int = 0
}

open class Base(val name: String) {

    init { println("Initializing Base") }

    open val size: Int =
        name.length.also { println("Initializing size in Base: $it") }
}

class Derived(
    name: String,
    val lastName: String
) : Base(name.capitalize().also { println("Argument for Base: $it") }) {

    init { println("Initializing Derived") }

    override val size: Int =
        (super.size + lastName.length).also { println("Initializing size in Derived: $it") }
}

// abstract class 

open class Base {
    open fun f() {}
}

abstract class Derived : Base() {
    override abstract fun f()
}
