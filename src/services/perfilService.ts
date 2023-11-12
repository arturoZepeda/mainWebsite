import http from "@/http-common";

class PerfilService {
  getAll(): Promise<any> {
    return http.get("/about?aboutId=654dbf1f088d780f4aea74f7");
  }
}
export default new PerfilService();