/** fac_call.s */
.global _start
.extern factorial
.equ    ni, 20
.text
_start:
        mov     r0, #ni
        bl      factorial
stop:
        b       stop
.end