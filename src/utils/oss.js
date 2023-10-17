import OSS from "ali-oss";
const ossClient = async () => {
  const res = await fetch("/api/oss");
  const { data } = await res.json();
  const client = new OSS({
    region: data.region,
    accessKeyId: data.accessKeyId,
    accessKeySecret: data.accessKeySecret,
    bucket: data.bucket,
  });
  return client;
};

let client = null;
const upload = async (file) => {
  if (!client) {
    client = await ossClient();
  }
  const res = await client.put(file.name, file);
  return res;
};

export default upload;
