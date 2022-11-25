function testBuffer(){
    const buf1 = Buffer.alloc(2,15);
    console.log(buf1);

    const buf2= Buffer.allocUnsafe(3);
    buf2.fill(1);
    console.log(buf2);

    const buf3= Buffer.alloc(10);
    buf3.write('hello');
    console.log(buf3);

    const buf4= Buffer.from("hello world");
    console.log(buf4,buf4.toString());
}

module.exports = {testBuffer};