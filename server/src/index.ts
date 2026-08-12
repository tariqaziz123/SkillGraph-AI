import "dotenv/config";

import app from "./app";
import { testConnection } from "./testConnection";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`);

  await testConnection();
});