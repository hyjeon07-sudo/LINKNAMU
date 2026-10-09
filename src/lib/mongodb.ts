import { MongoClient } from "mongodb";

// 개발 모드에서는 핫 리로드 때마다 연결이 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

function getClient() {
  if (globalForMongo._mongoClientPromise) return globalForMongo._mongoClientPromise;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 없습니다. .env.local을 확인해 주세요.");
  }

  const clientPromise = new MongoClient(uri).connect().catch((error) => {
    // 연결에 실패하면 캐시를 비워 다음 요청에서 다시 시도합니다.
    globalForMongo._mongoClientPromise = undefined;
    throw error;
  });
  globalForMongo._mongoClientPromise = clientPromise;
  return clientPromise;
}

export async function getDb() {
  const client = await getClient();
  return client.db(process.env.MONGODB_DB ?? "linknamu");
}
