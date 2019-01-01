.global _start
.text
_start:
        ldr     r0, 0x12345678
dec2int:
        mov     r1 , #0
        mov     r2, #8
        mov     r5, #10
dec2int_L1:
        mul     r4, r1, r5
        mov     r0, r0, ror #28
        and     r3, r0, #0xF
        add     r1, r4, r3
        subs    r2, r2, #1
        bne     dec2int_L1
stop:
        b       stop
.end