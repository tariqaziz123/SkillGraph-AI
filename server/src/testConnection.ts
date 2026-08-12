import driver from "./config/db";

export async function testConnection() {
  try {
    await driver.verifyConnectivity();

    console.log("✅ Connected to CognoDB successfully!");
  } catch (error) {
    console.error("❌ CognoDB connection failed:", error);
  } finally {
    await driver.close();
  }
}