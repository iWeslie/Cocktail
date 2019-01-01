void my_strcpy(const char *src, char *dst);
int __main()
{
    const char *a = "Hello World!";
    char b[20];
    my_strcpy(a, b);
}

void my_strcpy(const char *src, char *dst)
{
    __asm
    (
        "lop1:
                ldrb    r4, [r0], #0x1
                strb    r4, [r1], #0x1
                cmp     r4, #0x0
                bne     lop1"
    );
}