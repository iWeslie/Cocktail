.global _start
.text
_start:
        ldr     r0, =0x55555555
        mov     r2, #0
bit_exchage:
        mov     r1, #32
bitex_L:
        and     r3, r0, #1
        orr     r2, r3, r2, lsl #1
        mov     r0, r0, lsr #1
        subs    r1, r1, #1
        bne     bitex_L
stop:
        b       stop
.end