/**
 * main.c
 */
void __main(void) 
{
    int var = 0xAA;
    __asm 
    (
       "mov     r5, #0xAA;\
        mov     r6, #0xBB;\
        cmp     r1, #0;"
    );
    while(1);
}
