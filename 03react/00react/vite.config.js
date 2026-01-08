import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 모든 IP 주소에서 접속 허용
    // 또는 특정 IP만 허용하고 싶다면 '192.168.1.100'과 같이 지정 가능
  },
});
