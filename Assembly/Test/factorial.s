.global factorial
factorial:
        mov     r8, r0
        mov     r9, #0
        sub     r0, r8, #1
loop:
        mov     r1, r9
        umull   r8, r9, r0, r9
        mla     r9, r1, r0, r9
        subs    r0, r0, #1
        bne     loop
        ldr     r0, =0xfffffff0
        stmia   r0, {r8, r9}
        mov     pc, lr 