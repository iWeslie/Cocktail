fun main(args: Array<String>) {
    val xs = listOf(listOf(1, 2, 3))
    print(xs.flatMap{ it.map { it * 2 }})
}
