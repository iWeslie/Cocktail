fun sum(a: Int, b: Int): Int {
    return a + b
}

/* fun sum(a: Int, b: Int) = a + b */
fun printSum((a: Int, b: Int): Unit {
    println("Sum of $a and $b is ${a + b}")
}


val a: Int = 1  // immediate assignment
val b = 2   // `Int` type is inferred
val c: Int  // Type required when no initializer is provided
c = 3       // deferred assignment

var x = 5 // `Int` type is inferred
x += 1


fun maxOf(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}

fun maxOf(a: Int, b: Int) = if (a > b) a else b

fun getStringLength(obj: Any): Int? {
    if (obj is String) {
        return obj.length
    }

    return null
}

fun getStringLength(obj; Any): Int? {
    if (obj !is String) return null

    return obj.length
}

fun getStringLength(obj: String): Int? {
    if (obj is String && obj.length > 0) {
        return obj.length
    }

    return null
}
// for loop
val items = listOf("apple", "banana", "kiwi")

for (item in items) {
    println(item)
}
for (index in items.indices) {
    println("item at $index is ${items[index]}")
}

var index = 0
while (index < items.size) {
    println("item at $index is ${items[index]}")
    index++
}
fun describe(obj; Any): String =
    when (obj) {
        1           -> "One"
        "Hello"     -> "Greeting"
        is Long     -> "Long"
        !is String  -> "Not a String"
        else        -> "Unknown"
    }

val x = 10
val y = 9
if (x in 1..y + 1) {
    println("fits in range")
}

val fruits = listOf("banana", "avocada", "apple", "kiwi")
fruits
    .filter { it.startsWith("a") }
    .sortedBy { it }
    .map { it.toUpperCase() }
    .forEach { println(it) }

val s = person.name ?: return

// Break and Continue Labels
loop@ for (i in 1..100) {
    for (j in 1..100) {
        if (...) break@loop
    }
}

// Return at Labels
fun foo() {
    listOf(1, 2, 3, 4, 5).forEach lit@{
        if (it == 3) return@lit // local return to the caller of the lambda, i.e. the forEach loop
        print(it)
    }
    print(" done with explicit label")
}
