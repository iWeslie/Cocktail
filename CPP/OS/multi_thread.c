#include <process.h>
#include <stdio.h>

int i;

void newThread(void* pArguments) {
    for (int i = 0; i < 15; i++) {
        printf("new thread: %d\n", i);
        _endThread();
    }
}

void main() {
    _beginThread(newThread, 0, NULL);
    for (size_t i = 0; i < 15; i++) {
        printf("main thread: %d\n", i);
    }
}
