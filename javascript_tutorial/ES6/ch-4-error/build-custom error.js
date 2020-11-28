class CustomError extends Error {
    constructor(msg) {
        super(msg)

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try {
    console.log('i am line 1');
    throw new CustomError('build a custom error...')
    console.log('i am line 2');
    console.log('i am line 3');
} catch(e) {
    console.log(e.message);
} finally {
    console.log('finally i am print must');
}