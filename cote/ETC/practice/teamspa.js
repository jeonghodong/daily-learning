const directory = [
  "/",
  "/hello",
  "/hello/tmp",
  "/root",
  "/root/abcd",
  "/root/abcd/etc",
  "/root/abcd/hello",
];
const command = ["mkdir /root/tmp", "cp /hello /root/tmp", "rm /hello"];
const resultExample = [
  "/",
  "/root",
  "/root/abcd",
  "/root/abcd/etc",
  "/root/abcd/hello",
  "/root/tmp",
  "/root/tmp/hello",
  "/root/tmp/hello/tmp",
];

const directorySet = new Set(directory);
