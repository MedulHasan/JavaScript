try {
    console.log('i am line 1');
    throw new Error('error...')
    console.log('i am line 2');
    console.log('i am line 3');
} catch(e) {
    console.log(e.message);
} finally {
    console.log('finally i am print must');
}